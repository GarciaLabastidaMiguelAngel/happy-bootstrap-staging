# Customer Identity, Access, Risk and Session Architecture

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0009

## Purpose

Define the target technical direction for customer-facing identity and access so normal authentication and authorization no longer depend indefinitely on high-cost core-banking transactions, while preserving the current mechanism until migration is proven and approved.

This model is for BANK CUSTOMERS. Corporate/workforce identity remains a separate concern and may continue to use the institutionally approved Microsoft 365 / enterprise identity stack.

## Core distinction

LDAP / DIRECTORY != IDENTITY PROVIDER != AUTHORIZATION SERVER != RISK ENGINE != SESSION STORE != DEVICE BINDING.

Do not collapse these responsibilities into one product merely because one product can implement several of them.

Required logical capabilities are:
- customer identity directory / account profile;
- credential/authenticator store;
- authentication orchestration;
- OAuth/OIDC authorization server;
- session management;
- token issuance and key management;
- API authorization/scopes;
- device/browser binding and authenticator registration;
- step-up/MFA;
- adaptive risk decisioning;
- onboarding/recovery;
- revocation / session-risk state;
- audit and security evidence.

## Java-first candidate stack

Java First is a preference, not permission to reinvent IAM.

Primary product candidates to evaluate in LAB:

### Keycloak
Open-source IAM/IdP candidate implemented for the Java/OpenJDK ecosystem, with OIDC/OAuth2, session management, passkeys/MFA, step-up capabilities, LDAP/AD federation, extensibility and current OpenJDK support.

Treat Keycloak as the first full-product candidate because it already implements broad IAM capabilities.

### Spring Security Authorization Server
Spring-native authorization-server foundation for cases where the bank requires deeper product-specific customization and accepts owning more IAM implementation responsibility.

Do not select it merely because it is Spring. Compare the engineering/security/operations burden against a mature IdP product.

### LDAP directory
If a separate customer LDAP directory is justified, evaluate a production-capable Java LDAP implementation such as OpenDJ/OpenIdentityPlatform using current evidence.

ApacheDS may be useful for test/development, but its own project currently warns that it is not considered production-ready due to data-corruption concerns.

LDAP is OPTIONAL. A customer IAM product may use its own production database as the customer identity/credential store if that gives a safer and simpler architecture.

## Password / credential migration principle

Current state may require a core transaction to validate a customer password.

Target migration path:

LEGACY CORE VALIDATION
-> IAM FACADE / IDP
-> validated migration method
-> NEW CREDENTIAL AUTHORITY
-> core validation removed from normal login.

Never extract, copy or reconstruct plaintext passwords.

Migration options require evidence and security approval, for example:
- opportunistic migration on successful login: validate once against the legacy mechanism, then create the new approved password hash from the password the customer just supplied to the new authentication flow;
- compatible hash import only if the legacy hash format and policy make safe import technically and institutionally valid;
- customer re-enrollment/reset when direct migration is not acceptable.

The exact method is UNKNOWN until the legacy credential mechanism, security policy, FIPS requirements and migration constraints are evidenced.

## Password protection

Password storage must use an approved adaptive one-way hashing scheme and policy.

Candidate standards guidance includes OWASP password-storage recommendations. Keycloak currently supports Argon2 as its default non-FIPS password hashing algorithm and PBKDF2 variants for FIPS-oriented deployments.

Do not hard-code one algorithm before institutional cryptography/FIPS requirements are known.

## OAuth / OIDC principle

OAuth and OpenID Connect do not require third-party identity delegation. They remain useful for first-party bank clients and APIs.

OIDC may provide authentication semantics while OAuth provides delegated/authorized API access semantics within the bank ecosystem.

Token format is an independent architecture choice:
- reference/opaque access token;
- self-contained JWT access token;
- sender-constrained token where justified.

Do not equate OIDC with social/federated login and do not equate OAuth with JWT.

## Web BFF direction

For the web channel, prefer:

Browser
-> opaque secure session cookie
-> Web BFF
-> server-side OAuth/OIDC session/tokens
-> gateway/resource APIs.

Do not expose access/refresh tokens to browser storage merely for convenience.

This preserves the existing BI-0003 principle that the browser holds a reconstructible projection, not customer-authentication authority.

## JWT performance vs immediate revocation

A self-contained JWT allows resource servers/gateways to validate signature/claims locally and avoid token introspection on every request.

However:

STATELESS JWT + IMMEDIATE REVOCATION
is a contradiction unless additional state/signals are introduced.

Candidate bounded model:

short-lived signed JWT
+ `sid` / `jti` / authorization context claims
+ central session/risk state (for example Redis if approved)
+ event-driven invalidation/update to gateway local caches
+ refresh-token/session control
-> fast local validation with bounded immediate-risk enforcement.

If the bank requires immediate revocation, the gateway must consult or consume authoritative revocation/risk state at an acceptable latency. Do not claim purely stateless immediate revocation.

## Adaptive risk decision model

Risk evaluation may be asynchronous where policy permits.

Canonical decisions:
- ALLOW;
- DENY;
- STEP_UP_REQUIRED;
- SESSION_RESTRICTED / SCOPE_REDUCED where policy defines it.

Candidate flow:

Login / binding check
-> minimum synchronous security gate
-> session established
-> asynchronous risk enrichment
-> RiskDecision event
-> session/risk state updated
-> gateways/BFFs receive/observe updated state
-> next protected request is allowed, denied or challenged.

A background risk decision must never rely on the frontend voluntarily enforcing the outcome.

## Step-up

Use standard step-up semantics where applicable rather than custom ad-hoc response codes.

RFC 9470 is a standards candidate for OAuth step-up challenge semantics: a resource server can indicate that the authentication strength or recentness associated with the current access token is insufficient.

Step-up may be triggered by:
- high-risk transaction;
- write scope;
- sensitive information access;
- stale authentication age;
- risk-engine decision;
- device/binding anomaly.

## Binding / known-device direction

A remembered-device cookie is a risk signal, not proof of device possession by itself.

For web, evaluate WebAuthn/passkeys and cryptographic authenticators as the stronger direction for customer authentication/step-up. WebAuthn Level 3 is currently a W3C Candidate Recommendation; adoption must follow browser/platform and bank-policy evidence.

For sender-constrained OAuth clients, evaluate DPoP (RFC 9449) or mTLS where the channel/runtime supports it.

Browser/device binding must be modeled separately for web and native/mobile because the trust and secure-storage capabilities differ.

## Risk and UX signaling

SSE/WebSocket may be used to improve UX, for example to notify a logged-in web session that a challenge is now required.

But:
SSE NOTIFICATION != AUTHORIZATION ENFORCEMENT.

Enforcement remains server-side at the BFF/gateway/resource server.

## API scope model

Scopes/permissions should be derived from governed capabilities and user/session state.

Example conceptual separation:
- read customer profile;
- read balances;
- initiate transfer;
- confirm transfer;
- view restricted information.

Risk/step-up may change what a session is currently authorized to execute without changing the customer's durable identity.

## Security standards research baseline

Research/adoption candidates include:
- RFC 9700 OAuth 2.0 Security Best Current Practice;
- OpenID Connect Core;
- FAPI 2.0 Security Profile for high-security API ecosystems;
- RFC 9449 DPoP;
- RFC 9470 OAuth Step Up Authentication Challenge Protocol;
- WebAuthn;
- applicable institutional cryptography, authentication, fraud and privacy rules.

Do not claim FAPI compliance unless conformance requirements are actually implemented and tested.

## POC sequence

1. Model current login/core-transaction path.
2. Stand up a Java-first IdP candidate in LAB with synthetic users.
3. Implement Web BFF login/session using opaque browser session state.
4. Issue protected API access tokens and validate them at Spring Cloud Gateway/resource server.
5. Add risk decision state with ALLOW/DENY/STEP_UP_REQUIRED.
6. Demonstrate post-login asynchronous risk decision and deterministic gateway enforcement.
7. Demonstrate step-up with a supported authenticator.
8. Measure core-transaction reduction, latency and security behavior.
9. Design legacy-password migration only after real evidence is available.

## Goal

Create a customer IAM plane that removes avoidable authentication load from the banking core, provides standard OAuth/OIDC/API authorization and adaptive risk enforcement, supports progressive binding/step-up, and remains compatible with the bank's existing governance and migration constraints.
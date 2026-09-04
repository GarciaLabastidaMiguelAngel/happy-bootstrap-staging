# BI-0005 — Customer IAM and Adaptive Access POC

Status: READY_FOR_DISCOVERY_AND_PLANNING
Direction revision: DIRECTION-0009
Related initiatives: BI-0003 Web BFF, BI-0004 Spring Cloud Gateway, BI-0001 Customer Position

## Purpose

Prove a customer-facing Java-first identity/access architecture that can reduce avoidable password-validation transactions against the banking core while introducing standard OAuth/OIDC, session management, adaptive risk and step-up behavior.

This POC does not migrate real customer credentials yet.

## POC assumptions

- Use synthetic LAB customers first.
- Existing core password validation remains the legacy baseline.
- No plaintext password migration or production credential copy is allowed.
- Corporate Microsoft 365 identity is out of scope; this POC is customer identity.
- Real risk-engine, core, LDAP and cryptography integration are plugged in only when evidence/authorization is available.

## Candidate architecture

Web Browser
-> Web BFF
-> Customer IdP / Authorization Server
-> session/risk state
-> Spring Cloud Gateway
-> Gravity Plus/resource APIs

Parallel:
login/binding/security signals
-> Risk Adapter
-> asynchronous risk evaluation
-> RiskDecision event
-> session/risk state
-> gateway/BFF enforcement.

## Java-first LAB candidates

Compare at least:
- Keycloak as full IAM/IdP product candidate;
- Spring Security Authorization Server where product-specific control justifies additional engineering ownership;
- OpenDJ only if a separate LDAP customer directory is shown to be required.

Do not make LDAP mandatory before the identity-data/credential model is understood.

## POC slices

### P0 — Current-state mapping
Document the existing login path, password-validation core transaction, risk checks, second factor, binding signals, session/token behavior and downstream API authorization.

### P1 — Synthetic customer IdP
Stand up the selected Java-first candidate and create synthetic users with approved LAB-only credentials.

### P2 — Web BFF session
Use an opaque Secure/HttpOnly/SameSite session cookie for the browser; keep access/refresh tokens server-side.

### P3 — OAuth resource access
Issue governed scopes/access tokens for selected BI-0003/BI-0004 APIs. Compare opaque/reference versus JWT/self-contained behavior where useful.

### P4 — Fast JWT enforcement experiment
If JWT is selected for the experiment:
- gateway validates signature/issuer/audience/scopes locally;
- use short lifetime;
- include session/token identifiers required for revocation correlation;
- keep central risk/session state;
- measure state lookup/local-cache/event strategies.

### P5 — Async risk and immediate enforcement
Emit synthetic ALLOW/DENY/STEP_UP_REQUIRED decisions after login and prove that the next protected action is deterministically enforced by server-side components.

### P6 — Step-up
Use a standards-based challenge model and supported authenticator in LAB. Evaluate RFC 9470 semantics and WebAuthn/passkey where compatible.

### P7 — Migration design only
After the legacy password mechanism is evidenced, design an approved migration path. Do not execute real migration from this POC.

## Measurements

Capture:
- core password-validation transactions avoided in the synthetic/new-user path;
- login p50/p95/p99;
- token/gateway validation latency;
- Redis/session-state dependency cost if used;
- time from risk decision to enforcement;
- false stale authorization window;
- step-up completion time;
- resource-server call overhead;
- recovery/logout/revocation behavior;
- operational complexity.

## Success criteria

- normal LAB customer login does not require core password validation for users already owned by the new IAM authority;
- web browser receives no access/refresh token in browser storage;
- OAuth/OIDC contracts are standards-based;
- risk can transition a session from ALLOW to DENY or STEP_UP_REQUIRED after login;
- the gateway/BFF enforces that transition server-side;
- any JWT performance advantage is measured without falsely claiming stateless immediate revocation;
- selected IdP/directory choice is justified by capabilities and operating cost;
- legacy customer migration remains separately gated.

## Goal

Demonstrate that customer identity can become a dedicated governed platform capability rather than a repeated core-banking transaction, while improving API authorization, adaptive risk and future web/mobile binding.
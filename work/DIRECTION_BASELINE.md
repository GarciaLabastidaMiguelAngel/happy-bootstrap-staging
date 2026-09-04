# Project Direction Baseline

Status: ACTIVE
Direction revision: DIRECTION-0009
Previous direction: DIRECTION-0008
Previous accepted baseline commit: `fe4c80b01c1e60e56b841badf2c84bd164130cec`
Repository role: Happy Work staging / prompt-governance control plane
Current operating emphasis: LAB / fastest safe construction, institutional-platform reuse, auditable transformation, banking POCs, customer IAM/adaptive access, CQRS projection consistency and governed job-orchestration evolution

## Continuity rule

DIRECTION-0009 incorporates DIRECTION-0008 and all earlier accepted direction unless explicitly overridden below.

The exact DIRECTION-0008 baseline remains recoverable from Git history. The immutable rc2 snapshot remains historical and MUST NOT be rewritten in place.

DIRECTION-0009 is additive, not a reset.

## 1. Customer identity is a dedicated banking capability

Architecture AI now distinguishes customer identity from workforce/corporate identity.

Corporate/workforce identity may continue to use the approved Microsoft 365 / enterprise identity mechanisms.

Customer identity requires a governed capability set for:
- identity/account directory;
- credentials/authenticators;
- authentication orchestration;
- OAuth/OIDC authorization server;
- sessions/tokens/keys;
- API scopes/authorization;
- browser/device binding;
- MFA/step-up;
- adaptive risk;
- onboarding/recovery;
- revocation/risk state;
- audit/evidence.

Governed by:
`work/CUSTOMER_IDENTITY_ACCESS_RISK_AND_SESSION_ARCHITECTURE.md`

LDAP, IdP, authorization server, risk engine, session store and binding are separate logical responsibilities. Do not collapse them into one concept.

## 2. Java-first IAM follows reuse before build

Java First remains a technology preference, not permission to implement an IAM product from scratch.

Initial LAB candidates:
- Keycloak as a full open-source Java/OpenJDK IAM/IdP candidate;
- Spring Security Authorization Server where deeper bank-specific customization justifies additional ownership;
- a production-capable Java LDAP such as OpenDJ only if a separate LDAP customer directory is actually required.

ApacheDS may be useful for development/testing but is not a production candidate while its own project declares production-readiness concerns.

LDAP is optional. If a mature IdP's production database provides the safer/simpler customer credential authority, do not add LDAP for pattern purity.

## 3. Remove avoidable password-validation load from the core progressively

Current core password validation remains the legacy baseline until an approved migration exists.

Target:

LEGACY CORE VALIDATION
-> customer IdP facade
-> validated migration path
-> new credential authority
-> normal login no longer requires a core transaction.

Never extract/reconstruct plaintext passwords.

Migration may use opportunistic re-hash on successful legacy validation, compatible approved hash import, or customer re-enrollment/reset, depending real legacy/security/FIPS evidence.

UNKNOWN remains UNKNOWN until the actual credential mechanism is known.

## 4. OAuth/OIDC is first-party compatible; token format is separate

OAuth/OIDC may be used for first-party bank channels and APIs; federated/social delegation is not required.

Do not conflate:
- OIDC with third-party identity delegation;
- OAuth with JWT;
- JWT with session management.

Token options remain evidence-driven:
- opaque/reference tokens;
- signed self-contained JWTs;
- sender-constrained tokens where justified.

For BI-0003 web BFF, retain the preferred model:

Browser
-> opaque Secure/HttpOnly/SameSite session cookie
-> BFF server-side OAuth/OIDC context
-> gateway/resource APIs.

Do not place access/refresh tokens in browser storage for convenience.

## 5. JWT performance and revocation are explicitly reconciled

Self-contained JWT can reduce introspection latency because gateway/resource servers validate signature/claims locally.

However, purely stateless JWT does not provide immediate revocation by itself.

Candidate governed pattern:

short-lived signed JWT
+ session/token identifiers (`sid`/`jti` or equivalent)
+ central session/risk state (Redis only if approved)
+ event-driven invalidation/update to gateway-local state
+ controlled refresh/session lifecycle
-> fast validation with bounded immediate-risk enforcement.

If policy requires immediate revocation, some authoritative state/signal is required. Do not claim otherwise.

## 6. Adaptive risk is asynchronous where policy allows, enforcement remains deterministic

Risk/security/fraud remains cross-cutting from DIRECTION-0008.

Candidate decisions:
- ALLOW;
- DENY;
- STEP_UP_REQUIRED;
- SESSION_RESTRICTED / scope-reduced where policy defines it.

Candidate flow:

minimum synchronous login/binding gate
-> session established
-> asynchronous risk enrichment
-> RiskDecision event
-> authoritative session/risk state update
-> gateway/BFF enforcement on protected requests.

SSE/WebSocket may notify the UX of a new challenge state but is not the authorization-control boundary.

Use standards-based step-up semantics where applicable; RFC 9470 is an explicit research/adoption candidate.

## 7. Binding evolves toward cryptographic authentication, not trusted cookies alone

A remembered-device cookie is a risk signal, not proof of device possession.

For web, evaluate WebAuthn/passkeys and approved cryptographic authenticators for stronger authentication/step-up.

For OAuth sender constraint, evaluate DPoP (RFC 9449) or mTLS where channel/runtime support and bank policy justify it.

Web and native/mobile binding must remain separate designs because secure-storage/trust characteristics differ.

## 8. BI-0005 becomes the customer IAM proof

`work/banking/BI-0005_CUSTOMER_IAM_ADAPTIVE_ACCESS_POC.md` is the first governed customer-IAM/adaptive-access POC.

It uses synthetic users first and must prove:
- Java-first IdP operation;
- Web BFF server-side session authority;
- OAuth resource access;
- measured JWT/reference-token behavior;
- async ALLOW/DENY/STEP_UP transitions;
- deterministic gateway enforcement;
- step-up capability;
- no real password migration until legacy evidence is available.

## 9. Banking CQRS now has explicit projection-consistency semantics

Governed by:
`work/BANKING_CQRS_PROJECTION_CONSISTENCY_MODEL.md`

Logical target:

core authoritative transaction
-> Exadata/read model where evidence confirms
-> Redis semantic hot projection
-> BFF/session projection
-> browser/native projection.

CQRS does not require separate infrastructure for every projection.

For each semantic element preserve authority, classification, volatility, freshness, version/change marker, projection locations, invalidation/reconciliation rule and consumer views.

Highly volatile values such as balances are cacheable only when an evidenced freshness contract and propagation/reconciliation mechanism makes that safe.

Preferred update evidence order:
1. authoritative event/CDC;
2. source version/change log;
3. deterministic refresh/reconciliation;
4. TTL as explicitly weaker fallback.

If none meets required freshness, the element remains LIVE_SOURCE_REQUIRED.

Semantic data granularity does not imply one SQL request per field; missing fields are grouped into minimal efficient source operations/query plans.

## 10. Frontend/channel consistency becomes a projection problem

Views declare required semantic elements and freshness classes.

Frontend components should expose deterministic state such as READY, REFRESHING, STALE_ALLOWED, STALE_BLOCKED, UNAVAILABLE and STEP_UP_REQUIRED.

Online clients may consume approved delta notifications, but reconnect/recovery must support version/checkpoint-based resynchronization rather than trusting uninterrupted event delivery.

## 11. Control-M modernization is classification-driven

Governed by:
`work/JOB_ORCHESTRATION_AND_CONTROLM_EVOLUTION_MODEL.md`

Do not either freeze Control-M forever or replace it by ideology.

Each existing malla/workload must be understood and classified, for example:
- KEEP_CONTROL_M;
- OPENSHIFT_JOB_OR_CRONJOB;
- SPRING_BATCH_JOB with separate scheduler;
- SPRING_CLOUD_TASK/DATA_FLOW candidate;
- EVENT_DRIVEN_REPLACEMENT;
- WORKFLOW_SCHEDULER_POC.

Spring Batch is a batch framework, not a scheduler.

Java-first/open candidates such as Spring Cloud Task/Data Flow or Apache DolphinScheduler may be evaluated only against real Control-M dependency, recovery, SLA, ownership and operational requirements.

Simple OpenShift Jobs/CronJobs should be preferred where the workload genuinely needs no enterprise DAG capability.

## 12. Existing institutional reuse remains mandatory

All DIRECTION-0008 rules continue:
- current institutional/regulatory artifacts remain a near-term priority while generation becomes increasingly deterministic;
- exact Banxico/authority obligations require official/institutional evidence;
- Glo/archetypes/OpenShift pipelines are discovered/reused before replacement;
- REUSE -> CONFIGURE/EXTEND/ADAPT -> MEASURE -> REPLACE ONLY WITH EVIDENCE;
- API Connect, Kafka, Kibana, OpenShift, Santander Framework and other existing platforms are integrated before duplicating them;
- Copilot remains the long-term governed entry/control point;
- risk/customer experience is optimized across layers;
- banking POCs should be deployable through real institutional delivery paths where evidence/access permits.

## 13. Earlier cross-cutting principles retained

Still mandatory:
- LAB speed/useful parallelism currently outranks AI-cost minimization, while usage is measured;
- capability-first organization rather than area=agent;
- UNKNOWN -> ResearchRequest/Blocker -> evidence -> reconciliation;
- DETERMINISTIC -> TOOL -> SKILL -> AGENT for mature capabilities;
- PLAN BEFORE EXECUTION and specification-first;
- Git parallel-development gate and owned/shared/protected surfaces;
- resilient local/OpenShift profiles;
- information classification/access/PCI governance;
- knowledge governance and controlled Devin projection;
- standards/research fabric;
- independent QA/reconciliation;
- purpose-driven governance councils;
- Analytics/Audit/Evidence plane;
- knowledge graph/read models;
- Event/Saga/Notification/Session/Agent Runtime planes;
- OpenTelemetry/OTLP/Collector plus existing Kibana/log integration;
- Arc42 lifecycle and canonical visual/document projections;
- portfolio/backlog/Jira-ready semantics;
- LAB simulation/evaluation;
- bounded governed self-evolution.

## Standards research baseline added by DIRECTION-0009

Explicit candidates:
- RFC 9700 OAuth 2.0 Security Best Current Practice;
- OpenID Connect Core;
- FAPI 2.0 Security Profile for high-security API ecosystems;
- RFC 9449 DPoP;
- RFC 9470 OAuth Step Up Authentication Challenge Protocol;
- WebAuthn;
- OWASP password-storage guidance;
- institutional IAM, fraud, cryptography, FIPS/privacy requirements.

Do not claim compliance before implementation/conformance evidence.

## Immediate execution priority

1. Preserve required audit/institutional artifacts.
2. Complete LAB capability/Git coordination bootstrap.
3. Continue BI-0001 Customer Position semantics/source/freshness discovery.
4. Continue BI-0003 Web BFF and BI-0004 Gateway discovery against actual bank evidence.
5. Start BI-0005 customer IAM/adaptive-access as a synthetic LAB POC once bounded ownership is established.
6. Build CQRS projection/reconciliation semantics alongside BI-0001/BI-0003 rather than as a separate infrastructure empire.
7. Inventory Control-M mallas before any scheduler replacement decision.
8. Continue Glo/OpenShift, standards, observability, knowledge and QA lanes in parallel.

## Research dependencies

- Issue #4: Glo archetype/OpenShift delivery contracts.
- Issue #5: institutional/regulatory architecture artifact obligations.
- Issue #6: web Customer Position/binding/frontend evidence.
- Issue #7: current Spring Cloud Gateway vs API Connect responsibilities.
- new customer IAM/core-auth evidence issue;
- new Control-M malla inventory issue.

## Material-change triggers added by DIRECTION-0009

Increment direction again if accepted policy materially changes:
- customer identity/credential authority;
- selected IdP/directory product authority;
- password migration strategy;
- token format/revocation enforcement strategy;
- adaptive-risk/step-up authority;
- CQRS authoritative source/freshness model;
- Control-M replacement/migration platform strategy.

## Working loop

Current obligations
-> governed context/standards
-> institutional platform reuse
-> identity/data/workload discovery
-> specification/plan
-> bounded parallel POCs
-> deterministic validation/QA
-> deployment/runtime evidence
-> risk/security/customer-experience evidence
-> analytics
-> improvement/backlog
-> required Arc42/audit projections
-> next cycle.

The target is a bank-integrated platform where customer identity, read projections, API authorization, risk decisions and operational jobs progressively move away from avoidable core dependency while preserving security, traceability, standards and institutional control.
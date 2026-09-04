# DIRECTION-0009 Impact Assessment

Status: ACCEPTED_CONTEXT_REFRESH_REQUIRED
Old direction: DIRECTION-0008
New direction: DIRECTION-0009
Old baseline reference: `fe4c80b01c1e60e56b841badf2c84bd164130cec`

## Change summary

DIRECTION-0009 adds three material technical directions:

1. a dedicated customer Identity/Access/Risk plane that can progressively remove normal password-validation traffic from the core, with OAuth/OIDC, adaptive risk, binding/step-up and governed token/session state;
2. an explicit banking CQRS projection-consistency model spanning core, Exadata, Redis, BFF and channel projections;
3. a governed Control-M/job-orchestration evolution model that distinguishes job implementation from scheduling/orchestration and evaluates Spring/OpenShift/Java-first alternatives without premature replacement.

The direction is additive and preserves DIRECTION-0008.

## Compatibility

Overall compatibility: BACKWARD_COMPATIBLE / CONTEXT_REFRESH_REQUIRED.

## Active work impact

### P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01
Classification: REVIEW_REQUIRED.
Reason: capability coverage must now include customer IAM/adaptive access, projection consistency and job-orchestration modernization. These are capabilities, not automatically permanent agents.

### P-WEB-BFF-CUSTOMER-POSITION-POC-01 candidate
Classification: REVIEW_REQUIRED.
Reason: web BFF should integrate the customer IdP/session/adaptive-access seam and preserve server-side token/session authority.

### P-SPRING-CLOUD-GATEWAY-BANK-EDGE-POC-01 candidate
Classification: REVIEW_REQUIRED.
Reason: gateway responsibilities now include explicit resource-server token validation, session/risk enforcement and step-up handling where evidenced, without duplicating IdP/API Connect responsibilities.

### P-GRAVITY-PLUS-CUSTOMER-POSITION-READ-ACCELERATION-POC-01
Classification: UNAFFECTED_WITH_CONTEXT_REFRESH.
Reason: semantic read/cache work remains valid; the new CQRS model strengthens freshness/propagation/reconciliation requirements.

### P-EVENT-PLATFORM-SAGA-01
Classification: UNAFFECTED_WITH_CONTEXT_REFRESH.
Reason: asynchronous risk decisions and projection updates become concrete event consumers/use cases; event transport remains governed and evidence-based.

### P-NOTIFICATION-PLATFORM-01
Classification: UNAFFECTED_WITH_CONTEXT_REFRESH.
Reason: user challenge/step-up UX notifications remain distinct from authorization enforcement.

### P-OBSERVABILITY-AUDIT-01 / telemetry
Classification: REVIEW_REQUIRED.
Reason: add auth/risk/session/projection/job evidence while preventing credential/token/sensitive-data leakage.

### Repository / archetype / Glo work
Classification: UNAFFECTED_WITH_CONTEXT_REFRESH.
Reason: IAM/job POCs should reuse institutional archetypes/pipelines when available.

## New governed models

- `work/CUSTOMER_IDENTITY_ACCESS_RISK_AND_SESSION_ARCHITECTURE.md`
- `work/BANKING_CQRS_PROJECTION_CONSISTENCY_MODEL.md`
- `work/JOB_ORCHESTRATION_AND_CONTROLM_EVOLUTION_MODEL.md`
- `work/banking/BI-0005_CUSTOMER_IAM_ADAPTIVE_ACCESS_POC.md`

## Standards impact

Add research/adoption candidates:
- RFC 9700 OAuth 2.0 Security BCP;
- FAPI 2.0 Security Profile for high-security API scenarios;
- RFC 9449 DPoP;
- RFC 9470 OAuth Step Up Authentication Challenge Protocol;
- WebAuthn;
- OWASP password-storage guidance;
- institutional IAM/cryptography/fraud requirements.

Do not claim compliance before implementation/conformance evidence.

## Release impact

Existing frozen LAB releases are not modified. Any next handoff release must reconcile DIRECTION-0009 and refresh affected prompts/context packs.

## Outcome

ACCEPTED_CONTEXT_REFRESH_REQUIRED

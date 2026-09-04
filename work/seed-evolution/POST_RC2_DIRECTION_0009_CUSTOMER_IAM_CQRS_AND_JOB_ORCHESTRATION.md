# Post-RC2 Evolution — DIRECTION-0009 Customer IAM, CQRS Consistency and Job Orchestration

Status: GOVERNED_POST_RC2_DELTA
Direction revision: DIRECTION-0009

## Historical integrity

The immutable rc2 snapshot remains unchanged. This file records the post-rc2 evolution to be reconciled into a future candidate/release.

## Material additions

DIRECTION-0009 adds:

1. a dedicated customer Identity/Access/Risk plane, separate from workforce/corporate identity;
2. Java-first IAM evaluation using mature products/frameworks before custom construction;
3. a migration road away from normal core password-validation transactions without extracting plaintext credentials;
4. explicit separation of OAuth/OIDC semantics from token representation (opaque vs JWT);
5. a bounded JWT/revocation/risk-state model for fast gateway enforcement;
6. asynchronous risk decisions with deterministic server-side ALLOW/DENY/STEP_UP enforcement;
7. standards research for RFC 9700, FAPI 2.0, DPoP, OAuth Step-Up and WebAuthn;
8. a banking CQRS projection-consistency hierarchy across core, Exadata, Redis, BFF and channel projections;
9. explicit freshness/reconciliation rules for highly volatile data such as balances;
10. a Control-M modernization model based on workload/malla classification rather than forced replacement;
11. BI-0005 Customer IAM and Adaptive Access POC.

## Governed files

- `work/CUSTOMER_IDENTITY_ACCESS_RISK_AND_SESSION_ARCHITECTURE.md`
- `work/BANKING_CQRS_PROJECTION_CONSISTENCY_MODEL.md`
- `work/JOB_ORCHESTRATION_AND_CONTROLM_EVOLUTION_MODEL.md`
- `work/banking/BI-0005_CUSTOMER_IAM_ADAPTIVE_ACCESS_POC.md`
- `work/changes/DIRECTION-0009_IMPACT.md`

## Research dependencies

- Issue #8 — customer credential/login/binding/risk architecture.
- Issue #9 — Control-M malla/workload inventory.

## Reconciliation note

Future candidate/release generation must absorb these policies without rewriting historical rc2 evidence and must refresh affected Devin prompts/context packs before handoff.
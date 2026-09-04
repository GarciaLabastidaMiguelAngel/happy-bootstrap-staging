# DIRECTION-0008 Impact Assessment

Status: ACCEPTED_CONTEXT_REFRESH_REQUIRED
Old direction: DIRECTION-0007
New direction: DIRECTION-0008
Old baseline reference: `af0fe8ca5f1a9b88c06fe3b6bb9ff6c403081071`

## Change summary

DIRECTION-0008 formalizes three additions:
1. current institutional/regulatory artifacts remain a near-term priority while their production is progressively automated from governed state;
2. existing institutional platforms/archetypes/pipelines are integrated and reused before replacement, with Glo treated as an evidence-required institutional delivery capability;
3. risk/fraud/security analysis is cross-cutting and may be asynchronous where policy/evidence permits so customer-critical flows are not serialized unnecessarily.

It also strengthens the customer-experience objective: optimize work placement across device, channel/backend, cache/read projection, event synchronization, source systems and infrastructure rather than optimizing API endpoints in isolation.

## Compatibility

Overall: BACKWARD_COMPATIBLE / CONTEXT_REFRESH_REQUIRED.

No DIRECTION-0007 principle is intentionally removed.

## Active prompt impact

### P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01
REVIEW_REQUIRED — capability coverage must include regulatory artifact obligations, institutional-platform reuse/Glo discovery and cross-cutting risk/experience governance without equating each to a permanent agent.

### P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01
REVIEW_REQUIRED — must explicitly inspect/reuse institutional archetypes and delivery foundations before defining independent archetypes. Glo is an evidence dependency.

### P-GRAVITY-PLUS-CUSTOMER-POSITION-READ-ACCELERATION-POC-01
UNAFFECTED_WITH_CONTEXT_REFRESH — POC remains valid; customer-experience/performance and current-platform reuse principles strengthen its evaluation criteria.

### P-OBSERVABILITY-AUDIT-01
UNAFFECTED_WITH_CONTEXT_REFRESH — distinguish internal continuous evidence from externally released audit artifacts.

### P-EVENT-PLATFORM-SAGA-01
UNAFFECTED_WITH_CONTEXT_REFRESH — support async cross-cutting risk/fraud evaluation only where policy permits; do not make every control asynchronous.

### P-LOCAL-TELEMETRY-DATA-ROAD-01
UNAFFECTED_WITH_CONTEXT_REFRESH — telemetry feeds risk/performance/customer-experience analysis but does not replace institutional artifact obligations.

## New models

- `work/REGULATORY_ARTIFACT_PRIORITY_AND_TRANSFORMATION_MODEL.md`
- `work/INSTITUTIONAL_PLATFORM_REUSE_AND_ARCHETYPE_INTEGRATION_MODEL.md`
- `work/RISK_ASYNC_CROSS_CUTTING_AND_CUSTOMER_EXPERIENCE_MODEL.md`

## Research dependencies

- Issue #4: capture Glo archetype/OpenShift delivery contracts.
- Issue #5: map institutional/regulatory architecture artifact obligations.

## Release impact

Frozen `release/lab-r1-d0006` remains unchanged.
A future refreshed LAB release should absorb DIRECTION-0008 before first Devin handoff if no prior frozen release was actually delivered.

## Outcome

ACCEPTED_CONTEXT_REFRESH_REQUIRED
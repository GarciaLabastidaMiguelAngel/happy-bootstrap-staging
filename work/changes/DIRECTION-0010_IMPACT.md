# DIRECTION-0010 Impact Assessment

Status: ACCEPTED_CONTEXT_REFRESH_REQUIRED
Old direction: DIRECTION-0009
New direction: DIRECTION-0010
Old accepted baseline reference: `bd8330d816eab75bf483fb3e1ca6e0f11ee64641`

## Change summary

DIRECTION-0010 formalizes three material extensions without resetting prior direction:

1. an explicit integration/adoption/process-learning strategy for existing bank capabilities;
2. Smart Notification as a current institutional notification-delivery rail to integrate and measure before adding intelligence or replacement;
3. PCR/performance/capacity/scalability as a progressive test-as-code promotion evidence model from local/component through OpenShift/preproduction;
4. a six-plane logical Architecture AI model separating Experience, Governance/Control, Knowledge/Evidence, Execution/Automation, Bank Integration, and Observation/Analysis/Learning responsibilities.

## Compatibility

Overall compatibility: BACKWARD_COMPATIBLE / CONTEXT_REFRESH_REQUIRED.

DIRECTION-0010 strengthens DIRECTION-0009 principles:
- REUSE -> CONFIGURE/EXTEND/ADAPT -> MEASURE -> REPLACE ONLY WITH EVIDENCE;
- no-invention;
- Java First as preference, not reinvention mandate;
- modular-monolith/one-product first;
- bank POCs as measured evolution rather than greenfield redesign.

## Active prompt/work impact

### P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01
Classification: REVIEW_REQUIRED.
Reason: capability coverage should now explicitly include process learning/adoption, logical-plane ownership, PCR/performance evidence and existing Smart Notification integration. Do not create one permanent agent per plane/capability.

### P-NOTIFICATION-PLATFORM-01
Classification: REVIEW_REQUIRED.
Reason: current user evidence identifies Smart Notification as an existing push/email/SMS delivery road with template/Legal process. The prompt must inspect/reuse that platform instead of assuming Architecture AI should create a parallel notification-delivery infrastructure.

### P-OBSERVABILITY-AUDIT-01
Classification: UNAFFECTED_WITH_CONTEXT_REFRESH.
Reason: PCR/build/deployment/notification evidence should join the Observation/Analysis plane while preserving logs/metrics/traces/audit/event distinctions.

### P-LOCAL-TELEMETRY-DATA-ROAD-01
Classification: UNAFFECTED_WITH_CONTEXT_REFRESH.
Reason: performance/capacity evidence becomes a first-class analytical consumer; current telemetry road remains valid.

### P-SIMULATION-EVALUATION-FOUNDATION-01
Classification: REVIEW_REQUIRED.
Reason: simulation should eventually consume measured PCR capacity curves and scaling/dependency evidence rather than hypothetical constants.

### P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01
Classification: UNAFFECTED_WITH_CONTEXT_REFRESH.
Reason: institutional Glo archetype reuse remains mandatory; logical planes must not become separate repositories/deployables by default.

### P-EVENT-PLATFORM-SAGA-01
Classification: UNAFFECTED_WITH_CONTEXT_REFRESH.
Reason: Smart Notification and customer/risk flows provide event use cases, but event transport remains separately governed.

### P-GRAVITY-PLUS-CUSTOMER-POSITION-READ-ACCELERATION-POC-01
Classification: UNAFFECTED_WITH_CONTEXT_REFRESH.
Reason: BI-0001 should produce PCR evidence at component/service/dependency/end-to-end levels where environment access permits.

### BI-0003 Web BFF / BI-0004 Gateway / BI-0005 IAM
Classification: UNAFFECTED_WITH_CONTEXT_REFRESH.
Reason: each becomes an explicit consumer of the PCR gate model and logical planes; no architecture reset is required.

## New governed models

- `work/INTEGRATION_ADOPTION_AND_PROCESS_LEARNING_STRATEGY.md`
- `work/SMART_NOTIFICATION_ADOPTION_AND_INTELLIGENCE_MODEL.md`
- `work/PCR_PERFORMANCE_CAPACITY_AND_SCALABILITY_GATE_MODEL.md`
- `work/ARCHITECTURE_AI_LOGICAL_PLANES_MODEL.md`

## Research impact

Open new bounded research for:
- Smart Notification actual APIs/capabilities/template/legal/delivery/observability behavior;
- current institutional PCR/load tooling, evidence format, environment rules and promotion gates.

## Release impact

The frozen `release/lab-r1-d0006` remains unchanged.

A future refreshed LAB handoff release should include DIRECTION-0010 rather than silently changing any earlier frozen release.

## Outcome

ACCEPTED_CONTEXT_REFRESH_REQUIRED
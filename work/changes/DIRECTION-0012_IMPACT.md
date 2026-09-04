# DIRECTION-0012 Impact Assessment

Status: ACTIVE
Previous direction: DIRECTION-0011
Change class: BACKWARD_COMPATIBLE / CONTEXT_REFRESH_REQUIRED / SELECTIVE_REVIEW_REQUIRED

## Summary

DIRECTION-0012 does not reset the platform. It adds five explicit models:
- cognitive Copilot chat/context architecture;
- stable modularity/evolution guardrails;
- banking request-vs-transaction and reference/folio traceability;
- process governance/deterministic execution;
- compliance radar/gate traceability.

## Prompt impact

### P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01
REVIEW_REQUIRED.
Add cognitive Copilot context segmentation, process-governance capability, compliance radar and request/reference semantics. Do not create one permanent agent per model.

### P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01
REVIEW_REQUIRED.
Module/repository/service boundaries must follow stable capability/change reasons. Logical planes, TOGAF layers and API count must not force repository/deployment splits.

### P-AGENT-RUNTIME-COMMUNICATION-PLANE-01
UNAFFECTED_WITH_CONTEXT_REFRESH.
Add Copilot ContextResolver/read-model/tool-action split and preserve session != canonical state.

### P-EVENT-PLATFORM-SAGA-01
UNAFFECTED_WITH_CONTEXT_REFRESH.
Request/long-running operation workflows are additional use cases. They do not imply saga for every request. Reference-link events remain logical contracts separated from Kafka topology.

### P-GRAVITY-PLUS-CUSTOMER-POSITION-READ-ACCELERATION-POC-01
UNAFFECTED_WITH_CONTEXT_REFRESH.
No change to read-acceleration direction. Customer-facing technical optimization remains deterministic and measurable.

### P-WEB-BFF-CUSTOMER-POSITION-POC-01 candidate
CONTEXT_REFRESH_REQUIRED.
Copilot/channel models now distinguish queries, authoritative transactions and accepted asynchronous requests. Do not apply async semantics to read flow by accident.

### P-DIRECTOR-CHAT-WORK-READMODEL-01 candidate
EXPANDED_REQUIRED.
Must implement governed context resolution, evidence-bounded retrieval, multi-architect authorization/context, explanation classes and deterministic action preparation.

### P-STANDARDS-INTELLIGENCE-CONFORMANCE-01 candidate
EXPANDED_REQUIRED.
Must include compliance radar, authority type, applicability, control realization, gate/evidence binding, compensating/customized/exception semantics where the source framework permits them.

### P-CONFORMANCE-REALIZATION-BINDING-01 candidate
EXPANDED_REQUIRED.
Add process gates and module/service/runtime bindings in addition to standards/events/data.

### Future process-governance prompt
NEW CANDIDATE.
`P-PROCESS-GOVERNANCE-DETERMINISTIC-EXECUTION-01` should be prepared only after collision review with work/control/event/saga domains.

### Future banking request/reference prompt
NEW CANDIDATE.
`P-BANKING-REQUEST-REFERENCE-TRACEABILITY-POC-01` should begin as discovery/specification and use a representative operation only after institutional evidence proves async eligibility and current folio semantics.

## Release impact

Frozen historical releases remain unchanged.

Any future first actual Devin handoff must refresh bootstrap/context to the active DIRECTION-0012 baseline.

## Collision risks

Highest shared-surface risks:
- Work/Task/Process state model;
- event contracts;
- audit/evidence schema;
- standards/conformance read models;
- Copilot context/read-model interfaces;
- banking correlation/reference model.

Do not let independent sessions redefine these concurrently without explicit ownership.

## Outcome

DIRECTION-0012 is additive and compatible with the one-product modular-monolith-first direction. It strengthens design-before-refactor, explainable cognition, deterministic process modernization and traceable banking operations without authorizing greenfield replacement.
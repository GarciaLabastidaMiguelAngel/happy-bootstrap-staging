# Devin Prompt Index

Status: ACTIVE
Direction revision: `DIRECTION-0013`

This index tracks prompts prepared by Happy Work for delegated Devin sessions.

## Lifecycle rules

- File existence does not imply SENT/EXECUTED.
- READY means handoff-eligible only after current-direction refresh.
- DRAFT must be reconciled before handoff.
- SUPERSEDED remains historical.
- Material direction changes trigger impact review/context refresh.
- Missing context/evidence becomes UNKNOWN/ResearchRequest/Blocker, never invention.

Parallelism classes remain:
- PARALLEL_SAFE;
- PARALLEL_SAFE_WITH_BOUNDARIES;
- SERIAL_REQUIRED;
- DISCOVERY_ONLY;
- BLOCKED_BY_DEPENDENCY;
- SERIAL_REQUIRED_FOR_BOOTSTRAP_THEN_PARALLEL;
- PARALLEL_SAFE_WITH_BOUNDARIES_AFTER_BOOTSTRAP.

Prompt lifecycle:
DRAFT -> READY -> SENT -> EXECUTING -> EXECUTED -> RECONCILING -> RECONCILED, with BLOCKED / SUPERSEDED / CANCELLED where applicable.

## DIRECTION-0013 cross-cutting refresh

All future handoffs preserve DIRECTION-0012 and add:

- Design from ConsumerType -> RequiredCapability -> QualityProfile -> smallest justified realization rather than from desired microservice count.
- Formalize arborescent modular growth: stable trunk -> bounded/nested branches -> explicit interfaces -> runtime evidence -> selective extraction.
- Use `TREE FOR DECOMPOSITION/NAVIGATION + GRAPH FOR CANONICAL CROSS-CUTTING TRUTH`.
- Knowledge has an explicit maturity/direction from source/evidence -> verified knowledge -> governance/realization -> runtime evidence -> learned reusable pattern -> contextual projection.
- Spring Modulith is a logical module/verification mechanism, not the physical architecture or automatic microservice extractor.
- Module extraction is evidence-driven and may move IN_PROCESS_INTERNAL -> IN_PROCESS_EXTRACTABLE -> EXTRACTION_CANDIDATE -> INDEPENDENT_DEPLOYABLE -> dedicated runtime/cluster only if separately justified.
- Do not promise configuration-only extraction when in-memory transactions, shared writes or hidden coupling exist.
- Application module/service/namespace/cluster count are separate decisions connected by explicit mappings.
- Do not derive cluster count from domains/initiatives/modules. Cluster placement requires capacity/security/availability/locality/lifecycle/operability evidence.
- Current multi-cluster estate and one-API-per-microservice tendency are evidence inputs, not automatic anti-patterns.
- Chargeback/accounting alone should first evaluate logical cost attribution before dedicated physical isolation.
- PCR/capacity/operability evidence directly informs extraction and infrastructure placement.

Latest impact assessment: `work/changes/DIRECTION-0013_IMPACT.md`.

## Control table

| Prompt ID | Domain | Status | Parallelism | DIRECTION-0013 impact | Handoff note |
|---|---|---|---|---|---|
| `P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01` | LAB capability coverage / organization / Git / parallel execution | READY | SERIAL_REQUIRED_FOR_BOOTSTRAP_THEN_PARALLEL | REVIEW_REQUIRED | Add consumer-capability model, arborescent modularity, tree+graph knowledge direction, extraction lifecycle and infrastructure-placement evidence without creating one agent per branch |
| `P-GRAVITY-PLUS-CUSTOMER-POSITION-READ-ACCELERATION-POC-01` | Banking integration / Customer Position / Redis / Exadata / performance | READY | PARALLEL_SAFE_WITH_BOUNDARIES_AFTER_BOOTSTRAP | UNAFFECTED_WITH_CONTEXT_REFRESH | Remains a consumer-road proof; use PCR/core-amplification evidence as future extraction/placement input |
| `P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01` | Repository / runtime modes / artifact lifecycle | READY | SERIAL_REQUIRED | REVIEW_REQUIRED | One-product modular-monolith first; repo/build/module seams should remain extractable without one repo/deployable per module |
| `P-EVENT-PLATFORM-SAGA-01` | Event platform / sagas | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Internal module event vs external TransportBinding remains explicit; do not event-ify every module call |
| `P-OBSERVABILITY-AUDIT-01` | Observability / audit | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Add module/runtime/capacity/placement evidence where safe |
| `P-LOCAL-TELEMETRY-DATA-ROAD-01` | Local OTel Collector / analytical observation road | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Telemetry/read models must support extraction pressure and cluster/service placement analysis |
| `P-NOTIFICATION-PLATFORM-01` | Human attention / notification / decisions | READY | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Preserve Smart Notification reuse; model capability/consumer profile without forcing separate service |
| `P-SIMULATION-EVALUATION-FOUNDATION-01` | LAB / simulation / replay / Monte Carlo | DRAFT | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | May compare placement/extraction alternatives using measured capacity/topology evidence |
| `P-AGENT-RUNTIME-COMMUNICATION-PLANE-01` | Sessions / work / Devin API / MCP / A2A | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Context/read models may expose tree navigation while canonical relationships remain graph-capable |
| `P-DEVIN-API-ACCESS-DISCOVERY-01` | Devin API discovery / RBAC | SUPERSEDED | DISCOVERY_ONLY | SUPERSEDED | Real API evidence replaced separate discovery prompt |
| `P-OBSERVABILITY-AUDIT-PLATFORM-01` | Earlier observability draft | SUPERSEDED | PARALLEL_SAFE_WITH_BOUNDARIES | SUPERSEDED | Replaced by `P-OBSERVABILITY-AUDIT-01` |

## Active/ready files

- `active/P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01.md`
- `active/P-GRAVITY-PLUS-CUSTOMER-POSITION-READ-ACCELERATION-POC-01.md`
- `active/P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01.md`
- `active/P-EVENT-PLATFORM-SAGA-01.md`
- `active/P-OBSERVABILITY-AUDIT-01.md`
- `active/P-LOCAL-TELEMETRY-DATA-ROAD-01.md`
- `active/P-NOTIFICATION-PLATFORM-01.md`
- `active/P-AGENT-RUNTIME-COMMUNICATION-PLANE-01.md`

## Draft

- `draft/P-SIMULATION-EVALUATION-FOUNDATION-01.md`

## Superseded

- `superseded/P-DEVIN-API-ACCESS-DISCOVERY-01.md`
- `superseded/P-OBSERVABILITY-AUDIT-PLATFORM-01.md`

## Candidate follow-up prompts

Generate only after collision/dependency review:

- `P-DIRECTOR-CHAT-WORK-READMODEL-01` — governed ContextResolver/My Work/Blockers/Decision/Conformance plus capability ancestry/extraction/placement explanation.
- `P-STANDARDS-INTELLIGENCE-CONFORMANCE-01` — compliance radar with authority/applicability/denominator/evidence/runtime enforcement.
- `P-CONFORMANCE-REALIZATION-BINDING-01` — standards/process/events/data/capability -> module/service/gate/runtime evidence.
- `P-PROCESS-GOVERNANCE-DETERMINISTIC-EXECUTION-01` — after collision review with Work/Event/Saga/Jobs.
- `P-BANKING-REQUEST-REFERENCE-TRACEABILITY-POC-01` — discovery/specification only after current operation/reference/async eligibility evidence.
- `P-API-SERVICE-TOPOLOGY-EFFICIENCY-DISCOVERY-01` — current API/service/namespace topology before consolidation decisions.
- `P-ARBORESCENT-MODULARITY-FOUNDATION-01` — new; verify nested module boundaries, allowed dependencies, architecture tests, extraction readiness and module documentation after bootstrap/repository collision review.
- `P-CONSUMER-CAPABILITY-CATALOG-01` — new; model consumer types, technical capability profiles, SLO/security/freshness and realization mappings.
- `P-KNOWLEDGE-DIRECTION-ARBORESCENT-PROJECTION-01` — new; tree navigation/read models over graph-capable canonical knowledge.
- `P-INFRASTRUCTURE-PLACEMENT-CAPACITY-DISCOVERY-01` — new; discover cluster/namespace/utilization/security/availability/chargeback before any consolidation implementation.
- `P-EVENT-GOVERNANCE-TRANSPORT-BINDING-01` — after Issue #12 event/Kafka/Schema Registry evidence.
- `P-ANALYTICS-EVIDENCE-READMODELS-01`
- `P-KNOWLEDGE-GRAPH-CQRS-PROJECTION-01` — now must support arborescent projections without forcing strict-tree truth.
- `P-INFORMATION-CLASSIFICATION-DATA-GOVERNANCE-01`
- `P-PORTFOLIO-BACKLOG-ENGINEERING-FLOW-01`
- `P-OPENSHIFT-SERVICE-READINESS-DISCOVERY-01`
- `P-DEVOPS-BANK-PLATFORM-INTEGRATION-01` — Environment Capability Matrix + cluster-placement/capacity/operability model.
- `P-DEVOPS-AIOPS-ADOPTION-01` — only after topology/telemetry/runbook evidence.
- `P-KIBANA-LOG-EVIDENCE-INTEGRATION-01`
- `P-GOVERNANCE-DOMAIN-MAPPING-01`
- `P-GLO-ARCHETYPE-OPENSHIFT-INTEGRATION-DISCOVERY-01` after Issue #4 evidence or as bounded discovery.
- `P-REGULATORY-ARTIFACT-OBLIGATION-MAPPING-01` after/for Issue #5.
- `P-WEB-BFF-CUSTOMER-POSITION-POC-01` after Issue #6/source semantics.
- `P-SPRING-CLOUD-GATEWAY-BANK-EDGE-POC-01` after Issue #7 baseline.
- `P-CUSTOMER-IAM-ADAPTIVE-ACCESS-POC-01` after bootstrap ownership and Issue #8 evidence.
- `P-BANKING-CQRS-PROJECTION-CONSISTENCY-01` should extend BI-0001/BI-0003 rather than duplicate infrastructure.
- `P-CONTROLM-WORKLOAD-MODERNIZATION-01` only after Issue #9 representative malla evidence.
- `P-SMART-NOTIFICATION-INTEGRATION-DISCOVERY-01` after/beside Issue #10.
- `P-PCR-PERFORMANCE-CAPACITY-GATES-01` after Issue #11; bounded local JVM test-as-code may start independently.
- BI-0002 protocol/channel synchronization remains downstream of sufficient BI-0001/BI-0003 evidence.

## Handoff rule

Before handing a READY prompt to Devin, Work must:
1. refresh repository baseline/active direction and shared-surface ownership;
2. apply latest impact assessment and Session Context Pack;
3. resolve consumer type/capability/quality profile for the work;
4. identify current institutional capability reuse before adding technology;
5. classify missing evidence as UNKNOWN/ResearchRequest/Blocker;
6. identify module ancestry, authoritative state, provided/required interfaces and allowed dependencies;
7. prevent one-module-per-TOGAF/API/table/plane/agent/team decomposition;
8. identify whether work is IN_PROCESS_INTERNAL, EXTRACTABLE, EXTRACTION_CANDIDATE or already independent;
9. never promise config-only extraction without transaction/data/dependency analysis;
10. keep tree projections separate from graph-capable canonical knowledge;
11. map Capability <-> Module <-> Deployable <-> Namespace <-> Cluster <-> Environment <-> Evidence where relevant;
12. for placement, identify capacity/security/availability/locality/lifecycle/chargeback evidence;
13. for performance, identify PCR workload/threshold/environment/evidence;
14. for events, separate internal application event from external EventContract/LogicalChannel/TransportBinding;
15. for governance/standards/process, preserve RealizationBinding/gate/evidence/applicability semantics;
16. for Copilot/actions, preserve chat explanation/preparation vs deterministic authorization/execution;
17. decide whether prompt remains READY, needs boundaries, must wait or is superseded.

Do not invent timestamps, execution state or Devin session references.
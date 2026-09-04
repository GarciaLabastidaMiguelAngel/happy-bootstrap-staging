# Devin Prompt Index

Status: ACTIVE
Direction revision: `DIRECTION-0012`

This index tracks prompts prepared by Happy Work for delegated Devin sessions.

## Lifecycle rules

- File existence does not imply SENT/EXECUTED.
- READY means handoff-eligible only after current-direction refresh.
- DRAFT must be reconciled before handoff.
- SUPERSEDED remains historical.
- Material direction changes trigger impact review/context refresh.
- Missing context/evidence becomes UNKNOWN/ResearchRequest/Blocker, never invention.

Parallelism classes:
- PARALLEL_SAFE
- PARALLEL_SAFE_WITH_BOUNDARIES
- SERIAL_REQUIRED
- DISCOVERY_ONLY
- BLOCKED_BY_DEPENDENCY
- SERIAL_REQUIRED_FOR_BOOTSTRAP_THEN_PARALLEL
- PARALLEL_SAFE_WITH_BOUNDARIES_AFTER_BOOTSTRAP

Prompt lifecycle:
DRAFT -> READY -> SENT -> EXECUTING -> EXECUTED -> RECONCILING -> RECONCILED, with BLOCKED / SUPERSEDED / CANCELLED where applicable.

## DIRECTION-0012 cross-cutting refresh

All future handoffs preserve DIRECTION-0011 and add:

- Dashboard + governed Copilot chat is the primary cognitive working surface; chat context is identity/role/environment/classification/solution/evidence aware and is not canonical state.
- Context must be assembled as bounded provenance-backed Context/Evidence Packs rather than one giant prompt or full-knowledge dump.
- Copilot explains/plans/researches/prepares actions; material approvals/deployments/policy changes remain deterministic, authorized and auditable.
- Module boundaries are based on stable capability/state/change reasons, not TOGAF layer, API count, table count, logical plane, agent count or imagined future microservice.
- Spring Modulith is a realization/verification mechanism, not the architecture definition. Require architecture verification, explicit module APIs/dependencies and controlled event use.
- Existing one-microservice-per-API topology is not automatically wrong. Measure scale/failure/security/ownership/coupling/OpenShift/PCR/operability evidence before KEEP/CONSOLIDATE/SPLIT decisions.
- Banking flows distinguish QUERY, authoritative TRANSACTION, accepted asynchronous REQUEST and LONG_RUNNING_OPERATION. Accepted request must never be presented as completed transaction.
- Folio/reference strategy uses stable OperationId plus typed links to customer/channel/request/Gravity/core/external references; do not generate duplicate folios when the authoritative core reference already solves the need.
- Process governance is first-class and separates governance -> design -> realization -> runtime evidence. Mechanical steps should become deterministic where policy permits.
- Gates require explicit purpose/authority/applicability/evidence/pass criteria. No ceremonial gates.
- Standards/compliance radar distinguishes authority level, applicability, control realization, gate/evidence and exceptions. Scores must always answer `percent of what`.
- PCI and other mandatory obligations require current official/institutional scope evidence; compensating/customized approaches are used only where their governing framework permits them.

Latest impact assessment: `work/changes/DIRECTION-0012_IMPACT.md`.

## Control table

| Prompt ID | Domain | Status | Parallelism | DIRECTION-0012 impact | Handoff note |
|---|---|---|---|---|---|
| `P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01` | LAB capability coverage / organization / Git / parallel execution | READY | SERIAL_REQUIRED_FOR_BOOTSTRAP_THEN_PARALLEL | REVIEW_REQUIRED | Add cognitive context, process governance, compliance radar, stable modularity and request/reference capability coverage without creating one agent per concern |
| `P-GRAVITY-PLUS-CUSTOMER-POSITION-READ-ACCELERATION-POC-01` | Banking integration / Customer Position / Redis / Exadata / performance | READY | PARALLEL_SAFE_WITH_BOUNDARIES_AFTER_BOOTSTRAP | UNAFFECTED_WITH_CONTEXT_REFRESH | Customer read optimization remains deterministic; preserve source/freshness/reconciliation and connect evidence to customer/API topology decisions |
| `P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01` | Repository / runtime modes / artifact lifecycle | READY | SERIAL_REQUIRED | REVIEW_REQUIRED | Stable module/service boundaries must not be derived mechanically from planes, TOGAF or API count; inspect institutional/Glo delivery first |
| `P-EVENT-PLATFORM-SAGA-01` | Event platform / sagas | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Request/long-running operation and reference-link events are additional use cases; no saga/event for every call; preserve logical/physical Kafka separation |
| `P-OBSERVABILITY-AUDIT-01` | Observability / audit | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Add process/gate/reference/Copilot action evidence where safe; preserve privacy/security distinctions |
| `P-LOCAL-TELEMETRY-DATA-ROAD-01` | Local OTel Collector / analytical observation road | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Runtime/PCR/operability evidence feeds topology/process/conformance decisions |
| `P-NOTIFICATION-PLATFORM-01` | Human attention / notification / decisions | READY | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Preserve Smart Notification reuse and distinguish customer delivery from Copilot human-work/evidence requests |
| `P-SIMULATION-EVALUATION-FOUNDATION-01` | LAB / simulation / replay / Monte Carlo | DRAFT | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | May model request processing, capacity and topology alternatives only after real semantics/evidence |
| `P-AGENT-RUNTIME-COMMUNICATION-PLANE-01` | Sessions / work / Devin API / MCP / A2A | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Add ContextResolver/read-model/prepared-action boundaries; session/chat state remains distinct from durable project/work state |
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

- `P-DIRECTOR-CHAT-WORK-READMODEL-01` — expanded: governed ContextResolver, bounded Evidence Pack retrieval, multi-architect authorization/context, My Work/Blocker/Decision/Conformance and deterministic prepared actions.
- `P-STANDARDS-INTELLIGENCE-CONFORMANCE-01` — expanded: compliance radar, authority/applicability, exact denominator, control realization, gate/evidence bindings and exception semantics.
- `P-CONFORMANCE-REALIZATION-BINDING-01` — link standards/process/events/data/governance concepts to modules/services/gates/runtime evidence.
- `P-PROCESS-GOVERNANCE-DETERMINISTIC-EXECUTION-01` — new candidate; collision review required with Work/Event/Saga/Jobs domains.
- `P-BANKING-REQUEST-REFERENCE-TRACEABILITY-POC-01` — new discovery/specification candidate only after representative-operation eligibility and existing folio/reference semantics are evidenced.
- `P-API-SERVICE-TOPOLOGY-EFFICIENCY-DISCOVERY-01` — discover current microservice/API/namespace topology and operational evidence before any consolidation proposal.
- `P-EVENT-GOVERNANCE-TRANSPORT-BINDING-01` — after Issue #12 produces event/Kafka/Schema Registry evidence.
- `P-ANALYTICS-EVIDENCE-READMODELS-01`
- `P-KNOWLEDGE-GRAPH-CQRS-PROJECTION-01`
- `P-INFORMATION-CLASSIFICATION-DATA-GOVERNANCE-01`
- `P-PORTFOLIO-BACKLOG-ENGINEERING-FLOW-01`
- `P-OPENSHIFT-SERVICE-READINESS-DISCOVERY-01`
- `P-DEVOPS-BANK-PLATFORM-INTEGRATION-01` — operability/Environment Capability Matrix/configuration-learning loop.
- `P-DEVOPS-AIOPS-ADOPTION-01` — only after sufficient topology/telemetry/runbook evidence.
- `P-KIBANA-LOG-EVIDENCE-INTEGRATION-01`
- `P-GOVERNANCE-DOMAIN-MAPPING-01`
- `P-GLO-ARCHETYPE-OPENSHIFT-INTEGRATION-DISCOVERY-01` after Issue #4 has enough evidence or as bounded discovery.
- `P-REGULATORY-ARTIFACT-OBLIGATION-MAPPING-01` after/for Issue #5 evidence collection.
- `P-WEB-BFF-CUSTOMER-POSITION-POC-01` after Issue #6 has sufficient web/session/frontend evidence and BI-0001 source semantics.
- `P-SPRING-CLOUD-GATEWAY-BANK-EDGE-POC-01` after Issue #7 provides current gateway/API Connect baseline.
- `P-CUSTOMER-IAM-ADAPTIVE-ACCESS-POC-01` after bootstrap ownership and Issue #8 current-auth evidence are sufficient.
- `P-BANKING-CQRS-PROJECTION-CONSISTENCY-01` should extend BI-0001/BI-0003 rather than create duplicate infrastructure.
- `P-CONTROLM-WORKLOAD-MODERNIZATION-01` only after Issue #9 identifies representative low-risk malla/dependencies.
- `P-SMART-NOTIFICATION-INTEGRATION-DISCOVERY-01` after/beside Issue #10.
- `P-PCR-PERFORMANCE-CAPACITY-GATES-01` after Issue #11 maps institutional PCR tooling/evidence; bounded local JVM test-as-code may start independently.
- BI-0002 protocol/channel synchronization remains downstream of sufficient BI-0001/BI-0003 semantic/channel evidence.

## Handoff rule

Before handing a READY prompt to Devin, Work must:
1. refresh repository baseline and active direction;
2. inspect active workstreams/shared surfaces and latest impact;
3. refresh Session Context Pack with authorization/environment/classification scope;
4. classify blocker/research state and missing institutional evidence;
5. identify standards/gates/evidence and compliance authority/applicability;
6. identify information-classification/provider-projection implications;
7. identify analytical/read-model/Arc42 implications;
8. identify existing institutional platform/archetype/pipeline reuse obligations;
9. identify logical-plane ownership without forcing module/deployment split;
10. evaluate module/service boundaries by stable capability/state/change reasons;
11. map governed concepts/processes to expected RealizationBindings/runtime evidence;
12. for event work, separate EventContract/LogicalChannel/TransportBinding/physical topology;
13. for standards/adoption work, define exact denominator/evidence/runtime enforcement;
14. for Copilot UX, preserve chat explanation/preparation vs deterministic action authority;
15. for banking operations, distinguish QUERY/TRANSACTION/REQUEST/LONG_RUNNING and define reference/correlation semantics;
16. for process work, identify gate purpose/authority/evidence/pass criteria and avoid ceremonial workflow;
17. for DevOps work, identify actual environment/configuration/operability/AIOps authority;
18. preserve existing-platform-first -> Spring-first -> Java/JVM -> other mature tech -> custom last;
19. for performance work, identify workload/PCR level/threshold/environment/evidence;
20. decide whether prompt remains READY, needs boundaries, must wait or is superseded.

Do not invent timestamps, execution state or Devin session references.
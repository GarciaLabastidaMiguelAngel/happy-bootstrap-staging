# Devin Prompt Index

Status: ACTIVE
Direction revision: `DIRECTION-0011`

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

## DIRECTION-0011 cross-cutting refresh

All future handoffs preserve DIRECTION-0010 and add:

- Governance intent and technical/runtime realization are separate models connected by explicit RealizationBindings and evidence.
- A conceptual/governed object does not automatically require a dedicated physical resource.
- Event governance uses EventContract -> LogicalEventChannel -> TransportBinding -> Physical Kafka resource; topic topology is justified by security/retention/order/keying/throughput/lifecycle/failure/ownership rather than taxonomy count.
- Reuse the institutional Schema Registry where actual capabilities/configuration support the requirement; do not assume subject naming or compatibility policy.
- Conformance/adoption metrics must answer `percent of what` by exposing denominator, applicability, evidence, runtime enforcement and exceptions.
- Spring First applies after existing institutional capability reuse: existing platform -> Spring -> mature Java/JVM -> other mature technology -> custom last.
- Copilot Dashboard should surface My Work, Blockers, ResearchRequests, Decisions, approvals/evidence requests and adoption/conformance drill-down; humans receive ambiguity/authority/evidence work rather than tasks automation can safely perform.
- Copilot chat is a governed explanation/planning surface; deterministic UI/gates remain authoritative for material actions.
- DevOps is responsible for progressive operability and Environment Capability discovery; exact development namespace topology remains UNKNOWN until evidenced.
- AIOps is evidence-driven assistance over topology/telemetry/change/PCR/runbooks, not uncontrolled autonomous production remediation.
- Customer/channel flows remain deterministic optimization roads: minimize requests/work at each layer and keep core dependency only where authoritative banking work requires it.

Latest impact assessment: `work/changes/DIRECTION-0011_IMPACT.md`.

## Control table

| Prompt ID | Domain | Status | Parallelism | DIRECTION-0011 impact | Handoff note |
|---|---|---|---|---|---|
| `P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01` | LAB capability coverage / organization / Git / parallel execution | READY | SERIAL_REQUIRED_FOR_BOOTSTRAP_THEN_PARALLEL | REVIEW_REQUIRED | Add governance-runtime binding, event logical/physical separation, Copilot human-work UX, DevOps operability/AIOps and multidimensional conformance; do not create one agent per concern |
| `P-GRAVITY-PLUS-CUSTOMER-POSITION-READ-ACCELERATION-POC-01` | Banking integration / Customer Position / Redis / Exadata / performance | READY | PARALLEL_SAFE_WITH_BOUNDARIES_AFTER_BOOTSTRAP | UNAFFECTED_WITH_CONTEXT_REFRESH | Preserve CQRS freshness/reconciliation and use RealizationBindings/evidence to connect conceptual data policy to physical cache/source behavior |
| `P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01` | Repository / runtime modes / artifact lifecycle | READY | SERIAL_REQUIRED | UNAFFECTED_WITH_CONTEXT_REFRESH | Logical governance/plane models do not imply repo/deployment split; preserve existing-platform-first then Spring-first order |
| `P-EVENT-PLATFORM-SAGA-01` | Event platform / sagas | READY | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Add EventContract -> LogicalEventChannel -> TransportBinding -> physical topic model; discover actual Schema Registry/Kafka topology and avoid topic-per-taxonomy by default |
| `P-OBSERVABILITY-AUDIT-01` | Observability / audit | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Runtime evidence must support governance-to-realization conformance and DevOps operability without leaking sensitive content |
| `P-LOCAL-TELEMETRY-DATA-ROAD-01` | Local OTel Collector / analytical observation road | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Telemetry/PCR/runtime evidence feeds conformance/AIOps analysis; current OTel/Kibana road remains |
| `P-NOTIFICATION-PLATFORM-01` | Human attention / notification / decisions | READY | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Continue Smart Notification reuse discovery; distinguish customer notification delivery from Copilot human-work/decision attention model |
| `P-SIMULATION-EVALUATION-FOUNDATION-01` | LAB / simulation / replay / Monte Carlo | DRAFT | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Future models should use measured runtime/topology/PCR evidence and may compare physical event-topology alternatives |
| `P-AGENT-RUNTIME-COMMUNICATION-PLANE-01` | Sessions / work / Devin API / MCP / A2A | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Human Work/Task/ResearchRequest semantics are durable project concepts; do not conflate with temporary agent/provider sessions |
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

- `P-DIRECTOR-CHAT-WORK-READMODEL-01` — now must include My Work/Blocker/ResearchRequest/Decision/Conformance drill-down and governed chat/action split.
- `P-STANDARDS-INTELLIGENCE-CONFORMANCE-01` — must implement multidimensional denominator/evidence/runtime-enforcement conformance rather than opaque percentages.
- `P-CONFORMANCE-REALIZATION-BINDING-01` — candidate deterministic/read-model foundation linking governed concepts to runtime artifacts/evidence.
- `P-EVENT-GOVERNANCE-TRANSPORT-BINDING-01` — after actual event-governance/Kafka/Schema Registry evidence is available; may be discovery-first.
- `P-ANALYTICS-EVIDENCE-READMODELS-01`
- `P-KNOWLEDGE-GRAPH-CQRS-PROJECTION-01`
- `P-INFORMATION-CLASSIFICATION-DATA-GOVERNANCE-01`
- `P-PORTFOLIO-BACKLOG-ENGINEERING-FLOW-01`
- `P-OPENSHIFT-SERVICE-READINESS-DISCOVERY-01`
- `P-DEVOPS-BANK-PLATFORM-INTEGRATION-01` — now includes operability definition, Environment Capability Matrix and configuration-learning loop.
- `P-DEVOPS-AIOPS-ADOPTION-01` — only after sufficient topology/telemetry/runbook evidence; assistance first, bounded remediation later.
- `P-KIBANA-LOG-EVIDENCE-INTEGRATION-01`
- `P-GOVERNANCE-DOMAIN-MAPPING-01`
- `P-GLO-ARCHETYPE-OPENSHIFT-INTEGRATION-DISCOVERY-01` after Issue #4 has enough evidence or as a bounded discovery session.
- `P-REGULATORY-ARTIFACT-OBLIGATION-MAPPING-01` after/for Issue #5 evidence collection.
- `P-WEB-BFF-CUSTOMER-POSITION-POC-01` after Issue #6 has sufficient web/session/frontend evidence and BI-0001 source semantics are available enough to avoid guessing.
- `P-SPRING-CLOUD-GATEWAY-BANK-EDGE-POC-01` after Issue #7 provides the current gateway/API Connect baseline.
- `P-CUSTOMER-IAM-ADAPTIVE-ACCESS-POC-01` from BI-0005 after bootstrap ownership and Issue #8 current-auth evidence are sufficient; synthetic LAB slices may begin before real credential migration evidence.
- `P-BANKING-CQRS-PROJECTION-CONSISTENCY-01` should extend BI-0001/BI-0003 rather than create duplicate infrastructure.
- `P-CONTROLM-WORKLOAD-MODERNIZATION-01` only after Issue #9 identifies a representative low-risk malla and dependencies.
- `P-SMART-NOTIFICATION-INTEGRATION-DISCOVERY-01` after/beside Issue #10; discovery only until actual capabilities are known.
- `P-PCR-PERFORMANCE-CAPACITY-GATES-01` after Issue #11 maps institutional PCR/load tooling and gate evidence; bounded local JVM test-as-code may start independently.
- BI-0002 protocol/channel synchronization remains downstream of sufficient BI-0001/BI-0003 semantic/channel evidence.

## Handoff rule

Before handing a READY prompt to Devin, Work must:
1. refresh repository baseline;
2. confirm active direction;
3. inspect active workstreams/shared surfaces;
4. apply latest impact assessment;
5. refresh Session Context Pack;
6. classify blocker/research state;
7. identify standards/gates/evidence expectations;
8. identify information-classification/provider-projection implications;
9. identify analytical/read-model/Arc42 implications;
10. identify current institutional platform/archetype/pipeline reuse obligations;
11. identify external/institutional artifact requirements when applicable;
12. identify logical-plane ownership without assuming physical deployment split;
13. map governed concepts to expected runtime RealizationBindings/evidence where material;
14. for event work, separate logical event/channel/schema governance from physical Kafka topology and discover actual Schema Registry settings;
15. for standards/adoption work, define denominator/dimensions and evidence rather than standalone percentages;
16. for human-work/Copilot UX, distinguish Task/ResearchRequest/Blocker/Decision/Approval/EvidenceRequest and deterministic actions;
17. for DevOps work, identify actual environment/namespaces/configuration/operability constraints and AIOps authority boundaries;
18. preserve existing-platform-first -> Spring-first -> Java/JVM -> other mature tech -> custom last;
19. for performance-sensitive work, identify workload model, PCR level, thresholds, environment and evidence package;
20. for notification work, identify Smart Notification vs Architecture AI responsibility, template/legal gates and delivery evidence;
21. for gateway/IAM work, identify API Connect vs gateway vs IdP/resource-server authority and risk/revocation semantics;
22. for data projections, identify source authority, freshness, version/change and reconciliation semantics;
23. for job work, identify scheduler/orchestrator vs job implementation and current Control-M dependencies;
24. decide whether prompt remains READY, needs boundaries, must wait or is superseded.

Do not invent timestamps, execution state or Devin session references.
# Devin Prompt Index

Status: ACTIVE
Direction revision: `DIRECTION-0010`

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

## DIRECTION-0010 cross-cutting refresh

All future handoffs preserve DIRECTION-0009 and add:

- Architecture AI follows an explicit integration/adoption/process-learning lifecycle: learn current reality -> map authority/controls/process -> reuse/integrate -> measure -> optimize -> prove -> automate -> reassess ownership -> replace only with evidence.
- Existing institutional platforms remain integration anchors until evidence supports change. Do not greenfield-redesign the bank.
- Smart Notification is user-provided current delivery infrastructure for push/email/SMS; inspect and reuse it before creating parallel notification delivery. Legal/template governance remains authoritative.
- `smart` behavior such as prioritization/personalization/preferences/fallback/ML is evidence-driven and deterministic-first.
- PCR/performance/capacity becomes progressive test-as-code evidence from component/pod through service/dependencies/end-to-end/resilience/preproduction.
- Performance evidence must preserve workload, thresholds, SUT version, environment/resources, dependency/load-generator topology, p50/p95/p99, errors, resource saturation and downstream/core amplification.
- Prefer existing institutional performance tooling. Apache JMeter and Gatling Java DSL are LAB Java/JVM candidates only where useful.
- TOGAF is used for architecture/governance/transition; ISO/IEC/IEEE 29119 for test process; ISO/IEC 25010:2023 for product-quality objectives; institutional gates remain authoritative when evidenced.
- Architecture AI has six logical planes: Experience/Interaction, Governance/Control, Knowledge/Evidence, Execution/Automation, Bank Integration, Observation/Analysis/Learning.
- A plane is a logical responsibility boundary, not automatically a microservice, pod, repository or agent.
- The Control Plane coordinates policy/work/gates; institutional platforms remain execution/data/governance authorities until an explicit migration changes them.
- POCs should include measurable PCR/capacity evidence as part of completion, not wait for a disconnected late handoff.

Latest impact assessment: `work/changes/DIRECTION-0010_IMPACT.md`.

## Control table

| Prompt ID | Domain | Status | Parallelism | DIRECTION-0010 impact | Handoff note |
|---|---|---|---|---|---|
| `P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01` | LAB capability coverage / organization / Git / parallel execution | READY | SERIAL_REQUIRED_FOR_BOOTSTRAP_THEN_PARALLEL | REVIEW_REQUIRED | Add process learning/adoption, logical planes, PCR/performance evidence and Smart Notification capability coverage; do not equate plane/capability with permanent agent |
| `P-GRAVITY-PLUS-CUSTOMER-POSITION-READ-ACCELERATION-POC-01` | Banking integration / Customer Position / Redis / Exadata / performance | READY | PARALLEL_SAFE_WITH_BOUNDARIES_AFTER_BOOTSTRAP | UNAFFECTED_WITH_CONTEXT_REFRESH | Apply CQRS freshness/reconciliation and produce progressive PCR evidence where environment access permits |
| `P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01` | Repository / runtime modes / artifact lifecycle | READY | SERIAL_REQUIRED | UNAFFECTED_WITH_CONTEXT_REFRESH | Reuse Glo/institutional archetypes; logical planes do not imply repository/deployment split |
| `P-EVENT-PLATFORM-SAGA-01` | Event platform / sagas | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Existing platform/event integration remains evidence-driven; Smart Notification may consume intents/events without becoming event authority |
| `P-OBSERVABILITY-AUDIT-01` | Observability / audit | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Include safe PCR/build/deployment/notification evidence in Observation plane while preserving telemetry/audit distinctions |
| `P-LOCAL-TELEMETRY-DATA-ROAD-01` | Local OTel Collector / analytical observation road | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Capacity/performance results become analytical inputs; current OTel/Kibana road remains |
| `P-NOTIFICATION-PLATFORM-01` | Human attention / notification / decisions | READY | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Must inspect/reuse Smart Notification delivery/template/legal capabilities before creating provider/delivery infrastructure; retain Attention/Decision semantics separately |
| `P-SIMULATION-EVALUATION-FOUNDATION-01` | LAB / simulation / replay / Monte Carlo | DRAFT | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Consume measured PCR capacity/scaling curves instead of hypothetical constants where available |
| `P-AGENT-RUNTIME-COMMUNICATION-PLANE-01` | Sessions / work / Devin API / MCP / A2A | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Logical planes are capability boundaries, not new agent count requirements |
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

- `P-DIRECTOR-CHAT-WORK-READMODEL-01`
- `P-STANDARDS-INTELLIGENCE-CONFORMANCE-01`
- `P-ANALYTICS-EVIDENCE-READMODELS-01`
- `P-KNOWLEDGE-GRAPH-CQRS-PROJECTION-01`
- `P-INFORMATION-CLASSIFICATION-DATA-GOVERNANCE-01`
- `P-PORTFOLIO-BACKLOG-ENGINEERING-FLOW-01`
- `P-OPENSHIFT-SERVICE-READINESS-DISCOVERY-01`
- `P-DEVOPS-BANK-PLATFORM-INTEGRATION-01`
- `P-KIBANA-LOG-EVIDENCE-INTEGRATION-01`
- `P-GOVERNANCE-DOMAIN-MAPPING-01`
- `P-GLO-ARCHETYPE-OPENSHIFT-INTEGRATION-DISCOVERY-01` after Issue #4 has enough evidence or as a bounded discovery session.
- `P-REGULATORY-ARTIFACT-OBLIGATION-MAPPING-01` after/for Issue #5 evidence collection.
- `P-WEB-BFF-CUSTOMER-POSITION-POC-01` after Issue #6 has sufficient web/session/frontend evidence and BI-0001 source semantics are available enough to avoid guessing.
- `P-SPRING-CLOUD-GATEWAY-BANK-EDGE-POC-01` after Issue #7 provides the current gateway/API Connect baseline.
- `P-CUSTOMER-IAM-ADAPTIVE-ACCESS-POC-01` from BI-0005 after bootstrap ownership and Issue #8 current-auth evidence are sufficient; synthetic LAB slices may begin before real credential migration evidence.
- `P-BANKING-CQRS-PROJECTION-CONSISTENCY-01` should extend BI-0001/BI-0003 rather than create duplicate infrastructure.
- `P-CONTROLM-WORKLOAD-MODERNIZATION-01` only after Issue #9 identifies a representative low-risk malla and dependencies.
- `P-SMART-NOTIFICATION-INTEGRATION-DISCOVERY-01` after/beside the new Smart Notification evidence issue; discovery only until actual capabilities are known.
- `P-PCR-PERFORMANCE-CAPACITY-GATES-01` after the current institutional PCR/load tooling, evidence requirements and environment constraints are mapped; a bounded local Java/JVM test-as-code POC may start independently.
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
13. for performance-sensitive work, identify workload model, PCR level, thresholds, environment and evidence package;
14. for notification work, identify Smart Notification vs Architecture AI responsibility, template/legal gates and delivery evidence;
15. for gateway/IAM work, identify API Connect vs gateway vs IdP/resource-server authority and risk/revocation semantics;
16. for data projections, identify source authority, freshness, version/change and reconciliation semantics;
17. for job work, identify scheduler/orchestrator vs job implementation and current Control-M dependencies;
18. decide whether prompt remains READY, needs boundaries, must wait or is superseded.

Do not invent timestamps, execution state or Devin session references.
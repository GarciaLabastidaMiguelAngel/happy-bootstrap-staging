# Devin Prompt Index

Status: ACTIVE
Direction revision: `DIRECTION-0008`

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

## DIRECTION-0008 cross-cutting refresh

All future handoffs preserve DIRECTION-0007 and add:

- Current institutional/regulatory artifacts remain a near-term delivery priority while their production is progressively automated from governed state.
- Exact Banxico/other authority obligations are evidence-required; never infer them from generic banking practice.
- Existing institutional platforms, frameworks, archetypes and pipelines are reused/integrated before replacement.
- `Glo` is user-provided institutional context for archetypes/OpenShift pipeline and must be discovered/evidenced before implementation assumptions.
- `do not reinvent the wheel` means REUSE -> CONFIGURE/EXTEND/ADAPT -> MEASURE -> REPLACE ONLY WITH EVIDENCE.
- Copilot remains the long-term governed entry/control point and should invoke existing platform capabilities rather than duplicate them.
- Risk/fraud/security is cross-cutting; controls must explicitly classify synchronous vs asynchronous/post-event behavior based on policy/evidence.
- Customer experience/performance is optimized across device, channel/backend, cache/read projection, event synchronization, source systems and infrastructure, not endpoint latency alone.
- Banking POCs should be capable of entering the real institutional delivery path instead of remaining isolated LAB code.
- Web-channel state must preserve server-side authorization/session authority; browser/tab storage is a projection and must not hold session credentials/tokens.
- BFF is channel-specific composition/synchronization, not a replacement for Gravity Plus.
- Microfrontends are evidence-driven; begin with modular Angular boundaries unless independent deployment/ownership justifies more complexity.
- Spring Cloud Gateway is evaluated as a programmable runtime/application edge behind or alongside IBM API Connect, not assumed to replace the institutional API-management plane.

Latest impact assessment: `work/changes/DIRECTION-0008_IMPACT.md`.

## Control table

| Prompt ID | Domain | Status | Parallelism | DIRECTION-0008 impact | Handoff note |
|---|---|---|---|---|---|
| `P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01` | LAB capability coverage / organization / Git / parallel execution | READY | SERIAL_REQUIRED_FOR_BOOTSTRAP_THEN_PARALLEL | REVIEW_REQUIRED | Refresh capability coverage with regulatory-artifact continuity, institutional platform reuse/Glo discovery, risk/customer-experience governance |
| `P-GRAVITY-PLUS-CUSTOMER-POSITION-READ-ACCELERATION-POC-01` | Banking integration / Customer Position / Redis / Exadata / performance | READY | PARALLEL_SAFE_WITH_BOUNDARIES_AFTER_BOOTSTRAP | UNAFFECTED_WITH_CONTEXT_REFRESH | Use actual project/framework/integrations; evaluate customer-perceived performance and institutional delivery path; do not force new gateway/pattern |
| `P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01` | Repository / runtime modes / artifact lifecycle | READY | SERIAL_REQUIRED | REVIEW_REQUIRED | Must inspect/reuse Glo/institutional archetypes and pipeline contracts before defining parallel archetypes |
| `P-EVENT-PLATFORM-SAGA-01` | Event platform / sagas | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Risk/fraud async use cases may consume event capability only where policy permits; current Kafka availability remains evidence-based |
| `P-OBSERVABILITY-AUDIT-01` | Observability / audit | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Preserve internal continuous audit/evidence vs externally released institutional artifacts |
| `P-LOCAL-TELEMETRY-DATA-ROAD-01` | Local OTel Collector / analytical observation road | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Telemetry supports performance/risk/UX analysis and coexists with current Kibana/institutional logging |
| `P-NOTIFICATION-PLATFORM-01` | Human attention / notification / decisions | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Preserve information classification and institutional decision routing |
| `P-SIMULATION-EVALUATION-FOUNDATION-01` | LAB / simulation / replay / Monte Carlo | DRAFT | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Add customer-experience/layer-placement/risk async scenarios only after telemetry/evidence model reconciles |
| `P-AGENT-RUNTIME-COMMUNICATION-PLANE-01` | Sessions / work / Devin API / MCP / A2A | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Copilot should orchestrate institutional capabilities through bounded adapters/tools instead of duplicating platform mechanics |
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
- `P-SPRING-CLOUD-GATEWAY-BANK-EDGE-POC-01` after Issue #7 provides the current gateway/API Connect baseline; may run in parallel with BI-0003 only with explicit ownership boundaries.
- BI-0002 protocol/channel synchronization research remains downstream of sufficient BI-0001/BI-0003 semantic and channel evidence.

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
12. for web/channel work, identify session/binding/browser-storage and channel-contract constraints;
13. for gateway work, identify API Connect vs application-edge responsibility boundaries;
14. decide whether prompt remains READY, needs boundaries, must wait or is superseded.

Do not invent timestamps, execution state or Devin session references.
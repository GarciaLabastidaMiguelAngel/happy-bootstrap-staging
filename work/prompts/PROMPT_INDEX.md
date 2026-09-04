# Devin Prompt Index

Status: ACTIVE
Direction revision: `DIRECTION-0014`

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

## DIRECTION-0014 cross-cutting refresh

All future handoffs preserve DIRECTION-0013 and add:

- RAG is a retrieval/generation mechanism, not the complete Architecture AI cognitive architecture.
- Use a provider-neutral cognitive/context pipeline: intent/reasoning mode -> authorization/classification -> Knowledge Radar/ContextResolver -> hybrid/multi-scale retrieval -> ContextPlan -> tool/Devin reasoning -> claim/evidence verification -> answer/UNKNOWN/action.
- Canonical knowledge remains graph-capable/provenance-backed; dynamic radar distance is computed per task, not persisted as truth.
- Use STRATEGIC CENTER + TASK FOCUS so the current question can move across domains while retaining mandatory platform/banking constraints.
- Retrieval must be multi-signal: exact/lexical + semantic/vector + graph + arborescent branch/community/anthology + specialized read models + reranking/evidence validation.
- Use `TREE FOR DECOMPOSITION/NAVIGATION + GRAPH FOR CANONICAL CROSS-CUTTING TRUTH`; anthologies/community summaries are derived projections.
- Context is a governed finite resource. Target minimum sufficient authorized context, not full-corpus prompts or token minimization at any cost.
- Produce an auditable ContextPlan with selected evidence, inclusion reasons, provenance/freshness/classification and provider-projection choice.
- Prefer progressive on-demand context expansion where possible.
- Separate Devin Knowledge, Skills, Playbooks, task/session context and MCP/tool retrieval by purpose. Do not mirror the entire Architecture AI knowledge base into Devin.
- Add claim/evidence verification and explicit FACT/INFERENCE/HYPOTHESIS/UNKNOWN/CONTRADICTED/SUPERSEDED semantics for material answers.
- Cognitive-science/GraphRAG/context-engineering techniques are research inputs to evaluate, not implementation dogma.
- Measure retrieval/context strategies using gold tasks, constraint misses, unsupported claims, stale evidence, context size, latency, agent cost and human rework.

Latest impact assessment: `work/changes/DIRECTION-0014_IMPACT.md`.

## Control table

| Prompt ID | Domain | Status | Parallelism | DIRECTION-0014 impact | Handoff note |
|---|---|---|---|---|---|
| `P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01` | LAB capability coverage / organization / Git / parallel execution | READY | SERIAL_REQUIRED_FOR_BOOTSTRAP_THEN_PARALLEL | REVIEW_REQUIRED | Add ContextPlan/Knowledge Radar/provider-projection ownership without creating a permanent agent per cognitive mechanism |
| `P-GRAVITY-PLUS-CUSTOMER-POSITION-READ-ACCELERATION-POC-01` | Banking integration / Customer Position / Redis / Exadata / performance | READY | PARALLEL_SAFE_WITH_BOUNDARIES_AFTER_BOOTSTRAP | UNAFFECTED_WITH_CONTEXT_REFRESH | Preserve current POC; use evidence IDs and bounded context for delegated analysis |
| `P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01` | Repository / runtime modes / artifact lifecycle | READY | SERIAL_REQUIRED | UNAFFECTED_WITH_CONTEXT_REFRESH | Keep one-product modular-monolith; context/cognitive layers do not imply repo/service split |
| `P-EVENT-PLATFORM-SAGA-01` | Event platform / sagas | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Context retrieval may use event graph relationships; runtime event design unchanged |
| `P-OBSERVABILITY-AUDIT-01` | Observability / audit | READY | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Add context/retrieval/provider projection audit/eval evidence where safe |
| `P-LOCAL-TELEMETRY-DATA-ROAD-01` | Local OTel / analytical observation | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Retrieval/answer quality metrics can become observation inputs |
| `P-NOTIFICATION-PLATFORM-01` | Human attention / notification / decisions | READY | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Keep Smart Notification boundary; cognitive attention is not customer notification delivery |
| `P-SIMULATION-EVALUATION-FOUNDATION-01` | LAB / simulation / replay | DRAFT | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Add context/retrieval strategy evals as a future simulation/evaluation family |
| `P-AGENT-RUNTIME-COMMUNICATION-PLANE-01` | Sessions / work / Devin API / MCP / A2A | READY | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Must add ContextPlan, provider projections, progressive retrieval and reconciliation semantics before handoff |
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

- `P-DIRECTOR-CHAT-WORK-READMODEL-01` — include Knowledge Radar, ContextPlan explanation, My Work/Blockers/Decisions/Conformance and deterministic action split.
- `P-COGNITIVE-KNOWLEDGE-CONTEXT-FOUNDATION-01` — new; provider-neutral ContextPlan, reasoning modes, radar bands, hybrid retrieval orchestration and eval instrumentation.
- `P-KNOWLEDGE-RETRIEVAL-EVALUATION-HARNESS-01` — new; gold tasks comparing vector-only, lexical+vector, graph, global/community, hybrid/rerank and progressive context.
- `P-DEVIN-KNOWLEDGE-SKILLS-PROJECTION-01` — new; classify stable Knowledge vs repo Skills vs Playbooks vs task context/MCP without duplicating canonical truth.
- `P-CLAIM-EVIDENCE-VERIFICATION-01` — new; response claim types, support/contradiction/supersession validation and UNKNOWN downgrade semantics.
- `P-STANDARDS-INTELLIGENCE-CONFORMANCE-01` — compliance radar with authority/applicability/denominator/evidence/runtime enforcement.
- `P-CONFORMANCE-REALIZATION-BINDING-01` — standards/process/events/data/capability -> module/service/gate/runtime evidence.
- `P-PROCESS-GOVERNANCE-DETERMINISTIC-EXECUTION-01` — after collision review with Work/Event/Saga/Jobs.
- `P-BANKING-REQUEST-REFERENCE-TRACEABILITY-POC-01` — after current operation/reference/async eligibility evidence.
- `P-API-SERVICE-TOPOLOGY-EFFICIENCY-DISCOVERY-01` — current API/service/namespace topology before consolidation decisions.
- `P-ARBORESCENT-MODULARITY-FOUNDATION-01` — verify module boundaries/dependencies/extraction readiness after bootstrap/repository review.
- `P-CONSUMER-CAPABILITY-CATALOG-01` — model consumer types, capability profiles and realization/evidence mappings.
- `P-KNOWLEDGE-DIRECTION-ARBORESCENT-PROJECTION-01` — tree navigation/read models over graph-capable canonical knowledge; now include anthology/community projections.
- `P-INFRASTRUCTURE-PLACEMENT-CAPACITY-DISCOVERY-01` — cluster/namespace/utilization/security/availability/chargeback evidence.
- `P-EVENT-GOVERNANCE-TRANSPORT-BINDING-01` — after Issue #12 evidence.
- `P-ANALYTICS-EVIDENCE-READMODELS-01`
- `P-KNOWLEDGE-GRAPH-CQRS-PROJECTION-01` — support dynamic radar/multi-scale retrieval without forcing one graph-query mode.
- `P-INFORMATION-CLASSIFICATION-DATA-GOVERNANCE-01`
- `P-PORTFOLIO-BACKLOG-ENGINEERING-FLOW-01`
- `P-OPENSHIFT-SERVICE-READINESS-DISCOVERY-01`
- `P-DEVOPS-BANK-PLATFORM-INTEGRATION-01`
- `P-DEVOPS-AIOPS-ADOPTION-01`
- `P-KIBANA-LOG-EVIDENCE-INTEGRATION-01`
- `P-GOVERNANCE-DOMAIN-MAPPING-01`
- `P-GLO-ARCHETYPE-OPENSHIFT-INTEGRATION-DISCOVERY-01` after Issue #4 evidence or bounded discovery.
- `P-REGULATORY-ARTIFACT-OBLIGATION-MAPPING-01` after/for Issue #5.
- `P-WEB-BFF-CUSTOMER-POSITION-POC-01` after Issue #6/source semantics.
- `P-SPRING-CLOUD-GATEWAY-BANK-EDGE-POC-01` after Issue #7 baseline.
- `P-CUSTOMER-IAM-ADAPTIVE-ACCESS-POC-01` after bootstrap ownership and Issue #8 evidence.
- `P-BANKING-CQRS-PROJECTION-CONSISTENCY-01` should extend BI-0001/BI-0003.
- `P-CONTROLM-WORKLOAD-MODERNIZATION-01` only after Issue #9 representative malla evidence.
- `P-SMART-NOTIFICATION-INTEGRATION-DISCOVERY-01` after/beside Issue #10.
- `P-PCR-PERFORMANCE-CAPACITY-GATES-01` after Issue #11; bounded local JVM test-as-code may start independently.
- BI-0002 protocol/channel synchronization remains downstream of sufficient BI-0001/BI-0003 evidence.

## Handoff rule

Before handing a READY prompt to Devin, Work must:
1. refresh repository baseline/active direction/shared-surface ownership;
2. apply latest impact assessment and Session Context Pack;
3. classify reasoning/task mode and resolve strategic + task anchors;
4. apply user/role/environment/information-classification authorization before retrieval;
5. pin mandatory active direction/specification/ADR/policy/current-state constraints;
6. retrieve using the appropriate exact/vector/graph/tree-community/specialized read-model mix;
7. validate authority/freshness/supersession and contradictions;
8. materialize a bounded ContextPlan with inclusion reasons/provenance;
9. choose Devin Knowledge vs Skill vs Playbook vs task context vs MCP/on-demand retrieval deliberately;
10. do not mirror canonical knowledge into provider memory;
11. preserve consumer/capability/module/extraction/placement rules from DIRECTION-0013;
12. preserve existing-platform-first -> Spring -> Java/JVM -> other mature tech -> custom last;
13. identify performance/PCR, event, data freshness, gateway/IAM, job, notification and governance implications where applicable;
14. specify expected output/evidence and deterministic gates;
15. after execution, reconcile both result and context misses/rework back into governed knowledge/evals;
16. decide whether prompt remains READY, needs boundaries, must wait or is superseded.

Do not invent timestamps, execution state or Devin session references.
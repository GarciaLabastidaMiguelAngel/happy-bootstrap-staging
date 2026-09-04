# Project Direction Baseline

Status: ACTIVE
Direction revision: DIRECTION-0014
Previous direction: DIRECTION-0013
Previous accepted baseline commit: `c6babba6d501b9c071984990aebdf33893124284`
Repository role: Happy Work staging / prompt-governance control plane
Current operating emphasis: governed cognitive Copilot, dynamic knowledge/context orchestration, consumer-first capabilities, arborescent modularity, deterministic banking roads, evidence-driven extraction/placement and explainable platform evolution

## Continuity rule

DIRECTION-0014 incorporates DIRECTION-0013 and all earlier accepted direction unless explicitly overridden below.

DIRECTION-0013 remains recoverable from Git history and its detailed models remain active where not changed. Frozen historical releases/snapshots MUST NOT be rewritten.

DIRECTION-0014 is additive. It formalizes the cognitive knowledge/retrieval/context architecture; it does not reset banking, modularity, process, governance, compliance, DevOps or runtime direction.

## 1. RAG is an implementation mechanism, not the cognitive architecture

Architecture AI must not define its knowledge strategy as `put documents in a vector DB and call RAG`.

The target is an evidence-governed cognitive/context system in which RAG is one retrieval/generation mechanism among several.

Canonical path:

`Intent / Question / Work`
-> `Reasoning Mode + Strategic/Task Focus`
-> `Authorization / Classification`
-> `Knowledge Radar / ContextResolver`
-> `multi-signal retrieval + canonical read models`
-> `ContextPlan`
-> `LLM/Devin/tool execution if needed`
-> `claim/evidence verification`
-> `grounded answer / UNKNOWN / ResearchRequest / prepared action`
-> `deterministic gate/action for material change`.

## 2. Cognitive functions are mapped to explicit technical capabilities

Use cognitive-science models as inspiration/hypothesis generators, not as claims that the platform reproduces the human brain.

Engineering mapping:

- semantic memory analogue -> canonical knowledge graph + normalized entities/relationships + provenance-backed documents/evidence;
- episodic memory analogue -> durable Work, decisions, sessions, incidents, runtime/PCR/evolution history;
- procedural memory analogue -> deterministic Tools, Skills, Playbooks, tests and runbooks;
- working-memory analogue -> bounded `ContextPlan` for the current reasoning task;
- associative activation analogue -> graph traversal / dynamic relevance expansion from task anchors;
- executive-control analogue -> intent/reasoning-mode selection, policy/role checks, context budget and tool/provider routing;
- global-workspace/blackboard inspiration -> provider-neutral reasoning workspace in which standards, runtime, process, security, data and other knowledge sources contribute selectively;
- metacognitive/verification analogue -> evidence sufficiency, contradiction/supersession checks, claim verification, uncertainty/UNKNOWN and ResearchRequest generation.

These are architecture analogies to evaluate, not biological equivalence.

## 3. Knowledge Radar is a dynamic query-time projection

Governed by:
`work/COGNITIVE_KNOWLEDGE_RADAR_AND_CONTEXT_ORCHESTRATION_MODEL.md`

Canonical knowledge stays graph-capable and provenance-backed.

A knowledge item's effective distance changes with the current:
- question/task;
- solution/work item;
- role/authorization;
- environment;
- decision/gate;
- standards/policies;
- runtime state;
- time/freshness;
- reasoning mode.

Use two anchors:
- STRATEGIC CENTER: persistent platform/banking north star and mandatory cross-cutting constraints;
- TASK FOCUS: the current problem, which may move toward implementation, economics, security, Kafka, OpenShift, regulation, incident analysis or another domain.

Candidate attention rings:
- R0 PINNED/MANDATORY;
- R1 DIRECT EVIDENCE;
- R2 ADJACENT DEPENDENCIES;
- R3 CROSS-CUTTING/COMPARATIVE;
- R4 HORIZON/WEAK SIGNALS.

Rings are dynamic attention/context bands, not truth or permanent-importance labels.

## 4. Retrieval is hybrid and multi-scale

Governed by:
`work/KNOWLEDGE_ANTHOLOGY_AND_MULTI_SCALE_RETRIEVAL_MODEL.md`

Do not rely on embeddings alone.

Candidate pipeline:

`intent/anchors`
-> authorization/classification filter
-> mandatory direction/policy/current-state pinning
-> exact/lexical retrieval
-> vector semantic retrieval
-> graph neighborhood/traversal
-> tree/branch/community/anthology retrieval
-> specialized standards/process/runtime read models
-> fusion/deduplication/reranking
-> authority/freshness/evidence validation
-> context-budget allocation
-> ContextPlan.

Use:
- TREE for decomposition/navigation;
- GRAPH for canonical cross-cutting truth/impact;
- exact/lexical search for identifiers, contracts and standards;
- VECTOR retrieval for semantic similarity;
- community/anthology summaries for broad/global questions;
- direct source evidence for verification.

## 5. Knowledge Anthologies provide broad conceptual orientation

A Knowledge Anthology is a derived, curated, regenerable projection around a question/domain/vector.

It may contain:
- relevant literature/standards/institutional sources;
- canonical concepts and relationships;
- verified findings;
- competing interpretations;
- applicability;
- current bank/platform implications;
- technical realization links;
- runtime evidence;
- unresolved research;
- review/supersession state.

Anthologies are NOT canonical truth and must link back to evidence.

They bridge raw documents, graph nodes and high-level reasoning.

## 6. Context is a governed finite resource

Target:

`MINIMUM SUFFICIENT AUTHORIZED CONTEXT FOR THE CURRENT REASONING OBJECTIVE`.

Not:
- minimum tokens regardless of quality;
- maximum possible prompt;
- entire knowledge-base injection.

The ContextResolver must be able to materialize an auditable `ContextPlan` containing at least:
- intent/query;
- reasoning mode;
- strategic/task anchors;
- selected knowledge/evidence IDs;
- inclusion reason/priority;
- provenance;
- freshness;
- authorization/classification outcome;
- size/token estimate;
- contradictions/unknowns;
- provider projection choice.

Prefer progressive retrieval/context expansion when additional exact evidence becomes necessary.

## 7. Devin receives projections, not the canonical knowledge base

Governed by:
`work/DEVIN_CONTEXT_PROJECTION_AND_BUDGET_GOVERNANCE_MODEL.md`

Internal path:

`Architecture AI canonical knowledge`
-> `Knowledge Radar / ContextResolver`
-> `ContextPlan`
-> `ProviderProjectionPolicy`
-> `Devin Knowledge / Skill / Playbook / task context / MCP-tool retrieval`.

Use Devin mechanisms by purpose:
- Knowledge: stable cross-session context/advice suitable for Devin;
- Skill (`SKILL.md`): repo-scoped repeatable procedure;
- Playbook: reusable cross-session task/prompt pattern;
- session/task context: current objective/evidence/contracts/blockers;
- MCP/tools: exact on-demand retrieval/execution where preferable to front-loading.

Do NOT mirror the entire Architecture AI knowledge graph into Devin Knowledge.

Architecture AI remains canonical for truth, provenance, authorization, active direction, work, decisions, evidence and reconciliation.

Provider-specific projection remains replaceable through internal concepts such as ContextPlan, KnowledgeProjection, ProcedureProjection, EvidenceReference, ToolCapability and SessionWorkPackage.

## 8. RAG hallucination reduction requires a verification layer

RAG improves grounding but does not guarantee correctness when retrieval is incomplete, stale, contradictory or irrelevant.

Architecture AI therefore requires explicit answer/evidence semantics.

Candidate response assertions:
- FACT_SOURCE_VERIFIED;
- FACT_RUNTIME_VERIFIED;
- DERIVED_INFERENCE;
- RECOMMENDATION;
- HYPOTHESIS;
- UNKNOWN;
- CONTRADICTED;
- SUPERSEDED.

For material answers:
`generated claim`
-> `supporting evidence IDs`
-> `authority/freshness/applicability check`
-> `support/contradiction verification`
-> `publish or downgrade to uncertainty/UNKNOWN`.

Research Self-RAG/Corrective-RAG/NLI-style fact verification as candidate techniques, but do not adopt one blindly.

The hard project rule remains:
`INSUFFICIENT EVIDENCE -> UNKNOWN / RESEARCH REQUEST`, not confident invention.

## 9. Context/retrieval strategies must be evaluated

Governed research agenda:
`work/research/COGNITIVE_ARCHITECTURE_KNOWLEDGE_RETRIEVAL_RESEARCH_AGENDA.md`

Evaluate on repeatable Architecture AI tasks:
- vector-only RAG;
- lexical + vector;
- graph/local retrieval;
- global/community/anthology retrieval;
- hybrid fusion + reranking;
- dynamic radar/context budgets;
- progressive retrieval;
- claim verification;
- provider projection strategies.

Candidate metrics:
- retrieval precision/recall;
- mandatory-constraint miss rate;
- stale/superseded evidence leakage;
- unsupported-claim rate;
- task correctness/success;
- context size;
- retrieval latency;
- external-agent ACU/token usage where measurable;
- number of progressive expansions;
- human correction/rework;
- security/classification violations (target zero).

Do not freeze relevance weights/context sizes without eval evidence.

## 10. Knowledge direction from DIRECTION-0013 remains mandatory

Still active:

`RAW SOURCE/INFORMATION`
-> `EVIDENCE UNIT`
-> `NORMALIZED/CANDIDATE FACT`
-> `SOURCE-VERIFIED KNOWLEDGE`
-> `GOVERNED SEMANTIC RELATIONSHIPS`
-> `DECISION/STANDARD/PROCESS/SPECIFICATION`
-> `TECHNICAL REALIZATION BINDING`
-> `RUNTIME EVIDENCE`
-> `LEARNED PATTERN/REUSABLE CAPABILITY`
-> `AUTHORIZED CONTEXTUAL PROJECTION`.

Knowledge is accumulated toward decisions, execution, explanation, verification and learning—not as an unstructured document lake.

## 11. DIRECTION-0013 consumer-first/arborescent modularity remains active

Retain:
- ConsumerType -> Journey/UseCase -> RequiredTechnicalCapability -> quality/security/freshness/capacity profile -> existing-capability reuse -> smallest justified realization -> runtime/PCR evidence;
- `MINIMUM NECESSARY WORK PER CUSTOMER/CONSUMER OUTCOME`;
- root product -> stable trunks -> bounded branches -> evidence-driven extraction;
- Spring Modulith as logical modularity/verification, not physical architecture;
- explicit interfaces/state/transactions/dependencies for low-cost future extraction;
- tree for decomposition + graph for cross-cutting truth;
- Capability <-> Module <-> Deployable <-> Namespace <-> Cluster <-> Environment <-> Evidence;
- cluster/service count and chargeback/isolation decisions remain evidence-driven.

## 12. Earlier banking/process/governance direction remains active

All non-conflicting earlier rules remain, including:
- Dashboard + governed Copilot as architect cognitive surface;
- chat is non-canonical and material actions deterministic/gated;
- governance intent -> RealizationBinding -> implementation -> runtime evidence -> conformance;
- logical event/channel vs physical Kafka resource separation;
- QUERY / TRANSACTION / REQUEST / LONG_RUNNING_OPERATION distinction;
- OperationId and typed reference/folio traceability;
- process governance/design/realization/runtime separation;
- standards/compliance radar with exact applicability/denominator/evidence/exceptions;
- existing institutional capability -> Spring -> mature Java/JVM -> other mature technology -> custom last;
- customer IAM/adaptive risk, CQRS projections, Smart Notification reuse, Control-M discovery, PCR/test-as-code, DevOps operability and AIOps evidence-first;
- UNKNOWN -> ResearchRequest/Blocker -> evidence -> reconciliation;
- DETERMINISTIC -> TOOL -> SKILL -> AGENT;
- PLAN BEFORE EXECUTION;
- information classification/PCI/security/fraud/availability/performance/cost as cross-cutting vectors;
- one governed product/modular-monolith first until extraction is evidenced;
- no unnecessary architectural complexity.

## Immediate execution priority

1. Refresh future LAB/bootstrap/Devin handoffs against DIRECTION-0014.
2. Make Knowledge Radar + ContextPlan + provider projection first-class in Copilot/agent-runtime design.
3. Build the cognitive/context research anthology and evaluation harness before freezing retrieval policy.
4. Define a small provider-neutral ContextPlan contract and test it on representative architecture + implementation tasks.
5. Separate stable Devin Knowledge, procedural Skills, reusable Playbooks and task-local/on-demand context.
6. Add claim/evidence/uncertainty verification to the answer pipeline.
7. Preserve arborescent capability/modularity and canonical graph knowledge models.
8. Continue existing banking/event/OpenShift/PCR/IAM/process/compliance research lanes in parallel.
9. Feed retrieval/context misses and resulting rework back into context-strategy learning.

## Material-change triggers added by DIRECTION-0014

Increment direction again if accepted policy materially changes:
- canonical memory/knowledge representation;
- Knowledge Radar/attention model;
- retrieval architecture selected as platform standard;
- claim-verification authority/semantics;
- provider-projection authority;
- context budget/security model;
- persistent Devin/provider Knowledge policy;
- cognitive evaluation methodology.

## Working loop

Question/work/decision
-> strategic center + task focus
-> authorization/classification
-> dynamic knowledge radar
-> hybrid/multi-scale retrieval
-> ContextPlan
-> deterministic tool / Copilot / Devin reasoning
-> claim/evidence verification
-> grounded answer/action/UNKNOWN
-> runtime/work evidence
-> retrieval/context evaluation
-> knowledge/policy improvement.

The target is not a clever RAG demo. It is a governed cognitive platform that can explain what it knows, why a piece of knowledge was relevant, what evidence supports an answer, what it does not know, and why it selected exactly that context for the current reasoning or delegated execution task.
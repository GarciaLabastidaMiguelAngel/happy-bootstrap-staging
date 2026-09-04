# Cognitive Knowledge Radar and Context Orchestration Model

Status: ACTIVE_DIRECTION_MODEL
Direction: DIRECTION-0014

## Purpose

Define how Architecture AI should organize and retrieve knowledge for reasoning without treating the entire knowledge base as prompt context.

The model is inspired by cognitive-science and knowledge-representation ideas such as semantic networks, spreading activation, cognitive architectures and workspace-style coordination, but it MUST NOT claim that Architecture AI reproduces human cognition.

The engineering goal is simpler and testable:

`MINIMUM SUFFICIENT AUTHORIZED CONTEXT FOR THE CURRENT REASONING OBJECTIVE`

with provenance, policy, freshness and evidence.

## 1. Radar is a dynamic projection, not the canonical store

The canonical knowledge remains graph-capable and provenance-backed.

The `Knowledge Radar` is a query-time/read-model projection over that knowledge.

A knowledge item is not permanently `near` or `far`. Its effective distance changes with:
- current user question;
- active solution/initiative/work item;
- role and authorization;
- environment;
- decision/gate being evaluated;
- applicable standards/policies;
- runtime conditions;
- time/freshness;
- requested reasoning mode.

Therefore radar position is COMPUTED PER CONTEXT, not stored as an absolute truth.

## 2. Dual-center model

Use two complementary anchors.

### Strategic Center

Persistent north-star context such as:
- banking-platform objectives;
- active architecture direction;
- customer/channel optimization goals;
- security/fraud/availability/data/compliance vectors;
- institutional constraints and existing-platform reuse.

### Task Focus

Dynamic center for the current question or task.

Examples:
- Customer Position performance;
- economic trend impact on platform strategy;
- Kafka event topology;
- PCI applicability;
- an OpenShift incident;
- a Devin implementation task.

The retrieval system should optimize primarily for Task Focus while retaining Strategic Center constraints that materially affect the answer.

This prevents two failure modes:
- sending generic banking/platform knowledge to every task;
- answering a locally relevant question while forgetting non-negotiable strategic/security/governance constraints.

## 3. Radar rings

Candidate query-time rings:

### R0 — Pinned / Mandatory

Items that MUST be present when applicable:
- active direction/specification/ADR;
- hard policy/security/classification constraints;
- task success criteria;
- authoritative current contract/state;
- explicit user instruction;
- applicable mandatory gate/control.

### R1 — Direct Evidence

Directly supporting information:
- current implementation/code/configuration;
- authoritative source documents;
- runtime/PCR evidence;
- current decisions;
- directly related graph neighbors.

### R2 — Adjacent Dependencies

Important context one or more relationships away:
- upstream/downstream dependencies;
- data authority/freshness;
- related events/APIs/processes;
- module/runtime placement;
- current blockers/research.

### R3 — Cross-cutting / Comparative Knowledge

Potentially relevant broader criteria:
- standards;
- known patterns;
- historical decisions;
- alternative technologies;
- operational/FinOps implications;
- regulatory/compliance context.

### R4 — Horizon / Weak Signals

Distant but potentially important knowledge:
- economic/industry trends;
- emerging standards;
- technology evolution;
- external research;
- long-term strategic options.

Rings are budget/attention bands, not epistemic quality labels. A R4 item can be authoritative; it is simply less central to the current task unless the focus moves.

## 4. Retrieval is multi-signal

Do not rely on vector similarity alone.

Candidate retrieval pipeline:

`Intent / Focus Anchors`
-> authorization + classification filter
-> active-direction/policy pinning
-> lexical/exact retrieval
-> vector semantic retrieval
-> graph neighborhood/traversal
-> arborescent branch/community lookup
-> standards/process/runtime specialized read models
-> candidate fusion/deduplication
-> reranking
-> evidence/freshness validation
-> context-budget allocation
-> Context Pack.

This combines:
- exact-term retrieval for identifiers/contracts/standards;
- semantic retrieval for concept similarity;
- graph retrieval for relationships/impact;
- tree/community summaries for global orientation;
- deterministic pinned constraints for non-negotiable context.

## 5. Candidate attention dimensions

Architecture AI may compute an `AttentionScore` or equivalent policy from dimensions such as:
- task semantic relevance;
- graph/causal proximity;
- strategic alignment/impact;
- source authority;
- applicability;
- evidence strength;
- freshness;
- runtime recency;
- decision/gate impact;
- cross-cutting risk relevance;
- unresolved contradiction/novelty;
- user/role scope;
- context token/cost footprint.

Hard authorization/classification/policy filters occur BEFORE relevance scoring.

Do not hard-code a single universal formula before eval evidence. Different reasoning modes may require different weighting.

## 6. Reasoning modes change the radar

Examples:

### IMPLEMENT
Prioritize:
code/config -> contracts -> module boundaries -> tests -> build/deploy constraints -> relevant decisions/standards.

### ARCHITECTURE_DECISION
Prioritize:
objectives -> alternatives -> evidence -> standards -> current realization -> runtime/cost/risk -> impact.

### INCIDENT_DIAGNOSIS
Prioritize:
runtime topology -> recent changes -> metrics/logs/traces -> dependency health -> known runbooks -> design expectations.

### GOVERNANCE / CONFORMANCE
Prioritize:
authority -> applicability -> requirement/control -> realization binding -> gate/test -> evidence -> exceptions.

### STRATEGY / ECONOMICS
Move external economic/industry/technology knowledge closer while retaining platform strategy/cost/capacity/roadmap bindings.

The knowledge store does not move; the query-time projection does.

## 7. Context Plan is auditable

Before an external reasoning provider such as Devin receives context, Architecture AI should be able to materialize a `ContextPlan` containing at least:
- query/intent;
- strategic anchor;
- task anchors;
- reasoning mode;
- selected knowledge/evidence IDs;
- inclusion reason;
- priority/ring;
- provenance;
- freshness;
- classification/authorization decision;
- token/size estimate;
- omitted-but-relevant candidates when useful;
- unresolved/contradictory evidence;
- provider-specific projection choice.

This allows the Copilot to answer:
`Why did you send this context to Devin?`

and:
`What did you intentionally leave out?`

## 8. Context budget is a governed resource

Use bounded budgets rather than `send everything`.

Candidate sections:
1. task / success criteria;
2. active direction and hard constraints;
3. current evidence/implementation;
4. required contracts/interfaces;
5. adjacent dependencies;
6. applicable standards/policies;
7. unresolved questions/blockers;
8. available Tools/Skills and deterministic gates;
9. provenance/reference IDs.

The controller may use:
- fixed per-section minimums/maximums;
- adaptive expansion when confidence is low;
- progressive retrieval/on-demand tool calls;
- summaries for broad context;
- raw evidence only when needed.

The target is `minimum sufficient context`, not minimum tokens at any cost and not maximum context by default.

## 9. Progressive context expansion

Prefer progressive disclosure:

`small high-confidence context`
-> reason / inspect
-> discover missing edge/evidence
-> retrieve targeted additional context
-> continue.

This is especially important for long-running agent tasks where early full-corpus injection increases noise, staleness and cost.

## 10. Explainability and evaluation

Context orchestration must be measured.

Candidate metrics:
- retrieval precision/recall against gold tasks;
- mandatory-constraint miss rate;
- stale/superseded evidence leakage;
- unsupported-claim rate;
- answer/task success;
- token/context size;
- retrieval latency;
- external-agent ACU/token cost;
- number of progressive expansions;
- security/classification violations (target zero);
- human corrections caused by missing/irrelevant context.

Architecture AI should compare retrieval/context strategies under repeatable evals rather than select one by intuition.

## Goal

Create a cognitive retrieval layer where knowledge can be vast while attention remains bounded, dynamic and explainable: the current task becomes the radar focus, strategic direction remains a persistent north star, graph/tree/vector/exact evidence are combined, and only the context that materially helps the current reasoning objective is projected outward.
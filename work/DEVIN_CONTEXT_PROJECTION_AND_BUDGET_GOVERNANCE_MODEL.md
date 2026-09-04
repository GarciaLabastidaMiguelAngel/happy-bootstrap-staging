# Devin Context Projection and Budget Governance Model

Status: ACTIVE_DIRECTION_MODEL
Direction: DIRECTION-0014

## Purpose

Define how Architecture AI controls what knowledge is projected to Devin, why it is sent, how much is sent, and which Devin mechanism should carry each type of information.

Architecture AI remains the canonical knowledge/control system. Devin is an execution/reasoning provider with its own session, Knowledge, Skills and Playbook mechanisms.

## 1. Provider projection boundary

Do not mirror the entire Architecture AI knowledge base into Devin.

Use a provider-projection layer:

`Architecture AI canonical knowledge`
-> `ContextResolver / Knowledge Radar`
-> `ContextPlan`
-> `ProviderProjectionPolicy`
-> `Devin session / Knowledge / Skill / Playbook / MCP tool access`.

The local platform decides what is eligible and useful to expose, subject to role, classification, project, environment, direction and task.

## 2. Separate Devin mechanisms by purpose

### Devin Knowledge
Use for stable context/instructions that should be available across sessions when relevant, for example:
- stable codebase conventions;
- institutional development practices that are approved for Devin;
- repository architecture constraints;
- durable testing/deployment guidance;
- high-value environment facts that are not secret and do not change frequently.

Do NOT use Devin Knowledge as the canonical bank knowledge graph or as a dump of raw documents.

### Skills (`SKILL.md`)
Use for reusable deterministic/repeatable procedures, for example:
- inspect a module;
- run architecture verification;
- execute test workflow;
- prepare PCR evidence;
- validate a deployment package;
- perform bounded repository investigation.

Skills are procedure, not general knowledge.

### Playbooks
Use for reusable cross-session/cross-repo prompt/work patterns where a playbook is a better fit than repo-scoped procedure.

### Task/session context
Use for current work only:
- success criteria;
- current solution/work package;
- selected evidence;
- current contracts/files;
- current blockers;
- branch/commit context;
- current runtime/PCR findings;
- bounded applicable standards/policies.

### MCP / tool retrieval
Prefer on-demand retrieval when the agent can safely request more exact context instead of front-loading large amounts.

## 3. Context ownership

Architecture AI controls:
- canonical truth;
- authorization/classification filtering;
- current direction/specification;
- evidence freshness;
- ContextPlan;
- task-specific context budget;
- provider projection policy;
- what must be retrieved on demand;
- reconciliation of Devin results back into project state.

Devin controls its internal model reasoning and may automatically recall Devin Knowledge according to its product behavior.

Because Devin may recall its own Knowledge, Architecture AI must avoid contradictory duplicated instructions and should version/provenance-track provider projections.

## 4. Projection classes

Each projected item should be classified, for example:
- PROVIDER_STABLE_KNOWLEDGE;
- PROVIDER_REPO_SKILL;
- PROVIDER_PLAYBOOK;
- SESSION_MANDATORY_CONTEXT;
- SESSION_SUPPORTING_CONTEXT;
- ON_DEMAND_REFERENCE;
- DO_NOT_PROJECT;
- REQUIRES_HUMAN_APPROVAL;
- UNKNOWN_CLASSIFICATION.

## 5. Context-pack structure

Candidate Devin session pack:

### A. Objective
- task;
- success criteria;
- explicit non-goals.

### B. Current authority
- active direction/specification/ADR;
- current work package;
- allowed branch/repository/surface.

### C. Hard constraints
- security/classification;
- institutional-platform reuse;
- technology baseline;
- gates;
- no-invention rules.

### D. Current technical evidence
- exact code/files/contracts/config;
- runtime/PCR evidence;
- current dependency/module mapping.

### E. Relevant surrounding context
- adjacent capabilities;
- event/data/process relationships;
- applicable standards only where material.

### F. Unknowns/blockers
- what must not be inferred;
- evidence requests;
- work that can continue independently.

### G. Procedures/tools
- Skills/MCP/tool references;
- deterministic verification commands/gates.

### H. Expected output/evidence
- files/commits/tests/reports;
- provenance and reconciliation requirements.

## 6. Context budget controller

The ContextResolver should produce a bounded budget by task type.

Candidate policy:
- reserve mandatory budget for objective/hard constraints;
- reserve evidence budget for direct implementation/current-state proof;
- allocate adjacency/standards budget adaptively;
- compress broad background into summaries/anthologies;
- keep raw source references available for on-demand retrieval;
- stop adding context when marginal utility falls below noise/cost/risk.

Exact token thresholds are implementation/eval decisions and should not be frozen without measurement.

## 7. Progressive retrieval loop

Preferred long-running pattern:

`Initial Context Pack`
-> Devin inspects/reasons
-> identifies missing evidence
-> bounded MCP/read retrieval
-> context expansion
-> work continues
-> result/evidence returned
-> Architecture AI reconciles canonical state.

This is preferable to sending the full project corpus at session start.

## 8. Provider-specific projections remain replaceable

Architecture AI should not encode its canonical knowledge semantics directly around one Devin-specific feature.

Use provider-neutral internal types such as:
- ContextPlan;
- KnowledgeProjection;
- ProcedureProjection;
- EvidenceReference;
- ToolCapability;
- SessionWorkPackage.

Then adapt to Devin Knowledge/Skills/Playbooks/MCP/session mechanisms.

This preserves future compatibility with other agents/providers.

## 9. Auditability

For material delegated work preserve:
- ContextPlan ID;
- selected knowledge/evidence IDs;
- projected stable Knowledge/Skill versions where relevant;
- task prompt/work package;
- Devin session reference;
- outputs/commits/evidence;
- reconciliation decision;
- context misses/corrections discovered afterward.

This enables context-quality learning over time.

## 10. Context evals

Evaluate alternative context plans using repeatable tasks:
- task success/correctness;
- missing-constraint failures;
- unsupported assumptions;
- retrieval precision;
- context size;
- latency;
- Devin ACU/token usage where measurable;
- number of clarification rounds;
- amount of human correction;
- security/classification violations;
- rework/refactor caused by missing context.

The goal is not simply cheapest context. The goal is the smallest context that reliably produces the required governed outcome.

## Goal

Architecture AI should be able to answer, before delegating:

`What exactly does Devin need to know for this task?`
`Why does it need each item?`
`What should remain local/on-demand?`
`Which procedure should be a Skill instead of prose context?`
`What knowledge is stable enough to project across sessions?`
`What must never leave the authorized local context?`

This makes context selection an explicit platform capability rather than an ad-hoc prompt-writing activity.
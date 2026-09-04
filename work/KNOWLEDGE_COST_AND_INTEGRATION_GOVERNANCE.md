# Knowledge, AI Cost and Integration Governance

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0003

## 1. Objective

Architecture AI must progressively absorb real platform/bank knowledge while minimizing avoidable AI-provider consumption and preserving explicit authority for each class of information.

The goal is not maximum data sent to Devin.

The goal is the smallest sufficient governed context that produces reliable work.

## 2. Platform context layers

The Director must distinguish at least:

### Architecture AI platform

The product being built: Spring Boot, Angular, MCP, work/sagas/events, observability, knowledge, LAB, agent runtime, documentation, governance.

### Banking platform / enterprise context

The organizational/business/technical environment Architecture AI analyzes and supports: standards, architecture domains, applications, APIs, data, infrastructure, security, compliance, processes and existing documentation.

Do not conflate improving Architecture AI itself with designing a banking solution.

## 3. Knowledge lifecycle

Use a governed lifecycle:

SOURCE
→ inventory
→ classification
→ relevance/value
→ extraction/profile
→ evidence
→ candidate knowledge
→ validation/reconciliation
→ canonical/operational knowledge
→ projections

The system must be able to explain what it knows, where it came from, its authority, freshness and validation state.

## 4. Storage authority

### Git

Store/version information that must be auditable, reviewable and tied to engineering/architecture evolution:

- source
- specifications
- contracts/schemas/OpenAPI
- architecture definitions
- policies/gates
- infrastructure/config definitions owned by Architecture AI
- ADRs/decisions where governed as source artifacts
- prompt/governance history
- manifests
- simulation definitions
- model/dataset manifests
- documentation source intended for versioned engineering/architecture history

### Local operational database

Store mutable runtime state:

- work/session/assignment state
- events/sagas
- blocker/gate execution state
- operational ledgers
- observations/metadata
- mutable knowledge-control state where Git is not appropriate

### Lucene/vector indexes

Store rebuildable retrieval/search/vector structures, not canonical truth by default.

### OneDrive/FileShare

Human-facing/source workspace according to existing ingestion and delivery policies. Excel/PDF/PPT/Word deliverables may be projected here for people without moving engineering truth out of Git.

### Nexus

Immutable distributable application/runtime/model/dataset artifacts where applicable.

### Future SharePoint/Confluence

Governed human/enterprise publication destinations, not automatic replacement for Git or runtime stores.

## 5. Human deliverables vs source of truth

Excel, PDF, Word, PPT or Confluence pages may be required human deliverables.

They are projections from governed state where feasible.

For example:

Git/specifications/work/evidence
→ document projection
→ Excel/PDF/PPT/Confluence/FileShare

Do not require humans to reconstruct the product state manually from disconnected spreadsheets.

## 6. Autonomous knowledge target

A key platform milestone is reaching a state where Architecture AI can:

- continuously inventory/update configured knowledge sources
- detect relevant deltas
- update local knowledge/indexes
- produce bounded AI reasoning work only when needed
- maintain knowledge provenance/graph relationships
- expose knowledge-growth metrics
- create research/validation work for unknowns
- update documentation projections

without a recurring manual process of downloading and handing over large knowledge packages.

Manual bootstrap packages are transitional, not the target operating model.

## 7. What goes to Devin

Send to Devin only what is needed for the current reasoning/execution.

Prefer:

- IDs/references
- bounded Evidence Packs
- current specification/work package
- relevant constraints/decisions
- structured tool results

Avoid:

- whole raw repositories/doc libraries when not needed
- full chat history
- repeated static context that can be retrieved deterministically
- data that can be processed locally by deterministic components

MCP/tool access should let Devin pull required evidence on demand.

## 8. AI consumption objective

Minimizing unnecessary Devin consumption is an explicit architecture objective.

Measure where practical:

- sessions by work type
- usage/ACUs/tokens where available
- evidence/context size
- tool calls
- repeated reasoning operations
- retries/rework
- human-wait cost
- work completion/value

Use LAB simulations/experiments to evaluate alternative policies.

## 9. Migration from AI reasoning to deterministic capability

When an AI-assisted operation becomes repeatable/stable, evaluate moving it through:

AI REASONING
→ deterministic specification
→ Spring/Gradle/local algorithm/tool
→ optional reusable Skill/orchestration

Do not remove AI reasoning where ambiguity/judgment remains valuable.

Use the governing order for new capability design:

DETERMINISTIC
→ TOOL
→ SKILL
→ AGENT

## 10. Spring/local agents

Do not create Spring-hosted agents merely to reduce Devin cost.

First determine:

- whether the operation is actually deterministic
- whether a Tool/Skill is enough
- what model/runtime would be required locally
- hardware/runtime cost
- maintenance/security implications
- quality/evaluation evidence
- why local agent execution improves cost/control/latency/privacy/reliability

Any future local model/agent must be justified with measured workload and evaluation evidence.

## 11. Integration evolution: MCP vs direct APIs

MCP is valuable as an agent capability abstraction. It is not automatically the best implementation for every enterprise integration.

For a system such as Confluence, evaluate two layers separately:

### Agent-facing capability

Devin may use an Architecture AI MCP tool such as:

`confluence.search`
`confluence.publishDraft`

### Implementation adapter

Architecture AI may implement the capability through an official direct Java/HTTP API client when that provides better:

- stability
- explicit authentication/authorization
- control
- traceability/auditability
- performance
- batching/pagination
- error handling/retry
- testability
- cost

Do not confuse the protocol exposed to an agent with the implementation used behind the tool.

## 12. Integration decision proof of concept

When the best integration is uncertain:

1. create a LAB experiment
2. define measurable criteria
3. implement minimal alternatives where justified
4. collect evidence
5. compare
6. record decision
7. promote the selected adapter/pattern

Examples:

- Confluence MCP-only path vs direct Java API behind MCP capability
- provider polling vs callback/webhook if available
- local deterministic parsing vs AI extraction
- vector rerank budgets

## 13. Documentation and publication strategy

Architecture AI should progressively be able to create governed artifacts such as:

- technical designs
- architecture descriptions
- solution specifications
- ADRs
- evidence reports
- compliance/gate reports
- implementation status
- release/runbooks

The authoritative source and the human publishing destination may differ.

For an auditable technical design, a versioned source/PDF/manifest may live in Git/Nexus as governed evidence while a human-friendly publication is projected to Confluence/SharePoint/FileShare as policy requires.

Do not decide final enterprise retention/publication policy without evidence.

## 14. Knowledge/graph evolution

New graph entities/relationships/layers should arise from demonstrated retrieval/reasoning/governance needs.

Every material graph schema extension should record:

- use case
- new entity/relationship semantics
- provenance requirements
- migration/index consequences
- querying value
- compatibility

Do not grow the graph ontology indefinitely because new data exists.

## 15. Dashboard visibility

The Director should eventually expose:

- sources known/inventoried
- source freshness
- knowledge/evidence counts
- candidate/canonical/conflicting knowledge
- graph growth
- index/vector growth
- dataset/model evolution separately
- AI provider usage/cost trend
- deterministic vs AI-handled work distribution
- top repeated AI reasoning operations that may be automation candidates
- publication/documentation status
- integration health (Confluence/OneDrive/etc.)

## 16. Principle

Keep durable truth where it belongs.

Project only what humans/agents need.

Measure AI use.

Move repeatable work toward deterministic execution.

Use Devin where reasoning adds value.

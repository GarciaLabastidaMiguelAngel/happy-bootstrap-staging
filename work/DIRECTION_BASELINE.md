# Project Direction Baseline

Status: ACTIVE
Direction revision: DIRECTION-0003
Previous direction: DIRECTION-0002
Repository role: Happy Work staging / prompt-governance control plane
Current operating emphasis: LAB / local-first evolution with Director Chat, governance gates, planning-first engineering, continuous quality and AI-cost-aware autonomy

This file captures the current working direction used to prepare and reconcile Devin sessions. It does not replace the implementation repository or validated release payloads.

## Primary mission

Evolve Architecture AI as one governed product with a modular Spring Boot core, Angular UI, MCP capability plane, durable work/session/event/saga state, local-first observability and simulation, and a clean path to future OpenShift SERVICE mode.

Architecture AI must progressively operate as a Director/Copilot for architecture work. It keeps a complete governed view of objectives, standards, blockers, ownership, work, evidence, technical quality, documentation, compliance, knowledge, AI consumption and platform state, and exposes that view through the dashboard/chat.

## First tangible product objective

Before the whole platform is complete, the local LAB build must become visibly useful.

The first fast user-facing objective remains:

Angular Dashboard
→ Director Chat
→ Spring Boot Architecture AI
→ governed work/context
→ supported Devin API

The chat must be able to explain:

- current direction
- what is implemented
- what is planned
- what is blocked
- who/which workstream owns the blocker
- what evidence is missing
- what can continue in parallel
- what quality/issues are open
- what must happen next

The chat is a projection over governed state, not the source of truth.

## Current architectural direction

- One product first; modular monolith before microservices.
- Local-first execution now; OpenShift-ready contracts later.
- Work is durable; provider sessions are ephemeral.
- Devin is the first agent provider, not the architecture itself.
- MCP is the tool/resource/capability plane.
- Provider APIs control provider lifecycle where appropriate.
- A2A compatibility should be preserved for future agent-to-agent interoperability.
- Eventing, sagas, observability, audit, notifications, sessions and agent runtime are shared platform capabilities, not ad-hoc per-feature implementations.
- Git governs source/definitions/contracts/manifests/prompt governance; Nexus governs immutable distributable artifacts; local stores govern mutable runtime state; LAB analytical storage governs observation/simulation datasets.
- OpenTelemetry/OTLP are the telemetry standards boundary; local Collector first, future OpenShift deployment later.
- Deterministic framework/tool execution is preferred over LLM reasoning whenever the problem can be computed or validated deterministically.
- Non-deterministic reasoning must be enclosed by structured input/output and deterministic validation/policy.
- Engineering work must delegate broad unresolved research rather than silently expanding into open-ended discovery.
- Architecture planning should reason top-down from organizational/business objectives through enterprise architecture, governance, solution/data/application/technology/security/operations concerns rather than optimizing isolated technical areas.
- Planning before execution is the default engineering discipline for material work.
- Capability delivery and continuous quality/refactor are synchronized loops over the same product and direction.
- AI-provider consumption reduction through deterministic migration is an explicit measurable architecture objective.
- Manual bootstrap/knowledge handoff packages are transitional; the medium-term target is governed autonomous knowledge acquisition/update.

## Governing construction order

Until explicitly revised, evaluate new capabilities in this order:

DETERMINISTIC
→ TOOL
→ SKILL
→ AGENT

Questions:

1. Can the requirement be implemented/verified deterministically with existing frameworks/contracts?
2. If not, does a bounded Tool add the missing deterministic capability?
3. If repeated procedural orchestration is needed, is a Skill justified?
4. Only after those layers are insufficient, evaluate whether an Agent is justified.

Do not create autonomous agents merely because a problem contains ambiguity.

## Planning-before-execution rule

For material changes use:

Objective
→ current context
→ specification
→ architecture/impact plan
→ blocker/research classification
→ parallelization decision
→ execution plan
→ implementation
→ deterministic validation
→ evidence
→ continuous quality review
→ reconciliation
→ documentation

The plan must identify affected/shared/protected surfaces, dependencies, applicable gates, acceptance evidence and whether unresolved research is blocking.

## Research blocking model

Classify unresolved questions as:

- BLOCKING_NOW
- NON_BLOCKING_WITH_SAFE_DEFAULT
- PARALLEL_RESEARCH
- DEFERRED

Only affected decisions/surfaces stop.

A safe temporary/default implementation may proceed only when it is framework/standard aligned, reversible, contract-safe, security/compliance-safe and bounded in migration/refactor cost.

Broad research is delegated through a ResearchRequest/workstream; Engineering does not become an open-ended research agent.

## Specification-first rule

Specification is the first governing artifact for material behavior.

Preferred flow:

Specification
→ formal contract/schema where applicable
→ implementation boundary
→ implementation
→ deterministic validation
→ evidence
→ documentation/reconciliation

For HTTP APIs, prefer governed OpenAPI/Swagger contracts where appropriate. Controllers/clients must conform to the contract rather than becoming independent undocumented definitions.

Markdown may explain architecture and rationale, but executable behavior must not remain only as prose when a formal contract exists.

## Director/collaboration model

The platform Director coordinates rather than doing every kind of work itself.

Logical workstream types include:

- Architecture / Planning
- Engineering
- Research / Discovery
- Validation / Testing
- Compliance / Security
- Documentation
- Data / Knowledge Governance
- Operations / Observability
- Continuous Quality / Refactor
- Reconciliation

These are workstream roles first. Do not create permanent autonomous agents until deterministic tools/skills and real workload justify them.

## Continuous quality/refactor model

The accepted integration baseline is continuously analyzed using real deterministic evidence where available:

- builds/tests
- dependency reports
- module verification
- static analysis/lint
- API/schema drift
- migrations
- runtime errors
- OpenTelemetry metrics/traces
- security findings
- issue/defect trends

Findings become governed issues/work rather than chat-only observations.

Refactor work must preserve public contracts unless an approved contract change exists. Material refactors pass normal impact analysis/gates.

## Parallel development / Git model

Parallelization is by bounded capability/module ownership, not arbitrary session count.

Before parallel work identify:

- owned modules/files
- shared contracts
- protected surfaces
- migration ownership
- API/schema ownership
- event/saga ownership
- build/config ownership
- merge/reconciliation point

High-risk shared foundations receive one primary owner at a time.

`main` represents the accepted integration baseline. Experimental/LAB branches do not silently become the shared runtime baseline.

Material defects/gaps/risks/technical debt should be represented as governed issues or WorkItems linked to Git evidence, branch/commit/PR and validation.

## Governance gates

Work progresses through explicit gates where applicable:

G0 Intent/Scope
G1 Specification
G2 Standards/Evidence
G3 Architecture
G4 Security/Compliance
G5 Contract/Compatibility
G6 Engineering Quality
G7 Operability/Observability
G8 Documentation
G9 Reconciliation/Acceptance

Gates should be deterministic/machine-verifiable whenever practical.

The dashboard/chat must be able to explain which gate is blocked, the blocker, ownership, required evidence/action and whether unaffected work can continue.

## Pattern policy

Use framework-native and standard patterns before custom infrastructure.

Patterns are selected to solve demonstrated problems, not for pattern compliance.

Prefer Spring-managed lifecycle/dependency injection over manual Singleton patterns.

For material pattern choices record problem, simpler/framework-native option, selected pattern, rationale, trade-offs and validation.

## Current platform modes

- PLATFORM_DEV: develops Architecture AI itself.
- SOLUTION: stable local architect runtime.
- LAB: isolated experimentation, replay, simulation and ML evaluation.
- SERVICE: future central OpenShift runtime using the same application core.

Current working emphasis is LAB/local development. LAB experiments must not silently become canonical SOLUTION state.

LAB may use the supported Devin API for safe real POCs such as session creation/messaging/provider communication where needed to validate architecture.

## Current cross-cutting planes

1. Build/release plane
2. Local knowledge/ingestion plane
3. Event platform
4. Saga/work orchestration
5. Agent runtime/session/communication plane
6. MCP capability plane
7. Observability/OpenTelemetry plane
8. Audit plane
9. Human attention/notification/decision plane
10. LAB/simulation/evaluation plane
11. Dashboard/control-plane visibility
12. Director/gate/specification governance plane
13. Documentation/evidence projection plane
14. Continuous quality/refactor plane
15. AI-consumption/cost governance plane

## Governance principles

- No session may depend on accidental chat context.
- Every delegated session receives a bounded Session Context Pack.
- Every prompt references a direction revision and repository baseline.
- Material direction changes require impact analysis across active sessions.
- Active sessions are classified after material changes as UNAFFECTED, REVIEW_REQUIRED, PAUSE_REQUIRED or SUPERSEDE_REQUIRED.
- Missing context results in discovery/reconciliation, not guessing.
- Session completion does not imply work completion.
- Provider/session state does not overwrite Architecture AI canonical work state.
- Simulation distinguishes OBSERVED, SIMULATED, ASSUMED and EXPERIMENTAL inputs.
- Knowledge accumulation, dataset evolution and model learning must remain visibly distinct.
- A green build does not override a failed required specification/architecture/security/compliance gate.
- Documentation is part of governed completion, not post-hoc cleanup.
- Research blocks only the affected decision/surface when safe work can continue.
- AI must not fabricate deterministic quality/metric evidence.
- Human deliverables are projections from governed state where feasible.

## Enterprise architecture / framework direction

Architecture AI should progressively map relevant enterprise architecture and governance methods, including TOGAF and applicable standards/frameworks, to actual organizational objectives and the architecture lifecycle.

Do not create isolated framework-specific areas without showing how they contribute to the governed end-to-end solution process.

Research/Discovery workstreams investigate RFCs, standards and frameworks when needed and return evidence to Architecture/Planning; Engineering does not own open-ended standards research.

## Architecture AI platform vs banking platform context

The Director must distinguish:

### Architecture AI platform

The product being built and operated.

### Banking/enterprise platform context

The business, process, application, API, data, infrastructure, security, compliance and organizational knowledge Architecture AI is intended to analyze and improve.

The Director must be able to explain which context a statement, blocker, specification or objective belongs to.

## Data and knowledge authority

Preserve explicit storage authority.

### Git

- source
- specifications
- contracts/schemas/OpenAPI
- policies/gates
- architecture definitions
- infrastructure/config definitions owned by Architecture AI
- prompt/governance history
- manifests
- simulation definitions
- model/dataset manifests
- auditable architecture/engineering documentation source where appropriate

### Operational databases

- mutable work/session/event/saga/runtime state
- blocker/gate execution state
- operational ledgers/metadata
- mutable knowledge-control state where Git is not appropriate

### Lucene/vector indexes

- retrieval/index state and rebuildable search structures unless explicitly governed/promoted otherwise

### OneDrive/FileShare

- enterprise/personal source material and managed human document workspace according to ingestion/governance policy
- human-facing Excel/Word/PPT/PDF projections where appropriate
- not active transactional runtime storage

### Nexus

- immutable distributable artifacts

### LAB analytical storage

- observation snapshots
- replay/simulation datasets
- experimental outputs

### Future Confluence/SharePoint

- governed publication destinations where appropriate
- not automatic replacement for Git/runtime authorities

Do not move source-of-truth authority implicitly because a component is convenient.

## Knowledge autonomy target

Architecture AI should progressively reach a point where configured knowledge sources are inventoried, classified, updated, indexed and reconciled continuously without recurring manual package handoff.

The target loop is:

source delta
→ deterministic inventory/relevance/extraction
→ local evidence/knowledge update
→ bounded AI work only when needed
→ validation/reconciliation
→ graph/index/document projections

Manual bootstrap packages are transitional.

## What goes to Devin

Send only the smallest sufficient governed context:

- WorkPackage/specification
- relevant constraints/decisions
- bounded Evidence Packs
- IDs/references
- structured tool results

Avoid full chat histories, complete document libraries or repeated static context when local deterministic retrieval/tools can provide it on demand.

## AI usage/cost objective

Reducing unnecessary Devin consumption is an explicit platform objective.

Measure where available:

- sessions/work type
- ACUs/tokens/usage units
- context/evidence size
- tool calls
- retries/rework
- duration
- work completion/value

Repeated AI-assisted operations should be evaluated for migration toward deterministic Spring/Gradle/local algorithms/tools.

The objective is not to eliminate Devin; Devin remains the reasoning provider where reasoning adds value.

## MCP vs direct integration rule

Separate:

1. agent-facing capability protocol
2. backend implementation adapter

Example:

Devin
→ Architecture AI MCP `confluence.search`
→ Architecture AI direct official Confluence Java/HTTP API adapter

A direct API behind MCP may be preferred when it improves stability, authentication/authorization control, traceability, performance, batching/pagination, retries, testability or cost.

When uncertain, run a bounded LAB POC with measurable criteria and promote based on evidence.

## Current dashboard intent

The operational dashboard should progressively expose real evidence for:

- Director Chat
- active direction revision
- repository baseline/branch
- active prompts/workstreams
- session/context-refresh status
- blockers/research classification and ownership
- parallel workstreams/collision warnings
- governance gates
- change-impact warnings
- build/architecture validation
- API/specification contract status
- open issues/quality findings/refactor candidates
- event/saga/work backlogs
- agent execution/provider state
- MCP usage
- AI usage/cost observations
- deterministic vs AI-handled work distribution
- observability/Collector health
- notifications/decisions
- knowledge growth/source freshness
- graph/index/vector growth
- dataset/model state
- LAB simulation/evaluation state
- architecture/direction drift signals
- documentation/evidence/publication state

## Documentation objective

Architecture AI must reduce the current manual/document-assembly burden.

Governed specifications, decisions, evidence, plans, implementation results, quality findings and accepted architecture state should feed required architecture documentation.

The Director must be able to explain and eventually document:

- platform purpose
- current scope/non-goals
- objectives
- plan/current execution
- implemented/planned capabilities
- architecture direction
- standards/policies
- blockers/gaps/issues
- evidence/gate state
- compliance/security status
- technical implementation/quality state
- knowledge/data authority
- AI consumption/cost strategy

Human deliverables may be projected to Excel/PDF/PPT/Confluence/FileShare while auditable source remains in governed authorities.

## Material-change triggers

Increment the direction revision when accepted direction materially changes any of:

- principal product shape
- operating modes
- deployment/runtime strategy
- repository/storage authority
- protocol strategy
- agent/session/work model
- event/saga model
- security boundary
- build/runtime baseline
- specification/gate strategy
- canonical platform principles
- director/user interaction model
- planning/execution model
- knowledge authority/autonomy strategy
- AI consumption/cost strategy

Minor implementation detail changes do not require a direction revision unless they invalidate active session assumptions.

## Deferred / unresolved

- Final OpenShift deployment topology and central telemetry backend.
- Final broker/transport for distributed events.
- Final central storage providers.
- Exact future A2A/ACP adoption based on real provider support.
- Final institutional audit/retention policies.
- Final multi-agent scheduling strategy.
- Exact TOGAF/framework mapping breadth after evidence-based research.
- Final compliance gate catalog after institutional requirements are available.
- Final enterprise Confluence/SharePoint publication/retention model.
- Whether/where future local models/agents are justified by workload/cost/quality evidence.

## Working loop

Direction
→ planning
→ specification
→ governed work
→ blocker/research classification
→ applicable gates
→ parallel execution where safe
→ implementation
→ deterministic validation
→ quality/refactor analysis
→ telemetry/evidence
→ LAB evaluation
→ documentation/reconciliation
→ updated direction.

Do not reduce this operating model to chat → code → more chat.

# Project Direction Baseline

Status: ACTIVE
Direction revision: DIRECTION-0002
Previous direction: DIRECTION-0001
Repository role: Happy Work staging / prompt-governance control plane
Current operating emphasis: LAB / local-first evolution with first tangible Director Chat + governance gates

This file captures the current working direction used to prepare and reconcile Devin sessions. It does not replace the implementation repository or validated release payloads.

## Primary mission

Evolve Architecture AI as one governed product with a modular Spring Boot core, Angular UI, MCP capability plane, durable work/session/event/saga state, local-first observability and simulation, and a clean path to future OpenShift SERVICE mode.

Architecture AI must progressively operate as a director/copilot for architecture work: it keeps a complete governed view of objectives, standards, blockers, ownership, work, evidence, technical quality, documentation, compliance, knowledge and platform state, and exposes that view through the dashboard/chat.

## First tangible product objective

Before the whole platform is complete, the local LAB build must become visibly useful.

The first fast user-facing objective is:

Angular Dashboard
→ Director Chat
→ Spring Boot Architecture AI
→ governed work/context
→ supported Devin API

The chat must be able to explain current direction, what is implemented, what is planned, what is blocked, who/which workstream owns the blocker, what evidence is missing and what must happen next.

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

The platform director coordinates rather than doing every kind of work itself.

Logical workstream types include:

- Architecture / Planning
- Engineering
- Research / Discovery
- Validation / Testing
- Compliance / Security
- Documentation
- Data / Knowledge Governance
- Operations / Observability
- Reconciliation

If Engineering encounters a material unresolved research question, it creates/delegates a ResearchRequest and stops only the affected decision/surface. Other unaffected work may continue.

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

## Current platform modes

- PLATFORM_DEV: develops Architecture AI itself.
- SOLUTION: stable local architect runtime.
- LAB: isolated experimentation, replay, simulation and ML evaluation.
- SERVICE: future central OpenShift runtime using the same application core.

Current working emphasis is LAB/local development. LAB experiments must not silently become canonical SOLUTION state.

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
- Use framework-native and standard patterns before custom infrastructure.
- Programming patterns must solve a demonstrated problem; do not add patterns such as Singleton/Factory/Strategy merely for pattern compliance.

## Enterprise architecture / framework direction

Architecture AI should progressively map relevant enterprise architecture and governance methods, including TOGAF and applicable standards/frameworks, to the actual organizational objectives and architecture lifecycle.

Do not create isolated framework-specific areas without showing how they contribute to the governed end-to-end solution process.

Research/Discovery workstreams should investigate RFCs, standards and frameworks when needed and return evidence to Architecture/Planning; Engineering should not own open-ended standards research.

## Data and knowledge authority

Preserve explicit storage authority.

Git:
- source
- specifications
- contracts/schemas
- policies
- architecture definitions
- infrastructure/config definitions owned by Architecture AI
- prompt/governance history
- manifests
- simulation definitions
- model/dataset manifests

Operational databases:
- mutable work/session/event/saga/runtime state
- operational ledgers/metadata

Lucene/vector indexes:
- retrieval/index state and rebuildable search structures unless explicitly governed/promoted otherwise

OneDrive:
- enterprise/personal source material and managed document workspace according to ingestion/governance policy
- not active transactional runtime storage

Nexus:
- immutable distributable artifacts

LAB analytical storage:
- observation snapshots
- replay/simulation datasets
- experimental outputs

Do not move source-of-truth authority implicitly because a component is convenient.

## Current dashboard intent

The operational dashboard should progressively expose real evidence for:

- Director Chat
- active direction revision
- repository baseline
- active prompts/workstreams
- session/context-refresh status
- blockers and ownership
- governance gates
- change-impact warnings
- build/architecture validation
- API/specification contract status
- event/saga/work backlogs
- agent execution/provider state
- MCP usage
- observability/Collector health
- notifications/decisions
- knowledge growth
- dataset/model state
- LAB simulation/evaluation state
- architecture/direction drift signals
- documentation/evidence state

## Documentation objective

Architecture AI must reduce the current manual/engorging documentation burden.

Governed specifications, decisions, evidence, implementation results and accepted architecture state should feed the required architecture documentation.

The director must be able to explain and eventually document:

- platform purpose
- current scope
- non-goals
- objectives
- implemented capabilities
- planned capabilities
- architecture direction
- standards and policies
- blockers/gaps
- evidence state
- compliance/security status
- technical implementation status

This becomes the controlled basis for later Chief Architect review/handoff.

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

## Working loop

Direction
→ specification
→ governed work
→ applicable gates
→ implementation
→ deterministic validation
→ telemetry/evidence
→ LAB evaluation
→ documentation/reconciliation
→ updated direction.

Do not reduce this operating model to chat → code → more chat.

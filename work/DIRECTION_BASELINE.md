# Project Direction Baseline

Status: ACTIVE
Direction revision: DIRECTION-0005
Previous direction: DIRECTION-0004
Previous accepted baseline commit: `52b8e899b94524165a6da04eea6d00dafb633d3e`
Repository role: Happy Work staging / prompt-governance control plane
Current operating emphasis: LAB / local-first Director Copilot, standards-first governance, evidence/analytics, knowledge projections, planning-first engineering, AI-cost optimization and measured OpenShift evolution

## Continuity rule

DIRECTION-0005 incorporates DIRECTION-0004 and all earlier direction unless explicitly overridden.

Historical accepted direction remains preserved in Git history. The immutable rc2 seed snapshot is not rewritten in place.

Supporting active direction documents include:

- `work/WORK_OPERATING_MODEL.md`
- `work/ENGINEERING_EXECUTION_MODEL.md`
- `work/CONTINUOUS_QUALITY_REFACTOR_MODEL.md`
- `work/GIT_ISSUE_BRANCH_PARALLELISM_MODEL.md`
- `work/KNOWLEDGE_COST_AND_INTEGRATION_GOVERNANCE.md`
- `work/DIRECTOR_COPILOT_OPERATING_MODEL.md`
- `work/GOVERNANCE_GATES.md`
- `work/CHAT_MVP_AND_PLATFORM_EVOLUTION.md`
- `work/FIRST_WAVE_TANGIBLE_PLAN.md`
- `work/ARC42_LIFECYCLE_AND_AUDIT_GOVERNANCE.md`
- `work/DIAGRAMMING_AND_VISUAL_COMMUNICATION_STRATEGY.md`
- `work/ANALYTICS_AUDIT_AND_EVIDENCE_PLANE.md`
- `work/STANDARDS_INTELLIGENCE_AND_CONFORMANCE_MODEL.md`
- `work/KNOWLEDGE_GRAPH_AND_CQRS_PROJECTION_MODEL.md`
- `work/PORTFOLIO_BACKLOG_AND_AUTONOMOUS_EVOLUTION_MODEL.md`
- `work/OPENSHIFT_AND_DISTRIBUTED_SCALE_READINESS.md`

## Primary mission

Evolve Architecture AI as one governed product with a modular Spring Boot core, Angular dashboard, MCP capability plane, durable work/session/event/saga state, local-first observability/simulation, governed knowledge acquisition, standards/conformance intelligence, explicit engineering quality and a clean path to future OpenShift SERVICE mode.

Architecture AI progressively operates as a Director/Copilot for architecture work. It maintains a governed view of objectives, standards, blockers, ownership, backlog, evidence, quality, documentation, compliance, knowledge, AI consumption, analysis and platform state, and exposes that view through dashboard/chat.

## First tangible user objective

Local LAB must become visibly useful through:

Angular Dashboard
→ Director Chat
→ Spring Boot Architecture AI
→ governed read models/work/context
→ supported Devin API

The Director must explain:

- current direction and objectives
- plan/backlog and current work
- blockers and ownership
- what can continue in parallel
- standards/gates/evidence state
- quality/issues/refactor candidates
- current Arc42 state
- knowledge freshness/coverage
- provider/AI usage and cost signals
- what must happen next and why

Chat is a projection over governed state, not the source of truth.

## Governing construction order

Evaluate capabilities in this order:

DETERMINISTIC
→ TOOL
→ SKILL
→ AGENT

Do not create agents where framework-native deterministic logic, a bounded Tool or a reusable Skill is sufficient.

## Planning-before-execution

For material work:

Objective
→ current context
→ specification
→ architecture/impact plan
→ dependency/blocker/research classification
→ parallelization decision
→ execution plan
→ implementation
→ deterministic validation
→ evidence
→ continuous quality/refactor review
→ reconciliation
→ documentation

Only affected surfaces stop when research is blocking. Safe reversible framework-aligned work may continue when the unresolved question is non-blocking.

## Specification-first

Material behavior starts from specification.

Preferred flow:

Specification
→ formal contract/schema where applicable
→ implementation boundary
→ implementation
→ deterministic validation
→ evidence
→ documentation/reconciliation

For HTTP APIs, prefer governed OpenAPI/Swagger contracts. Markdown explains architecture/rationale but is not the only executable contract when a formal specification exists.

## Standards-first and standards intelligence

The rc2 standards adoption map is the historical baseline. DIRECTION-0005 adds a living standards registry and conformance model.

For every relevant standard/framework track:

- official source and evaluated version
- adoption action/status
- applicable layer/vector/mode
- specification/implementation references
- verification/operational evidence
- license/use constraints
- last verification / next review / trigger
- conformance maturity

Conformance maturity:

L0 UNKNOWN
L1 MAPPED
L2 SPECIFIED
L3 IMPLEMENTED
L4 VERIFIED
L5 OPERATED

Do not publish an opaque single standards percentage. The Director must decompose status by standard, layer, vector and evidence.

Use primary official standards sources first. Version/source conflicts become explicit research issues and do not silently rewrite historical evidence.

## Standards research cadence

Research is incremental, not repeated broad web research.

Each standard/product has a cadence/trigger based on:

- release frequency
- draft/final status
- security sensitivity
- EOL/support milestone
- dependency on active decisions
- known pending revision

Fast-moving protocols may need monthly/event-driven checks. Stable standards use less frequent metadata checks unless an active revision or decision requires attention.

## Analysis / Audit / Evidence plane

Keep distinct but correlatable:

- Git history
- specifications/contracts
- gates/decisions
- Arc42 releases
- Work/Event/Saga state
- audit events
- logs
- traces
- metrics
- build/test/static-analysis evidence
- security/compliance findings
- standards evidence
- knowledge provenance
- AI usage/cost
- LAB results

Analysis is downstream from evidence.

Preferred flow:

STATE + EVIDENCE + TELEMETRY + LINEAGE
→ normalized observations
→ deterministic read models
→ analytics
→ graph projection
→ Director answers / LAB simulation

OpenTelemetry/OTLP remains the telemetry standards boundary. Use standard semantic conventions before custom `aai.*` semantics and record the convention version used.

## Deterministic analytics first

Use deterministic queries/calculations for counts, rates, distributions, backlog aging, cycle time, blocked ratio, quality trends, standards coverage, evidence freshness, AI cost, delivery indicators and other computable facts.

Use Devin for synthesis, ambiguity and trade-off reasoning after deterministic evidence exists.

## Knowledge graph / CQRS projection

Knowledge must progressively represent cross-layer concepts instead of only document chunks:

- organizational objectives/outcomes
- capabilities
- current/target processes
- actors/areas
- systems/applications
- APIs/contracts
- data/datasets
- infrastructure/environments
- security controls/risks
- standards
- specifications/decisions
- backlog/work/issues
- evidence/provenance
- observations/metrics
- Arc42 releases/sections
- diagrams/views

Use a governed relationship vocabulary and preserve provenance/confidence/state.

CQRS is a logical separation of mutation and query models. Local-first CQRS may use the same physical local infrastructure. Do not add databases/repositories merely for pattern purity.

Read models should exist where they reduce repeated expensive extraction/reasoning or improve explainability.

## ETL / lineage

Do not create ETL for every source.

Create a deterministic incremental transformation when a stable reusable read model justifies it:

source delta
→ extraction
→ normalization
→ validation
→ projection
→ lineage/evidence receipt

Use OpenLineage concepts for analytical Job/Run/Dataset lineage where useful; do not deploy a separate lineage platform until justified.

## Vector-search rule

Vectors support semantic discovery/reranking/drift/clustering. They are not authority.

Similarity does not prove architecture correctness, conformance or approval.

## Process knowledge

The platform should progressively represent current and target processes, owners, systems/APIs/data, controls, pain points and evidence.

Evaluate BPMN where formal process semantics add value; do not force BPMN for every workflow.

## Portfolio / backlog

Use a provider-neutral planning hierarchy such as:

Objective
→ Initiative
→ Epic
→ Feature
→ governed WorkPackage/EngineeringWorkItem
→ Issue/Defect/ResearchRequest/Risk/DecisionRequest

Future Jira integration maps these semantics to institutional Jira configuration rather than making Jira the initial domain model.

Every backlog item preserves origin/evidence.

## Prioritization vectors

Use explicit factors such as:

- objective alignment
- blocker/security/compliance criticality
- dependency unlock value
- user/manual-effort reduction
- engineering/quality/reliability value
- AI/cost reduction
- effort/reversibility
- coordination risk
- evidence confidence
- time/support milestone
- OpenShift readiness value

AI may explain trade-offs, but prioritization inputs must be visible.

## Engineering coordination cycles

Do not create expensive agent-to-agent meetings merely to imitate Scrum.

Use governed cycles:

- Planning Cycle
- Continuous/Daily Reconciliation
- Review
- Retrospective/Improvement

State/metrics gathering is deterministic; AI participates only where synthesis/decision support adds value.

## Autonomous evolution

Self-evolving means governed optimization toward explicit objectives, not unrestricted self-modification.

Architecture AI may autonomously detect and propose:

- deterministic migration candidates
- new read models/tools/skills
- stale standards/sources
- quality/cost regressions
- improvement backlog items
- approved LAB experiments

It may not autonomously change governing objectives, bypass gates, approve material architecture, exploit vulnerabilities, or merge material changes solely because an AI proposed them.

## AI cost objective

Reducing unnecessary Devin consumption is an explicit measurable objective.

Measure where available:

- work/provider/session type
- ACUs/tokens/usage units
- context/evidence size
- tool calls
- retries/rework
- duration
- outcome/value proxy

Repeated stable AI-heavy operations are candidates for migration to deterministic Spring/Gradle/local capabilities after cost/quality/effort evaluation.

Devin remains the reasoning provider where reasoning adds value.

## Security research boundary

Discovery of vulnerabilities does not authorize exploitation.

PLATFORM_DEV/LAB may run safe explicitly authorized controlled POCs.

SOLUTION/SERVICE default to passive analysis, evidence/risk/work creation and escalation unless a specific authorized security-testing policy permits active testing.

Never infer authorization from technical capability.

## Arc42 lifecycle

Canonical term: `Arc42`.

Arc42 is the principal human-facing auditable architecture/design document projection for governed solutions.

Distinguish:

WORKING_ARC42 — continuously evolving, may contain explicit DRAFT/PLANNED/UNKNOWN/ASSUMED content.

RELEASED_ARC42 — frozen versioned PDF tied to a source baseline, review/gate state and checksum where practical; never overwritten.

Change classes:

- CONTEXTUAL_INCREMENT
- ARCHITECTURE_INCREMENT
- MATERIAL_SOLUTION_CHANGE
- INFRASTRUCTURE_OR_ORGANIZATIONAL_IMPACT_RELEASE

Infrastructure/licensing/network/platform changes that trigger external human processes are explicit release-impact signals.

## Diagramming

Use:

ONE GOVERNED CONCEPTUAL MODEL
→ MULTIPLE VIEW PROJECTIONS
→ AUDIENCE-APPROPRIATE RENDERING

Technical backbone:

- C4
- Mermaid
- PlantUML/C4-PlantUML

Conceptual/executive:

- draw.io/diagrams.net
- governed SVG/PNG
- iconography
- logos when useful/permitted

When useful provide conceptual overview first and technical drill-down second.

## Data and storage authority

Git governs source, specifications, OpenAPI/contracts/schemas, ADRs/decisions, policies/gates, architecture/infrastructure definitions, prompt/governance history, canonical diagram sources, Arc42 source/release metadata, manifests and analytical/model definitions.

Operational DB governs mutable work/session/event/saga/blocker/gate/runtime state.

Lucene/vector indexes govern rebuildable retrieval/search projections unless explicitly promoted.

Graph/read models optimize relationships/queries and preserve provenance to governed authority.

OneDrive/FileShare provide source material and human document workspace/distribution; not active transactional runtime storage.

Nexus governs immutable distributable artifacts.

LAB analytical storage governs observation/replay/simulation datasets and experimental outputs.

Confluence/SharePoint are governed publication destinations where appropriate; they do not silently replace Git/runtime authority.

## Parallel development / Git

`main` is the accepted integration baseline.

Parallel work requires owned/shared/protected surfaces, dependency edges, merge order and context refresh.

High-risk shared foundations have one primary owner at a time.

Issues/defects/research/quality findings become durable governed work linked to Git/evidence rather than chat-only observations.

## Governance gates

Initial gates remain:

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

Gates should be deterministic/machine-verifiable where practical.

## Current modes

- PLATFORM_DEV — Architecture AI product development
- SOLUTION — stable local architect runtime
- LAB — isolated experimentation/replay/simulation/ML/POCs
- SERVICE — future central OpenShift runtime

Current emphasis remains LAB/local development.

## OpenShift / distributed scale rule

Scale because evidence requires it.

Before adding workstations/providers or promoting to OpenShift SERVICE evaluate:

- parallelizable backlog and queue depth
- local provider/workstation utilization
- cycle time and backlog age
- merge collision/rework
- coordination overhead
- persistence/concurrency
- identity/security/networking
- telemetry and storage migration

Additional workstations are justified only when expected throughput gain exceeds coordination cost and shared-state/context governance is mature.

OpenShift readiness must cover build/release, configuration/secrets, persistence, observability, work/event/saga concurrency, knowledge/data classification and authenticated multi-user dashboard behavior.

OpenTelemetry application instrumentation is independent from the final backend. Evaluate Collector/Operator deployment in the target cluster before replacing instrumentation because of platform constraints.

## Dashboard / Director visibility

Progressively expose:

- direction/repository baseline
- objectives/initiatives/epics/features/work
- blockers/research/ownership
- parallelism/collision risk
- standards version/status/conformance maturity
- gates/evidence freshness
- issues/quality/refactor
- Work/Event/Saga/provider state
- AI usage/cost and deterministic-vs-AI ratio
- knowledge/source freshness
- graph/read-model/index/vector growth
- current/target process knowledge
- LAB simulation/evaluation
- Arc42 working/released/delta state
- OpenShift/service-readiness gates
- local capacity/scale-out indicators

## Seed continuity

The rc2 Seed snapshot remains immutable and hash-governed.

Post-rc2 direction additions are captured under `work/seed-evolution/` and must be absorbed by a future candidate/reconciliation wave without rewriting historical rc2 evidence.

Current delta:

`work/seed-evolution/POST_RC2_DIRECTION_0005_ANALYTICS_STANDARDS_AUTONOMY.md`

## Material-change triggers

Increment direction revision when accepted direction materially changes product shape, modes/deployment, storage authority, protocol/agent/work model, event/saga/security boundary, build/runtime baseline, specification/gates, Director interaction, planning/execution, standards/conformance model, analytics/evidence model, knowledge graph/read-model strategy, AI-cost/autonomy strategy, Arc42 lifecycle, diagram strategy or scale/OpenShift strategy.

## Working loop

Direction
→ objectives/backlog
→ planning
→ specification
→ standards/evidence
→ governed work
→ blocker/research classification
→ parallel execution where safe
→ implementation
→ deterministic validation
→ quality/refactor
→ telemetry/evidence
→ analytics/read models/graph
→ LAB evaluation
→ Arc42/document projections
→ reconciliation/reprioritization/release decision
→ updated direction

Do not reduce this operating model to chat → code → more chat.

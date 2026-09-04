# Project Direction Baseline

Status: ACTIVE
Direction revision: DIRECTION-0004
Previous direction: DIRECTION-0003
Previous accepted baseline commit: `a727090673cc4327be96ce72c64cdf617f51c670`
Repository role: Happy Work staging / prompt-governance control plane
Current operating emphasis: LAB / local-first evolution with Director Chat, governance gates, planning-first engineering, continuous quality, AI-cost-aware autonomy, Arc42 lifecycle governance and audience-aware diagram projection

## Continuity rule

DIRECTION-0004 incorporates DIRECTION-0003. All DIRECTION-0003 principles remain active unless explicitly overridden here.

The previous accepted direction is preserved in Git history at commit `a727090673cc4327be96ce72c64cdf617f51c670`. Supporting active direction documents include:

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

## Primary mission

Evolve Architecture AI as one governed product with a modular Spring Boot core, Angular dashboard, MCP capability plane, durable work/session/event/saga state, local-first observability and simulation, governed knowledge acquisition, explicit engineering quality and a clean path to future OpenShift SERVICE mode.

Architecture AI progressively operates as a Director/Copilot for architecture work. It keeps a governed view of objectives, standards, blockers, ownership, work, evidence, quality, documentation, compliance, knowledge, AI consumption and platform state, and exposes that view through dashboard/chat.

## Current first tangible product objective

Local LAB must become visibly useful through:

Angular Dashboard
→ Director Chat
→ Spring Boot Architecture AI
→ governed work/context
→ supported Devin API

The Director must explain current direction, plan, blockers, ownership, evidence, quality/issues, what can continue in parallel and what must happen next.

Chat is a projection over governed state, not the source of truth.

## Governing construction order

Evaluate capabilities in this order:

DETERMINISTIC
→ TOOL
→ SKILL
→ AGENT

Do not create agents where framework-native deterministic logic, a bounded Tool or a reusable Skill is sufficient.

## Planning-before-execution rule

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

## Specification-first rule

Material behavior starts from specification.

Preferred flow:

Specification
→ formal contract/schema when applicable
→ implementation boundary
→ implementation
→ deterministic validation
→ evidence
→ documentation/reconciliation

For HTTP APIs, prefer governed OpenAPI/Swagger contracts. Markdown explains architecture/rationale but must not be the only executable contract when a formal specification exists.

## Arc42 rule

Canonical term: `Arc42`.

Arc42 is the principal human-facing final architecture/design document projection for governed solutions.

A released Arc42 PDF is:

- auditable
- versioned
- traceable to a governed source baseline
- distributable to organizational areas
- retainable by those areas according to process
- never overwritten in place

Arc42 is not the canonical engineering database. It is a controlled projection from specifications, decisions, knowledge, diagrams and evidence.

Distinguish:

`WORKING_ARC42`
- evolves continuously with governed knowledge
- may contain explicit DRAFT/PLANNED/UNKNOWN/ASSUMED content

`RELEASED_ARC42`
- frozen document version
- generated PDF
- source commit/tag reference
- release metadata
- applicable gate/review state
- checksum where practical

Arc42 change classes:

- CONTEXTUAL_INCREMENT
- ARCHITECTURE_INCREMENT
- MATERIAL_SOLUTION_CHANGE
- INFRASTRUCTURE_OR_ORGANIZATIONAL_IMPACT_RELEASE

Infrastructure/licensing/network/platform changes that trigger external human processes are explicit Arc42 release-impact signals.

## Diagramming rule

Use:

ONE GOVERNED CONCEPTUAL MODEL
→ MULTIPLE VIEW PROJECTIONS
→ AUDIENCE-APPROPRIATE RENDERING

Technical/canonical backbone:

- C4
- Mermaid
- PlantUML/C4-PlantUML

Conceptual/executive projection:

- draw.io/diagrams.net
- governed SVG/PNG
- useful iconography
- logos where they improve recognition and are permitted

Do not force a low-level technical diagram to serve an executive conceptual request.

When both are useful, provide:

1. conceptual overview
2. technical drill-down

Governed diagram source/catalog belongs in Git where practical. Arc42, Confluence, PPT and other human deliverables consume traceable rendered projections.

## Research / engineering model

Logical workstreams include:

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

These are workstream roles first. Permanent autonomous agents require evidence that deterministic/tool/skill approaches are insufficient.

Engineering delegates open-ended standards/product research through ResearchRequest/workstreams and continues unaffected work when safe.

## Continuous quality/refactor

Construction and quality are synchronized lanes over the same product.

Deterministic evidence should progressively include:

- build/tests
- dependency reports
- module verification
- static analysis/lint
- OpenAPI/schema drift
- migrations
- runtime errors
- OTel metrics/traces
- security findings
- issue/defect trends

Findings become governed issues/work, not chat-only observations.

## Git / parallel development

`main` is the accepted integration baseline.

Parallelization is by bounded capability/module ownership with explicit:

- owned surfaces
- shared surfaces
- protected surfaces
- API/schema/migration ownership
- build/config ownership
- merge/reconciliation point

High-risk shared foundations have one primary owner at a time.

Experimental/LAB branches do not silently become canonical runtime state.

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

Gates should be deterministic/machine-verifiable where practical. Arc42 release requirements depend on change impact rather than blindly running every gate for every wording change.

## Current modes

- PLATFORM_DEV — Architecture AI product development
- SOLUTION — stable local architect runtime
- LAB — isolated experimentation, replay, simulation and ML evaluation
- SERVICE — future central OpenShift runtime

Current emphasis remains LAB/local development.

LAB may use supported Devin APIs for safe real POCs, including session creation/messaging and agent communication validation.

## Protocol and agent runtime direction

- Devin is the first provider, not the architecture.
- Work is durable; provider sessions are ephemeral.
- MCP is the tool/resource/capability plane.
- Provider APIs control provider lifecycle where appropriate.
- A2A compatibility is preserved for future agent-to-agent interoperability where applicable.
- Event/Saga/Notification/Observability/Audit are shared platform capabilities.

## Data and knowledge authority

Git governs:

- source
- specifications
- OpenAPI/contracts/schemas
- ADRs/decisions
- policies/gates
- architecture definitions
- infrastructure/config definitions owned by Architecture AI
- prompt/governance history
- canonical diagram sources/catalog
- Arc42 source/projection/release metadata
- manifests
- simulation/model/dataset definitions/manifests

Operational DB governs mutable work/session/event/saga/blocker/gate/runtime state.

Lucene/vector indexes govern rebuildable retrieval/index state unless explicitly promoted otherwise.

OneDrive/FileShare provide source material and human document workspace/distribution; they are not active transactional runtime storage.

Nexus governs immutable distributable artifacts.

LAB analytical storage governs observation/replay/simulation datasets and experimental outputs.

Confluence/SharePoint are governed publication destinations where appropriate; they do not silently replace Git/runtime authority.

## Knowledge autonomy / AI cost objective

Manual bootstrap packages are transitional.

Target loop:

source delta
→ deterministic inventory/relevance/extraction
→ local evidence/knowledge update
→ bounded AI work only when needed
→ validation/reconciliation
→ graph/index/document projections

Send Devin the smallest sufficient governed context: WorkPackage/specification, constraints/decisions, bounded Evidence Packs, IDs/references and structured tool results.

Reduce repeated AI usage by migrating stable repeatable operations into Spring/Gradle/local deterministic tools when evidence justifies it.

The goal is not to remove Devin; it is to reserve reasoning consumption for work where reasoning adds value.

## Dashboard / Director visibility target

The dashboard should progressively expose:

- active direction and repository baseline
- plan/workstreams/parallelism
- blockers/research ownership
- gates
- issues/quality/refactor candidates
- Devin sessions/executions/usage
- deterministic vs AI-handled work distribution
- knowledge/source freshness/graph/index/vector growth
- LAB simulation/evaluation state
- documentation/publication state
- current WORKING_ARC42 state/version
- last RELEASED_ARC42 version
- Arc42 delta classification
- whether a new audited release is required
- affected external areas/processes
- diagram catalog/view type/source traceability

## Seed continuity

The current rc2 Seed snapshot is immutable and hash-governed. DIRECTION-0004 MUST NOT rewrite that snapshot in place.

Post-rc2 additions are captured under:

`work/seed-evolution/POST_RC2_DIRECTION_0004_ARC42_AND_VISUAL_GOVERNANCE.md`

A future candidate/reconciliation wave should absorb these additions while preserving historical rc2 evidence and integrity.

## Material-change triggers

Increment direction revision when accepted direction materially changes:

- product shape
- modes/deployment/runtime
- repository/storage authority
- protocol/agent/session/work model
- event/saga/security boundary
- build/runtime baseline
- specification/gate strategy
- Director interaction model
- planning/execution model
- knowledge autonomy/cost strategy
- Arc42 audit/release lifecycle
- canonical diagram/projection strategy

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
→ Arc42/document projections
→ reconciliation/release decision
→ updated direction

Do not reduce this operating model to chat → code → more chat.

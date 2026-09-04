# Knowledge Graph and CQRS Projection Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0005

## Purpose

Define how Architecture AI structures knowledge for complex questions without repeatedly re-reading the same source material or making the graph/database itself the only authority.

The platform should progressively transform governed source/evidence into reusable read models and graph projections optimized for Director questions, analysis, documentation and agent work.

## Core principle

SOURCE / SPEC / EVIDENCE / STATE
→ deterministic extraction and normalization
→ governed entities/relationships
→ CQRS read projections
→ graph / search / analytical views
→ bounded context for Devin and humans

Do not send the same raw meeting/document corpus to Devin every time a derived stable view can answer the question.

## Knowledge layers

The graph/read model should progressively represent layers such as:

- organizational objective / outcome
- enterprise architecture motivation
- capability
- current process
- target process
- actor/role/organizational area
- platform/application/system
- service/API/contract
- data object/dataset/entity
- infrastructure/runtime/environment
- security boundary/control/risk
- standard/framework/control requirement
- specification
- ADR/decision
- issue/blocker/risk
- initiative/epic/feature/work package
- source/evidence
- telemetry/observation/metric
- Arc42 section/release
- diagram/view

Do not flatten these into generic "document chunks".

## Relationship vocabulary

Prefer a bounded, versioned relationship vocabulary, for example:

- SUPPORTS
- REALIZES
- IMPLEMENTS
- DEPENDS_ON
- USES
- PRODUCES
- CONSUMES
- GOVERNED_BY
- CONSTRAINED_BY
- EVIDENCED_BY
- DERIVED_FROM
- OBSERVED_IN
- IMPACTS
- BLOCKS
- OWNED_BY
- APPLIES_TO
- SUPERSEDES
- PROJECTED_AS
- VALIDATED_BY
- VIOLATES_OR_GAPS

The exact vocabulary must be governed and extended intentionally, not created ad hoc by every agent.

## Provenance rule

Every material knowledge assertion or relationship should carry or resolve to provenance:

- source/evidence reference
- extraction or derivation method
- timestamp/version
- confidence/state
- authority/owner where applicable
- validity/freshness where applicable

Distinguish:

OBSERVED
INFERRED
VALIDATED
APPROVED
SIMULATED
ASSUMED

AI-generated relationships do not silently become APPROVED.

## CQRS principle

Use CQRS as a logical separation between mutation authority and query projections.

Local-first does NOT imply separate infrastructure for command and query sides.

For the current stage:

- commands/write models may use the existing local operational stores
- read models may use the same physical database or rebuildable local projections
- Lucene/vector indexes remain search projections
- graph stores are relationship/query projections where justified
- analytical snapshots are derived projections

Do not create multiple databases/repositories merely to say CQRS is implemented.

## Read-model candidates

Build deterministic read models only when they reduce repeated expensive work or improve explainability.

Examples:

### DirectorProjectStatusView
- active direction
- current objectives
- active initiatives/epics/features
- blockers and owners
- standards/gates status
- quality/issues
- Arc42 status
- provider usage/cost

### StandardsConformanceView
- layer/vector
- standard/version
- adoption state
- maturity
- evidence freshness
- gaps

### ProcessKnowledgeView
- current process
- target process
- owners
- systems/APIs/data involved
- problems/risks
- proposed evolution
- evidence

### ArchitectureImpactView
- changed specification/decision
- impacted capabilities/processes/APIs/data/infrastructure/security/docs/work

### KnowledgeFreshnessView
- source last observed
- last processed
- last validated
- known delta
- confidence

## ETL / transformation rule

Do not introduce ETL merely because data exists.

Create a transformation pipeline when:

- the same expensive extraction/join/reasoning is repeatedly needed
- a stable reusable read model exists
- query latency/consumption is materially improved
- lineage can be preserved
- update semantics are clear

Flow:

source delta
→ deterministic extraction
→ normalization
→ validation
→ projection/update
→ lineage/evidence receipt

Use incremental/delta processing where possible.

## Vectors and semantic retrieval

Vector search is a retrieval signal, not truth.

Use vectors for:

- semantic candidate discovery
- similar architecture/decision/process retrieval
- drift signals
- clustering unknown source families
- reranking

Then validate against authoritative evidence/relationships.

Do not let cosine similarity establish architecture conformance or approval.

## Complex Director questions

The model should support questions such as:

- Which business objectives depend on this API?
- Which current processes will change if this component moves to OpenShift?
- Which Arc42 releases reference infrastructure that is now superseded?
- Which standards apply to this feature and which gates are still missing evidence?
- Which recurring incidents are related to the same architecture decision?
- Which knowledge about this process is stale or contradictory?
- What is the impact of replacing MCP-backed access with a direct backend API adapter?
- Which work can proceed while this security blocker is unresolved?

The response path should first resolve deterministic graph/read-model facts, then invoke Devin only for synthesis/ambiguity/trade-offs.

## Storage authority

The graph and read models are query projections over governed knowledge/state.

Do not move authority implicitly:

- Git remains authority for governed source/specification/architecture artifacts where defined
- operational DB remains authority for mutable runtime/work state
- source systems retain authority for their enterprise content
- graph/index/read models optimize relationships and retrieval

## Graph evolution

New graph entity/relationship types must be justified by query/use-case pressure.

Preferred flow:

new recurring question
→ identify missing deterministic concept/edge
→ add schema/metamodel proposal
→ validate against existing layers
→ migrate/project existing evidence
→ add query/tests
→ expose through Director

Do not continuously expand the graph ontology without demonstrated value.

## Dashboard visibility

Expose progressively:

- entities/relationships by layer
- provenance coverage
- unknown/unvalidated relationships
- stale sources
- graph growth
- query/read-model usage
- vector/index growth
- top unanswered question classes
- graph/schema changes and migration status

## Goal

Architecture AI should become capable of answering increasingly complex cross-layer questions from structured local knowledge while reducing repeated LLM context transfer and preserving traceability back to evidence.

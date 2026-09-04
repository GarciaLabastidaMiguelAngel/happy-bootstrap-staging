# Post-RC2 Evolution Delta — Arc42, Visual Communication and Auditable Document Lifecycle

Status: ACTIVE_EVOLUTION_DELTA
Direction revision: DIRECTION-0004
Base Seed: `Architecture_AI_Seed_V1_1.0.0-rc2 / SEED-SNAPSHOT-RC2-001`

## Integrity rule

The rc2 Seed snapshot is immutable and hash-governed. This delta MUST NOT be applied by editing the rc2 snapshot in place because that would invalidate its content/package identity.

This file is the governed post-rc2 evolution overlay to be absorbed by a future candidate/reconciliation wave.

## Source alignment

The rc2 Seed already establishes Arc42 as the integral architecture documentation projection and explicitly treats arc42 as a generated view rather than the canonical model.

This delta sharpens that direction into an auditable lifecycle.

## Delta D4-001 — Arc42 terminology

Canonical term: `Arc42`.

Do not use `R42` as the architecture-document name.

## Delta D4-002 — Arc42 role

Arc42 becomes the principal human-facing final architecture/design document for governed solutions.

The released Arc42 PDF is:

- auditable
- versioned
- distributable to other organizational areas
- retainable by those areas according to process
- traceable to a governed source baseline

Arc42 remains a projection of governed architecture knowledge; it does not replace specifications, ADRs, Git history, operational evidence or runtime state as their respective authorities.

## Delta D4-003 — Working vs released Arc42

Distinguish:

`WORKING_ARC42`
- continuously evolves with governed knowledge
- may contain explicit DRAFT/PLANNED/UNKNOWN/ASSUMED states

`RELEASED_ARC42`
- frozen document version
- PDF output
- source commit/tag reference
- release metadata
- applicable gate/review state
- checksum where practical
- never overwritten in place

## Delta D4-004 — Change classification

Arc42 changes must be classified so the platform can decide whether a new audited release is required.

Initial classes:

- CONTEXTUAL_INCREMENT
- ARCHITECTURE_INCREMENT
- MATERIAL_SOLUTION_CHANGE
- INFRASTRUCTURE_OR_ORGANIZATIONAL_IMPACT_RELEASE

Infrastructure/licensing/network/platform changes that trigger external human processes are explicit release-impact signals.

## Delta D4-005 — Arc42 delta traceability

The Director must be able to explain between versions:

- what changed
- why
- affected sections
- affected diagrams
- causal specifications/ADRs/decisions
- affected infrastructure/external areas
- open blockers/gates
- whether a new released PDF is required

## Delta D4-006 — Diagram projection model

Adopt:

ONE GOVERNED CONCEPTUAL MODEL
→ MULTIPLE VIEW PROJECTIONS
→ AUDIENCE-APPROPRIATE RENDERING

Technical/canonical views:

- C4
- Mermaid
- PlantUML/C4-PlantUML

Conceptual/executive views:

- draw.io/diagrams.net
- governed SVG/PNG outputs
- iconography/logos where useful and permitted

Do not force technical notations to serve all stakeholder communication.

## Delta D4-007 — Diagram authority

Governed diagram source/catalog belongs in Git where practical.

Arc42/Confluence/PPT/other deliverables consume rendered projections.

Rendered outputs must remain traceable to governed concepts and source/version.

## Delta D4-008 — Director Chat Arc42 visibility

Director Chat should progressively answer:

- current working Arc42 version/state
- last released Arc42 version
- changes since last release
- whether the current delta requires a new release
- affected human processes/areas
- blockers/gates before release
- what remains unvalidated

## Delta D4-009 — Deterministic document assembly objective

Preferred long-term flow:

Specifications
+ ADRs/decisions
+ governed knowledge
+ diagrams
+ evidence
→ deterministic section projection
→ consistency/traceability checks
→ Arc42 release candidate
→ required human review/approval
→ versioned auditable PDF

LLM reasoning may synthesize narrative and explanation. Structure, required metadata, versioning, traceability and release validation should become deterministic wherever practical.

## Delta D4-010 — Storage model

Git remains the engineering/governance authority for:

- specifications
- decisions/ADRs
- governed Arc42 source/projection definitions
- canonical diagram sources
- release/delta metadata
- manifests/hashes where appropriate

The Arc42 PDF may be projected/distributed to FileShare, SharePoint, Confluence or other institutional destinations as required.

Copies do not create separate architecture identities; the Arc42 release version/identity is the common reference.

## Future Seed absorption

A future Seed/release candidate should reconcile this delta into the appropriate canonical areas, at minimum:

- master context / platform direction
- documentation/publication capability
- agent/documenter responsibilities
- standards/framework map
- governance gates
- traceability model
- delta/release model
- diagram catalog/projection strategy
- dashboard/director requirements

Do not rewrite historical rc2 evidence to make these post-rc2 decisions appear older than they are.

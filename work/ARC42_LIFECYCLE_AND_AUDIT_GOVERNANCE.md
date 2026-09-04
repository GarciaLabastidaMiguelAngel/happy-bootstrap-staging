# Arc42 Lifecycle and Audit Governance

Status: ACTIVE_DIRECTION
Direction revision: DIRECTION-0004

## Purpose

Define Arc42 as the governed final architecture/design document projection for Architecture AI solutions.

Arc42 is the human-facing, auditable architecture document that can be shared with and retained by other organizational areas. It is generated from governed architecture state and released as a controlled PDF.

Arc42 PDF is not the only source of truth for engineering state. The authoritative implementation/specification/evidence sources remain in their governed stores, primarily Git plus operational/evidence stores. Arc42 is the controlled auditable projection of that state at a point in time.

## Core principle

GOVERNED ARCHITECTURE STATE
→ ARC42 PROJECTION
→ REVIEW / GATES
→ VERSIONED ARC42 RELEASE
→ AUDITABLE PDF
→ ORGANIZATIONAL DISTRIBUTION / RETENTION

## Arc42 content model

The Arc42 document should progressively project, where applicable:

- objectives and stakeholders
- scope and non-goals
- constraints
- business/enterprise context
- solution context
- architecture strategy
- building blocks
- runtime views
- deployment/infrastructure views
- cross-cutting concepts
- security/compliance concerns
- data and integration concerns
- decisions/ADRs
- quality attributes and scenarios
- risks, assumptions and blockers
- operational/observability concerns
- implementation/release status where appropriate
- glossary and references

The document should use the best available governed knowledge at the release point and explicitly identify unknown, assumed, planned or not-yet-validated content rather than silently presenting it as fact.

## Version classes

Architecture AI should distinguish at least four Arc42 change classes.

### 1. CONTEXTUAL_INCREMENT

Examples:

- wording clarification
- additional explanation
- terminology normalization
- non-material diagram readability improvement
- reference/link update
- added evidence that does not change the approved architecture

Behavior:

- update working Arc42 projection
- preserve change history
- no major solution re-approval by default
- may be included in next document release

### 2. ARCHITECTURE_INCREMENT

Examples:

- new component/capability within accepted architecture
- contract refinement
- new runtime flow
- new operational capability
- accepted security/observability/documentation enhancement

Behavior:

- impact analysis
- applicable gates
- update affected Arc42 sections/views
- increment document version according to policy
- preserve traceability to specifications/decisions/evidence

### 3. MATERIAL_SOLUTION_CHANGE

Examples:

- changed architecture strategy
- changed system boundary
- changed major integration mechanism
- changed persistence/security model
- new material infrastructure dependency
- changed deployment topology
- changed major data/control flow

Behavior:

- explicit architecture impact analysis
- relevant approval/governance gates
- Arc42 release candidate
- delta summary
- affected diagrams/ADRs/specifications refreshed
- auditable versioned PDF after acceptance

### 4. INFRASTRUCTURE_OR_ORGANIZATIONAL_IMPACT_RELEASE

Examples:

- new infrastructure capacity/component
- licensing/procurement impact
- firewall/network/load-balancer changes
- OpenShift/platform resource changes requiring other teams
- operational support/process changes
- changes that trigger formal human processes outside Architecture AI

Behavior:

- treat as a governed release boundary
- explicitly identify affected external areas/owners
- produce release/delta package needed by human processes
- Arc42 PDF version is auditable and distributable
- preserve approval/evidence references

## Arc42 working document vs released PDF

Distinguish:

WORKING_ARC42
- continuously projected from current governed knowledge
- may contain draft/planned/unknown elements with explicit status
- not automatically auditable final evidence

RELEASED_ARC42
- frozen version
- deterministic document identity/version
- generated PDF
- checksum/hash where practical
- release metadata
- referenced source baseline/commit
- applicable gate/approval status
- retained/distributed according to organizational process

Do not overwrite a released Arc42 PDF in place.

## Suggested version semantics

Use an explicit document version independent from application version.

Example:

ARC42_VERSION = 1.4.0

Suggested interpretation:

PATCH
- contextual/non-material correction

MINOR
- compatible architecture increment that materially extends the solution without redefining its principal architecture

MAJOR
- material architecture/design direction change or release boundary requiring broad re-review

Exact institutional numbering may later override this convention.

## Release record

Each released Arc42 should have metadata equivalent to:

- solution/design identifier
- Arc42 version
- release date/time
- source repository
- source commit/tag
- direction revision
- applicable specifications
- related ADRs
- related infrastructure changes
- gate results
- approval/review references where available
- previous Arc42 version
- delta classification
- PDF checksum
- distribution/retention target references where known

## Delta model

Architecture AI should be able to answer:

- what changed since Arc42 version X?
- why did it change?
- which sections changed?
- which diagrams changed?
- which decisions/specifications caused it?
- which teams/processes are affected?
- does it require a new audited release?

A delta should be derived from governed state and version references, not manually reconstructed from memory.

## Diagram governance inside Arc42

Use audience-appropriate diagrams while preserving traceability.

Technical/canonical sources may use:

- Mermaid
- C4
- PlantUML/C4-PlantUML

Conceptual/executive projections may use:

- draw.io
- governed SVG/PNG
- iconography/logos where useful and permitted

The Arc42 PDF may contain rendered projections, but each governed diagram should remain traceable to its source/catalog entry and architecture concepts.

## Storage authority

Git should govern:

- Arc42 source/projection definition where practical
- specifications
- ADRs
- diagrams/source references
- release metadata
- delta manifests
- hashes/manifests where appropriate

Human distribution/retention destinations may include FileShare, SharePoint, Confluence or other institutional repositories according to process.

The released PDF may be retained both as a governed artifact reference and in organizational repositories. Storage duplication does not create multiple architecture authorities; the release identity/version remains the common reference.

## Gate relationship

A new Arc42 release does not require every gate for every change.

Architecture AI must evaluate applicable gates by impact.

Examples:

- contextual correction: documentation/reconciliation gates
- API contract change: specification/architecture/contract/engineering/documentation gates
- security change: security/compliance plus relevant architecture/contract gates
- infrastructure-impact release: architecture, security/compliance, operability, documentation, external-process evidence as applicable

## Director Chat behavior

The Director should be able to answer:

- current Arc42 working version/status
- last released Arc42 version
- whether current changes require a new release
- delta since last release
- affected external teams/processes
- open blockers/gates before release
- what remains draft/unknown

## Long-term objective

Arc42 generation should become increasingly deterministic:

specifications + decisions + governed knowledge + diagrams + evidence
→ section projections
→ consistency checks
→ release candidate
→ human review/required approvals
→ immutable versioned PDF

LLM reasoning may assist synthesis and narrative, but release structure, identifiers, versioning, traceability, required sections and validation should be governed deterministically wherever practical.

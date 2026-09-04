# Standards Intelligence and Conformance Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0005

## Purpose

Make standards a governed, queryable and measurable part of Architecture AI instead of a collection of links or one-time research notes.

The Director must be able to answer:

- Which standards/frameworks are relevant to this layer/vector?
- Which version did we evaluate?
- Which are adopted, configured, deferred, superseded or only researched?
- Where are we actually conformant versus merely documented?
- What evidence proves conformance?
- Which standards are stale or need review?
- What changed in a standard and what platform/solution work is impacted?

## Existing seed baseline

The rc2 package already contains a standards-adoption map covering architecture/documentation, contracts/protocols, development/operation, knowledge/provenance, security/risk/compliance and banking/domain references.

DIRECTION-0005 does not rewrite that historical map in place. It adds a living standards-intelligence lifecycle on top of it.

## Standard registry

Create a governed registry concept with fields equivalent to:

- standardId
- name
- family
- issuingBody
- officialSource
- evaluatedVersion
- publicationDate
- lifecycleStatus
- projectAction: REUSE / CONFIGURE / EXTEND / FORK / BUILD / DEFER / REJECT
- applicableLayers
- applicableVectors
- applicableModes
- owner/workstream
- adoptionDecisionReference
- specificationReferences
- implementationReferences
- verificationEvidenceReferences
- license/useConstraints
- lastVerifiedAt
- nextReviewAt
- reviewTrigger
- sourceConfidence
- notes

## Standard lifecycle

Use states such as:

DISCOVERED
→ CANDIDATE
→ EVALUATING
→ ADOPTED
→ IMPLEMENTED
→ VERIFIED
→ OPERATED

Alternative terminal/side states:

DEFERRED
REJECTED
SUPERSEDED
SOURCE_CONFLICT

Do not equate `ADOPTED` with `VERIFIED`.

## Conformance maturity

For each adopted standard or selected subset, expose a maturity level:

L0 UNKNOWN — no reliable mapping
L1 MAPPED — relevance and scope identified
L2 SPECIFIED — requirements/controls represented in governed specifications/policies
L3 IMPLEMENTED — implementation evidence exists
L4 VERIFIED — deterministic tests/checks/evidence demonstrate required conformance
L5 OPERATED — runtime/process evidence demonstrates sustained conformance

A project-wide "standards score" must be decomposable by standard, layer, vector and gate. Do not publish one opaque percentage.

## Standards vectors

Initial registry views should include at least:

- Enterprise Architecture / governance
- Architecture description / viewpoints
- Business/process modeling
- Banking capability/domain modeling
- Software structure / diagramming
- API/contracts/schema
- Agent/tool interoperability
- Event semantics
- Provenance/data lineage
- Observability/telemetry
- Software quality
- Secure software development
- Application/API security
- AI/agent risk and governance
- Delivery engineering
- Cost/value governance
- Audit/documentation

## Current official references to evaluate

Do not auto-adopt these merely because they exist.

- TOGAF Standard, 10th Edition — enterprise architecture method/governance reference.
- ISO/IEC/IEEE 42010:2022 — architecture-description concepts, viewpoints and model kinds.
- ISO/IEC 25010:2023 — software/ICT product quality model.
- BPMN 2.0.2 — formal process modeling where process semantics justify it.
- OpenTelemetry Semantic Conventions — normalized telemetry semantics; pin the version used by implementation.
- OpenLineage — Job/Run/Dataset lineage concepts for analytical data transformations when useful.
- DORA delivery-performance metrics — delivery throughput/instability indicators, not a formal architecture gate.
- FinOps Framework — technology value/cost management practices, useful for AI/provider cost governance where adopted.
- NIST SSDF 1.1 — secure software development baseline; monitor newer drafts separately from final standards.
- Existing rc2 references remain subject to their documented action/status, including Arc42, C4, ArchiMate, BIAN, MCP, JSON Schema, OpenAPI, W3C PROV, OWASP, MITRE ATLAS, NIST AI RMF and PCI DSS.

## Source precedence

For standards research use this precedence:

1. official standards body / primary specification
2. official maintainer/project documentation
3. official release notes / corrigenda
4. trusted secondary analysis only when primary sources are insufficient

Marketing pages do not override normative specifications.

## Source conflict handling

When sources disagree on version/status:

- create `SOURCE_CONFLICT`
- preserve both observations
- do not silently rewrite historical documentation
- create ResearchRequest / issue
- resolve from the authoritative primary source before changing adoption status

Example currently requiring verification: the rc2 standards map records an ArchiMate version newer than the currently accessible Open Group pages exposed by research tooling. Treat this as a verification item, not an automatic correction of rc2 history.

## Standards watch

Do not re-research the internet from zero every month.

Each registry item should have a review strategy based on:

- known release cadence
- support/EOL date
- draft/final status
- security sensitivity
- implementation dependency
- vendor/platform dependency
- unresolved issue
- major version watch

Example cadences:

- fast-moving protocol/tool spec: monthly or event-driven
- stable ISO/OMG standard: quarterly/biannual metadata check unless a known revision is pending
- EOL/support-bound technology: check against the next relevant milestone
- draft standard: tighter watch only when it affects an active decision

Research should be incremental: last verified version → official delta → impact analysis.

## Standards change flow

Official change detected
→ classify normative/material/editorial
→ identify affected layers/vectors
→ map to specifications/contracts/policies
→ impact analysis
→ create backlog work only when necessary
→ LAB POC if uncertainty remains
→ Architecture/Engineering decision
→ implementation/verification
→ update registry/conformance
→ update Arc42/other projections when material

## Deterministic conformance

Prefer machine-verifiable controls where possible:

- OpenAPI/schema validation
- architecture tests/module boundaries
- dependency/SBOM checks
- secure configuration checks
- telemetry semantic-attribute checks
- build reproducibility
- contract tests
- policy-as-code where appropriate
- documentation completeness checks

AI may explain gaps but must not mark conformance without evidence.

## Director/dashboard views

Expose:

- standards by layer/vector
- evaluated/current version
- action/status
- maturity L0-L5
- open source conflicts
- overdue reviews
- standards changes with impacted work
- conformance evidence freshness
- standards with no implementation evidence
- standards with implementation but no operational evidence

## Research workstream

Standards Intelligence is a Research/Architecture capability. Engineering consumes its evidence and impact decisions; engineering should not repeatedly perform open-ended standards discovery inside every feature session.

## Goal

Architecture AI should evolve from "we mention standards" to "we can prove which standards matter, how they apply, where they are implemented, how they are verified and what changed over time."

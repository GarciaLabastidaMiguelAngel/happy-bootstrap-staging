# DIRECTION-0004 Impact Assessment

Status: ACTIVE
Previous direction: DIRECTION-0003
New direction: DIRECTION-0004
Base repository commit before delta: `a727090673cc4327be96ce72c64cdf617f51c670`
Base Seed: immutable `Architecture_AI_Seed_V1_1.0.0-rc2 / SEED-SNAPSHOT-RC2-001`

## Material change

DIRECTION-0004 adds explicit governance for:

- Arc42 as the principal human-facing final architecture/design document projection
- versioned/auditable Arc42 PDF releases
- classification of contextual vs material architecture changes
- infrastructure/organizational-impact release boundaries
- multi-audience diagram projection
- conceptual/executive use of draw.io/iconography
- technical use of C4/Mermaid/PlantUML
- traceability from released diagrams/PDF back to governed source

## Seed integrity decision

The rc2 Seed is immutable and hash-governed. Do not edit it in place.

Post-rc2 direction is captured as an evolution delta under:

`work/seed-evolution/POST_RC2_DIRECTION_0004_ARC42_AND_VISUAL_GOVERNANCE.md`

A future candidate/reconciliation wave must absorb the delta without rewriting rc2 history.

## Prompt impact

- `P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01`: REVIEW_REQUIRED — add Arc42 release/document artifact authority and diagram-source rules before handoff.
- `P-EVENT-PLATFORM-SAGA-01`: UNAFFECTED_WITH_CONTEXT_REFRESH — document-release workflows may later use shared saga/event contracts; do not create a second orchestration model.
- `P-OBSERVABILITY-AUDIT-01`: UNAFFECTED_WITH_CONTEXT_REFRESH — Arc42 release/audit events and document evidence should reuse common audit/telemetry planes.
- `P-LOCAL-TELEMETRY-DATA-ROAD-01`: UNAFFECTED.
- `P-NOTIFICATION-PLATFORM-01`: UNAFFECTED_WITH_CONTEXT_REFRESH — review/approval attention for material Arc42 releases should reuse Attention/Decision contracts.
- `P-SIMULATION-EVALUATION-FOUNDATION-01`: UNAFFECTED.
- `P-AGENT-RUNTIME-COMMUNICATION-PLANE-01`: UNAFFECTED_WITH_CONTEXT_REFRESH — Documentation/Director work should expose Arc42 release status and deltas but provider protocol architecture is unchanged.

## Dashboard impact

Add progressive visibility for:

- current WORKING_ARC42 state/version
- last RELEASED_ARC42 version
- delta classification
- release required yes/no
- affected external areas/processes
- documentation/release blockers and gates
- diagram catalog/view type/source traceability

## Gate impact

G8 Documentation becomes more explicit but does not replace other gates.

Material Arc42 release requirements depend on change impact. Infrastructure/organizational changes may require external human-process evidence in addition to Architecture AI gates.

## Storage impact

No authority reversal.

Git remains the engineering/governance authority for specifications, decisions, diagram sources, Arc42 projection/release metadata and traceability.

Released PDF copies may be distributed/retained in FileShare, SharePoint, Confluence or institutional repositories without becoming competing architecture identities.

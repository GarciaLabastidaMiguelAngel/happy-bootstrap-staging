# Devin Prompt Index

Status: ACTIVE
Direction revision: `DIRECTION-0002`

This index tracks prompts prepared by Happy Work for delegated Devin sessions.

## Current operating rules

- Each prompt has a stable ID.
- One prompt normally maps to one bounded Devin session/workstream.
- File existence does not imply `SENT` or `EXECUTED`.
- Parallelism must be classified before handoff.
- Material direction changes may invalidate or pause active prompts.
- Long-running sessions must receive Context Refresh deltas when the baseline changes materially.
- Missing context must produce discovery/reconciliation work, not guessing.
- `READY` means the prompt text is captured and can be considered for handoff; it does not mean the user has sent it.
- `DRAFT` must be reconciled before handoff.
- `SUPERSEDED` is retained for history and must not be handed to Devin unless explicitly revived.
- Before any handoff prepared under an older direction, Work must apply the latest accepted Context Refresh/impact assessment.

## Parallelism classes

- `PARALLEL_SAFE`
- `PARALLEL_SAFE_WITH_BOUNDARIES`
- `SERIAL_REQUIRED`
- `DISCOVERY_ONLY`
- `BLOCKED_BY_DEPENDENCY`

## Prompt lifecycle

- `DRAFT`
- `READY`
- `SENT`
- `EXECUTING`
- `EXECUTED`
- `RECONCILING`
- `RECONCILED`
- `BLOCKED`
- `SUPERSEDED`
- `CANCELLED`

## DIRECTION-0002 cross-cutting refresh

All future handoffs must include these governing principles where relevant:

- Architecture AI acts as Director/Copilot over governed platform state.
- First tangible local scope prioritizes Director Chat + Work/Blocker/Gate visibility.
- Construction order is `DETERMINISTIC -> TOOL -> SKILL -> AGENT`.
- Specification comes first for material contracts/behavior.
- OpenAPI/Swagger should govern material HTTP APIs where appropriate.
- Engineering delegates material open-ended research to Research/Discovery.
- Gates should be deterministic/machine-verifiable where practical.
- Documentation/evidence is part of governed completion.
- Architecture planning is top-down from organizational/enterprise objectives rather than isolated areas.

Full impact assessment: `work/changes/DIRECTION-0002_IMPACT.md`.

## Control table

| Prompt ID | Domain | Status | Parallelism | DIRECTION-0002 impact | Handoff note |
|---|---|---|---|---|---|
| `P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01` | Repository / runtime modes / artifact lifecycle | READY | SERIAL_REQUIRED | REVIEW_REQUIRED | Broad shared-surface prompt; refresh for specification/gate/director governance before handoff |
| `P-EVENT-PLATFORM-SAGA-01` | Event platform / sagas | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Reuse shared Work/Gate/Director semantics; do not create competing orchestration |
| `P-OBSERVABILITY-AUDIT-01` | Observability / audit | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Gate/director/work signals must enter the same telemetry/audit plane |
| `P-LOCAL-TELEMETRY-DATA-ROAD-01` | Local OTel Collector / analytical observation road | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED | Extend observation road later for gate/director/work data; no second telemetry pipeline |
| `P-NOTIFICATION-PLATFORM-01` | Human attention / notification / decisions | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Gate/blocker/human-decision attention must reuse this platform |
| `P-SIMULATION-EVALUATION-FOUNDATION-01` | LAB / simulation / replay / Monte Carlo | DRAFT | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Reconcile telemetry road plus governance/drift/capacity uses before handoff |
| `P-AGENT-RUNTIME-COMMUNICATION-PLANE-01` | Sessions / work / Devin API / MCP / A2A | READY | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Preserve protocol model but prioritize Director Chat/control path and gate/work integration; not confirmed sent |
| `P-DEVIN-API-ACCESS-DISCOVERY-01` | Devin API discovery / RBAC | SUPERSEDED | DISCOVERY_ONLY | SUPERSEDED | User explicitly said it was not sent; later real PowerShell/API evidence made a separate discovery session unnecessary |
| `P-OBSERVABILITY-AUDIT-PLATFORM-01` | Earlier observability draft | SUPERSEDED | PARALLEL_SAFE_WITH_BOUNDARIES | SUPERSEDED | Interrupted earlier draft; replaced by `P-OBSERVABILITY-AUDIT-01` |

## Captured file locations

### Active / ready

- `active/P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01.md`
- `active/P-EVENT-PLATFORM-SAGA-01.md`
- `active/P-OBSERVABILITY-AUDIT-01.md`
- `active/P-LOCAL-TELEMETRY-DATA-ROAD-01.md`
- `active/P-NOTIFICATION-PLATFORM-01.md`
- `active/P-AGENT-RUNTIME-COMMUNICATION-PLANE-01.md`

### Draft

- `draft/P-SIMULATION-EVALUATION-FOUNDATION-01.md`

### Superseded / retained history

- `superseded/P-DEVIN-API-ACCESS-DISCOVERY-01.md`
- `superseded/P-OBSERVABILITY-AUDIT-PLATFORM-01.md`

## Concepts discussed in chat but intentionally absorbed rather than duplicated

The following working names were discussed but were not delivered as separate final prompts, so they are not assigned independent executable prompt IDs:

- `P-SESSION-CONTEXT-RUNTIME-01` concept is absorbed into `P-AGENT-RUNTIME-COMMUNICATION-PLANE-01` plus `work/SESSION_CONTEXT_PACK_TEMPLATE.md`.
- `P-DEVIN-AGENT-RUNTIME-FOUNDATION-01` concept evolved into the broader `P-AGENT-RUNTIME-COMMUNICATION-PLANE-01`.
- `P-DEVIN-OBSERVABILITY-INTEGRATION-DISCOVERY-01` concept is covered by the provider telemetry/discovery sections of `P-AGENT-RUNTIME-COMMUNICATION-PLANE-01` and the historical Devin API discovery file.
- Telemetry ETL / simulation-data-road refinements were incorporated into `P-LOCAL-TELEMETRY-DATA-ROAD-01` rather than creating another overlapping prompt.
- `Director Chat`, governance gates and deterministic-first construction are now direction-level requirements under DIRECTION-0002 and should be consumed by subsequent implementation prompts rather than duplicated as informal chat-only assumptions.

## Required metadata for new prompt files

Each prompt file should carry metadata equivalent to:

```yaml
prompt_id: P-...
title: ...
domain: ...
status: READY
parallelism_decision: PARALLEL_SAFE_WITH_BOUNDARIES
direction_revision: DIRECTION-...
repository_baseline: <commit/ref>
depends_on: []
conflicts_with: []
shared_surfaces: []
allowed_change_scope: []
forbidden_change_scope: []
expected_deliverables: []
validation_required: []
created_at: null
sent_at: null
executed_at: null
devin_session_reference: null
result_reference: null
```

Do not invent timestamps, execution state or Devin session references.

## Handoff rule

Before Happy Work hands a `READY` prompt to a new Devin session it must:

1. refresh the repository baseline;
2. confirm the active direction revision;
3. inspect active workstreams and shared surfaces;
4. apply any current material-change impact assessment;
5. produce/refresh the Session Context Pack;
6. decide whether the prompt is still `READY`, needs boundaries, must wait, or is superseded;
7. include a Context Refresh when a long-lived session is continuing after a material change.

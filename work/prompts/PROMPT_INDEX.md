# Devin Prompt Index

Status: ACTIVE

This index tracks prompts prepared by Happy Work for delegated Devin sessions.

## Current operating rules

- Each prompt has a stable ID.
- One prompt normally maps to one bounded Devin session/workstream.
- File existence does not imply `SENT` or `EXECUTED`.
- Parallelism must be classified before handoff.
- Material direction changes may invalidate or pause active prompts.
- Long-running sessions must receive Context Refresh deltas when the baseline changes materially.
- Missing context must produce discovery/reconciliation work, not guessing.

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

## Control table

| Prompt ID | Domain | Status | Parallelism | Depends on | Notes |
|---|---|---|---|---|---|
| P-AGENT-RUNTIME-COMMUNICATION-PLANE-01 | Agent runtime / sessions / protocols | READY | PARALLEL_SAFE_WITH_BOUNDARIES | Event/Saga/MCP/Observability contracts | Prepared in chat; not confirmed sent |
| P-OBSERVABILITY-AUDIT-01 | Observability / audit | UNKNOWN | PARALLEL_SAFE_WITH_BOUNDARIES | Existing Spring runtime | Status must be confirmed by user before changing |
| P-LOCAL-TELEMETRY-DATA-ROAD-01 | OTel Collector / simulation data road | UNKNOWN | PARALLEL_SAFE_WITH_BOUNDARIES | Observability contracts | Status must be confirmed by user before changing |
| P-NOTIFICATION-PLATFORM-01 | Human attention / notifications | UNKNOWN | PARALLEL_SAFE_WITH_BOUNDARIES | Event/Saga/Observability contracts | Status must be confirmed by user before changing |

## Required metadata for new prompt files

Each individual prompt file should carry a metadata header equivalent to:

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
created_at: ...
sent_at: null
executed_at: null
devin_session_reference: null
result_reference: null
```

Do not invent timestamps or Devin session references.

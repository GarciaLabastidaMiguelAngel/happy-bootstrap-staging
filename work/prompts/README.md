# Happy Work — Devin Prompt Control

This directory is the operational control plane for prompts prepared in Happy Work and delegated to Devin sessions.

It is intentionally separate from the Seed payload under `seed/` and does not change Seed release status, canonical readiness, or implementation evidence.

## Operating model

Happy Work acts as prompt coordinator and Git-backed control point.

For each requested implementation/research block, Happy Work should:

1. Identify whether the work can run in parallel with active Devin sessions.
2. Identify overlap/conflict risk by repository area, runtime concern, shared contracts, schemas, configuration, migrations, dashboard/API, build logic, and cross-cutting infrastructure.
3. Decide one of:
   - `PARALLEL_SAFE`
   - `PARALLEL_SAFE_WITH_BOUNDARIES`
   - `SERIAL_REQUIRED`
   - `DISCOVERY_ONLY`
   - `BLOCKED_BY_DEPENDENCY`
4. Generate one bounded prompt for one Devin session.
5. Persist the prompt and its control metadata in Git before or when it is handed off.
6. Record execution status when the user confirms it was sent/executed.
7. Reconcile returned Devin evidence before generating dependent work.

## Prompt identity

Use stable IDs:

`P-<DOMAIN>-<PURPOSE>-<NN>`

Examples:

- `P-AGENT-RUNTIME-COMMUNICATION-PLANE-01`
- `P-OBSERVABILITY-AUDIT-01`
- `P-NOTIFICATION-PLATFORM-01`

Do not reuse an ID for materially different work.

## Prompt lifecycle

Each prompt should use one of these states:

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

A prompt stored in Git is not automatically `SENT` or `EXECUTED`.

## Session model

One prompt normally maps to one Devin session/work stream.

Record at minimum:

- `prompt_id`
- `title`
- `domain`
- `status`
- `parallelism_decision`
- `depends_on`
- `conflicts_with`
- `shared_surfaces`
- `allowed_change_scope`
- `forbidden_change_scope`
- `expected_deliverables`
- `validation_required`
- `created_at`
- `sent_at` when confirmed
- `executed_at` when confirmed
- `devin_session_reference` when known
- `result_reference` when known

## Parallel-work rule

Do not decide parallelism only from prompt titles.

Check likely collision surfaces, especially:

- Gradle/build logic
- Spring Boot global configuration
- database migrations
- shared schemas/contracts
- MCP catalogs/contracts
- Event/Saga infrastructure
- OpenTelemetry/Micrometer configuration
- Angular shared DTOs/routes
- runtime manifests
- common persistence abstractions

When work can run concurrently but touches a shared concern, mark `PARALLEL_SAFE_WITH_BOUNDARIES` and state the exact files/areas that one session must not redefine.

## Repository layout

Recommended structure:

```text
work/prompts/
├── README.md
├── PROMPT_INDEX.md
├── active/
├── completed/
├── blocked/
└── superseded/
```

`PROMPT_INDEX.md` will be the human-readable master control table. Individual prompt files should contain the complete text handed to Devin plus a short metadata header.

## Source-of-truth rule

Git versions the operational prompt history and coordination metadata.

The user remains the authority for confirming that a prompt was actually sent to Devin and for identifying which Devin session executed it when that information is not programmatically available.

Happy Work must not infer `SENT`, `EXECUTED`, or `RECONCILED` from file existence alone.

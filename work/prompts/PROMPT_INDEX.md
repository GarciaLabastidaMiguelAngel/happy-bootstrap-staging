# Devin Prompt Index

Status: ACTIVE
Direction revision: `DIRECTION-0005`

This index tracks prompts prepared by Happy Work for delegated Devin sessions.

## Current operating rules

- Each prompt has a stable ID.
- One prompt normally maps to one bounded Devin session/workstream.
- File existence does not imply `SENT` or `EXECUTED`.
- Parallelism must be classified before handoff.
- Material direction changes may invalidate or pause active prompts.
- Long-running sessions receive Context Refresh deltas when the baseline changes materially.
- Missing context produces discovery/reconciliation work, not guessing.
- `READY` means captured and handoff-eligible after current-direction refresh; it does not mean sent.
- `DRAFT` must be reconciled before handoff.
- `SUPERSEDED` is retained for history and must not be handed off unless explicitly revived.

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

## Current cross-cutting direction refresh

All future handoffs must consume these principles where relevant:

- Architecture AI acts as Director/Copilot over governed platform state.
- First visible local target remains Director Chat + governed status/work/blocker/gate/read-model visibility.
- Construction order is `DETERMINISTIC -> TOOL -> SKILL -> AGENT`.
- Material work is `PLAN BEFORE EXECUTION` and specification-first.
- OpenAPI/Swagger governs material HTTP contracts where appropriate.
- Research unknowns are blocking, safe-default, parallel-research or deferred.
- Engineering delegates open-ended standards/product research rather than absorbing it silently.
- Capability delivery and continuous quality/refactor are synchronized loops.
- Issues/findings become durable governed work/evidence.
- Parallel development follows bounded ownership of modules/contracts/shared surfaces.
- Gates should be deterministic/machine-verifiable where practical.
- Documentation/evidence is part of governed completion.
- AI usage/cost minimization through deterministic migration is explicit.
- Knowledge autonomy is a target; repeated manual package handoff is transitional.
- MCP is agent-facing capability protocol; backend direct APIs may sit behind MCP tools when justified.
- Architecture planning is top-down from organizational/enterprise objectives.
- Canonical document term is `Arc42`.
- Released Arc42 PDFs are versioned/auditable projections and never overwritten.
- Diagramming is audience-aware: C4/Mermaid/PlantUML technical; draw.io/iconographic conceptual/executive.
- Analytics is downstream from evidence and must distinguish audit/logs/traces/metrics/work/event/saga/Git/Arc42 evidence.
- Standards are a living governed registry with version/source/adoption/conformance/evidence/review cadence.
- Standards conformance is decomposable by layer/vector; `ADOPTED` does not imply `VERIFIED`.
- Knowledge graph/read models/CQRS projections should reduce repeated raw-data/LLM processing while preserving provenance.
- Local CQRS may use the same physical infrastructure; no database/repository multiplication for pattern purity.
- Vectors are retrieval/drift signals, not architecture authority.
- Backlog hierarchy and prioritization are provider-neutral and evidence-based; future Jira is an adapter/integration target.
- Self-evolution means governed optimization/proposal, not unrestricted self-modification.
- Vulnerability discovery does not imply authorization to exploit; LAB POCs require explicit authorization.
- Scale-out/OpenShift is evidence-driven; measure local bottlenecks, parallelizable backlog and coordination cost first.

Latest impact assessment: `work/changes/DIRECTION-0005_IMPACT.md`.
Post-rc2 evolution overlay: `work/seed-evolution/POST_RC2_DIRECTION_0005_ANALYTICS_STANDARDS_AUTONOMY.md`.

## Control table

| Prompt ID | Domain | Status | Parallelism | DIRECTION-0005 impact | Handoff note |
|---|---|---|---|---|---|
| `P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01` | Repository / runtime modes / artifact lifecycle | READY | SERIAL_REQUIRED | REVIEW_REQUIRED | Add read-model/CQRS authority, standards registry, analytical storage and scale-out rules |
| `P-EVENT-PLATFORM-SAGA-01` | Event platform / sagas | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Events provide correlated evidence but do not become analytics storage |
| `P-OBSERVABILITY-AUDIT-01` | Observability / audit | READY | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Align with Analytics/Audit/Evidence plane and standards-conformance measurement |
| `P-LOCAL-TELEMETRY-DATA-ROAD-01` | Local OTel Collector / analytical observation road | READY | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Add lineage/read-model/analysis outputs and OpenShift Collector readiness criteria |
| `P-NOTIFICATION-PLATFORM-01` | Human attention / notification / decisions | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Standards/security/scale blockers use shared Attention model |
| `P-SIMULATION-EVALUATION-FOUNDATION-01` | LAB / simulation / replay / Monte Carlo | DRAFT | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Add backlog/capacity/parallelism/AI-cost/OpenShift scale scenarios |
| `P-AGENT-RUNTIME-COMMUNICATION-PLANE-01` | Sessions / work / Devin API / MCP / A2A | READY | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Add portfolio/backlog, analysis observations, standards context and multi-workstation readiness |
| `P-DEVIN-API-ACCESS-DISCOVERY-01` | Devin API discovery / RBAC | SUPERSEDED | DISCOVERY_ONLY | SUPERSEDED | Real API evidence replaced the need for this discovery prompt |
| `P-OBSERVABILITY-AUDIT-PLATFORM-01` | Earlier observability draft | SUPERSEDED | PARALLEL_SAFE_WITH_BOUNDARIES | SUPERSEDED | Replaced by `P-OBSERVABILITY-AUDIT-01` |

## New candidate prompts created by DIRECTION-0005

Not yet generated. Work must collision-check before creating/handoff:

- `P-DIRECTOR-CHAT-WORK-READMODEL-01`
- `P-STANDARDS-INTELLIGENCE-CONFORMANCE-01`
- `P-ANALYTICS-EVIDENCE-READMODELS-01`
- `P-KNOWLEDGE-GRAPH-CQRS-PROJECTION-01`
- `P-PORTFOLIO-BACKLOG-ENGINEERING-FLOW-01`
- `P-OPENSHIFT-SERVICE-READINESS-DISCOVERY-01`

Do not launch all of them simultaneously. Shared surfaces include persistence, Work model, OpenAPI, dashboard DTOs, telemetry, graph schemas and configuration.

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

### Superseded

- `superseded/P-DEVIN-API-ACCESS-DISCOVERY-01.md`
- `superseded/P-OBSERVABILITY-AUDIT-PLATFORM-01.md`

## Required metadata for new prompt files

```yaml
prompt_id: P-...
title: ...
domain: ...
status: READY
parallelism_decision: PARALLEL_SAFE_WITH_BOUNDARIES
direction_revision: DIRECTION-0005
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

Before handing a `READY` prompt to Devin, Work must:

1. refresh repository baseline;
2. confirm active direction;
3. inspect active workstreams/shared surfaces;
4. apply latest impact assessment;
5. refresh Session Context Pack;
6. classify blocker/research state;
7. identify standards/gates/evidence expectations;
8. identify analytical/read-model/Arc42 implications where applicable;
9. decide whether prompt remains READY, needs boundaries, must wait or is superseded;
10. add Context Refresh for long-running sessions after material change.

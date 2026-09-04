# DIRECTION-0005 Impact Assessment

Status: ACTIVE
Previous direction: DIRECTION-0004
New direction: DIRECTION-0005

## Material changes

DIRECTION-0005 adds four major governing concerns without invalidating the core DIRECTION-0004 architecture:

1. an explicit Analytics/Audit/Evidence plane for platform learning and explainability;
2. a living Standards Intelligence and Conformance model;
3. governed Knowledge Graph + CQRS/read-model projections for complex questions and lower AI cost;
4. portfolio/backlog/autonomous-evolution and measured scale-out/OpenShift readiness.

## Preserved principles

The following remain unchanged:

- one product / modular monolith first
- local-first LAB now, OpenShift SERVICE later
- Director Chat as first visible interaction
- Work durable / provider sessions ephemeral
- MCP capability plane
- provider API lifecycle plane
- A2A compatibility where justified
- specification first
- plan before execution
- deterministic → tool → skill → agent
- Arc42 audited release lifecycle
- audience-aware diagram projection
- Git authority for governed engineering artifacts
- continuous quality/refactor
- explicit AI-cost reduction objective

## Prompt impact

| Prompt | Impact | Required action before handoff |
|---|---|---|
| P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01 | REVIEW_REQUIRED | Add read-model/CQRS authority, standards registry, analytical storage and scale-out rules |
| P-EVENT-PLATFORM-SAGA-01 | UNAFFECTED_WITH_CONTEXT_REFRESH | Ensure events provide evidence/correlation but do not become analytics storage |
| P-OBSERVABILITY-AUDIT-01 | REVIEW_REQUIRED | Align with Analytics/Audit/Evidence plane and standards-conformance measurements |
| P-LOCAL-TELEMETRY-DATA-ROAD-01 | REVIEW_REQUIRED | Add lineage/read-model/analysis outputs and OpenShift Collector readiness criteria |
| P-NOTIFICATION-PLATFORM-01 | UNAFFECTED_WITH_CONTEXT_REFRESH | Surface standards/security/scale blockers through shared Attention model |
| P-SIMULATION-EVALUATION-FOUNDATION-01 | REVIEW_REQUIRED | Add backlog/capacity/parallelism/AI-cost/OpenShift scale scenarios |
| P-AGENT-RUNTIME-COMMUNICATION-PLANE-01 | REVIEW_REQUIRED | Add portfolio/backlog, analysis observations, standards context and multi-workstation readiness |

No existing READY prompt should be handed off without a DIRECTION-0005 context refresh.

## New work candidates

Potential future prompts should be generated only after collision analysis:

- P-DIRECTOR-CHAT-WORK-READMODEL-01
- P-STANDARDS-INTELLIGENCE-CONFORMANCE-01
- P-ANALYTICS-EVIDENCE-READMODELS-01
- P-KNOWLEDGE-GRAPH-CQRS-PROJECTION-01
- P-PORTFOLIO-BACKLOG-ENGINEERING-FLOW-01
- P-OPENSHIFT-SERVICE-READINESS-DISCOVERY-01

Do not launch all of these simultaneously. Shared surfaces include persistence, OpenAPI, Work model, dashboard DTOs, telemetry and graph schemas.

## Immediate priorities

1. Keep the first user-visible vertical slice small: Director Chat + governed status/read model.
2. Make standards state queryable before attempting broad standards automation.
3. Reuse existing telemetry/audit foundations rather than creating a second analytics event bus.
4. Introduce CQRS logically over current local infrastructure; do not multiply repositories/databases.
5. Use backlog/parallelism metrics to decide when additional Devin sessions/workstations are actually useful.

## Verification issue

The historical rc2 standards map records ArchiMate 4 with a 2026 publication date. Current accessible Open Group primary pages surfaced by research tooling still identify ArchiMate 3.2 as the latest downloadable/certification baseline. This is a source conflict and must be resolved from a current authoritative Open Group publication before changing historical rc2 content or the active standard registry.

## Seed continuity

rc2 remains immutable.

DIRECTION-0005 additions are captured as post-rc2 evolution under:

`work/seed-evolution/POST_RC2_DIRECTION_0005_ANALYTICS_STANDARDS_AUTONOMY.md`

A future candidate must reconcile these changes without rewriting historical rc2 receipts/hashes.

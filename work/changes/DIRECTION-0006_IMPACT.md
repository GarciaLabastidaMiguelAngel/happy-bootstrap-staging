# DIRECTION-0006 Impact Assessment

Status: ACTIVE
Previous direction: DIRECTION-0005
New direction: DIRECTION-0006

## Material changes

1. LAB/PLATFORM_DEV temporarily prioritizes fastest safe delivery and useful parallelism over ACU/token minimization.
2. Initial specialist Devin session/workstream organization becomes an explicit first implementation step.
3. Aggressive coding parallelism is gated by `GIT_PARALLEL_DEVELOPMENT_READY`.
4. Development must survive missing central DB and enterprise identity through explicit degraded profiles.
5. Knowledge becomes a specialized governed area with controlled Devin knowledge projections.
6. Research becomes a high-parallelism permanent evidence fabric.
7. UX/architect experience and frontend analytics become explicit workstreams.
8. Independent QA, deployment and cross-artifact consistency become required for longer autonomous cycles.
9. Organization/session topology is itself measured and allowed to evolve, but responsibilities cannot disappear without transfer.

## Existing prompt impact

| Prompt | Impact | Action |
|---|---|---|
| P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01 | REVIEW_REQUIRED | Refresh storage/degraded profiles and Git parallel-development gate before handoff. |
| P-EVENT-PLATFORM-SAGA-01 | UNAFFECTED_WITH_CONTEXT_REFRESH | Ensure multi-session work/events use shared context/work model. |
| P-OBSERVABILITY-AUDIT-01 | UNAFFECTED_WITH_CONTEXT_REFRESH | Add organization/UX/deployment evidence correlations; do not redesign core telemetry. |
| P-LOCAL-TELEMETRY-DATA-ROAD-01 | UNAFFECTED_WITH_CONTEXT_REFRESH | Collector/observation road remains valid; expose dev degraded modes. |
| P-NOTIFICATION-PLATFORM-01 | UNAFFECTED_WITH_CONTEXT_REFRESH | Use shared attention for blockers/research/gates/QA. |
| P-SIMULATION-EVALUATION-FOUNDATION-01 | REVIEW_REQUIRED | Add session topology/parallelism/organization optimization scenarios. |
| P-AGENT-RUNTIME-COMMUNICATION-PLANE-01 | REVIEW_REQUIRED | Refresh to support initial multi-session LAB organization and provider knowledge projection without changing provider-neutral domain authority. |
| P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01 | NEW_READY | Must run before broad uncontrolled implementation parallelism. |

## Shared-surface impact

High-risk surfaces require explicit primary ownership during the first wave:
- Gradle/build conventions;
- global Spring configuration;
- shared OpenAPI/contracts;
- database migrations;
- Event/Saga foundations;
- Agent Runtime/MCP contracts;
- shared Angular contracts/routes/design foundations;
- OTel configuration;
- deployment manifests;
- knowledge model/ontology vocabulary.

## Direction compatibility

DIRECTION-0006 does NOT remove:
- deterministic-first architecture;
- specification-first;
- standards-first;
- Arc42 lifecycle;
- audience-aware diagramming;
- CQRS/read models/graph/vector strategy;
- local-first modular monolith;
- future OpenShift SERVICE direction;
- long-term AI cost optimization.

It changes the current LAB execution priority: use more AI/session parallelism now when it speeds safe construction, then optimize the resulting repeated work later.

## Seed continuity

The immutable rc2 snapshot is not modified.

DIRECTION-0006 is a post-rc2 evolution input for a future reconciliation/candidate cycle.
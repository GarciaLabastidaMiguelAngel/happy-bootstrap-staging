# DIRECTION-0006 Impact Assessment

Status: ACTIVE
Previous direction: DIRECTION-0005
New direction: DIRECTION-0006

## Material changes

1. LAB/PLATFORM_DEV temporarily prioritizes fastest safe delivery and useful parallelism over ACU/token minimization.
2. Capability/responsibility coverage is defined before final agent/session topology; logical areas are not automatically permanent agents.
3. Initial specialist Devin session/workstream organization becomes an explicit first implementation step after capability coverage.
4. Aggressive coding parallelism is gated by `GIT_PARALLEL_DEVELOPMENT_READY`.
5. Development must survive missing central DB and enterprise identity through explicit degraded profiles.
6. Knowledge becomes a specialized governed area with controlled Devin knowledge projections.
7. Research becomes a high-parallelism permanent evidence fabric.
8. Information classification, access, provider projection, backup/retention and PCI-scope analysis become explicit data/security governance responsibilities.
9. UX/architect experience and frontend analytics become explicit workstreams.
10. Independent QA, deployment and cross-artifact consistency become required for longer autonomous cycles.
11. Cross-area virtual meetings become purpose/trigger-driven governance councils with durable outputs.
12. Organization/session topology is itself measured and allowed to evolve, but responsibilities cannot disappear without transfer.

## Existing prompt impact

| Prompt | Impact | Action |
|---|---|---|
| P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01 | REVIEW_REQUIRED | Refresh storage/degraded profiles, information authority/classification and Git parallel-development gate before handoff. |
| P-EVENT-PLATFORM-SAGA-01 | UNAFFECTED_WITH_CONTEXT_REFRESH | Ensure multi-session work/events use shared context/work model and sensitive payloads are not copied into events without policy. |
| P-OBSERVABILITY-AUDIT-01 | REVIEW_REQUIRED | Add information-classification/redaction rules and organization/UX/deployment evidence correlations; do not redesign core telemetry. |
| P-LOCAL-TELEMETRY-DATA-ROAD-01 | REVIEW_REQUIRED | Collector/observation road remains valid but must explicitly protect/redact sensitive payloads and expose dev degraded modes. |
| P-NOTIFICATION-PLATFORM-01 | UNAFFECTED_WITH_CONTEXT_REFRESH | Use shared attention for blockers/research/gates/QA; notifications must obey information-display classification policy. |
| P-SIMULATION-EVALUATION-FOUNDATION-01 | REVIEW_REQUIRED | Add session topology/parallelism/organization optimization scenarios; simulation datasets must preserve classification/provenance. |
| P-AGENT-RUNTIME-COMMUNICATION-PLANE-01 | REVIEW_REQUIRED | Refresh for initial multi-session LAB organization, provider knowledge projection and sensitive-context handling without changing provider-neutral authority. |
| P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01 | NEW_READY / REFRESH_REQUIRED_BEFORE_HANDOFF | Bootstrap prompt must include capability-first topology, information governance/Data Council and sensitive-data research scope. |

## New governance artifacts

- `work/CAPABILITY_RESPONSIBILITY_TO_EXECUTION_TOPOLOGY.md`
- `work/LAB_AGENT_ORGANIZATION_AND_EXECUTION_MODEL.md`
- `work/GIT_PARALLEL_AGENT_DEVELOPMENT_GATE.md`
- `work/DEV_RESILIENCE_STORAGE_AND_IDENTITY_PROFILES.md`
- `work/KNOWLEDGE_GOVERNANCE_AND_DEVIN_PROJECTION_MODEL.md`
- `work/RESEARCH_FABRIC_AND_EVIDENCE_PRIORITY_MODEL.md`
- `work/UX_ANALYTICS_AND_ARCHITECT_EXPERIENCE_MODEL.md`
- `work/QA_RELEASE_DEPLOYMENT_AND_CONSISTENCY_MODEL.md`
- `work/INFORMATION_CLASSIFICATION_ACCESS_AND_PCI_MODEL.md`
- `work/GOVERNANCE_COUNCILS_AND_COORDINATION_CYCLES.md`

## Research impact

A dedicated parallel ResearchRequest now exists for institutional information classification, Microsoft Purview compatibility, PCI scope/handling and identity/step-up evidence.

This research is not allowed to declare bank policy or PCI compliance without institutional/official scope evidence.

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
- knowledge model/ontology vocabulary;
- information-classification vocabulary/policy engine;
- provider knowledge-projection policy;
- redaction/masking rules.

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

It also clarifies that capability/governance design comes before final agent count and that information sensitivity/access is cross-cutting across knowledge, UX, observability, deployment and provider communication.

## Seed continuity

The immutable rc2 snapshot is not modified.

DIRECTION-0006 is a post-rc2 evolution input for a future reconciliation/candidate cycle.
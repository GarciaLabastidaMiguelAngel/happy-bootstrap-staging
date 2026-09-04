# DIRECTION-0013 Impact Assessment

Status: ACTIVE
Previous direction: DIRECTION-0012
Change class: BACKWARD_COMPATIBLE / MATERIAL_MODULARITY_CLARIFICATION / CONTEXT_REFRESH_REQUIRED / SELECTIVE_REVIEW_REQUIRED

## Summary

DIRECTION-0013 formalizes four linked ideas:
- consumer-first technical capability offering;
- arborescent modularity/decomposition and selective extraction;
- knowledge direction with tree navigation + graph truth;
- infrastructure placement/cluster strategy independent from domain/module count.

This is a material clarification of the modular-boundary/physical-split strategy and therefore increments direction rather than silently editing DIRECTION-0012.

## Prompt impact

### P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01
REVIEW_REQUIRED.
Add arborescent capability decomposition, consumer classes, extraction lifecycle, knowledge-direction/tree+graph model and infrastructure-placement evidence. Do not create one agent per branch or consumer type.

### P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01
REVIEW_REQUIRED.
Repository/module/build structure must support a modular monolith first and low-coupling extraction seams. Do not create one repository/deployable per module by default.

### P-AGENT-RUNTIME-COMMUNICATION-PLANE-01
UNAFFECTED_WITH_CONTEXT_REFRESH.
Context/read models may expose tree navigation while canonical relationships remain graph-capable.

### P-KNOWLEDGE-GRAPH-CQRS-PROJECTION-01 candidate
EXPANDED_REQUIRED.
Must support tree/arborescent projections for navigation/decomposition without making the canonical knowledge model a strict tree.

### P-DIRECTOR-CHAT-WORK-READMODEL-01 candidate
EXPANDED_REQUIRED.
Copilot should explain capability ancestry, consumer->capability->realization mappings, extraction pressure and infrastructure placement rationale.

### P-DEVOPS-BANK-PLATFORM-INTEGRATION-01 candidate
EXPANDED_REQUIRED.
Must include cluster-placement policy, capacity evidence, namespace/project topology, chargeback vs isolation distinction and migration/placement decisions.

### P-PCR-PERFORMANCE-CAPACITY-GATES-01 candidate
EXPANDED_REQUIRED.
PCR/capacity evidence becomes a direct input to module extraction, deployment placement and cluster-consolidation decisions.

### New candidate: P-ARBORESCENT-MODULARITY-FOUNDATION-01
Prepare only after collision review with repository/archetype/bootstrap work. Should verify nested module boundaries, allowed dependencies, architecture tests, extraction readiness and documentation.

### New candidate: P-CONSUMER-CAPABILITY-CATALOG-01
Discovery/read-model candidate for consumer types, capability profiles, quality requirements and realization mappings.

### New candidate: P-INFRASTRUCTURE-PLACEMENT-CAPACITY-DISCOVERY-01
Discovery first. No cluster-consolidation implementation until actual utilization, resilience, security, topology, cost and operational evidence exists.

## Key guardrail

Spring Modulith can verify logical modules but does not automatically convert a module into a separate microservice/pod. `configuration-only extraction` must never be promised generically.

## Collision risks

Highest shared surfaces:
- module/package boundaries;
- build/repository structure;
- module APIs/events;
- knowledge graph/read models;
- deployment manifests/profiles;
- Environment Capability Matrix;
- PCR/capacity evidence;
- service/cluster topology decisions.

## Outcome

DIRECTION-0013 keeps the one-product/modular-monolith-first strategy and adds an explicit growth law:

`stable trunk -> bounded branches -> evidence -> selective extraction -> measure again`.

It rejects both premature microservice proliferation and premature cluster consolidation.
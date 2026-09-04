# DIRECTION-0011 Impact Assessment

Status: ACTIVE
Change type: BACKWARD_COMPATIBLE / CONTEXT_REFRESH_REQUIRED
Previous direction: DIRECTION-0010

## Summary

DIRECTION-0011 does not replace DIRECTION-0010. It formalizes five cross-cutting design rules that were implicit but not sufficiently explicit:

1. governance semantics and technical/runtime realization are separate models joined by governed RealizationBindings;
2. logical event taxonomy/channel design does not require one physical Kafka topic per governed event/category;
3. adoption/conformance metrics must expose denominator, dimensions, evidence and exceptions;
4. Copilot/dashboard human work should focus on evidence/decision/authority gaps while automation handles deterministic/expandable work;
5. DevOps owns progressive operability learning and Spring First is applied after existing institutional capability reuse.

## Prompt impact

### P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01
Impact: REVIEW_REQUIRED

Refresh capability coverage for:
- governance-to-runtime mappings;
- logical vs physical event topology;
- Copilot human-work/read-model experience;
- DevOps operability/AIOps learning;
- multidimensional standards/adoption evidence.

Do not create a new agent per concern.

### P-EVENT-PLATFORM-SAGA-01
Impact: REVIEW_REQUIRED

Add explicit separation:
EventContract -> LogicalEventChannel -> TransportBinding -> Physical Kafka resource.

Require Schema Registry/institutional event-platform discovery and minimal physical topic topology justified by security/retention/order/throughput/lifecycle rather than taxonomy alone.

### P-STANDARDS-INTELLIGENCE-CONFORMANCE-01 candidate
Impact: MATERIAL_CONTEXT_ADDITION

Conformance must support multidimensional evidence rather than opaque percentages and must link conceptual standard controls to runtime realization/evidence.

### P-DIRECTOR-CHAT-WORK-READMODEL-01 candidate
Impact: MATERIAL_CONTEXT_ADDITION

Make My Work, Blockers, Research Requests, Decisions, Adoption/Conformance drill-down and governed Copilot chat primary requirements.

### P-DEVOPS-BANK-PLATFORM-INTEGRATION-01 candidate
Impact: MATERIAL_CONTEXT_ADDITION

Add environment capability discovery, operability definition, configuration learning loop and bounded AIOps adoption metrics.

### BI-0001 / BI-0003 / BI-0004 / BI-0005 POCs
Impact: UNAFFECTED_WITH_CONTEXT_REFRESH

Use governance-to-runtime mappings and progressive operability/adoption evidence. Do not add architecture complexity merely to mirror conceptual taxonomies.

### P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01
Impact: UNAFFECTED_WITH_CONTEXT_REFRESH

Logical planes/governance concepts still do not imply repository/deployment split. Preserve existing-platform-first then Spring-first order.

## Git/release impact

- Frozen historical releases remain unchanged.
- No current prompt becomes SENT/EXECUTED because of this direction update.
- Future handoff must refresh Session Context Pack against DIRECTION-0011.

## New research dependencies

Recommended evidence work:
- actual institutional event-governance taxonomy/process;
- actual Kafka clusters/topics/ACLs/retention/partition/keying patterns;
- actual Schema Registry configuration/compatibility/subject conventions;
- development OpenShift namespaces/access/resource constraints;
- current DevOps/environment configuration and operability process;
- current standards/adoption reports and their scoring denominators.

## Overall result

DIRECTION-0011 strengthens architectural simplicity: richer governance models are allowed while runtime stays as small as technically justified, provided the mapping and conformance evidence remain explicit and auditable.
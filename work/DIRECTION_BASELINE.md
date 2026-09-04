# Project Direction Baseline

Status: ACTIVE
Direction revision: DIRECTION-0013
Previous direction: DIRECTION-0012
Previous accepted baseline commit: `abc0d0fbc00afab5338ab4542b6aea396ab38801`
Repository role: Happy Work staging / prompt-governance control plane
Current operating emphasis: governed cognitive Copilot, consumer-first technical capabilities, arborescent modularity, knowledge direction, deterministic customer/channel optimization, evidence-driven physical extraction and infrastructure placement

## Continuity rule

DIRECTION-0013 incorporates DIRECTION-0012 and all earlier accepted direction unless explicitly overridden below.

The exact DIRECTION-0012 baseline remains recoverable from Git history. Frozen historical releases and immutable snapshots remain historical and MUST NOT be rewritten in place.

DIRECTION-0013 is additive and a material clarification of the modular-boundary/physical-split strategy, not a reset.

## 1. Start from consumers and capabilities, not microservice count

Governed by:
`work/CONSUMER_TECHNOLOGY_CAPABILITY_OFFERING_MODEL.md`

Architecture AI and the banking technical platform should identify:

ConsumerType
-> ConsumerJourney/UseCase
-> RequiredTechnicalCapability
-> Quality/Security/Freshness/Capacity profile
-> existing institutional capability/reuse anchor
-> smallest justified technical realization
-> runtime/PCR evidence.

Initial logical consumer classes may include web, native mobile, branch, ATM, internal/BFF/API, event, batch/job, read-projection, identity/security/risk, DevOps/operations and architect/Copilot consumers. These are consumer types, not deployment units.

The primary objective is not `more APIs` or `fewer APIs`; it is:

`MINIMUM NECESSARY WORK PER CUSTOMER/CONSUMER OUTCOME`

while preserving correctness, authority, security, availability, operability and evidence.

Repeated measured needs may become reusable platform roads/patterns; a single theoretical use case is not enough to standardize a platform capability.

## 2. Arborescence is now an explicit modular-growth model

Governed by:
`work/ARBORESCENT_CAPABILITY_MODULARITY_AND_DEPLOYMENT_EVOLUTION_MODEL.md`

Core growth law:

ROOT PRODUCT / PLATFORM
-> stable capability trunks
-> bounded branches / nested capabilities
-> explicit module interfaces
-> runtime evidence
-> selective branch extraction only when justified
-> measure again.

Architecture AI remains one governed product / modular Spring Boot application by default.

Spring Modulith is a logical modularity/verification mechanism, not the physical architecture by itself.

Do not derive one module from each TOGAF concept, API, table, plane, agent, team or imagined future microservice.

Module boundaries should follow stable capability ownership, authoritative state, change reason, provided/required interfaces and dependency direction.

## 3. Tree for decomposition; graph for truth

Arborescent/tree views are useful for:
- capability decomposition;
- planning;
- work navigation;
- impact drill-down;
- module ancestry;
- deciding where a branch could eventually separate.

But standards, events, APIs, data, gates, processes and runtime dependencies cross branches.

Therefore:

`TREE FOR DECOMPOSITION / NAVIGATION`
+
`GRAPH FOR CROSS-CUTTING RELATIONSHIPS / CANONICAL KNOWLEDGE`.

Do not duplicate canonical concepts merely to preserve a strict tree.

## 4. Knowledge itself has a governed direction

Governed by:
`work/KNOWLEDGE_DIRECTION_AND_ARBORESCENT_PROJECTION_MODEL.md`

Knowledge direction:

RAW SOURCE/INFORMATION
-> EVIDENCE UNIT
-> NORMALIZED/CANDIDATE FACT
-> SOURCE-VERIFIED KNOWLEDGE
-> GOVERNED SEMANTIC RELATIONSHIPS
-> decision/standard/process/specification linkage
-> technical RealizationBinding
-> runtime evidence
-> learned pattern/reusable capability
-> authorized contextual projection to human/agent.

Knowledge is not accumulated without purpose. It should progressively reduce rediscovery, support decisions/gates, explain technical realization and enable deterministic execution.

Use conceptual layers such as evidence, semantics/domain, architecture/governance, technical realization, runtime/operations, analytics/learning and projections.

Use cross-cutting vectors such as security, fraud/risk, availability, data/privacy, standards/compliance, performance/capacity, cost/FinOps, process and ownership/authority.

## 5. Module extraction is an evidence-driven lifecycle

Candidate module lifecycle:

`IN_PROCESS_INTERNAL`
-> `IN_PROCESS_EXTRACTABLE`
-> `EXTRACTION_CANDIDATE`
-> `INDEPENDENT_DEPLOYABLE`
-> `DEDICATED_RUNTIME_POOL_OR_CLUSTER_CANDIDATE` only when separately justified.

A module does not have to progress through all states.

Material extraction triggers include:
- asymmetric scaling;
- incompatible resource profile;
- blast-radius/failure isolation;
- independent SLO/availability;
- security/compliance/trust boundary;
- data authority/isolation;
- independent lifecycle/release cadence;
- network/locality/latency;
- operational ownership;
- materially different dependency topology;
- measured cost/capacity benefit;
- hard platform constraint.

The default is to keep the capability in-process until evidence creates extraction pressure.

## 6. Cheap extraction is a design goal, not a configuration-only promise

To keep a branch extractable, prefer:
- explicit provided/required interfaces;
- no access to module internals;
- no dependency cycles;
- clear data/state ownership;
- no uncontrolled cross-module shared writes;
- explicit transaction boundaries;
- semantic identifiers;
- idempotency where future remote/async execution is plausible;
- stable events/contracts where real temporal decoupling exists;
- adapters around bank/external systems;
- externalized configuration/secrets;
- observability/correlation;
- PCR/capacity evidence;
- versioned contract evolution.

However, extraction cannot always be `only configuration`.

If a branch shares in-memory transactions, direct database writes, object graphs or hidden coupling, physical separation requires real refactoring/data/operational change.

Target:

`LOW-COST EXTRACTION WHEN JUSTIFIED`

not:

`EVERY MODULE BECOMES A MICROSERVICE WITHOUT REFACTORING`.

## 7. Spring Modulith role is explicit

Use Spring Modulith for logical application modules, named/provided interfaces, explicit allowed dependencies, structural verification, module integration testing, documentation and module-level observation where useful.

Application events are preferred when real ownership/temporal decoupling exists; do not make every method call asynchronous.

Externalization to Kafka or another broker remains a separate EventContract/LogicalChannel/TransportBinding decision.

Nested modules may model stable internal branches, but nesting depth must remain purposeful rather than decorative.

## 8. Application modularity and infrastructure placement are separate decisions

Governed by:
`work/INFRASTRUCTURE_PLACEMENT_CAPACITY_AND_CLUSTER_STRATEGY.md`

Maintain explicit mapping:

Capability
<-> ApplicationModule
<-> DeployableUnit
<-> OpenShift Namespace/Project
<-> Cluster
<-> Environment
<-> Runtime/PCR evidence.

Mappings can be many-to-one or one-to-many where justified.

A domain, initiative or module does not automatically require a dedicated namespace, cluster or physical site.

Consider the smallest placement scope that satisfies requirements:
1. same process/module;
2. separate pod/deployment;
3. separate service;
4. separate namespace/project;
5. separate node pool/runtime class where available;
6. separate cluster;
7. separate physical-site/region architecture where required.

## 9. Current multi-cluster estate must be measured before redesign

User-provided context indicates approximately six OpenShift clusters, each highly available across two physical data centers, historically associated with initiatives/domains and potentially budget/accountability separation.

Do not assume this is optimal; do not assume two clusters would be enough either.

`Fewer clusters could satisfy the same needs` is a research hypothesis only.

Before any consolidation/placement decision collect actual:
- allocated vs used CPU/memory;
- peak/average capacity;
- service/pod counts;
- HPA behavior;
- quotas/reservations;
- network/dependency topology;
- security/trust boundaries;
- availability/failure history;
- upgrade/maintenance constraints;
- physical-site failover behavior;
- PCR/capacity headroom;
- platform support cost;
- chargeback requirements;
- blast-radius tolerance.

Dedicated cluster is justified only by evidence such as hard isolation, independent availability/fault domain, specialized capacity/platform lifecycle, locality or another constraint that namespaces/quotas/network policy/node pools cannot adequately cover.

## 10. Chargeback is not the same as isolation

If historical domain-specific clusters primarily made cost allocation easier, evaluate logical cost attribution before preserving physical fragmentation.

Candidate cost dimensions:
- initiative/solution;
- capability;
- deployment/service;
- namespace/project;
- environment;
- resource request/actual use;
- shared-platform allocation.

Do not force a dedicated cluster merely because humans need to know what a domain costs when governed FinOps/resource attribution can answer it with shared infrastructure.

## 11. Existing API/microservice estate remains evidence-first

The current tendency toward one microservice per API and a large API count is not automatically wrong.

Evaluate each representative topology with:
- scaling/failure/security independence;
- data authority;
- release/ownership independence;
- downstream call amplification;
- OpenShift overhead;
- PCR/capacity;
- support/observability burden;
- change coupling/deployment frequency.

Classify KEEP / CONSOLIDATE_CANDIDATE / SPLIT_CANDIDATE / WRAP_ADAPT / UNKNOWN.

Do not optimize service count as a vanity metric.

## 12. DIRECTION-0012 cognitive Copilot remains active

Dashboard + governed Copilot remains the primary architect cognitive surface.

Context path remains:

identity/role/environment/classification/solution/work context
-> bounded Context/Evidence Pack
-> deterministic read models/graph/standards/runtime evidence
-> bounded Tools/Skills/Devin where authorized
-> grounded explanation/plan/research/prepared action
-> deterministic gate/action for material change.

The Copilot should now also explain:
- which consumer requires a capability;
- where a capability sits in the arborescent decomposition;
- why it remains in-process or was extracted;
- which module/service/cluster realizes it;
- what PCR/runtime evidence supports the placement;
- what changes if one branch is separated;
- how a tree view relates to cross-cutting graph knowledge.

Chat/session state is not canonical project state.

## 13. DIRECTION-0012 process/request/compliance direction remains active

Still mandatory:
- banking interactions distinguish QUERY / TRANSACTION / REQUEST / LONG_RUNNING_OPERATION;
- accepted request is not completed transaction;
- OperationId + typed reference/folio correlation preserves authority/auditability;
- process governance separates governance/design/realization/runtime;
- gates require explicit authority, applicability, evidence and pass criteria;
- standards/compliance radar explains denominator/applicability/evidence/exceptions;
- PCI/financial-regulator/institutional requirements require current official/institutional evidence;
- customer/channel paths are mostly deterministic measurable optimization roads.

## 14. DIRECTION-0011 governance-to-runtime and event separation remains active

Governance intent and technical realization remain separate but explicitly linked:

GOVERNANCE INTENT
-> REALIZATION BINDING
-> TECHNICAL IMPLEMENTATION
-> RUNTIME EVIDENCE
-> CONFORMANCE.

Event chain remains:

Business/Domain Event
-> Event Contract
-> Logical Event Channel
-> Transport Binding
-> Physical Kafka/platform resource
-> Runtime Evidence.

Rich semantic governance must not create unnecessary runtime resource count.

## 15. Existing-platform-first / Spring-first order remains active

Decision order:
0. existing governed institutional capability;
1. Spring ecosystem for gaps we own;
2. mature Java/JVM open source;
3. mature other technology when evidence shows better fit;
4. custom implementation last.

Spring/Java coherence is not permission to duplicate Glo, API Connect, Kafka/Schema Registry, Kibana, Smart Notification, Control-M or another sufficient institutional capability.

## 16. Six logical planes remain active

1. Experience / Interaction;
2. Governance / Control;
3. Knowledge / Evidence;
4. Execution / Automation;
5. Bank Integration;
6. Observation / Analysis / Learning.

A plane is not automatically a module, service, agent, repository, pod or cluster.

The arborescent capability model may be projected across planes without turning plane boundaries into physical deployment boundaries.

## 17. DevOps/PCR/AIOps role becomes even more important

DevOps owns progressive operability and environment capability discovery.

PCR/capacity/runtime evidence is a direct input to:
- module extraction;
- scaling policy;
- service topology;
- namespace placement;
- cluster placement/consolidation;
- cost/capacity decisions.

AIOps remains evidence-driven assistance over topology, telemetry, deployments, incidents, PCR and runbooks. Remediation remains governed/deterministic.

## 18. Existing bank anchors/adoption strategy remain active

Current user-provided integration anchors include Gravity Plus/core access, core banking, API Connect, Glo/OpenShift delivery, Kafka/Schema Registry, Kibana, Smart Notification, Control-M, customer IAM candidates, Redis/Exadata/read projections and current APIs/services.

Rule:

LEARN CURRENT REALITY
-> MAP PURPOSE/AUTHORITY/CONTROLS
-> REUSE/INTEGRATE
-> MEASURE
-> OPTIMIZE
-> PROVE
-> STANDARDIZE/AUTOMATE
-> EXTRACT/REPLACE/RELOCATE ONLY WITH EVIDENCE.

## Immediate execution priority

1. Refresh LAB/bootstrap/handoff context against DIRECTION-0013 before first actual Devin handoff.
2. Make consumer->capability->module/service/runtime mapping explicit in the architecture model/read models.
3. Verify Spring Modulith boundaries/allowed dependencies and extraction-readiness rules before scaling implementation.
4. Add arborescent tree projections while keeping canonical cross-cutting knowledge graph-capable.
5. Continue BI-0001/BI-0003/BI-0004/BI-0005 and deterministic customer-channel optimization.
6. Discover actual API/service/namespace/cluster topology, utilization and PCR evidence before consolidation/extraction decisions.
7. Continue process/compliance/event/Smart Notification/Control-M/IAM/DEV-environment research in parallel.
8. Use repeated measured needs to promote reusable technical roads, not speculative platform complexity.

## Research dependencies

Issues #4-#16 remain active as applicable.

DIRECTION-0013 additionally requires:
- authoritative cluster/namespace/platform-capacity inventory;
- real utilization/cost/availability/security/chargeback evidence;
- consumer/capability mapping for representative channel/platform journeys;
- extraction-pressure evidence for representative modules/services.

## Material-change triggers added by DIRECTION-0013

Increment direction again if accepted policy materially changes:
- arborescent decomposition model;
- tree-vs-graph canonical knowledge rule;
- module extraction lifecycle/criteria;
- Spring Modulith verification/extraction strategy;
- infrastructure placement or cluster-consolidation strategy;
- consumer capability taxonomy;
- chargeback/isolation policy.

## Working loop

Consumer/journey
-> required capability and quality profile
-> existing-platform reuse
-> arborescent module realization
-> deterministic tests/gates
-> runtime/PCR/cost/operability evidence
-> extraction/placement decision if pressure exists
-> knowledge graph/read-model update
-> Copilot explanation
-> governed improvement
-> next branch/cycle.

The target is a platform that grows like a governed tree rather than a pile of microservices: a stable trunk, explicit low-coupling branches, graph-connected knowledge and selective physical extraction/placement only where measurable technical need justifies it.
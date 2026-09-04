# Arborescent Capability, Modularity and Deployment Evolution Model

Status: ACTIVE_DIRECTION_MODEL
Direction: DIRECTION-0013

## Purpose

Define how Architecture AI and the banking technical platform can begin as a deliberately modular monolith and evolve by branching only where real consumer, capacity, security, failure, lifecycle or operational evidence requires physical separation.

This formalizes the user's `arborescence` idea as a governed decomposition/evolution model.

The exact wording/details of any earlier informal arborescence method were not previously persisted in the current staging repository, so this model captures the current articulated intent and remains reconcilable if older details are recovered.

## Core idea

ROOT PRODUCT / PLATFORM
-> stable capability trunks
-> sub-capabilities / bounded responsibilities
-> explicit module interfaces
-> nested modules where useful
-> runtime evidence
-> branch/extract only where justified.

Conceptually:

```text
Architecture AI / Banking Platform
|
+-- Experience capabilities
|   +-- Copilot
|   +-- Dashboard / My Work
|
+-- Governance / Control capabilities
|   +-- Work / gates
|   +-- Standards / conformance
|   +-- Process governance
|
+-- Knowledge / Evidence capabilities
|   +-- ingestion
|   +-- evidence / provenance
|   +-- knowledge/read models
|
+-- Execution capabilities
|   +-- tools / skills
|   +-- build/test/deploy
|
+-- Integration capabilities
|   +-- Gravity Plus
|   +-- Kafka
|   +-- Smart Notification
|   +-- Control-M / jobs
|
+-- Observation capabilities
    +-- telemetry
    +-- PCR / capacity
    +-- analysis / learning
```

This is a decomposition tree/view, not a statement that every node is a runtime service.

## Tree for decomposition, graph for truth

Arborescence is useful for:
- planning;
- capability ownership;
- hierarchical decomposition;
- navigation;
- impact drill-down;
- deciding where a branch may eventually be extracted.

However, architecture/knowledge reality is cross-linked.

One standard, event, data element, gate, API or runtime dependency can apply to several branches.

Therefore:

`TREE FOR DECOMPOSITION / NAVIGATION`
+
`GRAPH FOR CROSS-CUTTING RELATIONSHIPS / TRUTH`.

Do not duplicate a standard/control/semantic concept into every branch just to preserve a tree.

## Module lifecycle

A capability/module can move through states such as:

1. `IN_PROCESS_INTERNAL`
   - same Spring Boot process;
   - package/module isolation;
   - no network boundary.

2. `IN_PROCESS_EXTRACTABLE`
   - explicit module API;
   - internal state ownership understood;
   - external adapters isolated;
   - integration events/contracts defined where useful;
   - architecture tests protect the boundary.

3. `EXTRACTION_CANDIDATE`
   - measured reason exists for independent scale/isolation/lifecycle/security/cost/placement;
   - extraction impact has been assessed.

4. `INDEPENDENT_DEPLOYABLE`
   - separate runtime unit/pod/service only after evidence;
   - network/API/event contract replaces in-process coupling where required.

5. `DEDICATED_RUNTIME_POOL_OR_CLUSTER_CANDIDATE`
   - only when hard capacity/security/availability/fault-domain/operational placement evidence justifies it.

A module is not required to progress through all states.

## Extraction pressure / branch triggers

Physical extraction should be considered only when one or more material triggers are evidenced:
- asymmetric scaling demand;
- CPU/memory/accelerator/resource profile incompatible with parent runtime;
- failure/blast-radius isolation;
- availability/SLO independence;
- security/compliance/trust boundary;
- data authority/isolation;
- independent release/change cadence;
- specialized network/locality/latency need;
- operational ownership/support boundary;
- materially different dependency topology;
- cost/capacity optimization proven by measurement;
- infrastructure/platform constraint.

Budget/chargeback attribution by itself is not sufficient reason for a dedicated cluster when labels/namespaces/quotas/cost-allocation controls can provide the required accountability.

## Extraction readiness contract

A module intended to remain cheaply extractable should minimize accidental dependencies by maintaining:
- explicit provided/required interfaces;
- no cross-module access to internal implementation;
- no dependency cycles;
- clear data/state ownership;
- no uncontrolled cross-module shared writes;
- explicit transaction boundary;
- stable semantic identifiers;
- idempotency where remote/asynchronous execution may become necessary;
- explicit event contracts where temporal decoupling is useful;
- bank/external-system adapters at the boundary;
- configuration/secrets externalized;
- observability/correlation semantics;
- PCR/capacity evidence;
- versioned contract/evolution policy.

## Important non-promise

Good modular design can make extraction low-friction, but it cannot guarantee that splitting a module into a separate pod is `configuration only`.

If the module shares in-memory transactions, database writes, synchronous object graphs or hidden coupling with the parent, extraction requires real code/data/operational changes.

The design goal is therefore:

`LOW-COST EXTRACTION WHEN JUSTIFIED`

not:

`EVERY MODULE CAN BECOME A MICROSERVICE WITHOUT REFACTORING`.

## Spring Modulith role

Spring Modulith is used to represent and verify logical application modules inside a Spring Boot application.

Use it for:
- application-module detection;
- named/provided interfaces;
- explicit allowed dependencies;
- structural verification;
- module integration tests;
- module-level documentation;
- module-level runtime observations where useful;
- application events for real decoupling.

Spring Modulith does not itself choose the bank's physical service or cluster topology and does not automatically extract a module into a microservice.

## Nested/arborescent modules

Nested modules may be used when one capability contains a stable internal hierarchy.

Example:

```text
customer-access
+-- session
+-- authentication
+-- step-up
+-- risk-state
```

or:

```text
knowledge
+-- evidence
+-- standards
+-- process
+-- runtime-observation
```

Do not nest indefinitely. A nested module must still have a clear capability/change reason.

## Deployment mapping is separate

Maintain an explicit mapping:

Capability
<-> ApplicationModule
<-> DeployableUnit
<-> OpenShift Namespace/Project
<-> Cluster
<-> Environment
<-> Runtime evidence.

Mappings can be many-to-one or one-to-many when justified.

Examples:
- many modules in one deployable;
- one module extracted into one deployable;
- one deployable replicated across many pods;
- several deployables sharing one namespace/cluster;
- a specialized deployable placed in a dedicated runtime pool/cluster.

Do not derive cluster count from capability/domain count.

## Evolution rule

Default:

`MODULAR MONOLITH`
-> measure module/runtime behavior
-> identify extraction pressure
-> prove target boundary
-> extract one branch
-> preserve contracts/evidence
-> measure again.

This supports progressive branch growth without greenfield microservice proliferation.

## Goal

Create a product that can grow like a governed tree: stable trunk, explicit branches, low accidental coupling and selective physical separation driven by measured need, while cross-cutting knowledge remains a graph and infrastructure topology remains an independent engineering decision.
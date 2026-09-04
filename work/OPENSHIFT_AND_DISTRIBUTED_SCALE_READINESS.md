# OpenShift and Distributed Scale Readiness

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0005

## Purpose

Define how Architecture AI decides when the local single-workstation/LAB development model is no longer sufficient and how it prepares for SERVICE/OpenShift without prematurely distributing the platform.

## Core principle

SCALE BECAUSE EVIDENCE REQUIRES IT.

Do not distribute Architecture AI merely because distributed deployment is possible.

## Current baseline

Current emphasis remains local-first LAB development using one product/modular monolith, local embedded/rebuildable stores where appropriate, local OpenTelemetry Collector direction, Git-governed source/specifications and Devin as the first external reasoning provider.

OpenShift is the target SERVICE evolution, not a reason to fork the codebase.

## Local capacity indicators

Measure before deciding to distribute development or runtime:

- active backlog and backlog age
- parallelizable backlog
- WorkPackage queue depth
- blocked ratio
- local Devin/provider concurrency and utilization
- execution/cycle time
- context-refresh/branch-staleness rate
- merge collision/rework rate
- CPU/memory/disk pressure
- local store growth and query latency
- telemetry volume
- AI usage/cost
- manual coordination burden

No single metric automatically triggers distribution.

## Multi-workstation development decision

Additional architect workstations/providers become justified when sustained evidence shows that:

1. there is a material backlog of genuinely parallelizable work;
2. shared-surface collision risk is controlled;
3. one local provider/workstation is a measurable throughput bottleneck;
4. expected throughput gain exceeds synchronization/coordination cost;
5. Git/work/context synchronization is mature enough to prevent incoherence;
6. security/identity/data-distribution policy permits the topology.

Before distributing, use LAB simulation/replay/queueing where possible to estimate whether extra workers improve throughput or only increase rework.

## Distributed work model

Architecture AI should distribute durable WorkPackages, not raw chat histories.

Shared coordination requires:

- repository/direction baseline
- bounded Session Context Pack
- capability/ownership metadata
- durable assignment state
- evidence references
- result contract
- reconciliation

A remote architect workstation must not become an independent truth island.

## SERVICE/OpenShift readiness gates

Before promoting Architecture AI toward OpenShift SERVICE, evaluate at least:

### Build/release
- reproducible Gradle build
- immutable application release
- container build strategy
- governed registry/Nexus flow
- SBOM/checksum/evidence

### Configuration/security
- externalized configuration
- secrets management
- service identity/authentication
- network/TLS policy
- least privilege
- multi-user authorization model

### Persistence
- explicit migration path for operational state
- backup/restore/recovery
- concurrency semantics
- volume/external database decision
- graph/index rebuild/migration strategy

Do not assume an embedded local database can simply be copied into a multi-pod runtime.

### Observability
- OTLP endpoints
- Collector deployment strategy
- telemetry backend/export strategy
- retention/redaction policy
- health/readiness

OpenTelemetry provides supported Kubernetes deployment patterns for Collector, including Deployment/DaemonSet/StatefulSet via Helm and management via the OpenTelemetry Operator. OpenShift feasibility still requires platform/security validation in the target bank environment.

### Work/event/saga
- durable ownership
- idempotency
- multi-instance locking/concurrency
- event externalization decision where needed
- recovery/replay

### Knowledge
- source connector network access
- local-vs-central data classification
- index/graph storage strategy
- data migration rules
- no uncontrolled transfer of sensitive personal/corporate knowledge

### Director/dashboard
- authenticated multi-user access
- auditability
- role-aware views
- ownership/assignment
- no local-machine assumptions

## If no database platform is available in OpenShift

Do not force deployment with an unsafe persistence topology.

Generate an explicit platform blocker and evaluate bounded alternatives, for example:

- approved external enterprise database
- approved persistent-volume/single-writer pattern for a transitional stage
- service deployment constrained to one replica where safe
- deferred SERVICE promotion while stateless/read-only capabilities are proven

The selected option requires architecture/security/operability evidence.

## OpenTelemetry decision

OpenTelemetry should not be abandoned merely because a central telemetry backend is not yet available.

Separate:

1. application instrumentation and OTLP semantics
2. Collector deployment
3. telemetry backend/storage

Possible staged evolution:

local app → local Collector → local/debug/approved output

then

OpenShift app → Collector/Operator in cluster or approved shared Collector → institutional backend

If the target cluster does not permit the Operator/Collector, treat that as an integration constraint and evaluate another OTLP routing topology before replacing application instrumentation.

## Security research boundary across modes

PLATFORM_DEV/LAB may run controlled authorized POCs.

SOLUTION/SERVICE default to governed passive assessment, validation and reporting unless a specific policy authorizes active security testing.

A discovered vulnerability becomes evidence/risk/issue/work. It does not become an instruction to exploit a corporate environment.

## Distribution maturity questions

The Director should answer:

- Is local execution currently a bottleneck?
- How much work is actually parallelizable?
- What is our branch/collision/rework rate?
- What data must move to OpenShift and what must remain local/source-owned?
- Which SERVICE readiness gates are failing?
- Is persistence the blocker, telemetry, identity, networking or delivery?
- What is the smallest safe OpenShift POC?
- Would another architect workstation improve throughput now?
- What coordination capability must exist first?

## Goal

Reach OpenShift and multi-workstation operation through measured capability maturity, not premature distribution. Preserve one product, one governed work model and one direction across local and SERVICE modes.

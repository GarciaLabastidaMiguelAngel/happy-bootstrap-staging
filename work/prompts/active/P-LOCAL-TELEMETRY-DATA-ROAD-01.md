---
prompt_id: P-LOCAL-TELEMETRY-DATA-ROAD-01
title: Local OpenTelemetry Collector, OTLP Pipeline, Observation Datasets, Analytical Snapshots and Future OpenShift Migration Foundation
domain: local telemetry road / OpenTelemetry Collector / OTLP / simulation observations
status: READY
parallelism_decision: PARALLEL_SAFE_WITH_BOUNDARIES
direction_revision: DIRECTION-0001
repository_baseline: 171abc3fab22492a62cb4b6c7068e2357af8001e
depends_on: [P-OBSERVABILITY-AUDIT-01]
conflicts_with: []
shared_surfaces: [OpenTelemetry configuration, Gradle tasks, local runtime manifests, dashboard telemetry health]
allowed_change_scope: [local Collector runtime, OTLP pipeline, observation snapshots, Parquet evaluation, simulation telemetry requirements]
forbidden_change_scope: [requiring OpenShift, duplicating Java telemetry ETL, making Collector business-critical]
created_at: null
sent_at: null
executed_at: null
devin_session_reference: null
result_reference: null
---

# P-LOCAL-TELEMETRY-DATA-ROAD-01
## LOCAL OPENTELEMETRY COLLECTOR, OTLP PIPELINE, OBSERVATION DATASETS, ANALYTICAL SNAPSHOTS AND FUTURE OPENSHIFT MIGRATION FOUNDATION

Continue from the CURRENT REAL Architecture AI implementation.

DO NOT restart the project.
DO NOT redesign observability, event, saga, Gradle, MCP or repository foundations already being implemented unless a verified integration defect requires it.

Architecture AI is CURRENTLY LOCAL-FIRST. OpenShift deployment is NOT yet the active runtime baseline.

Establish a COMPLETE LOCAL TELEMETRY DATA ROAD that works today on the architect workstation while preserving a clean migration path toward OpenShift later.

Target:
Architecture AI runtime -> OpenTelemetry/Micrometer -> OTLP -> LOCAL OpenTelemetry Collector -> standard telemetry processing -> local telemetry outputs -> Architecture AI observation preparation -> ObservationSnapshot/analytical dataset -> LAB/simulations/replay/evaluation.

======================================================================
0. PRINCIPLE / LOCAL TOPOLOGY
======================================================================

Solve observability and telemetry processing LOCALLY first. Do not wait for OpenShift and do not hard-code local implementation so migration is difficult.

The application-to-telemetry boundary remains OTLP. Future OpenShift should primarily change where the Collector runs and where telemetry is stored/exported, not how Architecture AI instruments itself or how simulation inputs are modeled.

Collector is a separate runtime component, not part of the Architecture AI JAR.

======================================================================
1. COLLECTOR DISTRIBUTION / GOVERNANCE
======================================================================

Do not require architect to install Go, build Collector from source, install globally or manually discover versions.

Use a governed prebuilt OpenTelemetry Collector distribution. Pin version; never use latest at runtime.

Prepare Collector runtime manifest with schemaVersion, distribution, version, OS, architecture, artifact coordinates/source, SHA-256, local installation directory and config version.

Evaluate official core vs contrib distribution and select the smallest distribution supporting required receivers/processors/exporters. Document decision; do not choose contrib merely because it has more components.

======================================================================
2. LOCAL RUNTIME / NEXUS / GIT
======================================================================

Use managed local runtime location such as ~/.architecture-ai/runtime/otel-collector/<version>/{bin,config}. Active binaries/config must not run from Git, OneDrive or Nexus directly.

Future normal distribution: approved Collector archive -> Nexus generic/raw -> Architecture AI bootstrap/launcher -> verify SHA-256 -> install local runtime. Do not assume public Internet. Public download during development must remain replaceable by Nexus mirror.

Git contains Collector manifest, config templates, transform/filter policies, telemetry schemas, aai.* semantic convention catalog, observation schemas, simulation telemetry requirements and tests. Git does not contain unpacked Collector binaries, telemetry databases, active Collector state or large observation datasets.

======================================================================
3. LOCAL BOOTSTRAP / LIFECYCLE
======================================================================

Extend bootstrap/launcher boundary so it can inspect required Collector version, check/install approved artifact, verify checksum, render/validate config, start Collector, validate health, start Architecture AI and verify OTLP connectivity.

Provide deterministic operations equivalent to collector.install/verify/start/stop/status through repo-owned commands/tasks/scripts. They do not need to be MCP tools yet.

Do not require machine-global environment changes.

======================================================================
4. OTLP / LOCAL NETWORK SAFETY
======================================================================

Use standard OTLP/gRPC and/or OTLP/HTTP as appropriate. Do not create custom telemetry wire protocol.

By default local Collector should bind to loopback where practical. Do not unintentionally expose receiver ports to corporate LAN. Document ports.

Local loopback may initially use local unsecured OTLP when appropriate, but configuration must support future SERVICE TLS/auth/cert/network policy without code changes.

======================================================================
5. COLLECTOR CONFIGURATION / PIPELINE
======================================================================

Create governed Collector config with OTLP receiver; processors such as memory_limiter, batch and filtering/redaction/transformation where required; safe local exporters; and traces/metrics/logs pipelines where used.

Use only components available in selected distribution. Do not configure nonexistent processors/exporters.

Collector performs GENERIC telemetry processing: batching, memory protection, filtering, redaction, transformation, routing, sampling where appropriate. Do NOT implement a parallel Java telemetry ETL for these generic duties.

Architecture AI owns only DOMAIN-SPECIFIC analytical preparation.

======================================================================
6. COLLECTOR HEALTH / SELF-OBSERVABILITY
======================================================================

Expose Collector status to Architecture AI as UP/DEGRADED/DOWN/DISABLED/UNKNOWN or compatible shared health model.

Collector failure must not crash Architecture AI business processing.

Track bounded Collector telemetry where supported: received/dropped telemetry, export failures, queue/backpressure and Collector resource health. Avoid recursive/unsafe telemetry loops.

======================================================================
7. LOCAL EXPORT STRATEGY
======================================================================

Do not require Grafana, Tempo, Jaeger, Prometheus or another backend yet.

Implement minimal local output strategy suitable for validation/data preparation, e.g. safe development debug and/or suitable local file/analytical output where supported.

Prove metrics/traces/logs arrive. Verbose debug exporter must not be default in SOLUTION mode and must not dump sensitive metadata.

======================================================================
8. SEMANTIC CONVENTIONS / SANITIZATION
======================================================================

Use OpenTelemetry Semantic Conventions first. If standard attribute exists, use it; otherwise use governed aai.*. Create OTEL_AAI_SEMANTIC_CONVENTIONS.md documenting custom name/meaning/type/allowed values/cardinality/signals/owner.

Never export by default document body, paragraph content, Excel rows, transcripts, raw prompts, auth headers, passwords, tokens, PAN, private keys or secrets. Prefer IDs, safe types, counts, durations, status, error codes and safe hashes. Add automated leakage tests.

======================================================================
9. TELEMETRY PIPELINE VERSION / STAGES
======================================================================

Introduce TELEMETRY_PIPELINE_VERSION independent of APPLICATION_VERSION.

Maintain logical stages:
RAW TELEMETRY = OTel/OTLP observations.
NORMALIZED TELEMETRY = after Collector policies.
ANALYTICAL OBSERVATIONS = Architecture AI domain-specific distributions/features.

Do not blur stages.

======================================================================
10. OBSERVATION PROCESSOR / WINDOWS / SNAPSHOTS
======================================================================

Implement/prepare domain-specific Observation Processor: normalized observations -> windowing -> aggregation -> distribution construction -> quality validation -> ObservationSnapshot. Do not depend throughout domain code on Collector internals.

Create versioned ObservationWindow with windowId, start/end, sourceMode, applicationVersion, telemetryPipelineVersion, source, qualityStatus. Support LAST_RUN, TIME_RANGE, INGESTION_RUN, SAGA_RUN, BUILD_RUN and LAB_DEFINED_WINDOW.

Create immutable completed ObservationSnapshot containing snapshot ID/version, window reference, application/runtime/telemetry pipeline versions, features/distributions, sample counts, quality, createdAt and checksum.

======================================================================
11. SIMULATION FEATURE REGISTRY
======================================================================

Create governed registry with at least:

INGESTION: ARTIFACT_ARRIVAL_RATE, ARTIFACT_SIZE_DISTRIBUTION, ARTIFACT_TYPE_DISTRIBUTION, DISCOVERY_DURATION, PROFILE_DURATION, RELEVANCE_DURATION, EXTRACTION_DURATION, INDEX_DURATION, INGESTION_FAILURE_RATE, INGESTION_RETRY_RATE, INGESTION_BACKLOG.

EVENT: EVENT_ARRIVAL_RATE, EVENT_PROCESSING_DURATION, EVENT_FAILURE_RATE, EVENT_RETRY_RATE, EVENT_DEADLETTER_RATE, EVENT_BACKLOG.

SAGAS: SAGA_ARRIVAL_RATE, SAGA_DURATION, SAGA_STEP_DURATION, SAGA_FAILURE_RATE, SAGA_COMPENSATION_RATE, SAGA_MANUAL_INTERVENTION_RATE.

WORK: WORK_ITEM_ARRIVAL_RATE, WORK_PACKAGE_ARRIVAL_RATE, WORK_PACKAGE_SIZE_DISTRIBUTION, WORK_COMPLETION_RATE, WORK_BACKLOG, WORK_AGE_DISTRIBUTION.

MCP: MCP_TOOL_CALL_RATE, MCP_TOOL_DURATION, MCP_TOOL_FAILURE_RATE, MCP_CALLS_PER_WORK_PACKAGE.

ML: RELEVANCE_SCORE_DISTRIBUTION, SIMILARITY_SCORE_DISTRIBUTION, UNKNOWN_RATE, RERANK_INPUT_SIZE, RERANK_OUTPUT_SIZE.

SYSTEM: CPU_UTILIZATION, MEMORY_UTILIZATION, DISK_UTILIZATION, SQLITE_SIZE, LUCENE_SIZE.

Each feature defines ID, meaning, unit, source telemetry, aggregation, window, quality requirement and simulation consumers.

Create TELEMETRY_REQUIREMENTS_FOR_SIMULATION.md and reconcile each feature as AVAILABLE, PARTIAL, MISSING or NOT_APPLICABLE. Do not duplicate metrics already provided by observability work.

======================================================================
12. OBSERVATION QUALITY
======================================================================

Every simulation observation carries sampleCount, coverage, missingRate where applicable, observation window, aggregation method, source and qualityStatus. Use VALID, PARTIAL, INSUFFICIENT, INVALID, UNKNOWN. Simulation engines should refuse or warn when required observations are insufficient.

======================================================================
13. ANALYTICAL STORAGE / PARQUET
======================================================================

Do not treat SQLite as primary large analytical telemetry store. SQLite remains local operational state.

For immutable analytical observation datasets, evaluate/implement Apache Parquet using Java-compatible implementation where validated. Preferred split: SQLite = operational ledgers/state; Parquet = analytical snapshots/replay datasets. Do not add analytical database without evidence.

Prepare local layout such as ~/.architecture-ai/lab/observations/<snapshot-id>/manifest.json + category parquet files where sensible. Manifest is authoritative; exact partition/file layout may vary if validated better.

Create ObservationDataset manifest with datasetId/version, snapshotId, schemaVersion, telemetryPipelineVersion, applicationVersion, sourceMode, timeWindow, artifact files, row counts, checksums, qualityStatus, lineageReference and createdAt.

Apache Arrow may be evaluated later as in-memory/interchange layer; do not make it mandatory without measurable benefit.

======================================================================
14. LINEAGE / SIMULATION INPUT PACKAGE / REPLAY
======================================================================

Prepare lineage aligned with OpenLineage concepts Dataset, Job, Run where practical, without requiring full external OpenLineage platform. Express runtime telemetry -> ObservationSnapshotBuilder job -> ObservationDataset -> SimulationRun.

Simulation engines must consume explicit immutable SimulationInputPackage, not query live telemetry arbitrarily. Conceptually include inputPackageId/version, scenario reference, observation snapshot, dataset refs, assumption set, parameters, model refs, createdAt, checksum.

Prepare immutable replay datasets with minimum safe derived information needed for historical algorithm/policy replay. Do not require original corporate files when derived observations suffice.

Keep hot operational telemetry retention separate from promoted observation dataset retention; do not invent institutional retention periods.

======================================================================
15. LOCAL STORAGE SAFETY / VALIDATION / GRADLE
======================================================================

Implement configurable file rotation, snapshot limits, dataset retention, disk thresholds and cleanup eligibility so telemetry/LAB data cannot consume workstation disk unboundedly.

Provide deterministic validateOtelCollectorConfig against exact Collector version, not YAML syntax only.

Integrate with Gradle where appropriate using tasks equivalent to otelInstall, otelVerify, otelConfigCheck, otelStart, otelStop, otelStatus, telemetryIntegrationTest and observationSnapshotTest. Normal gradlew build must not automatically start long-running Collector.

Prepare localRun flow: verify runtime -> verify/start local Collector -> start Spring Boot -> UI where relevant -> verify OTLP -> show health. SOLUTION release uses packaged Angular and no Node runtime.

======================================================================
16. DASHBOARD / FAILURE TESTS
======================================================================

Extend existing dashboard APIs carefully for Collector status, OTLP export state, last successful export, telemetry pipeline version, received/exported/dropped aggregate counts, ObservationSnapshot count/latest window/latest dataset quality. Do not create another dashboard.

Test Collector running, stopped, restarted, invalid config, OTLP unavailable, disk threshold and sensitive attribute leakage. Architecture AI must continue when Collector/OTLP unavailable and clearly report degradation.

======================================================================
17. FUTURE OPENSHIFT MIGRATION
======================================================================

Document exact boundary:
LOCAL: Architecture AI -> OTLP -> localhost Collector.
SERVICE: Architecture AI -> OTLP -> OpenShift Collector/Gateway.

Instrumentation and semantic contracts remain substantially unchanged. Migration changes Collector deployment/endpoint/config overlays/export destinations/security/TLS/scaling/storage/backend.

Prepare future evaluation of Agent Collector vs Gateway Collector vs hybrid. Do not choose final OpenShift pattern yet.

======================================================================
18. DOCUMENTATION / DEFINITION OF DONE
======================================================================

Create LOCAL_TELEMETRY_DATA_ROAD_BASELINE.md plus OTEL_AAI_SEMANTIC_CONVENTIONS.md, TELEMETRY_REQUIREMENTS_FOR_SIMULATION.md, SIMULATION_FEATURE_REGISTRY.md, OBSERVATION_DATASET_SCHEMA.md and OPENTELEMETRY_COLLECTOR_BASELINE.md.

Completion requires real local path: Architecture AI -> real OTel/Micrometer -> OTLP -> real local Collector -> validated pipeline -> local output -> ObservationSnapshot -> simulation-ready dataset/manifest; Collector unavailable -> Architecture AI remains operational; same config model clearly supports future OpenShift Collector endpoint.

FINAL PRINCIPLES:
1. LOCAL FIRST, OPENSHIFT READY.
2. OTLP IS THE TELEMETRY TRANSPORT CONTRACT.
3. OPENTELEMETRY COLLECTOR IS A SEPARATE RUNTIME COMPONENT.
4. DO NOT REIMPLEMENT COLLECTOR PIPELINE CAPABILITIES IN JAVA.
5. USE SEMANTIC CONVENTIONS BEFORE aai.*.
6. ARCHITECTURE AI OWNS DOMAIN-SPECIFIC OBSERVATION PREPARATION.
7. SQLITE IS OPERATIONAL STATE, NOT DEFAULT ANALYTICAL STORE.
8. PARQUET IS PREFERRED FOR IMMUTABLE ANALYTICAL SNAPSHOTS WHEN VALIDATED.
9. SIMULATION ENGINES DO NOT QUERY LIVE TELEMETRY DIRECTLY.
10. OBSERVATION SNAPSHOTS ARE REPRODUCIBLE INPUTS.
11. COLLECTOR FAILURE MUST NOT BREAK ARCHITECTURE AI.
12. LOCAL TELEMETRY MUST BE BOUNDED AND SAFE.
13. DO NOT LEAK CORPORATE CONTENT THROUGH TELEMETRY.
14. GIT HOLDS CONFIG/MANIFESTS; NEXUS HOLDS DISTRIBUTABLE BINARIES.
15. COLLECTOR VERSION MUST BE GOVERNED.
16. MIGRATION TO OPENSHIFT SHOULD CHANGE INFRASTRUCTURE, NOT DOMAIN CODE.
17. DO NOT REINVENT THE WHEEL.

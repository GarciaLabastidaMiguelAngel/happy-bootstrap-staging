---
prompt_id: P-OBSERVABILITY-AUDIT-01
title: Architecture AI Observability, Audit, OpenTelemetry, Operational Telemetry and Real Dashboard Foundation
domain: observability / audit / OpenTelemetry / Micrometer / dashboard
status: READY
parallelism_decision: PARALLEL_SAFE_WITH_BOUNDARIES
direction_revision: DIRECTION-0001
repository_baseline: 171abc3fab22492a62cb4b6c7068e2357af8001e
depends_on: [current Spring Boot runtime, existing dashboard API]
conflicts_with: []
shared_surfaces: [Spring Boot global config, Actuator, dashboard DTOs/APIs, event/saga telemetry, SQLite migrations]
allowed_change_scope: [OpenTelemetry instrumentation, Micrometer metrics, health, structured logging, audit, real dashboard data]
forbidden_change_scope: [creating second observability stack, making remote Collector mandatory, logging sensitive content]
created_at: null
sent_at: null
executed_at: null
devin_session_reference: null
result_reference: null
---

# P-OBSERVABILITY-AUDIT-01
## ARCHITECTURE AI OBSERVABILITY, AUDIT, OPEN TELEMETRY, OPERATIONAL TELEMETRY AND REAL DASHBOARD FOUNDATION

Continue from the CURRENT REAL Architecture AI implementation.

DO NOT restart the project.
DO NOT redesign working foundations without a verified defect.
DO NOT create a second observability framework.
DO NOT create a parallel audit system if equivalent foundations already exist.

Architecture AI evolves as one Spring Boot modular application with Angular frontend, MCP Server, local knowledge processing, Spring Batch, Spring Integration/event platform, saga/work orchestration direction, SQLite, Lucene, Gradle and the modes PLATFORM_DEV, SOLUTION, LAB and SERVICE.

The objective is to establish the CROSS-CUTTING OBSERVABILITY AND AUDIT FOUNDATION and surface REAL operational visibility through the existing dashboard.

======================================================================
0. FUNDAMENTAL DISTINCTION
======================================================================

Keep separate:
METRICS = quantitative aggregate behavior.
TRACES = causal execution paths.
LOGS = significant lifecycle/diagnostics/failures.
HEALTH = current component/runtime condition.
AUDIT = attributable governed actions.
EVENT LEDGER = event delivery/processing state.
SAGA STATE = durable long-running workflow state.

Do NOT implement everything as logs.

======================================================================
1. OPEN TELEMETRY / LOCAL-FIRST
======================================================================

OpenTelemetry is the standard telemetry/instrumentation boundary. Use current compatible Spring Boot/Micrometer/OpenTelemetry ecosystem, supported auto-configuration and framework-native instrumentation before custom tracing.

Architecture AI must run locally without requiring an OpenTelemetry Collector or external backend. OTLP export is configurable. Telemetry generation/export must not block business processing. Local dashboard continues functioning when disconnected.

Future: Architecture AI -> OTLP -> OpenTelemetry Collector -> approved corporate backend / Prometheus / Grafana / Tempo / Jaeger / equivalent. Do not make Collector mandatory for SOLUTION mode.

======================================================================
2. MICROMETER / TRACING
======================================================================

Use Micrometer as main Spring-native metrics/observation layer. Reuse standard Spring Boot metrics for HTTP, JVM, memory, GC, threads, CPU, process uptime, Spring Batch and runtime health before custom alternatives.

Instrument meaningful Architecture AI end-to-end flows, e.g. OneDrive Discovery -> Inventory -> Identification -> Profile -> Relevance -> Extraction Plan -> Extraction -> Normalize -> Index -> Knowledge Signal -> Work Item/Package.

Tracing should answer where time was spent, where failure occurred, what caused the operation and which event/saga/work flow it belongs to.

======================================================================
3. TRACE CONTEXT / ASYNC PROPAGATION
======================================================================

Keep traceId/spanId separate from correlationId/causationId/eventId/sagaId/workItemId/workPackageId/artifactId. Trace IDs are telemetry identity; domain IDs are operational/domain identity.

Propagate tracing/correlation through Spring Integration channels, Spring Modulith/application events, Spring Batch, durable event processing, saga transitions, Work processing and MCP tool execution. Avoid disconnected traces at async hops.

======================================================================
4. SEMANTIC CONVENTIONS / AAI NAMESPACE
======================================================================

Use OpenTelemetry Semantic Conventions whenever standard attributes exist. Use governed aai.* only for Architecture AI-specific meaning such as aai.mode, aai.module, aai.operation.type, aai.artifact.type, aai.processing.stage, aai.event.type/version/durability, aai.saga.type/step, aai.work.type/routing, aai.mcp.tool/capability, aai.model.id/version, aai.simulation.type/provenance.

Do not duplicate standard HTTP/JDBC/process/runtime attributes with custom aliases.

======================================================================
5. CARDINALITY / SENSITIVE DATA GOVERNANCE
======================================================================

High-cardinality IDs must not normally be metric tags: artifactId, eventId, sagaId, workItemId, workPackageId, traceId, file path, filename, document title, user text/raw entity IDs. They may appear in traces/logs/audit where safe.

Metrics use bounded dimensions such as mode/module/status/type/stage/result/failure category.

Never log/export by default document bodies, paragraph content, Excel rows, transcripts, raw evidence text, prompts with corporate data, credentials, tokens, API keys, auth headers, PAN, secrets, private keys or unnecessary full filesystem paths.

======================================================================
6. OPERATING MODE TELEMETRY
======================================================================

Every relevant telemetry signal must make mode clear: PLATFORM_DEV, SOLUTION, LAB, SERVICE. LAB simulation signals must distinguish OBSERVED, SIMULATED, ASSUMED, EXPERIMENTAL and must not look like real SOLUTION/SERVICE telemetry.

======================================================================
7. STRUCTURED LOGGING / ERROR CODES
======================================================================

Implement structured logging for startup/shutdown, configuration validation, major lifecycle transitions, warnings, failures, recovery and governed interventions. Do not write INFO per successfully processed file/event/row. DEBUG/TRACE disabled by default.

Prepare stable error families such as AAI-RUN, AAI-ING, AAI-EXT, AAI-IDX, AAI-EVT, AAI-SAGA, AAI-WORK, AAI-MCP, AAI-ML, AAI-SIM, AAI-AUD and document catalog.

======================================================================
8. INGESTION / BATCH / EVENT / SAGA / WORK METRICS
======================================================================

Expose ingestion discovered/inventoried/profiled/relevant/irrelevant/unknown/deferred/failed/backlog/processing duration/stage duration/declared bytes with bounded dimensions.

Integrate Spring Batch aggregate state: current job/status, step status/duration, processed/skip/retry/failure/restart counts, without exposing raw Batch persistence objects.

Event metrics: created/ready/processing/completed/failed/retry/deadletter/backlog by bounded event type/source/status/durability.

Saga metrics: started/running/waiting/completed/failed/compensating/compensated/manual-intervention/duration; trace saga type/step/transition/action/compensation/result, never sagaId metric label.

Work metrics: KnowledgeSignals, WorkItems, WorkPackages created/ready/claimed/processing/completed/blocked/failed/human-required/AI-required/oldest-ready age.

======================================================================
9. MCP / BUILD / SQLITE / LUCENE / ML / SIMULATION
======================================================================

Instrument MCP requests/tool calls/success/failure/duration/capability category without logging sensitive arguments/results. Trace MCP request -> tool resolution -> deterministic operation -> result.

Reuse Gradle structured build intelligence to expose safe runtime build/release identity such as applicationVersion, git commit, build timestamp, Java baseline, Gradle build version and frontend build identity.

SQLite: database availability, schema/migration version, size and safe operation/transaction failure counts. Do not expose SQL parameters/content.

Lucene: index health/size/counts when inexpensive, indexing failures, index/search/vector-search duration. Avoid expensive scans solely for dashboard telemetry.

ML: model load/status/version, embedding/rerank/classification durations/outcome distribution/unknown fallback; never emit vectors/raw model input.

Simulation: scenario/type/version/run status/duration/iterations/seed reference/provenance; do not emit individual Monte Carlo iterations as normal app metrics.

======================================================================
10. HEALTH MODEL / ACTUATOR
======================================================================

Create composite Architecture AI health model evaluating application, runtime, configuration, database, Spring Batch, Lucene, OneDrive source, managed workspace, event platform, saga engine, work orchestration, MCP, ML runtime, simulation engine and disk using UP, DEGRADED, DOWN, UNKNOWN, DISABLED. UNKNOWN != UP; DISABLED != DOWN.

Use Spring Boot Actuator safely. Review endpoint exposure; do not expose unrestricted environment/config/secrets. SOLUTION defaults safe; SERVICE may later use secured exposure policy.

======================================================================
11. AUDIT IS A SEPARATE PLANE
======================================================================

Create first-class Architecture AI audit answering WHO did WHAT to WHICH RESOURCE WHEN from WHICH CONTEXT with WHAT RESULT under WHICH POLICY/APPROVAL.

Create versioned AuditEvent contract conceptually including auditEventId/version, occurredAt, actor type/reference, initiating/executing actor references, action, resource type/reference, architectureMode, result SUCCESS/FAILURE/DENIED/PARTIAL, reasonCode, correlationId, traceId, policyReference, approvalReference, bounded metadata and sensitivity.

Support actors HUMAN, DEVIN, SYSTEM, SCHEDULED_PROCESS, MCP_CLIENT, SERVICE and preserve initiating vs executing actor where meaningful.

======================================================================
12. AUDIT ACTION CATALOG / STORAGE
======================================================================

Initial governed actions may include APPLICATION_START/STOP, CONFIGURATION_CHANGE, ARTIFACT_MANUAL_PROMOTION, KNOWLEDGE_APPROVAL/REJECTION, WORK_CLAIM/RESULT_ACCEPT/RESULT_REJECT, EVENT_REPLAY, DEADLETTER_REPAIR, SAGA_MANUAL_INTERVENTION, MODEL_ACTIVATE/DEACTIVATE/PROMOTE, DATASET_PROMOTE, POLICY_CHANGE, SIMULATION_EXECUTE/RESULT_PROMOTE, MCP_MUTATION_TOOL_EXECUTION.

Do not audit every normal read automatically; prepare policy boundary for future sensitive-read audit.

Use current local DB for durable audit with append-oriented AAI_AUDIT_EVENT or equivalent. Normal application flows must not casually mutate/delete history.

Inspect Spring Boot Actuator/Spring Security audit support for auth success/failure/access denied, but do not rely on in-memory repository for durable business audit.

Keep Audit separate from Event Ledger, Saga Store and Trace. Do not persist every ordinary event as audit.

Prepare retention configuration/contracts without inventing institutional/legal periods.

======================================================================
13. DASHBOARD PRINCIPLE / REAL DATA
======================================================================

Extend existing Angular/backend dashboard; do not create a parallel dashboard. Use versioned APIs and real backend state.

Platform overview: version, mode, uptime, health, Java/runtime identity, build/release identity, DB/Lucene/MCP health.

Ingestion: discovered/inventoried/profiled/relevant/irrelevant/unknown/deferred, rate, backlog, failures, size/availability distributions, stage durations with contextualized percentiles where useful.

Events: throughput, durable backlog, processing/retry/fail/deadletter, oldest pending event.

Sagas: running/waiting/failed/compensating/compensated/manual intervention/recent durations.

Work: ready items/packages, claimed/processing/blocked/AI/human/completed/failed and age/backlog distributions.

MCP: server status, requests/tool calls/success/failure/duration/top capability categories without sensitive data.

Audit: recent governed actions, failed/denied actions, actor/action/resource/result/time with bounded metadata.

LAB: active/recent simulations, scenario/status/duration/provenance clearly distinct from real runtime state.

Dashboard queries must be bounded/indexed/pre-aggregated or use safe summaries; do not full-scan tables/indexes per poll.

======================================================================
14. HISTOGRAM / PERCENTILE POLICY
======================================================================

Use timers/histograms where distributions matter such as artifact/event/saga/MCP/search durations. Expose P50/P90/P95/P99 only where meaningful and document population/window/unit/meaning. Do not generate percentiles for every metric.

======================================================================
15. SERVICE / OPENSHIFT READINESS
======================================================================

Prepare SERVICE export config for OTLP endpoint, telemetry enabled, resource attributes, sampling and export timeout. Do not hardcode Collector URL or deploy Collector here unless existing safe environment provides it.

Create configurable trace sampling. Telemetry failure must never become critical synchronous dependency. If exporter fails, business processing continues and degradation is reported without log flooding.

======================================================================
16. TESTS
======================================================================

Create executable integration scenario proving trace establishment -> event -> consumer -> saga step -> work creation with inspectable correlation.

Audit tests: governed success, governed failure, denied operation, human -> Devin -> MCP attribution where supported, sensitive input not leaked.

Observability tests: Micrometer metrics exist, health works, custom metrics bounded, OTel spans produced, async context propagated, no Collector still healthy, invalid OTLP endpoint degrades gracefully, LAB distinguishable.

Logging tests: no INFO per bulk item, secrets sanitized, stable error code on controlled failure, correlation fields present.

Run backend + Angular in REAL API mode and prove real dashboard values for health/version/mode/DB/ingestion/event/saga/MCP/recent audit where implemented.

======================================================================
17. CATALOGS / DOCUMENTATION
======================================================================

Create/update governed catalogs for metrics, error codes, audit actions and health components, machine-readable where useful without documentation duplication.

Create ARCHITECTURE_AI_OBSERVABILITY_AUDIT_BASELINE.md covering architecture, OTel, Micrometer, logs, health, audit, event-ledger distinction, trace/correlation, cardinality, sensitive data, operating-mode telemetry, ingestion/batch/event/saga/work/MCP/ML/simulation/storage telemetry, audit schema/actors/actions, dashboard, OTLP/OpenShift readiness, tests/files/gaps/next increment.

Also create/update OBSERVABILITY_CONVENTIONS.md, AUDIT_EVENT_CATALOG.md, ERROR_CODE_CATALOG.md and HEALTH_COMPONENT_CATALOG.md.

======================================================================
18. DEFINITION OF DONE
======================================================================

Completion requires real code demonstrating Spring Boot operation -> Micrometer metrics -> OpenTelemetry trace -> structured correlated log -> backend operational API -> Angular dashboard; and governed action -> AuditEvent -> durable SQLite audit -> read-only API/dashboard; and no Collector -> Architecture AI remains operational; and controlled async flow remains understandable.

Do NOT declare completion from documentation alone.

FINAL PRINCIPLES:
1. OBSERVABILITY IS NOT AUDIT.
2. AUDIT IS NOT LOGGING.
3. EVENT LEDGER IS NOT AUDIT.
4. TRACES DESCRIBE CAUSAL TECHNICAL EXECUTION.
5. METRICS DESCRIBE AGGREGATE BEHAVIOR.
6. HEALTH DESCRIBES CURRENT OPERABILITY.
7. AUDIT DESCRIBES ATTRIBUTABLE GOVERNED ACTIONS.
8. USE OPEN TELEMETRY STANDARDS BEFORE CUSTOM TELEMETRY.
9. USE MICROMETER / SPRING BOOT BEFORE CUSTOM FRAMEWORKS.
10. TELEMETRY MUST NOT BECOME BUSINESS-CRITICAL.
11. LOCAL SOLUTION MODE MUST WORK OFFLINE.
12. SERVICE MODE MUST BE OTLP/OPENSHIFT-READY.
13. HIGH-CARDINALITY IDENTITIES DO NOT BELONG IN METRIC LABELS.
14. NEVER LEAK DOCUMENT CONTENT OR SECRETS THROUGH TELEMETRY.
15. DASHBOARD MUST SHOW REAL OPERATIONAL INFORMATION.
16. SIMULATED LAB DATA MUST NEVER LOOK LIKE REAL OBSERVED DATA.
17. TELEMETRY CORRELATES EVENTS, SAGAS, WORK AND MCP WITHOUT CONFLATING IDENTITIES.
18. AUDIT MUST BE DURABLE AND APPEND-ORIENTED.
19. FRAMEWORK-NATIVE INSTRUMENTATION IS PREFERRED.
20. DO NOT REINVENT THE WHEEL.

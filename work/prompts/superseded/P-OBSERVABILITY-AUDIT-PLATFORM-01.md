---
prompt_id: P-OBSERVABILITY-AUDIT-PLATFORM-01
title: Architecture AI Observability, Audit, OpenTelemetry, Operational Metrics and Real Dashboard Foundation
domain: observability / audit / dashboard
status: SUPERSEDED
parallelism_decision: PARALLEL_SAFE_WITH_BOUNDARIES
direction_revision: DIRECTION-0001
repository_baseline: 171abc3fab22492a62cb4b6c7068e2357af8001e
superseded_by: P-OBSERVABILITY-AUDIT-01
notes: Earlier chat draft. It was interrupted before completion and then replaced by the more complete P-OBSERVABILITY-AUDIT-01. Preserved for prompt-history fidelity; do not hand off.
sent_at: null
executed_at: null
---

# P-OBSERVABILITY-AUDIT-PLATFORM-01
## ARCHITECTURE AI OBSERVABILITY, AUDIT, OPEN TELEMETRY, OPERATIONAL METRICS AND REAL DASHBOARD FOUNDATION

Continue from the CURRENT REAL Architecture AI implementation.

DO NOT restart the project.
DO NOT replace working observability/dashboard/event foundations without a verified defect.

The objective of this earlier draft was to establish the governed OBSERVABILITY AND AUDIT foundation and begin surfacing real operational information through the existing dashboard.

It established these principles later retained and expanded in P-OBSERVABILITY-AUDIT-01:

- OBSERVABILITY != AUDIT.
- METRICS, TRACES, LOGS, HEALTH, AUDIT and EVENT/SAGA durable state are separate concerns.
- use current compatible Spring Boot/Micrometer/OpenTelemetry stack.
- local SOLUTION mode works without external OTLP Collector/backend.
- use OpenTelemetry Semantic Conventions before custom aai.* attributes.
- govern metric cardinality; high-cardinality IDs do not become metric labels.
- correlate event/saga/work/MCP flows without conflating traceId/correlationId/eventId/sagaId.
- instrument ingestion, Spring Batch, event platform, sagas, Work, MCP, build/release identity, ML, LAB/simulation, JVM/system, SQLite and Lucene.
- structured logging must avoid INFO-per-item narration and sensitive corporate content.
- AuditEvent is a durable first-class governed contract, not application logging.
- distinguish initiating/executing actors including HUMAN, DEVIN, SYSTEM, SCHEDULED_PROCESS, MCP_CLIENT and SERVICE.
- durable append-oriented audit persistence belongs in the current local database while institutional retention remains unresolved.
- dashboard progressively exposes real Platform/Ingress/Events/Sagas/Work/MCP/Storage/Audit/LAB state through bounded read APIs.
- simulated LAB telemetry must never appear indistinguishable from observed SOLUTION/SERVICE data.
- OTLP/Collector/OpenShift topology remains configurable and telemetry failure must not break business processing.

The original draft contained detailed sections for OpenTelemetry baseline, Micrometer Observation, resource identity, aai.* namespace, cardinality policy, trace correlation, async event propagation, saga/event/ingestion/work/MCP/build/ML/LAB/JVM/SQLite/Lucene telemetry, structured logging, sensitive-data policy, AuditEvent/actor/action/storage/retention, composite health, Actuator and dashboard views.

This history file is intentionally NOT the handoff prompt. Use P-OBSERVABILITY-AUDIT-01 instead.

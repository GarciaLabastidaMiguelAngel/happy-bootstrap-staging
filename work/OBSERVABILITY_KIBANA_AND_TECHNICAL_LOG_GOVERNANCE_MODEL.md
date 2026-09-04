# Observability, Kibana and Technical Log Governance Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0007

## Purpose

Define how Architecture AI should integrate with the bank's existing OpenShift technical-log path and Kibana rather than creating an isolated observability universe.

## Core principle

USE EXISTING TELEMETRY SOURCES AS EVIDENCE, THEN IMPROVE THEIR STRUCTURE.

OpenShift/Kibana technical logs are valuable platform evidence, but logs are only one signal. Preserve the distinction among logs, traces, metrics, audit, event ledger, saga/work state and deployment evidence.

## Existing-bank integration stance

If OpenShift application/platform logs already flow to Kibana, Architecture AI should first:
- discover the actual log pipeline and retention/query constraints;
- identify available indexes/data streams/fields;
- determine application log-format conventions;
- assess correlation IDs, trace IDs, service/version/environment fields;
- identify sensitive-data leakage risks;
- measure queryability and recurring operational questions;
- reuse supported query/export/API capabilities when available.

Do not replace Kibana merely because Architecture AI has its own dashboard.

## Log contract direction

Prefer structured logs with stable bounded fields such as:
- timestamp;
- severity;
- service/application;
- module/capability;
- environment;
- application version/build;
- correlationId;
- traceId/spanId where available;
- operation/event type;
- errorCode;
- outcome;
- duration where appropriate;
- safe entity/reference IDs;
- deployment/release reference.

Do not place secrets, credentials, PAN/SAD or raw sensitive payloads into logs.

## Analysis flow

OpenShift / application logs
-> existing collection pipeline
-> Kibana/indexed technical evidence
-> bounded query/aggregation/export
-> Architecture AI Observation/Evidence model
-> deterministic analysis/read model
-> Director/QA/DevOps/Engineering insight
-> Issue/ResearchRequest/ImprovementCandidate.

Architecture AI should not repeatedly push entire raw log histories to Devin. Prefer deterministic queries, aggregation, anomaly thresholds and evidence packs first.

## Kibana capability model

Research and record actual available capabilities before implementation, including:
- query language/API access;
- dashboards/saved searches;
- alerting if institutionally available;
- retention and index lifecycle;
- field mappings;
- export limits;
- role/access restrictions;
- integration with trace/correlation identifiers;
- environment segregation.

Unavailable capabilities remain UNKNOWN; do not infer commercial/licensed features.

## Technical-log quality gates

For services progressively require:
- structured parseable format;
- environment/service/version identification;
- correlation/trace propagation where applicable;
- bounded error taxonomy;
- no forbidden sensitive fields;
- useful operational lifecycle events;
- rate/noise controls;
- evidence that important failures can be queried deterministically.

## Event-platform relationship

Do not confuse logs with business/domain/integration events.

Logs may describe event-processing behavior, but governed Kafka/Event Platform messages require their own schemas, contracts, retention, delivery semantics and lineage.

If Kafka is used as an observability/analytics transport in the future, that decision must be explicit; do not publish every technical log to Kafka by default.

## Improvement analytics

Use logs together with metrics/traces/deployment state to identify:
- recurring exceptions;
- error hotspots by service/version;
- latency contributors;
- retry storms;
- integration failures;
- resource-related failures;
- deployment regressions;
- noisy/low-value logging;
- missing telemetry or correlation;
- candidate refactors/quality work.

Results feed backlog and Continuous Quality/Refactor, not direct uncontrolled code modification.

## Director questions

The Director should progressively answer:
- what errors increased after release X?;
- which services fail most often?;
- can we trace this customer-safe correlation through components?;
- which logs are not structured or violate policy?;
- what evidence supports this incident hypothesis?;
- what should Engineering fix first?;
- what part can be detected deterministically next time?

## Goal

Turn the existing OpenShift/Kibana logging estate into a governed evidence source for continuous platform improvement while preserving security, source boundaries and compatibility with the broader OpenTelemetry/analytics direction.
# Project Direction Baseline

Status: ACTIVE
Direction revision: DIRECTION-0007
Previous direction: DIRECTION-0006
Previous accepted baseline commit: `dfa2a9edb44b74976151cdc668a7aaec9456fd44`
Repository role: Happy Work staging / prompt-governance control plane
Current operating emphasis: LAB / fastest safe construction, governed parallelism, Copilot control evolution, existing-bank integration, DevOps evidence, standards lifecycle and traceable transformation

## Continuity rule

DIRECTION-0007 incorporates DIRECTION-0006 and all earlier accepted direction unless explicitly overridden below.

The exact DIRECTION-0006 baseline remains recoverable from Git history at the previous accepted baseline commit. The immutable rc2 snapshot remains historical and MUST NOT be rewritten in place.

DIRECTION-0007 is therefore an additive governance evolution, not a reset.

## Material DIRECTION-0007 additions

### 1. Copilot as governed control entry point

Architecture AI must evolve from a dashboard/chat that explains state into the governed user entry point for architecture and engineering work.

The maturity horizon is:

EXPLAIN
-> GUIDE
-> PREPARE
-> EXECUTE BOUNDED CHANGES
-> OPERATE GOVERNED CAPABILITIES
-> GOVERNED SELF-EVOLUTION.

The Copilot is never the source of truth. It acts over governed state and must preserve authorization, traceability, evidence, QA, rollback and institutional approvals.

Governed by:

`work/PLATFORM_EVOLUTION_TRACEABILITY_AND_COPILOT_CONTROL_MODEL.md`

For material actions the platform should preserve:

Direction
-> Objective
-> Initiative/Epic/Feature
-> Specification/ADR/Policy/Standard
-> Plan
-> WorkPackage/Issue/ResearchRequest
-> Branch/Commit/PR
-> Build/Test/Gate evidence
-> Release/Deployment
-> Runtime observation
-> Analysis/Improvement
-> accepted direction/backlog change.

The Director must eventually answer not only "what exists?" but "how did we get here, why, what evidence justified it, what changed, and what can safely happen next?"

### 2. Internal transformation audit vs external institutional audit

Keep separate:

- INTERNAL PLATFORM EVOLUTION AUDIT: Git/evidence/research/decisions/specifications/backlog/tests/telemetry/releases and improvement history.
- EXTERNAL / INSTITUTIONAL SOLUTION AUDIT: Arc42 PDF releases and other formal artifacts retained/shared by bank areas.

Arc42 remains a governed auditable projection; it does not become the runtime source of truth or block unrelated LAB evolution unless an institutional gate explicitly requires it.

### 3. No duplicate document or visual truth

Architecture AI should avoid unmanaged duplicate documents, diagrams and images.

Preferred model:
- canonical governed source in Git where appropriate;
- rendered SVG/PNG/PDF with stable IDs/version metadata;
- Confluence, SharePoint, Arc42 and web surfaces reference/publish the same governed render where supported;
- publication copies exist only when the target platform requires them and must preserve provenance to the canonical asset.

This extends the audience-aware diagram policy without changing the technical/conceptual split.

### 4. DevOps / Platform Engineering is first-class

Architecture AI must understand how software actually moves through the bank before attempting to automate or replace that process.

Governed by:

`work/DEVOPS_AND_EXISTING_BANK_PLATFORM_INTEGRATION_MODEL.md`

DevOps/Platform Engineering progressively maps:
- Git/repositories/branching/releases;
- build/artifact promotion;
- OpenShift environments and runtime constraints;
- API Connect/API governance integration;
- Kafka/event-platform capabilities;
- current logging/Kibana path;
- identity/config/secrets;
- infrastructure request/approval processes;
- rollback/recovery;
- environment differences;
- runtime quality/performance evidence.

Core rule:

INTEGRATE WITH WHAT EXISTS
-> OBSERVE
-> GOVERN
-> IMPROVE
-> AUTOMATE.

Do not introduce a replacement platform merely because a pattern exists.

### 5. Environment capability remains explicit

DIRECTION-0006 degraded-mode/storage/identity profiles remain active.

DIRECTION-0007 extends them with a broader Environment Capability Matrix covering:
- persistence;
- Kafka/broker/stream processing;
- API Connect connectivity;
- enterprise identity;
- telemetry/Kibana/OTLP;
- secrets/config;
- network controls;
- allowed security testing;
- infrastructure/human dependencies.

Missing infrastructure should degrade capabilities truthfully rather than produce product forks or hidden bypasses.

### 6. Standards lifecycle and deprecation governance

Standards-first is expanded into a full lifecycle governed by:

`work/STANDARDS_LIFECYCLE_AND_GOVERNANCE_ALIGNMENT_MODEL.md`

Lifecycle:

DISCOVERED
-> SOURCE_VERIFIED
-> MAPPED
-> ADOPTION_DECIDED
-> SPECIFIED
-> IMPLEMENTED
-> VERIFIED
-> OPERATED
-> REVIEW_DUE
-> SUPERSEDED / DEPRECATED / RETIRED.

A standard/policy/framework record should preserve version, source authority, applicable layers/vectors, adoption action, implementation/evidence, review cadence, support/deprecation status and successor/predecessor relationships.

The Director/dashboard must support drill-down by:
- governance domain;
- conformance maturity;
- risk/status;
- evidence gaps;
- deprecated/superseded standards;
- affected specifications/components.

Do not reduce all alignment to one opaque percentage.

### 7. Existing bank governance is integrated, not duplicated

Architecture AI should progressively map existing bank governance domains such as:
- Enterprise/Solution Architecture;
- API Governance;
- Data Governance;
- AI Governance;
- Security/Compliance;
- DevOps/Platform;
- Operations/Observability;
- other institutional governance discovered from evidence.

For each governance domain capture:
- responsibilities;
- decision rights;
- policies/standards;
- required evidence;
- gates/approvals;
- governed assets/processes;
- automation opportunities.

The Copilot becomes a coordinated entry point that routes questions, decisions and work to the correct authority. Architecture AI does not silently replace institutional decision rights.

### 8. Existing OpenShift/Kibana logging becomes evidence input

Governed by:

`work/OBSERVABILITY_KIBANA_AND_TECHNICAL_LOG_GOVERNANCE_MODEL.md`

If OpenShift technical logs already flow to Kibana, Architecture AI first discovers and integrates the actual existing capability:
- log pipeline;
- indexes/data streams;
- field mappings;
- retention;
- query/API access;
- role restrictions;
- correlation/trace IDs;
- environment separation;
- saved searches/dashboards/alerting where actually available.

Do not infer licensed/commercial capabilities.

Structured technical logs should progressively expose stable bounded metadata such as service, module, environment, application version, correlation/trace ID, error code, outcome and safe release references, while excluding secrets, credentials, PAN/SAD and raw sensitive payloads.

Logs remain distinct from:
- audit;
- metrics;
- traces;
- event ledger;
- saga/work state;
- governed Kafka events.

Architecture AI should prefer deterministic queries/aggregations/evidence packs over sending raw log histories to Devin.

### 9. Kafka/event evolution remains evidence-driven

The existing Event/Saga direction remains active.

If an early POC has only a Kafka broker/topic available, use the smallest governed topology needed and perform deterministic filtering/transformation/aggregation in Spring where justified.

Do not assume ksqlDB/KSQL or other stream-processing products are available.

If a managed/platform stream-processing capability appears later, compare it against current Spring-based processing using governance, performance, operational cost, compatibility and migration evidence before changing the architecture.

Kafka/event transport must not be conflated with technical log transport.

### 10. Banking transformation initiatives remain first-class proofs

BI-0001 Customer Position / Gravity Plus read acceleration and BI-0002 digital-channel incremental synchronization remain governed initiatives under this direction.

They are practical evidence that Architecture AI can:
- understand existing code/frameworks/integrations;
- preserve current contracts;
- identify UNKNOWN instead of inventing;
- classify semantic data elements;
- optimize reads/caching/invalidation;
- integrate with DevOps/runtime evidence;
- produce measurable improvements;
- feed architecture, standards, backlog and documentation.

## DIRECTION-0006 principles explicitly retained

The following remain mandatory:
- LAB speed/useful parallelism currently outranks AI-cost minimization, while usage is still measured;
- capability-first organization rather than area=agent;
- no-invention / UNKNOWN -> ResearchRequest -> evidence -> reconciliation;
- DETERMINISTIC -> TOOL -> SKILL -> AGENT for product/runtime maturation;
- PLAN BEFORE EXECUTION and specification-first;
- Git parallel-development gate and owned/shared/protected surfaces;
- resilient local/OpenShift development profiles;
- information classification/access/PCI governance;
- knowledge governance and controlled Devin projection;
- research fabric and evidence priority;
- UX/architect experience and bounded feedback;
- independent QA/architecture conformance/security/documentation/reconciliation;
- purpose-driven governance councils;
- organization topology evaluated by measurable throughput/rework/collisions/quality;
- Analytics/Audit/Evidence plane;
- CQRS/read models/knowledge graph/vector projections;
- event/saga/notification/session/agent-runtime planes;
- OpenTelemetry/OTLP/Collector road;
- Arc42 lifecycle;
- C4/Mermaid/PlantUML technical and draw.io/iconographic conceptual views;
- portfolio/backlog/Jira-ready semantics;
- LAB simulation/evaluation;
- OpenShift/service readiness;
- local-first one-product modular-monolith direction;
- AI/self-evolution remains bounded and governed.

## Execution priority under DIRECTION-0007

The immediate build order remains:

1. Git/coordination readiness.
2. LAB capability coverage and execution organization bootstrap.
3. Common direction/work/blocker/research/standards/information-handling context.
4. Parallel implementation lanes.
5. Independent integration/QA/reconciliation.
6. Tangible local Director/Copilot delivery.
7. OpenShift development survival/readiness.

DIRECTION-0007 adds explicit work inside those lanes for:
- platform-evolution traceability;
- DevOps/environment integration;
- standards lifecycle/deprecation;
- governance-area mapping;
- visual/document single-source projection;
- OpenShift/Kibana evidence integration.

## Material-change triggers added by DIRECTION-0007

Increment direction again if accepted policy materially changes:
- Copilot execution authority;
- canonical document/image authority;
- DevOps/platform integration ownership;
- standards lifecycle/deprecation policy;
- institutional governance decision-rights integration;
- Kibana/log/telemetry authority or retention model;
- Kafka/event-platform product strategy;
- self-evolution authority or promotion gates.

## Working loop

Direction
-> governance/standards/context
-> plan/specification
-> governed parallel work
-> Git/change evidence
-> deterministic checks
-> QA/reconciliation
-> release/deployment
-> logs/metrics/traces/audit/runtime evidence
-> analytics
-> improvement candidate
-> backlog/direction decision
-> updated projections/Arc42 where required
-> next cycle.

The target remains an increasingly autonomous Architecture AI platform whose normal user interface is the Copilot, while the underlying transformation remains explainable, versioned, standards-aligned, compatible with existing bank platforms and institutionally governable.
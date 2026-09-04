# Happy Work — Chat Direction Capture 2026-09-03

Status: CAPTURED
Direction revision: `DIRECTION-0001`
Purpose: preserve the current chat-derived implementation direction that explains how the prompt set fits together. This file does not replace the individual prompts, implementation evidence or validated release payloads.

## 1. Current working model

Happy Work coordinates bounded Devin sessions through Git-versioned prompts, Session Context Packs, direction revisions, change-impact analysis and reconciliation.

Core rule:

`session context may expire; governed project direction and durable work must not.`

No Devin session should be expected to continue from accidental chat memory. Missing material context becomes discovery/reconciliation work rather than guessing.

## 2. Product shape

Architecture AI remains one product first, implemented as a modular Spring Boot application with Angular UI and MCP capability plane. Local-first now; OpenShift SERVICE later using the same core.

Modes:

- `PLATFORM_DEV`
- `SOLUTION`
- `LAB`
- `SERVICE`

Current emphasis is local/LAB evolution. LAB output is isolated from canonical SOLUTION state.

## 3. Event and consistency direction

Use Spring-native foundations first:

- Spring Modulith for modular-monolith event boundaries where compatible.
- Spring Integration for EIP/channel/flow patterns.
- Spring transactions for local transaction boundaries.
- Spring Statemachine where long-running saga orchestration benefits.
- SQLite initially for Architecture AI durable event/outbox/inbox/saga state where safe.
- Do not force unsupported Spring Integration SQLite adapters.
- Transactional Outbox + idempotent Inbox for reliable at-least-once processing.
- Broker choice (Kafka/Redis/AMQP/etc.) is deferred and evidence-driven.

The logical event/saga contracts must survive future externalization to OpenShift.

## 4. Observability / audit direction

OpenTelemetry is the standards boundary for traces/context/export; Micrometer is the Spring-native metrics/observation layer; structured logging covers significant lifecycle/diagnostics; audit is a separate durable governed plane.

Local first:

Architecture AI -> OTLP -> local OpenTelemetry Collector -> normalized telemetry outputs -> Architecture AI ObservationSnapshot -> LAB/simulation.

Collector is a separate governed runtime component, not embedded in the JAR. Collector failure must not break Architecture AI.

Use OpenTelemetry Semantic Conventions first; use `aai.*` only for Architecture AI-specific semantics. Govern cardinality and sensitive-data leakage.

## 5. Telemetry data road / analytical data

Generic telemetry ETL belongs to OpenTelemetry Collector (receivers/processors/exporters/connectors where applicable), not a custom Java reinvention.

Architecture AI owns domain-specific observation preparation:

normalized telemetry -> observation window -> aggregation/distribution -> quality validation -> immutable ObservationSnapshot -> analytical dataset -> SimulationInputPackage.

SQLite remains operational state. Apache Parquet is the preferred candidate for immutable analytical/replay datasets when validated in the Java stack. Apache Arrow is optional future optimization, not mandatory. Data-lineage contracts should align with OpenLineage concepts where practical without requiring a full external platform now.

## 6. Simulation / LAB direction

Architecture AI should support a deterministic/reproducible simulation harness before relying on custom models for architectural decisions.

Initial classes of evaluation:

- scenario testing
- Monte Carlo
- queueing/capacity
- discrete-event simulation
- replay/comparison
- reliability/failure propagation
- graph impact
- cost/usage
- usability scenarios

Every simulation input/result distinguishes:

- `OBSERVED`
- `SIMULATED`
- `ASSUMED`
- `EXPERIMENTAL`

Persist random seeds/versioned scenario parameters. Use P50/P90/P95/P99 only where distribution/tail behavior matters.

Simulation results are evidence, not automatic architectural truth or ADR approval.

## 7. Notification / human-attention direction

Event != Notification != Alert != DecisionRequest != Audit.

Use a first-class durable AttentionItem/DecisionRequest model with deterministic policy/routing, deduplication, aggregation, quiet hours/DND, user preferences and bounded action contracts.

Windows is the first local delivery provider, not the domain model. Dashboard is the durable local attention center. Future Teams/email/push/SERVICE providers must not require changing domain producers.

Important decisions survive popup/provider failure and can pause/resume sagas/work.

## 8. Agent runtime / session / communication direction

Core rule:

`SESSION IS EPHEMERAL; WORK IS DURABLE.`

Architecture AI owns WorkItem/WorkPackage/AgentAssignment/AgentExecution/Saga/Decision/Result state. A provider session ID is an external reference only.

Protocol responsibility:

- Devin API = provider lifecycle/control/session/message/status/usage where supported.
- MCP = deterministic tools/resources/evidence/knowledge/work/simulation/build capability plane.
- A2A = future provider-neutral agent-to-agent task/collaboration protocol where supported.
- ACP/stdio/Desktop protocol = evaluate only if the installed Devin Desktop exposes a documented compatible integration point; do not infer protocol identity from acronym or reverse-engineer undocumented IPC.

Provider control messages should be small; authoritative work/evidence is claimed/retrieved through MCP.

Provider session completion does not equal WorkPackage completion. Completion comes from a structured validated WorkResult or explicit governed failure/cancellation.

## 9. Real Devin evidence already observed

A local PowerShell/API test was performed independently of the prepared discovery prompt. Current evidence recorded in chat:

- Devin API connectivity works.
- Organization-level session/resource access is available.
- Session metrics including ACU/hour/category information are available.
- Enterprise aggregated metrics are not available with current permissions (403 observed).
- Enterprise user-management capabilities are not available with current permissions.
- Playbooks/Knowledge automation capabilities are visible/usable.

Therefore the unsent `P-DEVIN-API-ACCESS-DISCOVERY-01` is retained as history and superseded by the integrated agent-runtime prompt. Future code must not assume enterprise permissions beyond this evidence.

## 10. Agent telemetry direction

Distinguish provider-observed telemetry from Architecture-AI-observed telemetry.

Provider examples:

- session state
- ACUs/usage
- provider duration/category

AAI examples:

- WorkPackage lifecycle
- MCP calls/tool durations
- evidence retrieval
- decision wait
- result state

Normalize provider data into AgentObservation before translating to Micrometer/OpenTelemetry. Correlate provider session, assignment, execution, work, saga and trace identifiers without using high-cardinality IDs as metric labels.

## 11. Dashboard / control-center direction

The dashboard should progressively show real platform life, not mocks or hidden chat-only state:

- active direction revision and Git baseline
- active/suspended/stale Devin workstreams
- context-refresh requirements
- change-impact warnings
- build/architecture validation
- event/saga/work backlogs
- agent assignments/provider sessions/usage
- MCP usage
- Collector/telemetry health
- AttentionItems/decisions
- knowledge growth
- dataset evolution
- model evolution
- LAB simulation/replay state
- architecture/direction drift signals

Do not claim that the platform is “learning” merely because RAG/Lucene/vector indexes grow. Keep Knowledge accumulation, Dataset evolution and Model learning visibly separate.

## 12. Git / branches / live LAB

Git is the source/definition/governance authority for source, contracts, schemas, policies, manifests, infrastructure definitions owned by Architecture AI, prompt history, simulation definitions and model/dataset manifests.

Nexus holds immutable distributable artifacts. Local stores hold mutable runtime state. LAB analytical storage holds observation/replay/simulation datasets.

Current default:

- `main` = accepted integration baseline for Happy Work staging/governance.
- isolated work may use branches.
- live/default LAB should normally track the accepted selected baseline, not every parallel agent branch.
- hot reload from experimental branches must be explicit and identified as experimental.

## 13. Direction changes / agent coordination

Material direction changes require:

1. new Direction Revision;
2. Change Impact Assessment;
3. affected session classification: `UNAFFECTED`, `REVIEW_REQUIRED`, `PAUSE_REQUIRED`, `SUPERSEDE_REQUIRED`;
4. bounded Context Refresh describing what changed, why, what remains valid/invalid and the new repository baseline;
5. revalidation of shared contracts/assumptions before continuing.

Agents should not be expected to discover major direction changes accidentally by reading diffs.

## 14. Deterministic vs non-deterministic work

Prefer deterministic frameworks/tools for builds, tests, schema validation, parsing, hashing, measurements, DB queries, API calls with defined contracts, static analysis and simulation calculations.

Use Devin/LLM reasoning for ambiguity, evidence interpretation, trade-offs, conflict reconciliation, unknown semantic classification and synthesis.

Non-deterministic work stays inside a deterministic envelope:

structured input -> reasoning -> structured output -> deterministic validation/policy -> accepted candidate/action.

Engineering sessions should delegate broad unresolved research to bounded Discovery/Research workstreams instead of silently expanding into open-ended investigation.

## 15. Prompt capture status

The prompt set captured under `work/prompts/` is governed by `PROMPT_INDEX.md`.

Active READY prompts:

- `P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01`
- `P-EVENT-PLATFORM-SAGA-01`
- `P-OBSERVABILITY-AUDIT-01`
- `P-LOCAL-TELEMETRY-DATA-ROAD-01`
- `P-NOTIFICATION-PLATFORM-01`
- `P-AGENT-RUNTIME-COMMUNICATION-PLANE-01`

Draft:

- `P-SIMULATION-EVALUATION-FOUNDATION-01`

Superseded/history:

- `P-DEVIN-API-ACCESS-DISCOVERY-01`
- `P-OBSERVABILITY-AUDIT-PLATFORM-01`

No prompt is considered SENT/EXECUTED merely because it is stored in Git.

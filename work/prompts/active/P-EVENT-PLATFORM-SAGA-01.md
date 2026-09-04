---
prompt_id: P-EVENT-PLATFORM-SAGA-01
title: Architecture AI Event Platform, Spring Modulith, Spring Integration, Durable Eventing, Outbox, Sagas and Future OpenShift Externalization
domain: event platform / sagas / Spring Integration / Spring Modulith
status: READY
parallelism_decision: PARALLEL_SAFE_WITH_BOUNDARIES
direction_revision: DIRECTION-0001
repository_baseline: 171abc3fab22492a62cb4b6c7068e2357af8001e
depends_on: [existing Spring Boot runtime, current SQLite operational persistence]
conflicts_with: []
shared_surfaces: [database migrations, Spring configuration, event contracts, saga persistence, observability]
allowed_change_scope: [event taxonomy, local event bus, durable event store, outbox/inbox, integration flows, saga model]
forbidden_change_scope: [introducing Kafka/Redis/RabbitMQ without evidence, microservice split, unsupported SQLite adapters]
created_at: null
sent_at: null
executed_at: null
devin_session_reference: null
result_reference: null
---

# P-EVENT-PLATFORM-SAGA-01
## ARCHITECTURE AI EVENT PLATFORM, SPRING MODULITH, SPRING INTEGRATION, DURABLE EVENTING, OUTBOX, SAGAS AND FUTURE OPENSHIFT EXTERNALIZATION

Continue from the CURRENT REAL Architecture AI implementation.

DO NOT restart the project.
DO NOT redesign repository archetypes already established.
DO NOT introduce Kafka, Redis, RabbitMQ or another broker merely to implement local eventing.
DO NOT split the current modular monolith into microservices.

Architecture AI currently evolves as ONE Spring Boot modular application with Angular frontend and MCP capabilities.

The objective is to establish the EVENT PLATFORM so modules can communicate through explicit, governed, observable and evolvable events locally today while allowing selected events to be externalized to OpenShift infrastructure later without redesigning the domain model.

Implement enough executable infrastructure to prove the event architecture, not documentation only.

======================================================================
0. CORE PRINCIPLE
======================================================================

Use LOCAL SPRING EVENTING NOW and preserve a clean path toward DISTRIBUTED EVENT TRANSPORT LATER.

TODAY:
Spring Boot modular monolith -> Spring Modulith events -> Spring Integration flows -> local durable event state -> SQLite.

FUTURE:
same domain/integration event contracts -> externalization boundary -> Kafka/another approved broker -> OpenShift.

Domain must not depend directly on Kafka, Redis or future transport technology.

======================================================================
1. FRAMEWORK BASELINE
======================================================================

Evaluate and use current compatible Spring ecosystem before custom infrastructure.

SPRING MODULITH: application-module boundaries, module-to-module application events, transactional event publication, Event Publication Registry where compatible, module verification and event externalization boundary.

SPRING INTEGRATION: MessageChannel, routers, filters, transformers, service activators, aggregators, resequencers, delayers, claim-check, error channels and flow composition.

SPRING TRANSACTION: transaction boundaries, @Transactional, @TransactionalEventListener and post-commit behavior.

SPRING STATEMACHINE: evaluate/use for long-running saga state coordination where it adds clear value. Do not use a state machine for every simple operation.

SPRING CLOUD STREAM: future external transport option only. Do not add a binder/broker now unless already required by current executable scope.

======================================================================
2. SPRING MODULITH AS MODULE EVENT FOUNDATION
======================================================================

Inspect whether current application already uses Spring Modulith. If not, evaluate integration with CURRENT Spring Boot baseline. Use it where compatible to model modular monolith and module events. Verify module boundaries with automated Modulith tests where practical.

======================================================================
3. EVENT TAXONOMY
======================================================================

Introduce explicit categories:

DOMAIN EVENT = something that happened inside a bounded module/domain.
INTEGRATION EVENT = stable event intended to cross module/runtime/process boundary with stricter versioning.
COMMAND = instruction/request for action, not an event.
OPERATIONAL EVENT = runtime/processing lifecycle signal.
AUDIT EVENT = governed attributable occurrence requiring audit treatment.

Keep taxonomy small and explicit.

======================================================================
4. EVENT ENVELOPE / IDENTITY / VERSIONING
======================================================================

Create a versioned common envelope conceptually including eventId, eventType, eventVersion, occurredAt, publishedAt, sourceApplication, sourceModule, sourceInstance, architectureMode, correlationId, causationId, traceId, sagaId when applicable, aggregateType/aggregateId, payloadSchema, payload/reference, classification/sensitivity, durabilityClass and deliveryClass.

Do not expose secrets or document bodies. Large payloads use references/Claim Check.

Every durable event has stable unique eventId. Preserve correlationId, causationId and sagaId. Integrate with OpenTelemetry where appropriate without conflating event and trace identity.

Every integration-grade event has explicit schema/version. Avoid brittle Java-class serialization as long-term contract; prefer explicit JSON-compatible contracts for events that may cross process/runtime boundaries.

======================================================================
5. LOCAL EVENT BUS / CHANNEL CATALOG
======================================================================

Domain publishes through an Architecture AI abstraction equivalent to DomainEventPublisher. Implementation may use Spring Application Events/Spring Modulith. Modules do not depend on future Kafka APIs.

Create explicit Event Channel Catalog. For every channel define channelId, purpose, producers, consumers, event/message types, sync/async, durability, ordering, transaction requirement, retry, backpressure, error channel and future externalization eligibility.

Formalize channel classes:
- SYNCHRONOUS_TRANSIENT
- ASYNC_TRANSIENT
- DURABLE_LOCAL
- EXTERNALIZABLE
- TELEMETRY

Do not use one universal channel for everything.

======================================================================
6. SQLITE / DURABLE EVENT STORE
======================================================================

Current local operational DB is SQLite.

Do NOT assume Spring Integration JdbcChannelMessageStore supports SQLite natively. Do not invent a complex custom SQLite provider unless absolutely necessary and fully validated.

Prefer Architecture AI durable event/outbox tables in existing SQLite DB while Spring Integration channels handle in-process routing.

Create abstraction equivalent to DurableEventStore with initial SQLiteDurableEventStore and future providers without changing domain-event contracts.

Create migrations for minimum event ledger equivalent to AAI_EVENT containing event identity/type/version/times/source/correlation/causation/saga/payload schema or reference/status/delivery class/attempts/retry timing/completion. Possible lifecycle: CREATED, READY, PROCESSING, COMPLETED, FAILED, DEAD_LETTER, CANCELLED.

======================================================================
7. TRANSACTIONAL OUTBOX / INBOX
======================================================================

Implement Transactional Outbox for reliable durable async processing/externalization. Local business transaction should atomically update application state + insert outbox event in SAME database transaction. Separate dispatcher handles delivery. Do NOT implement distributed 2PC.

Prepare AAI_EVENT_OUTBOX with PENDING/CLAIMED/PUBLISHED/FAILED/DEAD_LETTER and safe concurrent claiming later.

Prepare Inbox/Processed Event mechanism such as AAI_EVENT_INBOX for consumers where duplicate delivery is possible.

Target AT-LEAST-ONCE DELIVERY + IDEMPOTENT PROCESSING. Do not claim exactly-once everywhere.

======================================================================
8. SPRING INTEGRATION PATTERNS
======================================================================

Use Claim Check for large data. Never put full PDFs, Excel workbooks, transcripts or ML datasets on the event bus; send artifact/evidence/content IDs.

Create reusable flow conventions using channels, filters, routers, service activators and output events. Avoid giant anonymous monolithic IntegrationFlows.

Use routers explicitly for artifact type, relevance decision, work routing, durability, externalization and error class.

Use Aggregator for related WorkItems/family classification/batch windows/simulation result aggregation where needed, with durable group state only when correctness requires it.

Do not assume global ordering. Define ordering scope per artifact/aggregate/saga/work package. Use resequencing only when business invariant requires it.

Every async flow has bounded backpressure: concurrency, poll interval, batch size, backlog threshold and slow-consumer behavior. Platform must tolerate processing that takes days.

======================================================================
9. RETRY / DEAD LETTER / REPLAY
======================================================================

Centralize retry semantics and distinguish TRANSIENT, PERMANENT, VALIDATION, BUSINESS_REJECTION and UNKNOWN. Retries need max attempts, backoff, next attempt, error code and dead-letter policy. Do not retry permanent failures forever.

Create durable dead-letter concept with event ID, consumer/flow, failure category, attempts, error code, first/last failure and replay eligibility. Avoid sensitive payload logging.

Support controlled audited replay only when event contract/consumer semantics permit it. Never blindly replay all historical events.

======================================================================
10. REAL MODULE FLOW
======================================================================

Prove a flow equivalent to:

Local Ingestion -> ArtifactDiscovered -> Artifact Processing -> ArtifactProfiled -> Relevance -> RelevanceAssessed

without direct coupling between origin and all downstream consumers.

======================================================================
11. SAGA PRINCIPLE / TYPES
======================================================================

Use Sagas only for multi-step operations spanning independent transactions, compensation, long-running async work or restart survivability. Do not use sagas when one local transaction is enough.

Distinguish LOCAL SAGA (participants currently inside one application with independent transactional boundaries) from future DISTRIBUTED SAGA. Same conceptual saga contract should support evolution.

Prefer explicit orchestration for complex Architecture AI workflows. Create concepts equivalent to SagaDefinition, SagaInstance, SagaStep, SagaTransition, SagaAction, SagaCompensation, SagaEvent and SagaResult.

Use Spring Statemachine where it simplifies states/transitions/guards/actions/recovery, but keep core saga contracts independent of Statemachine classes.

======================================================================
12. SAGA PERSISTENCE / STATES / COMPENSATION
======================================================================

Saga state must be durable in current local DB. Prepare AAI_SAGA_INSTANCE, AAI_SAGA_STEP and AAI_SAGA_HISTORY or equivalent.

Common lifecycle states may include CREATED, RUNNING, WAITING, COMPENSATING, COMPLETED, FAILED, COMPENSATED, MANUAL_INTERVENTION_REQUIRED and CANCELLED.

Every compensatable step defines explicit compensation. Compensation is a new business/technical action, not distributed rollback. If no semantic inverse exists, use manual intervention rather than inventing compensation.

Saga actions and compensations must tolerate repeat delivery and application restart.

Initial saga candidates include Knowledge Processing Saga and Work Execution Saga. Implement only one or two based on current real readiness.

======================================================================
13. EVENT / SAGA / TRANSACTION RELATIONSHIP
======================================================================

Saga progression occurs from explicit events: StepCompleted -> SagaCoordinator -> transition -> next command/event. Avoid hidden cross-module method chains.

Document/enforce transaction boundary pattern: local state mutation + durable event/outbox write = same DB transaction; after commit, async processing/externalization. Do not publish external events before owner transaction safely commits.

Evaluate Spring Modulith Event Publication Registry against CURRENT database/runtime baseline. Use where compatible, but do not assume SQLite support. If not cleanly supported, preserve Modulith event model and use AAI DurableEventStore/outbox.

======================================================================
14. EXTERNALIZATION PORT / FUTURE TRANSPORT
======================================================================

Create abstraction equivalent to ExternalEventPublisher. Today use LocalNoopExternalEventPublisher or local MessageChannel adapter. Future implementations may include Kafka/CloudStream/AMQP/approved broker.

Not every domain event leaves the process. Explicitly map LOCAL_ONLY, EXTERNALIZABLE and EXTERNAL_REQUIRED. External events need stable contract/version/safe payload/routing or partition key/classification/retention requirement.

Preserve compatibility with Spring Modulith externalization where useful. Prepare Spring Cloud Stream only as possible adapter; do not create bindings until a broker requirement exists.

Prepare future local-to-OpenShift bridge concept: local durable outbox -> secure externalization adapter -> central broker/SERVICE, including disconnected operation and later synchronization. Do not implement transport today.

======================================================================
15. SECURITY / OBSERVABILITY / AUDIT
======================================================================

Never externalize document bodies, transcripts, credentials, tokens, PAN, sensitive personal content or raw corporate files by default. Prefer IDs, hashes, safe metadata, governed evidence references and approved semantic facts.

Extend Micrometer/OpenTelemetry with bounded metrics for event creation/completion/failure/retry/deadletter/backlog and saga start/completion/failure/compensation/duration. Do not use eventId/sagaId as metric labels.

Maintain distinction between Event Ledger (operational delivery history) and Audit (governed attributable history). Not every event is an audit record.

======================================================================
16. CATALOGS / TIMERS / VERSION MIGRATION
======================================================================

Create EVENT_CATALOG.md, SAGA_CATALOG.md and EVENT_CHANNEL_CATALOG.md plus machine-readable equivalents where practical.

Model time explicitly for sagas/delays with timeoutAt/retryAt/deadlineAt. Durable timers needed for correctness must survive restart.

Do not bind persisted historical events to brittle Java class names only. Preserve eventType, schemaVersion and payload/reference; allow future upcasting/version conversion if required.

======================================================================
17. TESTING
======================================================================

Add tests for module event without direct implementation dependency; transaction rollback produces no committed durable external event; durable event survives restart; duplicate delivery is idempotent; transient retry/backoff; dead letter; saga restart/resume; compensation; transient event avoids unnecessary persistence; large payload travels by reference.

Run REAL SQLite compatibility tests for event ledger, outbox, inbox/idempotency, saga persistence, transactions and current local concurrent-claim model. Document where Spring native components can/cannot directly use SQLite.

Extend architectureCheck or equivalent to verify module boundaries, event catalog consistency, schema versions, forbidden dependencies, required externalization metadata, valid saga-event references, persistence policy and no giant payload contracts.

======================================================================
18. DASHBOARD / LAB / MCP
======================================================================

Extend current read-only operational APIs as appropriate for event throughput/backlog/failures/dead letters, saga states and oldest pending/running work. Do not redesign Angular in this task.

LAB simulation should be able to consume same contracts for arrival rates, processing times, queues, failures, retry, saga duration and backlog, while simulated events never enter SOLUTION operational queues.

MCP may later expose bounded event/saga inspection/replay tools; do not expose unrestricted event injection. Mutation/replay requires governance.

======================================================================
19. DO NOT OVERIMPLEMENT
======================================================================

Do NOT add Kafka, Redis, RabbitMQ, distributed transaction manager, schema registry, service mesh event transport or microservice split now. Prepare ports/adapters instead.

======================================================================
20. DELIVERABLES / DEFINITION OF DONE
======================================================================

Create ARCHITECTURE_AI_EVENT_PLATFORM_BASELINE.md plus EVENT_CATALOG.md, EVENT_CHANNEL_CATALOG.md, SAGA_CATALOG.md and EVENT_CONTRACT_GUIDELINES.md.

Completion requires executable proof of: module A -> domain event -> Spring event/Modulith boundary -> Spring Integration flow -> module B; one durable business transaction/outbox/async completion path; one persisted saga with controlled failure and compensation/manual-state handling; restart recovery; exact tests/files/results.

No external broker is required.

FINAL PRINCIPLES:
1. EVENTS ARE CONTRACTS, NOT METHOD CALLS WITH DIFFERENT NAMES.
2. NOT EVERY MODULE INTERACTION MUST BE AN EVENT.
3. DOMAIN EVENTS ARE TRANSPORT-AGNOSTIC.
4. LOCAL EVENTING FIRST; EXTERNAL TRANSPORT LATER.
5. SQLITE MAY HOLD LOCAL DURABLE EVENT/SAGA STATE.
6. DO NOT FORCE UNSUPPORTED SPRING SQLITE ADAPTERS.
7. USE OUTBOX FOR RELIABLE CROSS-BOUNDARY PUBLICATION.
8. USE INBOX/IDEMPOTENCY FOR AT-LEAST-ONCE DELIVERY.
9. DO NOT PROMISE GLOBAL EXACTLY-ONCE DELIVERY.
10. LARGE DATA TRAVELS BY REFERENCE.
11. DURABILITY AND ORDERING ARE EXPLICIT.
12. RETRIES ARE BOUNDED; DEAD LETTER IS DURABLE.
13. SAGAS COORDINATE MULTI-TRANSACTION CONSISTENCY.
14. COMPENSATION IS AN EXPLICIT ACTION, NOT DISTRIBUTED ROLLBACK.
15. SAGA STATE SURVIVES RESTART.
16. MODULE EVENT CONTRACTS MUST SURVIVE FUTURE OPENSHIFT DISTRIBUTION.
17. BROKER SELECTION IS EVIDENCE-DRIVEN.
18. SPRING FRAMEWORK CAPABILITIES ARE PREFERRED OVER CUSTOM INFRASTRUCTURE.
19. DO NOT REINVENT THE WHEEL.

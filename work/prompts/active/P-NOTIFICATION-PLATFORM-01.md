---
prompt_id: P-NOTIFICATION-PLATFORM-01
title: Architecture AI Local Notification, Human Attention, Decision Request, Preference, Routing and Future Multi-Channel Foundation
domain: notifications / human attention / decisions / Windows / dashboard
status: READY
parallelism_decision: PARALLEL_SAFE_WITH_BOUNDARIES
direction_revision: DIRECTION-0001
repository_baseline: 171abc3fab22492a62cb4b6c7068e2357af8001e
depends_on: [event platform contracts, saga/work contracts, observability conventions]
conflicts_with: []
shared_surfaces: [event routing, saga states, audit, dashboard APIs, SQLite migrations, OpenTelemetry metrics]
allowed_change_scope: [AttentionItem model, DecisionRequest, notification providers, Windows local provider, dashboard inbox/preferences]
forbidden_change_scope: [second event bus, hard-coding Windows in domain, notifying every event, sensitive popup content]
created_at: null
sent_at: null
executed_at: null
devin_session_reference: null
result_reference: null
---

# P-NOTIFICATION-PLATFORM-01
## ARCHITECTURE AI LOCAL NOTIFICATION, HUMAN-ATTENTION, DECISION REQUEST, PREFERENCE, ROUTING AND FUTURE MULTI-CHANNEL FOUNDATION

Continue from the CURRENT REAL Architecture AI implementation.

DO NOT restart the project.
DO NOT create a second event platform.
DO NOT model every Architecture AI event as a user notification.

Architecture AI evolves with one Spring Boot modular application, Angular frontend, MCP Server, local knowledge processing, event platform, saga/work orchestration, OpenTelemetry/Micrometer, durable SQLite state and the modes PLATFORM_DEV, SOLUTION, LAB and SERVICE.

A current local Windows workstation has already demonstrated local interactive notifications. Establish the Architecture AI NOTIFICATION AND HUMAN-ATTENTION PLATFORM so it works locally now and remains provider/channel agnostic for future Windows, Dashboard, Teams, email, push and SERVICE/OpenShift delivery.

======================================================================
0. FUNDAMENTAL DISTINCTION
======================================================================

Keep separate:
DOMAIN EVENT = something happened.
OPERATIONAL EVENT = runtime/system occurrence.
NOTIFICATION = information intentionally surfaced to a person.
ALERT = condition requiring attention because risk/threshold reached.
DECISION REQUEST = explicit human input required before work can continue.
APPROVAL REQUEST = governed human authorization required.
REMINDER = known attention item resurfaced by policy.
TASK/WORK ITEM = work to perform.
AUDIT EVENT = attributable governed history.

Do NOT use one generic Notification concept for everything.

======================================================================
1. HUMAN ATTENTION MODEL / POLICY ENGINE
======================================================================

Introduce higher-level AttentionItem. Possible types: INFORMATION, SUCCESS, WARNING, ALERT, DECISION_REQUIRED, APPROVAL_REQUIRED, ACTION_REQUIRED, REMINDER, FAILURE, PROGRESS.

A domain event may produce zero, one or multiple AttentionItems. Most internal events should produce NO notification.

Create deterministic Attention/Notification Policy Engine:
Event -> policy -> SUPPRESS / NOTIFY / AGGREGATE / DEFER / ESCALATE / REQUIRE_DECISION.

Policy may consider event type, severity, user relevance, mode, current work context, time, duplicate/ack state, frequency, channel availability and quiet-hour/preferences. Do not bury notification decisions in arbitrary listeners.

======================================================================
2. ATTENTION ITEM / PRIORITY / STATES
======================================================================

Create versioned AttentionItem conceptually with attentionId/type/version, createdAt/expiresAt, severity/priority, title/summary, source module/event, resource type/reference, correlation/saga/work refs, requiresResponse, responseSchemaReference, status, deliveryPolicy, classification, deduplicationKey and aggregationKey. No unrestricted document contents.

Use small governed priority model LOW/NORMAL/HIGH/URGENT with semantic meaning. Every ERROR log is not urgent.

Support durable states: CREATED, PENDING, DELIVERED, SEEN, ACKNOWLEDGED, RESPONDED, DISMISSED, SNOOZED, EXPIRED, CANCELLED, FAILED. Decision requests additionally WAITING_FOR_RESPONSE, ANSWERED, TIMED_OUT, ESCALATED.

======================================================================
3. DECISION / ACTION CONTRACTS
======================================================================

Distinguish informational messages from DECISION_REQUIRED. Decision request contains question, allowed structured responses, response contract, deadline if any, timeout/default policy, saga/work reference and governance requirement. Avoid arbitrary free text when structured options suffice.

Create NotificationAction with actionId, label, actionType, requiresConfirmation and resultContract. Examples OPEN_DASHBOARD, VIEW_WORK_ITEM, ACKNOWLEDGE, SNOOZE, RETRY_APPROVED, APPROVE, REJECT, SELECT_OPTION. Never execute arbitrary commands.

Create DecisionRequest and DecisionResponse models with machine-readable options/selection, actor, time and optional bounded comment/reference. Response emits appropriate domain event; Windows UI must not mutate arbitrary business state directly.

======================================================================
4. PROVIDER SPI / WINDOWS LOCAL PROVIDER
======================================================================

Encapsulate existing Windows capability behind NotificationDeliveryProvider. Initial provider: WindowsLocalNotificationProvider. Future DashboardNotificationProvider, TeamsNotificationProvider, EmailNotificationProvider, PushNotificationProvider.

Domain code must not know Windows APIs.

Detect Windows capabilities at startup: local notifications, actions, scheduling, progress, history/grouping where available. Unsupported capability must fall back according to policy or Dashboard Inbox, not silently lose AttentionItem.

Use current recommended Microsoft app notification mechanism where technically compatible with Java runtime. Do not use obsolete APIs just because old samples exist. If direct Java integration requires excessive native bridge, preserve SPI and use smallest governed local adapter. Do not move notification-domain logic into PowerShell.

======================================================================
5. DASHBOARD INBOX / NOTIFICATION CENTER
======================================================================

Dashboard is first-class durable destination independent of Windows. Important actionable AttentionItems remain discoverable if Windows popup missed/dismissed/provider fails.

Extend existing Angular dashboard with Notification/Attention Center: Unread, Requires My Action, Decisions, Warnings/Alerts, Completed/History plus counts for unread/decision/action/urgent/snoozed. Do not create second frontend.

======================================================================
6. USER PREFERENCES / QUIET HOURS / DND
======================================================================

Create durable NotificationPreference model. Initial preferences may include provider enablement, minimum priority, categories, quiet hours, DND, aggregation, progress/completion/decision/warning preferences.

Dashboard allows inspect/modify local preferences using backend persistence, not browser localStorage only.

During quiet hours normal informational notifications may defer/dashboard-only; high/urgent actionable items follow explicit policy. DND suppresses popup but never loses durable action state. Urgent override only when explicitly configured.

======================================================================
7. DEDUPLICATION / AGGREGATION / ATTENTION BUDGET
======================================================================

Prevent repeated notifications for same condition using durable deduplicationKey. Same disk warning should not popup every 30 seconds.

Use Spring Integration Aggregator or equivalent existing mechanism where appropriate: e.g. 32 Work Items completed -> one notification. Aggregation keys may include project/work package/event family/severity/resource/time window.

Introduce Attention Budget/rate limiting to protect architect from notification fatigue. High event throughput must not become high human-notification throughput.

======================================================================
8. PROGRESS / COMPLETION / FAILURE
======================================================================

Long operations may expose one updatable progress notification and/or dashboard progress rather than repeated popups.

Completion notification only when valuable, e.g. long-running work completed, decision-dependent work ready, simulation completed.

Differentiate recoverable internal failure -> telemetry/log only; repeated/degraded condition -> dashboard warning; work blocked requiring user -> ACTION_REQUIRED; critical platform condition -> ALERT. Do not popup every retry.

======================================================================
9. SAGA / WORK / EVENT INTEGRATION
======================================================================

Decision requests may pause sagas: RUNNING -> DecisionRequested -> WAITING_FOR_HUMAN -> Windows/Dashboard -> DecisionProvided -> resume. Persist state; restart must not lose decision.

Work Items/Packages generate attention only for human decision, blocked work, important completion, deadline or manual intervention, not ordinary READY by default.

Notification creation consumes existing Event Platform: Event -> AttentionPolicyRouter -> AttentionItem -> DeliveryRouter. Do not create unrelated async infrastructure.

======================================================================
10. DELIVERY ROUTER / RECORD / RETRY
======================================================================

Create provider-neutral DeliveryRouter: AttentionItem + preferences + policy + available providers -> Windows/Dashboard/future channels.

Persist NotificationDelivery separately from semantic AttentionItem with deliveryId, attentionId, provider, attempt, requested/delivered times, status, failureCode, providerReference. States PENDING, DELIVERED, FAILED, SUPPRESSED, DEFERRED, EXPIRED.

Retry provider/transport failures only where useful. Do not recreate semantic AttentionItem when delivery fails. Windows failure must leave dashboard item available.

======================================================================
11. FUTURE CHANNEL / MULTI-ARCHITECT READINESS
======================================================================

Prepare provider contracts for Teams/email/push/SERVICE but do not implement unless already available. Same AttentionItem/DecisionRequest contracts remain stable.

Today SOLUTION -> local Attention Platform -> Windows + Dashboard. Future SERVICE -> central Notification Routing -> Teams/email/push/approved providers.

Prepare audience concepts CURRENT_ARCHITECT, ROLE, USER, TEAM, SYSTEM_OWNER without inventing institutional directory assumptions. Local may resolve only CURRENT_ARCHITECT initially.

======================================================================
12. SECURITY / PRIVACY
======================================================================

Windows popups may be visible on screen/lock/shared screen. Default to minimal safe content. Do not show document content, PAN, credentials, confidential architecture details, raw evidence or sensitive personal information.

Prepare display classification PUBLIC_SAFE, PRIVATE, SENSITIVE; provider rendering policy determines detail. Safe popup may say “Architecture decision requires your attention” and direct to secured dashboard.

======================================================================
13. OBSERVABILITY / AUDIT / SIMULATION
======================================================================

Integrate with current OTel/Micrometer. Metrics may include notification created/delivered/failed/suppressed/aggregated/acknowledged/response duration and decision requested/responded/timeout, using bounded type/priority/provider/result labels; no attentionId/decisionId metric tags.

Preserve causal trace Event -> AttentionItem -> Delivery -> Response -> Domain Event/Saga continuation.

Audit governed human actions such as decision response/approval/rejection/manual escalation/preferences where required/manual replay. Do not audit every informational delivery as business audit; delivery history is separate.

Observe delivery/dismissal/ack/response/snooze/volume/aggregation/decision timeout for future LAB usability/policy tuning, not intrusive profiling.

Register simulation features ATTENTION_ITEM_ARRIVAL_RATE, NOTIFICATION_DELIVERY_RATE, NOTIFICATION_FAILURE_RATE, NOTIFICATION_ACK_TIME, DECISION_RESPONSE_TIME, DECISION_TIMEOUT_RATE, AGGREGATION_RATIO, SUPPRESSION_RATE in existing feature registry.

Prepare usability scenarios: completion notification, blocking decision, missed Windows but dashboard recovery, notification storm aggregation, quiet-hours decision, Windows provider failure.

======================================================================
14. API / PERSISTENCE / SPRING INTEGRATION
======================================================================

Extend existing versioned APIs conceptually for attention list/detail, acknowledge/dismiss/snooze; decision list/detail/respond; notification preferences get/update. Mutations idempotent/concurrency-safe; business rules stay server-side.

Use current durable storage/migrations for AAI_ATTENTION_ITEM, AAI_NOTIFICATION_DELIVERY, AAI_DECISION_REQUEST, AAI_DECISION_RESPONSE, AAI_NOTIFICATION_PREFERENCE or equivalent without duplicating Event Ledger/Audit tables.

Use Spring Integration Router/Filter/Aggregator/Resequencer/Delayer where justified rather than custom-building EIP primitives.

Explicitly distinguish EPHEMERAL_NOTIFICATION (e.g. temporary progress) from DURABLE_ATTENTION (e.g. decision). Toast expiration is independent of decision expiration. Snooze updates same item with snoozedUntil and schedules re-delivery.

======================================================================
15. TESTS / REAL WINDOWS VALIDATION
======================================================================

Test informational completion, high event volume aggregation, durable decision + saga wait, Windows delivery failure fallback, quiet hours, urgent action policy, restart with pending decision, duplicate event -> one AttentionItem, snooze, safe sensitive-content rendering.

On current Windows workstation run REAL tests for basic local notification, actions/activation response, grouping/tagging where supported, progress where supported, expiration and capability detection. Do not declare Windows integration complete from mocks alone.

Provider SPI should support capability queries for INFORMATION, ACTIONS, TEXT_INPUT, SELECTION, PROGRESS, SCHEDULED, GROUPING, CANCELLATION without forcing every provider to support all.

======================================================================
16. DOCUMENTATION / PARALLEL SAFETY / DONE
======================================================================

Create ARCHITECTURE_AI_NOTIFICATION_PLATFORM_BASELINE.md plus ATTENTION_TYPE_CATALOG.md, NOTIFICATION_POLICY_CATALOG.md, NOTIFICATION_PROVIDER_CATALOG.md, DECISION_REQUEST_CONTRACT.md and NOTIFICATION_TELEMETRY_REQUIREMENTS.md.

Other work may modify event platform, OTel, audit, simulation and repository archetypes. Avoid redefining their contracts; consume existing EventEnvelope/correlation/audit/telemetry/runtime-mode/simulation registry. If dependency incomplete, create adapter/interface or dependency gap rather than competing architecture.

Completion requires executable flow long-running work -> completion event -> AttentionPolicy -> one useful AttentionItem -> Windows + Dashboard; and decision-required saga/work -> persisted DecisionRequest -> Windows action if supported + Dashboard -> structured DecisionResponse -> domain event -> saga/work resumes; Windows unavailable -> important attention not lost; notification storm -> bounded policy.

FINAL PRINCIPLES:
1. EVENT IS NOT NOTIFICATION.
2. NOTIFICATION IS NOT AUDIT.
3. ALERT IS NOT EVERY ERROR.
4. DECISION REQUEST IS NOT AN INFORMATIONAL MESSAGE.
5. NOT EVERYTHING DESERVES HUMAN ATTENTION.
6. HUMAN ATTENTION IS LIMITED.
7. IMPORTANT ATTENTION STATE MUST BE DURABLE.
8. WINDOWS IS FIRST PROVIDER, NOT DOMAIN MODEL.
9. DASHBOARD IS DURABLE LOCAL ATTENTION CENTER.
10. PROVIDER FAILURE MUST NOT LOSE DECISIONS.
11. HIGH EVENT VOLUME MUST NOT BECOME NOTIFICATION STORM.
12. USE FILTERING, ROUTING, AGGREGATION AND DELAY BEFORE CUSTOM MECHANISMS.
13. USER PREFERENCES AND QUIET HOURS ARE FIRST-CLASS.
14. ACTIONS ARE BOUNDED CONTRACTS, NOT ARBITRARY COMMANDS.
15. DECISION RESPONSES ARE STRUCTURED AND TRACEABLE.
16. SAGAS MAY WAIT FOR HUMAN DECISIONS.
17. POPUP CONTENT MUST BE SAFE FOR CORPORATE DESKTOPS.
18. OBSERVE EFFECTIVENESS FOR FUTURE USABILITY EVALUATION.
19. FUTURE CHANNELS MUST NOT CHANGE DOMAIN PRODUCERS.
20. DO NOT REINVENT THE WHEEL.

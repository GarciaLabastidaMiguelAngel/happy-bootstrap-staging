---
prompt_id: P-AGENT-RUNTIME-COMMUNICATION-PLANE-01
title: Architecture AI Session, Work, Agent Runtime, Communication Protocol, Devin API, MCP, A2A, Execution, Observability and Human-Decision Foundation
domain: agent runtime / sessions / work / protocols / Devin API / MCP / A2A
status: READY
parallelism_decision: PARALLEL_SAFE_WITH_BOUNDARIES
direction_revision: DIRECTION-0001
repository_baseline: 171abc3fab22492a62cb4b6c7068e2357af8001e
depends_on: [event platform contracts, saga/work contracts, MCP contracts, observability conventions, attention/decision contracts]
conflicts_with: []
shared_surfaces: [MCP contracts, session/work persistence, saga state, provider config, dashboard APIs, telemetry, audit]
allowed_change_scope: [agent runtime abstractions, Devin provider adapter, session/work model, A2A readiness, dispatch/reconciliation, telemetry mapping]
forbidden_change_scope: [making Devin session canonical work state, replacing MCP, proprietary agent protocol, undocumented Desktop IPC]
created_at: null
sent_at: null
executed_at: null
devin_session_reference: null
result_reference: null
---

# P-AGENT-RUNTIME-COMMUNICATION-PLANE-01
## ARCHITECTURE AI SESSION, WORK, AGENT RUNTIME, COMMUNICATION PROTOCOL, DEVIN API, MCP, A2A, EXECUTION, OBSERVABILITY AND HUMAN-DECISION FOUNDATION

Continue from the CURRENT REAL Architecture AI implementation state.

DO NOT restart the project.
DO NOT redesign working foundations without a verified defect.
DO NOT introduce a proprietary agent protocol when an applicable standard exists.
DO NOT treat Devin session state as canonical Architecture AI work state.
DO NOT make MCP responsible for agent lifecycle/control concerns.

Architecture AI currently evolves as ONE Spring Boot modular application with Angular frontend, MCP Server, deterministic tools, local knowledge processing, Spring Batch, Spring Integration/event platform, durable event/outbox/inbox direction, saga/work orchestration, SQLite, Lucene, OpenTelemetry/Micrometer/local Collector direction, LAB/simulation direction, Windows/dashboard notification direction, Gradle, and modes PLATFORM_DEV/SOLUTION/LAB/SERVICE.

A real Devin API access test has already demonstrated in the current environment that API access is configured and functional; organization-level session/resource access exists; session metrics including ACUs/hours/categories are available; enterprise aggregated metrics and enterprise user-management are not available with current permissions; automation capabilities such as Playbooks and Knowledge are available. Treat this as CURRENT LOCAL EVIDENCE and do not assume additional Enterprise permissions.

The objective is to establish the ARCHITECTURE AI AGENT RUNTIME AND COMMUNICATION PLANE for durable work, sessions, assignments, execution lifecycle, Devin communication, MCP access, future A2A compatibility, agent discovery/capabilities, human-decision pause/resume, notifications, observability, audit and future multi-agent/OpenShift evolution without binding the platform permanently to Devin-specific APIs.

======================================================================
0. CORE PRINCIPLE
======================================================================

Distinguish WORK, SESSION, AGENT, EXECUTION, MESSAGE, TOOL CALL, EVENT, DECISION and RESULT.

SESSION IS EPHEMERAL. WORK IS DURABLE.

Architecture AI Work -> Agent Assignment -> Provider Session -> Agent Execution -> Result -> Architecture AI validation/state.

Do NOT model WorkPackage = Devin session.

======================================================================
1. PROTOCOL RESPONSIBILITY / STANDARDS RECONCILIATION
======================================================================

Before locking implementation, inspect and document CURRENT applicable standards/protocols and real Devin capabilities:
- current Model Context Protocol (MCP)
- current Agent2Agent (A2A) protocol
- current Devin API version(s)
- exact Devin Desktop agent/client protocol if exposed
- OpenTelemetry semantic conventions for transports used

Use standards before custom protocols. If a standard is unsupported by Devin today, preserve adapter boundary but do not force usage.

Responsibility model:
DEVIN API = provider-specific lifecycle/control: create/list/get session, send message, resume/wake, status, usage/ACU/session metrics and supported provider operations.
MCP = agent access to Architecture AI deterministic tools/resources/evidence/knowledge/work/simulation/build capabilities.
A2A = provider-neutral agent-to-agent collaboration/task exchange where supported.
ACP/Desktop protocol = evaluate only if CURRENT Devin Desktop exposes a concrete documented useful protocol; do not assume identity from acronym.

======================================================================
2. CONTROL PLANE VS CAPABILITY PLANE
======================================================================

CONTROL/EXECUTION PLANE: Architecture AI -> Agent Runtime -> Devin API/future A2A adapter -> lifecycle/work dispatch.
CAPABILITY/DATA PLANE: Agent -> MCP -> Architecture AI deterministic capabilities.

Provider control messages remain small. Evidence/context is retrieved by reference through MCP. Do not transport giant evidence through Devin API messages.

======================================================================
3. MCP ROLE / STATE RULE
======================================================================

Architecture AI is MCP Server; Devin is MCP Client where configured.

Expose bounded tools such as work.getPackage/claimPackage/submitResult; evidence.search/get/getContext; knowledge.getCanonical/getCandidates; graph operations; simulation; build diagnostics.

Do not expose unrestricted arbitrary shell execution as normal tool interface.

MCP transport/session state is NOT durable work state. Architecture AI remains authority for WorkItem, WorkPackage, AgentAssignment, AgentExecution, Saga, DecisionRequest, Result and Audit.

======================================================================
4. A2A ROLE / DISCOVERY READINESS
======================================================================

Evaluate A2A as provider-neutral collaboration protocol. Map Architecture AI WorkPackage -> A2A Task, agent message -> A2A Message, structured result -> A2A Artifact/task output where appropriate through adapters. Domain classes must not depend directly on A2A SDK.

Prepare provider-neutral AgentDescriptor containing agentId/provider/name/version/capabilities/supportedProtocols/content types/availability/limits/metadata. Where A2A Agent Card/discovery semantics apply, map via adapter rather than invent incompatible discovery.

Prepare capabilities such as ARCHITECTURE_REASONING, KNOWLEDGE_RECONCILIATION, CODE_IMPLEMENTATION, BUILD_DIAGNOSTICS, SIMULATION_ANALYSIS, DOCUMENT_ANALYSIS, SECURITY_ANALYSIS. Architecture AI must eventually answer which available agent can perform a WorkPackage; do not hard-code all work to Devin.

======================================================================
5. AGENT RUNTIME ABSTRACTIONS / DEVIN ADAPTER
======================================================================

Create/refine interfaces equivalent to AgentExecutionProvider, AgentMessagingProvider, AgentCapabilityProvider, AgentTelemetryProvider, AgentDiscoveryProvider.

Initial adapters: DevinAgentExecutionProvider, DevinAgentMessagingProvider, DevinAgentTelemetryProvider. Future A2A adapter/provider implementations remain possible.

Do not create one giant DevinClient. Use bounded clients conceptually DevinSessionClient, DevinMessageClient, DevinUsageClient, DevinMetricsClient. Add enterprise clients only if current permissions support them.

Persist/document current permission baseline: available organization session/resource access, session metrics, ACUs/hours/categories, Playbooks/Knowledge; unavailable enterprise aggregate metrics/user management and other current 403 capabilities. Do not retry 403 as transient.

Authentication uses current supported credential mechanism with external config such as DEVIN_API_BASE_URL, DEVIN_ORG_ID, DEVIN_API_TOKEN. Never expose token, store it in Git or permanently depend on a human credential if governed service identity is available later.

======================================================================
6. DURABLE WORK / ASSIGNMENT / EXECUTION MODEL
======================================================================

Preserve/create:
KnowledgeWorkItem = bounded reasoning problem.
KnowledgeWorkPackage = optimized group of related WorkItems.
AgentAssignment = assignment of WorkPackage to provider/agent.
AgentExecution = one concrete execution attempt.
ProviderSessionBinding = external provider session/task reference.

Create versioned AgentAssignment with assignmentId, workPackageId, provider, AgentDescriptor ref, requiredCapabilities, priority, times/status/currentExecutionId/policyReference. States may include CREATED, READY, DISPATCHING, ASSIGNED, RUNNING, WAITING, COMPLETED, FAILED, CANCELLED, HUMAN_REQUIRED.

Create versioned AgentExecution with executionId, assignmentId, provider, providerSessionId/providerTaskId, started/lastActivity/completed times, status, attempt, usage/result refs, failureCode. One assignment may have multiple execution attempts.

ProviderSessionBinding holds external providerSessionId, assignmentId, times/status/reuseEligible/context/usage refs. Provider session ID is external reference, not canonical work identity.

======================================================================
7. SESSION MODEL / CONTEXT / CHECKPOINT
======================================================================

Create provider-neutral session types HUMAN_INTERACTIVE, AGENT_PROVIDER_SESSION, MCP_CLIENT_SESSION, BACKGROUND_SYSTEM, LAB_EXPERIMENT, SERVICE. Do not assume 1:1 with Devin session.

Create SessionContext/ContextProjection containing session ID, active assignment/work package, project/domain context, relevant evidence refs, recent decisions, allowed capabilities, context limits, created/expires times. Do not use entire historical chat transcript.

Context is projected from durable state by ContextProjectionPolicy: current WorkPackage, relevant evidence, accepted decisions, constraints, tools and required output schema. Prefer refs over raw content.

Create SessionCheckpoint for safe resume after suspension/restart/provider interruption/context expiration, containing checkpoint/session/assignment/execution refs, state ref, last completed step, pending action, context projection ref and time. Do not persist hidden model chain-of-thought.

Keep SESSION_EXPIRATION separate from WORK_EXPIRATION. Work remains READY/BLOCKED/WAITING/etc. when provider session expires.

======================================================================
8. SESSION REUSE / DISPATCH POLICY
======================================================================

Do not default 1 WorkPackage = 1 Devin session.

Create versioned SessionReusePolicy using signals such as same project/domain/capability, compatible context, session health/age/context size/current workload/reuse limits to decide REUSE_EXISTING, CREATE_NEW, RESUME_EXISTING, DO_NOT_REUSE.

Create AgentDispatchPolicy deciding provider, agent/capabilities, reuse/new session, priority, retry/fallback. Flow: WorkPackage READY -> capability match -> provider selection -> session reuse decision -> dispatch. Keep logic out of controller/client code.

For Devin: if compatible session exists, send bounded control message; else create/start session. Example: “Architecture AI WorkPackage KWP-X is ready. Use Architecture AI MCP capabilities. Claim and execute according to contract.” Do not embed full context/evidence.

======================================================================
9. CLAIM / RESULT / VALIDATION
======================================================================

Agent claims work through Architecture AI MCP, e.g. work.claimPackage(workPackageId), with concurrency-safe durable outcomes CLAIMED/ALREADY_CLAIMED/NOT_READY/EXPIRED/NOT_AUTHORIZED.

Completion submitted through structured work.submitResult. WorkResult may include workPackageId/executionId/resultStatus/resolution/confidence/supporting and rejected evidence refs/reasoningSummary/recommendedActions/requiresHumanApproval/newSignals/providerMetadataReference. Do not store hidden chain-of-thought.

Provider result does not become canonical automatically. Validate schema, policy and evidence -> accepted/partial/rejected/human-required/follow-up. Provider session end does NOT imply WorkPackage completion; semantic completion comes from validated WorkResult or governed failure/cancellation.

======================================================================
10. AGENT WORK SAGA / HUMAN DECISION
======================================================================

Model long-running execution through shared Saga platform: READY -> DISPATCHING -> SESSION_BOUND -> AGENT_RUNNING -> RESULT_RECEIVED -> VALIDATING -> COMPLETED/HUMAN_REQUIRED/RETRY_REQUIRED/FAILED. Persist saga state.

Agent may pause for human input: AGENT_RUNNING -> DecisionRequired -> WAITING_FOR_HUMAN -> Attention Platform -> Windows + Dashboard -> DecisionResponse -> Architecture AI -> provider message/resume -> AGENT_RUNNING. Do not lose decision if popup disappears.

Reuse Attention/Notification decision model where available. DecisionRequest contains decisionId/question/contextSummary/evidence refs/options/deadline/timeout policy/related work/execution/saga. Important decisions must not live as untracked chat text.

Generate AttentionItems only for valuable lifecycle situations: long-running completion, decision required, blocked agent, repeated provider failure, manual intervention. Not every status/tool call.

======================================================================
11. AGENT TELEMETRY / DEVIN METRICS
======================================================================

Create provider-neutral AgentObservation with specializations AgentSessionObservation, AgentUsageObservation, AgentExecutionObservation, AgentToolObservation. Normalize provider data before Micrometer/OTel; do not map raw Devin JSON directly to metrics.

Use accessible Devin metrics such as session usage, ACUs, hours and categories. Distinguish PROVIDER_OBSERVED from ARCHITECTURE_AI_OBSERVED.

Provider observed: ACU usage, provider session state/duration/category.
AAI observed: WorkPackage, MCP calls, tool durations, evidence retrieval, result status, decision waits.

Correlate providerSessionId, assignmentId, executionId, workPackageId, traceId, correlationId, sagaId, but never use high-cardinality IDs as metric labels.

Instrument with current OTel/Micrometer. Devin REST uses HTTP semantic conventions; MCP uses applicable RPC/JSON-RPC conventions; future A2A uses applicable standard semantics. Custom bounded attrs may include aai.agent.provider/operation/capability, aai.work.type, aai.execution.status.

Metrics may include assignments/executions created/completed/failed, execution/dispatch durations, session reuse, usage units, human-wait duration and provider errors with bounded provider/status/capability/work type/mode dimensions.

Persist useful provider usage observations without unnecessary conversation content.

======================================================================
12. OBSERVATION DATA ROAD / SIMULATION READINESS
======================================================================

Integrate: Devin API/MCP observations -> AgentObservation -> Micrometer/OpenTelemetry -> local Collector -> normalized observations -> ObservationSnapshot -> LAB/simulation. Do not create a second telemetry pipeline.

Register features AGENT_WORK_ARRIVAL_RATE, AGENT_EXECUTION_DURATION, AGENT_SESSION_DURATION, AGENT_SESSION_REUSE_RATE, AGENT_USAGE_DISTRIBUTION, MCP_CALLS_PER_EXECUTION, MCP_TOOL_DURATION, MCP_FAILURE_RATE, HUMAN_WAIT_DURATION, DECISION_RESPONSE_TIME, WORK_COMPLETION_RATE, WORK_FAILURE_RATE.

Prepare to answer using real observations: WorkPackage arrival/service rate, agent throughput, session reuse effect, P50/P95 durations, backlog causes, ACU distribution by work type, human wait, dominant MCP capability time. Do not invent numbers.

======================================================================
13. AUDIT / SECURITY / RESILIENCE
======================================================================

Audit governed manual dispatch/cancellation/human decision/retry/provider change/result approval-rejection. Do not audit every polling request. Preserve actor chain HUMAN -> Architecture AI -> Devin -> MCP -> Architecture AI where relevant.

Use least-privilege provider credentials. Never expose tokens/cookies/Authorization headers/session secrets or scrape undocumented Desktop auth data. Only supported APIs/protocols.

Classify provider failures: transient network/HTTP, rate limit, auth failure, authorization failure, provider unavailable, session not found, invalid request, permanent rejection. Do not retry 401/403 indefinitely. Use bounded timeouts/backoff/retry and circuit breaker only if justified by current framework.

======================================================================
14. POLLING / RECONCILIATION / STALE EXECUTION
======================================================================

Investigate current Devin support for webhooks/events/callbacks/polling/updated-since filters. If no event mechanism, use bounded polling; do not poll entire history aggressively.

Provider polling is reconciliation; MCP WorkResult is semantic completion mechanism.

Create periodic reconciliation comparing AAI AgentExecution with provider session state: missing/suspended/completed/usage changed/stale. Reconciliation must not silently overwrite canonical Work state; generate signal/warning/recovery action.

Detect stale execution from AGENT_RUNNING + no AAI activity + unchanged provider state + stale threshold. Possible action reconcile/message/wake/retry/human attention. Do not create duplicate sessions without policy.

======================================================================
15. AGENT CONTROL MESSAGE / NO GIANT PROMPTS
======================================================================

Create provider-neutral AgentControlMessage with messageId/executionId/type/contentSummary/workReference/requiredAction/createdAt. Types START_WORK, RESUME_WORK, HUMAN_DECISION_AVAILABLE, RETRY_WORK, CANCEL_WORK, STATUS_REQUEST.

Provider control message should not carry full evidence; preferred “WorkPackage KWP-X is ready. Claim through Architecture AI MCP.” Then MCP returns structured package/evidence on demand. This preserves cost/context limits/traceability/reuse/provider independence.

======================================================================
16. PROTOCOL CAPABILITY MATRIX / DESKTOP DISCOVERY
======================================================================

Create machine-readable provider/protocol capability matrix for CREATE_EXECUTION, SEND_MESSAGE, RESUME, CANCEL, STATUS, USAGE, DISCOVERY, TASK_EXCHANGE, TOOL_ACCESS, STREAMING, CALLBACKS, AUTH_TYPE across DEVIN_API, MCP, A2A if supported and exact Desktop protocol if discovered.

Inspect CURRENT installed Devin Desktop safely for documented local API, ACP endpoint, A2A endpoint, MCP surfaces, stdio integration, socket/websocket or other documented integration. Do NOT reverse engineer undocumented IPC or scrape secrets.

Do NOT assume Spring Boot should communicate with Devin Desktop via stdio. Use stdio only if documented supported external-client protocol. Otherwise Architecture AI -> Devin API and Devin -> Architecture AI MCP remain preferred baseline.

======================================================================
17. FUTURE MULTI-AGENT / A2A
======================================================================

Runtime must support future multiple providers: Devin, future A2A agent, local/specialist agent. Do not introduce them now; prepare provider-neutral contracts.

Future conceptual flow Architecture AI Coordinator -> A2A task -> Specialist Agent -> A2A result/artifact; specialist may use MCP tools without exposing internal reasoning. AAI WorkPackage remains canonical.

Prepare but do not overimplement policies SINGLE_AGENT, PARALLEL_SPECIALISTS, PARALLEL_COMPARE, PRIMARY_WITH_FALLBACK. Parallel results need explicit synthesis/validation and are not default.

======================================================================
18. DASHBOARD / HEALTH / LOCAL-FIRST
======================================================================

Extend existing operational APIs/dashboard progressively for Active Agent Executions, Recent Executions, Active Provider Sessions, Resumable Sessions, Waiting for Human, Stale/Failed Executions, relationships WorkPackage -> Assignment -> Execution -> ProviderSession and usage/last activity/session reuse/human wait/result state. Do not expose raw provider conversation content.

Define session/execution health HEALTHY, IDLE, WAITING, STALE, DEGRADED, FAILED, UNKNOWN; HTTP endpoint response alone does not imply healthy.

Initial topology is local: Architecture AI Spring Boot -> approved HTTPS Devin API -> Devin session; Devin -> MCP -> local Architecture AI MCP Server; observed by OTel -> local Collector. Do not depend on OpenShift.

Future SERVICE uses same contracts with provider APIs/A2A, governed OpenShift secrets and central telemetry topology.

======================================================================
19. PERSISTENCE / IDEMPOTENCY / CONCURRENCY
======================================================================

Use current durable DB/migrations for AAI_AGENT_ASSIGNMENT, AAI_AGENT_EXECUTION, AAI_PROVIDER_SESSION_BINDING, AAI_SESSION_CONTEXT, AAI_SESSION_CHECKPOINT, AAI_AGENT_OBSERVATION, AAI_AGENT_CONTROL_MESSAGE or equivalent without duplicating Work/Saga/Event/Audit state.

Dispatch/provider messaging must be idempotent where possible; protect against duplicate dispatch/control/provider result/WorkResult with operation IDs/idempotency keys when supported.

Ensure one WorkPackage cannot accidentally be actively executed by multiple providers unless deliberate parallel policy exists.

======================================================================
20. COST / CONTEXT / HEARTBEAT
======================================================================

Use accessible Devin usage as normalized observations; do not hard-code vendor pricing. Track provider, usage units, execution/work type, duration and prepare later LAB cost-policy evaluation.

Introduce execution context budget: maxEvidenceUnits, maxContextBytes, maxToolCalls, maxContextExpansions. Context expansion happens through MCP on demand.

Infer activity from provider state observations, MCP calls, WorkResult activity and control messages. Do not invent custom heartbeat if existing signals suffice.

======================================================================
21. TESTS / REAL DEVIN VALIDATION
======================================================================

Validate at least:
A. new work/new session -> dispatch -> Devin -> MCP claim -> WorkResult -> validation -> complete.
B. compatible session reuse.
C. lost/expired provider session -> work not lost, reconcile/retry/new-session policy.
D. human decision -> saga wait -> attention -> response -> provider resume -> continue.
E. duplicate dispatch -> one active execution unless explicit parallel policy.
F. MCP unavailable -> provider session blocked/degraded, no false completion.
G. provider API unavailable -> durable assignment/retry/reconciliation.
H. provider 403 -> permanent authorization classification, no retry storm.
I. WorkResult before provider session completion -> work may complete after validation independently.
J. provider session completes without WorkResult -> work not auto-complete; reconciliation signal.

Use CURRENT working Devin API access for safe real validation of allowed session list/get, metrics, provider state, usage/ACU, message/control and safe session creation if necessary. Sanitize outputs and record exact endpoint/status/permission/schema summary.

======================================================================
22. REPORTS / CONTRACTS / ARCHITECTURE CHECK
======================================================================

Create AGENT_RUNTIME_PROTOCOL_BASELINE.md, AGENT_SESSION_WORK_MODEL.md and DEVIN_AGENT_RUNTIME_INTEGRATION.md covering protocol responsibility, MCP/A2A/Devin/Desktop findings, security/auth, capability matrix, session/work/assignment/execution/context/checkpoint/reuse/dispatch/saga/human decision, current permissions/endpoints/usage/error policy/tests/gaps.

Create/version schemas for AgentDescriptor, AgentAssignment, AgentExecution, ProviderSessionBinding, SessionContext, SessionCheckpoint, AgentControlMessage, AgentObservation.

Extend architecture validation: Work domain must not depend on Devin API classes; MCP classes do not own durable Work state; provider adapters stay outside core; A2A SDK classes do not leak into domain; session classes do not become canonical work state; no provider token in tracked files.

Use existing Gradle harness; targeted agentRuntimeTest/devinAdapterTest/protocolContractTest are acceptable. Normal build must not create live Devin sessions unnecessarily.

======================================================================
23. CROSS-PLANE COORDINATION / DO NOT OVERIMPLEMENT
======================================================================

Do not create competing OTel/event/saga/notification/audit/simulation stacks. Register requirements and reuse shared platform abstractions.

Potential domain events: AgentAssignmentCreated, AgentExecutionStarted, ProviderSessionBound, AgentExecutionWaitingForHuman, AgentResultReceived, AgentExecutionCompleted, AgentExecutionFailed, AgentExecutionStale.

AgentWorkSaga is one saga type in shared saga platform. Attention platform owns notifications/decisions; Audit Plane owns audit; LAB owns simulation.

Do NOT build a complete multi-agent scheduler, proprietary agent protocol, MCP replacement, A2A replacement, custom LLM chat platform, enterprise Devin administration, distributed OpenShift runtime or dozens of providers. Build correct skeleton/contracts/adapters and one real Devin path.

======================================================================
24. DEFINITION OF DONE
======================================================================

Demonstrate end-to-end local path:
Architecture AI WorkPackage -> AgentAssignment -> AgentDispatchPolicy -> Devin provider -> create/reuse provider session -> bounded control message -> Devin -> Architecture AI MCP -> claim WorkPackage -> deterministic tools -> structured WorkResult -> validation -> Work/Saga completion.

Demonstrate human path: Agent execution -> DecisionRequired -> Saga WAITING_FOR_HUMAN -> Attention Platform -> DecisionResponse -> provider resume/message -> execution continues.

Demonstrate provider session dies -> durable work recoverable; OpenTelemetry captures execution without becoming critical dependency.

FINAL PRINCIPLES:
1. SESSION IS EPHEMERAL.
2. WORK IS DURABLE.
3. WORKPACKAGE IS NOT A DEVIN SESSION.
4. ARCHITECTURE AI OWNS WORK STATE.
5. DEVIN API IS PROVIDER-SPECIFIC CONTROL.
6. MCP IS TOOL/RESOURCE/CAPABILITY PLANE.
7. A2A IS FUTURE AGENT-COLLABORATION STANDARD WHERE APPLICABLE.
8. DO NOT CONFUSE MCP WITH A2A.
9. DO NOT ASSUME ACP/STDIO WITHOUT REAL DOCUMENTED SUPPORT.
10. PROVIDER CONTROL MESSAGES ARE SMALL.
11. EVIDENCE/CONTEXT IS RETRIEVED ON DEMAND THROUGH MCP.
12. AGENT RESULTS ARE STRUCTURED.
13. PROVIDER SESSION COMPLETION IS NOT WORK COMPLETION.
14. HUMAN DECISIONS ARE DURABLE DOMAIN OBJECTS.
15. SAGAS COORDINATE LONG-RUNNING AGENT WORK.
16. NOTIFICATIONS SURFACE ATTENTION; THEY DO NOT OWN WORK STATE.
17. AGENT TELEMETRY IS NORMALIZED BEFORE OPEN TELEMETRY.
18. PROVIDER METRICS AND AAI OBSERVATIONS ARE DISTINCT.
19. USE OPEN STANDARDS BEFORE PROPRIETARY PROTOCOLS.
20. KEEP PROVIDER SDK/API CLASSES OUT OF CORE DOMAIN.
21. MAKE DEVIN THE FIRST PROVIDER, NOT THE ARCHITECTURE.
22. LOCAL FIRST, OPENSHIFT READY.
23. DO NOT REINVENT THE WHEEL.
24. IMPLEMENT ONE REAL, TESTED DEVIN PATH BEFORE ADDING MORE PROVIDERS.

# Banking Integration Evolution Roadmap

Status: ACTIVE_STRATEGIC_ROADMAP
Direction revision: DIRECTION-0009

## Purpose

Define how Architecture AI integrates with the existing bank first, learns the real terrain from evidence, and then improves it incrementally through measurable technical objectives across reads, channels, identity/access, risk and operational workloads.

## Governing strategy

INTEGRATE FIRST
-> UNDERSTAND CURRENT REALITY
-> MEASURE
-> MODEL SEMANTICS / AUTHORITY / FRESHNESS / IDENTITY
-> IMPROVE LOCALLY
-> PROVE WITH LAB/POC
-> GOVERNED PROMOTION
-> EXPAND BY REUSABLE CAPABILITY
-> EVOLVE CUSTOMER EXPERIENCE.

Do not redesign the bank from theory.

## Horizon 0 — Context acquisition

Learn infrastructure/platform constraints, API Connect/API catalog, Gravity Plus contracts, current implementations, Santander Framework, Glo/archetypes, Exadata, Redis, core connectors, security/classification/governance, current customer login/risk/binding mechanisms, Control-M workloads, delivery/operations and channel behavior.

Unknowns remain explicit.

## Horizon 1 — Customer Position proof / BI-0001

Prove code/contract/integration discovery, field/source lineage, semantic-element classification, freshness/security, Redis/read projections, optimized Exadata/satellite retrieval, shadow/canary comparison and measurable correctness/performance.

## Horizon 2 — Reusable Gravity Plus semantic read capability

Expand toward shared semantic data registry, reusable Redis projections, catalog policy, versioned retrieval/query plans, API mappings, freshness/invalidation policy, performance telemetry and source-authority graph.

Avoid one custom cache design per API.

## Horizon 3 — Web BFF proof / BI-0003

Browser / Angular
-> Web BFF
-> Gravity Plus
-> optimized semantic/read capabilities
-> bank authority.

Prove channel-specific OpenAPI, secure server-authoritative session, reduced coarse calls, progressive rendering/time-to-useful-content and maintainable modular Angular boundaries.

## Horizon 4 — Application edge / BI-0004

Compare IBM API Connect with Spring Cloud Gateway/application-edge responsibilities using real PKM/security/tracing/governance evidence.

Retain Spring Cloud Gateway only for measurable application-level programmability such as bounded routing/canary/fallback/correlation/token enforcement that should not live in API Connect or the BFF.

## Horizon 5 — Customer IAM and adaptive access / BI-0005

Prove a dedicated customer identity/access plane using synthetic LAB customers first.

Target:
- Java-first mature IdP candidate;
- web BFF opaque session;
- OAuth/OIDC resource access;
- scoped API authorization;
- measured JWT/reference-token behavior;
- asynchronous risk decisions;
- deterministic gateway/BFF ALLOW/DENY/STEP_UP enforcement;
- WebAuthn/passkey/step-up evaluation;
- future migration away from normal core password-validation transactions.

Real credential migration remains gated by Issue #8 evidence/security approval.

## Horizon 6 — Explicit CQRS projection consistency

Apply `work/BANKING_CQRS_PROJECTION_CONSISTENCY_MODEL.md` across BI-0001/BI-0003 rather than creating a parallel infrastructure program.

Target hierarchy:
core authority
-> Exadata/read model where evidenced
-> Redis hot semantic projection
-> BFF/session projection
-> web/native projection.

Each element has freshness/version/reconciliation semantics. Highly volatile data such as balances remains live-source unless an evidenced propagation contract makes caching safe.

## Horizon 7 — Change-aware server synchronization

Improve TTL-only behavior through source events/CDC/version markers/reconciliation where available. Build idempotent projectors, checkpoints, replay and drift detection.

Do not assume all writes are observable from one gateway.

## Horizon 8 — Channel-specific incremental synchronization / BI-0002

Refresh only changed/stale semantic elements across web and later native/mobile clients. Preserve banking source authority and recoverability after missed events or local-state loss.

## Horizon 9 — Protocol/channel optimization

Evaluate REST/HTTP evolution, gRPC/gRPC-Web, SSE/WebSocket, HTTP/3 or other supported transports only by measured channel/security/platform evidence.

Reactive UX is not a mandate for one protocol.

## Horizon 10 — Data-informed experience optimization

Use governed UX/telemetry/risk evidence to tune preload vs on-demand, local retention, refresh priority, component independence and protocol choices.

## Parallel operational modernization — Control-M / jobs

In parallel, inventory Control-M mallas and classify them as KEEP_CONTROL_M, OPENSHIFT_JOB_OR_CRONJOB, SPRING_BATCH_JOB, SPRING_CLOUD_TASK_DATA_FLOW, EVENT_DRIVEN_REPLACEMENT, WORKFLOW_SCHEDULER_POC or UNKNOWN.

Do not block customer-facing POCs on the full Control-M modernization program.

## Architecture AI knowledge graph

Maintain relationships among:

Customer objective
<-> channel task
<-> component
<-> BFF contract
<-> OAuth client/scope/session/risk state
<-> Gravity Plus contract
<-> semantic data element
<-> source/integration
<-> freshness/version
<-> Redis/BFF/channel projection
<-> query/transaction/event
<-> runtime metric
<-> architecture decision
<-> backlog/change
<-> Arc42/auditable projection when required.

## Auditability

Internal evolution remains traceable through Git, evidence, decisions, tests, telemetry and releases.

Arc42/PDF and other formal technical-design deliverables remain external/institutional audit projections and do not artificially block safe LAB work unless an applicable gate requires approval.

## Customer-first evaluation

Evaluate latency/time-to-useful-content, correctness/freshness, availability/resilience, core/DB transaction reduction, network/payload cost, operational complexity, security/compliance, risk-control effectiveness and implementation/rework cost.

The target is not simply faster APIs. The target is to execute only the necessary work, in the correct layer, at the correct time.

## No-invention rule

Whenever source, credential mechanism, risk rule, freshness requirement, security constraint, session/binding behavior, scheduler dependency or platform capability cannot be determined:

UNKNOWN
-> explain missing evidence
-> ResearchRequest/Blocker
-> continue unaffected work
-> reconcile when evidence arrives.

Prefer an incomplete truthful model over a complete invented model.
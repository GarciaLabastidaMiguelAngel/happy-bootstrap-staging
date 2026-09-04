# Banking Integration Evolution Roadmap

Status: ACTIVE_STRATEGIC_ROADMAP
Direction revision: DIRECTION-0008

## Purpose

Define how Architecture AI should integrate with the existing bank first, learn the real terrain from evidence, and then improve it incrementally through measurable technical objectives.

This roadmap separates immediate proof, reusable banking knowledge, channel-specific composition and longer-term incremental synchronization.

## Governing strategy

INTEGRATE FIRST
-> UNDERSTAND CURRENT REALITY
-> MEASURE
-> MODEL SEMANTICS / AUTHORITY / FRESHNESS
-> IMPROVE LOCALLY
-> PROVE WITH LAB/POC
-> GOVERNED PROMOTION
-> EXPAND BY REUSABLE CAPABILITY
-> EVOLVE CHANNEL EXPERIENCE.

Do not redesign the bank from theory.

## Horizon 0 — Context acquisition

Architecture AI learns:
- infrastructure/platform constraints;
- API Connect/API catalog;
- Gravity Plus contracts;
- current service implementations;
- Santander Framework conventions;
- Glo/institutional delivery archetypes when evidenced;
- Exadata schema/query patterns;
- Redis/platform availability;
- core/transactional connectors;
- security/classification/governance;
- deployment and operational constraints;
- current web/mobile channel behavior;
- process knowledge and human ownership.

Unknowns remain explicit.

## Horizon 1 — Customer Position proof

Use BI-0001 to demonstrate a full architecture loop on one difficult composition API.

Prove that the platform can:
- inspect code and contract;
- discover all integrations;
- construct field/source lineage;
- classify freshness and sensitivity;
- compare whole-response cache versus semantic-element cache;
- optimize Exadata and satellite reads;
- preserve current rules/framework;
- run shadow/canary evidence;
- produce performance and correctness results.

## Horizon 2 — Reusable Gravity Plus read capability

Expand semantic elements and source mappings across additional APIs.

Target outcome:
- shared canonical semantic data registry;
- reusable Redis projections;
- catalog-cache policy;
- versioned retrieval/query plans;
- API-to-semantic mappings;
- freshness/invalidation policy;
- performance telemetry;
- source authority/lineage graph.

Avoid one custom cache design per API.

## Horizon 3 — Web BFF proof

Use BI-0003 as the first concrete channel-specific implementation slice.

Target:

Browser / Angular
-> Web BFF
-> Gravity Plus APIs
-> optimized semantic/read capabilities
-> authoritative bank sources.

Goals:
- replicate the current web Customer Position experience;
- model browser/BFF session state safely;
- keep authentication authority server-side;
- expose channel-specific OpenAPI contracts rather than mirror every Gravity Plus endpoint;
- reduce coarse/repeated backend retrieval;
- measure time-to-useful-content;
- preserve the Gravity Plus compatibility layer;
- structure Angular for safe parallel development without forcing microfrontends prematurely.

BI-0003 should become a direct feeder into BI-0002 rather than waiting for the full mobile/channel horizon.

## Horizon 4 — Application-edge / Spring Cloud Gateway proof

Use BI-0004 to compare the existing IBM API Connect control/API-management plane with a programmable Spring Cloud Gateway/application-edge layer.

Goals:
- inspect/reuse any existing bank Spring Cloud Gateway baseline;
- preserve PKM/security/tracing conventions;
- determine which runtime responsibilities belong in Spring Cloud Gateway;
- determine which lifecycle/governance responsibilities remain in API Connect;
- avoid duplicated policy;
- test BFF routing/canary/fallback/correlation with measured overhead;
- retain the gateway only if its programmability/control value exceeds complexity/latency cost.

## Horizon 5 — Change-aware server synchronization

Improve from TTL-only behavior toward authoritative change-aware refresh where evidence allows:
- mutation impact mappings;
- source events;
- CDC;
- source version/change tokens;
- durable work/saga for multi-step synchronization.

Do not assume writes are observable from one gateway.

## Horizon 6 — Channel-specific incremental synchronization

Evaluate BI-0002 across web and later native/mobile channels.

Goal:
- secure device/channel projections;
- only refresh changed/stale elements;
- reduce repeated coarse API retrieval;
- preserve bank source authority;
- improve time-to-useful-content and user experience.

The Web BFF may provide an early synchronization facade for the browser before native/mobile transport decisions exist.

## Horizon 7 — Protocol/channel optimization

Research and POC protocol options according to actual channel and infrastructure support.

Candidates may include:
- REST/HTTP evolution;
- gRPC for suitable native/service communication;
- browser-compatible gRPC-Web where justified;
- server/bidirectional streaming mechanisms;
- HTTP/3 and other supported transports.

Protocol selection is an evidence-backed decision, not a strategic objective by itself.

## Horizon 8 — Data-informed experience optimization

Use governed UX/telemetry evidence to decide:
- preload vs on-demand;
- which customer components deserve proactive refresh;
- which data can remain local longer;
- what backend work is unnecessary;
- when BFF-side state adds value;
- whether microfrontend independence is justified;
- which protocol or event mechanisms improve user-visible outcomes.

## Architecture AI role

Architecture AI must continuously maintain the relationships among:

Customer objective
<-> channel task
<-> web/mobile component
<-> BFF/channel contract
<-> Gravity Plus API/contract
<-> semantic data element
<-> source/integration
<-> freshness
<-> security/classification
<-> browser/BFF/backend cache/read projection
<-> query/transaction
<-> runtime metric
<-> architecture decision
<-> backlog/change
<-> Arc42/auditable deliverable when externally required.

This graph is how the Director can answer complex questions without repeatedly rereading every raw source.

## Auditability distinction

Architecture AI internal evolution must remain fully traceable through Git, evidence, decisions, work, telemetry and release history.

Arc42/PDF and other formal technical-design deliverables are external auditable projections required for human/institutional processes. Their release lifecycle must not artificially block independent LAB discovery or safe platform development unless an applicable gate requires approval before execution.

## Customer-first direction

Bank integration choices should ultimately be evaluated against measurable customer and enterprise outcomes, including:
- latency/time-to-useful-content;
- correctness/freshness;
- availability/resilience;
- infrastructure/DB load;
- network/payload cost;
- operational complexity;
- security/compliance;
- implementation/rework cost.

The system should progressively move work to the most appropriate layer rather than making every customer action pay the full cost of all backend concerns synchronously.

## No-invention rule

Whenever Architecture AI cannot determine a source, rule, freshness requirement, security constraint, session/binding behavior or platform capability:

`UNKNOWN`
-> explain missing evidence
-> create ResearchRequest/Blocker
-> continue unaffected work
-> reconcile when evidence arrives.

The platform must prefer an incomplete but truthful model over a complete invented model.
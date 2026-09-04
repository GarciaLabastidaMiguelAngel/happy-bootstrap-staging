# Banking Integration Evolution Roadmap

Status: ACTIVE_STRATEGIC_ROADMAP
Direction revision: DIRECTION-0006

## Purpose

Define how Architecture AI should integrate with the existing bank first, learn the real terrain from evidence, and then improve it incrementally through measurable technical objectives.

This roadmap separates immediate proof, reusable banking knowledge, and longer-term digital-channel transformation.

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
- Exadata schema/query patterns;
- Redis/platform availability;
- core/transactional connectors;
- security/classification/governance;
- deployment and operational constraints;
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

## Horizon 3 — Change-aware server synchronization

Improve from TTL-only behavior toward authoritative change-aware refresh where evidence allows:
- mutation impact mappings;
- source events;
- CDC;
- source version/change tokens;
- durable work/saga for multi-step synchronization.

Do not assume writes are observable from one gateway.

## Horizon 4 — Channel-specific incremental synchronization

Evaluate BI-0002 for digital channels.

Goal:
- secure device/channel projections;
- only refresh changed/stale elements;
- reduce repeated coarse API retrieval;
- preserve bank source authority;
- improve time-to-useful-content and user experience.

## Horizon 5 — Protocol/channel optimization

Research and POC protocol options according to actual channel and infrastructure support.

Candidates may include:
- REST/HTTP evolution;
- gRPC for suitable native/service communication;
- browser-compatible gRPC-Web where justified;
- server/bidirectional streaming mechanisms;
- HTTP/3 and other supported transports.

Protocol selection is an evidence-backed decision, not a strategic objective by itself.

## Horizon 6 — Data-informed experience optimization

Use governed UX/telemetry evidence to decide:
- preload vs on-demand;
- which customer components deserve proactive refresh;
- which data can remain local longer;
- what backend work is unnecessary;
- whether new BFF/channel capabilities are justified.

## Architecture AI role

Architecture AI must continuously maintain the relationships among:

Customer objective
<-> channel task
<-> API/contract
<-> semantic data element
<-> source/integration
<-> freshness
<-> security/classification
<-> cache/read projection
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

## No-invention rule

Whenever Architecture AI cannot determine a source, rule, freshness requirement, security constraint or platform capability:

`UNKNOWN`
-> explain missing evidence
-> create ResearchRequest/Blocker
-> continue unaffected work
-> reconcile when evidence arrives.

The platform must prefer an incomplete but truthful model over a complete invented model.
# Banking CQRS Projection and Consistency Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0009

## Purpose

Define how Architecture AI should reduce avoidable core-banking reads by treating Exadata, Redis, BFF/session state and channel state as governed read projections with explicit authority, freshness, lineage and consistency semantics.

## Core principle

CQRS here is a logical separation of authoritative writes from optimized reads. It does NOT require one database per model or a new microservice for every projection.

Candidate hierarchy:

CORE / AUTHORITATIVE TRANSACTION SYSTEM
-> authoritative change
-> read-side propagation
-> Exadata / enterprise read model where evidence confirms
-> Redis hot semantic projection
-> BFF channel projection
-> browser/native client projection.

Every downstream copy is a projection/cache unless explicitly evidenced as authoritative.

## Data element governance

For each semantic data element capture:
- semantic ID;
- authority/source;
- current source operation/query/transaction;
- classification;
- volatility;
- freshness budget;
- version/change marker where available;
- projection locations;
- invalidation/update mechanism;
- reconciliation rule;
- consumer views/components;
- runtime metrics.

## Balance and highly volatile data

Do not assume balances are safe to cache merely because Redis is fast.

A balance may use Redis only if the product/business/security requirements define an acceptable freshness contract and the propagation/reconciliation mechanism demonstrates that contract.

Possible strategies, in preferred evidence order:
1. authoritative source event / CDC;
2. source change/version marker or change log;
3. bounded deterministic refresh/reconciliation;
4. TTL as an explicitly weaker fallback.

If no mechanism can establish acceptable freshness, the semantic element remains LIVE_SOURCE_REQUIRED.

## Projection event flow

Authoritative change
-> normalized semantic change event / change record
-> idempotent projection handler
-> update Exadata/read model as applicable
-> update Redis projection
-> update BFF/channel projection state
-> notify online clients when useful
-> preserve checkpoint/version/evidence.

The exact source event mechanism is UNKNOWN until the bank's available CDC/event capabilities are evidenced.

## Online channel synchronization

Online web/mobile clients may receive semantic delta notifications through an approved transport such as SSE/WebSocket/other supported mechanism.

Client update signal should identify a resource/semantic group and version/freshness state rather than requiring a complete Customer Position refresh.

If a client misses events or reconnects:
client checkpoint/version
-> delta-since if supported
or
-> deterministic projection resynchronization.

Never rely on uninterrupted event delivery as the only correctness mechanism.

## Projection correctness

Use:
- idempotent consumers/projectors;
- monotonic/version checks where available;
- duplicate detection;
- checkpoint/offset state;
- replay capability;
- reconciliation jobs;
- stale/unknown state visibility;
- source/projection comparison sampling where policy permits.

Do not claim exactly-once semantics without an evidenced end-to-end mechanism.

## Query optimization rule

Semantic granularity does not mean one SQL round trip per field.

Required fields
-> semantic element cache/freshness evaluation
-> missing elements
-> group by source/transaction/query compatibility
-> execute the minimum efficient source operations
-> compose result.

Query plans should be governed/versioned and tested rather than arbitrary SQL generated dynamically in production.

## Frontend/view consistency

A screen/view should declare the semantic elements it needs and the freshness class of each.

UI components must expose deterministic state such as:
- READY;
- REFRESHING;
- STALE_ALLOWED;
- STALE_BLOCKED;
- UNAVAILABLE;
- STEP_UP_REQUIRED where access policy changes.

The UI should refresh only affected components/elements when possible.

## Reconciliation

Projection reconciliation is separate from customer-facing request handling.

Candidate reconciliation job:
- identify projection groups due for verification;
- compare source version/watermark or sampled values;
- repair stale/missing projections;
- emit evidence/metrics;
- create issue when systemic drift exceeds policy.

This job model feeds the Job Orchestration evolution and may initially run through existing Control-M or OpenShift scheduling depending institutional capability.

## Goal

Create a measurable CQRS/read-projection road in which the banking core performs authoritative work, while Exadata/Redis/BFF/channel projections serve most read experience with explicit freshness and recoverable consistency instead of repeated coarse API/core transactions.
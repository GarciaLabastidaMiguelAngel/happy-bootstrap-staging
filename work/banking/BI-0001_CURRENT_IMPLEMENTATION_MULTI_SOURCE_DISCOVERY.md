# BI-0001 — Customer Position Current Implementation and Multi-Source Discovery

Status: ACTIVE_DISCOVERY_MODEL
Direction revision: DIRECTION-0006
Parent initiative: `BI-0001_GRAVITY_PLUS_READ_ACCELERATION_STRATEGY.md`

## Purpose

Refine BI-0001 so the current Customer Position implementation becomes primary evidence, not merely the OpenAPI contract or Exadata query.

Customer Position is expected to be a complex composition API. Architecture AI must discover every real integration and data source before deciding what can be cached, refreshed, queried, reused or replaced.

## Governing rule

DO NOT MODEL CUSTOMER POSITION AS `API -> EXADATA` UNLESS THE IMPLEMENTATION PROVES THAT IS THE COMPLETE CURRENT BEHAVIOR.

The current implementation may include:
- Exadata queries;
- other internal APIs/services;
- core/transactional connectors;
- catalogs/reference lookups;
- transformations/mappings;
- Santander Framework conventions;
- existing warm-up/preload/cache logic;
- security/context propagation;
- error/fallback rules.

Each integration must be discovered and mapped.

## Evidence priority for this POC

1. Current Customer Position implementation/repository.
2. Current OpenAPI/Swagger contract.
3. Santander Framework/project conventions actually used by the implementation.
4. API Connect route/product information.
5. Existing preload/warm-up gateway/cache implementation.
6. Existing SQL/query and Exadata schema evidence.
7. Satellite API/service contracts and connector definitions.
8. Transactional/core access definitions where relevant.
9. Runtime traces/metrics/log evidence when available.
10. Human/process knowledge only as supporting evidence until verified.

## Required current-state model

Architecture AI must build a field-level lineage map:

`API response field`
-> `canonical semantic element`
-> `transformation/business rule`
-> `current source/integration`
-> `source operation/query/transaction`
-> `freshness semantics`
-> `sensitivity`
-> `failure behavior`
-> `cache eligibility`
-> `candidate optimized retrieval path`.

If any link cannot be evidenced, mark it `UNKNOWN` and state exactly what evidence is missing.

## Integration inventory

For every dependency capture at least:
- integrationId;
- type: EXADATA_QUERY / API / TRANSACTION_CONNECTOR / CATALOG / LOCAL_COMPUTATION / OTHER;
- contract/operation;
- fields supplied;
- latency and call count if measurable;
- availability/failure behavior;
- authentication/security context;
- freshness/update semantics;
- retry/circuit-breaker behavior if present;
- existing framework abstraction;
- observability evidence;
- optimization candidate.

## Santander Framework constraint

The POC is not permission to replace the current bank framework or project structure.

Architecture AI must first identify what Santander Framework already provides, including where applicable:
- dependency/bootstrap conventions;
- API/controller conventions;
- connectors;
- security/context propagation;
- error handling;
- observability;
- resilience;
- deployment conventions.

Reuse supported framework capabilities unless a verified limitation is material to the POC. Any deviation requires evidence and rationale.

## Existing preload/warm-up behavior

The current warm-up/cache path is a critical baseline because it may already demonstrate the performance value of caching while also exposing correctness risks.

Architecture AI must determine:
- what object/response is cached;
- cache key;
- TTL/freshness policy;
- whether balances/volatile data are included;
- whether cache is refreshed on login or another trigger;
- whether writes/events invalidate it;
- stale-data incidents or known risks;
- measured latency benefit;
- operational cost.

The new POC must compare whole-response caching versus semantic data-element caching.

## Query refinement rule

The target is data-element-aware retrieval, but NOT uncontrolled query-per-field behavior.

Architecture AI may identify that a single field can be refreshed independently only when the schema/query plan makes that efficient.

Preferred order:
1. determine missing/stale semantic elements;
2. group them by source and compatible query/transaction;
3. use the smallest efficient approved projection;
4. avoid repeated joins and unnecessary columns;
5. benchmark against the current query.

A one-column query is not automatically better than a wider query. Query shape must be justified by Exadata plans, selectivity, joins, round trips and workload.

## Architecture options to compare

Do not preselect gateway or sidecar.

### Option A — improve current Customer Position implementation

`API Connect -> Customer Position improved implementation -> Redis / sources`

Advantages candidate:
- preserves current route/topology;
- maximum reuse of Santander Framework/business transformations;
- no extra network hop.

### Option B — dedicated read-acceleration/composition component

`API Connect -> Customer Position acceleration/composition -> Redis / current sources`

Use when isolation/progressive replacement is valuable and can preserve all current rules.

### Option C — Spring Cloud Gateway plus acceleration component

Use only if progressive routing, canary, fallback or cross-route control provides measurable value beyond API Connect.

### Option D — sidecar

Use only if the capability is genuinely cross-cutting and independently lifecycle-managed. Data composition/domain caching is not assumed to be a sidecar concern.

## Completion condition for discovery

Do not begin the final POC design until Architecture AI can produce:
- current integration map;
- field-to-source lineage;
- known/unknown matrix;
- current whole-cache behavior;
- current query/transaction inventory;
- Santander Framework reuse map;
- architecture option comparison;
- measurement plan.

The platform may continue unaffected research/work in parallel while unknowns remain, but must not fabricate missing source semantics.
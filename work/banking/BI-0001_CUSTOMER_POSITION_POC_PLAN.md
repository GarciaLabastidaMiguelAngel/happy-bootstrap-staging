# BI-0001 — Customer Position Read Acceleration POC Plan

Status: READY_FOR_DISCOVERY_AND_PLANNING
Direction revision: DIRECTION-0006
Parent initiative: `BI-0001_GRAVITY_PLUS_READ_ACCELERATION_STRATEGY.md`
Discovery model: `BI-0001_CURRENT_IMPLEMENTATION_MULTI_SOURCE_DISCOVERY.md`

## Objective

Use Customer Position as the first banking-domain proof that Architecture AI can:

- understand the current implementation, not only the API contract;
- identify every real source/integration used to compose the response;
- preserve Santander Framework conventions, current rules and transformations unless evidence justifies a change;
- classify response data by semantics, volatility, sensitivity, source and retrieval mechanism;
- design reusable shared cache projections instead of whole-response/API-specific caches;
- minimize unnecessary Exadata and satellite calls while preserving correctness;
- select query/transaction/API retrieval per data element from evidence;
- compare legacy and accelerated behavior safely;
- produce measurable evidence before expanding to other Gravity Plus APIs.

## Non-negotiable rule

If the repository, schema, contract or runtime evidence does not prove where a field comes from or how fresh it must be, mark it `UNKNOWN`.

Do not infer source semantics merely because a field name appears obvious.

## Inputs required

Preferred evidence inputs, in this order:

1. Current Customer Position implementation/repository or bounded source snapshot.
2. Current Customer Position OpenAPI/Swagger contract.
3. Santander Framework/project structure and reusable capabilities actually used by the service.
4. API Connect catalog/product/route information for the endpoint.
5. Existing preload/warm-up gateway/cache implementation and its measured behavior.
6. Inventory/contracts for satellite APIs/services and current transactional/core connectors.
7. Current Exadata SQL/query mapping for this endpoint.
8. Relevant Exadata schema/tables/views/materialized views and query-plan/performance evidence.
9. Redis platform/version/capability information.
10. Existing bank data-classification/security constraints.
11. Current latency/load/DB-call/external-call baseline.

Missing items become explicit ResearchRequest/Blocker states; do not invent them.

## POC phases

### P0 — Current implementation discovery

Inspect the actual Customer Position code first.

Produce:
- module/package structure;
- Santander Framework reuse map;
- controller/service/integration boundaries;
- transformations/business-rule path;
- integration inventory;
- Exadata access path;
- satellite API/service calls;
- transactional/core connector calls;
- catalog lookups;
- error/fallback behavior;
- current observability;
- existing warm-up/cache behavior;
- evidence gaps.

### P1 — Contract and field-level lineage

For every relevant response field create a record containing:
- API path/JSON pointer;
- canonical semantic element ID;
- business meaning;
- transformation/rule;
- current source system/integration;
- source operation/table/view/query/transaction when evidenced;
- volatility class;
- freshness budget;
- sensitivity/regulatory classification;
- cache eligibility;
- local-memory catalog eligibility;
- invalidation policy;
- candidate optimized retrieval path;
- unknowns/evidence source.

### P2 — Existing cache baseline

Analyze the current preload/warm-up mechanism.

Measure/document:
- what is cached;
- cache granularity;
- keying;
- TTL;
- balances/volatile fields included or excluded;
- invalidation/refresh trigger;
- stale-data risk;
- latency gain;
- Exadata/external-call reduction.

Use this as the control case against semantic data-element caching.

### P3 — Canonical Redis projection design

Design shared projections by semantic domain, not by endpoint.

Candidate domains:
- customer identity;
- contact/profile;
- product/position summary;
- catalogs/reference data.

Validate physical key/hash/JSON structure against approved Redis capabilities.

The same semantic element should be reusable by multiple Gravity Plus APIs where authority, classification and freshness policy allow it.

### P4 — Selective retrieval plan

For each stale/missing element decide from evidence whether retrieval should use:
- an Exadata query projection;
- an existing satellite API/service;
- an existing transactional/core connector;
- an in-memory/reference catalog;
- another supported source.

Do not bypass existing transactional connectors merely because a direct query seems technically possible.

### P5 — Minimal Exadata query plans

Generate/validate approved query plans that fetch only required stale/missing/volatile semantic elements while grouping compatible fields to avoid query-per-field behavior.

A single-field query is valid only when real schema/query-plan evidence shows it is efficient.

Compare:
- current query;
- minimal projection candidates;
- round trips;
- joins;
- selectivity/cardinality;
- execution plans;
- latency/resources.

### P6 — Architecture option decision

Compare at least:

A. `API Connect -> improved current Customer Position implementation`

B. `API Connect -> dedicated acceleration/composition implementation`

C. `API Connect -> Spring Cloud Gateway -> acceleration implementation`

D. sidecar only if the concern is genuinely cross-cutting and the lifecycle/network model is justified.

Do not force Spring Cloud Gateway. Keep it only if progressive routing, canary, fallback, observability or other measurable control is not adequately provided by the existing bank plane.

### P7 — Spring implementation candidate

Whichever option wins must:
- preserve the existing external contract;
- reuse Santander Framework patterns/capabilities where supported;
- preserve supported business transformations;
- keep cache policy/configuration governed;
- use approved connectors/source paths;
- expose deterministic fallback;
- instrument field/source/cache/query behavior without leaking sensitive data.

### P8 — Observe-only / shadow mode

Run without affecting consumer responses.

Measure:
- legacy response;
- candidate accelerated response;
- equality/accepted freshness difference;
- latency;
- Exadata calls;
- satellite/API calls;
- transactional calls;
- Redis hit/miss;
- errors;
- extra-hop cost if applicable.

### P9 — Canary

Only after correctness, framework compatibility and security gates pass.

Use bounded traffic/endpoint selection and deterministic rollback to legacy path.

### P10 — Expansion decision

Determine whether the model is reusable for the next Gravity Plus APIs based on:
- semantic-element reuse;
- performance gain;
- operational complexity;
- source-integration reuse;
- cache correctness;
- Santander Framework compatibility.

## Required POC artifacts

1. `CUSTOMER_POSITION_CURRENT_IMPLEMENTATION_BASELINE.md`
2. `CUSTOMER_POSITION_INTEGRATION_INVENTORY.md`
3. `CUSTOMER_POSITION_FIELD_SOURCE_LINEAGE` structured source + human CSV/XLSX projection
4. `CUSTOMER_POSITION_UNKNOWN_EVIDENCE_GAPS.md`
5. `CURRENT_WARMUP_CACHE_BASELINE.md`
6. `CANONICAL_DATA_ELEMENT_REGISTRY`
7. `REDIS_PROJECTION_DESIGN.md`
8. `SOURCE_RETRIEVAL_DECISION_MAP.md`
9. `EXADATA_QUERY_PLAN_MAP.md`
10. `SANTANDER_FRAMEWORK_REUSE_MAP.md`
11. `ARCHITECTURE_OPTION_DECISION.md`
12. `SHADOW_COMPARISON_REPORT.md`
13. `PERFORMANCE_EVIDENCE.md`
14. `SECURITY_INFORMATION_HANDLING_REPORT.md`
15. `EXPANSION_RECOMMENDATION.md`
16. Arc42 impact/update classification if this POC becomes an accepted solution change.

## Success criteria

The POC is successful only if it demonstrates all of the following:

- current implementation behavior is understood from evidence;
- contract compatibility maintained;
- supported Santander Framework conventions preserved or deviations justified;
- measurable latency improvement;
- material reduction in unnecessary Exadata and/or satellite read work;
- reusable canonical data-element cache model;
- no stale-data behavior outside accepted freshness policy;
- no bypass of required transactional/business rules;
- no sensitive-data handling regression;
- rollback/fallback proven;
- added gateway/service complexity justified by measured benefit;
- explicit UNKNOWNs remain visible rather than guessed;
- clear path to onboard additional APIs without cloning one cache design per API.
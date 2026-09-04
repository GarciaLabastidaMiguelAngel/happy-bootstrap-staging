# BI-0001 — Customer Position Read Acceleration POC Plan

Status: READY_FOR_DISCOVERY_AND_PLANNING
Direction revision: DIRECTION-0006
Parent initiative: `BI-0001_GRAVITY_PLUS_READ_ACCELERATION_STRATEGY.md`

## Objective

Use Customer Position as the first banking-domain proof that Architecture AI can:

- understand current API contract and runtime path;
- classify response data by semantics, volatility, sensitivity and source;
- design reusable shared cache projections instead of API-specific caches;
- minimize Exadata reads to only missing/stale/volatile data;
- preserve current API contract;
- compare legacy and accelerated behavior safely;
- produce measurable evidence before expanding to other Gravity Plus APIs.

## Inputs required

Preferred evidence inputs, in this order:

1. Current Customer Position OpenAPI/Swagger contract.
2. API Connect catalog/product/route information for the endpoint.
3. Current Gravity Plus implementation/runtime path if available.
4. Current Exadata SQL/query mapping for this endpoint if available.
5. Relevant Exadata schema/views/materialized views and query-plan/performance evidence.
6. Redis platform/version/capability information.
7. Existing bank data-classification/security constraints.
8. Current latency/load/DB-call baseline.

Missing items become explicit ResearchRequest/Blocker states; do not invent them.

## POC phases

### P0 — Baseline discovery

Produce:
- API sequence/topology;
- contract inventory;
- current latency/DB-call baseline;
- source/evidence gaps;
- gateway role hypothesis.

### P1 — Field-level semantic classification

For every response field create a record containing:
- API path/JSON pointer;
- canonical semantic element ID;
- business meaning;
- source system;
- source table/view/query if evidenced;
- volatility class;
- freshness budget;
- sensitivity/regulatory classification;
- cache eligibility;
- local-memory catalog eligibility;
- invalidation policy;
- unknowns/evidence source.

### P2 — Canonical Redis projection design

Design shared projections by semantic domain, not by endpoint.

Candidate domains:
- customer identity;
- contact/profile;
- product/position summary;
- catalogs/reference data.

Validate physical key/hash/JSON structure against approved Redis capabilities.

### P3 — Minimal Exadata query plans

Generate/validate approved query plans that fetch only required stale/missing/volatile semantic elements while grouping compatible fields to avoid query-per-field behavior.

### P4 — Spring implementation candidate

Preferred candidate split:

API Connect
-> Spring Cloud Gateway candidate
-> Read Acceleration module/service
-> Redis + local catalog cache + Exadata

The POC must compare whether the Spring Cloud Gateway layer is necessary versus routing directly from API Connect to the acceleration service.

### P5 — Observe-only / shadow mode

Run without affecting consumer responses.

Measure:
- legacy response;
- candidate accelerated response;
- equality/accepted freshness difference;
- latency;
- Exadata calls;
- Redis hit/miss;
- errors;
- extra-hop cost.

### P6 — Canary

Only after correctness and security gates pass.

Use bounded traffic/endpoint selection and deterministic rollback to legacy path.

### P7 — Expansion decision

Determine whether the model is reusable for the next Gravity Plus APIs based on semantic-element reuse, performance gain and operational complexity.

## POC deliverables

1. `CUSTOMER_POSITION_CURRENT_BASELINE.md`
2. `CUSTOMER_POSITION_FIELD_CLASSIFICATION.xlsx|csv` human projection plus governed structured source
3. `CANONICAL_DATA_ELEMENT_REGISTRY` definition
4. `REDIS_PROJECTION_DESIGN.md`
5. `EXADATA_QUERY_PLAN_MAP.md`
6. `GATEWAY_ROLE_DECISION.md`
7. `SHADOW_COMPARISON_REPORT.md`
8. `PERFORMANCE_EVIDENCE.md`
9. `SECURITY_INFORMATION_HANDLING_REPORT.md`
10. `EXPANSION_RECOMMENDATION.md`
11. Arc42 impact/update classification if this POC becomes an accepted solution change.

## Success criteria

The POC is successful only if it demonstrates all of the following:

- contract compatibility maintained;
- measurable latency improvement;
- material reduction in Exadata read work/calls;
- reusable canonical data-element cache model;
- no stale-data behavior outside accepted freshness policy;
- no sensitive-data handling regression;
- rollback/fallback proven;
- added gateway/service complexity justified by measured benefit;
- clear path to onboard additional APIs without cloning one cache design per API.
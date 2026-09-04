# BI-0001 — Gravity Plus Read Acceleration Strategy

Status: ACTIVE_INITIATIVE_CANDIDATE
Direction revision: DIRECTION-0006
Domain: Banking integration / Gravity Plus / Exadata / Redis / API performance

## Purpose

Use a concrete banking-domain pilot to prove that Architecture AI understands the bank context, can classify existing API/data behavior, can plan a standards/pattern-based improvement and can generate an evidence-backed implementation plan without redesigning the entire bank platform.

The first pilot is `Customer Position`.

The business/technical problem is read performance across existing Gravity Plus APIs. Current optimization is largely API-by-API and tends to produce one optimized query/microservice per API. BI-0001 introduces a reusable read-acceleration model based on canonical data elements, freshness policy, shared cache projections and minimal Exadata reads.

## Governing principles

1. INTEGRATE FIRST, EVOLVE SECOND.
2. Preserve existing API contracts unless a governed versioned change is explicitly approved.
3. Optimize from measured behavior, not assumed bottlenecks.
4. Model cacheability/freshness at canonical data-element level, not only API level.
5. Reuse the same cached semantic data across multiple APIs when policy permits.
6. Query Exadata only for required missing/stale/volatile data and group fields into efficient query plans; avoid one SQL statement per field.
7. Redis is a projection/cache, not the source of truth.
8. API Connect remains part of the existing bank API plane. Any new Spring Cloud Gateway must have a justified role and must not duplicate API Connect policy without value.
9. Sensitive-data handling, PCI/privacy classification, authorization and telemetry redaction are mandatory cross-cutting gates.
10. Git governs configuration/specification/policy; runtime cache state does not live in Git.

## Initial target topology candidate

Consumers
-> API Connect
-> Spring Cloud Gateway (candidate progressive-routing/acceleration ingress)
-> one of:
   A. Existing Gravity Plus API path
   B. Read Acceleration / Projection path
-> Redis shared read projection + local catalog cache
-> Exadata optimized read queries

Architecture AI must validate whether Spring Cloud Gateway adds sufficient value as a progressive routing/strangler control point. If API Connect can perform the required progressive routing and an acceleration service can be called directly without losing governance/observability, the extra gateway hop may be unnecessary.

## Important separation of responsibilities

Do NOT turn Spring Cloud Gateway into a giant domain/data-access service.

Preferred responsibility split:

### Spring Cloud Gateway
- route selection;
- request correlation;
- canary/feature routing;
- coarse request policy/filtering;
- cache/read-acceleration path selection;
- observability;
- controlled fallback to legacy implementation.

### Read Acceleration / Projection module or service
- map API contract fields to canonical data elements;
- evaluate freshness/cache policy;
- read shared Redis projections;
- determine missing/stale elements;
- execute approved Exadata query plans;
- merge results into the existing API contract;
- populate/update cache projections;
- emit evidence/metrics.

Reason: direct Oracle JDBC/query composition is blocking/domain-specific work and should not be coupled to gateway event-loop/routing responsibilities.

## Patterns to evaluate

- API Gateway
- Strangler Fig / progressive replacement
- Cache-Aside
- CQRS read model
- Materialized View / read projection
- Bulkhead / circuit breaker where justified
- Feature toggle / route toggle
- Sidecar only for true cross-cutting concerns where warranted, not as a default data-composition pattern

Do not adopt patterns for pattern purity. Record rationale and measurable value.

## Canonical data-element model

The core abstraction is a semantic data-element registry independent from individual API payloads.

Suggested fields:

- `elementId`
- `semanticName`
- `description`
- `apiMappings[]` (OpenAPI schema path / JSON pointer)
- `sourceSystem`
- `sourceEntity/table/view`
- `queryProjectionId`
- `volatilityClass`
- `freshnessBudget`
- `cachePolicy`
- `invalidationPolicy`
- `sensitivityClass`
- `regulatoryScope`
- `authorizationScope`
- `lineage`
- `owner`
- `consumerApis[]`
- `lastValidated`

Example conceptual elements:
- customer.identity.rfc
- customer.identity.curp
- customer.identity.name
- customer.contact.address
- customer.position.balance.current
- customer.position.product.status

The same element may satisfy multiple APIs.

## Freshness / volatility classes

Initial candidate classes:

- `STATIC_REFERENCE`
- `STABLE_PROFILE`
- `SEMI_VOLATILE`
- `VOLATILE`
- `REAL_TIME_REQUIRED`
- `UNKNOWN_REQUIRES_ANALYSIS`

TTL is policy derived from the element class, business freshness requirement, source behavior and risk. Do not hard-code a universal TTL.

For the first Customer Position POC, a 24-hour TTL may be tested for selected stable identity attributes (for example RFC/CURP/name) only after confirming information sensitivity, business freshness tolerance and source semantics.

## Redis projection strategy

Do not create one cache namespace/document per API if multiple APIs reuse the same semantics.

Prefer canonical customer/domain projections, for example conceptually:

- `customer:{id}:identity`
- `customer:{id}:contact`
- `customer:{id}:position:summary`
- `catalog:{catalogId}:{version}`

Exact physical Redis structure must be selected after verifying supported Redis version/modules and data-access patterns.

Different freshness requirements may require:
- separate keys by volatility/freshness group;
- explicit `asOf`/`expiresAt` metadata per field/group;
- or field-level expiry only if the approved Redis version supports it and operational semantics are validated.

Never assume field-level TTL support.

## Query-plan model

Avoid:

missing field A -> query A
missing field B -> query B
missing field C -> query C

Prefer:

required semantic elements
-> group by source/join/query template
-> minimal approved projection query
-> one or few optimized Exadata reads
-> result mapping

Query plans should be explicit/versioned and testable, not uncontrolled runtime-generated SQL.

When the Exadata schema and current query evidence become available, Architecture AI should inspect:
- table/view relationships;
- available materialized views;
- indexes/partitioning where visible;
- query plans;
- cardinality/selectivity assumptions;
- current API SQL;
- read amplification;
- repeated joins/lookups;
- catalog lookups;
- latency and resource metrics.

## Local catalog caching

Small, bounded, low-volatility catalogs may be cached in pod/JVM memory using a supported Spring cache implementation after validating:
- size;
- change frequency;
- refresh mechanism;
- consistency requirement;
- replica behavior;
- startup/reload behavior.

Catalogs with cross-replica consistency or larger size may belong in Redis instead.

Catalog source-of-truth remains the governed bank source.

## Invalidation evolution

Phase 1 — TTL/freshness budget only.

Phase 2 — mutation-aware invalidation for PUT/POST/PATCH operations that are observable through the controlled API path and have deterministic field-impact mappings.

Phase 3 — event/CDC/source-version invalidation when authoritative change signals exist.

If writes can bypass the new gateway/acceleration layer, gateway-observed mutation invalidation is insufficient and must not be represented as complete consistency.

## Git-driven configuration

Git may govern:
- API-to-element mappings;
- semantic data-element definitions;
- freshness/cache policies;
- route/feature policy;
- query-plan definitions/templates;
- catalog definitions;
- classification/handling metadata;
- POC toggles and validation expectations.

Git must not contain:
- live customer values;
- Redis runtime cache entries;
- credentials;
- high-frequency runtime state.

Configuration changes require validation before activation.

## Progressive rollout

Recommended first rollout:

1. `OBSERVE_ONLY`
   - no response replacement;
   - collect latency/cacheability/query evidence using safe metadata;
   - parse API catalog/OpenAPI definitions.

2. `SHADOW_EVALUATION`
   - calculate accelerated response internally;
   - compare with legacy response where policy permits;
   - do not return candidate result to consumers.

3. `CANARY_ACCELERATION`
   - selected endpoint/traffic subset;
   - automatic fallback to legacy path;
   - compare latency, correctness and freshness.

4. `CONTROLLED_DEFAULT`
   - acceleration path becomes default for validated endpoints;
   - legacy remains rollback path during defined window.

5. `EXPAND_BY_DATA_CAPABILITY`
   - onboard additional Gravity Plus APIs using the canonical element/cache model rather than cloning API-specific cache logic.

## Required measurements

At minimum:
- p50/p95/p99 endpoint latency;
- Exadata calls/request;
- DB elapsed time/request;
- rows/bytes read if available;
- cache hit by semantic element/group;
- stale-data prevented/detected;
- fallback rate;
- response mismatch rate in shadow mode;
- Redis latency/error rate;
- catalog-cache hit rate;
- CPU/memory impact;
- extra gateway hop overhead;
- security/classification violations = 0 target.

## Customer Position as the first vertical slice

The POC must ingest the actual Customer Position OpenAPI/contract and classify every relevant response element into:
- semantic identity;
- source;
- volatility/freshness;
- sensitivity;
- cache eligibility;
- invalidation strategy;
- Exadata query-plan mapping;
- reuse across other known APIs.

Output must include a field-level matrix and a proposed response assembly plan.

## Key decision gates

### GP-G0 Existing topology evidence
API Connect/product/route/current Gravity Plus topology is verified.

### GP-G1 Contract baseline
Current Customer Position contract is loaded and versioned.

### GP-G2 Data-source mapping
Relevant Exadata source mapping is evidenced, not guessed.

### GP-G3 Data classification/freshness
Each field has a supported classification or explicit UNKNOWN.

### GP-G4 Cache policy
Cacheable elements have freshness/invalidation/sensitivity rationale.

### GP-G5 Gateway role
Spring Cloud Gateway has measurable justified responsibilities beyond API Connect.

### GP-G6 Query efficiency
Minimal query plans are validated against real schema/query evidence.

### GP-G7 Correctness
Shadow/canary results match contract and accepted freshness rules.

### GP-G8 Performance
Measured improvement is material and greater than added hop/complexity cost.

### GP-G9 Security/compliance
No unauthorized sensitive-data propagation or telemetry leakage.

## Goal

Demonstrate that Architecture AI can understand an existing banking API/data landscape and produce a reusable performance architecture that improves reads across Gravity Plus incrementally, while keeping contracts stable, infrastructure impacts controlled, configuration governed and future APIs reusable through a canonical data-element model.
# P-GRAVITY-PLUS-CUSTOMER-POSITION-READ-ACCELERATION-POC-01
## CUSTOMER POSITION BANKING READ ACCELERATION — API CONNECT, SPRING CLOUD GATEWAY CANDIDATE, REDIS CANONICAL DATA PROJECTIONS & EXADATA MINIMAL READS

```yaml
prompt_id: P-GRAVITY-PLUS-CUSTOMER-POSITION-READ-ACCELERATION-POC-01
title: Gravity Plus Customer Position Read Acceleration POC
domain: banking integration / API performance / Redis / Exadata / gateway
status: READY
parallelism_decision: PARALLEL_SAFE_WITH_BOUNDARIES
direction_revision: DIRECTION-0006
repository_baseline: REFRESH_AT_HANDOFF
depends_on:
  - BI-0001_GRAVITY_PLUS_READ_ACCELERATION_STRATEGY
  - BI-0001_CUSTOMER_POSITION_POC_PLAN
  - real Customer Position/API Connect/Exadata/Redis evidence as it becomes available
shared_surfaces:
  - bank integration architecture
  - information classification/security
  - observability
  - OpenAPI contracts
allowed_change_scope:
  - POC-specific banking analysis, contracts, configurations, code and LAB deployment artifacts
forbidden_change_scope:
  - silent production routing changes
  - invented Exadata schema/query evidence
  - invented Redis capabilities
  - unapproved sensitive-data replication
  - destructive changes to current Gravity Plus APIs
```

Continue from the CURRENT REAL Architecture AI direction and the REAL banking evidence available at execution time.

This is a BANKING-DOMAIN POC managed by Architecture AI. It is not a reason to merge Gravity Plus business runtime into the Architecture AI product itself.

The objective is to prove that Architecture AI can understand the existing bank API/data landscape and design/implement a safe measurable read-acceleration path for Customer Position that can later generalize across Gravity Plus APIs.

Do NOT invent missing bank topology, schemas, freshness rules, Redis capabilities, security policies or API behavior.

If evidence is missing, classify it as UNKNOWN / PARALLEL_RESEARCH / BLOCKING_NOW and continue only unaffected work.

============================================================
0. INSPECT REAL INPUTS
============================================================

Collect/inspect where available:
- Customer Position OpenAPI/Swagger;
- API Connect product/catalog/route information;
- current Gravity Plus runtime path;
- current Customer Position implementation/query behavior;
- relevant Exadata schema/views/materialized views/query-plan evidence;
- Redis version/modules/topology/limits;
- current latency/load/DB-call baseline;
- information-classification/security constraints.

Produce a source/evidence matrix. Do not infer absent details.

============================================================
1. VALIDATE THE GATEWAY ROLE
============================================================

The proposed topology candidate is:

Consumers
-> API Connect
-> Spring Cloud Gateway candidate
-> legacy Gravity Plus path OR accelerated read path
-> Redis/local catalog cache + Exadata.

Do NOT assume the additional gateway is automatically correct.

Compare at least:
A. API Connect -> Spring Cloud Gateway -> legacy/accelerated routes
B. API Connect -> dedicated read-acceleration service directly

Evaluate progressive routing/strangler control, canary, observability, policy duplication, latency, operational complexity and rollback.

If Spring Cloud Gateway is retained, keep it focused on routing/filter/control/observability. Do not make it a giant blocking JDBC/domain-composition service.

============================================================
2. FIELD-LEVEL SEMANTIC CLASSIFICATION
============================================================

For every relevant Customer Position response field create a governed mapping:
- API schema path / JSON pointer;
- canonical semantic element ID;
- business meaning;
- source system;
- source table/view/query only if evidenced;
- volatility class;
- freshness budget;
- sensitivity/regulatory classification;
- cache eligibility;
- catalog/local-memory eligibility;
- invalidation policy;
- consumer APIs/reuse potential;
- evidence/reference;
- UNKNOWN where unresolved.

Candidate volatility classes:
STATIC_REFERENCE
STABLE_PROFILE
SEMI_VOLATILE
VOLATILE
REAL_TIME_REQUIRED
UNKNOWN_REQUIRES_ANALYSIS.

Do not declare a field cacheable only because it "usually changes rarely".

============================================================
3. CANONICAL DATA-ELEMENT REGISTRY
============================================================

Do not design cache per endpoint.

Define canonical semantic elements such as conceptually:
customer.identity.rfc
customer.identity.curp
customer.identity.name
customer.contact.address
customer.position.balance.current
customer.position.product.status

The same canonical element may satisfy multiple Gravity Plus APIs.

Persist definitions/policies in governed Git source; do not persist live customer values in Git.

============================================================
4. REDIS PROJECTION DESIGN
============================================================

Design reusable customer/domain projections rather than one Redis object per API.

Candidate conceptual groupings:
customer:{id}:identity
customer:{id}:contact
customer:{id}:position:summary
catalog:{catalogId}:{version}

Choose actual Redis structures only after checking the approved Redis version/modules and access patterns.

Different field freshness may require:
- separate keys by volatility group;
- explicit `asOf`/`expiresAt` metadata;
- field-level expiry only if verified supported and operationally appropriate.

Do not assume field-level TTL support.

For the first LAB experiment, 24h may be evaluated as the maximum TTL for selected stable identity fields only if business/security/freshness evidence allows it.

============================================================
5. EXADATA MINIMAL QUERY PLANNING
============================================================

Do not implement query-per-field behavior.

Use:
required missing/stale/volatile elements
-> group by compatible source/join/query template
-> minimal approved projection query
-> result mapping.

Prefer explicit versioned query plans/templates over uncontrolled runtime SQL generation.

When schema/query evidence exists, analyze:
- joins;
- materialized views;
- repeated lookups;
- cardinality/selectivity;
- projection width;
- current API query count;
- query plans;
- latency/read amplification;
- catalog accesses.

============================================================
6. LOCAL CATALOG CACHE
============================================================

Identify small low-volatility catalogs that can safely live in pod/JVM memory.

Validate:
- catalog size;
- update frequency;
- source authority;
- refresh mechanism;
- multi-replica semantics;
- startup behavior.

Use Redis instead if cross-replica consistency/size/refresh needs justify it.

============================================================
7. INVALIDATION ROAD
============================================================

Implement/evaluate progressively:

Phase 1: TTL/freshness-budget only.
Phase 2: deterministic mutation-aware invalidation for writes observable through the controlled path.
Phase 3: event/CDC/source-version invalidation when authoritative change signals exist.

If writes bypass the gateway, do not claim gateway-observed invalidation provides complete consistency.

============================================================
8. GIT-DRIVEN CONFIGURATION
============================================================

Git may govern:
- API-to-element mappings;
- canonical data-element registry;
- cache/freshness policies;
- route/feature policies;
- query-plan templates;
- catalog definitions;
- classification metadata;
- POC toggles;
- validation rules.

Runtime values, Redis cache contents and credentials do NOT live in Git.

Configuration activation requires validation and auditable baseline/version.

============================================================
9. SAFE ROLLOUT MODES
============================================================

Implement or plan these modes:

OBSERVE_ONLY
-> inspect metadata/latency without changing responses.

SHADOW_EVALUATION
-> build candidate response internally and compare with legacy where policy permits.

CANARY_ACCELERATION
-> selected endpoint/traffic with deterministic legacy fallback.

CONTROLLED_DEFAULT
-> accelerated path default only after gates pass.

EXPAND_BY_DATA_CAPABILITY
-> onboard next APIs using canonical elements instead of cloning per-API cache designs.

============================================================
10. INFORMATION HANDLING
============================================================

Apply DIRECTION-0006 information-governance rules.

RFC/CURP/name and other customer fields must be classified from institutional policy/evidence. Do not confuse PII/sensitive data with PCI scope.

Do not leak protected values into:
- logs;
- traces;
- metric labels;
- Devin prompts/provider knowledge;
- Git;
- uncontrolled shadow-diff artifacts.

Shadow comparison must support hashing/redaction/field-level equivalence where raw value retention is not allowed.

============================================================
11. MEASUREMENTS
============================================================

Capture at minimum:
- p50/p95/p99 latency;
- Exadata calls/request;
- DB elapsed time/request;
- cache hit/miss by semantic element/group;
- Redis latency/error rate;
- catalog-cache hit rate;
- response mismatch rate;
- stale-value detection/prevention;
- fallback rate;
- CPU/memory;
- extra gateway-hop overhead;
- security/information-handling violations.

Baseline and candidate must be comparable.

============================================================
12. GATES
============================================================

GP-G0 topology evidence
GP-G1 contract baseline
GP-G2 source mapping evidence
GP-G3 field classification/freshness
GP-G4 cache policy
GP-G5 gateway-role justification
GP-G6 query efficiency
GP-G7 correctness/shadow equivalence
GP-G8 performance benefit
GP-G9 security/compliance

Do not promote beyond the safe mode whose gates are satisfied.

============================================================
13. DELIVERABLES
============================================================

Persist at least:
1. CUSTOMER_POSITION_CURRENT_BASELINE.md
2. CUSTOMER_POSITION_FIELD_CLASSIFICATION structured source + human projection
3. CANONICAL_DATA_ELEMENT_REGISTRY
4. REDIS_PROJECTION_DESIGN.md
5. EXADATA_QUERY_PLAN_MAP.md
6. GATEWAY_ROLE_DECISION.md
7. SHADOW_COMPARISON_REPORT.md
8. PERFORMANCE_EVIDENCE.md
9. SECURITY_INFORMATION_HANDLING_REPORT.md
10. EXPANSION_RECOMMENDATION.md
11. Arc42 impact classification if accepted beyond POC.

============================================================
14. DEFINITION OF DONE
============================================================

The POC is complete only when there is real evidence that:
- current contract remains compatible;
- Exadata work/calls are materially reduced;
- end-to-end latency improves enough to justify added complexity;
- canonical cached data is reusable beyond one API;
- freshness policy is explicit and enforced;
- sensitive data is handled correctly;
- rollback/fallback works;
- the chosen gateway/service topology is justified rather than assumed.

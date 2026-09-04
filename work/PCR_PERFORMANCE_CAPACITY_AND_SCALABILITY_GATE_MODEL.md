# PCR Performance, Capacity and Scalability Gate Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0010

## Purpose

Define a repeatable, test-as-code model for bank PCR/load/performance/capacity evidence from local development through OpenShift preproduction, so performance is designed and proven rather than inferred late in delivery.

`PCR` is used here as the project/bank shorthand for performance/load/capacity testing; exact institutional terminology and required evidence must be reconciled with the current PCR area/process.

## Standards frame

Use complementary standards/frameworks rather than forcing one framework to cover everything:
- TOGAF for architecture baseline/target/transition and implementation governance;
- ISO/IEC/IEEE 29119 series for governed software-test processes, documentation and techniques;
- ISO/IEC 25010:2023 quality model for product quality requirements/evaluation, including performance-efficiency and related quality characteristics;
- institutional PCR policies/gates as bank authority when evidenced.

Do not claim conformance until evidence exists.

## Test-as-code principle

Performance tests are governed engineering assets.

Scenario
+ workload model
+ assertions/thresholds
+ environment manifest
+ data profile
+ application/build version
+ dependency versions
+ test runner version
-> reproducible PCR evidence.

Store source/configuration in Git where appropriate. Large raw results may live in the approved evidence/artifact store with immutable references/checksums.

## Java-first tooling direction

Prefer the current institutional load tool when it already satisfies the requirement.

For local/LAB Java-first POCs, candidates include:
- Apache JMeter: open source and implemented as a pure Java load/performance tool;
- Gatling Java DSL: JVM-based test-as-code option with Java SDK and Gradle support;
- JUnit/Testcontainers/WireMock or existing equivalents for deterministic component/integration setup, not as a substitute for sustained load testing.

Tool selection is evidence-driven. Do not introduce a second load platform solely for preference.

## PCR ladder

### PCR-0 — Workload and acceptance model
Before load generation define:
- customer/business scenario;
- transaction mix;
- arrival/concurrency model;
- payload/data profile;
- target p50/p95/p99 or applicable SLO;
- throughput target;
- acceptable error rate;
- dependencies included/excluded;
- environment/resource limits;
- warm/cold-cache conditions;
- pass/fail criteria.

### PCR-1 — Component/pod saturation
Goal: determine capacity and degradation behavior of one component instance.

Use fixed resources and a controlled isolated non-production test.

Measure at least:
- request rate;
- latency percentiles;
- errors/timeouts;
- CPU/memory;
- JVM heap/GC;
- threads/event-loop pressure as applicable;
- connection pools;
- downstream calls;
- cache hit/miss;
- dependency saturation.

Load generators must not unintentionally compete for the same constrained resources and invalidate the measurement.

### PCR-2 — Service scaling
Measure 1/N replicas and then autoscaling separately.

Prove:
- scaling efficiency;
- load distribution;
- saturation point;
- HPA behavior if used;
- startup/warmup impact;
- state/session/cache behavior across replicas;
- failure of one replica without incorrect results.

### PCR-3 — Dependency-aware service test
Add real or governed representative dependencies one at a time:
- Redis;
- Exadata/read store;
- Gravity Plus/downstream APIs;
- Kafka/event path;
- identity/gateway;
- other satellites.

Measure where latency and capacity move, not only total endpoint latency.

### PCR-4 — End-to-end customer journey
Exercise the actual channel path, for example:

Browser/load client
-> API management/gateway
-> BFF
-> Gravity Plus/domain services
-> projections/cache
-> authoritative dependencies.

Measure time-to-useful-content and backend amplification as well as API latency.

### PCR-5 — Resilience/degradation
In approved non-production conditions test bounded failures such as:
- pod loss;
- slow dependency;
- Redis unavailable/degraded;
- selected timeout/fallback;
- event lag;
- connection exhaustion;
- scale transition.

Do not perform destructive/saturation testing in an environment without explicit authorization.

### PCR-6 — Preproduction promotion evidence
Repeat the approved representative workload in an environment sufficiently homologated to the target production architecture.

Record differences that prevent direct extrapolation.

## Evidence package

Each governed PCR run should produce:
- Scenario/TestPlan ID and version;
- SUT artifact/container version/hash;
- configuration/environment manifest;
- resource requests/limits/replicas/autoscaling policy;
- dependency versions/topology;
- test-data profile/classification;
- load-generator topology;
- start/end and duration;
- throughput/concurrency;
- p50/p95/p99;
- error/timeout rate;
- resource saturation;
- relevant traces/metrics/log references;
- downstream/core/DB/API amplification;
- observations/findings;
- PASS / FAIL / CONDITIONAL;
- accepted exception/risk if any;
- comparison to previous baseline.

## Promotion gates

Performance gates should become deterministic where possible.

Example:

Specification performance requirement
-> PCR scenario
-> reproducible run
-> threshold evaluation
-> evidence package
-> gate decision
-> promotion or blocker.

A passing isolated pod test does not prove end-to-end production capacity. Each gate must state exactly what it proves.

## Capacity model

The platform should progressively learn:
- requests/sec per pod for a defined workload;
- marginal scaling efficiency;
- dependency cost per customer action;
- CPU/memory cost per transaction;
- core/Exadata transaction amplification;
- Redis hit-rate effect;
- gateway/BFF overhead;
- event lag under load;
- cost/performance tradeoffs.

This data becomes input to simulation, infrastructure sizing, architecture decisions and backlog prioritization.

## Architecture AI role

Architecture AI should eventually be able to answer:
- What is the latest proven capacity of this service?
- At what load does p95 violate the target?
- Is the bottleneck the pod, Redis, Exadata, a satellite API or the gateway?
- What changed since the previous PCR?
- Which evidence is required for the next environment gate?
- What workload should be rerun after this code/config change?

## Goal

Replace disconnected late-stage performance testing with a progressive, reproducible evidence chain that starts locally, scales into OpenShift, preserves institutional PCR gates, and gives Architecture AI real capacity data for design and optimization.
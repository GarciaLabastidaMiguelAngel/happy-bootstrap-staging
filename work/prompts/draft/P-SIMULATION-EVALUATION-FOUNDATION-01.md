---
prompt_id: P-SIMULATION-EVALUATION-FOUNDATION-01
title: Architecture AI Architecture Lab, Simulation & Evaluation Harness, Telemetry Requirements, Replay, Monte Carlo, Capacity, Reliability and Decision-Evidence Foundation
domain: LAB / simulation / replay / Monte Carlo / capacity / reliability
status: DRAFT
parallelism_decision: PARALLEL_SAFE_WITH_BOUNDARIES
direction_revision: DIRECTION-0001
repository_baseline: 171abc3fab22492a62cb4b6c7068e2357af8001e
depends_on: [P-OBSERVABILITY-AUDIT-01, P-LOCAL-TELEMETRY-DATA-ROAD-01]
conflicts_with: []
shared_surfaces: [telemetry requirement catalog, LAB storage, Gradle simulation tasks, dashboard LAB APIs]
notes: This prompt was being drafted in chat when the user interrupted to refine the telemetry ETL/data-road architecture. Subsequent discussion established OTLP/Collector/ObservationSnapshot/Parquet/OpenLineage-aligned boundaries. Those refinements are captured in P-LOCAL-TELEMETRY-DATA-ROAD-01. Do not hand off this DRAFT until reconciled into a final simulation prompt.
sent_at: null
executed_at: null
devin_session_reference: null
result_reference: null
---

# P-SIMULATION-EVALUATION-FOUNDATION-01
## ARCHITECTURE AI ARCHITECTURE LAB, SIMULATION & EVALUATION HARNESS, TELEMETRY REQUIREMENTS, REPLAY, MONTE CARLO, CAPACITY, RELIABILITY AND DECISION-EVIDENCE FOUNDATION

Continue from the CURRENT REAL Architecture AI implementation state.

DO NOT restart the project.
DO NOT redesign working foundations without a verified defect.

Another implementation block may be running in parallel on OBSERVABILITY, OPEN TELEMETRY, MICROMETER, AUDIT and DASHBOARD TELEMETRY.

This task MUST NOT create a competing observability framework or independently redefine metrics, tracing infrastructure, audit persistence or OpenTelemetry configuration.

Instead, define and implement the ARCHITECTURE LAB, SIMULATION AND EVALUATION FOUNDATION and declare the telemetry/data requirements it needs from the observability layer.

Primary goal: allow Architecture AI to evaluate architecture decisions quantitatively BEFORE introducing unnecessary ML, distributed infrastructure or architectural changes.

======================================================================
0. CORE PRINCIPLE
======================================================================

Architecture AI should increasingly support:
OBSERVE -> MODEL -> SIMULATE -> COMPARE -> DECIDE -> IMPLEMENT -> OBSERVE AGAIN.

Simulation does NOT replace real measurements. It explores uncertainty, alternatives, capacity, backlog, policies, reliability, failure propagation, ML value before training, Devin workload, cost and usability scenarios.

======================================================================
1. LAB MODE / PROVENANCE / ISOLATION
======================================================================

This capability belongs primarily to LAB. Simulation outputs must never silently become canonical knowledge, operational metrics, production policy, approved model or approved dataset.

Every input/result distinguishes OBSERVED, SIMULATED, ASSUMED, EXPERIMENTAL. Never present assumptions as observations.

LAB state must be isolated from SOLUTION operational state.

======================================================================
2. ARCHITECTURE LAB MODULE / ENGINE SPI
======================================================================

Create/refine clean Architecture Lab capability with Scenario Engine, Simulation Registry, Parameter Model, Telemetry Input Adapter, Monte Carlo Engine, Queueing/Capacity Engine, Discrete Event Engine, Reliability Engine, Graph Impact Engine, Replay Engine, Comparison Engine, Evaluation Engine and Report Generator.

Do not implement every engine deeply now. Create reusable contracts/SPI/archetypes first.

Create SimulationEngine abstraction with type() and execute(SimulationScenario, SimulationContext), supporting types MONTE_CARLO, QUEUEING, DISCRETE_EVENT, RELIABILITY, GRAPH_IMPACT, REPLAY and POLICY_COMPARISON. Keep pluggable and not tied to one library.

======================================================================
3. SCENARIO / RUN / RESULT CONTRACTS
======================================================================

Create versioned SimulationScenario with ID/version/name/description/domain/objective/inputs/parameters/assumptions/telemetryRequirements/engines/evaluationCriteria/expectedOutputs/createdAt/status, serializable to YAML/JSON-friendly form.

Create durable SimulationRun with runId, scenario/version, simulation type/version, randomSeed, iterations, start/end/status, inputSnapshotReference, parameterSnapshot, resultReference, applicationVersion and relevant policy/model versions.

Create versioned SimulationResult with run/scenario refs, status, inputs, assumptions, metrics/distributions, comparisons, risks, sensitivities, limitations and recommendations. Recommendations must identify CALCULATED, RULE_DERIVED or AI_INTERPRETED.

======================================================================
4. RANDOMNESS / METRICS / PERCENTILES
======================================================================

Monte Carlo/stochastic simulations use explicit persisted random seeds and reproducible scenario/parameters/simulation version/seed combinations where technically possible.

Create generic SimulationMetric with ID/name/meaning/unit/value/provenance/aggregation/population/window/calculationMethod and optional distribution stats mean/median/P50/P90/P95/P99/min/max/stddev/confidence interval.

Use percentiles only where distribution/tail behavior matters. P50 = median; P95 means 95% observations/runs at or below value; P99 extreme tail. Do not use P95 universally.

======================================================================
5. TELEMETRY INPUT BOUNDARY / PARALLEL OTEL COORDINATION
======================================================================

Simulation consumes normalized observations via TelemetryObservationProvider, not Micrometer implementation classes, raw logs, raw OTel exports or dashboard code.

Potential providers: LocalOperationalTelemetryProvider, OpenTelemetryBackendProvider, ReplayDatasetProvider.

Create TELEMETRY_REQUIREMENTS_FOR_SIMULATION.md recording required observation ID, meaning, unit, dimensions, aggregation/window, source subsystem, simulation consumers, priority and current availability.

If required observation does not exist, record requirement; do not implement a competing metric directly.

Initial requirements include ingestion arrival/size/type/processing/failure/retry/backlog; event rate/duration/retry/deadletter/backlog; saga rate/duration/step/failure/compensation/manual intervention; WorkItem/WorkPackage creation/size/claim/completion/backlog/age/blocked; MCP call rate/duration/failure/calls per work; ML score/unknown/rerank distributions; CPU/memory/disk/SQLite/Lucene growth.

======================================================================
6. OBSERVATION SNAPSHOT / DATA QUALITY
======================================================================

Create versioned ObservationSnapshot to freeze real operational observations for reproducible simulation. Include snapshot ID/time window/application mode/version/metrics/distributions/source refs/qualityStatus; aggregate/bound data only, no raw sensitive documents.

Each observation carries sampleCount, missingRate where applicable, coverage, timeWindow, source, aggregationMethod and quality level VALID/PARTIAL/INSUFFICIENT/INVALID/UNKNOWN. Do not silently build baselines from insufficient data.

NOTE: Subsequent chat discussion refined this into the standards-based telemetry road captured by P-LOCAL-TELEMETRY-DATA-ROAD-01: OTLP -> OpenTelemetry Collector generic processing -> Architecture AI domain observation preparation -> ObservationSnapshot -> Parquet/manifest -> SimulationInputPackage, with OpenLineage-aligned lineage where practical.

======================================================================
7. BASELINE VS CANDIDATE / POLICY COMPARISON
======================================================================

Support BASELINE vs CANDIDATE comparison, e.g. relevance policy v5 vs v6 or workers 4 vs 8, with delta evaluation.

Create PolicyComparison for RELEVANCE_THRESHOLD, EXTRACTION_POLICY, WORK_AGGREGATION, EVIDENCE_BUDGET, RETRY_POLICY, BACKPRESSURE_POLICY and ML_THRESHOLD.

Compare retained relevant evidence, irrelevant processing, Work Items/Packages, estimated Devin workload and cost units.

======================================================================
8. MONTE CARLO / INITIAL SCENARIO / ML VALUE
======================================================================

Implement minimal real Monte Carlo engine with parameter distributions, seed, N iterations and distribution output. Initial parameters may include artifact arrival rate, relevance ratio, classifier precision/recall, unknown schema rate, processing duration, failure probability, Devin capacity and tool-call cost units.

Implement one real scenario RELEVANCE_AND_DEVIN_LOAD with inputs artifact count, relevance ratio/threshold, classifier precision/recall, unknown rate, aggregation ratio and Devin capacity; outputs relevant retained/missed, irrelevant forwarded, Work Items/Packages, backlog and cost units with distributions/percentiles.

Before training custom models, simulate hypothetical model quality to answer what minimum precision/recall would justify introducing a classifier by operational effects on Devin workload, false negatives/positives, processing cost and backlog.

======================================================================
9. QUEUEING / CAPACITY / DISCRETE EVENT
======================================================================

Implement basic queueing/capacity model for arrival rate lambda, service rate mu, workers, utilization, queue depth, wait and headroom. Use mathematically valid models only within assumptions; do not pretend M/M/1 models every workload.

Prepare scenarios for ingestion workers, embedding workers, indexing workers, Knowledge Work generation, Devin WorkPackage processing and MCP tool execution. Detect unstable backlog deterministically when arrival exceeds service capacity.

Prepare/minimally implement discrete-event engine modeling arrival, queue, worker/service, completion, failure and retry for pipeline Inventory -> Profile -> Relevance -> Extract -> Index -> Work Generation with configurable worker counts/service-time distributions/queue limits/retry/failure.

Support backpressure evaluation: bounded queue, concurrency, slow consumers, retry storms, bursts; identify where backlog forms, instability threshold, useful worker capacity and diminishing returns.

======================================================================
10. WORK AGGREGATION / EVIDENCE BUDGET
======================================================================

Compare NO_AGGREGATION, ENTITY_GROUPING, PROJECT_GROUPING, SEMANTIC_GROUPING and CAPABILITY_GROUPING for Work Items/Packages, package size, context/evidence budget, Devin workload/backlog. Initial synthetic semantic assumptions are allowed if marked ASSUMED; embeddings not required.

Model evidence strategies such as 100 evidence units/package vs 20 vs 10 + retrieval-on-demand; evaluate context volume, tool calls, resolution-success assumptions and abstract COST_UNITS rather than hard-coded vendor pricing.

======================================================================
11. REPLAY
======================================================================

Replay means same historical observed workload -> new policy/model/algorithm -> compare results. Do not replay side effects. Operate on ObservationSnapshot, ArtifactProfile snapshots, KnowledgeSignal snapshots, Work snapshots or other safe derived representations; never mutate SOLUTION state.

Initial future use case: relevance policy v1 vs v2 on same observed artifact/profile set; evaluate classification/extraction/WorkItem/unknown/Devin-load deltas.

======================================================================
12. RELIABILITY / GRAPH IMPACT / FAULT MODELS
======================================================================

Create initial reliability abstraction for component/state/availability/failure/recovery/dependency using HEALTHY/DEGRADED/FAILED/RECOVERING.

Prepare graph impact simulation: set component failed -> direct/transitive affected components/capabilities/degraded paths/blast radius. Keep graph model runtime-neutral.

Create archetypes for Reliability Block Diagram and Fault Tree with AND/OR/K-of-N/optional dependency/redundancy without building graphical tooling unless trivial.

Prepare future SERVICE/OpenShift scenarios: pod failure, DB outage, broker outage, network delay, CPU saturation, memory pressure, autoscaling lag, external dependency outage; no OpenShift access required now.

======================================================================
13. EVENT / SAGA / COST / DECISION UTILITY
======================================================================

Simulation should support event arrival, channel durability, retry, dead letter, ordering scope, consumer capacity and outbox backlog; simulated events must never enter real operational channels.

Prepare Saga scenarios for step failure, timeout, retry, compensation, manual intervention; evaluate completion probability/duration/compensation/manual intervention without real side effects.

Create generic CostModel with relative CPU_UNIT, STORAGE_UNIT, TOOL_CALL_UNIT, DEVIN_REASONING_UNIT, CONTEXT_UNIT, NETWORK_UNIT. Do not require real institutional pricing initially.

Prepare weighted decision utility for performance/reliability/cost/security/maintainability/usability with scenario-specific configurable weights; may later support ATAM/CBAM-inspired workflows without claiming certification.

======================================================================
14. QUALITY ATTRIBUTE / SECURITY / USABILITY SCENARIOS
======================================================================

Create versioned QualityAttributeScenario with source/stimulus/environment/artifact-response/responseMeasure. Example 50,000 artifacts arrive after workstation recovery; measure processing completion within target. Do not claim formal QAW execution.

Prepare security-impact scenario contract with actor/entry point/asset/trust zone/boundary/control/path/impact for future attack-path/STRIDE/blast-radius analysis without offensive exploitation.

Create UserJourneyScenario with persona/role, goal, starting state, steps, decision points, expected completion and metrics taskCompletion, interactionCount, navigationDepth, timeToTask, errorRate, abandonmentRate. Synthetic evaluation does not replace real usability testing.

Initial dashboard journeys: ARCHITECT_FINDS_INGESTION_FAILURE, ARCHITECT_IDENTIFIES_BLOCKED_WORK, ARCHITECT_CHECKS_PLATFORM_HEALTH, ARCHITECT_REVIEWS_FAILED_SAGA.

======================================================================
15. SENSITIVITY / BREAK-EVEN / DECISION EVIDENCE
======================================================================

Prepare sensitivity analysis to identify assumptions materially affecting outcome, e.g. classifier precision, Devin capacity, artifact arrival rate, aggregation ratio.

Support break-even questions: minimum classifier performance for net benefit, workers required for stable backlog, traffic threshold requiring additional SERVICE replicas.

Create ArchitectureEvaluationEvidence linking evidenceId, scenario, SimulationRun, ObservationSnapshot, results, limitations, confidence and applicable decision. Do not auto-create/approve ADRs from simulation.

======================================================================
16. DEVIN / MCP / GRADLE / PERFORMANCE SAFETY
======================================================================

Simulation engines are deterministic computational tools. Devin may choose scenarios, interpret results, compare alternatives and explain trade-offs, but should not manually perform calculations the engine can compute deterministically.

Prepare bounded MCP contracts such as simulation.listScenarios/getScenario/run/getResult/compare/getTelemetryRequirements/replay/sensitivity; do not expose arbitrary code execution and do not implement all if MCP framework not ready.

Integrate with existing Gradle harness using explicit tasks simulationTest, simulationBaseline, monteCarloEvaluation, capacityEvaluation, replayEvaluation. Normal gradlew build must not run expensive Monte Carlo.

Bound simulation resources with maxIterations, maxRunTime, maxMemoryHint, cancellation and result-size limits.

======================================================================
17. STORAGE / REPORTS / DASHBOARD READINESS / PARALLEL SAFETY
======================================================================

LAB simulation state belongs in isolated local storage such as ~/.architecture-ai/lab/{simulations,scenarios,observations,replay,reports}. Do not write into SOLUTION state unless explicit isolation proven.

Generate machine-readable simulation-result.json, comparison-result.json, sensitivity-result.json first; human Markdown optional.

Prepare read-only backend contracts for future LAB dashboard views: scenarios, recent runs/status/type/baseline-candidate/key metrics/provenance/percentiles/limitations. Do not redesign Angular.

Because observability task may modify Actuator/Micrometer/OTel/dashboard DTOs/config, minimize changes to same files. Add LAB domain packages and requirement contracts; consume existing observability abstractions. Missing observation -> requirement, not competing metric.

======================================================================
18. INITIAL ARCHETYPES / EXECUTABLE PROOF / TESTS
======================================================================

Create archetypes for SimulationScenario, SimulationRun, SimulationResult, SimulationMetric, ObservationSnapshot, TelemetryRequirement, QualityAttributeScenario, UserJourneyScenario, ArchitectureEvaluationEvidence, MonteCarloParameters, QueueingModelParameters, ReplayConfiguration, SensitivityConfiguration.

Executable proof at minimum: Monte Carlo RELEVANCE_AND_DEVIN_LOAD with fixed seed/N iterations; capacity instability when arrival > processing; baseline vs candidate relevance assumptions; reproducibility for same scenario/seed/version.

Test schema/provenance validation, seed reproducibility, iteration limits, invalid distributions, units, baseline/candidate comparison, capacity instability, LAB isolation, OBSERVED vs ASSUMED separation and no SOLUTION mutation.

======================================================================
19. DOCUMENTATION
======================================================================

Create ARCHITECTURE_AI_SIMULATION_EVALUATION_BASELINE.md and SIMULATION_SCENARIO_CATALOG.md, TELEMETRY_REQUIREMENTS_FOR_SIMULATION.md, SIMULATION_METRIC_CATALOG.md, ARCHITECTURE_EVALUATION_SCENARIOS.md covering all above plus tests/files/gaps/next increment.

======================================================================
20. DRAFT STOP CONDITION
======================================================================

This captured prompt is intentionally DRAFT because the original chat drafting was interrupted before final Definition of Done and later telemetry-road refinements were introduced.

Before handoff, reconcile with P-LOCAL-TELEMETRY-DATA-ROAD-01 and current repository implementation, then issue a final READY revision rather than sending this file unchanged.

---
prompt_id: P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01
title: Architecture AI Repository Model, Operating Modes, Runtime Archetypes, Artifact Lifecycle, MCP, Local Knowledge, ML and Architecture Lab
domain: repository / runtime modes / artifact lifecycle / MCP / ML / LAB / OpenShift readiness
status: READY
parallelism_decision: SERIAL_REQUIRED
direction_revision: DIRECTION-0001
repository_baseline: 171abc3fab22492a62cb4b6c7068e2357af8001e
depends_on: []
conflicts_with: []
shared_surfaces: [Gradle build logic, Spring Boot global configuration, repository structure, runtime manifests, shared contracts]
allowed_change_scope: [repository archetypes, runtime modes, artifact lifecycle, manifests, validation, modular boundaries]
forbidden_change_scope: [unjustified microservice split, automatic production deployment, replacing working foundations without verified defect]
created_at: null
sent_at: null
executed_at: null
devin_session_reference: null
result_reference: null
---

# P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01
## ARCHITECTURE AI REPOSITORY MODEL, OPERATING MODES, RUNTIME ARCHETYPES, ARTIFACT LIFECYCLE, MCP, LOCAL KNOWLEDGE, ML AND ARCHITECTURE LAB

Continue from the CURRENT REAL Architecture AI implementation state.

DO NOT restart the implementation.
DO NOT replace working foundations without a verified defect.
DO NOT create parallel frameworks for capabilities that already exist.
DO NOT split the platform into microservices without evidence.

The objective of this block is to evolve the CURRENT repository into a clear, governed and extensible Architecture AI platform structure.

This task must establish the repository archetypes, operating modes, runtime boundaries, artifact lifecycle, configuration boundaries and capability modules needed for the platform to continue evolving safely.

This is NOT documentation-only work.

Where safe and consistent with the current implementation, create the actual repository structure, package/module boundaries, Gradle structure, configuration profiles, runtime-mode model, manifests, schemas, archetypes, lifecycle contracts, validation tasks and integration tests.

Do not prematurely implement every future capability.

======================================================================
0. CURRENT PRODUCT BASELINE
======================================================================

Architecture AI currently evolves as ONE PRODUCT.

The principal application is:

Architecture AI
    |
    +-- Spring Boot
    +-- Angular frontend
    +-- MCP Server
    +-- deterministic tools
    +-- local knowledge processing
    +-- work orchestration
    +-- operational APIs
    +-- observability
    +-- future ML capabilities
    +-- future simulation/lab capabilities

Preserve ONE principal deployable application.

Conceptually:

architecture-ai-<version>.jar

The Angular production application should be packaged with the Spring Boot application unless future verified evidence justifies independent frontend deployment.

For OpenShift, this same application will later be packaged into a container image.

Do NOT create microservices simply because internal capabilities are logically separate. Use modular internal architecture first.

======================================================================
1. FOUR OPERATING MODES
======================================================================

Formalize four distinct operating modes of the SAME Architecture AI product:

PLATFORM_DEV
SOLUTION
LAB
SERVICE

These modes must not become four independent codebases.

PLATFORM_DEV develops Architecture AI itself and may require Git, Gradle Wrapper, governed Java/Node toolchains, source, tests, build reports, debugging, simulation development and ML development/evaluation.

SOLUTION is daily architect usage of a stable release. It must not require cloning source, Gradle, Node, npm, Angular CLI or recompiling Architecture AI.

LAB is isolated architecture experimentation, simulation, replay, policy/model evaluation and controlled ML experimentation. LAB must explicitly distinguish OBSERVED, SIMULATED, ASSUMED and EXPERIMENTAL. LAB outputs MUST NOT silently become canonical or operational facts.

SERVICE is the central Architecture AI runtime deployed on OpenShift using the SAME application core. Differences should primarily come from configuration, deployment, security, storage providers, connectors, scaling, networking and observability.

======================================================================
2. RUNTIME MODE MODEL
======================================================================

Introduce or formalize one explicit runtime-mode abstraction equivalent to ArchitectureMode with values PLATFORM_DEV, SOLUTION, LAB and SERVICE.

Avoid scattered arbitrary checks such as if(local), if(dev), if(openshift). Mode behavior must be centralized and validated.

======================================================================
3. CONFIGURATION PROFILES
======================================================================

Use clean Spring Boot configuration layering: shared application.yaml plus profile overlays equivalent to application-dev.yaml, application-solution.yaml, application-lab.yaml and application-service.yaml.

Prefer common baseline + profile overrides. Reject incompatible combinations where appropriate.

======================================================================
4. SAME APPLICATION, DIFFERENT EXECUTION CONTEXT
======================================================================

Preserve:

                     Architecture AI
                            |
                    SAME APPLICATION
                            |
          +-----------------+------------------+
          |                 |                  |
       SOLUTION            LAB               SERVICE
        local             local             OpenShift

PLATFORM_DEV builds and validates all supported execution modes.

======================================================================
5. REPOSITORY ARCHETYPE
======================================================================

Inspect the CURRENT repository first. Do not mechanically rewrite a working repository.

Conceptual target:

architecture-ai/
|-- build-logic/
|-- application/
|-- capabilities/
|   |-- ingestion/
|   |-- knowledge/
|   |-- relevance/
|   |-- work/
|   |-- mcp/
|   |-- agent-tools/
|   |-- ml/
|   |-- simulation/
|   `-- observability/
|-- frontend/
|-- contracts/
|   |-- openapi/
|   |-- schemas/
|   |-- work/
|   |-- ml/
|   `-- simulation/
|-- toolchains/
|-- archetypes/
|-- docs/
`-- gradle/

This is conceptual. Prefer logical package/module boundaries first and physical Gradle modules only when justified.

======================================================================
6. MODULAR MONOLITH FIRST
======================================================================

Maintain clear internal boundaries around Runtime, Configuration, Ingestion, Artifact Processing, Knowledge Processing, Relevance, Work Orchestration, MCP, Agent Tools, ML, Simulation, Observability, Artifact Lifecycle and Frontend/API.

Avoid cyclic dependencies. Domain code should not depend directly on Angular, absolute filesystem paths, Nexus implementation details, OpenShift implementation details, a specific ML model or a specific embedding provider.

======================================================================
7. SINGLE SPRING BOOT DEPLOYABLE / ANGULAR PACKAGING
======================================================================

Preserve ONE Spring Boot application as the primary deployable. The Angular production build is included in the same release. Development may use a frontend dev server; SOLUTION and SERVICE releases must not require Node/npm at runtime.

======================================================================
8. BUILD ENVIRONMENT VS RUNTIME ENVIRONMENT
======================================================================

Formalize:

BUILD ENVIRONMENT = Git + Gradle + Java development toolchain + Node/npm + source + tests + build tooling.

RUNTIME ENVIRONMENT = Architecture AI release + approved Java runtime + configuration + operational storage + approved ML artifacts + approved policies/profiles.

A normal architect workstation must not need the complete build environment.

======================================================================
9. GRADLE ROLE / BUILD INTELLIGENCE
======================================================================

Gradle is the Architecture AI BUILD HARNESS. It may orchestrate Java toolchain, frontend toolchain/build, backend build/tests, architecture checks, dependency validation, SBOM, checksums, artifact assembly, structured build reports, simulation execution, ML evaluation, future publication and future containerization.

Gradle is NOT operational state, canonical knowledge, Git, Nexus, MCP or an ML model registry.

Prefer machine-readable build evidence such as build-result.json, report-index.json, test-summary.json, dependency-summary.json and toolchain-report.json rather than forcing Devin to parse huge console logs.

======================================================================
10. RELEASE ARTIFACT
======================================================================

Prepare stable release artifacts conceptually:

architecture-ai-<version>.jar
architecture-ai-<version>-sbom.*
architecture-ai-<version>-manifest.json
architecture-ai-<version>-checksums.sha256

Release manifest should support applicationVersion, gitCommit, buildVersion, GradleVersion, JavaRuntimeBaseline, frontendBuildIdentity, contractVersions, schemaVersions and createdAt without machine-specific paths or secrets.

======================================================================
11. GIT / NEXUS / LOCAL AUTHORITY
======================================================================

Git remains authority for source, Gradle logic, schemas, contracts, policies, architecture docs, semantic profiles, model/dataset manifests, simulation definitions, MCP/tool definitions, AAI-owned Skills, migrations and configuration templates.

Git must not become primary storage for large datasets, model binaries, active SQLite databases, Lucene indexes, node_modules, caches, mutable runtime data or active logs.

Nexus stores immutable distributable artifacts. Java/application artifacts belong in the appropriate Maven repository. Generic immutable artifacts such as models, datasets, evaluation bundles and portable runtime archives belong in suitable hosted/raw storage where supported.

Local runtime stores mutable state under a governed local location such as ~/.architecture-ai/ with runtime, config, db, lucene, models, logs, temp, cache, work, snapshots and lab areas. Active mutable state must not run from Git, OneDrive or Nexus.

======================================================================
12. PORTABLE RUNTIME / SOLUTION LAUNCHER
======================================================================

Architecture AI should not depend on random global machine tooling. An architect may have multiple Java versions or none globally; Architecture AI must use its approved governed runtime.

Prepare runtime metadata including runtime ID/version, OS, architecture, artifact coordinates, checksum and installation location.

Prepare a clean launcher boundary able eventually to verify runtime/application/checksums, start Architecture AI and report health/version/local URL, with future controlled install/update/rollback. Do not overbuild the updater now.

======================================================================
13. VERSION IDENTITIES
======================================================================

Separate at minimum APPLICATION_VERSION, RUNTIME_VERSION, MODEL_VERSION, DATASET_VERSION, KNOWLEDGE_SCHEMA_VERSION, CONTRACT_VERSION, EXTRACTION_PROFILE_VERSION, POLICY_VERSION and SIMULATION_MODEL_VERSION. They evolve independently.

======================================================================
14. LOCAL KNOWLEDGE PROCESSING
======================================================================

Preserve the deterministic pipeline:

OneDrive -> DISCOVER -> IDENTIFY -> PROFILE -> RELEVANCE / VALUE GATE -> EXTRACTION PROFILE -> EXTRACTION PLAN -> EXTRACT -> NORMALIZE -> VALIDATE -> INDEX -> COMPARE -> KNOWLEDGE SIGNAL -> WORK.

Source OneDrive remains read-only. Architecture-AI managed OneDrive subtree remains excluded from ordinary source ingestion by default.

A file existing does not justify extracting it. Support outcomes IGNORE, INDEX_METADATA_ONLY, PROFILE_ONLY, EXTRACT_TARGETED, EXTRACT_FULL, DEFER, REQUIRES_SEMANTIC_CLASSIFICATION.

Keep technical parsing separate from semantic meaning: ArtifactHandler = HOW; ExtractionProfile = WHAT it means.

Keep RELEVANCE, AUTHORITY and FRESHNESS independent. Support partial relevance below document level.

======================================================================
15. LOCAL ML ROLE / ML BEFORE DEVIN
======================================================================

ML is an assistive LOCAL scoring/ranking layer, not a replacement for deterministic controls. Initial capabilities may include embeddings, semantic similarity, relevance scoring, reranking, novelty detection, family grouping and future lightweight classifiers.

Do not require custom deep-learning training immediately. Do not introduce an external vector DB without evidence; prefer existing Lucene vector capabilities where suitable.

Use deterministic signals + local ML -> composite assessment -> AUTO / SUPPRESS / UNKNOWN -> Devin only where required. ML should reduce irrelevant evidence, Work Items, unnecessary context, tool calls and Devin cost.

======================================================================
16. MODEL / DATASET / FEEDBACK LIFECYCLE
======================================================================

Promoted model artifacts must be immutable, versioned, checksummed and traceable. Model binary in Nexus; model manifest in Git.

Create versioned model-manifest archetype with fields such as modelId, version, modelType, artifactCoordinates, sha256, runtimeRequirements, input/output schema versions, preprocessingVersion, embeddingDimension, compatibleDataset, evaluationReference, promotionStatus and createdAt.

Operational feedback is not automatically an official dataset. Lifecycle: operational feedback -> candidate labels -> validation -> dataset snapshot -> evaluation -> versioned dataset. Dataset binary in Nexus; dataset manifest in Git.

Do not automatically promote feedback, modify official datasets or retrain production models.

Prepare ML lineage through applicationVersion, modelVersion, datasetVersion, embeddingModelVersion, preprocessingVersion, policyVersion and thresholdVersion.

======================================================================
17. LAB ISOLATION / PROMOTION
======================================================================

LAB state must be isolated from SOLUTION operational database, knowledge, work queue, approved model, approved dataset and canonical knowledge.

Prepare lifecycle states such as EXPERIMENTAL, CANDIDATE, VALIDATED, APPROVED, RELEASED, DEPRECATED and REJECTED.

Promotion concept: LAB -> evaluation -> candidate -> validation -> approval -> immutable artifact -> Nexus -> SOLUTION/SERVICE. No manual copying into production runtime directories.

======================================================================
18. SIMULATION & EVALUATION HARNESS
======================================================================

Prepare a deterministic/reproducible simulation/evaluation capability supporting extensible scenario testing, Monte Carlo, discrete-event simulation, queueing/capacity, reliability/failure analysis, graph impact simulation, replay, cost analysis and synthetic usability scenarios.

Do not implement every simulator in depth now. Create SPI/contracts/archetypes needed for progressive implementation.

Create a versioned SimulationRun contract containing simulation/scenario identities, runId, randomSeed, iterations, parameters, inputReferences, evaluators, times and status. Every input value must be classifiable as OBSERVED, SIMULATED, ASSUMED or EXPERIMENTAL. Persist random seeds.

Support distribution statistics only where meaningful, including mean, median, P50/P90/P95/P99, min/max, standardDeviation and confidenceInterval with metric meaning/unit/population/calculation method.

======================================================================
19. KNOWLEDGE SIGNAL / WORK MODEL
======================================================================

Prepare durable KnowledgeSignal concepts such as NEW_CANDIDATE_FACT, VALUE_CONFLICT, SCHEMA_UNKNOWN, PROFILE_UNKNOWN, UNRESOLVED_TERM, AMBIGUOUS_RELATIONSHIP, POSSIBLE_DUPLICATE, NOVEL_INFORMATION, AUTHORITY_CONFLICT, STALE_INFORMATION and NO_ACTION. Every signal is traceable to evidence.

KnowledgeWorkItem represents a bounded reasoning problem; KnowledgeWorkPackage groups related WorkItems. Use pull-based Devin execution: deterministic processing -> persistent READY work -> Devin claims -> bounded deterministic tools -> structured result. Platform continues processing if Devin is unavailable.

Use a deterministic envelope: deterministic input -> Devin reasoning -> structured validated output. A Devin result must not directly overwrite canonical knowledge.

======================================================================
20. MCP ROLE / TOOLS / SKILLS
======================================================================

Architecture AI exposes deterministic capabilities through MCP. MCP is the protocol boundary. Do not introduce another competing agent/tool protocol.

Tools are deterministic bounded capabilities, for example work/evidence/artifact/knowledge/graph/build/simulation operations. Do not expose arbitrary executeShell(command) as the normal agent interface.

Work Items should request capabilities rather than permanently hard-code physical tool names where possible.

TOOL = deterministic operation.
SKILL = reusable procedure describing HOW Devin solves a class of problems.
WORK ITEM = concrete problem instance.

Do not create one Skill per MCP tool and do not depend on unstable experimental Gradle AI Skills at this stage.

======================================================================
21. DEVIN CONTEXT OPTIMIZATION / OBSERVABILITY
======================================================================

Large source -> deterministic extraction -> relevance filtering -> local retrieval -> reranking -> bounded evidence -> WorkPackage -> Devin. Use SUMMARY FIRST / DETAIL ON DEMAND.

Preserve observability contract: SQLite/ledger for durable state, Micrometer for metrics, OpenTelemetry for causal traces, structured logs for significant lifecycle/errors, audit for governed attributable actions. Extend across runtime mode, build, ML, simulation, Work Items and MCP tools. Do not log bodies/transcripts/credentials/tokens/PAN/private extracted content.

LAB telemetry must be distinguishable from real SOLUTION/SERVICE telemetry.

======================================================================
22. OPENSHIFT SERVICE ARCHETYPE
======================================================================

Prepare SERVICE-mode deployment boundaries. Conceptual path: Git -> Gradle -> JAR -> release -> container image -> approved registry -> OpenShift.

Do not assume final registry/provider if not verified. Keep storage/security/config/secrets/networking/replicas/health/resource limits/observability/external connectors outside core domain logic.

Do not split Architecture AI now. Preserve evidence that could later justify extraction: independent scaling, resource profile, availability requirement, release cadence, security isolation, ownership or measured contention.

======================================================================
23. ARCHETYPES TO CREATE
======================================================================

Create useful versioned archetypes/templates/contracts for Runtime Mode, Architecture AI Release Manifest, Portable Runtime Manifest, MCP Tool Definition, Architecture AI Skill, Extraction Profile, Model Manifest, Dataset Manifest, Simulation Scenario, Simulation Run, Knowledge Work Item, Knowledge Work Package and Structured Work Result.

Avoid empty ceremony. Each archetype must have a clear consumer/use case.

======================================================================
24. VALIDATION / TEST MATRIX
======================================================================

Add automated checks where practical: SOLUTION cannot use EXPERIMENTAL model; SERVICE cannot accidentally activate LAB storage; LAB cannot mutate SOLUTION canonical state; manifests must contain required metadata/checksums; MCP tools must have bounded schemas; runtime config must declare operating mode.

Expose important checks through architectureCheck or equivalent.

Validate PLATFORM_DEV build, SOLUTION release-style runtime without Node/Gradle, LAB isolation and SERVICE configuration loading with appropriate test providers.

======================================================================
25. DO NOT OVERIMPLEMENT
======================================================================

This wave is primarily STRUCTURE, BOUNDARIES, ARCHETYPES, CONTRACTS, CONFIGURATION and VALIDATION.

Do not spend this task implementing a complete ML training platform, full digital twin, every simulation engine, complex updater, multi-cluster deployment, dozens of MCP tools/Skills or microservice decomposition.

======================================================================
26. MIGRATION APPROACH
======================================================================

Inspect existing repository before changing structure. For each structural change identify existing implementation, preserve compatibility, move only where justified, update imports/build config, run tests and prove no regression. Do not perform cosmetic large directory reorganization.

======================================================================
27. DOCUMENTATION DELIVERABLES
======================================================================

Create ARCHITECTURE_AI_REPOSITORY_BASELINE.md covering current/target structure, actual changes, operating modes, modular-monolith boundaries, Spring Boot/Angular packaging, MCP architecture, Gradle/Git/Nexus responsibilities, local runtime layout, portable runtime, launcher boundary, ML/dataset lifecycle and lineage, LAB isolation/promotion, simulation harness, Knowledge Work model, MCP Tool/Skill model, OpenShift SERVICE archetype, future decomposition criteria, version model, validation/test matrix, known gaps, decisions not made, exact files changed/tests and recommended next implementation block.

Also create/update OPERATING_MODES.md, ARTIFACT_LIFECYCLE.md, RUNTIME_LAYOUT.md, MCP_CAPABILITY_MODEL.md, ML_ARTIFACT_GOVERNANCE.md and SIMULATION_HARNESS.md.

Create a small machine-readable Architecture AI repository/platform manifest if no clean equivalent exists, without duplicating Gradle metadata.

======================================================================
28. DEFINITION OF DONE
======================================================================

The CURRENT repository must have a clear validated structure supporting PLATFORM_DEV, SOLUTION, LAB and SERVICE and deterministically explain what gets built/distributed/run locally/run in OpenShift; where MCP/tools/Skills/ML/datasets/simulations/mutable state live; what Git/Nexus govern; what LAB may change; what SOLUTION consumes; how artifacts promote; and how future decomposition is evidence-driven.

At completion run complete existing Gradle validation/build, architectureCheck or equivalent, show resulting repository tree/runtime-mode config, sample release/model/dataset/simulation/MCP/Skill/WorkItem/WorkPackage manifests/contracts, exact tests/results and exact files changed.

Do NOT declare completion from documentation alone.

======================================================================
29. FINAL ARCHITECTURAL PRINCIPLES
======================================================================

1. ONE PRODUCT FIRST.
2. MODULAR MONOLITH BEFORE MICROSERVICES.
3. EVIDENCE BEFORE DECOMPOSITION.
4. GIT FOR SOURCE/DEFINITIONS.
5. NEXUS FOR IMMUTABLE DISTRIBUTABLE ARTIFACTS.
6. LOCAL RUNTIME FOR MUTABLE OPERATIONAL STATE.
7. LAB IS ISOLATED FROM SOLUTION.
8. EXPERIMENTAL DOES NOT MEAN APPROVED.
9. PROMOTION IS EXPLICIT.
10. MCP IS THE AGENT TOOL BOUNDARY.
11. TOOLS ARE DETERMINISTIC CAPABILITIES.
12. SKILLS ARE REUSABLE AGENT PROCEDURES.
13. DEVIN RECEIVES BOUNDED WORK, NOT RAW BULK DATA.
14. ML REDUCES UNCERTAINTY BEFORE DEVIN.
15. SIMULATION PROVIDES EVIDENCE BEFORE ARCHITECTURAL CHANGE.
16. GRADLE BUILDS AND VALIDATES; IT DOES NOT OWN RUNTIME STATE.
17. THE NORMAL ARCHITECT DOES NOT COMPILE THE PLATFORM.
18. THE SAME APPLICATION CORE MUST RUN LOCALLY AND EVOLVE TOWARD OPENSHIFT SERVICE MODE.
19. PORTABILITY MUST ELIMINATE WORKS-ON-MY-MACHINE DEPENDENCIES.
20. DO NOT REINVENT CAPABILITIES ALREADY PROVIDED BY THE PLATFORM, SPRING, GRADLE, NEXUS OR OTHER APPROVED COMPONENTS.

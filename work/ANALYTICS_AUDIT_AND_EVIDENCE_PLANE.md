# Analytics, Audit and Evidence Plane

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0005

## Purpose

Define how Architecture AI turns operational evidence into explainable analysis without treating logs, traces or AI interpretation as the source of truth.

The platform must progressively support a dedicated analysis capability that can answer questions about architecture, engineering, quality, cost, delivery, standards, knowledge, security and process evolution using correlated governed evidence.

## Core principle

STATE + EVIDENCE + TELEMETRY + LINEAGE
→ NORMALIZED OBSERVATIONS
→ DETERMINISTIC READ MODELS
→ ANALYTICS
→ GRAPH PROJECTION
→ DIRECTOR ANSWERS / LAB SIMULATION

Analysis is downstream from evidence. Analysis does not rewrite evidence.

## Evidence families

Keep these concerns distinct but correlatable:

- Git history, commits, branches, PRs and issues
- specifications, schemas and OpenAPI contracts
- governance gates and decisions
- Arc42 release history and deltas
- Work/WorkPackage/Assignment/Execution state
- Event ledger and Saga state
- audit events
- structured application logs
- OpenTelemetry traces
- OpenTelemetry metrics
- runtime health
- build/test/static-analysis results
- dependency/SBOM findings
- security/compliance findings
- standards-conformance evidence
- knowledge-source provenance
- data lineage
- AI-provider usage/cost observations
- LAB simulation/replay results

Do not merge all of these into one generic log table.

## Audit vs logs vs traces vs metrics

AUDIT answers: who/what performed a governed action, against which resource, with what result and authority.

LOGS answer: what diagnostic/lifecycle information the software emitted.

TRACES answer: how one operation propagated through components and calls.

METRICS answer: aggregate quantitative behavior over time.

EVENT LEDGER answers: which durable domain/integration events were published/processed/replayed.

SAGA STATE answers: where a long-running governed workflow currently is.

GIT answers: what governed source/config/specification changed and why through version history.

ARC42 RELEASE HISTORY answers: which auditable architecture projection was distributed at a point in time.

No one of these replaces the others.

## Correlation model

Use stable correlation references where safe and appropriate:

- directionRevision
- repositoryCommit / branch / PR / issue
- specificationId
- decisionId
- workPackageId
- assignmentId / executionId
- sagaId
- eventId
- traceId
- auditEventId
- sourceArtifactId
- observationSnapshotId
- Arc42ReleaseId

High-cardinality identifiers are acceptable in traces/audit/read models when safe, but not as ordinary metric labels.

## OpenTelemetry role

Use OpenTelemetry/OTLP as the telemetry standards boundary.

Use standard semantic conventions first and custom `aai.*` attributes only for genuine domain gaps.

The current project should pin and record the semantic-convention version used by the implementation because convention stability differs by domain and evolves over time.

Collector failure must degrade telemetry, not break core Architecture AI work.

## Analysis data road

Preferred local-first flow:

Runtime / Git / Work / Build / Quality / Provider
→ deterministic collectors/adapters
→ normalized observations
→ local operational store
→ analytical snapshots where needed
→ Parquet or equivalent governed analytical projection when justified
→ LAB analysis/simulation

Do not introduce a separate data platform merely to perform local analysis.

## Data lineage

Use OpenLineage concepts where they add value to analytical datasets/jobs/runs and transformation provenance.

At minimum preserve:

- source datasets/artifacts
- transformation/job identity
- run identity
- input/output relationships
- schema/version
- execution parameters where relevant
- producer/version

Do not deploy a full lineage platform until the local use case proves it necessary.

## Deterministic analytics first

The analysis area should prefer deterministic calculations for:

- counts
- rates
- durations
- distributions
- backlog aging
- cycle/lead time
- blocked ratio
- issue trends
- test/build pass rate
- standards coverage
- gate pass/fail
- documentation coverage
- evidence freshness
- source freshness
- AI usage/cost
- deterministic-vs-AI work ratio
- graph coverage
- data-quality indicators

Use AI reasoning after deterministic facts are available, for explanation, synthesis, anomaly interpretation or trade-off analysis.

## Quality analysis

Progressively measure software/product quality against a governed quality model rather than an ad-hoc dashboard.

ISO/IEC 25010:2023 is a candidate reference model for product-quality characteristics and measurement mapping. Adoption must be explicit and licensed/used appropriately.

DORA software-delivery metrics are candidate operational delivery indicators, including current throughput and instability measures. They are indicators, not a replacement for Architecture AI gates.

## Cost analysis

AI-provider cost/usage is an explicit architecture metric.

Measure where available:

- provider
- work type
- ACUs/tokens/usage units
- evidence/context size
- tool calls
- retries/rework
- duration
- result status
- value/outcome proxy

The analysis function should identify repeated AI-heavy operations that are stable enough to migrate toward deterministic Spring/Gradle/local implementations.

## Security and vulnerability analysis boundary

Discovery of a vulnerability or suspicious condition does not authorize exploitation.

In LAB, Architecture AI may perform safe bounded analysis and explicitly authorized proof-of-concept validation against controlled targets.

In SOLUTION/SERVICE, default behavior is passive analysis, classification, evidence capture, risk/work creation and escalation unless an explicit authorized security-testing policy permits more.

Never infer permission from technical capability.

## Analysis workstream

Treat Analysis as a logical workstream/capability first, not automatically as a permanent autonomous agent.

Preferred evolution:

DETERMINISTIC METRICS / QUERIES
→ ANALYSIS TOOLS
→ REUSABLE ANALYSIS SKILLS
→ ANALYSIS AGENT only if cross-domain reasoning workload justifies it

## Dashboard / Director questions

The Director should progressively answer questions such as:

- What changed and what evidence proves it?
- Which gates are failing and why?
- Which standards are only documented versus actually verified?
- What are our highest recurring failure sources?
- Which work is blocked and for how long?
- Which changes cause the most rework?
- Which parts of the platform consume the most Devin usage?
- What should be moved from AI reasoning to deterministic code next?
- How current is our knowledge?
- Which process or architecture layer has the weakest evidence?
- What changed since the last Arc42 release?

Every answer should distinguish observed facts, derived deterministic metrics, AI interpretation, simulation and unknowns.

## Retention / privacy

Do not retain sensitive content merely because it is useful for analytics.

Use classification, redaction, minimization and retention policy by data type.

Avoid copying complete prompts, email content, document bodies or secrets into telemetry when references/IDs and bounded metadata are sufficient.

## Acceptance direction

The analysis capability is considered mature only when a user can trace an analytical conclusion back to the underlying evidence, transformation/version and applicable standard/policy.

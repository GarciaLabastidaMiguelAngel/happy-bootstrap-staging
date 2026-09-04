# Architecture AI Governance Gates

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision target: DIRECTION-0002
Purpose: define the initial deterministic-first gate model for Architecture AI work.

## Core construction order

Until explicitly revised, new platform capability should be evaluated in this order:

1. Can the requirement be solved deterministically with existing code/frameworks/contracts?
2. If not, does a bounded deterministic Tool add the missing capability?
3. If repeated procedural orchestration is needed, does a Skill make sense?
4. Only after those layers are insufficient, evaluate whether an Agent is justified.

Default order:

DETERMINISTIC
→ TOOL
→ SKILL
→ AGENT

Do not jump directly to an autonomous agent because the problem sounds intelligent.

## Gate philosophy

Gates must prevent incoherent progress without becoming ceremonial bureaucracy.

A gate exists only when it protects a real quality attribute, contract, policy, regulatory/compliance obligation, dependency or architectural invariant.

Prefer machine-verifiable gates where possible.

Human review is reserved for decisions that genuinely require judgment, approval or accountability.

## Gate classes

### G0 — Intent / Scope Gate

Questions:
- Is the requested objective understood?
- Is it in current platform scope?
- Is the relevant direction revision known?
- Are non-goals clear?

Failure outcome:
`BLOCKED_BY_SCOPE_OR_CONTEXT`

### G1 — Specification Gate

Questions:
- Is there an adequate specification for material behavior?
- Are interfaces/contracts explicit?
- Are assumptions and acceptance criteria recorded?
- Is the intended source of truth defined?

Examples of formal artifacts where applicable:
- OpenAPI
- JSON Schema
- event schema
- database migration/schema
- configuration schema
- policy definition

Failure outcome:
`SPECIFICATION_REQUIRED`

### G2 — Standards / Evidence Gate

Questions:
- Which standards/frameworks/RFCs/policies apply?
- Is the chosen approach supported by real evidence?
- Is there a material unresolved research question?

If broad investigation is needed:
create ResearchRequest
→ Research/Discovery workstream
→ evidence
→ reconciliation

Engineering does not silently absorb open-ended research.

### G3 — Architecture Gate

Questions:
- Does the change respect current product shape and module boundaries?
- Does it preserve local-first/OpenShift-ready direction?
- Does it respect authority boundaries for Git, runtime stores, Nexus, OneDrive and LAB data?
- Does it duplicate an existing shared platform capability?
- Does it introduce an unnecessary new dependency/product/protocol?

### G4 — Security / Compliance Gate

Questions:
- Are authentication/authorization boundaries explicit?
- Are secrets externalized?
- Are data classifications respected?
- Is sensitive information prevented from logs/telemetry/UI where needed?
- Are applicable security/compliance requirements satisfied or explicitly blocked?

Unknown institutional requirements must remain explicit gaps.

### G5 — Contract / Compatibility Gate

Questions:
- Do API/event/data contracts validate?
- Are schema versions and compatibility rules respected?
- Are shared surfaces changed in a coordinated way?
- Do dependent workstreams require Context Refresh or impact review?

### G6 — Engineering Quality Gate

Use deterministic validation where possible:
- compilation
- unit tests
- integration tests
- architecture checks
- static analysis
- dependency checks
- migration checks
- API contract validation
- failure/restart/idempotency tests where applicable

Programming patterns must be justified by the problem and framework conventions.

Do not introduce patterns such as Singleton, Factory, Repository, Strategy or others merely to claim pattern usage. Prefer framework-native/language-native mechanisms when they already solve the concern.

### G7 — Operability / Observability Gate

Questions:
- Is the feature observable?
- Are health/degradation semantics defined?
- Are failures diagnosable without exposing sensitive data?
- Are important actions auditable where required?
- Does telemetry follow existing Micrometer/OpenTelemetry conventions?

### G8 — Documentation Gate

Questions:
- Did the implementation materially change architecture, contracts, operation or governance?
- Were the appropriate architecture docs/specifications updated?
- Is generated/executable documentation derived from formal contracts where possible?

Documentation is part of the result, not a cleanup task after implementation.

### G9 — Reconciliation / Acceptance Gate

Questions:
- Does the result still align with active direction?
- Did another accepted change invalidate assumptions?
- Are all required evidence items present?
- Are blockers resolved or intentionally deferred?
- Is the result ready to join the accepted baseline?

Possible outcomes:
- ACCEPTED
- ACCEPTED_WITH_EXPLICIT_GAPS
- REWORK_REQUIRED
- RESEARCH_REQUIRED
- HUMAN_DECISION_REQUIRED
- REJECTED

## Solution-process gates

A future architecture solution should move through a governed sequence rather than directly from chat to documentation.

Conceptual lifecycle:

REQUEST
→ INTENT/SCOPE
→ SPECIFICATION
→ STANDARDS/EVIDENCE
→ ARCHITECTURE
→ SECURITY/COMPLIANCE
→ CONTRACTS
→ IMPLEMENTATION
→ VALIDATION
→ DOCUMENTATION
→ REVIEW/APPROVAL
→ OPERABILITY

The director must be able to explain the current gate and blocker.

## Deterministic gate harness

The Gradle/build harness and runtime control plane should progressively automate gate checks.

Candidate harness capabilities:

- specification/schema validation
- OpenAPI validation
- architecture boundary checks
- prompt metadata validation
- dependency/conflict validation
- tests/build
- migration verification
- secret-pattern checks
- telemetry convention checks
- documentation/reference checks
- simulation scenario validation
- change-impact checks

A green build alone is insufficient if a required architecture/specification/compliance gate failed.

## Gate evidence model

Each gate evaluation should eventually produce a bounded record:

- gateId
- gateType
- subject/work reference
- directionRevision
- repositoryBaseline
- status: PASS / FAIL / BLOCKED / NOT_APPLICABLE / UNKNOWN
- deterministic: true/false
- evidenceReferences
- blockingIssues
- evaluator type: SYSTEM / HUMAN / DEVIN / OTHER_AGENT
- observedAt
- policy/specification version

## Dashboard expectation

The dashboard/chat should be able to present:

- current gate for a WorkPackage/solution
- passed gates
- failed/blocked gates
- exact blocker
- owner/workstream
- required evidence/action
- whether the blocker prevents all work or only a subset

The user should not need to inspect raw logs or spreadsheets to understand why work cannot proceed.

# Architecture AI Engineering Execution Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0003

## 1. Purpose

Define how Architecture AI plans, executes, researches, validates, refactors and documents platform construction while allowing safe parallel work and minimizing unnecessary Devin/LLM consumption.

The governing execution principle is:

PLAN BEFORE EXECUTION.

Execution without an explicit plan is allowed only for trivial/local changes whose impact is bounded and deterministically verifiable.

## 2. Planning-first flow

For material work use:

Objective
→ current platform context
→ specification
→ architecture/impact plan
→ dependency and blocker analysis
→ parallelization decision
→ execution plan
→ implementation
→ deterministic validation
→ evidence
→ continuous quality review
→ reconciliation
→ documentation

The plan must state:

- objective/outcome
- current direction revision
- repository baseline
- affected modules/contracts
- dependencies
- blockers
- research questions
- owned/protected surfaces
- applicable governance gates
- acceptance evidence
- whether work may continue while research is pending

## 3. Research blocking rule

A material unknown does not automatically stop the whole workstream.

Classify each unresolved question as:

- BLOCKING_NOW: implementation decision would create material rework, incompatibility, security/compliance risk or contract instability.
- NON_BLOCKING_WITH_SAFE_DEFAULT: a standard/framework-native or reversible implementation can proceed without prejudicing the later decision.
- PARALLEL_RESEARCH: research can occur while unaffected implementation continues.
- DEFERRED: no current implementation consequence.

Engineering must not hide uncertainty.

When research is broad/open-ended, Engineering creates a ResearchRequest and delegates it.

Engineering may continue only on surfaces that remain safe.

## 4. Safe temporary/default implementation

A temporary/default implementation is allowed only when:

- it follows an existing framework-supported pattern;
- it does not freeze a public contract prematurely;
- migration/refactor cost is bounded;
- it does not bypass a required security/compliance gate;
- it does not create incompatible persistent data without migration planning;
- it is explicitly marked as provisional where material;
- tests protect observable behavior.

Do not use 'we can refactor later' as justification for knowingly creating structural debt in shared contracts, persistence schemas, security boundaries or public APIs.

## 5. Pattern policy

Patterns are tools, not compliance trophies.

For each non-trivial pattern decision, record:

- problem being solved
- candidate simpler/framework-native approach
- selected pattern
- reason
- trade-offs
- affected modules
- validation/evidence

Examples such as Strategy, Factory, Adapter, Facade, State, Saga, Repository or Singleton are used only when the problem warrants them.

Prefer Spring/framework lifecycle and dependency management over manual Singleton patterns.

## 6. Parallel development model

Parallelize by bounded capabilities/modules, not by arbitrary prompt count.

Before starting a parallel workstream identify:

- owned files/modules
- shared contracts
- protected files/modules
- migration ownership
- API/schema ownership
- event/saga ownership
- build/config ownership
- merge/reconciliation point

A session may be `PARALLEL_SAFE_WITH_BOUNDARIES` when its implementation can proceed independently while consuming, but not redefining, shared contracts.

## 7. Modular monolith rule

Architecture AI remains one principal product/deployable until evidence justifies decomposition.

Spring Modulith/module boundaries should be used to make ownership, dependencies and events explicit where appropriate.

Parallel development should align with module boundaries while preserving one coherent product.

Do not turn parallel sessions into premature microservices.

## 8. Construction lane and quality lane

Separate two complementary loops:

### Construction lane

Plans and delivers accepted capability changes.

### Continuous quality lane

Continuously analyzes accepted integration state for:

- code smells
- complexity
- dependency direction
- module boundary violations
- duplication
- error hotspots
- test gaps
- performance regressions
- security findings
- API/contract drift
- persistence/migration issues
- observability gaps
- issue trends

The quality lane may propose/refactor, but must not silently alter public contracts or active architectural direction.

Material refactors require impact analysis and normal gates.

## 9. Issue lifecycle

Problems discovered during implementation/validation/operation become governed issues rather than chat-only observations.

Suggested states:

OPEN
→ TRIAGED
→ PLANNED
→ IN_PROGRESS
→ VALIDATING
→ RESOLVED
→ RECONCILED

Additional:

BLOCKED
DEFERRED
DUPLICATE
WONT_FIX

Each material issue should reference:

- affected component/module
- evidence
- severity/priority
- direction revision
- related WorkItem/WorkPackage
- owner/workstream
- branch/commit/PR when applicable
- validation proving resolution

## 10. Engineering evidence

A coding session is not complete merely because files changed.

Expected evidence where applicable:

- build result
- tests
- architecture/module checks
- contract/schema validation
- migration validation
- static analysis
- dependency analysis
- runtime smoke/integration tests
- performance evidence when performance-sensitive
- security/compliance gate evidence
- documentation delta

## 11. Deterministic-first engineering

Use deterministic tooling for:

- compilation
- unit/integration tests
- lint/static analysis
- dependency inspection
- schema validation
- OpenAPI validation
- module-boundary checks
- migration validation
- metrics extraction
- code-quality reports
- issue/report generation from structured evidence

Use Devin/LLM reasoning for synthesis, ambiguous trade-offs, architecture reasoning and remediation proposals where deterministic tooling is insufficient.

## 12. Cost-aware execution

Every repeated AI-assisted engineering step should eventually be evaluated for migration toward:

DETERMINISTIC CODE
→ TOOL
→ SKILL
→ AGENT

Track where Devin is spending effort/tokens/ACUs and ask whether the same recurring operation can be safely moved into Spring/Gradle/static analysis/harness logic.

The objective is not to remove Devin; Devin remains the reasoning provider/LLM where reasoning adds value.

The objective is to avoid paying AI cost for deterministic/repeatable work.

## 13. Documentation as output of the process

Planning and execution should naturally produce reusable documentation/evidence:

- objective and scope
- architecture rationale
- specifications/contracts
- standards/evidence used
- decisions and alternatives
- implementation state
- risks/blockers
- gate results
- test/quality evidence
- operational considerations

This material is later projected into human deliverables rather than manually reconstructed from chats.

## 14. Director questions this model must answer

The Director must be able to answer:

- What are we building now?
- What was planned before execution?
- What is running in parallel and why is it safe?
- Which research questions are blocking and which are not?
- What technical debt was accepted temporarily?
- What issues are open and who owns them?
- What quality/refactor work is pending?
- What evidence proves the current implementation is healthy?
- What changes could affect another session/workstream?

## 15. Working principle

Plan deeply enough to protect architecture and contracts.

Execute incrementally enough to keep momentum.

Research in parallel when safe.

Measure continuously.

Refactor based on evidence.

Document from governed state.

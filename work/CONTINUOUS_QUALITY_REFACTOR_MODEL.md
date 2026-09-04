# Continuous Quality, Review and Refactor Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0003

## 1. Objective

Architecture AI must not depend on one implementation session noticing every defect. A continuous quality/review capability must inspect the accepted integration baseline and generate evidence-backed improvement work.

This is a quality loop around the same product, not a competing implementation team.

## 2. Quality loop

Accepted integration baseline
→ deterministic analysis
→ metrics/findings
→ issue classification
→ impact/risk assessment
→ remediation/refactor proposal
→ planned change
→ implementation
→ validation
→ reconciliation

## 3. Inputs

Use real evidence where available:

- compiler/build/test results
- Gradle dependency reports
- Spring Modulith/module verification
- static analysis/lint
- coverage/test inventory
- OpenAPI/schema drift checks
- DB migration checks
- runtime errors/exceptions
- structured logs
- OpenTelemetry metrics/traces
- performance measurements
- security scanner findings when available
- Git issues/PRs/commits
- code ownership/module change frequency
- defect recurrence

Do not ask an LLM to fabricate quality metrics.

## 4. Finding classes

At minimum:

- DEFECT
- RELIABILITY_RISK
- SECURITY_RISK
- COMPLIANCE_GAP
- PERFORMANCE_RISK
- ARCHITECTURE_DRIFT
- MODULE_BOUNDARY_VIOLATION
- CONTRACT_DRIFT
- DATA_MIGRATION_RISK
- TEST_GAP
- OBSERVABILITY_GAP
- CODE_SMELL
- DUPLICATION
- DOCUMENTATION_DRIFT
- TECHNICAL_DEBT

## 5. Remediation policy

Not every finding triggers immediate refactor.

Classify:

- FIX_NOW
- PLAN_NEXT
- SAFE_TO_DEFER
- NEEDS_RESEARCH
- NEEDS_ARCHITECTURE_DECISION
- FALSE_POSITIVE / ACCEPTED

A refactor touching shared contracts, storage schemas, security boundaries, cross-module behavior or runtime topology requires normal impact analysis/gates.

## 6. Automated vs reasoning responsibilities

Deterministic tools identify measurable conditions and enforce explicit rules.

Devin/AI may:

- synthesize findings
- identify likely root causes from evidence
- group related issues
- propose bounded refactors
- explain trade-offs
- prepare implementation plans

AI must not mark a deterministic gate PASS without the required evidence.

## 7. Continuous architecture conformance

Progressively verify:

- allowed module dependencies
- package/module boundaries
- no provider-specific APIs leaking into core domain
- no direct bypass of governed interfaces
- API/schema compatibility
- event/saga contract ownership
- storage authority rules
- mode separation (`PLATFORM_DEV`, `SOLUTION`, `LAB`, `SERVICE`)
- forbidden dependency/config patterns

These checks should migrate into the architecture/build harness as deterministic rules where practical.

## 8. Error and issue intelligence

Runtime/build errors should become structured Error/Issue evidence with:

- error code/category
- occurrence count
- first/last observed
- affected version/commit
- component/module
- trace/correlation reference where available
- severity
- current owner
- linked fix/validation

Repeated failures should be grouped instead of creating notification/issue spam.

## 9. Refactor safety

Refactors should preserve observable contracts unless an approved contract change exists.

Prefer characterization/regression tests before structural refactors on weakly tested code.

Do not mix broad refactor with unrelated feature delivery when separation makes review safer.

## 10. Dashboard visibility

Expose progressively:

- open quality findings by class/severity
- issue backlog
- recurring defects
- latest quality scan
- build/test status
- architecture conformance
- module boundary violations
- API/contract drift
- refactor candidates
- technical-debt trend
- mean age of unresolved critical findings
- remediation status

## 11. Future specialist workstreams

Architecture AI may delegate bounded quality roles such as:

- Code Quality Review
- Architecture Conformance
- Reliability/Error Analysis
- Performance Analysis
- Security/Compliance Analysis
- Refactor Planning

These are logical workstreams first. Do not create permanent autonomous agents until deterministic tools/skills and workload evidence justify them.

## 12. Completion principle

The product evolves through two synchronized loops:

CAPABILITY DELIVERY
and
CONTINUOUS QUALITY / REFACTOR.

Neither loop may silently redefine project direction. Both reconcile against the same direction, specifications, gates and Git baseline.

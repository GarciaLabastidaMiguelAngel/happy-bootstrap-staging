# Session Context Pack Template

Status: ACTIVE_TEMPLATE
Purpose: provide every delegated Devin session enough governed context to execute safely without relying on hidden or accidental chat history.

## Metadata

- context_pack_id:
- prompt_id:
- direction_revision:
- repository_baseline:
- workstream_role: ENGINEERING | RESEARCH | VALIDATION | RECONCILIATION | ARCHITECTURE
- parallelism_decision:
- devin_session_reference:
- created_at:
- refreshed_from:

## 1. Mission

State the bounded objective for this session.

## 2. Why this work exists

Summarize the architectural/business reason and where it fits in Architecture AI.

## 3. Current direction

Reference `work/DIRECTION_BASELINE.md` and summarize only the principles materially relevant to this session.

## 4. Current evidence/baseline

Record:

- repository ref/commit
- relevant implemented capabilities
- relevant verified environment facts
- relevant tests/results
- unresolved evidence gaps

Never invent missing evidence.

## 5. Owned scope

Explicit files/modules/contracts/surfaces this session may change.

## 6. Protected/shared scope

Explicit files/modules/contracts/surfaces this session must not redefine because another session owns them or they are shared integration boundaries.

Common shared surfaces include:

- Gradle/build logic
- global Spring Boot configuration
- runtime manifests
- database migrations
- OpenTelemetry/Micrometer configuration
- Event/Saga infrastructure
- MCP schemas/catalogs
- shared API DTOs
- Angular routes/models
- common persistence abstractions

## 7. Dependencies

List prompts/workstreams/contracts that must already exist or remain compatible.

## 8. Deterministic vs non-deterministic classification

For each major subtask classify:

- DETERMINISTIC: build, test, API call, parsing, measurement, schema validation, simulation, static analysis, report generation from structured data.
- NON_DETERMINISTIC: ambiguous interpretation, architecture trade-off, semantic reconciliation, proposal/synthesis.

Use deterministic mechanisms whenever possible.

## 9. Research boundary

If implementation encounters a material unknown that requires broad research:

- stop the affected decision;
- produce a ResearchRequest;
- do not guess;
- do not silently expand engineering scope;
- return evidence needed for a separate discovery session.

## 10. Expected deliverables

List exact code/docs/contracts/tests/evidence expected.

## 11. Validation requirements

List exact deterministic checks required before declaring completion.

## 12. Stop conditions

Stop and report when:

- required context is missing;
- a protected surface must be changed;
- a material direction conflict is discovered;
- required permission/environment capability is absent;
- the task expands materially beyond prompt scope;
- deterministic validation fails and the root cause is outside owned scope.

Use statuses such as:

- BLOCKED_BY_CONTEXT
- RESEARCH_REQUIRED
- RECONCILIATION_REQUIRED
- DIRECTION_CONFLICT
- DEPENDENCY_BLOCKED

## 13. Result contract

Return at minimum:

- summary of work completed
- exact files changed
- exact commands/tests executed
- deterministic results
- evidence references
- unresolved gaps
- assumptions introduced
- shared surfaces touched
- direction conflicts detected
- recommended follow-up work

Do not claim completion from documentation alone when executable validation was required.

## 14. Context refresh protocol

If the direction or repository baseline changes materially while the session is active, Happy Work supplies a bounded refresh containing:

- old direction/ref
- new direction/ref
- what changed
- why
- what remains valid
- what is invalidated
- affected assumptions/contracts
- required review/rework

The session must acknowledge/reconcile the refresh before continuing affected work.

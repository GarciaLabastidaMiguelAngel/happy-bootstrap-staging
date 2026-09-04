# Git, Issue, Branch and Parallelism Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0003

## 1. Purpose

Define how Git-backed engineering work remains traceable while multiple Devin sessions/workstreams execute in parallel.

Git is the durable authority for source, specifications, contracts, architecture definitions, policies, manifests and engineering change history.

Chat/session history is not the change authority.

## 2. Main branch

`main` represents the accepted integration baseline for Happy Work staging/governance and, in the implementation repository, should represent the accepted integration baseline of the product.

Normal LAB runtime should consume an explicitly selected accepted baseline. Experimental branches must not silently become the shared runtime baseline.

## 3. Branch types

Use bounded branch intent, for example:

- `feature/<capability>`
- `fix/<issue>`
- `refactor/<area>`
- `research/<topic>` when executable evidence/POC code is needed
- `lab/<experiment>`
- `work/<governance-change>` for Happy Work coordination changes

Do not create a branch merely to represent a chat session when no repository change is expected.

## 4. One owner per shared surface

For any active parallel set, assign one owner/workstream for high-risk shared surfaces such as:

- global Gradle/build logic
- Spring Boot root configuration
- shared OpenAPI schemas
- common event/saga contracts
- common persistence/migrations
- MCP protocol/catalog contracts
- Angular shared models/routes
- OpenTelemetry global configuration
- runtime manifests

Other sessions may consume those surfaces but must not redefine them without coordination.

## 5. Issue as durable defect/work signal

A material defect, gap, risk or technical-debt finding should be representable as a Git-backed issue or equivalent governed WorkItem with linkage to Git.

Recommended issue metadata:

- issue ID
- type
- severity/priority
- component/module
- direction revision
- specification/contract reference
- evidence reference
- owner/workstream
- blocker status
- branch/commit/PR references
- affected tests/gates
- resolution evidence

Do not use issues as the only architecture/work database; they are one durable engineering projection linked to Architecture AI work state.

## 6. Parallel work decision

Before opening a parallel engineering branch/session classify:

- PARALLEL_SAFE
- PARALLEL_SAFE_WITH_BOUNDARIES
- SERIAL_REQUIRED
- DISCOVERY_ONLY
- BLOCKED_BY_DEPENDENCY

Check collisions by actual files/contracts/migrations/configuration, not by prompt titles.

## 7. Merge/reconciliation

Before accepted integration:

1. refresh against current main/direction
2. identify intervening material changes
3. run deterministic build/tests/checks
4. verify specification/API/schema compatibility
5. verify module/architecture boundaries
6. verify migrations if applicable
7. reconcile documentation/evidence
8. resolve or explicitly accept remaining issues

A green merge conflict resolution does not prove architectural compatibility.

## 8. Direction-change propagation

When project direction changes materially, active branches/workstreams are classified:

- UNAFFECTED
- REVIEW_REQUIRED
- PAUSE_REQUIRED
- SUPERSEDE_REQUIRED

Each affected branch receives a bounded Context Refresh/change notice describing what changed and required action.

## 9. LAB branches

A POC/experiment may run from a dedicated LAB branch when isolation is required.

The UI/runtime must visibly identify:

- branch/ref
- commit
- direction revision
- LAB status
- experimental nature

Promotion requires evidence and reconciliation; copying experimental code into main without promotion review is not acceptable.

## 10. Version and evidence linkage

Architecture AI should eventually expose a graph such as:

Objective/Specification
→ WorkItem
→ Issue
→ Branch
→ Commit/PR
→ Build/Test evidence
→ Gate results
→ Release/version
→ Runtime observations

This creates auditability from intent to running software.

## 11. Hot reload/development

Hot reload is a PLATFORM_DEV/LAB convenience, not an integration policy.

By default, the shared local LAB instance follows the selected accepted integration baseline.

A branch-specific hot-reload instance must be explicitly identified and isolated when simultaneous changes could interfere.

## 12. Principle

Parallelism is valuable only when boundaries and reconciliation cost are controlled.

Prefer fewer well-bounded concurrent workstreams over many sessions editing shared foundations.

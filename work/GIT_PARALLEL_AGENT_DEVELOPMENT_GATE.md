# Git Parallel Agent Development Gate

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0006

## Purpose

Define the minimum Git governance required before Architecture AI increases parallel implementation across many Devin sessions/agents.

## Gate

`GIT_PARALLEL_DEVELOPMENT_READY`

Status starts as NOT_VERIFIED until all required evidence exists.

## Required controls

### Repository baseline
- `main` is the accepted integration baseline.
- active direction revision is discoverable.
- each session records its starting commit/ref.

### Work/branch traceability
Each implementation branch must identify:
- WorkPackage/Issue/Feature/Epic;
- session/agent reference when known;
- owned modules/files;
- shared/protected surfaces;
- expected merge target;
- acceptance evidence.

Suggested branch families:
- `feature/...`
- `fix/...`
- `refactor/...`
- `lab/...`
- `work/...` for governance/planning artifacts.

### Ownership
Before parallel implementation define one primary owner for high-risk shared surfaces:
- Gradle/build conventions;
- global Spring configuration;
- OpenAPI/shared contracts;
- DB migrations;
- Event/Saga foundations;
- Agent Runtime/MCP contracts;
- shared Angular DTOs/routes/design foundations;
- OTel configuration;
- deployment manifests.

### Merge discipline
- small bounded commits;
- no unrelated mass refactors inside feature branches;
- rebase/refresh against the accepted baseline when required;
- contract/schema changes communicated before dependent sessions continue;
- integration order explicitly planned for dependent branches;
- conflicts resolved by the owner of the affected shared surface or integration coordinator.

### Deterministic checks
Before merge, run applicable checks:
- compile/build;
- tests;
- module/architecture checks;
- lint/static analysis;
- OpenAPI/schema compatibility checks;
- migration validation;
- security checks where available;
- documentation/Arc42 impact check for material changes.

### Context refresh
If `main` changes materially while a session is active:
- identify affected assumptions;
- classify UNAFFECTED / REVIEW_REQUIRED / PAUSE_REQUIRED / SUPERSEDE_REQUIRED;
- send bounded Context Refresh;
- do not restart the whole session unless necessary.

### Integration evidence
Track:
- merge conflicts;
- rework after merge;
- duplicated implementation;
- failed integration builds;
- rollback/revert;
- cycle time;
- parallel throughput.

## Stop condition

Do not keep increasing developer/session count if merge/rework/coordination cost rises faster than useful throughput.

The Director should be able to say:
"Parallelism increased delivery" or "Parallelism is currently generating more rework than value" using evidence.

## Goal

Make Git the coordination spine that allows aggressive LAB parallelism without turning the repository into a multi-agent collision surface.
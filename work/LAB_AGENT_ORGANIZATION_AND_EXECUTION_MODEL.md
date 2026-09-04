# LAB Agent Organization and Execution Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0006

## Purpose

Define how Architecture AI should use aggressive parallel Devin/session execution during the current LAB construction phase without losing direction, evidence, Git coherence or future production governance.

## LAB priority override

For the current first build phase, optimize primarily for:

1. fastest safe platform evolution;
2. maximum useful parallelism;
3. rapid learning and evidence collection;
4. early tangible dashboard capability;
5. continuous integration of architecture, engineering, knowledge and quality.

Token/ACU minimization is NOT the first optimization target in LAB during this phase.

Long-term AI cost minimization remains a platform objective for SOLUTION/SERVICE and for later LAB optimization, but it must not slow the first functional build unnecessarily.

## Core rule

PARALLELIZE WORK, NOT CONFUSION.

Each delegated session/agent receives:
- direction revision;
- repository baseline;
- objective;
- owned surfaces;
- shared/protected surfaces;
- dependencies;
- applicable standards/gates;
- acceptance evidence;
- stop/escalation conditions.

If required context/evidence is missing, the session must create a blocker/research request or return UNKNOWN. It must not fabricate a solution.

## Initial LAB organization

These are execution roles for the current build. They may map to one or multiple Devin sessions and may later collapse into Tools/Skills/deterministic services.

### 1. Director / Integration Coordinator
Owns:
- global objective/direction;
- plan/backlog reconciliation;
- cross-agent dependencies;
- context refresh;
- integration readiness;
- final status explanation.

Does not silently override specifications, security/compliance gates or evidence.

### 2. Architecture / Planning
Owns:
- top-down architecture plan;
- module boundaries;
- standards mapping;
- patterns and rationale;
- impact analysis;
- Arc42 implications;
- C4/technical and conceptual view alignment.

### 3. Backend Engineering
Owns bounded Spring Boot modules/APIs assigned by plan.

### 4. Frontend / UX Engineering
Owns Angular dashboard, Director Chat UX, feature-specific UI surfaces and governed frontend architecture.

### 5. Agent Runtime / Integration Engineering
Owns Devin provider integration, MCP capability plane, session/execution bindings and external API adapters.

### 6. Data / Knowledge Engineering
Owns knowledge ingestion, metadata/provenance, local stores, CQRS projections, graph/index/vector projections and migration-ready storage abstractions.

### 7. Research / Standards Swarm
Runs multiple bounded investigations in parallel.

Research is evidence-first and prioritizes:
1. official specifications/documentation;
2. standards bodies/RFCs;
3. official framework/product docs;
4. institutional banking/infrastructure/security guidance when available;
5. recognized industry references;
6. secondary sources only when necessary and clearly classified.

### 8. QA / Validation
Owns independent deterministic verification, integration tests, architecture conformance, regression and acceptance evidence.

### 9. Security / Compliance
Owns policy interpretation, threat/risk review, safe-mode boundaries and evidence requirements.

Discovery of a vulnerability never grants permission to exploit it outside an explicitly authorized LAB test.

### 10. Continuous Quality / Refactor
Analyzes code, metrics, defects, module drift, smells, duplication, API/schema drift and refactor opportunities independently of feature construction.

### 11. Git / Integration Engineering
Owns branch strategy, merge/rebase sequencing, collision detection, integration checkpoints and repository hygiene for parallel sessions.

### 12. Documentation / Arc42
Maintains traceable architecture/design projections, release deltas, diagrams and human deliverables from governed state.

### 13. UX Research / Product Feedback
Collects and structures usability feedback, architect tasks, friction points and feature usefulness. It does not invent analytics frameworks; it delegates research and selects supported instrumentation by evidence.

### 14. Deployment / Platform Engineering
Owns local runtime, packaging, OpenShift readiness, configuration profiles, storage/auth fallback profiles, deployment evidence and recovery.

### 15. Reconciliation / Consistency
Cross-checks specifications, code, tests, Arc42, diagrams, backlog, standards, gates and runtime evidence for contradiction or drift.

## Agent lifecycle rule

No responsibility may disappear when an agent/workstream is removed or reduced.

Before changing organization:
- identify responsibilities;
- identify current artifacts/state;
- name successor owner/tool/skill/service;
- migrate open work and evidence;
- validate continuity;
- only then retire or merge the role.

## Meetings / coordination

Use structured reconciliation cycles instead of unbounded chat meetings.

### Planning Council
Inputs: objectives, backlog, dependencies, standards, blockers.
Output: ordered/parallel execution plan.

### Integration Sync
Inputs: branch/session status, contract changes, blockers, context drift.
Output: merge order, refresh actions, collision prevention.

### Research Review
Inputs: ResearchRequests and evidence.
Output: accepted evidence, unresolved conflicts, architecture implications.

### QA / Gate Review
Inputs: deterministic results and gate evidence.
Output: pass/fail/blocker/remediation.

### Architecture Consistency Review
Inputs: specification, implementation, diagrams, Arc42, decisions.
Output: drift findings and reconciliation work.

### Retrospective / Organization Review
Inputs: throughput, cycle time, rework, collisions, defects, AI usage and human feedback.
Output: organization/process changes backed by evidence.

## Parallelism acceptance

Increase the number of concurrent sessions only while measurable throughput improves without unacceptable growth in:
- merge conflicts;
- rework;
- duplicated implementation;
- context drift;
- gate failures;
- unresolved ownership.

If coordination cost exceeds delivery benefit, reduce or reorganize the session topology.

## Promotion rule

LAB organization is not automatically the future runtime agent architecture.

After repeated work stabilizes, evaluate in order:
DETERMINISTIC -> TOOL -> SKILL -> AGENT.

The fastest LAB organization may therefore intentionally use more Devin sessions now and fewer AI agents later.
# First Wave Tangible Plan

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0003

## Goal

Turn the local Architecture AI build into a visibly useful governed copilot before the full platform is complete, while proving the planning-first, deterministic-first and quality/governance loops in real use.

## Wave 0 — Planning / Execution Read Model

Outcome:
Before material work starts, Architecture AI can represent and explain:
- objective
- plan
- dependencies
- blockers/research questions
- whether each unknown is blocking or parallelizable
- owned/protected surfaces
- applicable gates
- expected evidence

This can begin as a simple persisted/read model. It does not require a complete autonomous planner first.

## Wave 1 — Director Chat

Outcome:
The user can open the existing Angular dashboard and converse with Architecture AI/Devin through a governed Spring Boot integration.

Must show:
- current direction revision
- current repository baseline/branch
- whether the answer comes from governed platform state, provider response, evidence or planned capability
- active blocker/work references when relevant
- planning/research/quality status when relevant

Do not build a generic chat-memory system first.

## Wave 2 — Work / Blockers / Ownership

Outcome:
The dashboard/chat can explain:
- what work exists
- current state
- blockers
- owner/workstream
- what can continue in parallel
- what requires research/human decision
- what issue/quality finding created the work

Core concepts:
- WorkItem
- WorkPackage
- Blocker/Gap
- ResearchRequest
- Issue/Finding reference
- ownership/assignment

## Wave 3 — Gate Visibility

Outcome:
Every material solution/work item can show applicable governance gates and evidence.

Initial gate classes:
- intent/scope
- specification
- standards/evidence
- architecture
- security/compliance
- contract/compatibility
- engineering quality
- operability/observability
- documentation
- reconciliation/acceptance

Start with simple persisted/evaluated gate state. Automate deterministic gates progressively.

## Wave 4 — Specification / OpenAPI First

Outcome:
Material HTTP APIs for Director/Work/Gates/Agent Runtime use governed OpenAPI contracts where appropriate.

The API contract should be inspectable/versioned and implementation should validate against it.

## Wave 5 — Provider Runtime Integration

Outcome:
The Director can dispatch or continue bounded Devin work using the supported Devin API and correlate provider sessions with Architecture AI durable work.

MCP remains the agent-facing capability/tool/evidence path.

Provider integration must begin capturing real usage/ACU/session evidence where available so cost/efficiency can be evaluated later.

## Wave 6 — Continuous Quality / Issues

Outcome:
The accepted integration baseline is analyzed through deterministic build/test/module/contract/runtime evidence and findings become durable issues/work.

The dashboard can show:
- current build/test/architecture status
- open quality findings
- recurring errors
- refactor candidates
- issue ownership
- remediation status

AI synthesis may help prioritize/explain findings, but deterministic evidence remains authoritative for measurable checks.

## Wave 7 — Documentation Projection

Outcome:
The platform can explain and start generating/updating required architecture documentation from:
- plans
- specifications
- decisions
- evidence
- work results
- implementation state
- issue/quality state
- gate status

The goal is to reduce manual document assembly while preserving review/governance.

Human projections may target Excel/PDF/PPT/Confluence/FileShare as appropriate while governed source stays in its proper authority.

## Wave 8 — Knowledge / Learning / Cost Visibility

Outcome:
Dashboard clearly distinguishes:
- knowledge accumulation
- source freshness
- graph/index/vector growth
- dataset evolution
- model evaluation/training
- Devin/provider usage/cost observations
- deterministic vs AI-handled work

No false claims of model learning.

This wave should also begin identifying repeated AI operations that are candidates for deterministic Spring/Gradle/tool implementation.

## Wave 9 — Knowledge Autonomy

Outcome:
Architecture AI incrementally reduces manual knowledge-package handoff by:
- detecting configured source deltas
- updating local inventory/evidence/indexes
- creating bounded AI work only when needed
- maintaining provenance/knowledge relationships
- projecting documentation from governed state

Manual bootstrap packages remain supported for transition/recovery but are no longer the normal knowledge-update path.

## Wave 10 — LAB Evaluation

Outcome:
Use existing/planned simulation and telemetry road to evaluate:
- agent/work capacity
- backlog
- parallel-work policy
- gate/blocker delays
- human decision delays
- session reuse
- usage/cost distributions
- quality/refactor workload
- knowledge-autonomy progression
- direction drift signals

Monte Carlo and vector similarity are evidence mechanisms, not project authority.

## Integration evolution experiments

LAB should be able to run bounded POCs when a technical integration decision is uncertain.

Examples:
- Confluence capability through MCP with a direct official Java/HTTP API adapter behind it vs other supported paths
- provider polling vs callback/webhook when available
- local deterministic parsing/extraction vs AI-assisted handling
- context/evidence budgets

Every POC defines measurable criteria before implementation and produces a decision/evidence result before promotion.

## Execution rule

Each wave may have parallel workstreams, but Work must:
- plan before material execution
- classify research as BLOCKING_NOW / NON_BLOCKING_WITH_SAFE_DEFAULT / PARALLEL_RESEARCH / DEFERRED
- define owned/protected surfaces
- version the prompt/context pack
- classify parallelism
- reconcile results against DIRECTION-0003
- stop only affected decisions when a blocker appears
- feed deterministic evidence into continuous quality/reconciliation

## First acceptance test

The first meaningful acceptance test remains conversational, now expanded.

User asks:
"What are we building, what was planned, what is blocked, who owns it, what can continue, what issues/quality findings exist, and what must happen next?"

Architecture AI returns a structured answer from governed state, with explicit implemented/planned/blocked/unknown distinctions and references to evidence/work/gates/issues.

A second early question should become answerable:

"What part of this work required Devin reasoning, what was handled deterministically, and where are we spending AI usage that could later be automated?"

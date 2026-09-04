# First Wave Tangible Plan

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0002

## Goal

Turn the local Architecture AI build into a visibly useful governed copilot before the full platform is complete.

## Wave 1 — Director Chat

Outcome:
The user can open the existing Angular dashboard and converse with Architecture AI/Devin through a governed Spring Boot integration.

Must show:
- current direction revision
- current repository baseline
- whether the answer comes from governed platform state, provider response, evidence or planned capability
- active blocker/work references when relevant

Do not build a generic chat memory system first.

## Wave 2 — Work / Blockers / Ownership

Outcome:
The dashboard/chat can explain:
- what work exists
- current state
- blockers
- owner/workstream
- what can continue in parallel
- what requires research/human decision

Core concepts:
- WorkItem
- WorkPackage
- Blocker/Gap
- ResearchRequest
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
The director can dispatch or continue bounded Devin work using the supported Devin API and correlate provider sessions with Architecture AI durable work.

MCP remains the capability/tool/evidence path.

## Wave 6 — Documentation Projection

Outcome:
The platform can explain and start generating/updating required architecture documentation from:
- specifications
- decisions
- evidence
- work results
- implementation state
- gate status

The goal is to reduce manual document assembly while preserving review/governance.

## Wave 7 — Knowledge / Learning Visibility

Outcome:
Dashboard clearly distinguishes:
- knowledge accumulation
- index/vector growth
- dataset evolution
- model evaluation/training

No false claims of model learning.

## Wave 8 — LAB Evaluation

Outcome:
Use existing/planned simulation and telemetry road to evaluate:
- agent/work capacity
- backlog
- gate/blocker delays
- human decision delays
- session reuse
- usage/cost distributions
- direction drift signals

Monte Carlo and vector similarity are evidence mechanisms, not project authority.

## Execution rule

Each wave may have parallel workstreams, but Work must:
- define owned/protected surfaces
- version the prompt/context pack
- classify parallelism
- reconcile results against DIRECTION-0002
- stop only affected decisions when a blocker appears

## First acceptance test

The first meaningful acceptance test is conversational:

User asks:
"What are we building, what is blocked, who owns it, what can continue, and what must happen next?"

Architecture AI returns a structured answer from governed state, with explicit implemented/planned/blocked/unknown distinctions and references to evidence/work/gates.

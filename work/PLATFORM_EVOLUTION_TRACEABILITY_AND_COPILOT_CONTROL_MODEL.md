# Platform Evolution Traceability and Copilot Control Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0007

## Purpose

Define how Architecture AI evolves from a local LAB assistant into the governed Copilot/control entry point for architecture, engineering, documentation, deployment and continuous improvement across the banking platform.

The platform must preserve how it started, what changed, why it changed, what evidence justified the change, who/what executed it, and what became the accepted state.

## Core principle

COPILOT IS THE GOVERNED ENTRY POINT, NOT THE SOURCE OF TRUTH.

The Copilot may plan, explain, request changes, create work, coordinate agents, propose architecture, trigger bounded implementation, guide documentation and eventually operate platform capabilities, but every material action must resolve to governed state and evidence.

## Evolution chain

Direction
-> Objective
-> Initiative / Epic / Feature
-> Specification / ADR / Policy / Standard
-> Plan
-> WorkPackage / Issue / ResearchRequest
-> Branch / Commit / PR
-> Build / Test / Gate evidence
-> Release / Deployment
-> Runtime observations
-> Analysis / Improvement candidate
-> Accepted direction or backlog change.

The platform must be able to reconstruct this chain for any material capability.

## Copilot maturity horizons

### H0 — Explain
The Copilot answers from governed project state, evidence and knowledge.

### H1 — Guide
The Copilot explains blockers, owners, standards, applicable processes, architecture implications and next actions.

### H2 — Prepare
The Copilot creates governed specifications, plans, backlog items, diagrams, Arc42 projections, tests and implementation packages.

### H3 — Execute bounded changes
The Copilot coordinates approved mechanical changes in repositories and services through Tools/Skills/Agents, preserving Git, QA and gates.

### H4 — Operate governed platform capabilities
The Copilot can coordinate deployments, configuration changes, runtime diagnostics, remediation and improvement workflows when environment policies authorize them.

### H5 — Governed self-evolution
The platform detects improvement opportunities from evidence, proposes or schedules bounded changes, validates them in LAB, and promotes only through accepted gates/authority.

No horizon removes human/institutional approval where required.

## No duplicate truth

Avoid parallel unmanaged copies of architecture knowledge.

Preferred model:
- Git stores canonical governed source definitions, contracts, diagrams and release evidence where appropriate.
- Databases store mutable operational state and query projections.
- Lucene/vector/graph stores remain projections/indexes with provenance.
- Confluence/SharePoint/FileShare/Excel/PPT/PDF are publication or human-consumption projections unless explicitly designated as institutional authority.

A published copy must reference the canonical source/release when practical.

## Document and image policy

Do not create duplicate diagrams or images merely to satisfy each publication channel.

For governed visual assets:
- maintain one editable canonical source where feasible;
- render governed outputs (SVG/PNG/PDF) with stable IDs/version metadata;
- publish/reference the same rendered asset from Confluence, SharePoint, Arc42 or web surfaces when platform capabilities allow;
- create a new rendered version only when the underlying view materially changes.

If a publication platform cannot reliably render/reference the governed asset, create an explicit publication copy with provenance to the canonical asset.

## Transformation auditability

Architecture AI must preserve two different audit concerns:

1. INTERNAL PLATFORM EVOLUTION AUDIT
   - why the platform changed;
   - direction and standards applied;
   - implementation evidence;
   - experiments;
   - decisions;
   - releases;
   - runtime outcomes.

2. EXTERNAL / INSTITUTIONAL SOLUTION AUDIT
   - Arc42 PDF releases and other formal artifacts consumed by external bank areas;
   - approval and retention requirements defined by institutional processes.

The external artifact lifecycle must not block internal evidence-driven platform evolution unless a specific gate requires it.

## Copilot change workflow

User request
-> classify intent and authority
-> resolve current context / standards / policies
-> determine whether deterministic UI/action, Tool, Skill or Agent is appropriate
-> plan
-> create/update governed work
-> execute bounded change if authorized
-> validate deterministically
-> independent QA / reconciliation
-> update documentation/projections
-> explain result, evidence, residual gaps and rollback.

If evidence or authority is missing, the Copilot must return UNKNOWN/BLOCKED/APPROVAL_REQUIRED rather than inventing or bypassing controls.

## Goal

Reach a state where the architect can use the Copilot as the normal control window for architecture and engineering work while the underlying platform remains traceable, standards-aligned, auditable, reproducible and safe.
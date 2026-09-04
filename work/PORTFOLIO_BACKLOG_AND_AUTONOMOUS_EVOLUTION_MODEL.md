# Portfolio, Backlog and Autonomous Evolution Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0005

## Purpose

Define how Architecture AI turns objectives, standards changes, findings, research and user direction into a coherent prioritized engineering backlog while minimizing unnecessary AI consumption and accelerating safe parallel development.

## Core principle

OBJECTIVES
→ INITIATIVES
→ EPICS
→ FEATURES
→ GOVERNED WORK
→ IMPLEMENTATION
→ EVIDENCE
→ ANALYSIS
→ REPRIORITIZATION

The Director coordinates this flow and must be able to explain why work exists, why it is ordered as it is, what blocks it and what can proceed in parallel.

## Planning hierarchy

Use a provider-neutral planning model such as:

- Objective
- Initiative
- Epic
- Feature
- WorkPackage / EngineeringWorkItem
- Issue / Defect / ResearchRequest / Risk / DecisionRequest

Avoid coupling the core model directly to Jira types. Future Jira integration maps these concepts to the organization's configured Jira hierarchy and workflow.

## Backlog sources

Backlog items may originate from:

- user/director objectives
- specifications
- standards changes
- architecture gaps
- build/test failures
- runtime telemetry
- security/compliance findings
- quality/refactor findings
- knowledge gaps
- Arc42 deltas
- research recommendations
- LAB experiments
- provider/AI cost optimization opportunities
- OpenShift/deployment readiness gaps

Every backlog item should preserve origin/evidence.

## Prioritization vectors

Prioritize using explicit scored/qualified vectors, not opaque AI intuition.

Candidate vectors:

- business/architecture objective alignment
- blocker criticality
- security/compliance risk
- dependency unlock value
- user pain / manual effort removed
- engineering value
- architecture debt reduction
- reliability/quality value
- cost/AI consumption reduction
- implementation effort
- reversibility
- coordination/merge risk
- evidence confidence
- time sensitivity / support window
- OpenShift/readiness contribution

Deterministic scoring may rank candidates; AI may explain trade-offs or resolve incomparable cases.

## Work sequencing

Default sequence for material engineering:

plan
→ specification
→ research classification
→ dependency graph
→ parallelization analysis
→ implementation slices
→ deterministic gates
→ integration/reconciliation

Do not start all features simultaneously merely because multiple Devin sessions are available.

## Parallelism

Safe parallelism requires:

- independent or bounded owned surfaces
- explicit shared contracts
- one owner for high-risk shared foundations
- merge/reconciliation point
- compatible direction/context revision
- no unresolved blocker that invalidates all branches

Track:

- active WIP
- dependency edges
- shared-surface collision risk
- stale branch/context risk
- expected merge order

## Engineering cycles

Do not simulate human meetings just to mimic Scrum.

Implement lightweight governed cycles that serve the same coordination purpose:

### Planning Cycle
- review objectives/backlog
- dependency/blocker classification
- select next work
- assign workstreams
- define acceptance evidence

### Daily/Continuous Reconciliation
- inspect execution state
- detect blockers/context drift
- update dependencies
- redistribute unaffected work

### Review
- inspect delivered evidence/gates
- accept/reject/rework
- update Director/read models

### Retrospective / Improvement Cycle
- inspect rework, defects, cycle time, AI usage, collisions and repeated manual work
- generate improvement candidates

AI participation in these cycles is bounded to synthesis/decisions; metrics/state gathering is deterministic.

## Autonomous evolution

"Self-evolving" means governed optimization toward explicit objectives, not uncontrolled self-modification.

The platform may autonomously:

- detect recurring work patterns
- identify deterministic migration candidates
- propose new read models/tools/skills
- detect stale standards/sources
- detect quality/cost regressions
- generate improvement backlog candidates
- run approved LAB simulations/POCs

The platform must not autonomously:

- change governing objectives
- promote architecture decisions without authority
- bypass gates
- exploit discovered vulnerabilities without authorization
- change production/service policy silently
- merge material changes solely because an AI recommends them

## AI cost optimization loop

Observe
→ classify AI-heavy operations
→ identify repeated stable reasoning patterns
→ estimate deterministic implementation cost
→ compare expected usage savings / quality / latency
→ LAB POC if needed
→ engineering backlog
→ implement Tool/Skill/deterministic capability
→ measure before/after

This operationalizes the governing order:

DETERMINISTIC
→ TOOL
→ SKILL
→ AGENT

## Research cadence

Research is not an endless internet crawl.

Maintain a governed research backlog/watchlist with:

- researchQuestion
- trigger
- relevant standards/products
- last verified evidence
- next useful review date
- materiality
- impacted decisions/work

Periodic research should be incremental and event-aware.

Examples:

- monthly watch for fast-moving agent/AI protocols relevant to active implementation
- quarterly or milestone-based review for stable architecture/process standards
- review before support/EOL milestones
- immediate review when a blocking security/advisory or major release affects the platform

## Future Jira integration

When Jira becomes available:

- Architecture AI remains the architectural/work semantic authority for its model unless organizational policy assigns Jira as workflow authority
- map Objective/Initiative/Epic/Feature/Work/Issue IDs to Jira keys
- synchronize status/ownership/comments selectively
- avoid copying all knowledge/evidence into Jira
- preserve Git/specification/evidence links

The Director should answer "Which epics exist and why are they not complete?" from the reconciled work graph, regardless of whether Jira is connected.

## Metrics

Track at least:

- backlog size/age
- blocked ratio and blocker age
- cycle time by work type
- planning-to-start delay
- execution-to-merge delay
- rework rate
- issue escape rate
- parallel work collision rate
- WIP
- throughput
- provider/Devin usage by work type
- deterministic vs AI-handled work ratio
- cost/value improvement from deterministic migrations

Use DORA indicators where they are meaningful for software-delivery performance, but do not substitute them for the wider Architecture AI governance model.

## Director questions

The Director should progressively answer:

- What objectives are we pursuing now?
- Which epics/features support each objective?
- Why is this feature not started?
- Which blocker prevents it?
- Which work can proceed in parallel?
- Which work is most expensive in Devin usage?
- What should we automate/determinize next?
- Which research item could change our direction?
- What is the current engineering capacity bottleneck?
- Are we gaining throughput or just creating more parallel branches?

## Goal

Maximize safe delivery speed and learning while preserving coherence, traceability, standards, quality and cost control.

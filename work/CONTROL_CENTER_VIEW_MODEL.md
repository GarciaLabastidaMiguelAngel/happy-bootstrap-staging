# Architecture AI Control Center View Model

Status: DRAFT_BASELINE
Purpose: define the minimum real operational/governance visibility that the Architecture AI dashboard should progressively expose while the platform is being built.

This is a view-model/governance specification, not a second dashboard implementation.

## 1. Direction

Expose:

- active direction revision
- current operating mode
- current repository/integration baseline
- last material direction change
- unresolved direction conflicts
- active assumptions
- decisions pending evidence

## 2. Prompt / Devin workstreams

Expose:

- prompt ID
- title/domain
- lifecycle state
- parallelism classification
- Devin session reference when known
- repository baseline used by the session
- direction revision used by the session
- owned/shared surfaces
- blocked reason
- context-refresh-required flag
- last reconciliation status

## 3. Change impact

Expose:

- latest material changes
- impacted sessions
- UNAFFECTED / REVIEW_REQUIRED / PAUSE_REQUIRED / SUPERSEDE_REQUIRED counts
- unresolved compatibility checks
- required context refreshes

## 4. Knowledge growth

Expose separately:

### Knowledge accumulation

- sources inventoried
- evidence units
- candidate facts
- canonical facts
- graph entities
- graph relationships
- indexed text/vector counts where meaningful
- unresolved/unknown semantic items
- conflicts

### Dataset evolution

- dataset ID/version
- sample count
- validated-label count
- label distribution
- quality status
- last evaluation input

### Model evolution

- active model ID/version
- training/evaluation dataset version
- evaluation metrics
- promotion status
- previous model comparison

Never label index/RAG growth as model learning.

## 5. Platform quality

Expose:

- latest build status
- architectureCheck status
- test status
- schema/contract validation
- migration validation
- telemetry pipeline health
- local Collector health

## 6. Events / Sagas / Work

Expose real operational summaries:

- event backlog
- retry/dead-letter counts
- running/waiting/failed sagas
- WorkItem/WorkPackage backlog
- oldest pending work
- human-required work
- AI-required work

## 7. Agent runtime

Expose:

- active agent assignments
- executions by provider/status
- provider sessions
- session reuse/new-session counts
- stale/degraded executions
- provider usage observations
- MCP calls per execution
- human-wait duration

## 8. Notifications / human attention

Expose:

- pending AttentionItems
- decisions required
- alerts/warnings
- delivery failures
- quiet-hours/DND state
- average decision response time
- decision timeout count

## 9. LAB / simulation

Expose:

- available scenarios
- recent runs
- baseline vs candidate comparisons
- OBSERVED/SIMULATED/ASSUMED/EXPERIMENTAL provenance
- sensitivity/break-even findings
- direction-drift signals

## 10. Direction-drift evidence

Support advisory signals from:

- contract/schema diffs
- architecture graph changes
- repository changes
- prompt/result divergence
- vector/semantic similarity
- simulation/replay impacts

Possible states:

- ALIGNED
- POSSIBLE_DRIFT
- CONFLICTING_ASSUMPTION
- UNREVIEWED_ARCHITECTURAL_CHANGE
- IMPACT_REVIEW_REQUIRED

No single embedding/vector score can automatically declare architectural drift.

## 11. Source-of-truth labels

Every dashboard value should identify its source class where relevant:

- REPOSITORY
- RUNTIME
- TELEMETRY
- AUDIT
- EVENT_LEDGER
- SAGA_STORE
- KNOWLEDGE_STORE
- PROVIDER_API
- LAB

Simulation and observed runtime values must never be visually indistinguishable.

## 12. Minimum early dashboard objective

Before advanced ML exists, the dashboard should already let the user answer:

1. What direction are we following?
2. Which Devin sessions are working on what?
3. Which sessions are stale or need refreshed context?
4. Did a recent change invalidate active work?
5. Is the build/platform healthy?
6. Is knowledge actually growing?
7. Are datasets/models actually changing or only the index?
8. What events/sagas/work are backed up?
9. What decisions need human attention?
10. What has LAB evidence shown about current direction?

The dashboard must progressively replace hidden project state in chats with inspectable operational evidence.

# Change Impact — DIRECTION-0002

Status: ACCEPTED_FOR_BASELINE
Previous direction: DIRECTION-0001
New direction: DIRECTION-0002
Change type: MATERIAL_DIRECTION_CHANGE

## Summary

DIRECTION-0002 makes explicit several principles that were discussed but not yet elevated to the active direction baseline:

- Architecture AI acts as a Director/Copilot over governed platform state.
- Dashboard Chat becomes the first fast tangible user-facing capability.
- The director must expose blockers, ownership, gates, evidence and next actions.
- Construction order is deterministic → Tool → Skill → Agent.
- Specification-first becomes a governing engineering principle.
- OpenAPI/Swagger should govern material HTTP API contracts where appropriate.
- Governance gates become explicit and should be deterministic where practical.
- Engineering delegates material open-ended research to Research/Discovery workstreams.
- Architecture planning must reason top-down from organizational/enterprise objectives, not isolated technical areas.
- Documentation/evidence projection becomes a governed completion concern.

## Compatibility assessment

This direction strengthens and organizes existing work rather than replacing the existing modular-monolith, local-first, MCP, event/saga, observability, notification and simulation foundations.

No accepted core technology foundation is intentionally revoked by this change.

## Active prompt impact

### P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01
Impact: REVIEW_REQUIRED
Reason:
- broad shared surfaces
- must now explicitly preserve specification-first/gate/director concepts
- must not create repo structures that compete with current Work governance
Action:
- Context Refresh before handoff
- validate repository authority and contract locations

### P-EVENT-PLATFORM-SAGA-01
Impact: UNAFFECTED_WITH_CONTEXT_REFRESH
Reason:
- event/saga foundation remains valid
Action:
- consume gate/work/blocker semantics where integration is required
- do not redefine Director or gate architecture

### P-OBSERVABILITY-AUDIT-01
Impact: UNAFFECTED_WITH_CONTEXT_REFRESH
Reason:
- observability/audit direction remains valid
Action:
- ensure gate/work/director actions become observable/auditable through shared mechanisms rather than parallel telemetry

### P-LOCAL-TELEMETRY-DATA-ROAD-01
Impact: UNAFFECTED
Reason:
- telemetry road remains compatible
Action:
- later include gate/director/work observations in existing observation road

### P-NOTIFICATION-PLATFORM-01
Impact: UNAFFECTED_WITH_CONTEXT_REFRESH
Reason:
- attention/decision platform remains valid
Action:
- blocker/gate/human-decision attention should reuse this platform

### P-SIMULATION-EVALUATION-FOUNDATION-01
Impact: REVIEW_REQUIRED
Reason:
- draft already required reconciliation
- DIRECTION-0002 expands simulation/evaluation use for governance, drift and capacity evidence
Action:
- reconcile before handoff

### P-AGENT-RUNTIME-COMMUNICATION-PLANE-01
Impact: REVIEW_REQUIRED
Reason:
- core protocol/session/work architecture remains valid
- Director Chat/API control path and gate/work classification must be integrated
- first-wave scope should avoid overbuilding multi-agent behavior before Chat/Gate visibility is tangible
Action:
- create bounded Context Refresh before handoff
- preserve Devin API as first provider control path and MCP as capability plane

## Dashboard impact

CONTROL_CENTER_VIEW_MODEL remains valid but should now prioritize:

1. Director Chat
2. Current Direction
3. Work / Blockers
4. Gates
5. Devin/Agent execution state

before advanced visualizations.

## Harness impact

Add/plan deterministic checks for:

- specification presence/validation where required
- OpenAPI validation
- gate evidence completeness
- shared-contract compatibility
- prompt/session baseline compliance
- architecture policy checks

Do not create a second harness; extend the existing Gradle/build/governance harness direction.

## Data governance impact

No authority move is introduced.

The change reinforces explicit authority:

Git → specifications/contracts/policies/architecture/source/manifests
Runtime DB → mutable operational state
Lucene/vector → retrieval/index state
OneDrive → governed source/document workspace
Nexus → immutable distributables
LAB storage → analytical/simulation outputs

## Required context refresh summary

Before handing off any prompt prepared under DIRECTION-0001, Work must state:

- active direction is now DIRECTION-0002
- first tangible product objective includes Director Chat + blocker/gate visibility
- construction order is deterministic → Tool → Skill → Agent
- specification-first is mandatory for material contracts
- engineering must delegate open-ended research
- new code must consume shared gate/director/work contracts rather than inventing parallel versions

## Acceptance

DIRECTION-0002 is considered compatible with the existing foundation and becomes the working direction baseline once merged to main.

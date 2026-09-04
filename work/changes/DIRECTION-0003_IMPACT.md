# DIRECTION-0003 Impact Assessment

Status: ACTIVE_CHANGE_ASSESSMENT
From: DIRECTION-0002
To: DIRECTION-0003

## 1. Change summary

DIRECTION-0003 strengthens the operating model around five material objectives:

1. Planning before execution as the default engineering discipline.
2. Explicit distinction between blocking research and safe parallel continuation.
3. A continuous code-quality/refactor lane driven by deterministic evidence and structured issues.
4. Git/issue/branch governance for parallel Devin workstreams.
5. Knowledge-placement and AI-consumption governance, including the medium-term autonomy target and evaluation of MCP vs direct APIs behind governed capabilities.

This does not replace DIRECTION-0002 Director Chat, governance gates, specification-first or deterministic-first principles. It extends them.

## 2. New/strengthened governing principles

- PLAN BEFORE EXECUTION.
- Unknowns are classified by impact; only affected work stops.
- Safe/default implementation may proceed only when reversible, standards/framework-aligned and contract/security safe.
- Capability delivery and continuous quality/refactor run as synchronized loops.
- Issues/defects/technical debt become governed work with Git/evidence linkage.
- Parallel development follows bounded module/contract ownership.
- AI usage/cost reduction through deterministic migration is a measurable platform objective.
- Architecture AI knowledge autonomy is a milestone: manual bootstrap/large handoff packages are transitional.
- Agent-facing MCP capability and backend integration implementation are separate concerns; a tool may use a direct official Java/HTTP API internally.
- Human artifacts such as Excel/PDF/PPT/Confluence are projections; engineering truth remains in governed authorities.

## 3. Impact on existing prompts

### P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01

Impact: REVIEW_REQUIRED

Reason:
Repository/branch/authority rules are now more explicit. Any handoff must incorporate issue/branch/parallelism and autonomy/cost goals.

### P-EVENT-PLATFORM-SAGA-01

Impact: UNAFFECTED_WITH_CONTEXT_REFRESH

Reason:
Event/saga foundation remains valid. It should support engineering/research/quality work states without inventing a separate orchestration system.

### P-OBSERVABILITY-AUDIT-01

Impact: UNAFFECTED_WITH_CONTEXT_REFRESH

Reason:
Quality/refactor and cost governance add telemetry/audit consumers. Existing common telemetry plane remains authority.

### P-LOCAL-TELEMETRY-DATA-ROAD-01

Impact: UNAFFECTED_WITH_CONTEXT_REFRESH

Reason:
Observation road should later support quality trends, AI usage/cost and deterministic-vs-AI work distribution.

### P-NOTIFICATION-PLATFORM-01

Impact: UNAFFECTED_WITH_CONTEXT_REFRESH

Reason:
Quality critical findings, blocked research and gate failures should surface through the existing attention platform rather than direct notifications.

### P-SIMULATION-EVALUATION-FOUNDATION-01

Impact: REVIEW_REQUIRED

Reason:
Draft should add AI-consumption/cost policy evaluation, work parallelism/backlog, quality/refactor workload and knowledge-autonomy progression as possible LAB scenarios.

### P-AGENT-RUNTIME-COMMUNICATION-PLANE-01

Impact: REVIEW_REQUIRED

Reason:
The protocol/runtime direction remains valid, but planning/research delegation, cost-aware execution and integration-adapter distinction must be reflected before handoff.

## 4. First-wave impact

The first tangible Director Chat objective remains valid.

However, the first useful Director experience should now expose/answer:

- plan before execution
- active blockers/research questions and whether they stop work
- parallel workstreams and collision boundaries
- issues/quality findings
- current Git baseline/branch when relevant
- what was handled deterministically vs by Devin
- AI usage/cost observations when available
- what knowledge is local/Git/provider-projected

Do not delay the chat MVP until all these views are fully automated. Implement the smallest governed read models and clearly label planned/unimplemented capabilities.

## 5. New governance artifacts

- `work/ENGINEERING_EXECUTION_MODEL.md`
- `work/CONTINUOUS_QUALITY_REFACTOR_MODEL.md`
- `work/GIT_ISSUE_BRANCH_PARALLELISM_MODEL.md`
- `work/KNOWLEDGE_COST_AND_INTEGRATION_GOVERNANCE.md`

## 6. Validation required before future handoffs

Before any older prompt is handed to Devin:

1. refresh repository baseline
2. use DIRECTION-0003
3. incorporate applicable planning-first rules
4. distinguish blocking vs non-blocking research
5. define parallel/shared surfaces
6. preserve deterministic-first / specification-first order
7. identify quality/refactor/issue evidence expectations
8. preserve explicit data/storage authority
9. identify AI usage/cost consequences where material
10. include the latest Context Refresh

## 7. Result

No existing prompt is automatically cancelled by DIRECTION-0003.

Two broad prompts remain REVIEW_REQUIRED and the simulation draft requires reconciliation. Shared platform prompts can continue with bounded Context Refresh.

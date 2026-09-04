# Devin Prompt Index

Status: ACTIVE
Direction revision: `DIRECTION-0006`

This index tracks prompts prepared by Happy Work for delegated Devin sessions.

## Current operating rules

- Each prompt has a stable ID.
- One prompt normally maps to one bounded Devin session/workstream.
- File existence does not imply `SENT` or `EXECUTED`.
- Parallelism is classified before handoff.
- Material direction changes may invalidate or pause active prompts.
- Long-running sessions receive Context Refresh deltas when the baseline changes materially.
- Missing context produces discovery/reconciliation work, not guessing.
- `READY` means captured and handoff-eligible after current-direction refresh; it does not mean sent.
- `DRAFT` must be reconciled before handoff.
- `SUPERSEDED` is retained for history and must not be handed off unless explicitly revived.

## Parallelism classes

- `PARALLEL_SAFE`
- `PARALLEL_SAFE_WITH_BOUNDARIES`
- `SERIAL_REQUIRED`
- `DISCOVERY_ONLY`
- `BLOCKED_BY_DEPENDENCY`
- `SERIAL_REQUIRED_FOR_BOOTSTRAP_THEN_PARALLEL`

## Prompt lifecycle

- `DRAFT`
- `READY`
- `SENT`
- `EXECUTING`
- `EXECUTED`
- `RECONCILING`
- `RECONCILED`
- `BLOCKED`
- `SUPERSEDED`
- `CANCELLED`

## DIRECTION-0006 cross-cutting refresh

All future handoffs must consume these principles where relevant:

- Architecture AI acts as Director/Copilot over governed platform state.
- In the current LAB construction phase, fastest safe delivery/useful parallelism takes precedence over minimizing Devin ACU/tokens; usage is still measured for later optimization.
- Logical AREAS define capability/responsibility groupings; they are not automatically permanent Agents.
- Topology sequence is `OBJECTIVE -> CAPABILITY -> RESPONSIBILITY/POLICY -> DETERMINISTIC -> TOOL -> SKILL -> WORKSTREAM -> AGENT/SESSION IF JUSTIFIED`.
- Construction order remains `DETERMINISTIC -> TOOL -> SKILL -> AGENT` for the final platform.
- Material work is `PLAN BEFORE EXECUTION` and specification-first.
- OpenAPI/Swagger governs material HTTP contracts where appropriate.
- Aggressive implementation parallelism requires `GIT_PARALLEL_DEVELOPMENT_READY`.
- Each parallel session has owned/shared/protected surfaces and a bounded context pack.
- Research unknowns are blocking, safe-default, parallel-research or deferred; missing evidence is never invented.
- Research is a parallel evidence fabric using official/institutional sources first.
- Development must survive missing central DB/enterprise identity through explicit degraded profiles; Git is not a transactional database substitute.
- Knowledge is governed by authority/provenance/lifecycle and may be projected selectively to Devin; provider knowledge is not canonical.
- Information classification/access is cross-cutting across storage, knowledge, provider context, telemetry, UI, Arc42 and exports.
- Classification, authentication, MFA/step-up and authorization are separate concerns.
- PCI scope is determined from actual data/CDE impact, not from the fact that the product is used by a bank.
- Sensitive data is not copied to Devin/logs/traces/vectors/graph/documents by default; deterministic handling policy decides projection/masking/redaction.
- Capability delivery and continuous quality/refactor are synchronized loops.
- Independent QA/reconciliation verifies implementation against specifications, standards/gates and documentation.
- Cross-area virtual meetings are purpose/trigger-driven governance councils with durable outputs, not generic status chats.
- No responsibility disappears when a workstream/session/agent is merged or retired; a successor and state/work transfer are required.
- UX is measured against architect tasks; chat is one interaction mode, deterministic UI another.
- Canonical document term is `Arc42`; released PDFs are versioned/auditable projections and never overwritten.
- Diagramming is audience-aware: C4/Mermaid/PlantUML technical; draw.io/iconographic conceptual/executive.
- Standards are a living governed registry with version/source/adoption/conformance/evidence/review cadence.
- Analytics is downstream from evidence and distinguishes audit/logs/traces/metrics/work/event/saga/Git/Arc42 state.
- Knowledge graph/read models/CQRS projections reduce repeated raw-data/LLM processing while preserving provenance.
- Backlog/prioritization is provider-neutral and future Jira is an adapter target.
- Self-evolution means governed optimization/proposal, not unrestricted self-modification.
- Vulnerability discovery does not imply authorization to exploit; LAB POCs require explicit authorization/policy.
- Scale-out/OpenShift is evidence-driven.

Latest impact assessment: `work/changes/DIRECTION-0006_IMPACT.md`.

## Control table

| Prompt ID | Domain | Status | Parallelism | DIRECTION-0006 impact | Handoff note |
|---|---|---|---|---|---|
| `P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01` | LAB capability coverage / organization / Git / parallel execution | READY | SERIAL_REQUIRED_FOR_BOOTSTRAP_THEN_PARALLEL | NEW / PRIMARY NEXT | Must be refreshed to include capability-first topology, information governance/Data Council and sensitive-data handling before handoff |
| `P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01` | Repository / runtime modes / artifact lifecycle | READY | SERIAL_REQUIRED | REVIEW_REQUIRED | Refresh storage/degraded profiles, classification/authority and Git parallel-development rules |
| `P-EVENT-PLATFORM-SAGA-01` | Event platform / sagas | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Reuse shared Work model; sensitive payloads obey handling policy |
| `P-OBSERVABILITY-AUDIT-01` | Observability / audit | READY | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Add classification/redaction and organization/UX/deployment evidence correlations |
| `P-LOCAL-TELEMETRY-DATA-ROAD-01` | Local OTel Collector / analytical observation road | READY | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Preserve Collector road; protect sensitive data and support degraded env profile |
| `P-NOTIFICATION-PLATFORM-01` | Human attention / notification / decisions | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Notifications obey information-display classification and shared Attention model |
| `P-SIMULATION-EVALUATION-FOUNDATION-01` | LAB / simulation / replay / Monte Carlo | DRAFT | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Add organization/parallelism scenarios; simulation datasets preserve classification/provenance |
| `P-AGENT-RUNTIME-COMMUNICATION-PLANE-01` | Sessions / work / Devin API / MCP / A2A | READY | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Refresh for multi-session LAB organization, provider knowledge and sensitive-context policy |
| `P-DEVIN-API-ACCESS-DISCOVERY-01` | Devin API discovery / RBAC | SUPERSEDED | DISCOVERY_ONLY | SUPERSEDED | Real API evidence replaced separate discovery prompt |
| `P-OBSERVABILITY-AUDIT-PLATFORM-01` | Earlier observability draft | SUPERSEDED | PARALLEL_SAFE_WITH_BOUNDARIES | SUPERSEDED | Replaced by `P-OBSERVABILITY-AUDIT-01` |

## Active/ready files

- `active/P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01.md`
- `active/P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01.md`
- `active/P-EVENT-PLATFORM-SAGA-01.md`
- `active/P-OBSERVABILITY-AUDIT-01.md`
- `active/P-LOCAL-TELEMETRY-DATA-ROAD-01.md`
- `active/P-NOTIFICATION-PLATFORM-01.md`
- `active/P-AGENT-RUNTIME-COMMUNICATION-PLANE-01.md`

## Draft

- `draft/P-SIMULATION-EVALUATION-FOUNDATION-01.md`

## Superseded

- `superseded/P-DEVIN-API-ACCESS-DISCOVERY-01.md`
- `superseded/P-OBSERVABILITY-AUDIT-PLATFORM-01.md`

## Candidate follow-up prompts

Do not generate/launch all simultaneously. Collision-check after LAB bootstrap:

- `P-DIRECTOR-CHAT-WORK-READMODEL-01`
- `P-STANDARDS-INTELLIGENCE-CONFORMANCE-01`
- `P-ANALYTICS-EVIDENCE-READMODELS-01`
- `P-KNOWLEDGE-GRAPH-CQRS-PROJECTION-01`
- `P-INFORMATION-CLASSIFICATION-DATA-GOVERNANCE-01`
- `P-PORTFOLIO-BACKLOG-ENGINEERING-FLOW-01`
- `P-OPENSHIFT-SERVICE-READINESS-DISCOVERY-01`

## Handoff rule

Before handing a `READY` prompt to Devin, Work must:

1. refresh repository baseline;
2. confirm active direction;
3. inspect active workstreams/shared surfaces;
4. apply latest impact assessment;
5. refresh Session Context Pack;
6. classify blocker/research state;
7. identify standards/gates/evidence expectations;
8. identify information classification/provider-projection implications;
9. identify analytical/read-model/Arc42 implications where applicable;
10. decide whether prompt remains READY, needs boundaries, must wait or is superseded;
11. add Context Refresh for long-running sessions after material change.

Do not invent timestamps, execution state or Devin session references.
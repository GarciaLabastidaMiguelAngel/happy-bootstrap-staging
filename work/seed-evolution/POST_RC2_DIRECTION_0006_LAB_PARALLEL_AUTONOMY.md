# Post-RC2 Direction 0006 — LAB Parallel Autonomy, Capability Coverage and Information Governance

Status: POST_RC2_EVOLUTION_INPUT
Historical seed snapshot affected: none directly
Target: first LAB handoff release and future candidate/reconciliation after rc2

## Integrity rule

Do not edit the immutable rc2 seed snapshot in place.

This file records accepted post-rc2 direction that must be layered over rc2 for the current LAB handoff and later reconciled into a future candidate while preserving historical hashes, manifests, readiness and validation evidence.

## Material additions

### 1. LAB construction priority

For the current first construction phase, fastest safe delivery and useful parallelism take precedence over minimizing Devin ACU/token usage. Usage is still observed for later optimization.

### 2. Capability-first organization

Do not equate areas with agents.

Use:

OBJECTIVE
-> CAPABILITY
-> RESPONSIBILITIES / POLICIES / GOVERNANCE
-> DETERMINISTIC CONTROLS
-> TOOLS
-> SKILLS / PROCEDURES
-> WORKSTREAMS
-> AGENT / SESSION TOPOLOGY IF JUSTIFIED
-> MEASURE
-> REBALANCE.

LAB may temporarily use many Devin sessions. Final platform topology remains `DETERMINISTIC -> TOOL -> SKILL -> AGENT`.

### 3. Git parallel-development gate

Broad parallel coding requires verified repository baseline, owned/shared/protected surfaces, branch/work linkage, deterministic checks, merge order, context refresh and measurable conflict/rework control.

`main` remains the accepted integration baseline.

### 4. Development resilience

The product must remain useful when OpenShift development lacks central database, durable storage or enterprise identity.

Use explicit profiles and truthful degraded capability states. Git may rebuild declarative/governed projections but must not become a transactional database substitute.

### 5. Knowledge specialization

Knowledge becomes an explicit governed capability with authority, provenance, classification, lifecycle, freshness, graph/read-model/index/vector projections and controlled provider/Devin knowledge projection.

Provider knowledge is a cache/projection, not canonical authority.

### 6. Parallel Research Fabric

Multiple bounded ResearchRequests may run concurrently. Evidence priority is official standards/specifications/RFCs, official product/framework documentation, institutional guidance, official industry/regulatory sources, then secondary evidence when necessary and labelled.

Unknown evidence must remain UNKNOWN/PARTIAL until resolved.

### 7. Information classification and sensitive-data governance

Classification, authentication, MFA/step-up and authorization are separate concerns.

Information handling decisions must consider sensitivity, data type, regulatory/control scope, environment, user/role, action and purpose.

Sensitive information is not copied to Devin, logs, traces, vector/graph projections, Arc42 or human exports by default. Deterministic handling policy decides allow/deny/mask/redact/step-up/approval.

PCI scope is based on actual CHD/SAD/CDE impact, not merely banking context. Prefer tokenized/masked/CardID representations and minimize PCI scope.

Institutional information classification is authoritative when available; Microsoft Purview labels may be mapped where institutionally used rather than inventing a conflicting taxonomy.

### 8. UX and architect experience

The web dashboard is an architecture-work channel, not only chat or metrics. Deterministic UI handles structured state/actions; chat handles synthesis/explanation/reasoning.

Usability feedback becomes governed evidence/backlog input, not automatic model training.

### 9. Independent QA / reconciliation / deployment

Longer autonomous work cycles require independent QA, architecture conformance, security/compliance validation, documentation/Arc42 validation, deployment readiness and cross-artifact consistency.

### 10. Governance councils

Cross-area meetings are purpose/trigger-driven reconciliation mechanisms with referenced inputs and durable outputs. They are not generic conversational status rituals.

### 11. Organization self-evaluation

Measure throughput, cycle time, blocked time, merge conflicts, rework, defects, duplicated work, context drift, gate failures, AI usage and UX outcomes. Add/split/merge/retire workstreams only with responsibility transfer and evidence.

## Primary first prompt

The first LAB bootstrap prompt is:

`work/prompts/active/P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01.md`

It must execute before uncontrolled broad parallel implementation.

## Current research issues

- GitHub Issue #1 — Standards source reconciliation for ArchiMate version.
- GitHub Issue #2 — Institutional information classification, Purview compatibility, PCI handling and identity/step-up research.

These are research inputs, not authority to rewrite historical rc2 facts.

## No-loss requirement

Absorbing DIRECTION-0006 must preserve all active DIRECTION-0001..0005 principles, including specification-first, standards-first, Director/Copilot, Arc42 lifecycle, audience-aware diagramming, analytics/audit/evidence, CQRS/read models/graph/vector strategy, event/saga/notification/session planes, OpenTelemetry road, portfolio/backlog semantics and future OpenShift SERVICE evolution.

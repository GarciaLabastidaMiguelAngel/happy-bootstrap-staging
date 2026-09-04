# Post-RC2 Direction 0005 — Analytics, Standards, Knowledge Projection and Autonomous Evolution

Status: POST_RC2_EVOLUTION_INPUT
Historical seed snapshot affected: none directly
Target: future reconciliation/candidate after rc2

## Integrity rule

Do not edit the immutable rc2 seed snapshot in place.

This file records accepted post-rc2 direction that a future seed/candidate/reconciliation wave must absorb while preserving historical manifests, hashes, validation evidence and readiness results.

## New governing capabilities to absorb

### 1. Analytics / Audit / Evidence Plane

The platform must distinguish audit, logs, traces, metrics, event ledger, saga/work state, Git history, Arc42 releases, build/quality evidence and provider usage while allowing correlation across them.

Analytics is a downstream projection over evidence, not a replacement for evidence.

### 2. Standards Intelligence / Conformance

The existing rc2 standards adoption map evolves into a living standards registry with:

- version/source status
- adoption action
- applicable layers/vectors
- conformance maturity
- implementation and verification evidence
- review cadence/triggers
- source-conflict handling

Project conformance must be decomposable; avoid one opaque "standards score".

### 3. Knowledge Graph and CQRS projections

Knowledge should be structured across objectives, capabilities, processes, systems/APIs, data, infrastructure, security, standards, specifications, decisions, work, evidence, observations and documentation projections.

Use logical CQRS/read models over current local infrastructure first. Do not add databases/repositories solely for architectural purity.

Graph/search/vector/read models are query projections and must preserve provenance to governed authority.

### 4. Process knowledge

Represent current and target processes, owners, systems, APIs, data, controls, pain points and evidence.

BPMN may be evaluated as a formal notation when process semantics require it; it is not mandatory for every workflow.

### 5. Portfolio / backlog

Introduce provider-neutral planning concepts for Objective → Initiative → Epic → Feature → governed work/issues/research/risks.

Future Jira integration maps to these semantics rather than defining them prematurely around one Jira configuration.

### 6. Autonomous evolution

Self-evolution is bounded optimization toward governed objectives, not unrestricted self-modification.

The platform may detect improvement opportunities and create backlog candidates, but material architecture/policy changes remain gate/authority controlled.

### 7. AI cost optimization

Track provider usage/cost and migrate repeated stable reasoning into deterministic local capabilities when value is demonstrated.

### 8. Security-analysis boundary

Discovering vulnerabilities does not grant authority to exploit them.

LAB may run controlled authorized POCs; SOLUTION/SERVICE default to passive analysis/evidence/risk/work unless policy explicitly permits active testing.

### 9. Standards research cadence

Research becomes incremental and governed by source-specific cadence/triggers rather than repeated broad internet research.

Use primary official sources first and preserve version/source conflicts until resolved.

### 10. OpenShift / distributed readiness

Scale-out is evidence-driven.

Before moving to multi-workstation or OpenShift SERVICE evaluate throughput, backlog parallelizability, coordination cost, persistence, identity, networking, observability, state ownership and migration.

OpenTelemetry instrumentation and OTLP semantics remain independent from the final telemetry backend; Collector/Operator feasibility is an OpenShift platform validation item.

## Candidate standards additions for future reconciliation

Evaluate, do not auto-adopt:

- ISO/IEC/IEEE 42010:2022 for architecture-description concepts/viewpoints
- ISO/IEC 25010:2023 for product-quality model
- BPMN 2.0.2 for process models when justified
- OpenLineage for analytical Job/Run/Dataset lineage
- DORA delivery metrics as software-delivery indicators
- FinOps Framework for technology value/cost governance where appropriate

Existing rc2 standards retain their historical recorded state until individually reconciled.

## Known standards-source conflict

Historical rc2 content records ArchiMate 4 as published in 2026. Current accessible Open Group pages surfaced during DIRECTION-0005 research identify ArchiMate 3.2 as the current downloadable/certification baseline. Treat as `SOURCE_CONFLICT` and resolve from a definitive current Open Group publication before modifying active adoption status.

## Future candidate deliverables

A future seed/candidate reconciliation should add or update:

- standards registry/catalog
- conformance evidence model
- analysis/observation contracts
- graph/read-model contracts
- backlog/portfolio contracts
- scale/readiness model
- dashboard capability map
- updated traceability and gap matrices
- post-rc2 delta log

## No-loss requirement

Do not lose DIRECTION-0004 Arc42 lifecycle/diagramming governance or any earlier DIRECTION-0001..0003 operating principles when absorbing this delta.

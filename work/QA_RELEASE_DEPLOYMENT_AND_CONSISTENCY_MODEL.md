# QA, Release, Deployment and Consistency Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0006

## Purpose

Define independent quality, deployment and cross-artifact consistency responsibilities so Architecture AI can evolve autonomously for longer periods and return larger trustworthy deliverables.

## Quality organization

### QA / Validation
Verifies implemented behavior against specifications/contracts.

### Architecture Conformance
Checks module boundaries, dependency rules, shared foundations, patterns and standards.

### Security / Compliance Validation
Checks applicable security/compliance gates and evidence.

### Documentation / Arc42 Validation
Checks that material accepted changes are reflected in the governed human projection.

### Reconciliation / Consistency
Checks that specifications, code, tests, diagrams, Arc42, standards, backlog and runtime evidence do not contradict each other.

## Consistency graph

At minimum maintain traceability among:

Objective
<-> Epic/Feature/WorkPackage
<-> Specification
<-> Standard/Policy/Gate
<-> Code/Contract
<-> Test/Evidence
<-> Decision/ADR
<-> Diagram/Arc42
<-> Release/Deployment
<-> Runtime observation

A missing link becomes a gap/finding, not an assumed connection.

## Release pipeline

Plan
-> implement
-> integrate
-> deterministic tests/checks
-> QA independent validation
-> security/compliance gates where applicable
-> architecture/documentation consistency
-> release candidate
-> deploy
-> runtime smoke/health validation
-> evidence receipt
-> accept/rollback/remediate.

## Deployment team responsibilities

- local launcher/runtime;
- environment configuration;
- OpenShift manifests/profile;
- storage profile selection;
- identity profile selection;
- telemetry/Collector integration;
- health/readiness;
- rollback/recovery;
- release evidence;
- environment capability matrix.

## Environment capability matrix

Track capability by environment rather than assuming equivalence.

Examples:
- local DB available?;
- central DB available?;
- PVC available?;
- enterprise identity available?;
- OTLP/Collector allowed?;
- external APIs reachable?;
- Devin API reachable?;
- secrets mechanism available?;
- Confluence/Jira connectivity available?;
- allowed security testing level.

The application must expose explicit profile/degraded capability state.

## Autonomous delivery rule

Devin may work autonomously over multiple workstreams only while:
- global direction remains valid;
- Git baseline/ownership is controlled;
- blockers are explicit;
- deterministic checks continue to run;
- QA is independent from the implementing session where practical;
- material contradictions trigger reconciliation;
- destructive/privileged actions remain bounded by mode/policy.

## Larger deliverables

The Director should progressively return higher-level deliverables such as:
- integrated feature set;
- validated Epic;
- Arc42 increment/release candidate;
- platform readiness package;
- LAB POC result set;
- standards/conformance review;
- deployment readiness report.

These deliverables must include evidence, unresolved gaps and next actions rather than hiding incomplete work.

## Goal

Allow the platform to run longer autonomous construction cycles without sacrificing explainability, traceability or confidence in the resulting integrated product.
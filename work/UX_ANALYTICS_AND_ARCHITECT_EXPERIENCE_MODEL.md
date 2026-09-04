# UX Analytics and Architect Experience Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0006

## Purpose

Ensure Architecture AI evolves as a usable web copilot for architects, not only as a telemetry dashboard or chat window.

## Core principle

UX MUST BE MEASURED AGAINST ARCHITECT WORK, NOT AGAINST FEATURE COUNT.

The dashboard is a channel for architecture work. The user should not need to talk to the Copilot for every operation if a deterministic UI/workflow is faster.

## Architect task model

Identify and measure real architect tasks such as:
- understand current solution/project status;
- inspect blockers/owners/gates;
- review standards/evidence;
- create/review a solution/design;
- inspect Arc42 delta/release state;
- approve/answer a decision request;
- view backlog/epics/features;
- inspect quality/security findings;
- launch/review a LAB POC;
- inspect knowledge/process/application/infrastructure relationships;
- request a conceptual or technical diagram;
- review publication/readiness.

For each task capture desired outcome, frequency, time/steps, friction, evidence needed and whether chat or deterministic UI is the better interface.

## Interaction rule

Use chat when natural-language reasoning, synthesis or cross-domain explanation adds value.
Use deterministic UI when structured state/actions can be presented more efficiently.

Examples:
- Chat: "Why is this epic blocked and what can proceed?"
- UI: backlog table, gate matrix, standards state, release history, work assignment.

## Feedback model

Collect bounded feedback such as:
- useful/not useful;
- answer corrected;
- missing information;
- too much/too little detail;
- task completed/not completed;
- friction category;
- requested capability.

Feedback must become governed UX evidence and backlog input, not immediate self-training data.

## Web analytics research

Do not invent a custom analytics framework by default.

Research and select supported instrumentation/frameworks using evidence for:
- page/task flows;
- performance/web-vital style measurements where applicable;
- error/crash signals;
- interaction events;
- accessibility/usability checks;
- privacy/security requirements;
- OpenTelemetry compatibility if useful.

Prefer first-party/self-hosted or institutionally approved patterns when banking constraints apply.

## Frontend architecture

The Angular frontend must have explicit module/feature boundaries, shared design/contract rules and observability conventions so multiple frontend developers/sessions can work in parallel safely.

Do not introduce Backend-for-Frontend merely because it is a known pattern.

BFF becomes a candidate when multiple channels, channel-specific aggregation, security, latency or contract-isolation needs justify it.

Current single-web-channel architecture should remain the simplest supported design until evidence changes that.

## UX governance

UX changes must preserve:
- accessibility requirements when applicable;
- security/privacy;
- consistent terminology;
- visual hierarchy;
- audience-appropriate diagramming;
- architecture task efficiency;
- explicit user feedback/evidence.

## Dashboard evolution

Metrics may begin inside the Architecture AI dashboard for speed.

Later they may move to specialized observability/analytics tools if that improves focus, scale or governance. The Director dashboard should retain the decision-oriented summary even when raw telemetry lives elsewhere.

## Goal

Make Architecture AI demonstrably useful to a bank architect through measurable task outcomes, while keeping chat as one interaction mode rather than the entire product.
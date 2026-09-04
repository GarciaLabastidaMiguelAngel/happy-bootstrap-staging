# Architecture AI Logical Planes Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0010

## Purpose

Define the logical planes of Architecture AI so responsibilities remain understandable as the platform grows, without turning every plane into a microservice or deployable.

A plane is a responsibility boundary and architectural view. It is NOT automatically a service, process, pod, repository or agent.

## Core rule

ONE PRODUCT / GOVERNED PLATFORM
-> MULTIPLE LOGICAL PLANES
-> DEPLOYMENT TOPOLOGY ONLY WHEN EVIDENCE REQUIRES SEPARATION.

This preserves the current modular-monolith direction while allowing clear future distribution.

## Plane 1 — Experience / Interaction Plane

Purpose: provide the governed human entry point.

Contains logically:
- Director/Copilot chat;
- dashboards;
- architecture views;
- backlog/status views;
- standards/gates visibility;
- evidence/PCR views;
- human decision/approval interactions;
- future role-specific experiences.

It does not own architecture truth or authorization policy.

## Plane 2 — Governance / Control Plane

Purpose: decide what may happen, why, in what order and under which controls.

Contains logically:
- intent classification;
- identity/role/authority checks for Architecture AI users;
- objectives/direction;
- standards/policies;
- specifications/ADRs;
- portfolio/backlog/work orchestration;
- dependencies/blockers;
- gates;
- environment capability matrix;
- release/promotion decisions;
- agent/session dispatch policy;
- risk/approval routing;
- rollback/compensation governance.

The Control Plane coordinates; it does not become the execution mechanism for every bank platform.

## Plane 3 — Knowledge / Evidence Plane

Purpose: preserve what is known, why it is known, provenance and historical evolution.

Contains logically:
- Git-governed source/context;
- evidence units and provenance;
- process/capability records;
- standards intelligence;
- knowledge graph;
- semantic data-element graph;
- read-model projections;
- research results;
- audit/evolution ledger;
- Arc42/document/diagram canonical references;
- test/PCR evidence references;
- lineage and version relationships.

Lucene/vector/graph/read models are projections, not automatically independent authorities.

## Plane 4 — Execution / Automation Plane

Purpose: perform bounded work after the Control Plane has determined the allowed action.

Contains logically:
- deterministic services;
- Tools;
- Skills;
- Agents/Devin sessions where reasoning is needed;
- build/test automation;
- Git branch/commit/PR operations;
- deployment adapters;
- job/batch execution;
- API/platform adapters;
- document/render/publication automation;
- POC/simulation runners.

This plane follows DETERMINISTIC -> TOOL -> SKILL -> AGENT as capabilities mature.

## Plane 5 — Bank Integration Plane

Purpose: integrate existing institutional systems/platforms without duplicating their authority.

Examples include adapters/integration knowledge for:
- Gravity Plus/core-access APIs;
- core banking systems;
- API Connect;
- Glo / institutional delivery pipeline;
- OpenShift;
- Exadata;
- Redis;
- Kafka/event infrastructure;
- Smart Notification;
- Control-M;
- Kibana/logging;
- identity/PKM/security platforms;
- Confluence/SharePoint/FileShare;
- future bank capabilities.

Each integration preserves the institutional system's decision/data authority unless an explicit governed migration changes it.

## Plane 6 — Observation / Analysis / Learning Plane

Purpose: turn runtime and engineering evidence into measurable improvement.

Contains logically:
- metrics;
- traces;
- technical logs/Kibana evidence;
- audit events;
- build/deployment evidence;
- PCR/load/capacity results;
- UX evidence;
- risk/fraud outcomes where authorized;
- queue/backlog/throughput/rework measures;
- standards/conformance measures;
- deterministic analytics;
- simulation/evaluation;
- improvement candidates.

AI reasoning is applied after deterministic collection/aggregation wherever possible.

## Coordination flow

Typical request:

Architect/User
-> Experience Plane
-> Control Plane
-> Knowledge/Evidence context
-> plan/gates
-> Execution/Automation Plane
-> Bank Integration Plane as needed
-> runtime/result
-> Observation/Analysis/Learning Plane
-> Evidence/Knowledge update
-> Control Plane reconciliation
-> Experience Plane explanation.

## Example — Create/modify a bank microservice

Copilot request
-> Control Plane resolves objective, standards, Glo archetype, API/security/data requirements
-> Knowledge Plane supplies existing patterns/process evidence
-> Execution Plane creates bounded Git work and tests
-> Bank Integration Plane invokes Glo/pipeline/OpenShift capabilities
-> Observation Plane captures build/PCR/runtime evidence
-> Control Plane decides promotion/readiness
-> Arc42/audit projection updated when required.

## Example — Smart Notification change

Copilot request
-> Control Plane checks template/legal/governance requirements
-> Knowledge Plane resolves current template/platform capability
-> Execution Plane prepares approved-format change
-> Bank Integration Plane uses Smart Notification delivery path
-> Observation Plane captures delivery evidence
-> Control Plane reconciles improvement/issue.

## Example — Performance gate

Specification
-> Control Plane requires PCR gate
-> Execution Plane runs versioned load scenario
-> Bank Integration Plane uses OpenShift/environment dependencies
-> Observation Plane aggregates p95/p99/errors/resources
-> Knowledge Plane stores evidence/provenance
-> Control Plane PASS/FAIL/CONDITIONAL
-> Copilot explains next action.

## Separation rules

- Experience Plane does not bypass Control Plane.
- Control Plane does not contain arbitrary business execution code.
- Knowledge Plane does not become a dumping ground for unclassified raw data.
- Execution Plane does not self-authorize material changes.
- Bank Integration Plane does not recreate capabilities already owned by institutional platforms.
- Observation Plane does not silently change policy; it produces evidence/improvement candidates.

## Future physical separation

A plane may become independently deployable only when evidence justifies separation by factors such as:
- scale;
- security boundary;
- availability;
- independent lifecycle;
- operational ownership;
- data isolation;
- workload characteristics.

Until then prefer modular boundaries inside the same Architecture AI product.

## Goal

Give Architecture AI a stable conceptual backbone that explains what coordinates the platform, where knowledge and evidence live, where work executes, how bank systems are integrated, and how measured results return to governance for continuous evolution.
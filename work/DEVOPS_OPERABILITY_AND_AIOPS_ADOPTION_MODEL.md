# DevOps Operability and AIOps Adoption Model

Status: ACTIVE_DIRECTION
Direction revision: DIRECTION-0011

## Purpose

Define DevOps as the capability that makes Architecture AI and banking solutions operational across actual environments, while progressively learning configuration/integration needs and evaluating AIOps practices without creating opaque autonomous operations.

## Core objective

DEVELOPMENT INTENT
-> ENVIRONMENT CAPABILITY
-> REQUIRED CONFIGURATION
-> BUILD/DEPLOY
-> OPERABILITY
-> OBSERVATION
-> INCIDENT/CHANGE EVIDENCE
-> IMPROVEMENT.

DevOps is the engineering bridge between development and operations.

## Responsibilities

Progressively understand/govern:
- development/preproduction/production environment capabilities;
- namespaces/projects and access boundaries;
- Glo/archetype/pipeline behavior;
- OpenShift deployment configuration;
- secrets/configuration;
- routes/network/service discovery;
- API Connect/gateway configuration;
- Kafka/Schema Registry integration;
- Redis/Exadata/connectivity;
- identity/PKM integration;
- Smart Notification integration;
- logging/Kibana/OTel;
- jobs/schedulers;
- PCR/load-test execution topology;
- rollback/recovery;
- promotion gates and evidence.

Do not assume exact development namespace count or topology until discovered.

## Environment Capability Matrix

For every environment preserve verified capability/status for:
- available namespaces/projects;
- compute/resource constraints;
- storage/persistence;
- databases/cache;
- Kafka/event services;
- Schema Registry;
- API management/gateway;
- identity/security/key management;
- notification services;
- observability/logging;
- testing/load-generation permission;
- network restrictions;
- deployment automation;
- human approval/dependency;
- known degradation from production-like behavior.

## Operability definition

A component is not operational merely because it deploys.

Operability requires evidence for, as applicable:
- health/readiness/liveness;
- configuration provenance;
- secrets handling;
- logging/metrics/tracing;
- alerting/diagnostic path;
- capacity baseline;
- restart/recovery;
- rollback;
- dependency failure behavior;
- ownership/escalation;
- runbook/automation;
- version/deployment traceability.

## DevOps learning loop

For each new POC/component:
1. identify institutional delivery path;
2. discover environment prerequisites;
3. express configuration as governed code/config where permitted;
4. validate locally where possible;
5. deploy to development;
6. collect runtime/PCR evidence;
7. record manual/human steps;
8. convert repeatable safe steps into deterministic automation;
9. expose remaining platform/infrastructure blockers;
10. feed improvements into templates/archetypes/standards.

## AIOps direction

AIOps is an adoption/research vector, not a license to let AI make uncontrolled production changes.

Start from deterministic operational data and automation:
- topology/inventory;
- health/state;
- logs/metrics/traces;
- deployment/change history;
- incidents;
- capacity/PCR evidence;
- known runbooks;
- dependency graphs.

Then evaluate AI assistance for:
- anomaly triage;
- correlation;
- probable-cause ranking;
- evidence summarization;
- capacity forecasting;
- runbook recommendation;
- change-risk analysis;
- improvement proposals.

Execution remains bounded by authority, policy, approval, deterministic checks and rollback.

## Adoption measurement

Never state `AIOps adoption = 50%` without dimensions.

Measure separately, for example:
- telemetry coverage;
- topology coverage;
- automated diagnostics coverage;
- automated remediation coverage;
- human-approved remediation coverage;
- evidence quality;
- environment coverage;
- service coverage;
- incident-class coverage.

## Goal

Make development environments useful representations of the operational road, allow DevOps to continuously convert integration knowledge into repeatable capability, and adopt AIOps only where it measurably improves operations without weakening deterministic control.
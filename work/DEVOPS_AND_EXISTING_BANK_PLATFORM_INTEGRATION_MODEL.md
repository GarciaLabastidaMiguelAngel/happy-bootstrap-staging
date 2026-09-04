# DevOps and Existing Bank Platform Integration Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0007

## Purpose

Define DevOps/Platform Engineering as a first-class Architecture AI capability for integrating with the bank's existing delivery and runtime ecosystem before replacing or redesigning it.

## Core principle

INTEGRATE WITH WHAT EXISTS -> OBSERVE -> GOVERN -> IMPROVE -> AUTOMATE.

Architecture AI must understand the current bank delivery/runtime landscape before proposing replacement technology.

## DevOps capability scope

The capability must progressively understand and govern:
- Git repositories, branch/release practices and ownership;
- build pipelines and artifact promotion;
- OpenShift projects/namespaces, deployment configuration and runtime constraints;
- API Connect/API governance integration;
- Kafka/event-platform capabilities and limitations;
- existing logging/observability path, including OpenShift logs and Kibana;
- configuration/secrets/identity patterns;
- environment capability differences;
- infrastructure requests and human approval processes;
- deployment evidence, rollback and recovery;
- platform SLO/quality/performance evidence.

## Environment integration rule

Do not assume every environment exposes the same infrastructure.

Maintain an Environment Capability Matrix containing at least:
- runtime/deployment capability;
- persistence availability;
- Kafka/broker availability;
- API Connect connectivity;
- identity/LDAP/OIDC availability;
- telemetry/logging path;
- secrets/configuration mechanism;
- network restrictions;
- allowed testing/security level;
- human/infrastructure dependencies.

The product should degrade explicitly instead of becoming undeployable merely because a future central dependency is unavailable.

## Existing platform first

Examples of current integration direction:

### Kafka
If only a broker/topic is available for a POC, use the smallest valid event topology and implement deterministic filtering/transformation/aggregation in the current Spring application where justified.

Do not invent a full event platform or assume ksqlDB/KSQL is available.

If later the bank adopts or provides additional stream-processing capabilities, compare the current Spring-based implementation against the managed/platform capability and migrate only where value, governance and operational maturity justify it.

### OpenShift
Deploy the same product with environment-specific profiles. Do not create a separate architecture fork simply because development lacks central DB, LDAP or other services.

### API governance
Consume existing API governance/catalog/standards and expose compliance gaps rather than creating an independent parallel API-governance universe.

## DevOps traceability

Deployment-related work should connect:

Objective
<-> Specification
<-> Environment capability
<-> Infrastructure dependency
<-> Git change
<-> Build artifact
<-> Deployment
<-> Runtime version
<-> Logs/metrics/traces
<-> Incident/Issue
<-> Improvement work.

The Director should be able to answer:
- what version is deployed where?;
- why is a capability degraded?;
- which infrastructure dependency is blocking promotion?;
- what changed since the previous release?;
- what runtime evidence proves or disproves an improvement?;
- which bank governance area owns the next decision?;
- what can continue without that decision?

## DevOps as analysis input

DevOps is not only deployment automation. It is a primary evidence producer for platform evolution.

Inputs include:
- build duration/failure;
- deployment duration/failure;
- rollback frequency;
- environment drift;
- runtime errors;
- resource pressure;
- release lead time;
- change rework;
- dependency blockers;
- operational toil.

These should feed Analytics, Director prioritization, QA and Retrospective/Organization Optimization.

## Automation maturity

1. Document current manual process.
2. Measure repeatability and failure points.
3. Convert repeatable actions into deterministic scripts/Gradle/CI/API integrations.
4. Wrap bounded operations as Tools.
5. Build Skills for repeatable multi-step procedures.
6. Use Agents only where contextual reasoning/orchestration adds value.

## Goal

Create a DevOps/Platform capability that lets Architecture AI understand how software actually moves through the bank, integrate with existing controls, and progressively reduce manual friction without bypassing institutional governance.
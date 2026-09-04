# Institutional Platform Reuse and Archetype Integration Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0008

## Purpose

Define how Architecture AI integrates with existing institutional delivery platforms, archetypes and controls before considering replacement.

## Core rule

IF A GOVERNED PLATFORM CAPABILITY ALREADY EXISTS, REUSE/INTEGRATE FIRST.

Do not rebuild working institutional delivery capabilities merely to gain local ownership.

## Glo platform status

The user identifies an existing bank platform named `Glo` that currently provides application archetypes and pipeline integration for deploying applications/microservices to OpenShift.

This is currently USER-PROVIDED CONTEXT, not yet independently evidenced in the repository. Architecture AI must discover and document the actual Glo contracts/capabilities before implementing against assumptions.

## Candidate integration model

For a new bank microservice/application:

Glo approved archetype
-> clone/bootstrap project
-> inspect generated structure and required conventions
-> preserve institutional framework/pipeline contracts
-> implement solution-specific code
-> use existing build/deploy/promotion path
-> collect evidence and identify gaps/friction
-> improve through compatible extensions where justified.

## What to discover from Glo

- supported application archetypes;
- Spring/Santander Framework baseline;
- required repository structure;
- build tooling expectations;
- CI/CD stages;
- artifact/image registry path;
- OpenShift deployment templates/manifests;
- config/secrets model;
- environment promotion model;
- quality/security gates;
- API governance integration;
- observability/logging integration;
- rollback/recovery;
- ownership/decision rights;
- extension points;
- constraints and known pain points.

## Reuse decision states

For any existing institutional capability classify:
- REUSE_AS_IS;
- REUSE_WITH_CONFIGURATION;
- EXTEND_NON_INTRUSIVELY;
- WRAP/ADAPT;
- PARALLEL_POC;
- REPLACE_CANDIDATE_REQUIRES_EVIDENCE;
- BLOCKED_BY_POLICY/PLATFORM.

Replacement is never justified solely by technical preference.

## Anti-pattern

Do not create:
Architecture AI archetype + separate CI/CD + separate OpenShift conventions
when Glo already owns those responsibilities, unless a validated LAB experiment is explicitly isolated and not represented as the bank target model.

## Copilot integration

Long term, the Copilot should be able to say:
- which archetype applies;
- why;
- what Glo requirements constrain the solution;
- what files/contracts may be changed;
- what pipeline/gates will run;
- what environment prerequisites are missing;
- what evidence is required for promotion.

Later, where authorized, the Copilot may invoke Glo-supported APIs/tools/pipelines rather than reproducing their mechanics.

## Goal

Use existing institutional platforms as force multipliers so Architecture AI focuses on architecture, optimization, governance and automation rather than rebuilding bank delivery foundations.
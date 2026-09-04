# Integration, Adoption and Process Learning Strategy

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0010

## Purpose

Define how Architecture AI learns the bank as it exists, integrates with current governed capabilities, delivers measurable improvements, and only later absorbs/replaces responsibilities when evidence proves that doing so adds value.

This strategy is intentionally different from a greenfield modernization program.

## Governing principle

LEARN CURRENT REALITY
-> MAP PURPOSE / AUTHORITY / CONTROLS / PROCESS
-> REUSE EXISTING CAPABILITY
-> INTEGRATE
-> MEASURE
-> OPTIMIZE LOCALLY
-> PROVE
-> STANDARDIZE REUSABLE PATTERN
-> AUTOMATE MECHANICAL WORK
-> REASSESS OWNERSHIP / PLATFORM BOUNDARY
-> REPLACE ONLY WITH EVIDENCE.

Do not redesign the bank from generic best practice.

## Stable banking anchors

Architecture AI must distinguish strategic anchors that are not current replacement targets from capabilities that may evolve.

User-provided current anchor examples include:
- Gravity Plus as the existing core-access/API compatibility road;
- existing core banking systems as authoritative business systems;
- API Connect as an existing API-management plane;
- Glo as an existing application archetype/OpenShift delivery platform;
- Kafka where already provided;
- Kibana/OpenShift logging where already provided;
- Smart Notification as an existing customer-notification delivery capability;
- Control-M for current governed workload scheduling/mallas.

These anchors are accepted as current context but their exact capabilities remain evidence-required.

## Process learning model

For every discovered bank process/capability, maintain a Process Capability Record containing at least:
- purpose and customer/business outcome;
- trigger;
- inputs/outputs;
- systems/platforms involved;
- data classifications;
- roles/owners/decision rights;
- standards/policies;
- human approvals;
- gates and evidence;
- SLAs/cutoffs/windows;
- error/retry/recovery;
- operational pain/toil;
- runtime metrics where available;
- current artifacts/templates;
- automation surfaces/APIs;
- known limitations;
- UNKNOWN evidence gaps;
- reuse/adoption classification;
- improvement candidates.

## Adoption lifecycle

A capability/process may progress through:

DISCOVERED
-> SOURCE_VERIFIED
-> AS_IS_MAPPED
-> INTEGRATED_AS_IS
-> MEASURED
-> OPTIMIZATION_CANDIDATE
-> LAB_POC
-> EVIDENCE_VALIDATED
-> ADOPTED_EXTENSION
-> STANDARDIZED_PATTERN
-> AUTOMATED
-> OWNERSHIP_REVIEW
-> RETAIN / ABSORB / REPLACE / RETIRE.

No stage transition is implied by document creation alone.

## Reuse classification

Classify each existing capability as:
- REUSE_AS_IS;
- REUSE_WITH_CONFIGURATION;
- EXTEND;
- WRAP_ADAPT;
- COMPLEMENT_WITH_BOUNDED_CAPABILITY;
- POC_REQUIRED;
- REPLACE_CANDIDATE_REQUIRES_EVIDENCE;
- RETIRE_CANDIDATE_REQUIRES_PROCESS_IMPACT;
- UNKNOWN_REQUIRES_EVIDENCE.

## Automation rule

Human or institutional processes are not removed merely because they are slow.

First identify:
- what decision is being made;
- what evidence is required;
- what part is mechanical;
- what authority must remain human/institutional;
- what can be deterministic;
- what can become Tool/Skill/Agent orchestration.

Target:

CURRENT HUMAN PROCESS
-> explicit model
-> deterministic preparation/validation
-> evidence packaging
-> bounded approval request
-> supported platform API/action
-> audit trail.

## Learning from implementations

Code, OpenAPI, database schemas, platform configuration, pipelines, logs, telemetry and runtime behavior are first-class process evidence.

Architecture AI must not rely only on procedure documents when executable behavior contradicts or extends them.

Conflicts become reconciliation work; they are not silently normalized.

## Strategy for new solutions

New banking solutions should prefer:
1. existing institutional archetype/framework;
2. existing transport/delivery/runtime platform;
3. stable standards/patterns already governed;
4. the smallest new capability required to meet the objective;
5. measurable POC before broad rollout;
6. reusable capability extraction only after repetition/value is demonstrated.

## Relationship to TOGAF

Use TOGAF as an architecture/governance frame for baseline/target/transition architecture, stakeholder concerns, roadmaps and implementation governance.

Do not use TOGAF as a substitute for domain-specific engineering/test/security standards.

## Goal

Make Architecture AI capable of understanding why the bank currently works the way it does, integrating safely with that reality, reducing avoidable cost/latency/toil, and building an evidence-backed path from today's platforms to progressively more automated and optimized target capabilities.
# Capability / Responsibility to Execution Topology Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0006

## Purpose

Prevent premature creation of permanent agents merely because Architecture AI has identified many areas of responsibility.

The current design activity is primarily defining CAPABILITIES, RESPONSIBILITIES, POLICIES, GOVERNANCE and EVIDENCE OBLIGATIONS.

Only after these are explicit should Architecture AI decide how many deterministic services, Tools, Skills, Devin sessions or persistent Agents are needed to fulfill them.

## Core sequence

OBJECTIVE
-> REQUIRED CAPABILITY
-> RESPONSIBILITIES / POLICIES / GOVERNANCE
-> DETERMINISTIC CONTROLS
-> TOOL NEEDS
-> SKILL / PROCEDURE NEEDS
-> EXECUTION WORKSTREAM
-> AGENT / SESSION TOPOLOGY IF JUSTIFIED
-> MEASURE RESULTS
-> REBALANCE.

## Capability coverage matrix

For every capability record at minimum:
- capabilityId;
- objective(s) served;
- responsibility set;
- governing policies/gates;
- required standards/evidence;
- deterministic checks/actions;
- Tools needed;
- Skills/procedures needed;
- AI reasoning needs;
- human authority/approval needs;
- data classification/sensitivity;
- environments/modes;
- dependencies;
- expected outputs;
- quality/operability metrics;
- current implementation maturity;
- current execution owner/workstream.

## Important distinction

`AREA` is a logical responsibility/capability grouping.

`WORKSTREAM` is a current execution grouping.

`SESSION` is an ephemeral provider execution context.

`SKILL` is a reusable procedure.

`TOOL` is a bounded deterministic capability.

`AGENT` is an autonomous/semi-autonomous execution role justified only when persistent reasoning/orchestration adds value.

These terms must never be used interchangeably.

## LAB rule

LAB may temporarily assign one Devin session to each major workstream, or several sessions to one workstream, to accelerate construction.

That does NOT mean the product architecture should later contain the same number of agents.

Examples:
- Research may use five concurrent sessions today but later expose one Research Skill plus deterministic source/freshness Tools and only one reasoning agent.
- QA may use separate sessions during construction but most final checks should become deterministic Gradle/test/security/architecture tools.
- Knowledge may use specialized research sessions while its canonical classification/projection pipeline becomes largely deterministic.

## Coverage before optimization

First ensure every required capability has an owner/implementation plan.
Then optimize execution topology.

Do not reduce session count while responsibilities become orphaned.
Do not add sessions where work cannot be safely split.

## Organization change rule

Any add/split/merge/retire action must answer:
1. Which capabilities/responsibilities are affected?
2. Who/what becomes the successor executor?
3. What state/context/open work moves?
4. Which policies/gates remain mandatory?
5. How is continuity verified?
6. What metric justifies the organizational change?

## Goal

Allow Architecture AI to discover and formalize many capability areas now while delaying the final agent count/topology until real workload, quality, coordination cost and determinism evidence exist.
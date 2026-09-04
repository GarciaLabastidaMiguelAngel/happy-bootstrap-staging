# Copilot Dashboard, Human Work and Explanation Model

Status: ACTIVE_DIRECTION
Direction revision: DIRECTION-0011

## Purpose

Define how an architect interacts with Architecture AI through one governed dashboard/Copilot surface that exposes only meaningful human work, explains why work exists, and lets the platform continue autonomous/deterministic work where human input is unnecessary.

## Core principle

AI/automation should consume expandable/deducible work.
Humans should receive decision, evidence, authority and ambiguity work.

The dashboard must not become a generic task list or a generic chatbot.

## Primary dashboard views

### My Work
Human-resolvable work items such as:
- missing institutional evidence;
- architecture/governance decision;
- approval/sign-off;
- ambiguous business rule;
- environment/access dependency;
- evidence collection request;
- exception/risk acceptance;
- POC input required.

### Blockers / Research Requests
Show:
- what is blocked;
- why it is blocked;
- which objective/initiative/specification it impacts;
- what work can continue independently;
- exactly what evidence would unblock it.

### Decisions Required
Expose options, trade-offs, standards/policies, evidence, affected assets, reversible/irreversible consequences and recommended next experiment when a decision is not yet mature.

### Solution / Initiative Health
Show work, evidence, gates, runtime outcomes, standards conformance and unresolved gaps by solution/initiative rather than by disconnected tasks.

### Adoption / Conformance
Never show opaque percentages. Every number must drill into denominator, applicable requirements, evidence and exceptions.

## Work semantics

Architecture AI should preserve the distinction among:
- Objective;
- Initiative/Epic/Feature;
- WorkPackage;
- Task;
- ResearchRequest;
- Blocker;
- DecisionRequest;
- ApprovalRequest;
- EvidenceRequest;
- AutomatedAction;
- RuntimeFinding.

A human-facing Task is created only when a concrete human action is actually required.

## Example

Instead of:
`Task: Customer Position POC incomplete`

Prefer:
`EvidenceRequest: provide the current web Customer Position screenshot and identify the API fields shown above the fold.`

With context:
- impacts BI-0003;
- blocks BFF view contract;
- does not block BI-0001 backend source mapping;
- requested because current evidence is UNKNOWN.

## Copilot chat

The dashboard includes a persistent Copilot conversation surface backed by governed project context.

The chat should support questions such as:
- What needs my attention now?
- Why is this blocked?
- What can continue without me?
- Show the evidence behind this recommendation.
- If we change the event-governance naming policy, what runtime assets are actually impacted?
- Why does the dashboard say BIAN alignment is 62%?
- Which controls are missing evidence?
- What is deployed in development and what is degraded?
- What should I resolve next to unblock the highest-value POC?

The Copilot should answer from current governed state/read models and expose UNKNOWN rather than fabricate completeness.

## Chat vs deterministic UI

Use chat for:
- explanation;
- synthesis;
- trade-off reasoning;
- impact exploration;
- natural-language planning;
- asking for missing context.

Use deterministic UI/actions for:
- approvals;
- assignments;
- gate transitions;
- environment selection;
- policy changes;
- configuration changes;
- deployments;
- evidence attachment;
- acceptance/rejection;
- destructive/high-impact actions.

Chat may prepare these actions but should not bypass deterministic authorization/gates.

## Work prioritization

The dashboard should help the architect choose work by combining:
- customer/business impact;
- blocking impact;
- risk/security severity;
- number/value of downstream items unblocked;
- evidence age/confidence;
- effort/dependency estimate;
- environment availability;
- regulatory/institutional due date where evidenced.

Do not use an unexplained AI priority score as authority.

## Traceability

Every human work item should link to the relevant chain:

Direction/Objectives
<-> Initiative
<-> Specification/Policy/Standard
<-> Work/Research/Decision
<-> Evidence
<-> Git/implementation
<-> Test/Gate
<-> Deployment/Runtime
<-> Outcome/Improvement.

## Goal

Make the architect's daily experience one of resolving the few questions that genuinely require human knowledge/authority while Architecture AI continuously handles deterministic analysis, preparation and execution within governed boundaries.
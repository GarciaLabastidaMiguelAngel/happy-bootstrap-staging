# Knowledge Direction and Arborescent Projection Model

Status: ACTIVE_DIRECTION_MODEL
Direction: DIRECTION-0013

## Purpose

Define knowledge as a governed evolving capability with an explicit direction from raw information toward verified, reusable, explainable and action-supporting knowledge, while preserving hierarchical navigation and cross-cutting graph relationships.

## Core direction

RAW INFORMATION / SOURCE
-> EVIDENCE UNIT
-> NORMALIZED FACT / CANDIDATE FACT
-> VERIFIED KNOWLEDGE
-> GOVERNED SEMANTIC RELATIONSHIP
-> DECISION / STANDARD / PROCESS / SPECIFICATION LINK
-> TECHNICAL REALIZATION BINDING
-> RUNTIME EVIDENCE
-> LEARNED PATTERN / REUSABLE CAPABILITY
-> CONTEXTUAL PROJECTION TO HUMAN/AGENT.

Knowledge should not be accumulated without purpose. Each projection must answer a consumer question, support a gate/decision, reduce rediscovery or enable deterministic execution.

## Layers and vectors

Use two complementary views.

### Layers

Examples:
- source/evidence;
- semantic/domain knowledge;
- architecture/governance knowledge;
- technical realization;
- operational/runtime knowledge;
- analytical/learning knowledge;
- contextual projections/read models.

### Cross-cutting vectors

Examples:
- security;
- fraud/risk;
- availability/resilience;
- data/classification/privacy;
- standards/compliance;
- performance/capacity;
- cost/FinOps;
- process/governance;
- ownership/authority.

A vector may cross every layer.

## Arborescent navigation

Use hierarchical paths for human navigation and work decomposition, for example:

```text
Banking Platform
+-- Channels
|   +-- Web
|   |   +-- Customer Position
|   |   +-- Beneficiary Management
|   +-- Mobile
+-- Core Access
|   +-- Gravity Plus
+-- Eventing
+-- Identity
+-- Operations
```

But store cross-branch relations explicitly:

`Customer Position --uses--> Gravity Plus`
`Customer Position --governed-by--> Data Freshness Policy`
`Beneficiary Management --requires--> Step-Up Policy`
`Web --observed-by--> PCR evidence`.

Therefore the canonical relationship model is graph-capable even when the dashboard presents tree views.

## Knowledge maturity states

Candidate lifecycle:
- DISCOVERED;
- UNVERIFIED;
- SOURCE_VERIFIED;
- NORMALIZED;
- LINKED;
- GOVERNED;
- REALIZED;
- RUNTIME_VERIFIED;
- REVIEW_DUE;
- SUPERSEDED/DEPRECATED.

Do not present an unverified source statement as settled architecture knowledge.

## Direction by consumer

Knowledge projections should differ by consumer without duplicating canonical truth.

Examples:
- architect: decisions, standards, gaps, technical realization and impacts;
- DevOps: environment capability, deployment, operability, runbooks, runtime evidence;
- developer/Devin: bounded implementation context, contracts, module boundaries, tests/gates;
- security/fraud: applicable controls, data flows, enforcement/evidence;
- governance: policies, applicability, conformance and exceptions;
- Copilot: user-authorized Context/Evidence Pack assembled from the same canonical knowledge.

## Knowledge optimization objective

Architecture AI should progressively reduce the need to reread raw documents/chats by preserving:
- stable entities/identifiers;
- provenance;
- relationships;
- decisions and supersession;
- evidence freshness;
- applicability/context;
- realization/runtime bindings.

Raw sources remain available as evidence but should not be the only usable knowledge representation.

## Human interaction

When the platform lacks enough evidence, it should create a ResearchRequest/EvidenceRequest targeted at the missing knowledge node/relationship rather than ask vague questions.

Example:

`Need current Customer Position balance freshness authority`

rather than:

`Please explain Customer Position.`

## Goal

Create a knowledge system that grows in depth and connectivity without becoming an unstructured document lake: tree-shaped for navigation/decomposition, graph-shaped for truth, and directed toward decisions, implementation, operation and learning.
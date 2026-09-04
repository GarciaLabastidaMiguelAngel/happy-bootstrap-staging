# Project Direction Baseline

Status: ACTIVE
Direction revision: DIRECTION-0011
Previous direction: DIRECTION-0010
Previous accepted baseline commit: `5d3b2788d48003a5d1a71a73d082010b082a4da9`
Repository role: Happy Work staging / prompt-governance control plane
Current operating emphasis: fastest safe LAB construction, bank integration/adoption, process learning, governance-to-runtime traceability, event-topology efficiency, customer-channel optimization, DevOps operability and governed Copilot evolution

## Continuity rule

DIRECTION-0011 incorporates DIRECTION-0010 and all earlier accepted direction unless explicitly overridden below.

The exact DIRECTION-0010 baseline remains recoverable from Git history. Frozen historical releases and immutable snapshots remain historical and MUST NOT be rewritten in place.

DIRECTION-0011 is additive, not a reset.

## 1. Governance intent and runtime realization are separate but linked

Governed by:
`work/GOVERNANCE_TO_RUNTIME_REALIZATION_AND_CONFORMANCE_MODEL.md`

Architecture AI must distinguish:

GOVERNANCE INTENT
-> REALIZATION CONTRACT
-> TECHNICAL IMPLEMENTATION
-> RUNTIME EVIDENCE
-> CONFORMANCE RESULT.

Governance defines meaning, direction, standards, policy, limits, ownership, approvals and required evidence.

Engineering chooses the smallest runtime topology that satisfies those requirements given actual security, workload, operability and environment constraints.

A governed conceptual object does not automatically require a separate physical runtime resource.

Use explicit RealizationBindings:

GovernedConcept
<-> RealizationBinding
<-> RuntimeArtifact
<-> Evidence.

One-to-many and many-to-one mappings are valid when justified.

## 2. Event governance is logical; Kafka topology is physical

Governed by:
`work/EVENT_GOVERNANCE_LOGICAL_CHANNEL_AND_KAFKA_BINDING_MODEL.md`

Canonical chain:

Business/Domain Event
-> Event Contract
-> Logical Event Channel
-> Transport Binding
-> Physical Topic/Platform Resource
-> Runtime Evidence.

A logical event/channel and a physical Kafka topic are not the same thing.

Event governance may preserve institutional/BIAN or future taxonomy/naming requirements while the technical event platform uses a deliberately smaller physical topic set when security, retention, ordering, partitioning, throughput, lifecycle, failure and ownership characteristics are compatible.

Do not create one physical topic merely because one conceptual event/category exists.

Do not consolidate topics when runtime isolation requirements materially differ.

The institutional Schema Registry should be discovered and reused for schema/compatibility governance where its actual configuration supports the need. Do not assume subject naming/compatibility behavior before evidence.

## 3. Conformance/adoption percentages must explain `percent of what`

Opaque metrics such as `BIAN adoption = 50%`, `AIOps adoption = 50%` or `standards alignment = 80%` are prohibited as standalone governance evidence.

Every adoption/conformance result must expose:
- scope/denominator;
- applicability;
- requirements/controls evaluated;
- compliant/partial/non-compliant/unknown counts;
- evidence coverage;
- runtime enforcement coverage where applicable;
- exceptions/deviations;
- weighting method if used.

Recommended dimensions:
1. semantic/model alignment;
2. policy/rule coverage;
3. design realization coverage;
4. runtime enforcement coverage;
5. evidence/verification coverage;
6. process/automation coverage;
7. lifecycle/version/deprecation coverage.

A dashboard score must always drill down to these facts.

## 4. Spring First is subordinate to existing-capability reuse

Governed by:
`work/SPRING_FIRST_TECHNOLOGY_ADOPTION_ORDER.md`

Decision order:

0. EXISTING GOVERNED INSTITUTIONAL CAPABILITY;
1. SPRING ECOSYSTEM for application/runtime gaps we own;
2. MATURE JAVA/JVM OPEN SOURCE;
3. MATURE NON-JAVA CAPABILITY when evidence shows better fit;
4. CUSTOM IMPLEMENTATION LAST.

Java/Spring First is a coherence preference, not permission to duplicate Glo, API Connect, Kafka/Schema Registry, Kibana, Smart Notification, Control-M or another adequate institutional capability.

Within application-owned gaps, inspect Spring first before adding another framework/product.

## 5. Customer/channel flows remain deterministic optimization roads

The direction from BI-0001/BI-0002/BI-0003/BI-0004/BI-0005 remains active.

Customer interaction paths should be treated as measurable, mostly deterministic sequences whose work can be minimized, parallelized or moved to the correct layer while preserving security, freshness and authority.

The target is not architectural novelty. It is a governed road where:
- each channel component requests only necessary semantic data;
- BFF/channel composition hides unnecessary source complexity;
- caches/read projections have explicit freshness/reconciliation;
- event propagation is governed and efficient;
- authentication/risk/step-up uses the minimum synchronous work policy allows;
- gateways enforce deterministic authorization;
- core banking receives only work that truly belongs at the core.

Patterns/carriles should emerge from measured repeated needs and become reusable platform capabilities.

## 6. Copilot/dashboard becomes the architect's governed working surface

Governed by:
`work/COPILOT_DASHBOARD_HUMAN_WORK_AND_EXPLANATION_MODEL.md`

The dashboard must emphasize human-required work rather than every internal task.

Primary concepts:
- My Work;
- Blockers/Research Requests;
- Decisions Required;
- Approval/Evidence Requests;
- Solution/Initiative Health;
- Adoption/Conformance drill-down;
- environment/runtime health where relevant;
- persistent Copilot chat.

Architecture AI should continue deterministic/expandable work without asking the architect to do work the platform can safely perform itself.

Human work is for missing evidence, authority, ambiguity, approvals, risk acceptance and genuinely architectural decisions.

The Copilot chat is not a generic chatbot. It is backed by governed state and should answer questions such as:
- what needs my attention now?;
- why is this blocked?;
- what can continue without me?;
- what evidence supports this?;
- what does this adoption percentage actually measure?;
- if governance changes, what runtime artifacts are really impacted?;
- what should I resolve to unblock the highest-value initiative?

Chat may prepare actions, but deterministic UI/gates remain authoritative for approvals, assignments, policy changes, deployments and other material actions.

## 7. DevOps is responsible for progressive operability

Governed by:
`work/DEVOPS_OPERABILITY_AND_AIOPS_ADOPTION_MODEL.md`

DevOps bridges development and operations by learning and governing what is required to make each capability operational in real environments.

For the development cluster, do not assume exact namespace/project count until discovered. Maintain an Environment Capability Matrix for actual namespaces, access, compute, persistence, Kafka/Schema Registry, API Connect, identity/PKM, Redis/Exadata, notification, logging/OTel/Kibana, PCR permissions, network and deployment capabilities.

A deployed pod is not automatically an operational service.

Operability includes, where applicable:
- health/readiness/liveness;
- configuration/secrets provenance;
- logs/metrics/traces;
- capacity/PCR baseline;
- recovery/rollback;
- dependency failure behavior;
- ownership/escalation;
- runbook/automation;
- deployment/version traceability.

DevOps should convert discovered manual/repeatable steps into deterministic automation and feed reusable knowledge back into archetypes, configuration models, gates and standards.

## 8. AIOps is an evidence-driven adoption vector

AIOps is not an automatic autonomous-operations authority.

Start from governed topology, telemetry, runtime/change history, incidents, PCR/capacity evidence and deterministic runbooks.

Then evaluate AI for:
- triage/correlation;
- probable-cause ranking;
- evidence summarization;
- capacity forecasting;
- runbook recommendation;
- change-risk analysis;
- improvement proposals.

Any remediation execution remains constrained by authorization, policy, deterministic validation, gates and rollback.

Adoption must be measured by explicit dimensions such as telemetry coverage, topology coverage, diagnostic automation, remediation automation, evidence quality, environment/service/incident coverage.

## 9. Six logical planes remain active

DIRECTION-0010 logical planes remain:
1. Experience / Interaction;
2. Governance / Control;
3. Knowledge / Evidence;
4. Execution / Automation;
5. Bank Integration;
6. Observation / Analysis / Learning.

A plane is a logical boundary, not automatically a microservice, repository, pod or agent.

The Governance/Control Plane sets direction/rules/gates and coordinates work. It does not reimplement the bank platforms it governs or integrates.

Knowledge/Evidence preserves the conceptual models and their RealizationBindings to runtime.

Execution/Automation performs bounded work.

Bank Integration adapts to actual institutional systems.

Observation/Analysis/Learning proves what actually happened and feeds improvement/governance reconciliation.

## 10. Existing bank anchors remain integration targets

DIRECTION-0010 and earlier reuse rules remain mandatory for current user-provided anchors including:
- Gravity Plus/core access;
- core banking;
- API Connect;
- Glo/OpenShift delivery;
- Kafka/Schema Registry where available;
- Kibana/OpenShift logging;
- Smart Notification;
- Control-M;
- customer IAM/identity candidates;
- Redis/Exadata/read projections.

Rule:

LEARN CURRENT REALITY
-> MAP PURPOSE/AUTHORITY/CONTROLS
-> REUSE/INTEGRATE
-> MEASURE
-> OPTIMIZE
-> PROVE
-> STANDARDIZE/AUTOMATE
-> REPLACE ONLY WITH EVIDENCE.

## 11. Smart Notification / PCR / IAM / CQRS / jobs direction retained

Still active:
- Smart Notification is reused as the current push/email/SMS delivery rail while actual capability/template/legal/delivery behavior is discovered;
- PCR/performance/capacity is progressive test-as-code evidence from local/component through OpenShift/service/end-to-end/preproduction;
- TOGAF, ISO/IEC/IEEE 29119 and ISO/IEC 25010 are used for their appropriate concerns alongside authoritative institutional gates;
- customer IAM is separate from workforce identity and follows mature Java/Spring reuse, standards-based OAuth/OIDC, adaptive risk/step-up and safe credential migration rules;
- CQRS/read projections preserve authority/freshness/version/reconciliation semantics;
- Control-M evolution begins with real workload/malla classification rather than ideological replacement.

## 12. Earlier cross-cutting principles retained

Still mandatory:
- current audit/regulatory/institutional artifacts remain producible while generation becomes deterministic;
- exact Banxico/other authority requirements require official/institutional evidence;
- Copilot remains the long-term governed entry/control point, not source of truth;
- UNKNOWN -> ResearchRequest/Blocker -> evidence -> reconciliation;
- DETERMINISTIC -> TOOL -> SKILL -> AGENT for mature capabilities;
- PLAN BEFORE EXECUTION / specification-first;
- Git parallel-development gate and explicit ownership boundaries;
- information classification/PCI/security/fraud/availability as cross-cutting vectors;
- knowledge governance and provider projections;
- independent QA/reconciliation;
- observability/audit/evidence distinction;
- event/saga/notification/session/agent-runtime separation;
- local-first modular-monolith / one-product direction until physical split is evidenced;
- no unnecessary architectural complexity;
- bounded governed self-evolution.

## Immediate execution priority

1. Preserve current institutional/audit deliverables.
2. Refresh LAB/Git/agent-organization bootstrap against DIRECTION-0011.
3. Continue BI-0001 source/semantic/freshness evidence and BI-0003/BI-0004/BI-0005 discovery.
4. Discover actual event governance, Kafka physical topology and Schema Registry configuration before redesigning event roads.
5. Build the governance-to-runtime RealizationBinding/read-model foundation needed for standards/event/API/data conformance.
6. Make Copilot Dashboard/My Work/Blocker/Decision/Conformance drill-down a primary UX target.
7. Discover development OpenShift namespaces/environment capabilities and make DevOps operability evidence explicit.
8. Continue Smart Notification, PCR, Control-M and customer IAM evidence acquisition in parallel.
9. Use measured POCs to decide which repeated technical roads become standardized platform patterns.

## Research dependencies

Existing:
- Issue #4: Glo archetype/OpenShift delivery contracts;
- Issue #5: institutional/regulatory artifact obligations;
- Issue #6: web Customer Position/binding/frontend evidence;
- Issue #7: Spring Cloud Gateway vs API Connect;
- Issue #8: customer credential/login/binding/risk architecture;
- Issue #9: Control-M malla inventory;
- Issue #10: Smart Notification;
- Issue #11: PCR/load/performance process.

DIRECTION-0011 additionally requires:
- event governance/Kafka/Schema Registry physical-realization discovery;
- development environment/namespaces/DevOps operability discovery;
- current standards/adoption scoring evidence where available.

## Material-change triggers added by DIRECTION-0011

Increment direction again if accepted policy materially changes:
- governance-to-runtime realization model;
- event logical-channel/physical-topic binding policy;
- conformance/adoption scoring semantics;
- Spring-first technology adoption order;
- Copilot human-work/action authority;
- DevOps/AIOps operational authority;
- logical-plane responsibilities/physical separation.

## Working loop

Governance/standard/process intent
-> governed conceptual model
-> RealizationBinding
-> minimal technical implementation
-> deterministic validation/PCR
-> runtime/operability evidence
-> conformance/adoption analysis
-> Copilot explanation/human decision where needed
-> improvement/governance reconciliation
-> next cycle.

The target is a technically efficient banking platform in which governance stays semantically rich and auditable, runtime stays deliberately simple, and Architecture AI can always explain exactly how one realizes the other.
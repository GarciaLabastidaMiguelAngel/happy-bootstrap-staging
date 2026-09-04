# Project Direction Baseline

Status: ACTIVE
Direction revision: DIRECTION-0012
Previous direction: DIRECTION-0011
Previous accepted baseline commit: `f07fd3d06589b496320b6fb38fcdf773fa258ebc`
Repository role: Happy Work staging / prompt-governance control plane
Current operating emphasis: governed cognitive Copilot, deterministic customer/channel optimization, stable modularity, process modernization, banking request/reference traceability, standards/compliance radar, DevOps operability and evidence-driven platform evolution

## Continuity rule

DIRECTION-0012 incorporates DIRECTION-0011 and all earlier accepted direction unless explicitly overridden below.

The exact DIRECTION-0011 baseline remains recoverable from Git history. Frozen historical releases and immutable snapshots remain historical and MUST NOT be rewritten in place.

DIRECTION-0012 is additive, not a reset.

## 1. The architect's primary cognitive surface is the Dashboard + Copilot

Governed by:
`work/COGNITIVE_COPILOT_CHAT_AND_CONTEXT_MODEL.md`

Architecture AI must provide a persistent governed Copilot interaction inside the dashboard.

The chat is not a generic chatbot and is not canonical project state.

Core path:

Architect / active dashboard context
-> intent
-> identity/role/environment/information-classification resolution
-> governed Context/Evidence Pack
-> deterministic read models / graph / standards / runtime evidence
-> bounded Tools/Skills/Devin execution when authorized
-> grounded explanation / plan / research request / prepared action
-> deterministic gate/action for material changes.

Do not inject the entire knowledge base into every prompt. Context must be bounded, relevant, provenance-backed and authorization-aware.

The same platform capabilities/skills may be shared by multiple architects while context, authorized scope, assigned work, decisions and evidence requests differ.

The Copilot should answer questions such as:
- what needs my attention?;
- why is this blocked?;
- what can continue without me?;
- what evidence supports this decision?;
- what standard applies and what is the exact denominator of the adoption score?;
- how is a governed concept realized technically?;
- why is a capability a module or service?;
- what runtime/PCR evidence justifies the topology?;
- what should I resolve next for maximum unblock value?

Material approvals, deployments, policy changes and other actions remain deterministic/auditable even when initiated conversationally.

## 2. Modularity is designed from stable capabilities/change reasons, not framework labels

Governed by:
`work/MODULARITY_BOUNDARIES_AND_EVOLUTION_GUARDRAILS.md`

Spring Modulith is a technical realization aid for a modular Spring Boot application; it is not the architecture definition itself.

Module boundaries should be based on stable capability ownership, authoritative state, provided/required interfaces and expected independent change.

Do not create modules mechanically from:
- TOGAF layers/concepts;
- one API each;
- one table each;
- one logical plane each;
- one agent each;
- one current team each;
- one imagined future microservice each.

Where Spring Modulith is used, enforce architecture rules/tests for cycles, module API/internal access, explicit dependencies and module-level verification/documentation.

Internal events are used where real temporal/ownership decoupling exists. External Kafka publication is a separate TransportBinding decision.

The objective is not zero refactoring. It is to avoid foundational rewrites caused by accidental coupling and premature physical decomposition.

## 3. Existing API/microservice topology is measured before being redesigned

User-provided context indicates a current API platform that may have roughly one microservice per API and a large API count.

This is not automatically wrong and must not be consolidated from ideology.

Evaluate actual topology using:
- independent scaling;
- failure/availability isolation;
- security boundaries;
- data authority;
- ownership/release independence;
- dependency/call amplification;
- OpenShift namespace/resource/operational overhead;
- PCR/capacity evidence;
- observability/support burden;
- change coupling and deployment frequency.

Classify actual services as KEEP / CONSOLIDATE_CANDIDATE / SPLIT_CANDIDATE / WRAP_ADAPT / UNKNOWN.

Primary technical objective remains performant customer/API roads with minimal unnecessary requests/work, not maximizing or minimizing microservice count as a goal by itself.

## 4. Banking interactions distinguish query, transaction, request and long-running operation

Governed by:
`work/BANKING_REQUEST_TRANSACTION_AND_REFERENCE_TRACEABILITY_MODEL.md`

Architecture AI must distinguish:
- QUERY;
- COMMAND / authoritative TRANSACTION;
- accepted asynchronous REQUEST;
- LONG_RUNNING_OPERATION.

An accepted request is not the same as a completed banking transaction.

For eligible operations, after required synchronous authentication/risk/business acceptance controls pass, the platform may acknowledge durable responsibility quickly and complete authoritative processing asynchronously.

This is never assumed from performance preference. Legal/regulatory/business/customer-expectation eligibility must be evidenced per operation.

Candidate state model:
RECEIVED -> VALIDATING -> ACCEPTED -> PROCESSING -> CORE_ACCEPTED -> COMPLETED, with explicit rejected/failure/retry/compensation paths where applicable.

Beneficiary registration is a research candidate example, not an approved async flow.

## 5. Reference/folio correlation is a cross-channel traceability capability

Do not assume every operation should create a new platform folio.

Preserve a stable internal OperationId and typed links among references such as:
- customer-facing reference;
- channel/BFF/request reference;
- correlation/trace identifiers;
- Gravity Plus reference;
- core banking reference;
- external payment/network references where applicable.

A customer-friendly reference is justified only when it improves an actual asynchronous/support/cross-channel problem and never replaces/destroys authoritative references.

When an authoritative core reference is timely, usable and appropriate, return/reuse it rather than create duplication.

Authorized support should be able to resolve a permitted reference to operation state, linked references, authoritative outcome and audit/recovery evidence.

Digital web/mobile are first scope; the model should not prevent later branch/ATM adoption.

## 6. Process governance is a first-class modernization capability

Governed by:
`work/PROCESS_GOVERNANCE_AND_DETERMINISTIC_EXECUTION_MODEL.md`

Separate:

PROCESS GOVERNANCE
-> purpose / owner / policy / controls / states / gates / evidence / SLA

PROCESS DESIGN
-> steps / decisions / dependencies / sync-vs-async / retries / events / human work

PROCESS REALIZATION
-> Spring flow/state/batch/event/job/external platform/human workflow

PROCESS RUNTIME
-> instances / states / timings / correlation / evidence.

The modernization objective is to learn current processes and progressively make repeatable mechanical steps deterministic where permitted, while preserving human/regulatory authority where required.

A Process Governance/Direction capability may exist in Architecture AI but does not automatically require a dedicated permanent agent or separate service.

## 7. Gates are justified decision points, not ceremony

Every gate must capture:
- purpose;
- authority/owner;
- applicability;
- required inputs/evidence;
- pass/fail/conditional criteria;
- exceptions or compensating/customized treatment only where valid;
- environment/stage;
- automation level;
- evidence retention;
- downstream work unlocked.

Do not create gates simply because a framework diagram contains a gate.

Performance/PCR, security, architecture, API, deployment, regulatory and process gates must be traceable to actual requirements and evidence.

## 8. Compliance/standards becomes an explainable radar

Governed by:
`work/COMPLIANCE_RADAR_AND_GATE_TRACEABILITY_MODEL.md`

Architecture AI must maintain an explicit chain:

Authority/Standard/Policy
-> ApplicabilityDecision
-> Requirement/Objective/Control
-> ControlRealization
-> Gate/Test
-> Evidence
-> Conformance status
-> Exception/Risk/Remediation
-> review/version lifecycle.

Distinguish legal/regulatory, contractual/industry mandatory, institutional policy, architecture standard, engineering best practice and research/candidate practice.

A recommendation must never be presented as a regulatory obligation.

Adoption/conformance scores must always answer `percent of what` with denominator, applicability, method, evidence/runtime-enforcement coverage and exceptions.

PCI DSS scope/requirements must be derived from current official PCI SSC material plus actual data flows/institutional assessment. Preserve the distinction among Defined Approach, compensating controls and Customized Approach where the standard permits them.

Other banking obligations (financial regulator, privacy, cryptography, fraud/authentication, operational resilience, secure development, retention, accessibility, institutional policy) require official/institutional evidence before being marked mandatory.

## 9. DIRECTION-0011 governance-to-runtime separation remains mandatory

Governance intent and physical implementation remain separate but explicitly linked:

GOVERNANCE INTENT
-> REALIZATION CONTRACT / BINDING
-> TECHNICAL IMPLEMENTATION
-> RUNTIME EVIDENCE
-> CONFORMANCE.

Rich conceptual/governance structure must not cause equally rich runtime resource count automatically.

The target remains:

RICH GOVERNANCE
+ SIMPLE JUSTIFIED RUNTIME
+ EXPLICIT BINDINGS
+ MEASURABLE PROOF.

## 10. Event governance logical/physical separation remains mandatory

Business/Domain Event
-> Event Contract
-> Logical Event Channel
-> Transport Binding
-> Physical Kafka/platform resource
-> Runtime Evidence.

BIAN/institutional semantic taxonomy may remain rich even when a smaller physical Kafka topic set is technically sufficient.

Physical separation/consolidation must be justified by security, retention/compaction, ordering/keying, throughput, lifecycle, failure isolation, ownership and platform constraints.

Reuse the actual institutional Schema Registry when evidenced; do not infer its subject naming or compatibility policy.

## 11. Customer/channel roads remain mostly deterministic optimization problems

For web/mobile and future channels, represent flows as explicit measurable steps with:
- input/output;
- precondition;
- authority;
- semantic data required;
- sync/async classification;
- timeout/retry;
- freshness/cache policy;
- risk/security requirement;
- emitted events;
- next states;
- latency budget.

Architecture AI may optimize by removing unnecessary calls, parallelizing independent work, caching/projecting safe data, moving work to appropriate layers and reducing core amplification.

Design/reasoning may use AI; normal runtime request processing should remain deterministic unless an evidenced use case requires otherwise.

## 12. Patterns are standardized after repeated measured need

Do not create a platform pattern solely from one theoretical solution.

Sequence:
POC/solution evidence
-> repeated similar need
-> common semantics/constraints
-> pattern candidate
-> deterministic specification/implementation
-> adoption/gates/evidence
-> reusable platform capability.

This applies to semantic projections, BFFs, request processing, references, event bindings, notification intents, IAM/risk, PCR, jobs and future patterns.

## 13. Spring First technology order remains

Decision order:
0. existing governed institutional capability;
1. Spring ecosystem for application/runtime gaps we own;
2. mature Java/JVM open source;
3. mature non-Java technology when evidence shows better fit;
4. custom implementation last.

Spring/Java coherence does not justify duplicating Glo, API Connect, Kafka/Schema Registry, Kibana, Smart Notification, Control-M or another sufficient bank capability.

## 14. Dashboard human-work model remains central

Primary dashboard concepts:
- My Work;
- Blockers / Research Requests;
- Decisions Required;
- Approval / Evidence Requests;
- active solution/POC health;
- standards/compliance/adoption drill-down;
- environment/operability/runtime health;
- persistent governed Copilot chat.

Humans should be assigned missing evidence, genuine decisions, approvals, ambiguity and risk acceptance—not deterministic work the platform can continue safely.

## 15. DevOps owns progressive operability; development cluster is proving ground

Continue discovery through the Environment Capability Matrix.

DevOps must bridge implementation and real operation by learning/configuring:
- namespaces/access/resources;
- Glo/pipelines;
- config/secrets;
- routes/network;
- API Connect/gateways;
- Kafka/Schema Registry;
- Redis/Exadata;
- identity/PKM;
- Smart Notification;
- logging/Kibana/OTel;
- PCR/load permissions/topology;
- health/readiness/liveness;
- recovery/rollback;
- ownership/runbooks.

The development OpenShift environment should support realistic end-to-end demonstrations and progressive PCR evidence without pretending DEV equals PRE/PROD where capabilities differ.

Gradle/build orchestration remains governed by the current build direction and should evolve only when actual deployment/pipeline evidence justifies structural change.

## 16. AIOps remains evidence-driven assistance

Start from topology + metrics/logs/traces + deployments/changes + incidents + PCR/capacity + runbooks.

Use AI first for triage, correlation, probable cause, evidence summaries, capacity forecasting, runbook recommendation and change-risk analysis.

Remediation authority remains deterministic, permissioned, gated and rollback-capable.

## 17. Six logical planes remain active

1. Experience / Interaction;
2. Governance / Control;
3. Knowledge / Evidence;
4. Execution / Automation;
5. Bank Integration;
6. Observation / Analysis / Learning.

A plane is not automatically a module, agent, repository, pod or microservice.

The new cognitive, process, compliance and banking-reference models map across these planes rather than adding new planes by default.

## 18. Existing bank anchors and adoption strategy remain active

Current user-provided integration anchors include Gravity Plus/core access, core banking, API Connect, Glo/OpenShift delivery, Kafka/Schema Registry, Kibana, Smart Notification, Control-M, customer IAM candidates, Redis/Exadata/read projections and current API/service implementations.

Rule:

LEARN CURRENT REALITY
-> MAP PURPOSE/AUTHORITY/CONTROLS
-> REUSE/INTEGRATE
-> MEASURE
-> OPTIMIZE
-> PROVE
-> STANDARDIZE/AUTOMATE
-> REPLACE ONLY WITH EVIDENCE.

## 19. Earlier cross-cutting principles retained

Still mandatory:
- current audit/regulatory/institutional artifacts remain producible while generation becomes deterministic;
- exact Banxico/CNBV/other authority requirements require official/institutional evidence;
- customer IAM remains separate from workforce identity;
- no plaintext credential migration;
- OAuth/OIDC/JWT/reference-token/adaptive-risk/step-up decisions remain evidence-driven;
- CQRS/read projections preserve authority/freshness/version/reconciliation;
- Smart Notification is reused before parallel delivery infrastructure;
- Control-M modernization starts from real workload classification;
- PCR/performance/capacity is progressive test-as-code evidence;
- UNKNOWN -> ResearchRequest/Blocker -> evidence -> reconciliation;
- DETERMINISTIC -> TOOL -> SKILL -> AGENT for mature capabilities;
- PLAN BEFORE EXECUTION / specification-first;
- Git parallel-development gate and explicit ownership boundaries;
- information classification/PCI/security/fraud/availability as cross-cutting vectors;
- knowledge governance/provider projections;
- independent QA/reconciliation;
- observability/audit/evidence distinction;
- event/saga/notification/session/agent-runtime separation;
- local-first one-product modular-monolith direction until physical split is evidenced;
- bounded governed self-evolution;
- no unnecessary architectural complexity.

## Immediate execution priority

1. Refresh LAB/Git/bootstrap against DIRECTION-0012 before first actual handoff.
2. Make Dashboard/Copilot cognitive ContextResolver + My Work/Blocker/Decision/Conformance read model a primary implementation target.
3. Define/verify module boundaries before scaling Spring Modulith implementation; enforce architecture verification in build.
4. Continue BI-0001/BI-0003/BI-0004/BI-0005 evidence and customer-channel optimization.
5. Discover current API/microservice/OpenShift topology before proposing consolidation.
6. Select one representative banking operation for request-vs-transaction/reference discovery only after current semantics/regulatory/process evidence is available.
7. Build process-governance/gate models from real engineering/bank processes, not abstract ceremony.
8. Build standards/compliance radar with precise applicability/denominator/evidence semantics.
9. Continue event/Kafka/Schema Registry, DEV OpenShift, Smart Notification, PCR, Control-M and IAM evidence acquisition in parallel.
10. Use measured repeated needs to decide which patterns become platform roads.

## Research dependencies

Existing Issues #4-#13 remain active as applicable.

DIRECTION-0012 additionally requires evidence for:
- actual API/microservice/namespace topology and operational cost/coupling;
- current customer-facing/core folio/reference semantics for representative operations;
- asynchronous eligibility/process rules for any request-style banking operation;
- current process/gate ownership and evidence;
- exact regulatory/compliance applicability beyond already evidenced frameworks.

## Material-change triggers added by DIRECTION-0012

Increment direction again if accepted policy materially changes:
- Copilot canonical-state/action authority;
- modular boundary/physical-split strategy;
- one-microservice-per-API architecture policy;
- banking asynchronous request eligibility model;
- enterprise customer/reference/folio authority;
- process-governance authority/model;
- compliance-radar authority/scoring model;
- gate authority/exception model.

## Working loop

Human/solution intent
-> governed cognitive context
-> standards/process/current-bank evidence
-> architecture/modular realization
-> deterministic work/gates
-> institutional deployment/runtime
-> operation/reference/event correlation
-> PCR/telemetry/audit evidence
-> conformance/learning
-> Copilot explanation/decision
-> governed improvement
-> next cycle.

The target is an architecture platform where the architect can ask high-level conceptual questions and receive a precise, evidence-backed explanation of both governance and technical implementation; customer journeys become increasingly efficient and deterministic; operational complexity stays justified; and every important process, reference, standard and runtime decision remains explainable.
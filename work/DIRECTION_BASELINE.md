# Project Direction Baseline

Status: ACTIVE
Direction revision: DIRECTION-0010
Previous direction: DIRECTION-0009
Previous accepted baseline commit: `bd8330d816eab75bf483fb3e1ca6e0f11ee64641`
Repository role: Happy Work staging / prompt-governance control plane
Current operating emphasis: fastest safe LAB construction, bank integration/adoption, process learning, institutional-platform reuse, banking POCs, customer IAM/CQRS, performance/PCR evidence, logical planes and governed Copilot evolution

## Continuity rule

DIRECTION-0010 incorporates DIRECTION-0009 and all earlier accepted direction unless explicitly overridden below.

The exact DIRECTION-0009 baseline remains recoverable from Git history. The immutable rc2 snapshot remains historical and MUST NOT be rewritten in place.

DIRECTION-0010 is additive, not a reset.

## 1. Integration/adoption/process learning is now an explicit architecture strategy

Governed by:
`work/INTEGRATION_ADOPTION_AND_PROCESS_LEARNING_STRATEGY.md`

Core lifecycle:

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

Architecture AI is not a greenfield rewrite of the bank.

For every important existing process/platform it should learn purpose, trigger, data, owners, controls, approvals, gates, evidence, SLA, recovery, operational pain, runtime behavior and automation surfaces.

Conflicts between documents, code/configuration and runtime behavior become reconciliation work; they are not silently resolved by invention.

## 2. Existing bank roads remain anchors until evidence says otherwise

User-provided current anchors include Gravity Plus/core-access APIs, core banking systems, API Connect, Glo/OpenShift delivery, Kafka where available, Kibana/OpenShift logging, Smart Notification and Control-M.

These are current integration targets, not automatic replacement targets.

The governing rule remains:

REUSE_AS_IS
-> CONFIGURE / EXTEND / WRAP_ADAPT
-> MEASURE
-> REPLACE ONLY WITH EVIDENCE.

A working capability may be improved; it is not replaced merely because a newer pattern exists.

## 3. Smart Notification is an existing delivery rail to integrate first

Governed by:
`work/SMART_NOTIFICATION_ADOPTION_AND_INTELLIGENCE_MODEL.md`

User-provided context states that Smart Notification already carries push, email and SMS and that customer-facing templates can require Legal approval.

Architecture AI must first discover actual capabilities, APIs, template lifecycle, delivery guarantees, preferences/fallback behavior, observability, ownership and approval rules.

Do not infer that `Smart` means prioritization/personalization/intelligence already exists.

Candidate target decomposition:

Business/Domain Event
-> Notification Intent
-> deterministic policy
-> approved template/version
-> channel plan
-> Smart Notification adapter/delivery rail
-> delivery evidence
-> analysis/improvement.

Legal/institutional approvals remain authoritative. Architecture AI may prepare/validate/package/route but does not self-approve governed customer communications.

Intelligence/ML is added only when a measurable need and governed data/evaluation model exist.

## 4. PCR/performance/capacity becomes a progressive engineering gate

Governed by:
`work/PCR_PERFORMANCE_CAPACITY_AND_SCALABILITY_GATE_MODEL.md`

Performance must be designed and evidenced progressively, not discovered only at late PCR handoff.

Test ladder:
- PCR-0 workload/acceptance model;
- PCR-1 component/pod saturation;
- PCR-2 service scaling/autoscaling;
- PCR-3 dependency-aware service testing;
- PCR-4 end-to-end customer journey;
- PCR-5 bounded resilience/degradation in approved non-production conditions;
- PCR-6 preproduction promotion evidence.

Each test must state exactly what it proves.

A passing single-pod test does not prove end-to-end production capacity.

## 5. Performance tests are governed test-as-code assets

A PCR run should be reconstructable from:

Scenario/workload
+ assertions/thresholds
+ environment manifest
+ test-data profile
+ application/container version
+ dependency topology
+ load-generator topology
+ tool version
-> evidence package.

Where available, reuse the bank's current performance/load platform.

Java-first LAB candidates include Apache JMeter and Gatling Java DSL, but tool adoption is evidence-driven and must not duplicate a sufficient institutional platform.

Performance evidence should preserve p50/p95/p99, throughput, errors, CPU/memory/JVM behavior, connection/dependency pressure, cache hit/miss, backend/core/DB amplification and comparison with previous baseline.

## 6. Standards alignment for test/quality is explicit

Use standards for the concern they actually cover:
- TOGAF: architecture baseline/target/transition, governance and implementation governance;
- ISO/IEC/IEEE 29119 series: test processes/documentation/techniques;
- ISO/IEC 25010:2023: product quality model and measurable quality objectives;
- institutional bank PCR/test gates: authoritative where evidenced.

Do not claim standards compliance merely because a reference appears in documentation.

## 7. Architecture AI has six logical planes

Governed by:
`work/ARCHITECTURE_AI_LOGICAL_PLANES_MODEL.md`

Planes are logical responsibility boundaries, NOT automatic microservices, pods, repositories or agents.

### Experience / Interaction Plane
Copilot, dashboard, views, decisions and human interactions.

### Governance / Control Plane
Intent, direction, standards, policies, specifications, work/backlog, dependencies, gates, environment capability, authorization of Architecture AI actions, dispatch and promotion decisions.

### Knowledge / Evidence Plane
Git-governed state, provenance, process knowledge, standards intelligence, graph/read models, research, evolution audit, Arc42/diagram references and test/PCR evidence.

### Execution / Automation Plane
Deterministic services, Tools, Skills, Agents/Devin where needed, build/test, Git operations, deployments, jobs, platform adapters, publication and POC/simulation runners.

### Bank Integration Plane
Gravity Plus/core access, API Connect, Glo/OpenShift, Exadata, Redis, Kafka, Smart Notification, Control-M, Kibana, identity/PKM and other institutional systems.

### Observation / Analysis / Learning Plane
Metrics, traces, logs, audit, builds/deployments, PCR, UX, safe risk outcomes, backlog/throughput, standards conformance, deterministic analytics, simulation and improvement candidates.

## 8. Plane separation does not override the one-product/modular-monolith direction

Default:

ONE GOVERNED PRODUCT
-> modular plane boundaries
-> physical separation only when justified by scale, security boundary, availability, data isolation, lifecycle or operational ownership.

Do not create a microservice per plane.

## 9. The Control Plane coordinates; it does not reimplement every bank platform

Typical flow:

User/Architect
-> Experience Plane
-> Control Plane
-> Knowledge/Evidence context
-> plan/gates
-> Execution/Automation
-> Bank Integration capability
-> runtime/result
-> Observation/Analysis
-> Knowledge/Evidence update
-> Control Plane reconciliation
-> Copilot explanation.

The Copilot remains the long-term governed entry point while institutional platforms retain their own authority until an explicit migration changes it.

## 10. Customer-first POCs remain the proving ground

BI-0001 Customer Position, BI-0003 Web BFF, BI-0004 Spring Cloud Gateway and BI-0005 customer IAM continue under DIRECTION-0010.

They should increasingly prove:
- reuse of current bank roads;
- semantic/data minimization toward the core;
- measurable time-to-useful-content;
- explicit security/risk controls;
- real PCR/capacity evidence;
- deployability through Glo/OpenShift where available;
- traceability from requirement/standard through runtime evidence.

The technical objective remains to make each customer journey perform only the bank work that is actually required, at the most appropriate governed layer.

## 11. DIRECTION-0009 retained

All DIRECTION-0009 rules remain active, including:
- separate customer IAM vs workforce identity;
- Java-first reuse of mature IAM;
- no plaintext credential migration;
- OAuth/OIDC first-party compatibility;
- JWT/reference-token decision by evidence;
- explicit revocation/risk-state semantics;
- adaptive risk/step-up;
- WebAuthn/DPoP/FAPI standards research;
- governed CQRS projection consistency;
- volatile data cached only with valid freshness/reconciliation evidence;
- Control-M workload inventory/classification before migration;
- Glo/API Connect/Kafka/Kibana/OpenShift/Santander Framework reuse;
- Arc42/institutional artifact continuity;
- DETERMINISTIC -> TOOL -> SKILL -> AGENT;
- PLAN BEFORE EXECUTION;
- information classification/PCI;
- observability/audit/evidence;
- event/saga/notification/session/agent runtime;
- knowledge graph/read models;
- bounded governed self-evolution.

## Immediate execution priority

1. Preserve current institutional/audit deliverables.
2. Complete LAB/Git/agent-organization bootstrap against DIRECTION-0010.
3. Continue BI-0001 and collect actual banking evidence.
4. Discover Smart Notification and current PCR/load-test process in parallel.
5. Prepare BI-0003/BI-0004/BI-0005 only from sufficient real evidence.
6. Make performance scenarios/test evidence part of POC completion rather than a late separate handoff.
7. Keep process-learning/adoption records for every major bank platform we integrate.
8. Feed runtime/PCR/process evidence back into Director prioritization and Architecture/Arc42 projections when required.

## Material-change triggers added by DIRECTION-0010

Increment direction again if accepted policy materially changes:
- logical-plane boundaries or physical separation policy;
- Smart Notification delivery/governance authority;
- institutional PCR/performance gate authority/tooling;
- process-learning/adoption lifecycle;
- current bank anchor/replacement strategy;
- Copilot execution authority across those platforms.

## Working loop

Current bank capability/process
-> discover/map authority/controls
-> reuse/integrate
-> specification/plan
-> bounded implementation/POC
-> deterministic tests/PCR
-> institutional deployment/gates
-> runtime evidence
-> analysis/learning
-> optimization candidate
-> backlog/direction decision
-> Arc42/audit projection where required
-> next cycle.

The target is a bank-integrated Architecture AI platform that learns existing processes, reuses what already works, proves improvements quantitatively, and progressively turns the Copilot into the governed control surface without creating unnecessary architectural complexity.
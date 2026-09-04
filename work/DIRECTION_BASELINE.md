# Project Direction Baseline

Status: ACTIVE
Direction revision: DIRECTION-0006
Previous direction: DIRECTION-0005
Previous accepted baseline commit: `acfd96565ba6c91ac0ba6ca1f4fcd49579e2ad8e`
Repository role: Happy Work staging / prompt-governance control plane
Current operating emphasis: LAB / fastest safe construction through governed parallel Devin execution, resilient development profiles, knowledge specialization, information governance, independent QA and visible Director/Copilot evolution

## Continuity rule

DIRECTION-0006 incorporates DIRECTION-0005 and all earlier accepted direction unless explicitly overridden below.

The immutable rc2 Seed snapshot remains historical and MUST NOT be rewritten in place. Post-rc2 direction continues under `work/` and future candidate/reconciliation waves.

## Material LAB priority override

During the current first construction phase:

1. delivery speed and useful parallelism take precedence over token/ACU minimization;
2. Devin may use more sessions/specialist agents when that accelerates safe implementation and learning;
3. token/ACU usage must still be observed so later optimization has evidence, but it is not currently a blocking budget;
4. long-term SOLUTION/SERVICE remains cost-aware and should migrate stable repeatable reasoning to deterministic Spring/Gradle/local capabilities.

This override applies to LAB/PLATFORM_DEV construction, not automatically to future production operation.

## Capability-first organization rule

Architecture AI is currently discovering and defining many logical areas. These AREAS are responsibility/capability groupings, not a final agent count.

Use:

OBJECTIVE
-> REQUIRED CAPABILITY
-> RESPONSIBILITIES / POLICIES / GOVERNANCE
-> DETERMINISTIC CONTROLS
-> TOOLS
-> SKILLS / PROCEDURES
-> EXECUTION WORKSTREAMS
-> AGENT / SESSION TOPOLOGY IF JUSTIFIED
-> MEASURE
-> REBALANCE.

Governed by:

`work/CAPABILITY_RESPONSIBILITY_TO_EXECUTION_TOPOLOGY.md`

Do not use AREA, WORKSTREAM, SESSION, TOOL, SKILL and AGENT as synonyms.

LAB may temporarily use more Devin sessions than the future platform agent topology. First guarantee capability coverage; then optimize how those responsibilities are executed.

No capability/responsibility may disappear when an area/session/agent is reduced or retired. A named successor Tool/Skill/Agent/service/owner and state/work transfer are mandatory.

## First organizational objective

Before broad feature parallelism, establish a governed LAB execution organization that can cover the platform direction without losing context or inventing missing facts.

Initial execution roles are defined in:

`work/LAB_AGENT_ORGANIZATION_AND_EXECUTION_MODEL.md`

The organization includes Director/Integration, Architecture/Planning, Backend, Frontend/UX, Agent Runtime/Integration, Data/Knowledge, Research/Standards, QA, Security/Compliance, Continuous Quality/Refactor, Git/Integration, Documentation/Arc42, UX Research, Deployment/Platform and Reconciliation/Consistency.

These are LAB execution roles/sessions first. They are NOT automatically the permanent runtime agent architecture.

## No-invention rule

Every session/agent receives a bounded context pack containing direction, repository baseline, objective, owned/shared/protected surfaces, dependencies, standards/gates, acceptance evidence and stop/escalation conditions.

When required evidence/context is missing:

UNKNOWN
-> ResearchRequest / Blocker
-> evidence
-> reconciliation
-> continue

Do not fabricate standards, APIs, infrastructure availability, security authorization, information classification, project state or implementation evidence.

## Governing construction order

The architectural construction rule remains:

DETERMINISTIC -> TOOL -> SKILL -> AGENT

However, DIRECTION-0006 distinguishes LAB execution topology from future product/runtime topology.

LAB may intentionally use many Devin specialist sessions to accelerate construction. After repeated work stabilizes, the platform must evaluate whether that responsibility should become deterministic logic, a Tool, a Skill or remain an Agent.

## Planning before execution

Material work still requires:

Objective
-> current context
-> specification
-> architecture/impact plan
-> dependencies/blockers/research
-> parallelization plan
-> owned/shared/protected surfaces
-> implementation
-> deterministic validation
-> independent QA
-> consistency/reconciliation
-> documentation/Arc42 impact
-> integration/release evidence.

Good planning is the mechanism that makes high parallelism safe.

## Git parallel-development gate

Aggressive parallel coding must not begin without verified Git coordination.

Gate:

`GIT_PARALLEL_DEVELOPMENT_READY`

Defined in:

`work/GIT_PARALLEL_AGENT_DEVELOPMENT_GATE.md`

It requires repository baseline traceability, work/branch linkage, surface ownership, merge discipline, deterministic checks, context refresh and integration metrics.

`main` remains the accepted integration baseline.

Parallelism must increase useful throughput without unacceptable merge conflicts, duplicated work, rework or context drift.

## Development resilience / missing infrastructure

Architecture AI must remain useful when OpenShift development lacks central database, enterprise identity or other future infrastructure.

Use explicit profiles defined in:

`work/DEV_RESILIENCE_STORAGE_AND_IDENTITY_PROFILES.md`

Storage profiles include:
- LOCAL_EMBEDDED;
- OPENSHIFT_DEV_GIT_PROJECTION;
- OPENSHIFT_DEV_EMBEDDED_PERSISTENT where technically supported;
- CENTRAL_PERSISTENCE future state.

If no durable development DB exists:
- rebuild declarative/read projections from Git where valid;
- keep the service available where feasible;
- degrade/disable durability-dependent capabilities explicitly;
- never use Git as a fake high-frequency transactional database;
- expose `DEGRADED_NO_DURABLE_RUNTIME_STORE` or equivalent truthfully.

When central persistence becomes available, classify/migrate data by authority, mutability, retention, sensitivity, query needs and rebuildability rather than moving everything automatically.

## Identity resilience

Development must work without enterprise LDAP/SSO when it is unavailable.

Use explicit LOCAL_DEV_IDENTITY behavior and preserve an abstraction for the future approved enterprise identity mechanism.

No development fallback may silently masquerade as enterprise authentication.

LDAP/directory, authentication, MFA/step-up and authorization are separate concerns and must not be conflated.

Capabilities requiring unavailable enterprise controls are degraded/disabled explicitly.

## Information classification / sensitive-data governance

Information sensitivity is a first-class governed concern defined in:

`work/INFORMATION_CLASSIFICATION_ACCESS_AND_PCI_MODEL.md`

Classification must separate:
- business sensitivity;
- data category;
- regulatory/control scope;
- handling attributes;
- environment/mode;
- allowed actions/projections.

Classification does not automatically mean deny. It determines controls.

Access decisions should consider:

identity
+ role/entitlement
+ environment
+ information class
+ requested action
+ purpose/context
+ policy/gate state
+ step-up/approval requirement
-> ALLOW / DENY / REQUIRE_STEP_UP / REQUIRE_APPROVAL / MASK / REDACT.

LAB may expose sensitive information only when the user is authorized and the purpose is explicit. PLATFORM_DEV should prefer synthetic/masked data. SERVICE/preproduction/production uses the approved enterprise identity/authorization controls and may require step-up/MFA for sensitive actions according to policy.

Do not send sensitive data to Devin, logs, traces, vectors, graph projections, Arc42 or human exports by default. Run a deterministic handling-policy decision first.

PCI scope is evidence-based. Architecture AI being used by a bank does not automatically place the entire product in PCI scope. If it stores/processes/transmits payment account data or can impact the CDE, perform the appropriate scope/control analysis.

Default platform policy minimizes PCI scope: prefer masked/tokenized/CardID references; do not persist PAN/PIN/SAD for search/knowledge convenience; do not leak payment data to provider context or telemetry.

Institutional information-classification policy is authoritative when available. Microsoft Purview sensitivity labels may be mapped/integrated where institutionally used; Architecture AI must not invent a conflicting label taxonomy.

Sensitive-data backup/recovery, retention, restore access and secure expiry must be modeled explicitly.

## Knowledge specialization

Knowledge is now an explicit specialized platform area governed by:

`work/KNOWLEDGE_GOVERNANCE_AND_DEVIN_PROJECTION_MODEL.md`

Knowledge classes include direction/objectives, specifications, decisions, standards/policies, process knowledge, application/API/data/infrastructure, security/compliance, engineering practices, evidence, operational knowledge, UX feedback, research results and assumptions/unknowns.

Lifecycle:

DISCOVERED
-> IDENTIFIED
-> CLASSIFIED
-> EVIDENCED
-> VALIDATED
-> APPROVED where required
-> PROJECTED
-> REFRESHED / SUPERSEDED / DEPRECATED.

## Devin knowledge projection

Provider knowledge is a controlled projection/cache, never the canonical authority.

Use supported Devin knowledge APIs/capabilities only after verifying current schema/permissions/limits.

Project compact stable validated knowledge when repeated reuse improves reasoning efficiency, such as:
- platform principles;
- glossary;
- capability/module map;
- approved development standards;
- common patterns/constraints;
- compact stable banking context;
- tool/MCP usage guidance.

Do not upload raw telemetry, high-churn state, complete libraries, sensitive information without policy, or unvalidated research by default.

Every provider projection should be traceable to canonical source IDs/commits and freshness metadata.

## Research fabric

Research is a permanent high-parallelism support capability defined in:

`work/RESEARCH_FABRIC_AND_EVIDENCE_PRIORITY_MODEL.md`

Evidence priority:
1. official standards/specifications/RFCs;
2. official framework/product docs and release notes;
3. institutional banking/security/infrastructure guidance;
4. official regulatory/industry sources;
5. recognized technical research/references;
6. secondary/community sources only when needed and classified.

Research is incremental and registry/trigger driven, not periodic full internet rediscovery.

Multiple ResearchRequests may run concurrently for independent objectives.

Information governance currently has an explicit parallel ResearchRequest to reconcile institutional classification, Purview compatibility, PCI scope and identity/step-up policy evidence.

## UX / architect experience

The dashboard is a web channel for architecture work, not merely a chat or metrics screen.

Governed by:

`work/UX_ANALYTICS_AND_ARCHITECT_EXPERIENCE_MODEL.md`

The platform must identify real architect tasks and choose the best interaction:
- chat for synthesis/reasoning/explanation;
- deterministic UI for structured state/actions.

Collect bounded usability feedback as evidence/backlog input, not automatic self-training data.

Do not invent frontend analytics frameworks. Research and configure supported tooling based on evidence, banking privacy/security and future observability integration.

The Angular frontend requires explicit feature/module/contract boundaries so multiple frontend sessions can develop safely in parallel.

Backend-for-Frontend remains a future pattern candidate only when channel-specific needs justify it; do not add it for pattern purity while web is the only channel.

## Independent QA / consistency / deployment

Autonomous longer construction cycles require independent verification as defined in:

`work/QA_RELEASE_DEPLOYMENT_AND_CONSISTENCY_MODEL.md`

Distinct responsibilities include:
- QA/Validation;
- Architecture Conformance;
- Security/Compliance Validation;
- Documentation/Arc42 Validation;
- Reconciliation/Consistency;
- Deployment/Platform Engineering.

Traceability should progressively connect:

Objective
<-> Epic/Feature/Work
<-> Specification
<-> Standard/Policy/Gate
<-> Code/Contract
<-> Test/Evidence
<-> Decision/ADR
<-> Diagram/Arc42
<-> Release/Deployment
<-> Runtime observation.

Missing links are findings/gaps, not inferred facts.

## Structured coordination cycles / councils

Cross-area virtual meetings are governed reconciliation mechanisms, not generic status meetings.

Governed by:

`work/GOVERNANCE_COUNCILS_AND_COORDINATION_CYCLES.md`

Initial councils/reviews include:
- Direction / Executive Council;
- Architecture / Planning Council;
- Research Coordination Review;
- Data / Information Governance Council;
- Engineering Integration Sync;
- QA / Gate Review;
- Architecture Consistency Review;
- UX / Architect Experience Review;
- Deployment / Environment Readiness Review;
- Retrospective / Organization Optimization Review.

Every meeting/review requires:
- a trigger/governance purpose;
- referenced inputs;
- defined reconciliation/decision scope;
- durable outputs, owners and evidence.

Do not run every council on a fixed cadence when no material input exists. Triggers may include source conflicts, security/data-classification escalation, shared-contract change, failed gate, release candidate, environment change or excessive merge/rework/drift.

The transcript is not the primary artifact; decisions, unresolved items, backlog changes and evidence links are.

## Organization evolution

The LAB organization itself is continuously evaluated using:
- throughput;
- cycle time;
- blocked time;
- merge conflicts;
- rework;
- defects;
- duplicated implementation;
- context drift;
- QA/gate failures;
- AI usage;
- user/UX outcomes.

The Director may recommend adding, splitting, merging or reducing workstreams/sessions.

No agent/workstream responsibility disappears without an explicit successor Tool/Skill/Agent/service/owner and validated state/work transfer.

## Standards-first remains mandatory

DIRECTION-0005 Standards Intelligence remains active.

New development areas (frontend analytics, multi-agent coordination, knowledge modeling, information classification/access, deployment, security, QA) must first identify applicable standards/framework-native patterns and record evidence/adoption status.

Do not create custom frameworks where an approved standard or mature framework already solves the problem.

## Existing cross-cutting direction retained

DIRECTION-0006 retains:
- Director/Copilot operating model;
- specification-first/OpenAPI-first where appropriate;
- standards intelligence/conformance maturity;
- Analytics/Audit/Evidence plane;
- CQRS/read models/graph/vector projections;
- event/saga/notification/session/agent runtime planes;
- OpenTelemetry/OTLP/Collector road;
- Arc42 lifecycle/auditable PDF releases;
- C4/Mermaid/PlantUML technical diagramming;
- draw.io/iconographic conceptual projections;
- portfolio/backlog/Jira-ready semantics;
- LAB simulation/evaluation;
- OpenShift/service readiness;
- local-first one-product modular monolith direction.

## First next execution sequence

The next development phase should proceed in this order:

### Phase 0 — Git and coordination readiness
Verify `GIT_PARALLEL_DEVELOPMENT_READY` and current repository/module ownership.

### Phase 1 — capability coverage and LAB organization bootstrap
Create the capability/responsibility coverage matrix first, then assign the minimum useful set of specialist Devin sessions/workstreams with bounded responsibilities and shared context.

### Phase 2 — common context and work plane
Ensure all sessions consume the same direction, backlog, work/blocker/research model, standards/gates, information-handling policy and context refresh mechanism.

### Phase 3 — parallel implementation/research lanes
Run lanes concurrently where current code permits:
- Director Chat / dashboard read model;
- backend/work/gates;
- Agent Runtime/Devin integration;
- data/knowledge/projections;
- information governance/security research;
- frontend/UX;
- observability/analytics;
- QA/architecture conformance;
- deployment/OpenShift degraded profiles;
- research/standards.

### Phase 4 — independent integration/QA
Merge in planned order with deterministic checks, independent QA and consistency review.

### Phase 5 — tangible LAB delivery
User can run local Architecture AI, see current changes quickly, chat with Director, inspect work/standards/blockers/knowledge/information classification/readiness and receive evidence-backed status.

### Phase 6 — OpenShift development survival
Deploy the same product with explicit environment capability profile even under worst-case missing central DB/enterprise identity, preserving recoverable Git-derived projections and truthful degradation.

## Material-change triggers added by DIRECTION-0006

Increment direction again if accepted policy materially changes:
- LAB speed vs AI-cost priority;
- capability-to-agent/session organization model;
- Git parallelism gate;
- dev storage/degraded-mode strategy;
- identity fallback/step-up strategy;
- information classification/handling authority;
- provider knowledge projection authority;
- QA/consistency/deployment organization;
- governance council/coordination model;
- UX analytics/feedback model.

## Working loop

Direction
-> capability/responsibility coverage
-> Planning Council
-> specifications/standards/policies
-> bounded parallel work/research
-> ResearchRequests where needed
-> implementation branches
-> deterministic checks
-> independent QA
-> consistency/data-governance reconciliation
-> integration/main
-> hot/local LAB validation
-> telemetry/UX/quality/security evidence
-> organization/process retrospective
-> backlog/reprioritization
-> Arc42/document/read-model projections
-> next cycle.

The target is increasingly autonomous, highly parallel development that remains governed, recoverable, explainable, security-aware and fast.
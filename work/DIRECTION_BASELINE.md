# Project Direction Baseline

Status: ACTIVE
Direction revision: DIRECTION-0008
Previous direction: DIRECTION-0007
Previous accepted baseline commit: `af0fe8ca5f1a9b88c06fe3b6bb9ff6c403081071`
Repository role: Happy Work staging / prompt-governance control plane
Current operating emphasis: LAB / fastest safe construction, governed parallelism, institutional-platform reuse, audit-artifact continuity, banking POCs, customer-experience optimization and Copilot control evolution

## Continuity rule

DIRECTION-0008 incorporates DIRECTION-0007 and all earlier accepted direction unless explicitly overridden below.

The exact DIRECTION-0007 baseline remains recoverable from Git history. The immutable rc2 snapshot remains historical and MUST NOT be rewritten in place.

DIRECTION-0008 is additive, not a reset.

## 1. Current institutional artifacts remain a priority

Architecture AI must continue producing the artifacts currently required by bank governance, audit and external authorities while progressively converting those artifacts into governed projections from canonical state.

Do not stop producing a current artifact merely because a future target operating model may make it obsolete.

Governed by:
`work/REGULATORY_ARTIFACT_PRIORITY_AND_TRANSFORMATION_MODEL.md`

Rules:
- Arc42 PDF and other formal evidence packages remain supported where required;
- exact Banxico/other authority requirements must come from official/institutional evidence, not inference;
- every artifact should progressively gain source/provenance/version/gate/retention metadata;
- mechanical generation should become deterministic before redesigning the human process;
- internal platform evolution audit remains continuous and separate from externally released institutional artifacts.

## 2. Reuse existing institutional platforms before rebuilding

Core rule:

EXISTING GOVERNED CAPABILITY
-> DISCOVER
-> REUSE / CONFIGURE / EXTEND / ADAPT
-> MEASURE
-> REPLACE ONLY WITH EVIDENCE.

Architecture AI must not rebuild working bank delivery capabilities simply to own them.

The user identifies an institutional platform named `Glo` that currently provides application archetypes and pipeline integration for OpenShift deployment. This is accepted as user-provided context but remains evidence-required before implementation assumptions.

Governed by:
`work/INSTITUTIONAL_PLATFORM_REUSE_AND_ARCHETYPE_INTEGRATION_MODEL.md`

Expected near-term pattern for bank applications/microservices:

Glo approved archetype
-> preserve Santander Framework/institutional conventions
-> solution-specific implementation
-> existing pipeline/gates
-> OpenShift deployment
-> runtime evidence
-> improvement backlog.

Architecture AI should integrate with supported Glo APIs/tools/pipelines when discovered rather than duplicating them.

## 3. “Do not reinvent the wheel” is stronger than “if it works, do not touch it”

Architecture AI may improve a working component when evidence shows meaningful value, but should not replace it merely because another pattern/tool is architecturally attractive.

Decision sequence:

Does an institutional capability already solve the need?
-> YES: reuse/integrate first
-> measure limitations
-> improve/extend when justified
-> replacement only after migration/operational/governance evidence.

This applies to Glo, API Connect, Kafka, Kibana, OpenShift, Santander Framework and future institutional platforms.

## 4. Copilot remains the long-term single governed entry point

The maturity horizon from DIRECTION-0007 remains:

EXPLAIN
-> GUIDE
-> PREPARE
-> EXECUTE BOUNDED CHANGES
-> OPERATE GOVERNED CAPABILITIES
-> GOVERNED SELF-EVOLUTION.

Long term, users should request architecture/engineering/platform changes through the Copilot. The Copilot must resolve role/authority/policy/gates and route work to existing platform capabilities rather than bypassing them.

The Copilot remains an entry/control plane, not the source of truth.

## 5. Risk/security/fraud is cross-cutting

Risk analysis is a vertical/cross-cutting capability across business, application, data, channel, infrastructure and operations.

Governed by:
`work/RISK_ASYNC_CROSS_CUTTING_AND_CUSTOMER_EXPERIENCE_MODEL.md`

Every risk/fraud/security control should be classified as one of:
- SYNCHRONOUS_BLOCKING_REQUIRED;
- SYNCHRONOUS_FAST_PATH;
- ASYNC_EVALUATION_ALLOWED;
- POST_EVENT_MONITORING;
- HUMAN/EXTERNAL_APPROVAL_REQUIRED.

The objective is to avoid serializing customer-critical experience with work that policy/evidence permits to run asynchronously. This is never permission to bypass mandatory controls.

## 6. Customer experience is an architecture objective, not only a frontend concern

The bank/channel vision is to make the experience fast by placing data and work at the correct governed layer.

Evaluate across:
- secure device/local projections;
- channel/BFF candidate where justified;
- API/read projections/cache;
- event-driven invalidation/synchronization;
- optimized source-system queries/transactions;
- network/runtime/infrastructure placement.

Use large-scale content platforms only as an architectural analogy for layered placement/caching; do not copy their technology blindly.

Customer Position/Gravity Plus remains the first practical performance proof.

## 7. Banking POCs must integrate with institutional delivery

BI-0001 Customer Position and future banking POCs should not be isolated laboratory code that cannot enter the bank delivery path.

Where possible they should:
- start from the actual bank/Santander Framework implementation or approved archetype;
- preserve current contracts/integration behavior until evidence supports change;
- use the current institutional build/deploy path;
- generate measurable runtime evidence;
- expose blockers when infrastructure or governance is unavailable;
- produce backlog/Arc42/institutional artifacts when promotion requires them.

## 8. DevOps/Platform Engineering remains first-class

DIRECTION-0007 DevOps integration remains active and now explicitly includes institutional archetype/pipeline discovery and reuse.

The Environment Capability Matrix should progressively include Glo/pipeline capability in addition to persistence, Kafka, API Connect, identity, telemetry/Kibana, secrets/config, network controls and environment-specific restrictions.

## 9. Standards-first continues across platform and institutional integration

Standards lifecycle from DIRECTION-0007 remains mandatory.

New platform integrations should map both:
- external/industry standards/frameworks/RFCs;
- institutional standards/archetypes/policies/platform contracts.

Institutional requirements may be authoritative for the bank even when they differ from generic industry preference.

The Director must distinguish:
- CURRENT/VERIFIED;
- CURRENT_BUT_NOT_VERIFIED;
- DEPRECATED/SUPERSEDED;
- UNKNOWN/RESEARCH_REQUIRED.

## 10. DIRECTION-0007 and earlier principles retained

Still mandatory:
- LAB speed/useful parallelism currently outranks AI-cost minimization, while usage is measured;
- capability-first organization rather than area=agent;
- UNKNOWN -> ResearchRequest/Blocker -> evidence -> reconciliation;
- DETERMINISTIC -> TOOL -> SKILL -> AGENT for mature product/runtime capabilities;
- PLAN BEFORE EXECUTION and specification-first;
- Git parallel-development gate and owned/shared/protected surfaces;
- resilient local/OpenShift development profiles;
- information classification/access/PCI governance;
- knowledge governance and controlled Devin projection;
- research fabric;
- UX/architect experience;
- independent QA/reconciliation;
- purpose-driven governance councils;
- Analytics/Audit/Evidence plane;
- CQRS/read models/knowledge graph/vector projections;
- Event/Saga/Notification/Session/Agent Runtime planes;
- OpenTelemetry/OTLP/Collector road plus existing Kibana/log integration;
- Arc42 lifecycle and canonical visual/document projection;
- portfolio/backlog/Jira-ready semantics;
- LAB simulation/evaluation;
- OpenShift/service readiness;
- local-first one-product modular-monolith direction;
- bounded governed self-evolution.

## Immediate execution priority

1. Keep current required human/audit artifacts producible.
2. Establish LAB capability/agent organization and Git coordination.
3. Build tangible Director/Copilot local experience.
4. Discover and integrate actual institutional platforms, especially Glo/OpenShift delivery contracts.
5. Execute BI-0001 Customer Position against real code/data/integration evidence.
6. Continue standards/governance/observability/knowledge/QA lanes in parallel.
7. Use measured POCs to decide what to automate, extend, replace or absorb later.

## Research dependencies

- Issue #4: Glo archetype/OpenShift delivery contracts.
- Issue #5: institutional/regulatory architecture artifact obligations.

## Material-change triggers added by DIRECTION-0008

Increment direction again if accepted policy materially changes:
- current institutional artifact priority/authority;
- Glo/institutional archetype authority or integration model;
- Copilot authority over institutional pipelines;
- synchronous/asynchronous risk-control policy;
- customer-experience architecture principles;
- institutional platform replacement strategy.

## Working loop

Current obligations
-> governed context/standards/platform capabilities
-> plan/specification
-> reuse institutional foundations
-> bounded parallel implementation
-> deterministic validation/QA
-> institutional pipeline/deployment where available
-> runtime/risk/customer-experience evidence
-> analytics
-> improvement/backlog
-> updated governed state
-> required Arc42/audit projections
-> next cycle.

The target is a platform that preserves present-day institutional compliance and delivery reality while progressively turning the Copilot into the governed control surface for faster, measurable and increasingly automated banking-platform evolution.
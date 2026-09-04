# Governance Councils and Coordination Cycles

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0006

## Purpose

Define why cross-area virtual meetings/reconciliation cycles exist, what they must consume, and what durable outputs they must produce.

Meetings are not social rituals. They are controlled reconciliation mechanisms between specialized workstreams whose evidence, plans or assumptions can conflict.

## Core rule

NO MEETING WITHOUT A GOVERNANCE PURPOSE, INPUTS, DECISION/RECONCILIATION SCOPE AND DURABLE OUTPUT.

## Why coordination is required

Architecture AI is intentionally decomposing work into multiple specialized areas that may research and execute in parallel.

This increases throughput but also creates risk of:
- incompatible assumptions;
- duplicated research;
- conflicting standards interpretation;
- inconsistent data classifications;
- API/schema drift;
- overlapping branch ownership;
- documentation/code mismatch;
- backlog priorities that ignore dependencies;
- local decisions that violate global architecture direction.

Coordination cycles exist to detect and resolve those collisions early.

## Council hierarchy

### 1. Direction / Executive Council
Purpose:
- verify objectives, direction and delivery priorities;
- resolve cross-domain conflicts that cannot be decided locally;
- confirm material direction change.

Inputs:
- Director status;
- objective metrics;
- major blockers/risks;
- architecture/standards/security conflicts;
- backlog and readiness summaries.

Outputs:
- accepted direction delta;
- reprioritization;
- decision/escalation;
- material-change trigger if needed.

### 2. Architecture / Planning Council
Purpose:
- translate direction into specifications, architecture plan and execution boundaries.

Inputs:
- objectives;
- ResearchResults;
- standards/conformance state;
- current architecture;
- backlog/dependencies;
- quality/operability evidence.

Outputs:
- architecture plan;
- specifications/ADR candidates;
- parallelization plan;
- impacted Arc42/views;
- engineering backlog deltas.

### 3. Research Coordination Review
Purpose:
- reconcile parallel investigations and prevent contradictory evidence from entering engineering.

Inputs:
- ResearchRequests;
- source evidence;
- source conflicts;
- freshness/version data.

Outputs:
- validated ResearchResults;
- unresolved SOURCE_CONFLICT items;
- new ResearchRequests;
- standards/adoption recommendations.

### 4. Data / Information Governance Council
Purpose:
- reconcile information classification, authority, storage, projection, retention, access and backup decisions.

Inputs:
- new data/source discoveries;
- classification candidates;
- PCI/privacy/security scope;
- knowledge projection requests;
- backup/recovery state;
- provider/Devin projection needs.

Outputs:
- classification/handling decisions;
- storage authority changes;
- migration/projection backlog;
- policy/control gaps;
- security/compliance escalations.

### 5. Engineering Integration Sync
Purpose:
- coordinate active branches/sessions and shared surfaces.

Inputs:
- branch status;
- shared contract changes;
- blockers;
- context refresh needs;
- build/test status.

Outputs:
- merge order;
- ownership changes;
- integration actions;
- context-refresh records;
- conflict-resolution assignments.

### 6. QA / Gate Review
Purpose:
- independently verify completion evidence.

Inputs:
- specifications;
- tests/checks;
- security/compliance findings;
- architecture conformance;
- release evidence.

Outputs:
- PASS / FAIL / BLOCKED;
- remediation work;
- release readiness.

### 7. Architecture Consistency Review
Purpose:
- verify coherent projection of one architecture truth.

Inputs:
- code/contracts;
- specifications/ADRs;
- C4/Mermaid/PlantUML/draw.io views;
- Arc42;
- backlog/work state;
- standards/gates.

Outputs:
- contradiction/drift findings;
- correction ownership;
- document/code reconciliation.

### 8. UX / Architect Experience Review
Purpose:
- reconcile actual architect workflows, feedback and frontend behavior.

Inputs:
- task analytics;
- feedback;
- support issues;
- usability/accessibility evidence;
- proposed UI changes.

Outputs:
- UX backlog;
- deterministic UI vs chat decisions;
- instrumentation changes;
- research needs.

### 9. Deployment / Environment Readiness Review
Purpose:
- reconcile application assumptions with actual environment capability.

Inputs:
- environment capability matrix;
- storage/identity/network/OTel status;
- recovery evidence;
- release candidate.

Outputs:
- readiness state;
- degraded-profile selection;
- infrastructure blockers;
- deployment backlog.

### 10. Retrospective / Organization Optimization Review
Purpose:
- evaluate whether current agent/session/team topology is improving delivery.

Inputs:
- throughput;
- cycle time;
- merge conflicts;
- rework;
- defects;
- AI usage;
- blocked time;
- user outcomes.

Outputs:
- add/split/merge/retire workstream proposals;
- process automation candidates;
- Tool/Skill migration candidates;
- backlog/process improvements.

## Meeting trigger model

A council/review may be triggered by:
- scheduled cadence when justified;
- material direction change;
- unresolved cross-area blocker;
- standards/source conflict;
- shared-contract change;
- security/data-classification escalation;
- failed gate;
- release candidate;
- environment capability change;
- excessive merge/rework/drift;
- major UX feedback signal.

Do not run all councils on a fixed cadence if no material inputs exist.

## Durable meeting artifact

Every executed council/review should persist a compact structured record:
- meeting/review type;
- trigger;
- related direction revision;
- participants/workstreams;
- input references;
- conflicts/questions;
- decisions;
- unresolved items;
- created/updated backlog items;
- owners;
- evidence references;
- next trigger/date if justified.

The transcript itself is not the primary output.

## Delegation rule

Councils reconcile and decide within delegated authority.

They do not replace institutional human approval where required.

If a decision exceeds platform authority, create a DecisionRequest/ApprovalRequired item and continue unaffected work.

## Goal

Use structured cross-area coordination as a control mechanism for high parallelism so Architecture AI can increase autonomous delivery without increasing incoherence.
# Happy Work Operating Model

Status: ACTIVE_BASELINE
Version: 0.1
Purpose: define how Happy Work coordinates Devin sessions, preserves direction, controls context, manages change, and prevents cross-session incoherence while Architecture AI is evolving.

## 1. Core objective

Happy Work is the coordination and governance layer for Architecture AI implementation work delegated to Devin sessions.

The operating model must ensure that:

- no Devin session depends on accidental chat memory;
- every session receives enough bounded context to execute safely;
- durable project direction is versioned in Git;
- implementation work is decomposed into bounded workstreams;
- parallel sessions know their boundaries and shared surfaces;
- material changes in direction trigger explicit impact review;
- deterministic work is separated from non-deterministic reasoning;
- engineering does not absorb unrestricted research work;
- research, engineering, validation and reconciliation can be delegated to different workstreams;
- dashboard/observability progressively provide evidence that the platform is evolving coherently.

## 2. Context rule

A Devin session must never be expected to continue solely from prior conversational context.

Before execution, every session must have a Session Context Pack derived from current governed state.

Minimum context pack:

- project direction version;
- current objective;
- active architectural principles;
- relevant decisions and constraints;
- relevant prompt dependencies;
- allowed change scope;
- forbidden/shared change scope;
- current repository baseline/ref;
- expected deliverables;
- validation requirements;
- known gaps;
- stop conditions.

If required context cannot be reconstructed with sufficient confidence, the session must not guess.

Use one of:

- `DISCOVERY_ONLY`
- `BLOCKED_BY_CONTEXT`
- `RECONCILIATION_REQUIRED`

The correct response to missing context is evidence acquisition, not invention.

## 3. Project Direction Baseline

Happy Work maintains a versioned Project Direction Baseline containing at least:

- primary mission;
- current operating mode;
- current architectural direction;
- approved principles;
- constraints;
- deferred decisions;
- non-goals;
- current technology baselines;
- current priorities;
- material assumptions;
- unresolved questions.

Each material update increments a direction revision.

Example identity:

`DIRECTION-0001`

Prompts and session context packs should reference the active direction revision.

## 4. Material direction change

A material direction change includes changes to:

- principal product shape;
- operating modes;
- runtime/deployment model;
- storage authority;
- protocol strategy;
- agent/work/session model;
- event/saga model;
- security boundary;
- Java/build baseline;
- repository authority;
- core non-functional objectives;
- explicitly approved architectural decisions.

When a material change occurs:

1. Create a new direction revision.
2. Produce a Change Impact Assessment.
3. Identify affected active prompts/sessions.
4. Classify each session:
   - `UNAFFECTED`
   - `REVIEW_REQUIRED`
   - `PAUSE_REQUIRED`
   - `SUPERSEDE_REQUIRED`
5. Notify/reconcile affected sessions.
6. Revalidate shared contracts and assumptions.
7. Resume only after boundaries are clear.

Do not silently let old sessions continue against obsolete direction.

## 5. Prompt/session lifecycle

Prompt lifecycle:

`DRAFT -> READY -> SENT -> EXECUTING -> EXECUTED -> RECONCILING -> RECONCILED`

Additional states:

- `BLOCKED`
- `SUPERSEDED`
- `CANCELLED`

A prompt in Git does not imply it has been sent or executed.

One prompt normally maps to one bounded Devin session/workstream.

## 6. Parallel execution policy

Each candidate prompt must receive a parallelism decision:

- `PARALLEL_SAFE`
- `PARALLEL_SAFE_WITH_BOUNDARIES`
- `SERIAL_REQUIRED`
- `DISCOVERY_ONLY`
- `BLOCKED_BY_DEPENDENCY`

Parallelism is determined from likely collision surfaces, not prompt titles.

High-risk shared surfaces include:

- Gradle/build logic;
- global Spring Boot configuration;
- runtime manifests;
- database migrations;
- common persistence abstractions;
- OpenTelemetry/Micrometer configuration;
- Event/Saga infrastructure;
- MCP schemas/catalogs;
- shared API DTOs;
- Angular shared routes/models;
- provider/security configuration.

For parallel work, each session receives explicit owned and protected surfaces.

## 7. Agent/work role separation

Do not make every session perform every kind of work.

Use logical roles/workstream types such as:

### Engineering

Implements from sufficiently established contracts/evidence.

Engineering should not spend unbounded time researching an unresolved technology or institutional question.

### Research / Discovery

Investigates standards, framework capability, real environment behavior, APIs, compatibility and evidence.

Produces bounded findings and recommendations, not production implementation by default.

### Validation

Executes deterministic verification, tests, compatibility checks, build verification and evidence capture.

### Reconciliation

Compares returned work against current direction, shared contracts, active sessions and newly discovered evidence.

### Architecture / Design

Creates or refines contracts, boundaries and decision candidates when evidence is adequate.

These are workstream roles; they do not require separate permanent agent products.

## 8. Deterministic vs non-deterministic planes

Every task should be classified according to the strongest appropriate execution mode.

### Deterministic plane

Use code/framework/tooling for:

- builds;
- tests;
- schema validation;
- parsing;
- hashing;
- inventory;
- measurements;
- database queries;
- static analysis;
- simulations once the model/parameters are defined;
- API calls with defined contracts;
- report generation from structured inputs.

### Non-deterministic reasoning plane

Use Devin/LLM reasoning for:

- ambiguous evidence interpretation;
- architecture trade-off reasoning;
- conflict reconciliation;
- unknown semantic classification;
- proposal generation;
- explanation/synthesis.

Non-deterministic results must enter a deterministic envelope:

structured input -> reasoning -> structured output -> validation/policy -> accepted candidate/action.

Do not ask an LLM to manually reproduce calculations or validations already available deterministically.

## 9. Research delegation rule

If an engineering session discovers a material unresolved question that requires broad investigation:

1. stop the affected implementation decision;
2. create a `ResearchRequest` / discovery work item;
3. delegate it to a research session;
4. capture evidence and recommendation;
5. reconcile the result;
6. resume engineering with updated context.

Engineering may perform small bounded verification needed to proceed, but should not silently expand into an open-ended research program.

## 10. Update propagation

All sessions execute against a repository baseline and direction revision.

When accepted changes land in the integration baseline:

- update the Prompt Index;
- update relevant direction/decision/context records;
- identify active sessions touching affected contracts/surfaces;
- issue a context refresh or change notice where required.

A Change Notice should contain:

- change ID;
- old direction/ref;
- new direction/ref;
- affected contracts;
- affected files/modules;
- rationale;
- required action;
- compatibility assessment.

Sessions must not be expected to discover major direction changes accidentally from Git diffs.

## 11. Branch and LAB working model

Current default working policy:

- `main` represents the accepted integration baseline for Happy Work staging/governance.
- isolated implementation or investigation may occur on separate branches when needed;
- normal LAB/live runtime should track the accepted integration baseline by default;
- experimental branches must not silently become the live baseline;
- hot/live reload should normally operate from the explicitly selected accepted baseline, not every parallel branch;
- a branch may be bound to a temporary LAB experiment only when explicitly selected and clearly identified as experimental.

This policy is an initial governance default and may evolve with evidence.

## 12. Harness model

Happy Work should progressively maintain deterministic harnesses for:

- repository consistency;
- prompt metadata validation;
- dependency/conflict validation;
- architecture checks;
- build/test evidence;
- schema validation;
- runtime-mode checks;
- telemetry contract checks;
- simulation scenario validation;
- change-impact checks.

The harness should make it difficult for a session to complete while silently violating the active direction.

## 13. Direction-drift evaluation

Architecture AI LAB should progressively support direction-drift evaluation.

Potential inputs:

- active Project Direction Baseline;
- architecture graph;
- current repository structure;
- accepted decisions;
- active prompts;
- changed files/contracts;
- observed runtime telemetry;
- simulation outputs.

Potential outputs:

- aligned;
- possible drift;
- conflicting assumption;
- unreviewed architectural change;
- direction impact review required.

This is advisory evidence, not automatic truth.

Vector similarity may help detect semantic divergence but must not be the sole authority.

## 14. Simulation for governance

LAB may progressively use deterministic simulation to evaluate consequences of direction changes.

Examples:

- workload/backlog impact;
- agent capacity;
- session reuse policy;
- notification volume;
- event/saga backlog;
- resource growth;
- reliability/failure propagation;
- cost/usage distributions.

Monte Carlo is appropriate for uncertainty distributions when assumptions are explicit and seeds/versioning are preserved.

Simulation must distinguish:

- `OBSERVED`
- `SIMULATED`
- `ASSUMED`
- `EXPERIMENTAL`

Simulation results support decisions; they do not silently redefine project direction.

## 15. Knowledge growth vs model learning

The dashboard must never imply that Architecture AI is "learning" merely because more data is stored.

Distinguish visibly:

### Knowledge accumulation

- sources inventoried;
- evidence units;
- candidate facts;
- canonical facts;
- graph entities/relationships;
- index/vector growth;
- profiles/policies;
- work results;
- decisions.

### Dataset evolution

- validated labels;
- dataset snapshots;
- dataset version;
- sample count/distribution;
- quality status.

### Model evolution

Only claim model learning/training when a real model training/evaluation/promotion lifecycle occurred.

Show:

- model version;
- dataset version;
- evaluation metrics;
- promotion state;
- current active model.

Do not conflate RAG/index growth with ML training.

## 16. Dashboard governance view

The operational dashboard should progressively expose a governance/control view containing:

- active direction revision;
- current mode (`PLATFORM_DEV`, `SOLUTION`, `LAB`, `SERVICE`);
- repository/integration baseline;
- active Devin sessions/workstreams;
- prompt states;
- blocked prompts;
- parallelism/conflict warnings;
- latest material changes;
- sessions requiring context refresh;
- architecture drift signals;
- build/architectureCheck status;
- knowledge growth;
- dataset/model status;
- telemetry health;
- simulation/evaluation status.

The goal is to make platform evolution observable, not hidden in chats.

## 17. Data/source authority reminder

Preserve explicit storage authority.

Examples:

Git:
- source;
- contracts;
- schemas;
- policies;
- infrastructure/config definitions owned by Architecture AI;
- prompt/governance history;
- manifests;
- simulation definitions;
- model/dataset manifests.

Nexus:
- immutable distributable artifacts.

Local operational stores:
- mutable runtime state;
- ledgers;
- indexes;
- caches;
- local observations.

LAB analytical storage:
- observation snapshots;
- replay/simulation datasets;
- experimental outputs.

Do not move authority implicitly because a component is convenient.

## 18. Change acceptance

A session result is not accepted simply because code compiles.

Reconciliation should consider:

- active direction;
- prompt scope;
- architectural principles;
- shared-surface conflicts;
- deterministic tests;
- observed evidence;
- security/privacy;
- operability;
- future migration compatibility;
- documentation/contracts where required.

## 19. Context refresh protocol

Before continuing a long-lived Devin session after a material repository/direction change, provide a bounded Context Refresh containing:

- what changed;
- why;
- what remains valid;
- what is invalidated;
- affected assumptions;
- new repository ref;
- required review/rework.

Do not resend the entire project history when a delta is sufficient.

## 20. Current working principle

The platform must increasingly demonstrate:

`direction -> governed work -> implementation -> telemetry/evidence -> evaluation -> reconciliation -> updated direction`

not:

`chat -> code -> more chat`.

This document is the initial operational baseline and should evolve through explicit versioned changes rather than ad-hoc replacement.

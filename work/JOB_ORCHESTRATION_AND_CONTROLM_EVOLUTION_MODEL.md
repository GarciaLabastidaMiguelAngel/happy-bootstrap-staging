# Job Orchestration and Control-M Evolution Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0009

## Purpose

Define how Architecture AI should understand, preserve and progressively modernize the bank's current Control-M batch/workflow landscape without treating Control-M as either permanently untouchable or automatically obsolete.

## Core principle

UNDERSTAND CURRENT MALLAS
-> CLASSIFY
-> PRESERVE WHAT STILL ADDS VALUE
-> MOVE SIMPLE WORK TO THE NATURAL PLATFORM
-> REPLACE ONLY WITH EVIDENCE.

## Important distinction

Spring Batch is a batch-processing framework, not an enterprise scheduler.

Do not use Spring Batch alone as a Control-M replacement.

Separate:
- job implementation;
- schedule/trigger;
- dependency graph;
- execution infrastructure;
- restart/recovery;
- operational UI/control;
- cross-system dependency;
- audit/approval.

## Target workload taxonomy

Every existing Control-M workload/malla should be classified into at least one category:

### A. KEEP_CONTROL_M
Cross-platform/cross-system dependencies, institutional operations, external managed dependencies or human processes still justify Control-M.

### B. OPENSHIFT_JOB_OR_CRONJOB
Simple bounded containerized scheduled execution with minimal workflow dependency.

### C. SPRING_BATCH_JOB
Robust Java batch implementation needing restartability, chunking, partitioning, skip/retry and batch metadata; scheduler remains separate.

### D. SPRING_CLOUD_TASK / DATA_FLOW CANDIDATE
Short-lived Spring tasks or composed batch/stream workflows where a Spring/Kubernetes-native orchestration plane adds value.

### E. EVENT_DRIVEN_REPLACEMENT
The existing schedule is compensating for the lack of a business/event trigger and can be replaced by a governed event-driven flow.

### F. WORKFLOW_SCHEDULER_POC
A richer DAG/workflow engine is required. Java-centric/open-source candidates may include Apache DolphinScheduler; selection requires institutional and operational evidence.

## Java-first candidates

### Spring Batch
Use for Java batch semantics. It explicitly expects to work with a scheduler rather than replacing one.

### OpenShift/Kubernetes Jobs and CronJobs
Use platform-native scheduling for simple container jobs when Glo/OpenShift governance supports it.

### Spring Cloud Task / Spring Cloud Data Flow
Evaluate for short-lived task applications, Spring Batch jobs and composed tasks deployed to Kubernetes/OpenShift. It is an open-source Apache-licensed Spring project, but institutional lifecycle/support must be validated before adoption.

### Apache DolphinScheduler
Evaluate only if the bank requires an open-source distributed DAG/workflow scheduler with workflow versioning, backfill, pause/resume, dependencies and operational UI. Do not adopt merely because it resembles Control-M.

### Quartz
Useful for lightweight Java scheduling inside an application, but not the default candidate for replacing enterprise cross-system mallas.

## Migration rule

Do not migrate a malla until Architecture AI can answer:
- what business outcome it produces;
- current schedule/trigger;
- upstream/downstream dependencies;
- required files/messages/databases/APIs;
- retry/restart/recovery behavior;
- SLA/cutoff window;
- operational owner;
- failure/escalation path;
- current Control-M capabilities actually used;
- candidate target mechanism;
- rollback path;
- measured operational benefit.

## POC direction

Start with one representative low-risk malla.

1. Reconstruct the current Control-M graph from evidence.
2. Reimplement the job itself as a versioned Java/OpenShift job where appropriate.
3. Preserve the existing schedule initially if useful.
4. Compare Control-M scheduling with an OpenShift/Spring-native candidate in LAB.
5. Validate restart, retries, dependency handling, observability and operational control.
6. Decide KEEP / MIGRATE / HYBRID from evidence.

## Copilot horizon

Long term the Copilot should be able to answer:
- what jobs exist?;
- why do they run?;
- which mallas still require Control-M?;
- which can become OpenShift Jobs?;
- which schedules should become events?;
- what failed and why?;
- what can be retried safely?;
- what dependency is blocking a batch window?;
- what modernization produces measurable value?

Eventually, authorized mechanical operations may be initiated through the Copilot while the underlying scheduler/platform remains the governed executor.

## Goal

Turn the current Control-M estate into an understood workload graph and progressively move each workload to the simplest governed execution model that preserves reliability, observability and institutional operations.
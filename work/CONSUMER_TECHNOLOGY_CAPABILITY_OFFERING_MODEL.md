# Consumer Technology Capability Offering Model

Status: ACTIVE_DIRECTION_MODEL
Direction: DIRECTION-0013

## Purpose

Define the platform strategy from the consumer outward: identify who consumes the platform, which technological capabilities each consumer actually needs, what quality/runtime guarantees apply, and which reusable roads/patterns should be offered without forcing one physical service per capability.

## Consumer-first principle

Do not begin with:

`Which microservices should we build?`

Begin with:

`Who consumes the platform?`
-> `What technical capability do they need?`
-> `What latency/availability/security/freshness/throughput semantics apply?`
-> `What existing bank capability already covers it?`
-> `What reusable road/pattern is missing?`
-> `What is the smallest justified realization?`.

## Initial consumer classes

The exact inventory must be evidenced, but initial logical consumer classes include:

- `DIGITAL_WEB_CHANNEL`;
- `DIGITAL_NATIVE_MOBILE_CHANNEL`;
- `BRANCH_CHANNEL`;
- `ATM_CHANNEL`;
- `INTERNAL_APPLICATION_OR_BFF`;
- `SYNCHRONOUS_API_CONSUMER`;
- `EVENT_PRODUCER_CONSUMER`;
- `BATCH_JOB_OR_SCHEDULED_WORKLOAD`;
- `DATA_READ_PROJECTION_CONSUMER`;
- `IDENTITY_SECURITY_RISK_CONSUMER`;
- `OPERATIONS_DEVOPS_PLATFORM_CONSUMER`;
- `ARCHITECT_ENGINEER_COPILOT_USER`;
- `EXTERNAL_OR_PARTNER_CONSUMER` only where institutionally applicable.

These are consumer types, not deployment units or teams.

## Capability catalog dimensions

Each offered technical capability should declare:
- capability ID/name;
- intended consumer types;
- business/technical purpose;
- invocation style: sync / async / stream / batch / query / command / request;
- contract and versioning model;
- security/authentication/authorization requirements;
- information classification;
- latency/SLO target;
- throughput/capacity expectation;
- freshness/consistency semantics;
- idempotency/retry semantics;
- failure/degradation behavior;
- observability/audit evidence;
- current implementation/reuse anchor;
- physical realization binding;
- maturity/adoption state;
- governing standards/policies;
- owner/decision authority where evidenced.

## Candidate reusable technical roads

Repeated measured needs may become platform capabilities such as:
- channel BFF composition;
- semantic read projection/cache;
- session and adaptive-access enforcement;
- event contract/logical-channel/transport binding;
- async request/long-running operation processing;
- operation/reference correlation;
- notification intent/delivery integration;
- job/batch execution;
- API/gateway routing/security/observability;
- schema/contract governance;
- PCR/load/capacity test-as-code;
- telemetry/audit evidence;
- deployment/operability automation.

A candidate is not a platform standard until repeated need and runtime evidence justify standardization.

## Quality profile per consumer

The same capability may expose different governed profiles rather than duplicate implementations.

Example:

```text
Customer Position semantics
+-- web profile: progressive BFF composition
+-- mobile profile: future incremental synchronization
+-- branch profile: operator-oriented response
+-- internal API profile: canonical synchronous contract
```

Shared semantics do not require identical transport, payload or freshness behavior for every consumer.

## Consumer -> capability -> realization chain

Maintain explicit traceability:

ConsumerType
<-> ConsumerJourney/UseCase
<-> RequiredCapability
<-> CapabilityProfile
<-> Standard/Policy
<-> ApplicationModule/Service
<-> API/Event/Job/Data contract
<-> Runtime/Infrastructure placement
<-> PCR/Telemetry evidence.

## Performance objective

Primary optimization objective:

`MINIMUM NECESSARY WORK PER CUSTOMER/CONSUMER OUTCOME`.

Measure not only service latency but:
- number of network hops;
- number of backend/core calls;
- payload/data overfetch;
- cache/projection hit rate;
- source amplification;
- parallelizable vs serialized work;
- customer time-to-useful-content;
- CPU/memory/network cost;
- failure/retry amplification.

## Goal

Build a small number of strong, reusable technical roads whose contracts and quality profiles meet distinct consumer needs, while avoiding both API proliferation and premature service consolidation.
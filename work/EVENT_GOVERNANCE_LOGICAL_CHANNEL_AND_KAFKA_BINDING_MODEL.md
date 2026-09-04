# Event Governance, Logical Channel and Kafka Binding Model

Status: ACTIVE_DIRECTION
Direction revision: DIRECTION-0011

## Purpose

Separate event-governance semantics from physical Kafka topology so the bank can maintain strong semantic/governance control without creating unnecessary topics, routes or runtime infrastructure.

## Core model

Business/Domain Event
-> Event Contract
-> Logical Event Channel
-> Transport Binding
-> Physical Topic/Platform Resource
-> Runtime Evidence.

A logical event and a physical Kafka topic are not the same thing.

## Governed Event Contract

Each governed event should capture, where applicable:
- stable event type/ID;
- business meaning;
- source/producer capability;
- intended consumers/use cases;
- business/domain/BIAN mapping where institutionally required;
- schema and schema version;
- classification/sensitivity;
- key/correlation semantics;
- ordering requirement;
- delivery/replay expectation;
- retention requirement;
- owner/steward;
- lifecycle status;
- compatibility requirements;
- applicable standards/policies;
- evidence and runtime bindings.

The Schema Registry already available in the institutional Kafka ecosystem should be discovered and reused for machine-governed schemas/compatibility where its actual capabilities support the requirement.

## Logical Event Channel

A Logical Event Channel groups an event contract into a governed communication lane without requiring a dedicated topic.

It may express:
- semantic category;
- security boundary;
- retention class;
- ordering/keying class;
- delivery/SLA class;
- producer/consumer authorization class.

Logical channel names can preserve institutional/BIA​​N naming or other governance conventions while physical runtime topology remains independently optimized.

## Physical Transport Binding

A binding maps one or more logical channels/event types to one or more physical resources.

Example:

`customer.balance.changed.v1`
`customer.card.added.v1`
`customer.profile.changed.v1`

may conceptually remain distinct governed events while a POC could bind compatible event types to a smaller physical topic set, provided the following are compatible and evidenced:
- security/ACL boundary;
- retention/compaction behavior;
- partition key/ordering requirement;
- throughput/scaling profile;
- producer/consumer lifecycle;
- failure/replay semantics;
- operational ownership;
- schema discrimination/compatibility.

Do not consolidate merely to reduce topic count when these concerns differ materially.

## Topic creation decision

Create a distinct physical topic only when at least one material runtime requirement justifies separation, for example:
- security/isolation;
- incompatible retention/compaction;
- incompatible ordering/key strategy;
- independent throughput/scaling;
- independent lifecycle/ownership;
- consumer isolation/failure domain;
- legal/data-residency constraint;
- platform limitation;
- measured operability benefit.

A conceptual taxonomy alone is not sufficient reason.

## Schema governance

Schema governance should link:

EventContract
<-> schema subject/identifier
<-> compatibility policy
<-> producer version
<-> consumer compatibility evidence
<-> physical binding.

Do not assume a specific Schema Registry subject-name strategy until the actual institutional configuration is inspected.

## Envelope candidate

Where multiple event types share a physical topic, evaluate a governed envelope containing only necessary routing/trace metadata such as:
- eventType;
- eventVersion;
- eventId;
- occurredAt;
- producer;
- correlation/causation ID;
- schema reference where appropriate;
- classification metadata where policy permits.

Do not place secrets or sensitive business content in headers/metadata merely for routing convenience.

## Conformance

The dashboard should distinguish at least:
- semantic governance alignment;
- schema governance alignment;
- transport-binding conformance;
- runtime policy enforcement;
- evidence completeness.

Therefore it can state, for example, that event semantics are fully mapped to a governance standard while physical topic topology is intentionally consolidated and still conformant.

## Change handling

If event-governance nomenclature or taxonomy changes:
- update the governed event/logical-channel model;
- evaluate binding impact;
- do not rename/recreate physical topics unless runtime or institutional requirements actually require it;
- preserve aliases/mappings/history for compatibility and audit.

## Goal

Achieve strong event governance with the smallest efficient Kafka topology justified by security, workload, recovery and operations rather than by conceptual object count.
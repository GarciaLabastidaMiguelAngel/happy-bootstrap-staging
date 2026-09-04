# Banking Request, Transaction and Reference Traceability Model

Status: ACTIVE_DIRECTION_MODEL
Direction: DIRECTION-0012

## Purpose

Define how digital channels can acknowledge eligible customer operations quickly while preserving banking authority, auditability, eventual transaction completion, cross-system reference correlation and clear customer experience.

This model does not authorize converting a regulated or strongly synchronous banking transaction into an asynchronous request. Eligibility must be proven per operation.

## Core distinction

A customer interaction can produce different technical semantics:

- QUERY: read-only retrieval.
- COMMAND / TRANSACTION: completion must be confirmed by the authoritative banking system before success is presented.
- REQUEST: the bank accepts responsibility for processing work asynchronously after all required acceptance controls have passed.
- LONG_RUNNING_OPERATION: durable work with explicit states, retries, compensation/recovery and status inquiry.

Do not call an accepted request a completed banking transaction.

## Candidate request lifecycle

Customer action
-> channel/BFF validation
-> required synchronous authentication/risk/business acceptance controls
-> durable request accepted
-> customer reference generated
-> ACCEPTED response
-> asynchronous processing
-> Gravity Plus / authoritative core transaction
-> authoritative result/reference
-> correlation update
-> customer/read-model update
-> notification/status evidence.

Candidate states:
- RECEIVED;
- VALIDATING;
- ACCEPTED;
- PROCESSING;
- CORE_ACCEPTED;
- COMPLETED;
- REJECTED;
- FAILED_RETRYABLE;
- FAILED_FINAL;
- COMPENSATING where applicable.

## Customer-visible success language

The response must distinguish:
- `REQUEST_ACCEPTED` — processing responsibility accepted, not yet banking-final;
- `TRANSACTION_COMPLETED` — authoritative transaction completed;
- `TRANSACTION_REJECTED`;
- `STATUS_PENDING`.

UX language and legal/regulatory meaning require institutional evidence.

## Reference / folio model

Do not assume one reference number is enough for every actor/system.

Use a correlation model such as:

OperationId (stable internal operation identity)
<-> CustomerReference (human-friendly where justified)
<-> ChannelReference
<-> BFF/RequestReference
<-> Gateway/API correlation IDs
<-> GravityPlusReference
<-> CoreReference
<-> Payment/network/external references where applicable.

Each reference record must capture:
- reference type;
- issuing authority/system;
- value;
- creation time;
- operation relation;
- environment/channel;
- lifecycle/status;
- visibility policy;
- sensitive/classification metadata.

## Reference generation principles

A platform reference service is optional and must be justified.

Do not generate a second customer reference when the authoritative core reference is already timely, usable, unique and appropriate for customer/support journeys.

A separate customer reference may be valuable when:
- the operation is asynchronously accepted before core completion;
- the core reference is not yet available;
- a human-friendly support reference materially improves customer/service usability;
- multiple downstream references must be correlated;
- cross-channel inquiry requires one stable operation identity.

The customer-friendly reference must never hide or destroy the authoritative core reference.

## Audit and support model

Given any permitted reference, authorized support/operations should be able to resolve:

reference
-> operation identity
-> channel/request state
-> authoritative transaction state
-> linked references
-> timestamps
-> key governed evidence
-> error/recovery status.

Do not expose sensitive internal identifiers indiscriminately to channels.

## Multi-channel direction

Digital web/mobile are the first focus, but the correlation model should not prevent later ATM/branch adoption.

A stable internal OperationId and typed reference links are preferable to making one channel's folio format the global banking identity.

## Event model

Candidate events:
- OperationRequestAccepted;
- OperationProcessingStarted;
- CoreTransactionAccepted;
- OperationCompleted;
- OperationRejected;
- OperationFailed;
- OperationReferenceLinked.

Logical events remain separate from physical Kafka topic topology.

## Required safeguards

Before converting an operation to asynchronous request semantics, establish:
- legal/regulatory/customer-expectation eligibility;
- required synchronous fraud/risk controls;
- idempotency model;
- duplicate-submission behavior;
- durable persistence;
- retry/recovery/compensation;
- ordering requirements;
- customer status inquiry;
- timeout/expiry;
- notification obligations;
- audit/retention;
- authoritative completion semantics;
- PCR/capacity/failure evidence.

## Example: beneficiary registration

Beneficiary registration is a research candidate, not an approved async operation.

If evidence shows eligibility, the channel may respond quickly with an accepted request and customer reference while durable processing completes the authoritative core registration. If regulation/business rules require final core confirmation before presenting success, retain synchronous completion semantics.

## Goal

Move suitable non-immediate banking work away from customer latency without lying about completion, losing auditability or creating duplicate/uncontrolled folio schemes.
# Smart Notification Adoption and Intelligence Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0010

## Purpose

Define how Architecture AI should integrate with the bank's existing Smart Notification capability before adding new notification intelligence.

User-provided current context:
- Smart Notification already provides technological delivery paths for customer push, email and SMS;
- customer-facing templates may require Legal approval before use;
- the current implementation/process is operationally difficult and should be understood before redesign;
- the name `Smart` must not be treated as evidence that prioritization, personalization, preferences, channel contingency or intelligence are already implemented.

Exact features, APIs, guarantees, ownership and regulatory obligations remain evidence-required.

## Governing principle

SMART NOTIFICATION IS CURRENT DELIVERY RAIL UNTIL EVIDENCE JUSTIFIES OTHERWISE.

Do not rebuild push/email/SMS delivery merely to create a new Architecture AI component.

Evolution:

DISCOVER CURRENT CAPABILITY
-> INTEGRATE AS IS
-> MAP TEMPLATE / LEGAL / DELIVERY PROCESS
-> MEASURE FAILURES / LATENCY / TOIL
-> ADD DETERMINISTIC POLICY WHERE MISSING
-> POC INTELLIGENCE ONLY WHERE VALUE EXISTS
-> RETAIN OR EVOLVE DELIVERY PLATFORM BY EVIDENCE.

## Notification responsibility split

Keep logically separate:
- Business/Domain Event;
- Notification Intent;
- Customer/Regulatory communication policy;
- approved Template and Version;
- recipient/contact/channel eligibility;
- preference/consent rules where applicable;
- priority/urgency where actually required;
- channel selection/fallback;
- delivery request;
- provider/platform delivery;
- delivery receipt/failure;
- audit/evidence.

Smart Notification may implement some of these today; do not duplicate them until discovered.

## Candidate target flow

Domain event / business request
-> Notification Intent
-> deterministic policy
-> approved template/version
-> channel plan
-> Smart Notification adapter
-> push/email/SMS delivery
-> delivery receipt/status
-> evidence/analytics
-> improvement.

## Legal/template governance

A customer template that requires Legal approval must have a durable lifecycle, for example:

DRAFT
-> REVIEW_REQUIRED
-> LEGAL_APPROVED
-> TECHNICALLY_VALIDATED
-> RELEASED
-> SUPERSEDED / RETIRED.

Architecture AI may prepare text, compare versions, validate required placeholders, package evidence and route approval. It must not self-approve a legally governed customer communication.

## Intelligence rule

Do not add AI or complex prioritization simply because the platform is called Smart Notification.

First determine whether there is an evidenced need for:
- priority queues;
- suppression/deduplication;
- per-customer preference;
- channel fallback;
- urgency/expiry;
- notification bundling;
- proactive personalization;
- send-time optimization;
- delivery-risk prediction.

Prefer deterministic rules where they satisfy the requirement.

Use ML/AI only after a measurable objective, data lineage, privacy/classification constraints and evaluation criteria exist.

## Customer experience and critical communication

Distinguish convenience notifications from messages that have mandatory delivery/retention/escalation obligations.

Do not infer legal/regulatory guarantees. Record them as UNKNOWN until official/institutional evidence exists.

## Observability

Safe telemetry should enable questions such as:
- intent-to-delivery latency;
- delivery success/failure by channel;
- retry/fallback behavior;
- template/version used;
- provider/platform errors;
- duplicate/suppressed notifications;
- customer interaction only where privacy/consent policy permits.

Never expose message secrets, credentials or unnecessary sensitive payloads in logs/telemetry.

## Architecture AI role

Architecture AI should eventually let an authorized user ask:
- which template is active?;
- why did this notification choose email instead of push?;
- what Legal approval applies?;
- what failed?;
- which channel is degraded?;
- what change would reduce delivery failures?;
- can this behavior be changed without modifying the delivery platform?

## Goal

Turn the existing Smart Notification capability into a governed, observable and progressively optimizable notification road while reusing its current delivery infrastructure and preserving Legal/regulatory decision rights.
# Modularity Boundaries and Evolution Guardrails

Status: ACTIVE_DIRECTION_MODEL
Direction: DIRECTION-0012

## Purpose

Prevent unnecessary refactoring by defining stable modular boundaries from product capabilities and change reasons rather than from transient frameworks, TOGAF layers, database tables, API count or current organization chart.

Spring Modulith is a technical realization aid, not the architecture itself.

## Governing rule

STABLE CAPABILITY / CHANGE REASON
-> MODULE BOUNDARY
-> EXPLICIT PROVIDED/REQUIRED INTERFACES
-> ALLOWED DEPENDENCIES
-> EVENTS WHERE DECOUPLING IS JUSTIFIED
-> ARCHITECTURE VERIFICATION
-> RUNTIME OBSERVATION
-> SPLIT PHYSICALLY ONLY WITH EVIDENCE.

## Do not define modules directly from

- one module per TOGAF concept;
- one module per API;
- one module per table;
- one module per agent;
- one module per logical plane;
- one module per current team;
- one module per future imagined microservice.

Those concepts may inform boundaries but are not sufficient by themselves.

## Initial Architecture AI module families

Exact names remain implementation-evidence dependent, but stable capability families should be evaluated around concerns such as:
- work/control/governance;
- knowledge/evidence;
- standards/conformance;
- integration adapters;
- observation/analysis;
- execution/tooling;
- identity/access where product-local;
- dashboard/Copilot application services.

The six logical planes remain cross-cutting architectural responsibility views and must not force six deployment units.

## Boundary test

A candidate module should answer:
1. What capability does it own?
2. What data/state is authoritative inside it?
3. What external API/events does it expose?
4. What does it depend on?
5. What changes independently from it?
6. Can it be tested in isolation?
7. Would a future physical split preserve the contract without rewriting every caller?

If these cannot be answered, the boundary is likely premature or accidental.

## Spring Modulith usage

Where Spring Modulith is used, require architecture tests that at minimum validate:
- no module dependency cycles;
- access only through module-exposed API/named interfaces;
- explicit allowed dependencies for protected modules;
- module-level integration tests;
- generated module documentation/canvas where useful;
- runtime module observations when they add evidence.

Internal application events should be used where temporal or ownership decoupling is real, not to make every method call asynchronous.

Externalization to Kafka or another broker is a separate TransportBinding decision governed by the event-realization model.

## Microservice decision

A current estate with one microservice per API is not automatically wrong merely because API count is large.

Evaluate physical service topology by evidence:
- independent scaling;
- availability/failure isolation;
- security boundary;
- ownership/release independence;
- data authority;
- dependency/call amplification;
- OpenShift operational overhead;
- namespace/resource complexity;
- PCR/capacity evidence;
- change coupling;
- deployment frequency;
- observability/support burden.

Possible outcomes include KEEP, CONSOLIDATE_CANDIDATE, SPLIT_CANDIDATE, WRAP/ADAPT, or UNKNOWN.

## Refactor prevention strategy

Prevent large avoidable refactors through:
- contract-first public module interfaces;
- internal implementation hiding;
- explicit dependency direction;
- canonical semantic models separate from transport DTOs where justified;
- adapters for bank/external systems;
- architecture tests in every build;
- event contracts separated from broker topic names;
- data ownership/freshness metadata;
- stable identity/reference semantics;
- incremental migration seams;
- ADR/specification for material boundary changes.

Refactoring remains normal. The goal is not zero refactoring; it is avoiding foundational rewrites caused by accidental coupling.

## Goal

Start with a deliberately modular one-product implementation that can grow into physically separated services only where runtime, security, scale, ownership or lifecycle evidence proves the benefit.
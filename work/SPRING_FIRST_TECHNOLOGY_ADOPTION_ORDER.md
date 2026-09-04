# Spring-First Technology Adoption Order

Status: ACTIVE_DIRECTION
Direction revision: DIRECTION-0011

## Purpose

Clarify Java First / Spring First so Architecture AI consistently chooses the simplest proven capability without duplicating institutional platforms or writing unnecessary custom infrastructure.

## Decision order

### 0. Existing institutional capability first

If the bank already provides a governed capability that sufficiently solves the requirement, integrate/reuse it first.

Examples include Glo/OpenShift delivery, API Connect, Kafka/Schema Registry, Kibana, Smart Notification, Control-M or future institutional services.

Do not replace an existing capability merely because a Spring alternative exists.

### 1. Spring ecosystem first for application-level gaps

When the required capability belongs in our application/runtime and is not already adequately supplied institutionally, evaluate the Spring portfolio first because it is the preferred implementation ecosystem.

Examples:
- Spring Boot;
- Spring Security / Authorization Server;
- Spring Integration;
- Spring Batch;
- Spring Cloud Gateway;
- Spring Cloud Stream where justified;
- Spring Modulith;
- Spring Transaction;
- Spring Cache;
- Spring Statemachine selectively;
- Spring Cloud Task/Data Flow where the actual job/orchestration requirement fits.

Use the specific module only for the responsibility it actually solves.

### 2. Mature Java/JVM open-source capability

If Spring does not solve the requirement well enough, evaluate mature Java/JVM components before moving to another technology family.

Decision factors:
- production maturity;
- security;
- standards support;
- operability/OpenShift fit;
- maintenance/community/vendor support;
- licensing;
- performance;
- integration cost;
- institutional approval.

### 3. Mature non-Java platform/tool

Java First is a preference, not a prohibition. Use a mature non-Java platform when evidence shows materially better fit and avoiding it would create unnecessary complexity or ownership.

### 4. Custom implementation last

Write custom framework/infrastructure code only for the differentiated requirement that remains after reuse/configuration/extension options are exhausted.

## Evaluation record

For each non-trivial technology choice record:
- requirement/capability;
- existing institutional option;
- Spring option;
- Java/JVM alternatives;
- other mature alternatives;
- constraints;
- evidence/POC;
- chosen approach;
- rejected alternatives and reason;
- operational/governance impact;
- review/deprecation trigger.

## Complexity rule

Preferred outcome:

EXISTING PLATFORM
+ SPRING APPLICATION LOGIC
+ MINIMUM ADDITIONAL COMPONENTS

rather than accumulating infrastructure products for every conceptual concern.

## Goal

Keep the platform technically coherent, Java/Spring-centered where we own application behavior, and aggressively resistant to unnecessary custom code or duplicate infrastructure.
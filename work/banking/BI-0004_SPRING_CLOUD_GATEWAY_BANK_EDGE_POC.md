# BI-0004 — Spring Cloud Gateway Bank Edge Capability POC

Status: READY_FOR_DISCOVERY_AND_PLANNING
Direction revision: DIRECTION-0008
Related initiatives: BI-0001 Customer Position, BI-0003 Web BFF

## Purpose

Evaluate Spring Cloud Gateway as a programmable bank-edge/application gateway capability behind or alongside the existing IBM API Connect plane, using real bank constraints and existing gateway code where available.

This POC does NOT assume Spring Cloud Gateway replaces API Connect.

## Core question

What responsibilities are best handled by the institutional API-management plane and what responsibilities are best handled by a Spring application-level gateway/BFF/runtime layer?

Architecture AI must compare actual capabilities and avoid duplicate policy enforcement.

## Existing-bank-first rule

Before building a new gateway from scratch, inspect any current Spring Cloud Gateway implementation/base that already integrates bank capabilities such as PKM, tracing, security headers, token propagation, routing or common filters.

Reuse Santander Framework/Glo/institutional foundations where supported.

Unknown implementation details remain UNKNOWN.

## Candidate topology

External/internal consumer
-> IBM API Connect / institutional API plane
-> Spring Cloud Gateway candidate
-> Web BFF / domain acceleration services / Gravity Plus APIs
-> core/infrastructure.

Alternative topologies must be measured, including direct API Connect -> BFF/service where the extra gateway adds no measurable value.

## Candidate Spring Cloud Gateway responsibilities

Evaluate only where justified:
- programmable routing;
- route-level feature/canary switches;
- correlation and tracing propagation;
- bounded token relay/session integration;
- security/header policy that belongs at the application edge;
- request/response transformation when contractually safe;
- controlled fallback;
- rate/size/retry behavior where policy permits;
- application-specific observability;
- route configuration governed through Git and validated before activation.

Do not put domain data composition, Exadata JDBC logic or broad business rules into gateway filters.

## API Connect responsibility discovery

Collect actual institutional evidence for:
- API product/catalog lifecycle;
- consumer/application registration;
- OAuth/security policy;
- rate limiting/quotas;
- analytics;
- transformation/routing;
- certificates/keys;
- lifecycle/versioning;
- deployment/promotion;
- observability;
- governance approvals.

Do not assume licensed features or configured capabilities from generic IBM API Connect documentation.

## Security/session evaluation

For web/BFF scenarios evaluate:
- server-side session behavior;
- OAuth2/OIDC token relay where applicable;
- opaque browser session cookie pattern;
- CSRF protections;
- Secure/HttpOnly/SameSite policy;
- PKM/JWSID/JWE integration actually required by downstream bank APIs;
- trace/correlation identity;
- no credential/token logging.

Spring Cloud Gateway currently provides framework mechanisms such as TokenRelay, SaveSession and SecureHeaders, but Architecture AI must validate the approved Spring version, Santander Framework integration and institutional security policy before adopting them.

## Control-plane vs data-plane distinction

Do not force Spring Cloud Gateway to recreate a complete API-management control plane.

Conceptually:

API governance/control plane
-> API lifecycle, registration, standards, approvals, products, policy governance

Runtime/application gateway plane
-> programmable request path, route behavior, application-specific integration, bounded runtime policy

The exact split must be evidenced from the bank platforms.

## Gateway configuration governance

Any dynamic route/policy configuration sourced from Git should follow:

Git change
-> schema validation
-> policy/gate validation
-> test
-> approved promotion
-> runtime reload/rollout
-> evidence/rollback.

Do not permit arbitrary unaudited runtime edits.

## Performance evidence

Measure whether the gateway adds value greater than its cost:
- added p50/p95/p99 latency;
- CPU/memory;
- throughput;
- connection behavior;
- retry/fallback outcomes;
- route-switch/canary effectiveness;
- observability quality;
- operational complexity;
- failure isolation;
- deployment/release effort.

## Required evidence inputs

1. Current Spring Cloud Gateway bank implementation/base if available.
2. PKM/security/tracing integration in that implementation.
3. IBM API Connect route/product/policy evidence for selected POC APIs.
4. Santander Framework/Glo constraints.
5. Current OAuth/OIDC/JWSID/JWE requirements for selected paths.
6. OpenShift deployment/runtime restrictions.
7. Kibana/OTel logging/tracing path.
8. Selected web BFF/Customer Position POC routes.

## POC phases

### P0 — Capability discovery
Map API Connect vs current Spring gateway capabilities.

### P1 — Minimal reusable gateway baseline
Reuse existing bank foundation where available; add only missing, evidenced capabilities.

### P2 — Web BFF route
Route selected BI-0003 traffic through the candidate gateway with correlation/security/observability.

### P3 — Controlled routing experiment
Test direct path vs gateway path, plus a bounded feature/canary/fallback scenario.

### P4 — Governance decision
Classify each capability:
- KEEP_IN_API_CONNECT;
- KEEP_IN_SPRING_GATEWAY;
- SHARED_WITH_EXPLICIT_BOUNDARY;
- REMOVE_DUPLICATION;
- UNKNOWN_REQUIRES_EVIDENCE.

## Success criteria

The POC succeeds only if it produces an evidence-backed responsibility split and demonstrates that any retained Spring Cloud Gateway layer adds measurable programmability/control without duplicating institutional API governance or degrading security/performance materially.

## Goal

Build an evolvable application-edge capability that integrates with the bank's existing API-management plane and can support web BFF, progressive routing and future bounded Copilot-controlled changes without becoming a second uncontrolled API platform.
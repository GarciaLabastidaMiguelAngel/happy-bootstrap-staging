# BI-0002 — Digital Channel Incremental Data Synchronization Vision

Status: FUTURE_INITIATIVE_CANDIDATE
Direction revision: DIRECTION-0006
Depends on: BI-0001 evidence and semantic data-element model

## Purpose

Capture the longer-term evolution from backend read acceleration toward customer-centric incremental synchronization for digital channels without treating current Gravity Plus APIs as disposable.

This is a future direction, not an approved implementation.

## Customer-first objective

The target experience is that a digital channel refreshes only the data that actually changed or is stale, instead of repeatedly rebuilding the entire customer view through many coarse APIs.

Example:

A new card is registered
-> only the card/product state required by the customer experience is synchronized
-> existing stable customer/profile data is not unnecessarily refetched
-> balances or other real-time values continue to use the appropriate freshness/source policy.

## Foundational dependency

BI-0001 introduces a canonical semantic data-element model:

API field
-> semantic data element
-> authority/source
-> freshness
-> classification
-> retrieval/cache policy.

BI-0002 extends this model from server-side Redis/read projections to channel/device synchronization.

## Conceptual topology

Authoritative bank sources
-> backend semantic data model / read projections
-> change/freshness detection
-> synchronization contract
-> channel-specific backend/access layer as justified
-> secure device/local projection
-> UI components.

The device copy is a cache/projection, not banking authority.

## Device projection principles

1. Persist only data that is justified for the channel/use case.
2. Use platform-approved secure device storage for protected data when required.
3. Information classification determines whether an element may be persisted locally at all.
4. Cache loss must be recoverable through synchronization.
5. Do not treat all customer information as equal: stable identity, product metadata and balances have different freshness/security semantics.
6. The mobile/web UI should not need to know the physical bank source for each element.

## Incremental synchronization model candidate

Each synchronized semantic element/group should carry enough state to determine whether refresh is required, for example conceptually:
- semantic element/group ID;
- customer/resource identity;
- version/change token where available;
- `asOf`/freshness metadata;
- source authority;
- classification;
- synchronization state.

The actual protocol/versioning mechanism must be researched and measured.

## Transactionality / saga direction

Some synchronization flows cross multiple durable boundaries:
- bank source change;
- backend cache/read projection;
- synchronization event/work;
- channel/device acknowledgement/state.

Where business consistency requires recoverable multi-step coordination, model it as durable work/saga rather than pretending there is one distributed ACID transaction.

Example candidate:

New card registered
-> authoritative event/change detected
-> customer product projection updated
-> synchronization work created
-> channel receives delta
-> local projection updated
-> acknowledgement/checkpoint
-> completion or retry.

Compensation/retry semantics must depend on the actual business process. Do not claim exactly-once delivery without evidence.

## Reactive experience direction

The desired user experience may use proactive/delta updates rather than forcing every screen to wait for a complete API recomposition.

However, `reactive` is an experience/data-flow property, not a mandate to use one transport.

Evaluate separately:
- request/response refresh;
- server streaming;
- bidirectional streaming;
- event-driven synchronization;
- background refresh;
- UI state reconciliation.

## Protocol research track

Do not select gRPC, HTTP/2, HTTP/3, WebSocket, SSE, WebTransport or another protocol by intuition.

Research must evaluate by channel and bank infrastructure:
- native mobile support;
- browser support;
- API Connect/gateway compatibility;
- Santander framework/runtime support;
- authentication/session model;
- streaming semantics;
- backpressure;
- observability;
- retries/resume;
- load balancing;
- proxy/firewall/network constraints;
- contract governance/code generation;
- payload size/latency;
- security controls.

Current standards/references to evaluate include HTTP/2-based gRPC for native/service communication, gRPC-Web for browser access where justified, HTTP/3 (RFC 9114), and other standardized browser streaming transports where appropriate. Adoption requires environment evidence.

## API coexistence

Gravity Plus APIs remain valid integration assets while the new model is proven.

Possible evolution:
1. existing API contracts remain external compatibility layer;
2. backend semantic data/read model improves how those contracts are satisfied;
3. selected channel-specific synchronization contracts are introduced;
4. usage/performance evidence determines which legacy API interactions can be reduced, retained or eventually retired through governed change.

No API is removed merely because a newer synchronization model exists.

## Channel architecture / BFF candidate

A Backend-for-Frontend or channel-specific access layer is a future pattern candidate only when channel-specific composition, security, protocol adaptation or synchronization needs justify it.

Do not introduce BFF solely because a mobile or web frontend exists.

## Usability analytics

Channel behavior should progressively inform freshness and preload decisions from measured user behavior, for example:
- which components are actually viewed;
- which values users request immediately after login;
- which data is rarely consumed;
- latency/friction by task.

This evidence may change prefetch/on-demand policy.

Do not silently convert user analytics into business policy or model training; treat it as governed evidence.

## Security and information handling

Before data is stored/synchronized to a device:
- classify it;
- confirm user/device authorization;
- confirm local-storage policy;
- define encryption/secure-store requirements;
- define retention/expiry;
- define logout/device-loss behavior;
- prevent sensitive values in telemetry;
- evaluate PCI/privacy scope.

## LAB evolution path

Suggested future experiments after BI-0001:

1. server-side semantic data registry and Redis projection proven;
2. deterministic delta calculator over two projection snapshots;
3. channel synchronization contract POC;
4. native/mobile local secure projection POC with synthetic data;
5. event/saga synchronization POC;
6. protocol comparison POC;
7. end-to-end customer-task performance/usability comparison.

## Success evidence

Do not promote the model unless evidence shows benefits such as:
- fewer backend calls;
- lower transferred bytes;
- lower time-to-useful-content;
- controlled freshness;
- reliable recovery after cache/device-state loss;
- correct incremental changes;
- no security/classification regression;
- lower infrastructure cost or improved customer experience.

## Goal

Evolve from API-by-API data retrieval toward a governed customer-centric synchronization model in which backend, Redis and future channel/device projections share semantic identity and freshness rules while preserving bank authority, security and compatibility.
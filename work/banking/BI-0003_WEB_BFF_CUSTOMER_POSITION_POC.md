# BI-0003 — Web BFF Customer Position POC

Status: READY_FOR_DISCOVERY_AND_PLANNING
Direction revision: DIRECTION-0008
Depends on: BI-0001 semantic/source/freshness evidence; BI-0002 long-term channel synchronization vision

## Purpose

Use the existing bank web channel as the next practical POC to prove that Architecture AI can design a channel-specific Backend-for-Frontend (BFF) that consumes existing Gravity Plus APIs, preserves institutional controls, reduces unnecessary data retrieval, and improves time-to-useful-content without breaking Gravity Plus contracts.

The first visible slice is the current web Customer Position view.

## Governing principle

GRAVITY PLUS REMAINS THE BANK API COMPATIBILITY LAYER.

The web BFF is a channel-specific composition/synchronization layer, not a replacement for Gravity Plus.

Target flow:

Browser / Angular
-> Web BFF
-> Gravity Plus APIs
-> optimized Customer Position / other domain APIs
-> Redis/read projections / Exadata / core / satellites as already governed.

The request path should progressively filter toward only the data actually required by the current user task.

## POC user state assumption

For the POC, assume the user has already completed the required authentication/binding/step-up process. Do not invent the bank authentication ceremony.

Model a server-authoritative authenticated session and preserve a clear seam for the real bank identity/binding mechanisms once evidence is available.

## Browser session and binding model

Do not use browser storage as the authentication authority.

Preferred POC security direction:
- browser receives only an opaque session handle where appropriate;
- session cookie uses HTTPS and explicit secure attributes according to approved policy;
- authentication tokens/session IDs/refresh tokens are not stored in localStorage/sessionStorage;
- BFF retains server-side security/session context where feasible;
- client state is treated as a projection/cache and is reconstructible;
- logout/session termination clears server state and browser-resident protected state where applicable.

A browser-tab identifier may be used as a non-secret correlation key to maintain per-tab UI state, but it is not an authentication factor.

`sessionStorage` may be evaluated for bounded non-secret per-tab state because browsers scope it to a tab/top-level browsing context. It must not hold credentials or be treated as protected storage because JavaScript in the origin can access it.

Client-side encryption does not by itself convert browser storage into trusted secure storage when the same JavaScript execution environment can access the decryption key. Any protected-data persistence requires explicit security review and information-classification policy.

## Data-location model

Each datum used by the web experience should have a governed placement decision:

- authoritative bank source;
- Gravity Plus/server semantic projection;
- BFF session/read projection;
- browser/tab projection;
- UI component state.

For each placement capture:
- semantic element ID;
- source authority;
- classification;
- freshness requirement;
- retention/expiry;
- whether local persistence is permitted;
- invalidation/resynchronization mechanism;
- observability restrictions.

Do not copy a datum into every layer merely because it is available.

## BFF contract model

The BFF should expose channel-specific contracts optimized for the web task rather than mirroring every Gravity Plus API one-for-one.

Example conceptual endpoint:

`GET /web-bff/customer-position-view`

The actual contract must be specification-first/OpenAPI-first and derived from the current web view and required user task.

The BFF may:
- compose multiple Gravity Plus APIs;
- request only required sub-capabilities where existing contracts support it;
- reuse the optimized Customer Position capability from BI-0001;
- maintain bounded session/read state;
- emit channel-level performance/UX evidence;
- shield the Angular application from unnecessary bank-source topology.

## Frontend architecture direction

Start with a modular Angular frontend architecture with explicit feature/component/data boundaries.

Do not make `microfrontends` mandatory merely to parallelize development.

Evaluate microfrontends only when evidence shows value from independent deployment, ownership, release cadence, isolation or organizational scaling.

Initial preferred structure:
- application shell;
- Customer Position feature area;
- shared design/security/session services;
- bounded client state/query facade;
- explicit component contracts/events;
- generated/typed BFF API clients where appropriate.

This structure must allow later migration to microfrontends if the required independence becomes real.

## Client-state principles

The UI should not repeatedly refetch complete coarse responses when bounded state is still fresh and authorized.

Candidate state layers:
- ephemeral component state;
- per-tab session projection;
- BFF server session/read projection;
- backend Redis semantic projection.

Each layer has independent freshness and security rules.

The browser must never become the banking source of truth.

## Progressive loading / customer experience

The POC should prefer time-to-useful-content over waiting for an entire Customer Position payload when the view can be rendered safely in stages.

Candidate behavior:
1. render shell and stable/profile information already available and allowed;
2. request or refresh volatile product/balance information;
3. update affected components as data arrives;
4. show deterministic loading/error/freshness state;
5. do not block unrelated screen capability on independent risk/analytics work unless policy requires it.

`Reactive` describes the user/data-flow behavior and does not mandate one transport.

## Session isolation experiment

If the requirement is that an in-progress web projection is not accidentally shared across tabs, test a model using:

Authenticated server session
+ non-secret per-tab client ID
-> BFF sub-session/read context
-> tab-specific UI projection.

The cookie itself may still be shared by same-origin tabs; therefore tab ID cannot be represented as a security boundary. Authorization remains server-side.

## Security controls to evaluate

At minimum:
- HTTPS/TLS;
- Secure/HttpOnly/SameSite cookie policy;
- CSRF protection appropriate to the selected session model;
- CSP and other approved browser security headers;
- cache-control/no-store policy for sensitive responses where required;
- logout/session expiry cleanup;
- XSS prevention;
- data classification and masking;
- no sensitive telemetry leakage;
- step-up/reauthentication hooks for protected actions;
- authorization checked server-side for every protected operation.

## POC evidence inputs

Preferred evidence:
1. screenshot/video/current web Customer Position view;
2. description of the user behavior and which data appears when;
3. current web frontend repository or bounded source snapshot if available;
4. current authentication/session/binding flow evidence;
5. Gravity Plus OpenAPI contracts used by the current page;
6. BI-0001 Customer Position implementation/source mapping when available;
7. current browser/security policies;
8. current API Connect route/security behavior;
9. current UX/performance baseline.

Missing information remains UNKNOWN/ResearchRequest.

## Measurements

At minimum compare:
- time to first useful content;
- time to full view;
- number of browser->BFF calls;
- number of BFF->Gravity Plus calls;
- bytes transferred;
- backend/core/Exadata calls indirectly caused;
- cache/read-projection hit ratio by layer;
- stale-data/mismatch findings;
- session/auth errors;
- browser memory/storage footprint;
- p50/p95/p99 latency;
- user-task completion/friction metrics where practical.

## Success criteria

The POC succeeds only if it demonstrates:
- current Customer Position web behavior can be replicated acceptably;
- authentication/binding assumptions remain explicit and replaceable with real bank evidence;
- no tokens/session credentials are exposed to browser storage by design;
- BFF contracts are channel-specific and governed;
- Gravity Plus contracts remain compatible;
- fewer/reduced coarse backend calls or lower time-to-useful-content is measured;
- data freshness and classification remain correct;
- frontend architecture remains maintainable and parallel-development friendly;
- no premature microfrontend or protocol complexity is required;
- the design can evolve toward BI-0002 incremental synchronization.

## Goal

Prove an end-to-end web architecture where the user sees a faster, secure Customer Position experience while the request path progressively narrows to the minimal authoritative bank work required.
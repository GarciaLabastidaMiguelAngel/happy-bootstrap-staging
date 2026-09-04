# Project Direction Baseline

Status: ACTIVE
Direction revision: DIRECTION-0001
Repository role: Happy Work staging / prompt-governance control plane
Current operating emphasis: LAB / local-first evolution

This file captures the current working direction used to prepare and reconcile Devin sessions. It does not replace the implementation repository or the validated Seed payload.

## Primary mission

Evolve Architecture AI as one governed product with a modular Spring Boot core, Angular UI, MCP capability plane, durable work/session/event/saga state, local-first observability and simulation, and a clean path to future OpenShift SERVICE mode.

## Current architectural direction

- One product first; modular monolith before microservices.
- Local-first execution now; OpenShift-ready contracts later.
- Work is durable; provider sessions are ephemeral.
- Devin is the first agent provider, not the architecture itself.
- MCP is the tool/resource/capability plane.
- Provider APIs control provider lifecycle where appropriate.
- A2A compatibility should be preserved for future agent-to-agent interoperability.
- Eventing, sagas, observability, audit, notifications, sessions and agent runtime are shared platform capabilities, not ad-hoc per-feature implementations.
- Git governs source/definitions/contracts/manifests/prompt governance; Nexus governs immutable distributable artifacts; local stores govern mutable runtime state; LAB analytical storage governs observation/simulation datasets.
- OpenTelemetry/OTLP are the telemetry standards boundary; local Collector first, future OpenShift deployment later.
- Deterministic framework/tool execution is preferred over LLM reasoning whenever the problem can be computed or validated deterministically.
- Non-deterministic reasoning must be enclosed by structured input/output and deterministic validation/policy.
- Engineering work must delegate broad unresolved research rather than silently expanding into open-ended discovery.

## Current platform modes

- PLATFORM_DEV: develops Architecture AI itself.
- SOLUTION: stable local architect runtime.
- LAB: isolated experimentation, replay, simulation and ML evaluation.
- SERVICE: future central OpenShift runtime using the same application core.

Current working emphasis is LAB/local development. LAB experiments must not silently become canonical SOLUTION state.

## Current cross-cutting planes

1. Build/release plane
2. Local knowledge/ingestion plane
3. Event platform
4. Saga/work orchestration
5. Agent runtime/session/communication plane
6. MCP capability plane
7. Observability/OpenTelemetry plane
8. Audit plane
9. Human attention/notification/decision plane
10. LAB/simulation/evaluation plane
11. Dashboard/control-plane visibility

## Governance principles

- No session may depend on accidental chat context.
- Every delegated session receives a bounded Session Context Pack.
- Every prompt references a direction revision and repository baseline.
- Material direction changes require impact analysis across active sessions.
- Active sessions are classified after material changes as UNAFFECTED, REVIEW_REQUIRED, PAUSE_REQUIRED or SUPERSEDE_REQUIRED.
- Missing context results in discovery/reconciliation, not guessing.
- Session completion does not imply work completion.
- Provider/session state does not overwrite Architecture AI canonical work state.
- Simulation distinguishes OBSERVED, SIMULATED, ASSUMED and EXPERIMENTAL inputs.
- Knowledge accumulation, dataset evolution and model learning must remain visibly distinct.

## Current dashboard intent

The operational dashboard should progressively expose real evidence for:

- active direction revision
- repository baseline
- active prompts/workstreams
- session/context-refresh status
- change-impact warnings
- build/architecture validation
- event/saga/work backlogs
- agent execution/provider state
- MCP usage
- observability/Collector health
- notifications/decisions
- knowledge growth
- dataset/model state
- LAB simulation/evaluation state
- architecture/direction drift signals

## Material-change triggers

Increment the direction revision when accepted direction materially changes any of:

- principal product shape
- operating modes
- deployment/runtime strategy
- repository/storage authority
- protocol strategy
- agent/session/work model
- event/saga model
- security boundary
- build/runtime baseline
- canonical platform principles

Minor implementation detail changes do not require a direction revision unless they invalidate active session assumptions.

## Deferred / unresolved

- Final OpenShift deployment topology and central telemetry backend.
- Final broker/transport for distributed events.
- Final central storage providers.
- Exact future A2A/ACP adoption based on real provider support.
- Final institutional audit/retention policies.
- Final multi-agent scheduling strategy.

## Working loop

Direction -> governed work -> implementation -> deterministic validation -> telemetry/evidence -> LAB evaluation -> reconciliation -> updated direction.

Do not reduce this operating model to chat -> code -> more chat.

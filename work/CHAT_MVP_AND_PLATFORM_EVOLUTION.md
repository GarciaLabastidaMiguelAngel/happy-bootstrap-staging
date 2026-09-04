# Dashboard Chat MVP and Platform Evolution

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision target: DIRECTION-0002

## Immediate objective

Make Architecture AI visibly useful in local LAB mode through the existing Angular dashboard and Spring Boot application.

The first fast user-facing capability is a simple governed chat surface that can communicate with Devin using the already validated supported API path.

This is not a generic chat clone. It is the conversational projection of Architecture AI state.

## Minimum chat MVP

The first local MVP should allow the user to:

- open the Architecture AI dashboard
- access a Chat/Director view
- send a bounded message/request
- have Spring Boot call the supported Devin API through a provider adapter
- display the provider response/session status safely
- correlate the conversation with Architecture AI work/session references where available
- show whether the response is informational, blocked, requires research, requires human decision or can proceed as governed work
- show links/references to relevant platform evidence rather than embedding unnecessary raw context

## Do not overbuild the first chat

Do not require first-wave completion of:

- full multi-agent orchestration
- autonomous planning engine
- complete A2A support
- distributed OpenShift deployment
- advanced ML training
- complex long-term conversational memory

The first chat should prove the control path and become the place where governed state is progressively exposed.

## Chat architecture

Conceptual path:

Angular Dashboard
→ Director Chat API
→ Architecture AI Director/Work layer
→ Agent provider abstraction
→ Devin API

For Architecture AI capabilities used by Devin:

Devin
→ MCP client
→ Architecture AI MCP server
→ deterministic tools/resources/work/evidence

The provider API and MCP have distinct responsibilities.

## Chat state

Do not use the raw chat transcript as canonical project memory.

Persist/reference durable objects such as:

- WorkItem / WorkPackage
- AgentAssignment / AgentExecution
- ProviderSessionBinding
- blocker/gap
- gate evaluation
- decision request/response
- evidence references
- accepted direction/decision

The chat renders/project these objects.

## Blocker-first behavior

If the user asks for something that cannot safely proceed, the chat should answer with operational truth, for example:

- blocker ID
- blocker summary
- blocking gate
- owner/workstream
- impact
- what can still proceed
- evidence required
- expected next transition

The director must not hide uncertainty behind fluent prose.

## Local development / LAB

Current first implementation target is local LAB mode.

LAB should track the accepted `main` integration baseline by default for normal live/hot-reload work.

Experimental branches may run in isolated LAB sessions only when explicitly selected.

Parallel agent branches must not silently hot-reload into the same accepted live instance.

## Spring development ergonomics

Use existing Spring Boot/Angular development capabilities before adding custom hot-reload infrastructure.

Evaluate and use framework-native development tooling where it fits the current build, for example Spring Boot development support and Angular development tooling, while preserving the governed Gradle build harness.

Do not make runtime correctness depend on development-only tooling.

## OpenAPI-first dashboard APIs

For material HTTP APIs introduced for Chat, Director, Work, Gate, Agent Runtime or Control Center views:

- define/maintain OpenAPI contracts where appropriate
- version contracts
- validate implementation against contracts
- prefer generated/bounded DTO interfaces when useful
- prevent controllers from becoming independent undocumented contracts

Do not create a separate API project if the existing modular application can own the formal contracts cleanly.

## Progressive dashboard views

The dashboard should progressively expose:

1. Director Chat
2. Current Direction
3. Work / Blockers
4. Gates
5. Agent Sessions/Executions
6. Knowledge Growth
7. Dataset / Model status
8. Event / Saga state
9. Telemetry / Collector health
10. LAB simulations/evaluations
11. Documentation / architecture evidence

The first release can show placeholders only when they are clearly marked PLANNED/NOT_IMPLEMENTED and never presented as live evidence.

## Documentation generation

The platform should reduce current manual documentation burden.

Architecture documentation should be generated/updated from governed specifications, decisions, evidence and accepted work results.

Do not treat a prose document as the only source of truth for executable contracts.

The director should be able to explain:

- platform purpose
- current scope
- non-goals
- capabilities implemented
- capabilities planned
- architecture direction
- standards/policies
- current blockers
- evidence state

This becomes the controlled basis for later Chief Architect review/handoff.

## First observable success criterion

The user opens the local dashboard and can ask:

"What are we building, what is currently blocked, what is Devin working on, and what must happen next?"

The system answers from current governed state and provider observations, clearly distinguishing:

- implemented
- planned
- blocked
- unknown
- observed
- inferred

That is the first tangible proof that Architecture AI is becoming a governed copilot rather than a set of scripts and chats.

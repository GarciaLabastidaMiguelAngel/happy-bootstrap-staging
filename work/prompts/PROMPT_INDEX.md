# Devin Prompt Index

Status: ACTIVE
Direction revision: `DIRECTION-0009`

This index tracks prompts prepared by Happy Work for delegated Devin sessions.

## Lifecycle rules

- File existence does not imply SENT/EXECUTED.
- READY means handoff-eligible only after current-direction refresh.
- DRAFT must be reconciled before handoff.
- SUPERSEDED remains historical.
- Material direction changes trigger impact review/context refresh.
- Missing context/evidence becomes UNKNOWN/ResearchRequest/Blocker, never invention.

Parallelism classes:
- PARALLEL_SAFE
- PARALLEL_SAFE_WITH_BOUNDARIES
- SERIAL_REQUIRED
- DISCOVERY_ONLY
- BLOCKED_BY_DEPENDENCY
- SERIAL_REQUIRED_FOR_BOOTSTRAP_THEN_PARALLEL
- PARALLEL_SAFE_WITH_BOUNDARIES_AFTER_BOOTSTRAP

Prompt lifecycle:
DRAFT -> READY -> SENT -> EXECUTING -> EXECUTED -> RECONCILING -> RECONCILED, with BLOCKED / SUPERSEDED / CANCELLED where applicable.

## DIRECTION-0009 cross-cutting refresh

All future handoffs preserve DIRECTION-0008 and add:

- Customer identity is separate from workforce/corporate identity and requires its own governed identity/access/risk capabilities.
- LDAP, IdP, OAuth Authorization Server, credential store, risk engine, session store and binding are separate logical responsibilities.
- Java First means reuse mature Java IAM capabilities before custom implementation: Keycloak and Spring Security Authorization Server are candidates; a separate Java LDAP such as OpenDJ is required only if evidence justifies LDAP.
- Existing core password validation remains legacy authority until an approved credential migration path exists; plaintext passwords are never extracted or reconstructed.
- OAuth/OIDC may be used for first-party bank clients; OIDC does not imply external identity delegation and OAuth does not imply JWT.
- Web BFF continues to use server-authoritative session/token state; browser receives an opaque secure session cookie rather than access/refresh tokens in browser storage.
- JWT local validation may improve gateway performance, but immediate revocation requires authoritative state/signal. Do not claim fully stateless immediate revocation.
- Adaptive risk may be asynchronous where policy permits; ALLOW/DENY/STEP_UP_REQUIRED decisions are enforced server-side by BFF/gateway/resource servers.
- SSE/WebSocket challenge notification is UX signaling, not the authorization boundary.
- WebAuthn/passkeys, RFC 9470 step-up, RFC 9449 DPoP and FAPI 2.0 are standards research/adoption candidates where applicable.
- Banking CQRS is a logical hierarchy of authoritative source -> Exadata/read model -> Redis -> BFF -> channel projections with explicit freshness, versioning, reconciliation and provenance.
- Highly volatile data such as balances is cacheable only when an evidenced freshness/consistency mechanism makes that safe; otherwise it remains LIVE_SOURCE_REQUIRED.
- Semantic data-element granularity does not mean one source query per field; missing elements are grouped into minimal efficient source operations.
- Control-M modernization starts from malla inventory/classification. Spring Batch is not a scheduler. OpenShift Jobs/CronJobs, Spring Cloud Task/Data Flow and Java/open workflow schedulers are candidates only by workload evidence.

Latest impact assessment: `work/changes/DIRECTION-0009_IMPACT.md`.

## Control table

| Prompt ID | Domain | Status | Parallelism | DIRECTION-0009 impact | Handoff note |
|---|---|---|---|---|---|
| `P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01` | LAB capability coverage / organization / Git / parallel execution | READY | SERIAL_REQUIRED_FOR_BOOTSTRAP_THEN_PARALLEL | REVIEW_REQUIRED | Add customer IAM/adaptive access, projection consistency and job-orchestration capability coverage without equating capability to agent |
| `P-GRAVITY-PLUS-CUSTOMER-POSITION-READ-ACCELERATION-POC-01` | Banking integration / Customer Position / Redis / Exadata / performance | READY | PARALLEL_SAFE_WITH_BOUNDARIES_AFTER_BOOTSTRAP | UNAFFECTED_WITH_CONTEXT_REFRESH | Apply explicit CQRS freshness/projection/reconciliation model; use actual project/framework/integrations |
| `P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01` | Repository / runtime modes / artifact lifecycle | READY | SERIAL_REQUIRED | REVIEW_REQUIRED | Reuse Glo/institutional archetypes; IAM/jobs must fit actual delivery platform rather than creating parallel foundations |
| `P-EVENT-PLATFORM-SAGA-01` | Event platform / sagas | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Async risk decisions and projection updates are concrete use cases; payload/classification/replay rules remain governed |
| `P-OBSERVABILITY-AUDIT-01` | Observability / audit | READY | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Add safe identity/session/risk/projection/job evidence; never log credentials/tokens/sensitive payloads |
| `P-LOCAL-TELEMETRY-DATA-ROAD-01` | Local OTel Collector / analytical observation road | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Add auth/risk/cache/projection/job performance signals where safe; coexist with Kibana |
| `P-NOTIFICATION-PLATFORM-01` | Human attention / notification / decisions | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Step-up UX signaling remains distinct from authorization enforcement |
| `P-SIMULATION-EVALUATION-FOUNDATION-01` | LAB / simulation / replay / Monte Carlo | DRAFT | PARALLEL_SAFE_WITH_BOUNDARIES | REVIEW_REQUIRED | Future scenarios can model token/revocation windows, risk latency, projection freshness and scheduler migration |
| `P-AGENT-RUNTIME-COMMUNICATION-PLANE-01` | Sessions / work / Devin API / MCP / A2A | READY | PARALLEL_SAFE_WITH_BOUNDARIES | UNAFFECTED_WITH_CONTEXT_REFRESH | Do not conflate Architecture AI agent sessions with customer authentication sessions |
| `P-DEVIN-API-ACCESS-DISCOVERY-01` | Devin API discovery / RBAC | SUPERSEDED | DISCOVERY_ONLY | SUPERSEDED | Real API evidence replaced separate discovery prompt |
| `P-OBSERVABILITY-AUDIT-PLATFORM-01` | Earlier observability draft | SUPERSEDED | PARALLEL_SAFE_WITH_BOUNDARIES | SUPERSEDED | Replaced by `P-OBSERVABILITY-AUDIT-01` |

## Active/ready files

- `active/P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01.md`
- `active/P-GRAVITY-PLUS-CUSTOMER-POSITION-READ-ACCELERATION-POC-01.md`
- `active/P-ARCHITECTURE-AI-REPOSITORY-ARCHETYPES-01.md`
- `active/P-EVENT-PLATFORM-SAGA-01.md`
- `active/P-OBSERVABILITY-AUDIT-01.md`
- `active/P-LOCAL-TELEMETRY-DATA-ROAD-01.md`
- `active/P-NOTIFICATION-PLATFORM-01.md`
- `active/P-AGENT-RUNTIME-COMMUNICATION-PLANE-01.md`

## Draft

- `draft/P-SIMULATION-EVALUATION-FOUNDATION-01.md`

## Superseded

- `superseded/P-DEVIN-API-ACCESS-DISCOVERY-01.md`
- `superseded/P-OBSERVABILITY-AUDIT-PLATFORM-01.md`

## Candidate follow-up prompts

Generate only after collision/dependency review:

- `P-DIRECTOR-CHAT-WORK-READMODEL-01`
- `P-STANDARDS-INTELLIGENCE-CONFORMANCE-01`
- `P-ANALYTICS-EVIDENCE-READMODELS-01`
- `P-KNOWLEDGE-GRAPH-CQRS-PROJECTION-01`
- `P-INFORMATION-CLASSIFICATION-DATA-GOVERNANCE-01`
- `P-PORTFOLIO-BACKLOG-ENGINEERING-FLOW-01`
- `P-OPENSHIFT-SERVICE-READINESS-DISCOVERY-01`
- `P-DEVOPS-BANK-PLATFORM-INTEGRATION-01`
- `P-KIBANA-LOG-EVIDENCE-INTEGRATION-01`
- `P-GOVERNANCE-DOMAIN-MAPPING-01`
- `P-GLO-ARCHETYPE-OPENSHIFT-INTEGRATION-DISCOVERY-01` after Issue #4 has enough evidence or as a bounded discovery session.
- `P-REGULATORY-ARTIFACT-OBLIGATION-MAPPING-01` after/for Issue #5 evidence collection.
- `P-WEB-BFF-CUSTOMER-POSITION-POC-01` after Issue #6 has sufficient web/session/frontend evidence and BI-0001 source semantics are available enough to avoid guessing.
- `P-SPRING-CLOUD-GATEWAY-BANK-EDGE-POC-01` after Issue #7 provides the current gateway/API Connect baseline; may run in parallel with BI-0003 only with explicit ownership boundaries.
- `P-CUSTOMER-IAM-ADAPTIVE-ACCESS-POC-01` from BI-0005 after bootstrap ownership and Issue #8 current-auth evidence are sufficient; synthetic LAB slices may begin before real credential migration evidence.
- `P-BANKING-CQRS-PROJECTION-CONSISTENCY-01` should normally extend BI-0001/BI-0003 rather than create duplicate infrastructure.
- `P-CONTROLM-WORKLOAD-MODERNIZATION-01` only after Issue #9 identifies a representative low-risk malla and its real dependencies.
- BI-0002 protocol/channel synchronization research remains downstream of sufficient BI-0001/BI-0003 semantic and channel evidence.

## Handoff rule

Before handing a READY prompt to Devin, Work must:
1. refresh repository baseline;
2. confirm active direction;
3. inspect active workstreams/shared surfaces;
4. apply latest impact assessment;
5. refresh Session Context Pack;
6. classify blocker/research state;
7. identify standards/gates/evidence expectations;
8. identify information-classification/provider-projection implications;
9. identify analytical/read-model/Arc42 implications;
10. identify current institutional platform/archetype/pipeline reuse obligations;
11. identify external/institutional artifact requirements when applicable;
12. for web/channel work, identify session/binding/browser-storage and channel-contract constraints;
13. for gateway/IAM work, identify API Connect vs gateway vs IdP/resource-server authority and risk/revocation semantics;
14. for data projections, identify source authority, freshness, version/change and reconciliation semantics;
15. for job work, identify scheduler/orchestrator vs job implementation and current Control-M dependencies;
16. decide whether prompt remains READY, needs boundaries, must wait or is superseded.

Do not invent timestamps, execution state or Devin session references.
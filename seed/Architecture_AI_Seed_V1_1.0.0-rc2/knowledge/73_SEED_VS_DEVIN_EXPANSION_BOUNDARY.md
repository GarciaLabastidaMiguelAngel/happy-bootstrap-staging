# 73 — Seed vs Post-Handoff Expansion Boundary

## Control

| Field | Value |
|---|---|
| `artifact_id` | `HAPPY-KNOW-73` |
| `wave` | `P-WAVE-3D-01` |
| `status` | `DRAFT` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `implementation_authorized` | `NO` |

The Seed preserves identity, intent, authority, constraints and growth rules. It does not pre-implement every branch. Post-handoff expansion must follow the capability→requirement→decision→Spec→implementation→test→evidence contract.

## Boundary matrix

| Area | Seed must contain | Devin expands | Devin validates | Human decides | Source blocker |
|---|---|---|---|---|---|
| identity/North Star | project purpose, boundaries, Architecture AI vs Banking Platform | clarifications only when new scope appears | bootstrap understanding receipt | material mission change | `SER-001` for exhaustive history |
| Architectural DNA | invariants, statuses, frozen/open distinctions, authority/evidence rules | derived implementation rules with traceability | no silent drift/reopening | new or conflicting invariant | `SER-001/011/012` for complete no-loss |
| capability map | stable capability IDs, state/target/dependencies/gaps | requirements and detailed designs for eligible capabilities | actual availability and dependency evidence | priority ties only when policy/authority cannot resolve | `SER-002/004/005/007/010` |
| Work/Question lifecycle | Specs 0009/0010, schemas, autonomy/escalation rules | runtime orchestration/adapters | lifecycle conformance, receipts and restart | irreducible authority conflict | repo/runtime sources |
| Planning/Sprint | known boundary and relationship to Work Model | full planning model only after recovery | backlog/dependency/capacity behavior | unresolved governance choices | `SER-010` |
| Java/Spring | current reported Java 21 direction, LTS evolution and modularity constraints | code/module implementation and upgrade plan | actual JDK, wrappers, build/tests | exception to approved baseline | `SER-002/006/007/011` |
| Graph | objective, constraints, open decision state and research obligations | benchmark/adapter/implementation after gate | code/config/data/performance | final irreducible engine decision | `SER-008` |
| MCP | official-protocol requirement, interaction boundary, conformance obligation | adapters/transports/tool exposure | existing WebSocket implementation vs official MCP | unresolved trust/authority policy | `SER-002/004/017-RO` |
| Skills/Tools | candidates, usage rules, capability resolution and exact-catalog warning | concrete manifests/versions after discovery | 16/30 reported inventories and permissions | novel privileged capability | `SER-004/005` |
| context/RAG/knowledge | promotion, ingestion, projection and Work Package contracts | retrieval/index adapters and operating thresholds | source permissions, freshness, relevance and evidence | institutional source authority | `SER-002/007` |
| Loop Engineering | objective/progress/evidence/governance model and known loop families | detailed process/case/decision execution | no blind retries; measurable exit/escalation | policy boundary changes | `RO-3C-001` |
| Harness/evaluation | purpose, evidence fidelity, regression/policy/evaluation requirements | fixtures, services and metrics | reproducibility and negative paths | acceptance-policy change | repo/test sources |
| agents/roles | known responsibilities and evolution rules; no fixed eternal taxonomy | implementations, split/merge/specialization proposals | permissions, tools, behavior and evidence | authority/segregation-of-duty change | `SER-002/004/005/007` |
| security/threats | cross-cutting constraints, no-policy invention, threat projection target | threat package and controls after standards/source research | enforcement and evidence | institutional risk acceptance | `SER-007`, `RO-3C-015` |
| Banking Platform MX | contextual evidence with status and country boundary | correlations after governed discovery | owners/APIs/runtime/topology/policy | institutional architecture/policy | `SER-007` |
| UX/localization | es-MX default direction, English technical canonical form, semantic invariance | journeys/content/accessibility/locales | persona and usability/accessibility evidence | authoritative terminology/policy | `RO-3C-013/014`, `SER-007` |
| deployment/OpenShift | local-first/current direction and future centralization target | deployable topology after source/requirements | runtime, networking, storage, resilience | target topology/policy exception | `SER-002/007` |
| observability/audit/cost | cross-cutting obligation and reuse-first direction | implementations and thresholds after evidence | telemetry, audit boundary, cost/capacity | corporate thresholds/retention | `SER-007`, ROs 010–012 |
| repository topology | staging/implementation boundary and repository separation assessment | implementation-repo mapping; extraction proposals | actual remote/branch/commit and ownership | repository boundary change | `SER-002` |
| evidence/state | allowed statuses, traceability, StateUpdateDelta and receipts | integrations and automated checks | code/test/runtime claims | exception to evidence policy | `SER-002/003/006` |
| organizational/domain model | authority boundary, non-intrusive direction, proposed comparison/federation lifecycle | discover actual domains/owners/workflows/capabilities and propose profiles | sources, permissions, local variants and relationships | ownership/authority/operating-model change | `SER-014` |
| federated Agents/Skills/Tools/services | identity/dedup/policy/evidence rules; no copy-to-core default | registry/adapters/integration after catalogs | capability availability, security, lifecycle and owner | shared promotion or privileged use | `SER-002/004/005/007/014` |
| deterministic maturity | routing/migration criteria and evidence boundary | observe candidates; design shadow/equivalence/rollback | quality, exceptions, security, ops, cost and reproducibility | automation/organizational promotion | execution/Harness evidence |
| Domain Context/UX | projection invariant and minimum applicable information | domain profiles/journeys/workspaces only after evidence | permissions, semantic/source fidelity, usability/accessibility | authoritative content/product priority | `RO-3C-013`, `SER-014` |
| knowledge geometry/assurance | Tree/Graph/Assurance/Loop roles, open standard obligations | standard fit, detailed models and tooling | no-loss, claim/evidence queries and interoperability | standard adoption or material model change | `RO-3E-001..003`, `SER-008/010` |
| governed Self-Model/projections | one governed model, authority/provenance/status rules and audience/context projection contract | Projection Manager, query/view compilation and permission-aware adapters | same-reality/multiple-audience fixture; no invented facts | authority/view policy exceptions | `SER-002/007/014`; implementation unobserved |
| deterministic assurance/fitness | no self-certification, claim→strategy→check→metric→evidence→promotion and L0–L7 acceptance lens | executable rules/tests/policies, metrics and receipts | repeatability, negative paths, machine-verifiable assertions | judgment/authority-only conclusions | `SER-002/006`, `RO-ACCEPT-001` |
| Self-Knowledge/Documentation milestone | governed answer/document/view acceptance contract and version/evidence requirements | View/Documentation Compiler and arc42/C4/CALM-compatible projections after fit research | FX-L/M outputs, links, versions, deterministic validation and delta | authoritative publication or exception | `SER-002`, `RO-3C-019`, `RO-ACCEPT-001` |
| Knowledge Ingestion milestone | ingestion/promotion/provenance contracts and discovered≠canonical invariant | adapters, extraction/reconciliation and affected-projection regeneration | FX-N plus restart equivalence, source/authority/evidence retention | promotion authority/policy exceptions | source-specific access; `SER-002/007/014` |
| executable frontier | dependency/eligibility semantics, blockers and evidence-driven recalculation | planner/scheduler and parallel dispatch after source recovery | FX-O/P; no blocked work scheduled; post-work recalculation | irreducible priority/authority conflict | `SER-002/003/006/010` |
| human value shift | strategic intent and transition questions | evidence-backed Domain Evolution Plan | role/authority/continuity impacts | every concrete organizational change | `SER-014` + applicable governance |
| post-handoff expansion | `EXP-3E-001..012`, gates and prohibitions | eligible research/Spec/code/test/evidence/state work | every receipt and state transition | irreducible Decision Package only | source-specific |
| capability/access/authority/readiness | semantic separation and DNA-CAN-018 | observed state machine and authorization enforcement | negative access≠authority and readiness-profile fixtures | institutional permission/adoption authority | `SER-002/007/009/014` |
| environments and delivery/ALM | source-neutral entity/relationship/authority model; reuse-first path | actual topology, adapters and delivery integration after discovery | identity/config/version/drift plus allowed-operation evidence | production access or delivery-policy exception | `SER-002/007/009/014` |
| cross-environment assurance | same-fixture/expected-variance acceptance contract | authorized runners, collectors and deterministic comparison | FX-R receipts and drift classification | access to each environment and material variance acceptance | actual environment sources/access |
| adoption readiness | profile-specific Claim/Argument/Evidence contract | builder/pilot/architect/Chief/domain/federation criteria and evaluators | FX-S plus usability/security/ops/restart evidence | rollout/adoption/risk acceptance | owner/authority sources + implementation evidence |
| multi-architect work | Work Graph allocation principles and active-frontier boundary | collaboration/isolation/review/merge mechanisms after organizational discovery | FX-T, conflict and recovery receipts | staffing/ownership/priority and collaboration policy | `SER-002/010/014` |
| portfolio steering/cognitive load | intent→impact→frontier contract and relevant-work projection target | product UX and demand/backlog controls | role-based usability and no-unnecessary-escalation evidence | strategic priority/scope and UX acceptance | `RO-3C-013`, user evidence |

## Expansion rules

1. Search existing identity, capability, decision, invariant, rejected alternative and standard before creating a Spec.
2. Prefer extension or a standards profile; create a new stable Spec only for an independently governed contract.
3. Do not make blocked work eligible merely because an LLM can speculate.
4. Human interaction is the exception path and requires a complete Decision Package.
5. Every accepted change updates state, evidence, relationships, manifest and next-work eligibility.
6. Domain discovery never transfers authority; central/local knowledge reconcile bidirectionally through evidence and promotion.
7. Repetitive agentic behavior is only a deterministic candidate until Harness/shadow/owner approval.
8. `AGENT != CAPABILITY`: select service/rule/validator/job/workflow/Skill/Tool/Agent/hybrid/human realization from the capability need and evidence.
9. An LLM may reason or propose but may not self-certify a material claim; use deterministic substantiation wherever technically possible.
10. Keep canonical semantics separate from view selection and layout/rendering; a difficult diagram never authorizes changing truth.
11. Never infer permission or adoption readiness from discovery, availability, configuration, credentials or implementation; validate the applicable authority and readiness profile.
12. Discover and reuse institutional delivery mechanisms before extending them; direct platform access cannot bypass ALM/pipeline/policy controls.

## Explicitly deferred from Work

- full Planning/Sprint, final Graph ADR, exact Tool/Skill catalogs, definitive MCP/Event/Storage/OpenShift models;
- implementation, runtime verification and institutional banking policies;
- any numbered Devin prompt sequence.
- organizational taxonomy/operating model, Domain Workspaces/Agents/Skills/Tools or deterministic validators;
- HTN/ToT/GoT, ISO 42010, SACM/GSN or federated-governance adoption without Research Obligation evidence.
- adoption of ArchUnit, Structurizr, docToolchain, Testcontainers, OpenRewrite, policy-as-code or generation tooling before `RO-ACCEPT-001` and repository evidence.

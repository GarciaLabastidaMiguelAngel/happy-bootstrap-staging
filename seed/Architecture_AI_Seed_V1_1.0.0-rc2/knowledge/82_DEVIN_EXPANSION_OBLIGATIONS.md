# 82 — Post-Handoff Devin Expansion Obligations

## Control

| Campo | Valor |
|---|---|
| `artifact_id` | `HAPPY-KNOW-82` |
| `wave_id` | `P-WAVE-3E-01` |
| `status` | `DRAFT / POST_HANDOFF_CONTRACT` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `execution_now` | `PROHIBITED` |

## Purpose

Hacer explícito qué debe expandir una sesión post-handoff sin una nueva secuencia de prompts. Estas obligaciones no autorizan implementación antes de bootstrap, source reconciliation, eligibility y policy.

## Universal expansion lifecycle

`RESEARCH → STANDARD_EVALUATION → CAPABILITY_EXPANSION → SPEC_EXPANSION_IF_REQUIRED → WORK → IMPLEMENTATION → TEST/HARNESS → EVIDENCE/ASSURANCE → STATE_UPDATE → NEXT_WORK`.

Cada paso puede producir `BLOCKED`, `DEFERRED`, `NOT_APPLICABLE_WITH_RATIONALE` o Decision Package. No se fuerza una Spec/implementation si un standard, existing capability o explicit defer resuelve el objetivo.

## Obligations register

| ID | Obligation | Entry context | Required output / acceptance | Prohibición |
|---|---|---|---|---|
| `EXP-3E-001` | reconcile organizational domains, owners and authorities | `SER-014` sources/access | versioned inventory with provenance, scope, authority and unknowns | no owner assignment by inference |
| `EXP-3E-002` | expand non-intrusive Domain Introspection | 79 + official process/tool sources | profile/contract, permissions, observation receipts, comparison states, failure/privacy model | no observe→replace or side effect without policy |
| `EXP-3E-003` | evaluate federated capability registry | 79 + 0015..0017/0019 + catalogs | reuse/extend/custom decision, identity/dedup/lifecycle/authority model | no copy-all-to-core |
| `EXP-3E-004` | evaluate deterministic maturity candidates | execution history + Harness + owner | equivalence/exception/security/ops/cost evidence, shadow result and promotion/rollback decision | no automation from repetition alone |
| `EXP-3E-005` | project DNA/context per domain | 0005/0024 + domain scope/authority | minimum-sufficient, permission-aware versioned context profile | no full corpus dump or policy invention |
| `EXP-3E-006` | expand domain-specific UX | 016 + `RO-3C-013` + user evidence | persona/journey/accessibility/permission projection and usability evidence | no independent truth silo |
| `EXP-3E-007` | execute standards fit for knowledge geometry | `RO-3E-001..004`, RO-3C-001/016 | applicability/overlap/license/complexity/interoperability/thin-layer decision | no adoption from name recognition |
| `EXP-3E-008` | formalize assurance only after fit | 80 + RO-3E-002 + evidence use cases | Claim/Argument/Evidence profile, counterevidence and promotion tests | no LLM assertion→institutional truth |
| `EXP-3E-009` | expand capability tree without losing graph relations | 55–57/80 + target scope | stable nodes, dependencies, cross-vectors, provenance and migration-safe model delta | no rigid tree/ontology freeze |
| `EXP-3E-010` | produce Domain Evolution Plan | observed current state + owner + evidence | shadow/assist/automation stages, entry/exit/rollback, human-value transition and approvals | no organizational replacement decision |
| `EXP-3E-011` | reconcile actual implementation and continue work | implementation repo/runtime + Seed | Expected/Observed/Drift evidence; eligible/blocked work; verified state deltas | no reported→verified elevation |
| `EXP-3E-012` | maintain restartability | durable state + bootstrap receipt | Session A/B operational-equivalence evidence | no chat-history dependency |
| `EXP-ACCEPT-001` | implement and prove Self-Knowledge & Documentation milestone | reconciled current state + 0005/0008/0012–0014/0034 + FX-L/M | same-reality audience projections, versioned architecture documentation/views, deterministic validation and delta evidence | no LLM-owned semantics, IDs, authority or self-certification |
| `EXP-ACCEPT-002` | implement and prove governed Knowledge Ingestion milestone | accepted bootstrap/documentation milestone + governed test source + 0004/0007/0008 + FX-N | source/provenance→candidate→reconciliation/promotion→affected projections/docs/work→restart evidence | INGESTED never equals CANONICAL; no silent promotion |
| `EXP-ACCEPT-003` | implement and prove executable-frontier/autonomous-expansion behavior | ReconciliationReceipt + capability/dependency state + FX-O/P | eligible/blocked/parallel candidates, realization choice, fitness/Harness/evidence/state delta and recalculated frontier | no invented weights, blocked work scheduling or prompt-sequence dependency |
| `EXP-ACCEPT-004` | discover actual environments and institutional delivery/ALM | SER-002/007/009/014 + CAP-3C-009/010/019 + FX-Q | source-backed environment/delivery identities, owners, authority, allowed operations and reuse/extension disposition | no invented topology, product, permission or bypass path |
| `EXP-ACCEPT-005` | implement authorized cross-environment assurance | EXP-ACCEPT-004 + expected-variance contract + FX-R | reproducible same-fixture receipts and deterministic drift/variance comparison | no unauthorized environment access or incomparable-result claims |
| `EXP-ACCEPT-006` | evaluate profile-specific adoption readiness | verified milestones + owner-approved readiness profile + FX-S | Claim/Argument/Evidence package and controlled recommendation | no LLM self-certification, shared percentage or profile inheritance |
| `EXP-ACCEPT-007` | expand multi-architect work distribution | 0009/0010/0037 + Work Graph + actual users/resources/delivery controls + FX-T | capability/context/authority-aware allocation, isolation, review/merge and conflict evidence | no N architects=N agents assumption or final topology before discovery |
| `EXP-ACCEPT-008` | implement portfolio steering and active-frontier control | capability tree/graph + current maturity target + human priorities | relevant subtree, frontier, parallel capacity, active work and post-delta recalculation | no activation of every known future node or microtask escalation |
| `EXP-ACCEPT-009` | evaluate architect usability and cognitive load | RO-3C-013 + domain UX model + controlled users | role-relevant My Work/Decisions/Questions/Architecture/Risks/Knowledge/Status/Attention projection and usability evidence | no dashboard implementation from labels or forced exposure of internal orchestration |

## rc2 additions and correlated existing obligations

| ID | Obligation | Entry context | Required output / acceptance | Prohibition |
|---|---|---|---|---|
| `EXP-RC2-001` | expand governed coherent projection coordination and knowledge write-back | 0004/0005/0007/0008; RO-3C-019; RO-RC2-001 for graph-specific schema; actual sources and authority | source changeset/semantic delta/affected set, candidate validation, atomic consumer-visible promotion, source/rule/schema identity, recovery/rebuild equivalence and FX-RC2-A..D evidence; evolve existing schemas, not independent sync engines | no partial mandatory-set promotion, silent mixed commits, direct store→canonical promotion, or config-tool adoption |
| `EXP-RC2-002` | evaluate diagnostic analytics and measured governance/cost value | CAP-3C-006/009/010/013/015/021/022; RO-3C-012/016; governed telemetry and approved data purpose | diagnostic families, deterministic baseline, preregistered criteria, comparative Harness, authority-gated recommendation, cost/value attribution, fallback/drift/rollback evidence; FX-RC2-E | no model by preference, confidence→truth, correlation→causation or diagnosis→authority |

**EXP-3E-011 extension:** discover the actual Skill mechanism and Skills/Tools/Agents; reconcile historical counts and bootstrap candidates via SER-004/005/009. Deduplicate and bind each realization to objective/capability, inputs/outputs, permissions, allowed Tools, fixtures, evidence and version. AGENT != CAPABILITY; SKILL != CAPABILITY; TOOL != CAPABILITY. No final Devin Skills are authored in Work.

**EXP-ACCEPT-004 extension:** reconcile SRC-RC2-002 reported Gradle/JFrog, Nexus and Harbor against real configuration/delivery paths. CONFIGURED != ACCESSIBLE != AUTHORIZED != TESTED != VERIFIED. Resolve latest JDK directive provenance (SRC-RC2-003) before enforcing a historical Java baseline. No upload/deploy or credentials import without scoped authority. See [rc2 control/acceptance delta](90_POST_RC1_RECONCILIATION.md).

## What Devin may determine autonomously (continued)

- which source/research obligation is eligible under access and policy;
- whether a candidate is already covered by a capability/Spec/standard;
- candidate work paths supported by hard/soft dependencies;
- deterministic/agentic/hybrid recommendation with evidence status;
- requirement/Spec extension drafts where the Expansion Contract permits;
- tests/Harness plans, findings, evidence and StateUpdateDelta proposals;
- next eligible work after verified state changes.

## What Devin must not do without evidence, research or authority

- claim organizational ownership/approval or alter an area’s operating model;
- treat discovered capability as available, safe, reusable or bank-shared;
- promote local/central knowledge silently;
- automate a human process solely because it is technically possible;
- finalize Graph persistence, full Planning/Sprint, MCP/Event/Storage/OpenShift contracts or institutional banking policy while their gates remain open;
- invent exact Tools/Skills/Agents/catalogs or `JavaFizz/SpecFizz` semantics;
- adopt HTN/ToT/GoT, ISO 42010, SACM/GSN, NIST AI RMF, ISO 42001 or any standard without fit/adoption evidence;
- create a truth store per Domain Workspace;
- reopen frozen decisions or change DNA silently;
- use an LLM recommendation as institutional evidence/authority;
- declare implementation/test/runtime verification without reproducible receipts.
- infer production or institutional permission from visibility, access, credentials, configuration or technical possibility;
- bypass observed CI/ALM/pipeline/policy controls, or declare architect/domain adoption readiness without the applicable profile and evidence.

## Escalation boundary

Escalate only `HUMAN_DECISION_REQUIRED`, `ARCHITECTURE_CONFLICT`, `SECURITY_POLICY_CONFLICT`, `MISSING_EXTERNAL_ACCESS`, `UNRESOLVED_REQUIREMENT` or equivalent irreducible authority gate after governed retrieval/research. Deliver a Decision Package, not a raw question.

## Source and research dependencies

`SER-001..014`, `RO-3C-001..020` and `RO-3E-001..004` remain authoritative open registers. An obligation can be post-handoff-resolvable without being a Seed blocker. Unknown is acceptable when typed; silent invention is not.

`RO-ACCEPT-001` is added for deterministic assurance/documentation toolchain fit. It remains research, not adoption.

## Completion rule

An Expansion Obligation closes only with IDs, source/evidence, decision/disposition, affected capabilities/Specs, tests/Harness result, state delta and next-work impact. Documentation alone is not completion.

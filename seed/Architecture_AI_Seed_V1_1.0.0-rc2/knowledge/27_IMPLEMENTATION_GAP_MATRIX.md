# 27 — Implementation Gap Matrix

## Interpretation

La matriz compara spec esperada contra implementación **observada o reportada**. `UNKNOWN` no significa inexistente; significa que el repositorio/evidencia no está disponible en este Work.

| Spec | Expected | Observed/reported | Code | Tests | Runtime | Gap / next evidence |
|---|---|---|---|---|---|---|
| 0001 Institutional Context | bootstrap global/country/capabilities | Diseño formal | UNKNOWN | NOT_OBSERVED | NOT_OBSERVED | schema, loader, fixtures, queries |
| 0002 Cross-Vector Analysis | deterministic+agentic vector coverage | Diseño formal | UNKNOWN | NOT_OBSERVED | NOT_OBSERVED | rules, findings schema, golden bank cases |
| 0003 Desktop/Handoff | sidebar/status/event/task/taskId handoff | Static partial POC reported | PARTIAL_REPORTED | NOT_EXECUTED | NOT_VERIFIED | capability spike and session/API evidence |
| 0004 Canonical Promotion | candidate→review→Git→projection | Formal spec/schema/state diagram; no implementation evidence | UNKNOWN | TEST_DESIGNED | NOT_OBSERVED | service/ports/policy/commit mapping + execution |
| 0005 Context/AWP | authorized hybrid retrieval + immutable package | Formal spec/schema/flow; Context Resolution partial reported | PARTIAL_REPORTED | TEST_DESIGNED | NOT_VERIFIED | exact DTO/handlers/fixtures/golden queries |
| 0006 Tool Policy | PEP/PDP/approval and obligations | Formal spec/schema/flow; code not observed | UNKNOWN | TEST_DESIGNED | NOT_OBSERVED | policy engine, real tool catalog and negative execution |
| 0007 Ingestion | parse/classify/reconcile/quarantine/idempotency | Formal spec/schemas/state diagram; parser libraries reported | PARTIAL_OR_UNKNOWN | TEST_DESIGNED | NOT_VERIFIED | pipeline mapping and Golden Documents execution |
| 0008 Projection Manager | states/readiness/incremental/rebuild | Formal spec/schema/state diagram; implemented reported | IMPLEMENTED_REPORTED | TEST_DESIGNED | NOT_VERIFIED | crash/rebuild/freshness evidence |
| 0009 Task lifecycle | durable task/delegation/state/evidence + Work/Session continuity | Formal v0.2 spec + conceptual Work/Session metamodel + existing schemas/diagrams; concepts/store reported | UNKNOWN | TEST_DESIGNED | NOT_VERIFIED | SER-002/009/012 entity/repository/API/session/checkpoint/resume mapping and execution evidence |
| 0010 Question lifecycle | classify/route/assure/escalate/outcome | Formal spec + question/event/state schemas + diagrams | UNKNOWN | TEST_DESIGNED | NOT_OBSERVED | SER-002 service/store/API/event mapping and executed state/routing tests |
| 0011 Demand triage | justified outcome classification | Design in Prompt 00 | UNKNOWN | NOT_OBSERVED | NOT_OBSERVED | decision table/evaluation |
| 0012 Git/concurrency | fetch/overlap/task/branch/PR | JGit dependency reported | PARTIAL_OR_UNKNOWN | NOT_OBSERVED | NOT_VERIFIED | actual workflows/conflict detection |
| 0013 Solution/Impact | versioned solution and impact manifest | Detailed design | UNKNOWN | NOT_OBSERVED | NOT_OBSERVED | schema/repository/UI mapping |
| 0014 Baseline lifecycle | immutable frozen baseline/tag/hash | Design; practice not validated | UNKNOWN | NOT_OBSERVED | NOT_OBSERVED | actual ARF/version policy |
| 0015 Agent contract | scoped workers + structured results | 16 skills reported | PARTIAL_OR_UNKNOWN | NOT_OBSERVED | NOT_VERIFIED | agent catalog and run evidence |
| 0016 Expertise routing | org/ownership/expertise/escalation | Design only | UNKNOWN | NOT_OBSERVED | NOT_OBSERVED | institutional directory and owners |
| 0017 Tool catalog | 30 versioned tools with schemas/policy | 30 tools reported; 12 names recovered | CODE_REPORTED | UNKNOWN | NOT_VERIFIED | full catalog, handlers, auth, tests |
| 0018 Scheduler/Attention | jobs/watches/misfire/events/notifications | Design; implementation unknown | UNKNOWN | UNKNOWN | NOT_VERIFIED | job definitions/receipts |
| 0019 Agentic→deterministic | classify recurring reasoning | Design only | UNKNOWN | NOT_OBSERVED | NOT_OBSERVED | telemetry and governance loop |
| 0020 Answer Assurance | support/conflict/abstention status | Design only | UNKNOWN | NOT_OBSERVED | NOT_OBSERVED | evaluator and golden answers |
| 0021 Technical Design Review | deterministic checks + Devin findings | Design only | UNKNOWN | NOT_OBSERVED | NOT_OBSERVED | review pipeline and examples |
| 0022 Architecture Tests | stable rule tests | 18 files overall reported | UNKNOWN | TEST_WRITTEN_REPORTED | NOT_EXECUTED | map every test to spec/rule |
| 0023 Document Processing | Tika/POI/PDFBox + Golden Set | Dependencies reported | PARTIAL_OR_UNKNOWN | UNKNOWN | NOT_VERIFIED | quality/latency/failure benchmark |
| 0024 Knowledge model | evidence/claim/candidate/canonical/provenance | Detailed design | PARTIAL_OR_UNKNOWN | NOT_OBSERVED | NOT_VERIFIED | code/schema/store mapping |
| 0025 Graph/projector | discovered/canonical, temporal, portable port | JanusGraph baseline reported | PARTIAL_REPORTED | UNKNOWN | NOT_VERIFIED | ADR, model, adapter contract suite |
| 0026 Storage roles | Git/SQLite/Infinispan/graph/artifacts/index | Dependencies reported | PARTIAL_REPORTED | UNKNOWN | NOT_VERIFIED | recovery, backup, outbox, ownership |
| 0027 Risk intelligence | risks/treatment/residual/acceptance | Documents/design | UNKNOWN | NOT_OBSERVED | NOT_OBSERVED | workflow, authority, evidence |
| 0028 Security architecture | identity/policy/data/supply chain/audit | Draft complete in Work | UNKNOWN | NOT_OBSERVED | NOT_OBSERVED | code, configuration, threat tests |
| 0029 Observability/cost | task-correlated metrics/traces/evals | Goals/metrics designed | UNKNOWN | NOT_OBSERVED | NOT_OBSERVED | instrumentation and dashboards |
| 0030 Install/update | role-aware local install, upgrade, rollback | Goal reported | UNKNOWN | NOT_OBSERVED | NOT_OBSERVED | recover detailed installer design |
| 0031 OpenShift evolution | compatible central services | Direction only | NOT_STARTED | NOT_OBSERVED | NOT_STARTED | triggers, topology, SLO/RTO/RPO |
| 0032 Connectors | discovery then governed adapters | APIs/permissions not validated | NOT_STARTED_OR_UNKNOWN | NOT_OBSERVED | NOT_VERIFIED | capability matrix |
| 0033 Regulatory trace | obligation→interpretation→control | Concept only | UNKNOWN | NOT_OBSERVED | NOT_OBSERVED | sources, owners, jurisdiction policy |
| 0034 Documentation/publication | Arc42/C4/Mermaid, PR, publish | Many documents; code unknown | PARTIAL_OR_UNKNOWN | NOT_OBSERVED | NOT_VERIFIED | publication adapter and reconciliation |
| 0035 MCP contract | tools/resources/version/auth/errors | 30 tools/WebSocket reported | CODE_REPORTED | UNKNOWN | NOT_VERIFIED | contract inventory and transport tests |
| 0036 Events | schemas/correlation/idempotency/outbox | Provisional domain envelope + 0009/0010 lifecycle schemas; final catalog not formalized | PARTIAL_OR_UNKNOWN | TEST_DESIGNED_FOR_LIFECYCLE_ONLY | NOT_VERIFIED | SER-002 producers/consumers/transport/topics/ordering/retry/delivery/outbox |
| 0037 Planning/Sprint | objective/scope/work items/dependencies/entry/exit/evidence | Boundary classified; historic model not observed | PARTIAL_OR_UNKNOWN | NOT_OBSERVED | NOT_VERIFIED | SER-010, entity/state model, Devin execution receipts |

## Banking examples

| Spec | Designed | Implementation evidence | Test evidence | Gap |
|---|---|---|---|---|
| BNK-0001 Context/capability | Initial model | Conversation-derived only | None | official catalogs/owners/current state |
| BNK-0002 Shared security | Components/flows recovered | Conversation-derived only | None | contracts, versions, support boundaries |
| BNK-0101 DTO Customer Position | Detailed | Not in current Work | None | full Arc42/spec/export and current implementation |
| BNK-0102 StarPass | Detailed | Not in current Work | None | current repo/DT/state/event contracts |
| BNK-0103 Change PIN | Detailed | Not in current Work | None | sequence/contracts/security evidence |
| BNK-0104 Cursor pagination | Detailed | Not in current Work | None | API schema/performance/PCI evidence |
| BNK-0105 SOS OIDC | Detailed | Not in current Work | None | exact endpoints/claims/security tests |
| BNK-0106 ISO 8583 TCP | Detailed | Not in current Work | None | pool/concurrency/reconnect/load tests |
| BNK-0107 Control-M OpenShift | Problem only | Not observed | None | final routing/design remains NOT_OBSERVED |

## Seed V1 operating capabilities

| Capability | Expected | Documentary state | Implementation/runtime | Validation | Gap |
|---|---|---|---|---|---|
| Seed bootstrap | clean session loads identity/DNA/capabilities/specs/state and emits receipt | model + skeletons DRAFT | NOT_OBSERVED | SEED-ACCEPT-001 NOT_EXECUTED | final root manifest/schema, SER-002/004/005/009 |
| current-state reconciliation | compare Seed vs repo/runtime and produce typed gaps | contract/trace DRAFT | BLOCKED_BY_SOURCE | TST-0039 NOT_EXECUTED | SER-002/003/006 |
| capability/dependency analysis | determine enabling paths and blockers | capability-level graph DRAFT | NOT_OBSERVED | TST-0038 NOT_EXECUTED | exact repo/runtime/capability graph and 0037 |
| autonomous next work | eligible/prioritized work without numbered prompt | eligibility model DRAFT; priority incomplete | NOT_OBSERVED | G5 PARTIAL | SER-004/005/010 and prioritization validation |
| Spec expansion | reuse/dedup/standard search before thin extension/new Spec | Expansion Contract DRAFT | NOT_OBSERVED | TST-0040 NOT_EXECUTED | 3D standards substitution and runtime workflow |
| governed human exception | exhaust recoverable knowledge/research then issue Decision Package | logical contract DRAFT | NOT_OBSERVED | TST-0041 NOT_EXECUTED | authority catalog/runtime routing |
| Harness/Loop | evaluate result/failure, evidence and next iteration without blind retry | target model DRAFT | NOT_OBSERVED | TST-0043/0045 designed | standards, metrics, fixtures, implementation |
| restart/resume | equivalent state/next work across clean sessions | 0009 v0.2 + target test | NOT_OBSERVED | TST-0034..0037 NOT_EXECUTED | durable stores/bootstrap runtime |
| staging/cutover | clone/ZIP Seed, immutable manifest, staging non-authoritative | transport model DRAFT | no Git access/sync | TST-0044 BLOCKED | SER-013 + final package/delivery receipt |

## Critical path

1. Repo + raw Devin baseline.
2. Java 21 build/test.
3. Tool/skill/endpoint/code inventory.
4. Seed root/manifest, bootstrap receipt and restart acceptance.
5. Specs 0004–0010 and 0035 mapping; 0036 remains provisional and 0037 only after SER-010.
6. Capability/dependency eligibility + Harness/evidence loop.
7. Local end-to-end flow.
8. Graph/storage ADR and recovery proof.
9. Desktop spike.

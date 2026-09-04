# 24 — Requirements Traceability

## Estados

- `DESIGN_COVERED`: existe decisión/spec suficiente.
- `REPORTED_IMPLEMENTED`: Devin reportó código, no inspeccionado aquí.
- `PARTIAL_REPORTED`: implementación reportada incompleta.
- `NOT_OBSERVED`: no existe evidencia de implementación.
- `TEST_WRITTEN_REPORTED`: existen tests según reporte, sin mapping/resultado.
- `NOT_TESTED`: no existe ejecución evidenciada.
- `BLOCKED`: una condición impide verificación.

## Requisitos funcionales

| Req | Requisito | Decisión | Spec(s) | Componente | Implementación observada/reportada | Test/evidencia | Gap |
|---|---|---|---|---|---|---|---|
| FR-001 | Work Package por tarea compleja | DEC-0004 | 0005, 0009 | Context Resolver / Work Package Builder | PARTIAL_REPORTED | No result observable | Schema y E2E |
| FR-002 | Resolver contexto desde Git/grafo/índices/evidencia | DEC-0003, 0008 | 0001, 0005, 0024, 0025 | Context/Knowledge/Graph | Context Resolution PARTIAL_REPORTED | No retrieval benchmark | Repo + golden queries |
| FR-003 | Distinguir discovered/inferred/validated/approved | DEC-0009 | 0004, 0024, 0025 | Knowledge/Reconciliation/Graph | Model concept documented; code UNKNOWN | No state transition tests | Verify persistence/invariants |
| FR-004 | Entidades, relaciones, evidencia, confidence y temporalidad | DEC-0003, 0009 | 0024, 0025 | Knowledge/Graph | JanusGraph code REPORTED | No graph corpus result | Inspect schema/queries |
| FR-005 | IDs estables e idempotencia | DEC-0009 | 0007, 0008, 0025, 0036 | Ingestion/Projection/Graph | UNKNOWN | TEST_WRITTEN_REPORTED only | Map and execute tests |
| FR-006 | Generar Arc42/C4/Mermaid | Native First | 0034 | Documenter/Publisher | 50+ docs REPORTED; current docs exist | Visual QA only on Work docs | Code/tool mapping |
| FR-007 | ADR, risks, questions, conflicts, decisions, acceptance | Human authority | 0010, 0014, 0027 | Governance | Documentation exists; service UNKNOWN | No lifecycle execution | Formal schemas and owners |
| FR-008 | Coordinar capacidades especializadas | DEC-0001 | 0015, 0016, 0017 | Devin coordinator + capability services | 16 skills REPORTED; identities absent | No run evidence | Recover exact agents/skills/tools |
| FR-009 | Promover canónico por Git/PR con audit | DEC-0003, 0009 | 0004, 0012, 0034 | Git Publisher | JGit REPORTED | No PR/commit flow evidence | E2E + approval |
| FR-010 | Proyección incremental y health | DEC-0003, 0006 | 0008, 0026 | Projection Manager | IMPLEMENTED_REPORTED; NOT_VERIFIED | Tests existence unknown by module | Crash/rebuild/freshness |
| FR-011 | Jobs de mantenimiento, stale, integrity, evaluation | DEC-0010 | 0018, 0029 | Scheduler/Attention | PARTIAL_OR_UNKNOWN | No execution receipts | Formal job registry/misfire tests |
| FR-012 | Tokens, latency, quality, sources, result por task | Cost as quality | 0029 | Observability/Evaluation | PARTIAL_OR_UNKNOWN | No dashboard/trace evidence | Metrics and privacy |
| FR-013 | Degradar explícitamente por source/capability | Fail explicitly | 0008, 0020 | Projection/Answer Assurance | States designed; runtime NOT_VERIFIED | No failure injection evidence | Resilience suite |
| FR-014 | Human review antes de promoción | DEC-0009 | 0004, 0006, 0027 | Promotion/Policy | NOT_OBSERVED | No approval replay/diff tests | Approval contract |
| FR-015 | Desktop conectado a backend/skills/tools | DEC-0004 | 0003, 0035 | Desktop Extension | STATIC POC REPORTED; unconnected | Spike NOT_EXECUTED/NOT_OBSERVED | Capability discovery + E2E |
| FR-016 | Derivar trabajo ejecutable y siguiente Work Item mediante estrategia, Sprint, Skills, gates y evidencia | DEC-0013, 0014, 0015, 0019 | 0005, 0009, 0015, 0017, 0019, 0022, 0029, 0037 | Planning/Sprint + Devin execution loop | Work Item lifecycle formalized in 0009; historic Sprint model NOT_OBSERVED | No autonomous-cycle execution evidence | Recover SER-010; formalize 0037; validate bootstrap Skills |
| FR-017 | Preservar Task/Work Item, ownership, delegación, transición y evidencia durante todo el lifecycle | DEC-0004, 0014, 0015 | 0005, 0006, 0009, 0015, 0022, 0029, 0036 | Architecture Task / Delegation / State Update | Formal DRAFT contracts; implementation mapping UNKNOWN | TST-0027/0028/0031 designed; not executed | SER-002 entity/repository/API/event/test mapping |
| FR-018 | Resolver preguntas con routing, autoridad, assurance y escalamiento sin promover inferencias | DEC-0009, 0015 | 0004, 0007, 0010, 0016, 0020, 0036 | Architecture Question / Answer Assurance | Formal DRAFT contracts; implementation NOT_OBSERVED | TST-0029/0030/0031 designed; not executed | SER-002 runtime mapping; org/owner sources |
| FR-019 | Arrancar una sesión desde conocimiento clasificado y producir siguiente trabajo o escalamiento reproducible | DEC-0013, 0015, 0017 | 0005, 0006, 0009, 0010, 0015, 0017, 0029, 0037 | Bootstrap skeletons / receipt proposal | Four source-classified skeletons DRAFT; no runtime activation | Bootstrap consistency checks only | SER-002/004/005/009/010/012; final manifest |
| FR-020 | Preservar trabajo, responsabilidad y contexto operativo a través de Conversation/User/Agent/Devin sessions | DEC-0004, 0015, 0020 | 0005, 0009, 0010, 0014, 0036 | WorkSession / Checkpoint / ContextManifest / Resume / Handoff | 0009 v0.2 conceptual model; runtime NOT_OBSERVED | TST-0034..0037 designed | SER-002/009/012; standards/contract mapping |
| FR-021 | Bootstrap Seed V1 con North Star, DNA, current/target capabilities, dependencies, evolution and expansion rules | DEC-0013, 0020, 0023 | 0001, 0003–0010, 0014, 0019, 0024, 0029 | Seed V1 / bootstrap assets | Documentary model created; not executed | SEED-ACCEPT-001 designed | final manifest, repo/runtime and clean-session receipt |
| FR-022 | Derivar dependency-aware eligible work desde capability/current-state gaps | DEC-0014, 0015, 0020 | 0009, 0011, 0013, 0015, 0017, 0022, 0029, 0037 | Capability Graph / Planning | capability-level graph DRAFT; exact priority incomplete | TST-0038 designed | SER-002/004/005/010 and prioritization validation |
| FR-023 | Reconciliar Seed esperado contra implementation repository/runtime real | DEC-0011, 0013, 0020 | 0008, 0012–0014, 0021/0022/0026/0029 | Current-State Reconciliation | baseline derivative only; repo absent | TST-0039 designed | SER-002/003/006 |
| FR-024 | Expandir capability→requirement→decision→Spec→implementation→test→evidence sin duplicar | DEC-0008, 0011, 0019, 0020 | 0004, 0007, 0012–0014, 0019, 0021/0022/0024 | Spec Expansion Contract | Documentary contract DRAFT | TST-0040 designed | 3D standards/dedup; implementation later |
| FR-025 | Escalar sólo decisiones irreducibles con un Decision Package completo | DEC-0015, 0020 | 0006, 0009, 0010, 0016, 0020, 0027 | Decision Package / Question | logical model DRAFT; authority sources partial | TST-0041 designed | institutional owners and runtime enforcement |
| FR-026 | Evolucionar knowledge/capability/work models mediante evidence, impact, compatibility, migration and verification | DEC-0019, 0020 | 0004, 0007/0008, 0014, 0019, 0022, 0024/0025/0029 | Model Evolution | design created; no execution | TST-0042 designed | version/migration fixtures and authority |
| FR-027 | Enrutar capability como deterministic, Skill, Tool, service, agentic, hybrid o ML según necesidad/evidence | DEC-0001, 0008, 0019 | 0006, 0015, 0017, 0019, 0020/0022/0029/0035 | Capability Router / Harness | model DRAFT; catalogs unavailable | TST-0043 designed | SER-004/005; datasets/evaluation |
| FR-028 | Congelar prompts/waves como provenance no orquestadora después del cutover | DEC-0021 | 0009, 0014, 0037 | Prompt/Delta History / Operating Model | documentary cutover defined; not executed | static ledger check | final handoff receipt/cutover |
| FR-029 | Distribuir Seed por clone o ZIP sin remote obligatorio y separar staging de implementation repo | DEC-0022 | 0003, 0012, 0030 | Handoff Manifest / Transport | local package model; staging access blocked | TST-0044 designed | SER-002/013; final package |
| FR-030 | Comprobar standard/framework/corporate capability antes de custom implementation | DEC-0008, 0020 | 0001/0002, 0011, 0017, 0021/0022, 0032–0035 | Research/Reuse Gate | standards map + 20 RO DRAFT | TST-0045 designed | 3D research/adoption/corporate sources |
| FR-031 | Mantener visibilidad de known future intent y cross-cutting concerns sin exigir spec/implementation completa | DEC-0011, 0013, 0020, 0023 | catalog + 0001/0002/0019/0027–0034 | Known Intent / No-Loss model | observable 3C scope fully mapped; project completeness not provable | no-loss checklist/static validation | SER-001/007/011/012 |
| FR-032 | Orientar una sesión nueva desde una raíz compacta con precedencia de autoridad inequívoca | DEC-0024 | Seed root + 0004–0010 | README/BOOTSTRAP/HANDOFF_MANIFEST | ASSEMBLED_DRAFT | TST-0046 static validation | G3/G10 execution |
| FR-033 | Deduplicar Specs/capabilities/decisions/intenciones sin perder IDs, aliases, history or provenance | DEC-0025 | catalog/relationships + all Specs | Dedup disposition | STATIC_VALIDATED | TST-0047 | future source deltas may reveal conflicts |
| FR-034 | Evaluar standards/framework/corporate capability y limitar custom layer al gap demostrado | DEC-0008/0025 | 0021/0022/0035/0036/0037 candidates | Standards substitution register | RESEARCHED_NOT_ADOPTED | TST-0048 | RO-3C-001..020; institutional adoption sources |
| FR-035 | Distribuir una Seed íntegra por ZIP o Git con manifest, inventory y hashes no autocontenidos | DEC-0022/0026 | Seed transport | Handoff Manifest / Content Manifest / sidecar | ASSEMBLY_IN_PROGRESS | TST-0049/0050 | final archive and staging receipts |
| FR-036 | Preparar acceptance, escalation, expansion, restart and reconciliation fixtures before handoff | DEC-0023/0024 | 0009/0010 + Seed contract | FX-A..J / templates | DESIGNED_NOT_EXECUTED | TST-0051..0055 | Devin/repo/session execution |
| FR-037 | Preservar ownership/authority institucional al descubrir/modelar/federar capabilities | DEC-0001/0009/0015/0027 | 0001/0004–0007/0016/0024/0027 | Federated authority boundary | DOCUMENTARY_DESIGN | TST-0056/0057 designed | SER-014; runtime/policy enforcement |
| FR-038 | Ejecutar introspección de dominio inicialmente no intrusiva y distinguir variante válida, gap, duplicate, conflict y unknown | DEC-0027 | 0005/0006/0007/0010/0021/0032 | Domain Introspection Profile candidate | TARGET_DRAFT | TST-0057/0058 designed | SER-002/004/007/009/014 |
| FR-039 | Registrar/correlacionar capabilities locales (Agents/Skills/Tools/services/rules/harnesses) sin copiarlas automáticamente al core | DEC-0008/0025/0027 | 0015–0017/0019/0024 | Federated Capability Registry candidate | TARGET_DRAFT | TST-0059 designed | exact catalogs + RO-3E-004 |
| FR-040 | Proyectar DNA/context/UX por dominio desde el mismo modelo gobernado | DEC-0003/0004/0027 | 0003/0005/0008/0024/0034 | Domain Context + UX Projection | TARGET_DRAFT | TST-0060 designed | personas/permissions/SER-014 |
| FR-041 | Evaluar forma manual/assisted/agentic/hybrid/deterministic y promover automatización sólo con Harness/evidence/authority | DEC-0019/0027; FD-006 | 0006/0015/0017/0019/0020/0022/0029 | Deterministic Maturity model | DESIGN_DRAFT | TST-0061 designed | execution history, shadow, owner |
| FR-042 | Descomponer por Tree, relacionar por Graph, asegurar claims y evolucionar mediante Loops sin fijar motor/framework | DEC-0018/0019/0025 | 0004/0009/0010/0018/0019/0020/0024/0025/0029/0037 | Knowledge Geometry synthesis | DERIVED_DOCUMENTARY | TST-0062 designed | RO-3E-001..003; SER-008/010 |
| FR-043 | Hacer root-discoverable el backlog de Expansion Obligations post-handoff | DEC-0020/0021/0024 | Expansion Contract + all affected Specs | EXP-3E-001..012 | DOCUMENTARY_ASSEMBLED | TST-0063 designed | acceptance against clean session |
| FR-044 | Proyectar una realidad gobernada por audiencia, intención, autoridad, layer/vector y objetivo sin crear silos | DEC-0003/0020/0024/0027 | 0005/0008/0024/0025/0034 | Governed Self-Model + Projection Manager | DESIGN_COVERED; implementation NOT_OBSERVED | TST-0065 designed | SER-002/007/014; projection runtime |
| FR-045 | Vincular Claims materiales con estrategia, checks/fitness, métricas, evidencia y promoción | DEC-0009/0013/0019 | 0004/0020/0022/0024/0029 | Deterministic Assurance | DESIGN_COVERED; toolchain unselected | TST-0066/0067 designed | SER-002/006 + RO-ACCEPT-001 |
| FR-046 | Explicar y documentar Architecture AI desde conocimiento gobernado con views reproducibles/versionadas | DEC-0003/0020/0024 | 0005/0008/0012/0014/0034 | Self-Knowledge + View/Documentation Compiler target | TARGET_DRAFT; not implemented | TST-0068/0069 designed | EXP-ACCEPT-001 + repo/tool fit |
| FR-047 | Incorporar conocimiento nuevo preservando source/provenance/authority/status y regenerar sólo proyecciones afectadas | DEC-0003/0009/0019 | 0004/0007/0008/0024/0025 | Governed Ingestion + Reconciliation | Contracts DRAFT; E2E NOT_OBSERVED | TST-0070/0071 designed | EXP-ACCEPT-002 + governed sources |
| FR-048 | Derivar un frontier ejecutable y paralelizar sólo trabajo independiente elegible | DEC-0014/0015/0020 | 0005/0006/0009/0022/0029/0037 | Dependency/Eligibility Planner target | SEMANTICS_DESIGNED; runtime absent | TST-0072 designed | SER-002/003/006/010 |
| FR-049 | Reconstruir facts, relationships, authority/evidence y siguiente trabajo tras clean restart sin replay conversacional | DEC-0004/0020/0023 | 0005/0008/0009/0010/0024 | Bootstrap + durable state | DESIGN_COVERED; NOT_EXECUTED | TST-0073 designed | clean Session A/B executor and state |
| FR-050 | Seleccionar realization deterministic/service/rule/workflow/Skill/Tool/Agent/hybrid/human desde la capability | DEC-0001/0008/0019 | 0015/0017/0019/0020/0022/0029 | Capability realization decision | DERIVED_RULE; catalogs/runtime absent | TST-0074 designed | SER-002/004/005 + evidence |
| FR-051 | Preservar el lifecycle del objetivo original durante expansión, merge, defer, reject o supersession | DEC-0011/0019/0020 | 0009/0014/0024 | Objective/Capability state | DOCUMENTARY_DESIGN | TST-0065/0072 | runtime state model and migration evidence |
| FR-052 | Mantener separados capability, access, authority, readiness y adoption | DEC-0009/0015/0027 | 0006/0009/0010/0024/0028 | Authority/Readiness state model | SEMANTICS_COVERED; enforcement unobserved | TST-0075 | SER-002/007/009/014 |
| FR-053 | Descubrir environments y delivery/ALM institucional antes de proponer mecanismos o mutaciones | DEC-0008/0015/0027 | 0001/0006/0011/0013/0014/0026/0031 | Environment/Delivery discovery | TARGET_DRAFT; topology unknown | TST-0076 | EXP-ACCEPT-004; SER-002/007/014 |
| FR-054 | Comparar el mismo fixture entre environments autorizados con expected variance explícita | DEC-0009/0019 | 0020–0023/0029 | Cross-environment assurance | FIXTURE_DESIGNED | TST-0077 | EXP-ACCEPT-005 + environment access |
| FR-055 | Evaluar adoption readiness mediante perfiles y Claim/Argument/Evidence | DEC-0009/0013/0027 | 0006/0020/0024/0028/0029 | Adoption Readiness profile | DESIGN_DRAFT | TST-0078 | EXP-ACCEPT-006 + owner-approved profile |
| FR-056 | Distribuir trabajo multi-arquitecto desde Work Graph, capability/context/ownership/authority/resources | DEC-0015/0020/0027 | 0005/0006/0009/0010/0029/0037 | Work allocation target | TARGET_DRAFT | TST-0079 | SER-002/010/014 |
| FR-057 | Mantener known future fuera de Active Work salvo current target, relevant subtree y eligibility | DEC-0011/0015/0020 | 0009/0010/0037 | Active Frontier control | SEMANTICS_DESIGNED | TST-0080 | planner/runtime evidence |
| FR-058 | Traducir intención humana en impact/capability/spec/work/evidence sin microtask escalation | DEC-0015/0020/0027 | 0009/0010/0024/0037 | Portfolio steering | TARGET_DRAFT | TST-0080 | priorities/authority model |
| FR-059 | Proyectar UX de arquitecto con mínima carga cognitiva desde un modelo común | DEC-0003/0027 | 0003/0005/0008/0024/0034 | Architect UX projection | TARGET_DRAFT | TST-0081 | RO-3C-013 + user evidence |
| FR-060 | Conservar placement semantics separados de mappings concretos Git/runtime/store hasta observarlos | DEC-0003/0008/0027 | 0004/0007/0013/0014/0024/0026 | Placement reconciliation | DERIVED_MODEL | TST-0082 | SER-002/007 |

## Requisitos no funcionales

| Req | Requisito | Decisión / spec | Estado | Evidencia | Gap |
|---|---|---|---|---|---|
| NFR-001 | Java 21 + Spring Boot baseline | DEC-0007; specs 0023/0030/0035 | BLOCKED in captured run | Devin report detectó Java 8; project requires 21 | Pin toolchain, build log |
| NFR-002 | Operación local sin servicios externos obligatorios | DEC-0002; 0026/0030 | DESIGN_COVERED; runtime unknown | Prompt 00 | Offline startup test |
| NFR-003 | MCP/API versionados y backward compatible | 0035 | DISCOVERED | 30 tools REPORTED | Exact schemas/version negotiation/tests |
| NFR-004 | Trazabilidad respuesta→evidence→commit | DEC-0003; 0005/0024/0029 | DESIGN_COVERED | Docs | Runtime provenance query |
| NFR-005 | Encryption, externalized secrets, least privilege, safe logs | 0006/0028 | DRAFT | Security docs; no runtime evidence | Threat tests, secret scan, policy engine |
| NFR-006 | Reinicio e idempotencia | 0008/0026/0036 | DESIGN_COVERED; NOT_VERIFIED | Baseline says tests written generally | Execute crash/recovery suite |
| NFR-007 | Logs/metrics/traces correlated by taskId | 0029 | DISCOVERED | No trace output observed | Instrumentation and redaction |
| NFR-008 | Unit/integration/contract/resilience/agentic evaluation | 0022/0023/0029 | TEST_WRITTEN_REPORTED; NOT_TESTED | 18 files/60+ cases estimated in Devin report | Java 21 and test report |
| NFR-009 | No canonical promotion without auth/evidence | DEC-0009; 0004/0006 | DRAFT | Design only | Negative E2E test |
| NFR-010 | Lifecycle changes are correlated, idempotent and optimistic-versioned | 0009/0010/0036 | DRAFT_CONTRACT; NOT_VERIFIED | Shared envelope/state delta schemas | Runtime store, concurrency, ordering and replay tests |
| NFR-011 | State updates never elevate design→implementation→verification without evidence | DEC-0011/0013; 0009/0010/0029 | DESIGN_COVERED; runtime unknown | Compiler and skeleton rules | Enforce in status writer and negative tests |
| NFR-012 | Work/session continuity survives process/session restart without hidden conversational memory | DEC-0004/0015/0020; 0009 | DESIGN_DRAFT; NOT_TESTED | Work & Session Metamodel | persistence/bootstrap/restart proof |
| NFR-013 | Seed bootstrap is reproducible and transport-independent | DEC-0022/0023; bootstrap/0030 | DESIGN_DRAFT; NOT_TESTED | clone/ZIP/cutover model | final package + two clean-session receipts |
| NFR-014 | Known intent and future direction are not silently lost during compression/expansion | DEC-0011/0020/0023; 0024/0034 | DOCUMENTARY_PARTIAL_HIGH | docs 52–63 | raw-chat/standards provenance and acceptance |
| NFR-015 | Autonomy is governed, bounded, observable and terminates/escalates deterministically | DEC-0015/0019; 0006/0009/0010/0018/0029 | DESIGN_DRAFT | autonomy/Loop/Harness model | runtime policy, budgets, progress/exit tests |
| NFR-016 | Capability completeness evaluates all applicable cross-cutting dimensions | 0002/0021/0022/0027–0029 | DESIGN_DRAFT | 21-dimension matrix | per-capability applicability and quality gate execution |
| NFR-017 | Public staging package excludes secrets, credentials, PAN and restricted payloads | DEC-0022; 0028/0030 | RULE_DEFINED; NOT_SCANNED_FOR_PUBLICATION | staging security model | public-safe scan/reviewer receipt |
| NFR-018 | Model evolution preserves compatibility, migration, history and rollback | DEC-0019/0020; 0004/0014/0024 | DESIGN_DRAFT | model evolution rules | migration/rollback fixtures |
| NFR-019 | Technology/infrastructure decisions use workload, total cost, operations, availability, security and future target evidence | DEC-0002/0008; 0026/0029–0032 | DESIGN_DRAFT | technology/infrastructure model | measurements/corporate capability/authority |
| NFR-020 | Prompt history and waves never become runtime orchestration dependencies | DEC-0021; 0009/0037 | DOCUMENTARY_RULE | cutover model | post-handoff acceptance execution |
| NFR-021 | Root documents remain small and link to one authoritative detailed home | DEC-0024 | STATIC_VALIDATED | root vs knowledge structure | future edits must run duplicate/link validation |
| NFR-022 | Package validation detects broken links/schema refs, duplicate IDs, stale/orphan assets and archive corruption | DEC-0026 | TOOLING_PREPARED | 3D validation script/report | final run and regression on every snapshot |
| NFR-023 | Bootstrap remains transport- and executor-independent; Devin-specific loader is an adapter | DEC-0020/0022/0024 | DESIGN_COVERED | root operating contract | test with clean consumer/session |
| NFR-024 | Organizational visibility never implies ownership, authority or permission | DEC-0027; 0006/0016/0027 | DESIGN_COVERED | DNA-CAN-017 / doc 79 | institutional catalog and negative enforcement tests |
| NFR-025 | Domain/central knowledge reconciliation preserves scope, local rationale, provenance and counterevidence | DEC-0003/0009/0019/0027; 0004/0007/0024 | DESIGN_DRAFT | docs 79/80 | source corpus and promotion runtime |
| NFR-026 | Automation maturity requires reproducible equivalence, exception, security, operational and rollback evidence | FD-006; 0019/0020/0022/0029 | DESIGN_DRAFT | docs 58/79/81 | Harness/shadow execution |
| NFR-027 | Domain UX/context remains a permission-aware projection, not a canonical silo | DEC-0003/0027; 0003/0005/0008/0034 | TARGET_DRAFT | docs 79/80 | personas/permissions/usability and projection tests |
| NFR-028 | LLM reasoning never self-certifies technically verifiable correctness | DEC-0009/0013; 0004/0020/0022/0029 | CANONICAL_RULE; execution unverified | DNA-CAN-009 / doc 75 | enforce via evidence/state writer and negative tests |
| NFR-029 | Canonical semantics, view selection and layout/rendering remain separate | DEC-0003/0020/0024; 0008/0024/0025/0034 | DESIGN_COVERED | docs 56/69/75 | projection round-trip and contradiction tests |
| NFR-030 | Audience projections derive from one governed reality and preserve authority/status/unknowns | DEC-0003/0027; 0005/0008/0024 | TARGET_DRAFT | FX-L | permission-aware execution |
| NFR-031 | Every machine-verifiable architectural rule should expose an executable fitness/evidence path or explicit non-automatable class | DEC-0019/0025; 0020/0022/0029 | DESIGN_DRAFT | L0–L7 assurance lens | repo/tool fit and execution |
| NFR-032 | Documentation outputs are reproducible, versioned, traceable and delta-aware | DEC-0003/0024/0026; 0012/0034 | TARGET_DRAFT | FX-M / EXP-ACCEPT-001 | compiler implementation and deterministic validation |
| NFR-033 | Ingested knowledge survives restart without losing source, authority, confidence or relations | DEC-0003/0009/0020; 0004/0007/0008/0024 | DESIGN_DRAFT | FX-N | storage/runtime and Session A/B execution |
| NFR-034 | Independent eligible work may run in parallel, but dependency/authority/evidence gates remain deterministic | DEC-0015/0020; 0006/0009/0029/0037 | DESIGN_DRAFT | executable frontier contract | planner/runtime evidence; SER-010 |
| NFR-035 | Visibility, reachability, credentials and configuration never imply mutation/deployment authority | DEC-0009/0015/0027; 0006/0028 | CANONICAL_RULE; unverified | DNA-CAN-018 / FX-Q | policy/tool enforcement and negative receipt |
| NFR-036 | Implemented or verified technical capability never implies user or organizational adoption readiness | DEC-0009/0013/0027; 0020/0029 | DERIVED_RULE | DNA-DER-016 / FX-S | profile-specific evidence and authority |
| NFR-037 | Cross-environment comparison uses the same versioned fixture, authorized targets and explicit expected variance | DEC-0009/0019; 0020–0023/0029 | DESIGN_DRAFT | FX-R | environment runners/evidence |
| NFR-038 | Existing institutional delivery/ALM is discovered and reused before custom duplication | DEC-0008/0025/0027; 0011/0013/0026 | TARGET_DRAFT | EXP-ACCEPT-004 | institutional source and fit assessment |
| NFR-039 | Readiness remains profile-specific and cannot be inherited across builder/architect/domain/federation levels | DEC-0009/0013/0027; 0020/0024/0029 | DESIGN_DRAFT | doc 75 / FX-S | executed evidence profiles |
| NFR-040 | Multi-architect parallel work preserves isolation, review, policy, conflicts and evidence | DEC-0015/0027; 0006/0009/0022/0029 | TARGET_DRAFT | FX-T | repo/delivery/organization sources |
| NFR-041 | Future intent remains traceable without consuming active attention until selected by governed frontier | DEC-0011/0020; 0009/0024/0037 | DESIGN_COVERED | docs 57/58/63 | planner execution |
| NFR-042 | Domain/user UX hides unnecessary internal orchestration while preserving governed status, authority and evidence | DEC-0003/0027; 0003/0005/0024/0034 | TARGET_DRAFT | EXP-ACCEPT-009 | usability research/execution |

## Trazas prioritarias end-to-end

### TRC-001 — Local-first context handoff

`FR-001 + FR-002 + NFR-002 → DEC-0002/0004 → SPEC-0003/0005/0026/0035 → Desktop + MCP + Context Resolver → PARTIAL_REPORTED → E2E NOT_EXECUTED → GAP`

### TRC-002 — Knowledge promotion

`FR-003/004/009/014 + NFR-004/009 → DEC-0003/0009 → SPEC-0004/0007/0024/0025 → Candidate + Promotion + Git + Projector → IMPLEMENTATION UNKNOWN → NEGATIVE TESTS ABSENT → GAP`

### TRC-003 — Recoverable projection

`FR-010/013 + NFR-006 → DEC-0003/0006 → SPEC-0008/0026 → Projection Manager + Infinispan → IMPLEMENTED_REPORTED_NOT_VERIFIED → CRASH/REBUILD RESULT ABSENT → GAP`

### TRC-004 — Secure tool action

`FR-014 + NFR-005/009 → DEC-0009 → SPEC-0006/0017/0028/0035 → PEP/PDP + MCP tool → NOT_OBSERVED → replay/injection/token tests absent → GAP`

### TRC-005 — Desktop usable flow

`FR-015 → DEC-0001/0004 → SPEC-0003/0005/0035 → Desktop sidebar→taskId→Work Package→Devin → STATIC POC_REPORTED → SPIKE/E2E ABSENT → GAP`

### TRC-006 — Governed autonomous work cycle

`FR-016 → DEC-0013/0014/0015/0019 → SPEC-0037/0009/0005/0015/0017/0022/0029 → current state→Sprint/Work Item→Skills/Tools→execution→test/evidence→updated state → DESIGN_BOUNDARY_COVERED → HISTORIC SPRINT MODEL + RUNTIME EVIDENCE ABSENT → GAP`

### TRC-007 — Durable Task and delegation

`FR-017 + NFR-010/011 → DEC-0004/0014/0015 → SPEC-0009/0005/0006/0015/0022/0029/0036 → ArchitectureTask + DelegationRecord + WorkLifecycleEvent + StateUpdateDelta → FORMAL_DRAFT → CODE/RUNTIME UNKNOWN → TST-0027/0028/0031 NOT_EXECUTED → GAP`

### TRC-008 — Governed question resolution

`FR-018 + NFR-010/011 → DEC-0009/0015 → SPEC-0010/0016/0020/0007/0004/0036 → ArchitectureQuestion + QuestionLifecycleEvent + StateUpdateDelta → FORMAL_DRAFT → IMPLEMENTATION NOT_OBSERVED → TST-0029/0030/0031 NOT_EXECUTED → GAP`

### TRC-009 — Bootstrap to next safe work

`FR-019 → DEC-0013/0015/0017 → bootstrap/AGENTS + BOOTSTRAP + CONTEXT_PACK + REPOSITORY_MAP → SOURCE_CLASSIFIED_SKELETONS → RUNTIME/REPO/SKILL/TOOL CONTRACTS BLOCKED → NO BOOTSTRAP RUN → GAP`

### TRC-010 — Seed V1 autonomous expansion

`FR-021/022/024/030/031 + NFR-014/016 → DEC-0008/0011/0013/0020/0023 → DNA + capability/dependency map + Expansion Contract + research obligations → DOCUMENTARY_DRAFT → CLEAN BOOTSTRAP/EXPANSION NOT_EXECUTED → GAP`

### TRC-011 — Cross-session continuity

`FR-020 + NFR-012/013 → DEC-0004/0015/0020/0022 → SPEC-0005/0009/0010 → WorkSession + ContextManifest + Checkpoint + Handoff + Resume → CONCEPTUAL_DRAFT → TST-0034..0037 NOT_EXECUTED → GAP`

### TRC-012 — Current-state reconciliation and next work

`FR-022/023 + NFR-013/015 → DEC-0013/0015/0023 → SPEC-0008/0009/0013/0014/0022/0029/0037 → Seed vs repo/runtime → gaps→eligible work → REPO/RUNTIME BLOCKED → TST-0038/0039 NOT_EXECUTED → GAP`

### TRC-013 — Governed human exception

`FR-025 + NFR-015 → DEC-0015/0020 → SPEC-0006/0009/0010/0016/0020/0027 → exhaustion of governed resolution → Decision Package → DESIGN_DRAFT → OWNER/RUNTIME NOT_VERIFIED → GAP`

### TRC-014 — Transport and cutover

`FR-028/029 + NFR-013/017/020 → DEC-0021/0022/0023 → staging + manifest + clone/ZIP + prompt/wave freeze → MODEL_DRAFT → STAGING_SYNC BLOCKED / CUTOVER NOT_EXECUTED → TST-0044 NOT_EXECUTED → GAP`

### TRC-015 — Seed root assembly and integrity

`FR-032/035 + NFR-021/022/023 → DEC-0024/0026 → root assets + manifest + inventory + content/package hashes → LOCAL_STATIC_VALIDATION → G11 candidate → clean-session/transport acceptance remains`

### TRC-016 — Deduplication and standards-first expansion

`FR-033/034 + FR-024/030 → DEC-0008/0025 → Spec disposition + standards substitution + thin custom layer → STATIC_VALIDATED / RESEARCH_NOT_ADOPTED → post-handoff expansion gate`

### TRC-017 — Acceptance preparation

`FR-036 + FR-019/022/023/025 + NFR-013/015/016 → DEC-0023/0024 → FX-A..J + escalation/expansion/reconciliation fixtures → DESIGNED_NOT_EXECUTED → G3/G4/G5/G7/G9/G10 evidence required`

### TRC-018 — Federated authority and domain introspection

`FR-037/038/039 + NFR-024/025 → DEC-0027 + DEC-0008/0009/0025 → SPEC-0001/0004–0007/0015–0017/0019/0024/0027/0032 → observe/model/reconcile/federate → DOCUMENTARY_DRAFT → SER-014/runtime evidence absent → TST-0056..0059 NOT_EXECUTED → GAP`

### TRC-019 — Deterministic maturity and human value

`FR-041 + NFR-026 → FD-006 + DEC-0019/0027 → SPEC-0015/0017/0019/0020/0022/0029 → candidate→Harness→shadow→evidence→authority→promotion/rollback → DESIGN_DRAFT → TST-0061 NOT_EXECUTED → GAP`

### TRC-020 — Knowledge geometry and assurance

`FR-042 + NFR-014/025 → DEC-0018/0019/0025 → TREE + GRAPH + CLAIM/ARGUMENT/EVIDENCE + LOOP over Specs 0004/0009/0010/0018/0019/0020/0024/0025/0029 → DERIVED_SYNTHESIS → RO-3E-001..003/SER-008/010 → TST-0062 NOT_EXECUTED → GAP`

### TRC-021 — Domain projections and post-handoff expansion

`FR-040/043 + NFR-023/024/027 → DEC-0020/0021/0024/0027 → Domain Context/UX + EXP-3E-001..012 → ROOT_DISCOVERABLE_DRAFT → clean-session acceptance absent → TST-0060/0063 NOT_EXECUTED → GAP`

### TRC-022 — Governed Self-Model and documentation

`FR-044/046/051 + NFR-029/030/032 → DEC-0003/0020/0024/0027 → SPEC-0005/0008/0012/0014/0024/0025/0034 → governed model→authorized projection→view/document→validation/version/evidence → TARGET_DRAFT → FX-L/M and TST-0065/0068/0069 NOT_EXECUTED → GAP`

### TRC-023 — Deterministic assurance and fitness

`FR-045/050 + NFR-028/031 → DNA-CAN-009/DNA-DER-015 + DEC-0008/0009/0019/0025 → SPEC-0004/0020/0022/0024/0029 → claim→verification strategy→fitness/check→metric→evidence→promotion → DESIGN_DRAFT → RO-ACCEPT-001 + SER-002/006 → TST-0066/0067/0074 NOT_EXECUTED → GAP`

### TRC-024 — Governed ingestion and restartable knowledge

`FR-047/049 + NFR-033 → DEC-0003/0004/0009/0020/0023 → SPEC-0004/0007/0008/0024/0025 → raw source→candidate→reconciliation→governed delta→affected projections→restart equivalence → CONTRACT_DRAFT → FX-N / TST-0070/0071/0073 NOT_EXECUTED → GAP`

### TRC-025 — Executable frontier and autonomous expansion

`FR-048/050/051 + NFR-034 → DEC-0014/0015/0019/0020 → SPEC-0005/0006/0009/0022/0029/0037 → objective tree + dependency graph + current state→eligible independent work→verification/evidence→recalculation → SEMANTICS_DESIGNED → SER-002/003/006/010 → FX-O/P / TST-0072/0074 NOT_EXECUTED → GAP`

### TRC-026 — Capability/access/authority and environment delivery

`FR-052/053/060 + NFR-035/038 → DEC-0008/0009/0015/0027 → SPEC-0006/0011/0013/0014/0026/0028 → observe environment/delivery→resolve authority→reuse/extend → TARGET_DRAFT → SER-002/007/009/014 → FX-Q / TST-0075/0076 NOT_EXECUTED → GAP`

### TRC-027 — Cross-environment deterministic assurance

`FR-054 + NFR-037 → DEC-0009/0019 → SPEC-0020..0023/0029 → same fixture + authorized environments + expected variance→comparison evidence → FIXTURE_DESIGNED → FX-R / TST-0077 NOT_EXECUTED → GAP`

### TRC-028 — Profile-specific adoption readiness

`FR-055/059 + NFR-036/039/042 → DEC-0003/0009/0013/0027 → SPEC-0003/0005/0006/0020/0024/0028/0029/0034 → profile criteria→Claim/Argument/Evidence→recommendation → DESIGN_DRAFT → FX-S / TST-0078/0081 NOT_EXECUTED → GAP`

### TRC-029 — Multi-architect portfolio frontier

`FR-056/057/058 + NFR-040/041 → DEC-0011/0015/0020/0027 → SPEC-0005/0006/0009/0010/0022/0029/0037 → current target→relevant subtree→frontier→allocation/isolation/review→state delta → TARGET_DRAFT → SER-002/010/014 → FX-T / TST-0079/0080 NOT_EXECUTED → GAP`

## Regla para actualización por Devin

Devin deberá sustituir `REPORTED_*` por `IMPLEMENTED` o `VERIFIED` únicamente con `repository path + symbol/config + reproducible command + test/result + evidence ID`. Un porcentaje global no cierra una traza.

## rc2 traceability delta

| Trace | Existing need / decision | Spec / obligation | Acceptance / evidence gap |
|---|---|---|---|
| TRC-RC2-001 | FR-009/010/011; DNA-CAN-003/005/009 | 0004/0005/0007/0008; EXP-RC2-001 | FX-RC2-A..D designed; repo/runtime evidence absent |
| TRC-RC2-002 | FR-042; model vs engine separation; SER-008 | 0025; RO-RC2-001 | GRAPH_MODELING_RESEARCH_RECEIPT required, not produced |
| TRC-RC2-003 | efficiency/AI governance; DNA-CAN-006/009 | CAP-3C-015/021/022; RO-3C-012/016; EXP-RC2-002 | FX-RC2-E designed; telemetry/dataset/Harness/authority absent |

Source and no-loss mapping: [HAPPY-KNOW-90](90_POST_RC1_RECONCILIATION.md). No implementation or test-result promotion.

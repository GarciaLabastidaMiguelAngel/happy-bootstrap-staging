# 22 — Specification Catalog

## Convenciones

- `status` describe madurez de la **spec**, no del código.
- `implementation_status` sólo refleja evidencia observada o reportada.
- `DISCOVERED` significa que existe contenido recuperable pero aún no está formalizado en un archivo canónico completo.
- `DRAFT` significa que existe una spec/documento de diseño editable.
- Ninguna spec está `APPROVED`, `IMPLEMENTED` o `VERIFIED` por defecto.
- Los IDs existentes `AAI-SPEC-0001..0003` se preservan. No se crean duplicados para sus subtemas.

## Catálogo Architecture AI

| Spec ID | Nombre | Dominio / tipo | Status | Profundidad recuperada | Implementation status | Fuente principal | Dependencias / relaciones | Acción pendiente |
|---|---|---|---|---|---|---|---|---|
| AAI-SPEC-0001 | Institutional Context Bootstrap | KNOWLEDGE / PROCESS | DRAFT | Formal | NOT_OBSERVED | Wave 1 Spec 0001 | 0002, 0005, BNK-0001 | Enriquecer schema y fixtures |
| AAI-SPEC-0002 | Cross-Vector Architecture Analysis | ARCHITECTURE / PROCESS | DRAFT | Formal | NOT_OBSERVED | Wave 1 Spec 0002 | 0021, 0027, BNK specs | Añadir rules/score/evidence |
| AAI-SPEC-0003 | Desktop Capability Discovery & Task Handoff | INTEGRATION / RUNTIME | DRAFT | Formal + detailed source | POC_REPORTED_PARTIAL; NOT_VERIFIED | Wave 1 Spec 0003 + Prompt 00 | 0005, 0017, 0032, 0037 | Ejecutar spike real; no duplicar |
| AAI-SPEC-0004 | Canonical Knowledge Promotion | KNOWLEDGE / PROCESS | DRAFT | Formal v0.1.0 + schema + state diagram | NOT_OBSERVED | Prompt 00; DOC-0501 | 0007, 0024, 0025, Git | Mapear implementación y ejecutar acceptance tests |
| AAI-SPEC-0005 | Context Resolver & Architecture Work Package | KNOWLEDGE / CONTRACT | DRAFT | Formal v0.1.0 + JSON Schema + flow | PARTIALLY_IMPLEMENTED_REPORTED; NOT_VERIFIED | Prompt 00; DOC-0503 | 0001, 0020, 0024, 0025, 0006 | Mapear repo y validar fixtures |
| AAI-SPEC-0006 | Tool Policy Enforcement & Approval | SECURITY / SERVICE | DRAFT | Formal v0.1.0 + decision schema + flow | NOT_OBSERVED | DOC-0601/0602 | 0017, 0037, identity/audit | Extraer tools reales y probar PEP/PDP |
| AAI-SPEC-0007 | Governed Context Ingestion & Reconciliation | KNOWLEDGE / PROCESS | DRAFT | Formal v0.1.0 + schemas + state diagram | PARTIAL_REPORTED; NOT_VERIFIED | Prompt 00; DOC-0501 | 0004, 0023, 0024, 0025 | Mapear parsers y ejecutar failure matrix |
| AAI-SPEC-0008 | Projection Manager, Readiness & Recovery | DATA / SERVICE | DRAFT | Formal v0.1.0 + status schema + state diagram | IMPLEMENTED_REPORTED; NOT_VERIFIED | Prompt 00; DOC-0307 | 0018, 0025, 0026, Git | Mapear código y ejecutar crash/rebuild tests |
| AAI-SPEC-0009 | Task, Delegation & Work Lifecycle | OPERATION / MODEL | DRAFT | Formal v0.2.0: lifecycle + Work & Session Metamodel; 5 schemas compartidos/subordinados + 3 diagrams | PARTIAL_OR_UNKNOWN; NOT_VERIFIED | Prompt 00; Agent Operating Model; DOC-0105; P-WAVE-3C-01 | 0005, 0006, 0010, 0014–0016, 0022, 0029, 0036, 0037 | Mapear entity/repository/API/events/tests desde SER-002; contratos session/checkpoint/handoff condicionados a 3D/SER; no inferir Sprint |
| AAI-SPEC-0010 | Question & Knowledge Request Lifecycle | KNOWLEDGE / PROCESS | DRAFT | Formal v0.1.0 + 4 schemas compartidos/subordinados + 3 diagrams | NOT_OBSERVED | Prompt 00; DOC-0105 | 0004, 0007, 0009, 0016, 0020, 0036 | Mapear implementación y validar state/routing/assurance; final events dependen de SER-002 |
| AAI-SPEC-0011 | Architecture Demand Triage | ARCHITECTURE / PROCESS | DISCOVERED | Detailed source | NOT_OBSERVED | Prompt 00 | 0002, 0009, 0010, 0027 | Definir decision table |
| AAI-SPEC-0012 | Git-Native Collaboration & Concurrent Architecture Work | GOVERNANCE / PROCESS | DISCOVERED | Detailed source | PARTIAL_REPORTED; NOT_VERIFIED | Prompt 00 | 0004, 0008, 0009, 0014 | Formalizar overlap/conflict protocol |
| AAI-SPEC-0013 | Solution Model & Solution Impact Manifest | ARCHITECTURE / DATA_MODEL | DISCOVERED | Detailed source | NOT_OBSERVED | Prompt 00 | 0002, 0014, 0021, banking context | Formalizar schema y temporalidad |
| AAI-SPEC-0014 | Architecture Baseline & Version Lifecycle | GOVERNANCE / MODEL | DISCOVERED | Detailed source | NOT_OBSERVED | Prompt 00 | 0012, 0013, Git | Validar estados ARF reales |
| AAI-SPEC-0015 | Agent Operating Contract & Structured Output | AGENT / CONTRACT | DISCOVERED | Detailed source | PARTIAL_REPORTED; identity exacta no observada | Prompt 00 | 0005, 0006, 0009, 0017 | Separar coordinator/workers y schemas |
| AAI-SPEC-0016 | Organization, Expertise Routing & Escalation | AGENT / PROCESS | DISCOVERED | Detailed source | NOT_OBSERVED | Prompt 00 | 0010, 0011, institutional org | No inventar taxonomía; obtener owners |
| AAI-SPEC-0017 | Institutional Tool Catalog & Capability Layer | MCP_TOOL / CATALOG | DISCOVERED | 12 nombres; 30 tools reportadas | CODE_REPORTED; CATALOG_NOT_OBSERVED | Prompt 00; Devin baseline derived | 0006, 0015, 0037 | Extraer 30 tools del repo |
| AAI-SPEC-0018 | Scheduler, Attention Manager & Misfire Policy | OPERATION / SERVICE | DISCOVERED | Detailed source | PARTIAL_OR_UNKNOWN | Prompt 00 | 0008, 0009, Desktop | Formalizar jobs/events/policy |
| AAI-SPEC-0019 | Agentic-to-Deterministic Evolution | AGENT / GOVERNANCE | DISCOVERED | Detailed source | NOT_OBSERVED | Prompt 00 | 0015, 0017, 0029 | Definir telemetry y thresholds |
| AAI-SPEC-0020 | Answer Assurance & Abstention | KNOWLEDGE / CONTROL | DISCOVERED | Detailed source | NOT_OBSERVED | Prompt 00 | 0005, 0024, 0027 | Formalizar statuses/evaluation |
| AAI-SPEC-0021 | Technical Design Review | ARCHITECTURE / PROCESS | DISCOVERED | Detailed source | NOT_OBSERVED | Prompt 00 | 0002, 0005, 0020, 0022, 0027 | Formal spec y findings schema |
| AAI-SPEC-0022 | Architecture Tests | QUALITY / TEST | DISCOVERED | Candidate rules enumerated | TEST_FILES_REPORTED; MAPPING_UNKNOWN | Prompt 00; Devin baseline derived | 0021, 0027, 0006 | No convertir hipótesis en reglas |
| AAI-SPEC-0023 | Document Processing & Golden Document Set | INGESTION / TEST | DISCOVERED | Detailed benchmark criteria | LIBRARIES_REPORTED; NOT_VERIFIED | Prompt 00; Devin baseline derived | 0007, parsers | Crear corpus y benchmark |
| AAI-SPEC-0024 | Knowledge, Evidence & Provenance Model | KNOWLEDGE / DATA_MODEL | DRAFT | Detailed Wave 2 design | PARTIAL_OR_UNKNOWN | DOC-0501 | 0004, 0005, 0007, 0025 | Formal schema/ontology |
| AAI-SPEC-0025 | Graph Model, Discovered/Canonical & Projector | KNOWLEDGE / STORAGE | DRAFT | Detailed Wave 2 design | JANUSGRAPH_REPORTED; NOT_VERIFIED | DOC-0502; graph conversation | 0004, 0007, 0008, 0026 | ADR engine + contract tests |
| AAI-SPEC-0026 | Local Storage Roles & Recovery | DATA / STORAGE | DRAFT | Detailed Wave 2 design | PARTIAL_REPORTED; NOT_VERIFIED | DOC-0307 | SQLite, Infinispan, graph, artifacts | Formal ports/outbox/recovery |
| AAI-SPEC-0027 | Risk Intelligence & Governance | RISK / PROCESS | DISCOVERED | Detailed taxonomy | NOT_OBSERVED | Prompt 00; Wave 1 vectors | 0002, 0021, 0028 | Define owner/acceptance model |
| AAI-SPEC-0028 | Identity, Tool Security & Trust Boundaries | SECURITY / ARCHITECTURE | DRAFT | Detailed Wave 2 design | NOT_OBSERVED | DOC-0601/0602/0604 | 0006, 0015, 0017, 0037 | Controls/tests/approval workflow |
| AAI-SPEC-0029 | Observability, Evaluation & Cost | OPERATION / SERVICE | DISCOVERED | Metrics and dimensions enumerated | PARTIAL_OR_UNKNOWN | Prompt 00; architecture package | 0005, 0018, 0019, 0020 | Map instrumentation/evidence |
| AAI-SPEC-0030 | Local Installation, Distribution & Update | DEPLOYMENT / PROCESS | DISCOVERED | Goal and constraints recovered | NOT_OBSERVED | Project context | 0003, 0017, 0031 | Recover installer design in depth |
| AAI-SPEC-0031 | Local-to-OpenShift Evolution | DEPLOYMENT / ARCHITECTURE | DISCOVERED | Direction and store candidates | NOT_STARTED | Prompt 00; DOC-0302/0307 | 0026, 0029, 0032 | Define migration triggers/RTO/SLA |
| AAI-SPEC-0032 | External Connector Capability Discovery | INTEGRATION / PROCESS | DISCOVERED | Discovery rules; endpoints unknown | NOT_OBSERVED | Prompt 00 | GitHub, Confluence, Outlook, Teams, Devin | Verify API/licence/permission first |
| AAI-SPEC-0033 | Regulatory Intelligence Trace | GOVERNANCE / KNOWLEDGE | DISCOVERED | Conceptual chain defined | NOT_OBSERVED | Prompt 00 | external obligation→interpretation→control | Obtain official and internal evidence |
| AAI-SPEC-0034 | Architecture Documentation & Publication Lifecycle | DOCUMENTATION / PROCESS | DISCOVERED | Roles and outputs recovered | PARTIAL_OR_UNKNOWN | Prompt 00; architecture package | 0012, 0014, 0021, connectors | Recover Confluence/Robo details |
| AAI-SPEC-0035 | MCP Server Contract, Resources & Error Model | MCP / INTERFACE | DISCOVERED | Architecture known; catalog incomplete | CODE_REPORTED; NOT_VERIFIED | Prompt 00; MCP references | 0005, 0006, 0017 | Versioned contract/error taxonomy |
| AAI-SPEC-0036 | Domain Events, Correlation & Idempotency | EVENT / CONTRACT | DISCOVERED | Patterns scattered | PARTIAL_OR_UNKNOWN | Prompt 00 + bank conversations | taskId, outbox, scheduler, projections | Recover schemas and ownership |
| AAI-SPEC-0037 | Planning, Sprint & Work Item Management | OPERATION / SPRINT / MODEL | DISCOVERED | Boundary defined; historic detail NOT_OBSERVED | PARTIAL_OR_UNKNOWN | Current user directive; Prompt 00 task/scheduler model | 0005, 0009, 0015, 0016, 0018, 0029 | Recuperar modelo histórico SER-010; formalizar sin crear orchestration engine |

## Oleada 3E — extension disposition without Spec creation

No se asignan nuevos IDs. Las nuevas direcciones se correlacionan con contratos existentes o quedan como profile/research/authority candidates:

| 3E concept | Specs affected | Disposition | Blocker |
|---|---|---|---|
| organizational/domain introspection and federation | 0001, 0004–0007, 0015–0017, 0019, 0024, 0032 | `EXTEND_EXISTING_SPEC_SET`; possible profile after evidence | SER-014; RO-3E-004 |
| deterministic maturity | 0006, 0015, 0017, 0019, 0020, 0022, 0029 | `EXTEND_ROUTING_AND_EVALUATION`; no maturity-stage Specs | Harness/runtime evidence |
| Domain Context Projection | 0005, 0024 | `PROFILE_CANDIDATE` | domain sources/permissions |
| Domain UX Projection | 0003, 0034 | `PROFILE_CANDIDATE` | RO-3C-013; SER-014 |
| Claim→Argument→Evidence assurance | 0004, 0020, 0022, 0024, 0029 | `COMPOSE_EXISTING_SPECS / STANDARD_RESEARCH` | RO-3E-002 |
| Tree/Graph/Loop knowledge geometry | 0009, 0010, 0018, 0019, 0024, 0025, 0037 | `MODEL_OF_MODELS`; not a Spec | RO-3E-001/003; SER-008/010 |
| human value shift/domain evolution plan | 0016, 0019, 0027 | `TARGET_OPERATING_MODEL_PROPOSAL` | institutional authority/source |

## Catálogo de plataforma bancaria y soluciones-ejemplo

Estos elementos se preservan porque contienen diseño técnico útil. `EXAMPLE_SPEC` evita que Devin los convierta en estándar corporativo.

| Spec ID | Nombre | Tipo | Status | Profundidad recuperada | Fuente | Regla de uso | Gap principal |
|---|---|---|---|---|---|---|---|
| BNK-SPEC-0001 | Mexico Banking Platform Context & Capability Map | PLATFORM / KNOWLEDGE | DRAFT | Wave 1 + project context | DOC-0701 | Contexto inicial, no catálogo oficial completo | Evidence/owners/IDs institucionales |
| BNK-SPEC-0002 | Shared Security & Cryptographic Capabilities | SECURITY / COMPONENTS | DISCOVERED | Componentes/flows recuperados | bank conversations | Reuse-first, confirmar interfaces | Contratos oficiales y ownership |
| BNK-SPEC-0101 | DTO Middleware — Customer Position | EXAMPLE_SPEC / DATA+EVENT | DESIGNED | Alto: components, stores, CDC, fallback, backpressure | DTO conversation extract | Ejemplo de solución; Arc42 único | Recover full field/event contracts |
| BNK-SPEC-0102 | StarPass Core/Local & Saga State Machine | EXAMPLE_SPEC / SERVICE+EVENT | DESIGNED | Alto: stores, Kafka, sagas, security, notifications | StarPass conversation extract | No generalizar a otros dominios | Full state/event schemas and current version |
| BNK-SPEC-0103 | Card Security Change PIN Orchestration | EXAMPLE_SPEC / SECURITY+FLOW | DESIGNED | Alto: façade, PLARD, Gravity, Cipher, JWE/JWSID, HSM | Card conversation extract | Nunca PIN block en claro | Full sequence/contracts/evidence |
| BNK-SPEC-0104 | Gravity Plus / Exadata Cursor Pagination | EXAMPLE_SPEC / API+DATA | DESIGNED | Alto: keyset cursor, Card ID, PAN boundary | Gravity conversation extract | Cursor opaco; PCI applies | Exact API/schema/limits |
| BNK-SPEC-0105 | StarPass Backoffice SOS–Entra ID OIDC | EXAMPLE_SPEC / IDENTITY | DESIGNED | Alto: two auth-code+PKCE legs, opaque token/introspection | SOS conversation extract | SOS exclusivo StarPass; Entra ID corporativo | Full endpoints/claims/session model |
| BNK-SPEC-0106 | ISO 8583 Routing & TCP Connection Pools | EXAMPLE_SPEC / INTEGRATION | DESIGNED | Alto: routing, pool by authorizer, Cipher/HSM inference | ISO conversation extract | Consumer sends ISO; no HSM detail | Recover concurrency/error contracts |
| BNK-SPEC-0107 | Control-M Agents on OpenShift | EXAMPLE_SPEC / DEPLOYMENT | DISCOVERED | Problem/topology observed | Control-M conversation extract | Server remains IaaS; agents OpenShift | Routing/identity conclusion NOT_OBSERVED |

## Detalle mínimo de specs prioritarias

### AAI-SPEC-0004 — Canonical Knowledge Promotion

- **purpose:** convertir candidatos reconciliados en conocimiento aprobado sin promoción silenciosa.
- **inputs:** candidate, evidence, reconciliation result, scope, authority, owner, baseline.
- **outputs:** governed diff/PR, approval receipt, canonical commit, projection event.
- **preconditions:** schema válido; evidencia; no conflict abierto material; policy permite proponer.
- **rules:** Devin propone pero no se autoaprueba; Git precede a proyección; reintento es idempotente.
- **failure modes:** stale baseline, conflict, missing owner, changed diff, projection failure.
- **tests:** reject extracted→approved; duplicate receipt; crash after commit; rollback/rebuild.

### AAI-SPEC-0005 — Context Resolver & Work Package

- **inputs:** task/intent/actor/agent/purpose/scope/baseline/budgets.
- **outputs:** versioned immutable Work Package con facts, decisions, constraints, evidence, conflicts, risks, gaps, tool policy y output contract.
- **rules:** security filters before retrieval; minimum sufficient context; every item has reasonForInclusion; mustNotInfer/mustNotDo.
- **failure modes:** missing scope/identity, stale governed baseline, unavailable source, conflicting evidence, budget exhaustion.
- **tests:** country isolation, restricted evidence, conflict recall, prompt-injection, cache invalidation.

### AAI-SPEC-0007 — Governed Ingestion

- **inputs:** artifact + source metadata + task/purpose.
- **outputs:** receipt, parsed structure, evidence/candidates, disposition, conflicts, quarantine finding.
- **rules:** hash/idempotency; parse once; content is untrusted; ingestion != promotion.
- **dispositions:** task context, evidence, candidate, update, conflict, ignore, ask human, quarantine.
- **comparison:** match, enrichment/update, conflict, duplicate, supersedes, unrelated.

### AAI-SPEC-0008 — Projection Manager

- **states:** EMPTY, LOADING, READY, STALE, UPDATING, DEGRADED, FAILED.
- **readiness:** CONSULTATION may allow partial; DRAFT partial-with-warning; governed approval requires current baseline.
- **refresh:** remote head→diff→changed artifacts→targeted recalculation.
- **invariant:** deleting Infinispan/derived graph/index can be recovered from canonical/controlled sources.

### AAI-SPEC-0006 — Tool Policy Enforcement

- **purpose:** interceptar tool/resource/ingestion/publication y decidir `ALLOW`, `DENY`, `REQUIRE_APPROVAL` o `REQUIRE_MORE_CONTEXT`.
- **model:** PEP + PDP + PIP + PAP; policy fuera del prompt y versionada.
- **inputs:** actor/agent/delegation, task/purpose/scope, tool/version, parameters digest, side-effect class, destination, classification, budget y posture.
- **approval rule:** actor, action fingerprint, target/diff, baseline, clasificación, expiración y one-time-use.
- **gap:** el catálogo exacto de 30 tools y su mapping a handlers/tests no está observado.

### AAI-SPEC-0009 — Task, Delegation & Work Lifecycle

- **purpose:** conservar una unidad durable de trabajo desde captura hasta cierre, con ownership, delegación, gates, evidencia y estados alternos explícitos.
- **states principales:** `NEW → CONTEXT_READY → PLANNED → IN_PROGRESS → VERIFYING → HUMAN_REVIEW → APPROVED → PUBLISHED → CLOSED`.
- **states alternos:** `BLOCKED`, `DEGRADED`, `REJECTED`, `CANCELLED`; nunca se presentan como avance exitoso.
- **contracts:** `ArchitectureTask`, `DelegationRecord`, `WorkLifecycleEvent`, `StateUpdateDelta` y `DomainEventEnvelope` DRAFT.
- **autonomía:** sólo continúa si precondiciones, decisión congelada, policy, source classification, Skill/Tool permitido y evidencia esperada están disponibles; escala condiciones tipadas.
- **boundary con Sprint:** Work Item comparte identidad operacional con la tarea; Sprint puede agrupar/ordenar Work Items, pero su modelo completo pertenece a `0037` y sigue condicionado por `SER-010`.
- **implementation status:** conceptos/store reportados sin mapping directo; no se declara implementación ni runtime verification.
- **3C extension:** `ArchitectureEngagement`, `Mission`, `WorkSession`, `Execution`, `Checkpoint`, `Resume`, `Handoff`, `Conversation`, `UserInteractionSession`, `AgentSession`, `DevinSession` y `ContextManifest` forman un metamodelo dentro de 0009. `Work outlives session`; una sesión no es memoria institucional. No se crean schemas/Specs por entidad hasta estándares/repo evidence.

### AAI-SPEC-0010 — Question & Knowledge Request Lifecycle

- **purpose:** resolver gaps sin convertir inferencia en hecho ni expertise observado en autoridad formal.
- **types:** `QUESTION`, `CLARIFICATION`, `POSSIBLE_ERROR`, `MISSING_INFORMATION`, `ARCHITECTURE_CONCERN`, `SECURITY_CONCERN`, `KNOWLEDGE_CONFLICT`, `DOCUMENTATION_IMPROVEMENT`, `ARCHITECTURE_REQUEST`.
- **states:** `OPEN`, `CLASSIFIED`, `RESOLVING`, `ANSWER_CANDIDATE`, `ASSIGNED`, `WAITING_FOR_EVIDENCE`, `ESCALATED`, `DEFERRED`, `RESOLVED`, `OBSOLETE`.
- **outcomes:** `ANSWER_ONLY`, `DOCUMENTATION_UPDATED`, `KNOWLEDGE_UPDATED`, `SOLUTION_CREATED`, `ADR_CREATED`, `RISK_CREATED`, `TASK_CREATED`, `NO_ACTION_REQUIRED`.
- **routing:** deterministic answer → governed knowledge/evidence → existing question → observed expertise → formal owner → Chief Architecture.
- **assurance:** `SUPPORTED`, `PARTIALLY_SUPPORTED`, `CONFLICTED`, `INSUFFICIENT_EVIDENCE`, `UNSUPPORTED`; sólo evidencia/authority suficiente permite `RESOLVED`.
- **contracts:** `ArchitectureQuestion`, `QuestionLifecycleEvent`, `StateUpdateDelta` y `DomainEventEnvelope` DRAFT.
- **implementation status:** no observado; transitions exactas de runtime, API, persistencia y delivery quedan condicionadas por `SER-002`.

### AAI-SPEC-0037 — Planning, Sprint & Work Item Management

- **classification:** `DISCOVERED`; no se eleva a spec formal completa sin recuperar el modelo histórico.
- **purpose:** representar objetivo, alcance, capacidad, Work Items, dependencias, criterios de entrada/salida, estado y evidencia del trabajo.
- **boundary:** Devin realiza planificación/ejecución; Architecture AI preserva modelo institucional y reglas. No se construye un custom planning/orchestration engine que replique a Devin.
- **relations:** produce/agrupa Work Items de `0009`, consume Work Packages de `0005`, se gobierna por contratos/agentes/policy y se observa mediante `0029`.
- **terminology:** Sprint no es Spring Boot ni un Agent.
- **source gap:** `SER-010` solicita la conversación/modelo histórico para recuperar campos, estados y reglas sin inventarlos.

## Deduplication decisions

- Desktop compatibility spike remains within `AAI-SPEC-0003`; no new “Desktop spec” was created.
- Work Package fields and Context Resolver form one contract (`AAI-SPEC-0005`), with schema as artifact subordinado.
- Knowledge model (`0024`) and graph (`0025`) are separate: semantic objects vs storage/query projection.
- Tool Policy (`0006`) and Security Architecture (`0028`) are separate: decision service vs transversal control architecture.
- Banking solution specs remain examples and do not merge into platform standards.
- Sprint (`0037`) remains separate from task lifecycle (`0009`): Sprint organizes planning; Work Item is the executable unit.
- Question lifecycle (`0010`) may block, clarify or create work, but does not silently change a Task, Spec, ADR or canonical knowledge state.
- Blueprint is not a spec or decision at this time; it remains a proposal in `41_EVOLUTION_STRATEGY_DRAFT.md`.
- Seed V1, Architectural DNA, Initial Knowledge Model, Capability Map/Graph, Loop/Harness, technology evolution, cutover and quality gates are views/profiles/capability candidates in docs 52–63; no new `AAI-SPEC` ID is assigned by Oleada 3C.
- P-SEED-ACCEPT-01 creates zero new `AAI-SPEC` IDs: governed Self-Model, deterministic assurance/fitness, documentation/ingestion milestones and executable frontier extend existing 0004/0005/0007/0008/0009/0010/0012/0014/0020/0022/0024/0025/0029/0034/0037 and their acceptance contracts.
- 3C extension candidates are mapped in `53_SPEC_COVERAGE_AND_EXTENSION_MATRIX.md`; the catalog remains 37 AAI Specs plus 9 banking/context items.

## rc2 catalog delta

AAI-SPEC-0005 and AAI-SPEC-0008 advance from `0.1.0-draft` to `0.1.1-draft` for explicit compatible projection-set context and candidate/promotion/rebuild target detail. All implementation/test states remain unchanged. No new formal Spec: still 10. AAI-SPEC-0025 requires RO-RC2-001 plus SER-008 before physical design; no Graph ADR selected. [Provenance/acceptance](90_POST_RC1_RECONCILIATION.md).

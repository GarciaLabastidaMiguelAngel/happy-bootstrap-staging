# 37 — Source and Material Inventory

## Criterio

Este inventario registra lo accesible en la pasada `HK-2026-09-02.1`. `OBSERVED_FULL` significa que el contenido completo fue legible en el workspace. `OBSERVED_DERIVED` significa que existe un artefacto generado que preserva la información, pero no la fuente primaria original. `PROJECT_CONTEXT_EXTRACT` significa que el contexto de conversación es accesible como extracto/memoria de proyecto, no como export bruto. `NOT_OBSERVED` impide reconstrucción especulativa.

## Fuentes primarias y de control

| Source ID | Fuente | Tipo | Acceso | Estado | Uso |
|---|---|---|---|---|---|
| HK-SRC-0001 | `source_corpus/Markdown.md pegado` — Prompt 00 consolidado, 2,510 líneas | PROMPT/USER_DIRECTIVE | Archivo local materializado | OBSERVED_FULL | Arquitectura, contratos, reglas, specs implícitas |
| HK-SRC-0002 | Conversación `Agentes IA en Windows` | HAPPY_CONVERSATION | Contexto de proyecto + artefactos derivados | PROJECT_CONTEXT_EXTRACT | Decisiones, diseño y estado Devin |
| HK-SRC-0003 | Conversación `Manejo del contexto de Devin` | HAPPY_CONVERSATION | Contexto de proyecto | PROJECT_CONTEXT_EXTRACT | MCP local, RAG y Desktop |
| HK-SRC-0004 | Conversación `Base de datos de grafos` | HAPPY_CONVERSATION | Contexto de proyecto | PROJECT_CONTEXT_EXTRACT | Neo4j, discovered/canonical, temporalidad |
| HK-SRC-0005 | Conversación `Arquitectura de soluciones bancaria` | HAPPY_CONVERSATION | Contexto de proyecto | PROJECT_CONTEXT_EXTRACT | Plataforma, roles, riesgo y capabilities |
| HK-SRC-0006 | Conversaciones DTO/StarPass/Card/Gravity/SOS/ISO/Control-M | HAPPY_CONVERSATION | Contexto de proyecto parcial | PROJECT_CONTEXT_EXTRACT | Specs de solución y componentes transversales |
| HK-SRC-0007 | Prompt 00 enviado a Devin | DEVIN_PROMPT | Confirmación histórica del usuario | OBSERVED_DERIVED | Prompt sequence 00 |
| HK-SRC-0008 | Prompt 01 / AILR-1 | DEVIN_PROMPT | Confirmación histórica del usuario | OBSERVED_DERIVED | Status capture |
| HK-SRC-0009 | `CURRENT_IMPLEMENTATION_BASELINE.md` | DEVIN_RESULT | Resumen preservado; archivo original ausente | OBSERVED_DERIVED | Baseline reportado, requiere materialización |
| HK-SRC-0010 | Export completo `conversations.json` o chats individuales | EXPORT | No disponible | NOT_OBSERVED | Exhaustividad y message-level provenance |
| HK-SRC-0011 | Repositorio fuente Architecture AI | CODE/CONFIG/TEST | No montado en este Work | NOT_OBSERVED | Verificación de implementación y tests |
| HK-SRC-0012 | Evidencia institucional oficial del banco | FILE/REPOSITORY | No disponible salvo extractos conversacionales | NOT_OBSERVED | Confirmar catálogo, políticas, owners y estándares |
| HK-SRC-0013 | Carta `HAPPY — MASTER KNOWLEDGE COMPILER` | USER_DIRECTIVE | Mensaje actual | OBSERVED_FULL | Gobierno de este Work |
| HK-SRC-0014 | `P-RESUME-00 — Continuación de ejecución previa` | WORK_PROMPT / USER_DIRECTIVE | Historial observable del Work | OBSERVED_FULL | Continuidad sin reiniciar A–F |
| HK-SRC-0015 | `P-ALIGN-01 — HAPPY: Alignment Before Oleada 3` | WORK_PROMPT / USER_DIRECTIVE | Historial observable + mensaje actual | OBSERVED_FULL | Handoff operativo, taxonomy, Sprint, Blueprint, autonomy, prompt/Graph gates; SENT/EXECUTED/RECONCILED |
| HK-SRC-0016 | `P-O3B-01 — Work Lifecycle + Bootstrap Skeleton` | WORK_PROMPT / USER_DIRECTIVE | Historial observable + mensaje actual | OBSERVED_FULL | Formalizar 0009/0010 y bootstrap skeletons sin implementación, delivery ni decisiones bloqueadas; SENT/EXECUTED/RECONCILED |
| HK-SRC-0017 | `P-WAVE-3C-01 — Seed V1 / Architectural DNA / Autonomous Expansion` | WORK_PROMPT / USER_DIRECTIVE | Mensaje actual completo | OBSERVED_FULL | Seed model, future-intent No-Loss, capability/dependency/operating/evolution models, staging/cutover and G1..G12; SENT/EXECUTED/RECONCILED |
| HK-SRC-0018 | `GarciaLabastidaMiguelAngel/happy-bootstrap-staging` | USER-IDENTIFIED REPOSITORY | identity/public empty main and connector permission observed; external write rejected | OBSERVED_REFERENCE / NO_COMMIT | BOOTSTRAP_STAGING_REPOSITORY; does not close SER-002; SER-013 partial |
| HK-SRC-0019 | `P-WAVE-3D-01` | WORK_PROMPT / USER_DIRECTIVE | message fully observable | OBSERVED_FULL | physical assembly/dedup/standards/fixtures/package requirements; SENT/EXECUTED/RECONCILED |
| HK-SRC-0020 | `P-WAVE-3E-01` | WORK_PROMPT / USER_DIRECTIVE | message fully observable | OBSERVED_FULL | federated authority, deterministic maturity, knowledge geometry, expansion boundary and 3E gates; SENT/EXECUTED/RECONCILED |
| HK-SRC-0021 | `P-SEED-ACCEPT-01` | WORK_PROMPT / USER_DIRECTIVE | message fully observable | OBSERVED_FULL | acceptance preparation, Self-Model projection, deterministic assurance, documentation/ingestion milestones, executable frontier and source-first reconciliation; SENT/EXECUTED/RECONCILED |
| HK-SRC-0022 | `P-SEED-ACCEPT-01-RESUME-01` | WORK_PROMPT / USER_DIRECTIVE | message fully observable | OBSERVED_FULL | acceptance continuation plus capability/access/authority/adoption, environment/ALM, cross-environment, multi-architect and profile-readiness refinements; reconciled without new Specs |

## Material producido en este Work

| Conjunto | Contenido observado | Clasificación | Estado |
|---|---|---|---|
| `architecture_ai_package/` | brief, requisitos, arquitectura, agentes, conocimiento, roadmap, aceptación, ADR y prompt | Architecture/Spec/Prompt | DRAFT; preservado |
| `wave0_governance/` | policy, catálogos, protocolos, gates, templates | Governance/Control | DRAFT; PREPARED_NOT_DELIVERED |
| `wave1_content/` | 8 docs, 3 specs, Prompt 03, 6 Mermaid, 2 renders | Product/Banking/Spec/Diagram | DRAFT; PREPARED_NOT_DELIVERED |
| `wave2_content/` | baseline/standards, local architecture/storage, knowledge/graph/RAG, security/threat/fraud | Architecture/Knowledge/Security | DRAFT; formalización en curso |
| `Architecture_AI_Control_Maestro.xlsx` | registers de docs, fuentes, evidencia, decisiones, prompts, diagramas, issues | Governance/Register | DRAFT; requiere actualización al snapshot |
| `Architecture_AI_Traceability.xlsx` | primera matriz FR/NFR/ADR/riesgos/roadmap | Traceability | DRAFT; no sustituye nueva correlación spec-level |
| `happy-knowledge/39..45` | handoff alignment, assets, evolution, skills, source requests, no-loss y Oleada 3 boundary | Handoff/Governance | DRAFT; PREPARED_NOT_DELIVERED |
| `happy-knowledge/specs/AAI-SPEC-0004..0010` | specs formales de promoción, contexto, policy, ingestion, projection, Task/Delegation y Question | Specification | DRAFT; implementation status unchanged |
| `happy-knowledge/schemas/` | 14 contratos JSON Schema subordinados/compartidos por 0004–0010 | Contract/Data Model | DRAFT; JSON syntax validated, runtime not verified |
| `happy-knowledge/diagrams/HK-DGM-0004..0012` | 9 state/flow sources editables | Diagram | SOURCE_DRAFTED; no runtime evidence |
| `happy-knowledge/bootstrap/` | AGENTS, BOOTSTRAP, CONTEXT_PACK y REPOSITORY_MAP skeletons | Bootstrap/Handoff | DRAFT; source-classified; runtime activation NOT_OBSERVED |
| `happy-knowledge/49..51` | status, delta manifest y validation report de Oleada 3B | Status/Manifest/Validation | DRAFT; PREPARED_NOT_DELIVERED |
| `happy-knowledge/52..63` | 3C inventory, Spec coverage, capabilities, Seed/DNA, knowledge model, dependency graph, operating/expansion, technology, staging/cutover, readiness, research/gaps and future No-Loss | Seed/Handoff/Governance | DRAFT; PREPARED_NOT_DELIVERED |
| `happy-knowledge/67..85` | 3D physical assembly/fixtures and 3E federated authority/knowledge geometry/expansion obligations/control | Seed/Handoff/Governance/Validation | DRAFT; PREPARED_NOT_DELIVERED |
| `happy-knowledge/86` + `bootstrap/ACCEPTANCE.md` | acceptance state, gate/source reconciliation, exact execution order and compact acceptance navigation | Acceptance/Handoff/Validation | DRAFT; DESIGNED_NOT_EXECUTED; PREPARED_NOT_DELIVERED |
| DOCX/ZIP existentes | paquetes editables y empaquetados de Oleadas 0–1 | Deliverable | PREPARED_NOT_DELIVERED |

## Inventario por clase de conocimiento recuperado

| Clase | Material ya observable | Profundidad | Acción del compiler |
|---|---|---|---|
| Architecture | local-first, tres planos, módulos, stores, Git/projection, evolución OpenShift | Alta | Preservar y correlacionar |
| Decision | 27 decisiones/direcciones/propuestas incluyendo federated authority and human-value proposals | Alta | Normalizar status y rationale; no inferir política institucional |
| Spec | 10 formales + 27 Architecture AI discovered/draft + 9 banking context/examples | Alta/mixta | Formalizar por prioridad sin cambiar implementation status |
| Component | Desktop, core, resolver, knowledge, graph, ingestion, policy, projection, scheduler, connectors | Alta | Asignar spec IDs y ports |
| Agent | coordinator y 9+ roles/capacidades especializadas | Media/alta | Separar role/model/skill/tool |
| MCP | server/API, handoff, tools institucionales candidatas, security | Media/alta | Tool catalog + schemas + error model |
| Skill | 16 skills reportadas; funciones conceptuales descritas | Baja para identidad exacta | No inventar catálogo; requiere repo |
| Tool | 30 tools reportadas; 12 nombres recuperados | Media | Catalogar sólo nombres observados; mapear implementación después |
| Data | AWP, solution, impact manifest, knowledge/provenance, graph, tasks | Alta | Formalizar schemas |
| API | MCP/API candidates y APIs bancarias de ejemplo | Media | Separar contracts de ejemplos/standards |
| Event | task/question/projection/scheduler/ingestion concepts; banking Kafka/outbox | Media | Recuperar payloads y ownership |
| Integration | Git, Desktop, Confluence, Outlook, Teams, bank platforms | Media | Discovery antes de adopción |
| Security | STRIDE, agentic threats, tool policy, PCI/PAN, JWSID, secrets | Alta | Formalizar controles/acceptance |
| Risk | taxonomía, severity/treatment, residual risk y roles | Alta | Crear register y links |
| Implementation | baseline Devin reportado | Media; no inspeccionado | Mantener separado y solicitar repo/report |
| Prompt | Devin 00/01 confirmados; 0002/0003 son drafts sin sequence; Work prompts separados | Alta/mixta | Mantener `PROMPT_SEQUENCE_UNRESOLVED` hasta SER-012 |
| Devin Result | baseline reportado | Media; original ausente | Registrar como derived, no verified |

## Especificaciones formales ya existentes

| Spec ID | Título | Archivo | Estado de diseño | Estado de implementación |
|---|---|---|---|---|
| AAI-SPEC-0001 | Institutional Context Bootstrap | `../wave1_content/AAI-SPEC-0001-INSTITUTIONAL-CONTEXT-BOOTSTRAP.md` | DRAFT | NOT_OBSERVED |
| AAI-SPEC-0002 | Cross-Vector Architecture Analysis | `../wave1_content/AAI-SPEC-0002-CROSS-VECTOR-ANALYSIS.md` | DRAFT | NOT_OBSERVED |
| AAI-SPEC-0003 | Desktop Task Handoff | `../wave1_content/AAI-SPEC-0003-DESKTOP-TASK-HANDOFF.md` | DRAFT | POC_REPORTED_PARTIAL; NOT_VERIFIED |
| AAI-SPEC-0004 | Canonical Knowledge Promotion | `specs/AAI-SPEC-0004-CANONICAL-KNOWLEDGE-PROMOTION.md` | DRAFT | NOT_OBSERVED |
| AAI-SPEC-0005 | Context Resolver & Work Package | `specs/AAI-SPEC-0005-CONTEXT-RESOLVER-WORK-PACKAGE.md` | DRAFT | PARTIAL_REPORTED; NOT_VERIFIED |
| AAI-SPEC-0006 | Tool Policy Enforcement & Approval | `specs/AAI-SPEC-0006-TOOL-POLICY-ENFORCEMENT.md` | DRAFT | NOT_OBSERVED |
| AAI-SPEC-0007 | Governed Context Ingestion | `specs/AAI-SPEC-0007-GOVERNED-CONTEXT-INGESTION.md` | DRAFT | PARTIAL_REPORTED; NOT_VERIFIED |
| AAI-SPEC-0008 | Projection Manager | `specs/AAI-SPEC-0008-PROJECTION-MANAGER.md` | DRAFT | IMPLEMENTED_REPORTED; NOT_VERIFIED |
| AAI-SPEC-0009 | Task, Delegation & Work Lifecycle + Work/Session Metamodel | `specs/AAI-SPEC-0009-TASK-DELEGATION-WORK-LIFECYCLE.md` | DRAFT v0.2.0 | PARTIAL_OR_UNKNOWN; NOT_VERIFIED |
| AAI-SPEC-0010 | Question & Knowledge Request Lifecycle | `specs/AAI-SPEC-0010-QUESTION-KNOWLEDGE-REQUEST-LIFECYCLE.md` | DRAFT | NOT_OBSERVED |

## Material suficientemente profundo para preservar como specs

La lista canónica y deduplicada está en `22_SPECIFICATION_CATALOG.md`. Se recuperaron como specs potenciales:

- Context Resolver y Architecture Work Package.
- Canonical Knowledge Promotion y Reconciliation.
- Governed Context Ingestion y DocumentAnalysisResult.
- Projection Manager, readiness policy e incremental refresh.
- Desktop capability discovery, UI thin client y task handoff.
- Task/delegation/question/demand lifecycle.
- Git-native collaboration y concurrent architecture work.
- Solution Model, baselines y Solution Impact Manifest.
- Agent Operating Contract y expertise routing.
- Institutional Tool Catalog y agentic→deterministic evolution.
- Scheduler, Attention Manager y misfire policies.
- Answer Assurance y Technical Design Review.
- Architecture Tests.
- Local storage roles y graph portability.
- Knowledge/graph/provenance/temporal model.
- Tool Policy, approval, identity y security boundaries.
- Document processing benchmark/Golden Document Set.
- Banking platform bootstrap y shared-capability model.
- DTO Customer Position, StarPass saga, Change PIN, cursor pagination, SOS OIDC, ISO 8583/TCP y Control-M routing como solution specs/examples, no estándares.

## No observado o insuficiente

- Export bruto completo de chats con IDs de mensaje.
- Repositorio/código/configuración/logs de Architecture AI.
- Archivo original del baseline de Devin.
- Catálogo exacto de las 30 tools y 16 skills reportadas.
- Evidencia de build Java 21 y tests ejecutados.
- Capability/permission discovery real de Devin Desktop, GitHub y Microsoft/Confluence.
- Policies, standards, owners, IDs y taxonomías institucionales del banco.
- Volumetría, SLA, RTO/RPO, clasificación y retención.
- Decisión final y spike del motor de grafo/vector store.
- Contenido/branch/commit y acceso efectivo al bootstrap staging repository.
- BootstrapReceipt/final root manifest and clean-session acceptance results.
- Official organizational/domain/owner/authority/capability inventory.
- Canonical source definition for `JavaFizz / SpecFizz`.
- Clean-session executor/loader receipt, Self-Model/View/Documentation/Ingestion runtime, deterministic assurance toolchain and executable-frontier evidence.
- Actual environment/cluster topology, allowed operations, institutional delivery/ALM path, multi-architect resources and owner-approved adoption profiles/evidence.

## rc2 source registration

SRC-RC2-001: current P-SEED-RC2-GIT-PUBLISH-01 directive, OBSERVED_FULL. SRC-RC2-002: project-context extracts with user/assistant timestamps, USER_REPORTED/PROPOSAL, not primary full chat or runtime evidence. SRC-RC2-003: Java25 directive continuity pointer, KNOWN_BUT_NOT_ACCESSIBLE at primary-source level. Full classification, claims and limits: [document 90](90_POST_RC1_RECONCILIATION.md).

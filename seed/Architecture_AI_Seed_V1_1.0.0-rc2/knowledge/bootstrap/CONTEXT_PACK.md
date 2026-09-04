# CONTEXT_PACK.md — Happy / Architecture AI Skeleton

## Control

| Campo | Valor |
|---|---|
| `asset_id` | `HAPPY-BOOT-0003` |
| `version` | `0.2.0-draft` |
| `status` | `DRAFT` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `projection_of` | snapshot `HK-2026-09-02.1` + deltas de alineación/Oleadas 3B/3C/3D/3E |
| `implementation_status` | `NOT_APPLICABLE` |

Este archivo es una proyección compacta para bootstrap. No sustituye las Specs, decisiones, baseline, evidence register ni No-Loss Review. Ante discrepancia, prevalece el artefacto canónico enlazado y se registra conflicto.

## CANONICAL — qué estamos construyendo

Happy / Architecture AI es una plataforma de inteligencia institucional de arquitectura que complementa a Devin. Debe entregar contexto bancario gobernado, decisiones, Specs, relaciones, riesgos y evidencia; convertir ese contexto en Work Packages; permitir ejecución verificable; y actualizar el estado sin perder provenance.

El objetivo final es `HAPPY_HANDOFF_READY`: un repositorio operativo que permita a una sesión nueva comprender estado, restricciones, trabajo siguiente, Skills/Tools aplicables y gates humanos sin redescubrir lo ya resuelto.

Seed V1 es el mínimo estructural suficiente: identidad, North Star, Architectural DNA, initial knowledge model, target capability map, evolution rules, operating model y expansion contract. Comprime conversaciones, no ingeniería.

P-SEED-ACCEPT-01 no abre otra oleada conceptual: prepara validación contra una sesión limpia y la implementación real. `Self-Model`, deterministic assurance, documentation/ingestion milestones y executable frontier son extensiones de modelos existentes; no Specs ni implementaciones nuevas.

## CANONICAL — modelo de autoridad

- Git contiene conocimiento aprobado y versionable.
- Sources/Evidence/Claims/Candidates conservan provenance y lifecycle.
- Graph, retrieval index e Infinispan son proyecciones, no verdad canónica.
- Devin propone, razona y ejecuta dentro de Work Package/policy; no se autoaprueba.
- Chief Architect es autoridad final de escalamiento, no ruta por defecto.
- Seguridad/CISO y roles institucionales conservan las decisiones que les correspondan; no se infieren owners faltantes.
- Visibility/discovery/platform knowledge do not transfer ownership or authority; domains remain institutional owners unless governed evidence says otherwise.

## CANONICAL — arquitectura y operación

- Fase inicial local-first en workstation corporativa.
- Core lógico Spring Boot/Java 21 detrás de ports/adapters.
- Desktop es thin client; no contiene reglas de dominio ni verdad canónica.
- MCP/API expone capabilities pero Policy Enforcement decide cada acción.
- Context Resolver produce Architecture Work Package por `taskId`.
- Ingestion trata documentos/tool outputs como untrusted y separa ingestión de promoción.
- Projection Manager expone readiness/freshness y reconstruye derivados.
- Scheduler/Attention resuelve awareness determinístico sin usar reasoning innecesario.
- Evolución futura a OpenShift está condicionada y no se diseña aquí.

## CANONICAL — North Star y reglas de crecimiento

- Convertir conocimiento arquitectónico disperso en inteligencia institucional gobernada que pueda orientar trabajo verificable y evolucionar sin perder provenance.
- Preservar known intent y future intent aunque la profundidad de Spec o implementación sea incompleta.
- Preferir estándares, frameworks y capacidades corporativas antes de custom.
- Mantener autonomía gobernada; la interacción humana es excepción y recibe un Decision Package.
- Separar modelo inicial de modelo final: layers, vectors y relations evolucionan mediante evidence, impact, compatibility/migration y verification.
- Context Engineering decide qué información necesita el modelo; Harness controla/evalúa la ejecución; Loop Engineering elige la siguiente iteración con base en resultados y evidencia.
- One governed model produces authorized audience/intent projections; the LLM explains a projection and does not invent the model while answering.
- Material technically verifiable claims require deterministic substantiation; an LLM cannot self-certify.

## CANONICAL — ciclo operativo

`Current State → Evolution Strategy → Planning/Sprint → Work Item → Skills/Tools → Execution → Verification → Evidence → StateUpdateDelta → Updated State → Next Work`

- `AAI-SPEC-0009` gobierna Work Item/Task/delegation.
- `AAI-SPEC-0010` gobierna Question/Knowledge Request/escalation.
- `AAI-SPEC-0037` conserva la frontera de Sprint, pero su modelo completo está bloqueado por `SER-010`.

## CANONICAL — decisiones cerradas que no se redescubren

| Decisión | Regla compacta |
|---|---|
| `AAI-DEC-0001` | Devin ≠ Architecture AI; general intelligence vs institutional intelligence |
| `AAI-DEC-0002` | local-first antes de centralización |
| `AAI-DEC-0003` | Git canónico; graph/index/cache derivados |
| `AAI-DEC-0004` | taskId + Architecture Work Package para trabajo complejo |
| `AAI-DEC-0008` | reuse-first; no reinventar capacidad existente |
| `AAI-DEC-0009` | discovered/candidate no es approved/canonical |
| `AAI-DEC-0012` | waves internas; handoff sólo tras confirmación |
| `AAI-DEC-0013` | readiness exige bootstrap operativo + No-Loss |
| `AAI-DEC-0014` | Sprint es Planning, nunca Spring Boot/Agent |
| `AAI-DEC-0015` | autonomía gobernada y escalation tipado |
| `AAI-DEC-0017` | secuencia Devin unresolved; no prompt nuevo |
| `AAI-DEC-0018` | Graph ADR bloqueado por evidencia |
| `AAI-DEC-0019` | autoevolución gobernada, versionada y verificada |
| `AAI-DEC-0020` | Seed V1 como Architectural DNA y contrato de expansión |
| `AAI-DEC-0021` | prompt/wave cutover a provenance histórica |
| `AAI-DEC-0022` | staging temporal, transport-independent y no operacional |
| `AAI-DEC-0023` | G1..G11 remain quality gates; G12 acepta unknowns explícitos |
| `AAI-DEC-0028` | handoff readiness is separate from build/runtime readiness; deferred execution requires explicit receipts |
| `AAI-DEC-0027` | organizational/domain visibility and discovery do not transfer authority |

## CANONICAL — Specs disponibles

| Rango | Estado de diseño | Nota |
|---|---|---|
| `AAI-SPEC-0001..0003` | `DRAFT` | bootstrap institucional, análisis cross-vector y Desktop handoff |
| `AAI-SPEC-0004..0008` | `DRAFT / FORMALIZED` | promoción, contexto, policy, ingestion y projection |
| `AAI-SPEC-0009` | `DRAFT / FORMALIZED v0.2` | Work/session metamodel, Task, delegation y lifecycle |
| `AAI-SPEC-0010` | `DRAFT / FORMALIZED` | Question y knowledge request lifecycle |
| `AAI-SPEC-0011..0037` | mezcla `DISCOVERED/DRAFT` | consultar catálogo; no asumir formalización |
| `BNK-SPEC-*` | contexto/example specs | no convertir ejemplos en estándares corporativos |

Ninguna formalización de diseño eleva implementation/test/runtime status.

## CANONICAL — restricciones actuales

- No implementación ni writes externos.
- No envío a Devin.
- No nuevo prompt Devin.
- No Graph ADR final.
- No Planning/Sprint completo.
- No catálogo exacto de Tools/Skills.
- No MCP definitivo, Storage Roles u OpenShift Evolution.
- No políticas bancarias derivadas de ejemplos.
- No revelar secretos, credenciales, PAN ni datos sensibles.
- No usar Prompt/Wave history como operating model post-cutover.
- No inventar organization/owners/Domain Workspaces, automation readiness or `JavaFizz/SpecFizz` meaning.

## DERIVED — baseline actual

- Architecture AI fue reportado `PARTIALLY_IMPLEMENTED`.
- Documentación ~95% y código ~85% fueron porcentajes reportados, no verificados.
- La captura reportó Java 8 efectivo frente a Java 21 requerido.
- Tests: 18 archivos/60+ casos estimados o reportados; no existe ejecución observada.
- Spring Boot 3.2.1, SQLite/Hibernate SQLite, Infinispan 14.0.21.Final, JanusGraph 1.0.0/Berkeley DB JE, JGit, Tika, POI, PDFBox, Flyway y WebSocket fueron reportados; repo/config/runtime no están observados.
- 30 Tools y 16 Skills fueron reportadas; sus catálogos exactos no están disponibles.

Estos datos permanecen `DERIVED / REPORTED_NOT_VERIFIED` hasta `SER-002`, `SER-003` y `SER-006`.

## DERIVED — contexto bancario disponible

Existe contexto parcial de capacidades transversales y soluciones ejemplo: GLUON/Gravity Plus, API gateways, Cipher Service, Card Security/JWKS, PAN anonymizer, Redis, Oracle/Exadata, Kafka, MQ, OpenShift, Control-M, fraude, PCI, identidad y criptografía.

Sólo sirve como bootstrap contextual. Owners, IDs, interfaces, versiones y policies canónicas permanecen `BLOCKED_BY_SOURCE(SER-007)`.

## PROPOSAL — bootstrap assets/Skills

- Assets objetivo: `AGENTS.md`, `BOOTSTRAP.md`, `CONTEXT_PACK.md`, `REPOSITORY_MAP.md`, Evolution Strategy, Roadmap y Handoff Manifest.
- Skills candidatas: project-bootstrap, spec-first-implementation, implementation-gap-analysis, architecture-change, test-and-verification, knowledge-migration, dependency-impact-analysis y planning-execution.
- Blueprint puede ayudar a representar current/target/evolution, pero permanece `PROPOSAL`.

No instalar ni tratar estas Skills como parte de las 16 reportadas sin mapping/evidence.

## DERIVED — capability y operating model

- El Target Capability Map agrupa 23 capabilities candidatas/transversales; no son 23 Specs nuevas.
- El dependency graph conserva 24 edges sustentados y dos critical paths documentales: continuidad/autonomía y promoción/conocimiento.
- `WORK_MODEL_V1`: Current State → Task/Work Item → Work Package → authorized capabilities → execution → verification → evidence → StateUpdateDelta → next work.
- `TARGET_OPERATING_MODEL`: planificación por capabilities/dependencies, multi-agent controlado, Harness/Loop, investigación y evolución gobernada.
- `Executable Frontier`: descriptive view of currently eligible independent work; actual frontier remains blocked until `SER-002/003/006` reconciliation.
- Federated domain evolution observes/models/reconciles before integration; local evidence can enrich central knowledge through 0007/0004 without ownership transfer.
- Tree decomposes; Graph relates; Assurance supports claims; Loop advances state. This derived synthesis selects no technology/framework.
- El modelo de prioridad de autosuficiencia aún no tiene weights ni validación: `PRIORITIZATION_MODEL_INCOMPLETE`.

Fuentes: `../54_CROSS_CUTTING_CAPABILITY_INVENTORY.md`, `../57_CAPABILITY_DEPENDENCY_AND_AUTONOMY_CRITICAL_PATH.md`, `../58_OPERATING_MODEL_AND_EXPANSION_CONTRACT.md`.

## BLOCKED_BY_SOURCE — fuentes críticas

| SER | Bloquea principalmente |
|---|---|
| `SER-001` | exhaustividad de chats y rationale histórico |
| `SER-002` | Repository Map, code/spec/test mapping, event/API implementation |
| `SER-003` | baseline Devin original |
| `SER-004` | 30 Tools, schemas, policies y handlers |
| `SER-005` | 16 Skills, versiones y consumers |
| `SER-006` | Java 21 build/tests/runtime verification |
| `SER-007` | bank catalogs, owners y policies |
| `SER-008` | Graph ADR |
| `SER-009` | Devin Desktop/API/bootstrap capabilities |
| `SER-010` | Planning/Sprint completo |
| `SER-011` | standards/JSR/RFC adoption register |
| `SER-012` | prompt/run sequence real |
| `SER-013` | acceso/snapshot del bootstrap staging repository |
| `SER-014` | organizational domains, owners, authorities and capability inventory |

## Navegación operativa

| Necesidad | Fuente |
|---|---|
| master context | `../00_MASTER_CONTEXT.md` |
| Specs y relaciones | `../22_SPECIFICATION_CATALOG.md`, `../23_SPEC_RELATIONSHIP_MAP.md` |
| requirements→evidence | `../24_REQUIREMENTS_TRACEABILITY.md` |
| implementación/gaps/tests | `../26_CURRENT_IMPLEMENTATION_BASELINE.md`, `../27_IMPLEMENTATION_GAP_MATRIX.md`, `../28_TEST_AND_VALIDATION_STATUS.md` |
| prompts y resultados | `../29_PROMPT_EXECUTION_HISTORY.md`, `../30_DEVIN_RESULTS_REGISTER.md` |
| questions/conflicts | `../31_OPEN_QUESTIONS.md`, `../32_CONTRADICTIONS_AND_GAPS.md` |
| evolución | `../41_EVOLUTION_STRATEGY_DRAFT.md` |
| source requests/no-loss | `../43_SOURCE_EXTRACTION_REQUESTS.md`, `../44_NO_LOSS_REVIEW.md` |
| Work/Question contracts | `../specs/AAI-SPEC-0009-*`, `../specs/AAI-SPEC-0010-*`, `../schemas/` |
| Seed/DNA/capabilities | `../55_SEED_V1_ARCHITECTURAL_DNA.md`, `../54_CROSS_CUTTING_CAPABILITY_INVENTORY.md`, `../56_INITIAL_KNOWLEDGE_AND_TARGET_MODEL.md` |
| dependencies/operating model | `../57_CAPABILITY_DEPENDENCY_AND_AUTONOMY_CRITICAL_PATH.md`, `../58_OPERATING_MODEL_AND_EXPANSION_CONTRACT.md` |
| cutover/readiness | `../60_SEED_STAGING_CUTOVER_AND_TRANSPORT.md`, `../61_SEED_V1_READINESS_AND_ACCEPTANCE.md` |
| federation/knowledge geometry | `../79_FEDERATED_ORGANIZATIONAL_EVOLUTION.md`, `../80_KNOWLEDGE_GEOMETRY_AND_ASSURANCE.md` |
| post-handoff obligations | `../82_DEVIN_EXPANSION_OBLIGATIONS.md` |
| acceptance runbook/status | `ACCEPTANCE.md`, `../86_SEED_ACCEPTANCE_PREPARATION_STATUS.md` |

## Readiness

`HAPPY_HANDOFF_READY = TRUE` for delivery to Devin bootstrap.

`SPECIFICATION_BASELINE_READY_FOR_BUILD = FALSE` until SER-002/003/006 receipts exist on a reconciled real commit.

Razón: G3, G4, G5, G9, G10 y G11 aún carecen de evidencia operativa suficiente; repo, runtime, catálogos exactos, tests y fuentes institucionales siguen bloqueados. `KNOWN_INTENT_COVERAGE` es alto pero no demuestra specification/implementation/verification completeness.

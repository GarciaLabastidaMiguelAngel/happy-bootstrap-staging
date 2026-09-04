# BOOTSTRAP.md — Happy / Architecture AI Skeleton

## Control

| Campo | Valor |
|---|---|
| `asset_id` | `HAPPY-BOOT-0002` |
| `version` | `0.2.0-draft` |
| `status` | `DRAFT` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `execution_status` | `NOT_EXECUTED` |
| `target_runtime` | `BLOCKED_BY_SOURCE(SER-009)` |
| `repository_binding` | `BLOCKED_BY_SOURCE(SER-002)` |

Este skeleton define cómo una sesión futura consumiría Seed V1 desde repository root, por clone o ZIP. No es un prompt enviado, no concede permisos y no autoriza implementación. La ejecución de aceptación se gobierna además por `ACCEPTANCE.md`.

## Etiquetas

- `CANONICAL`: leer como regla vigente.
- `DERIVED`: verificar contra source/baseline antes de actuar.
- `PROPOSAL`: evaluar; no activar automáticamente.
- `BLOCKED_BY_SOURCE`: detener sólo el trabajo dependiente y emitir gap/SER.

## CANONICAL — resultado esperado del bootstrap

El bootstrap no modifica arquitectura. Produce un `BOOTSTRAP_RECEIPT` que demuestra:

- qué snapshot, assets, Specs y decisiones fueron leídos;
- qué repositorio/commit/runtime se observaron;
- qué capacidades, Skills y Tools están realmente disponibles;
- qué información está stale, conflicted o ausente;
- qué Work Item es elegible;
- qué escalaciones son obligatorias.

## CANONICAL — orden de lectura

1. Root `HANDOFF_MANIFEST.md`, `README.md`, `BOOTSTRAP.md` y `ACCEPTANCE.md` de la snapshot exacta; no usar manifests anteriores como autoridad vigente.
2. `../00_MASTER_CONTEXT.md`.
3. `CONTEXT_PACK.md` y `../55_SEED_V1_ARCHITECTURAL_DNA.md`; resolver discrepancias a favor de los documentos canónicos enlazados.
4. `../54_CROSS_CUTTING_CAPABILITY_INVENTORY.md`, `../56_INITIAL_KNOWLEDGE_AND_TARGET_MODEL.md` y `../57_CAPABILITY_DEPENDENCY_AND_AUTONOMY_CRITICAL_PATH.md`.
5. `../58_OPERATING_MODEL_AND_EXPANSION_CONTRACT.md`, `../59_TECHNOLOGY_INFRASTRUCTURE_AND_EVOLUTION_MODEL.md` y `../61_SEED_V1_READINESS_AND_ACCEPTANCE.md`.
6. `../79_FEDERATED_ORGANIZATIONAL_EVOLUTION.md`, `../80_KNOWLEDGE_GEOMETRY_AND_ASSURANCE.md` y `../82_DEVIN_EXPANSION_OBLIGATIONS.md`.
7. `../26_CURRENT_IMPLEMENTATION_BASELINE.md` y `../27_IMPLEMENTATION_GAP_MATRIX.md`.
8. decision table in `../00_MASTER_CONTEXT.md`, `../../wave2_content/AAI-DOC-0201-DECISION-BASELINE.md` y `../32_CONTRADICTIONS_AND_GAPS.md`.
9. `../22_SPECIFICATION_CATALOG.md`, Specs activas y `../23_SPEC_RELATIONSHIP_MAP.md`.
10. `../24_REQUIREMENTS_TRACEABILITY.md`, `../28_TEST_AND_VALIDATION_STATUS.md`.
11. `AGENTS.md` y `../42_BOOTSTRAP_SKILL_CANDIDATES.md`.
12. `REPOSITORY_MAP.md` y `../60_SEED_STAGING_CUTOVER_AND_TRANSPORT.md`.
13. `../31_OPEN_QUESTIONS.md`, `../43_SOURCE_EXTRACTION_REQUESTS.md`, `../44_NO_LOSS_REVIEW.md`, `../62_RESEARCH_OBLIGATIONS_STANDARDS_AND_GAPS.md` y `../63_KNOWN_INTENT_AND_FUTURE_NO_LOSS_REVIEW.md`.
14. `../29_PROMPT_EXECUTION_HISTORY.md` sólo como provenance; nunca derivar el siguiente trabajo o número de prompt.
15. `../86_SEED_ACCEPTANCE_PREPARATION_STATUS.md` para el último estado de preparación/gates, sin confundirlo con ejecución.

Los nombres de archivos objetivo que aún no existen se reportan como gaps; no se reemplazan con supuestos.

## CANONICAL — preflight sin side effects

1. Confirmar `DRAFT / PREPARED_NOT_DELIVERED` y `HAPPY_HANDOFF_READY` actual.
2. Calcular/validar hashes del pack y archivos de entrada disponibles.
3. Confirmar snapshot, delta y staleness.
4. Detectar repository root/branch/commit sólo si existe acceso autorizado.
5. Detectar JDK, build tool y runtime sin instalar o modificar nada.
6. Enumerar Specs/decisions activas y conflictos abiertos.
7. Enumerar Skills/Tools reales; distinguirlas de candidatas.
8. Evaluar permisos y external access sin exponer credenciales.
9. Reconciliar Work Items contra dependencias y gates.
10. Emitir receipt; no ejecutar el siguiente Work Item dentro del preflight.
11. Evaluar G1..G12 sin cambiar su estado por narrativa; aplicar el alcance handoff/build/acceptance de AAI-DEC-0028 y docs 87/88.
12. Confirmar que el staging, si existe, es transporte y no la autoridad operacional.
13. Confirmar que toda afirmación material machine-verifiable posee verification strategy; el LLM nunca se autocertifica.

## CANONICAL — elección del siguiente Work Item

Aplicar en este orden:

1. snapshot current;
2. Task version current;
3. dependencies satisfied;
4. entry criteria satisfied;
5. context readiness suficiente;
6. frozen decisions cargadas;
7. Spec y output contract disponibles;
8. capability/Skill disponible;
9. Tool policy permite las acciones;
10. verification/evidence ejecutables;
11. no mandatory escalation.

Si hay varios Work Items elegibles, sólo proponer orden/paralelismo sustentado por dependencias y ausencia de overlap. Planning/Sprint completo no se reconstruye (`SER-010`).

La vista descriptiva `Executable Frontier` se deriva de estas reglas; no es un tipo de plataforma congelado. Trabajo independiente puede ser candidato a paralelo sólo cuando no comparte hard dependency, write overlap, authority gate o resource/security constraint.

La priorización de autosuficiencia permanece `PRIORITIZATION_MODEL_INCOMPLETE`: puede usar blockers, dependencias, seguridad, governance, evidence, context, verification, observability, usability y operational readiness, pero no inventar weights ni secuencia total.

## CANONICAL — reconciliación y expansión

1. reconstruir current state desde Seed + repo/runtime observado;
2. separar `designed`, `implemented`, `verified` y `blocked`;
3. calcular gaps y capability dependencies con evidence;
4. seleccionar sólo work elegible;
5. expandir capability mediante `Requirement → Decision → Spec → Implementation → Test → Evidence`;
6. producir `StateUpdateDelta` y recalcular el siguiente trabajo;
7. escalar únicamente blockers irreducibles mediante `Decision Package`.
8. for domain work, preserve owner/authority, start with permission-aware observation and resolve `EXP-3E-001..012` without copy-to-core assumptions;
9. resolve `EXP-ACCEPT-001..009` only after source-backed reconciliation: Self-Knowledge/Documentation, governed ingestion, executable-frontier/autonomous expansion, environment/ALM discovery, assurance, adoption and multi-architect usability.
10. distinguish discovered/reachable/configured from authorized/verified/ready/adoptable; credentials never grant institutional permission.

Waves y Prompt History dejan de orquestar tras cutover.

## CANONICAL — reglas de ejecución posterior

- `AAI-SPEC-0009` gobierna Task, delegation, work state y updated-state delta.
- `AAI-SPEC-0010` gobierna Questions, evidence gaps y escalation.
- `AAI-SPEC-0005` gobierna el Work Package.
- `AAI-SPEC-0006` gobierna Tools y approvals.
- `AAI-SPEC-0036` deberá gobernar envelope/transport; su contrato actual es provisional.
- El bootstrap nunca transforma `DESIGNED` en `IMPLEMENTED` ni `CODE_REPORTED` en `VERIFIED`.

## CANONICAL — escalamiento

Emitir una Question/escalation únicamente para:

- `HUMAN_DECISION_REQUIRED`;
- `ARCHITECTURE_CONFLICT`;
- `SECURITY_POLICY_CONFLICT`;
- `MISSING_EXTERNAL_ACCESS`;
- `UNRESOLVED_REQUIREMENT`.

Cada escalation incluye `questionId`, Task bloqueada, contexto ya consultado, evidence refs, impacto, opciones y autoridad requerida.

## DERIVED — estado de arranque conocido

- Producto: Happy / Architecture AI.
- Arquitectura: local-first antes de centralización.
- Runtime objetivo reportado: Java 21 + Spring Boot; build efectivo no verificado.
- Implementación reportada: parcial; repo y baseline original ausentes.
- Git: autoridad canónica; stores locales derivados/operacionales.
- Specs formales: `AAI-SPEC-0001..0010`; ninguna está aprobada o verificada por esta formalización.
- Prompt Devin confirmado: runs `00` y `01`; siguiente sequence unresolved.
- Seed V1 documentary model: establecido; gates operativos todavía no ejecutados.
- Bootstrap staging repository: observado por declaración del usuario; acceso/snapshot local bloqueado por `SER-013`.
- Federated/domain model: target and authority boundary documented; actual organization/owner inventory blocked by `SER-014`.
- Graph ADR, Sprint completo, Tools/Skills exactos, MCP definitivo, Storage Roles, OpenShift y policies bancarias permanecen diferidos.

## PROPOSAL — formato BOOTSTRAP_RECEIPT

```yaml
receiptId: BOOT-<generated>
status: COMPLETE_WITH_GAPS | BLOCKED | FAILED
snapshot:
  id: <observed>
  delta: <observed>
  hashesVerified: []
repository:
  state: OBSERVED | BLOCKED_BY_SOURCE
  root: null
  branch: null
  commit: null
runtime:
  jdk: null
  buildTool: null
  buildExecuted: false
knowledge:
  assetsRead: []
  frozenDecisions: []
  activeSpecs: []
capabilities:
  skillsObserved: []
  toolsObserved: []
  permissionsMissing: []
work:
  eligible: []
  blocked: []
  selectedNext: null
escalations: []
evidenceRefs: []
stateDeltaProposed: false
```

El schema ejecutable del receipt queda como `PROPOSAL`; requiere confirmar formato/runtime con `SER-009`.

## BLOCKED_BY_SOURCE

| Check | Fuente | Acción segura |
|---|---|---|
| repo/branch/commit/mapa físico | `SER-002` | reportar null + blocker |
| baseline original Devin | `SER-003` | usar sólo baseline derivado con qualifier |
| Tools exactas | `SER-004` | no construir allowlist |
| Skills exactas | `SER-005` | no afirmar instalación |
| Java/tests | `SER-006` | no ejecutar ni declarar verification |
| bank policies/owners | `SER-007` | no convertir examples en standard |
| Graph decision | `SER-008` | no seleccionar adapter |
| Devin runtime/bootstrap format | `SER-009` | no instalar AGENTS/Skills |
| Sprint model | `SER-010` | no generar backlog/Sprint completo |
| standards adoption | `SER-011` | no afirmar policy institucional |
| prompt history | `SER-012` | no numerar nuevo prompt |
| staging access/snapshot | `SER-013` | generar package local, no afirmar sync |
| organizational domains/authority | `SER-014` | no inventar owner, policy or operating model |

La recuperación que habilita aceptación sigue `SER-002 → SER-003 → SER-006`; no se cambia por conveniencia ni se sustituye con inferencia.

## CANONICAL — gates de Seed V1

`G1 Identity/North Star`, `G2 DNA/No-Loss`, `G3 bootstrap reproducibility`, `G4 current-state reconciliation`, `G5 autonomous next work`, `G6 expansion contract`, `G7 governed escalation`, `G8 state/evidence fidelity`, `G9 cross-cutting completeness`, `G10 restart/resume`, `G11 package integrity` y `G12 future unknowns`.

Gates conservan su estado factual. La ejecución real de G3/G4/G5/G9/G10 se difiere explícitamente al bootstrap y no bloquea el handoff cuando existe contrato/receipt; sí puede bloquear build o aceptación final. El assessment vigente está en `../87_SEED_FINAL_CLOSURE_AND_HANDOFF_READINESS.md`.

## CANONICAL — first-run contract

`VERIFY SEED → DISCOVER ENVIRONMENT → ImplementationSourceReceipt → BaselineReconciliationReceipt → BuildRuntimeReceipt → CURRENT STATE → BootstrapReceipt → EXECUTABLE FRONTIER → SAFE PARALLEL WORK`

Use the schemas in `../schemas/`. All repository, baseline and build/runtime receipts disclose commit identity; mismatched commits become explicit drift and cannot certify build readiness. The compact deferred register is `../88_DEFERRED_TO_DEVIN_BOOTSTRAP.md`.

## Exit criteria de este skeleton

Este archivo sólo puede pasar de skeleton a bootstrap ejecutable cuando:

- se conoce su ubicación/precedencia en el repo/runtime;
- existe manifest con hashes/versions;
- Repository Map está respaldado por commit;
- Skills/Tools observadas tienen versión y policy;
- BootstrapReceipt posee schema y fixture;
- un dry-run de lectura produce el mismo baseline y next Work Item en dos sesiones limpias;
- no ejecuta writes ni reabre decisiones durante bootstrap.
- el escenario `SEED-ACCEPT-001` produce receipt, gap analysis, work selection, verification/evidence y resume decision sin “next wave”.

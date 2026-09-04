# 41 — Evolution Strategy Draft

## Control

- **classification:** `PROPOSAL`
- **status:** `DRAFT`
- **devin_status:** `PREPARED_NOT_DELIVERED`
- **source_basis:** Prompt 00, roadmap existente, Specs 0019/0031 y alineación previa a Oleada 3.

## Principio

La evolución se gobierna por capacidades y evidencia. No se selecciona una tecnología futura por disponibilidad accidental ni se automatiza una decisión que requiere autoridad humana.

## Horizonte

| Horizonte | Contenido |
|---|---|
| `NOW` | consolidar conocimiento, formalizar contratos vendor-neutral, reconciliar prompts, preparar extracción de fuentes, mantener local-first |
| `NEXT` | baseline reproducible Java 21, repository mapping, code/spec/test traceability, bootstrap assets operativos, Skills iniciales y Sprint/Work Items |
| `LATER` | integraciones corporativas, ciclo documental completo, centralización selectiva OpenShift y operación multiusuario |
| `CONDITIONAL` | Neo4j, vector store, Redis/Kafka centrales, A2A, Spring AI/small models y servicios compartidos; requieren gates |
| `EXPERIMENTAL` | Blueprint, ML/classification, evaluación agentic→deterministic y evolución de Skills basada en telemetría |
| `REJECTED` | custom agent runtime/orchestrator que replique Devin; promoción silenciosa; central-first; dependencia inicial obligatoria de Postgres/Redis/custom RAG; dashboard web como superficie primaria |

## Capacidades de evolución

### EVOL-001 — Bootstrap operativo

- **horizon:** `NOW → NEXT`
- **objective:** permitir que una sesión nueva de Devin reconstruya estado y siguiente trabajo sin redescubrimiento.
- **current_state:** documentación extensa, índices y gaps; bootstrap operativo incompleto.
- **target_state:** manifest + bootstrap receipt + context pack + repo map + baseline + Skills/Tools versionadas.
- **dependencies:** fuentes SER-002/003/004/005, Specs 0001/0005/0014/0030.
- **entry_criteria:** snapshot consistente y prompt ledger reconciliado.
- **exit_criteria:** bootstrap repetible sobre repo conocido, sin preguntas sobre decisiones cerradas.
- **validation:** dos sesiones limpias producen el mismo baseline y próximo Work Item.
- **known_risks:** stale context, package ambiguity, implicit permissions.
- **human_decision_required:** sólo para decisiones/gaps explícitos.

### EVOL-002 — Planning/Sprint

- **horizon:** `NEXT`
- **objective:** convertir estrategia y dependencias en Work Items ejecutables y verificables.
- **current_state:** task/delegation/scheduler parcialmente recuperados; Sprint definido por el usuario pero sin spec histórica completa.
- **target_state:** Sprint versionado con objetivo, alcance, backlog, dependencias, entry/exit, owners, Skills/Tools, evidence y cierre.
- **dependencies:** Specs 0009, 0015, 0018, 0029 y 0037; SER-010.
- **entry_criteria:** taxonomía estable y Work Item contract.
- **exit_criteria:** Devin puede escoger sólo trabajo READY y justificar dependencia/gate.
- **validation:** replay del plan, bloqueo correcto y trazabilidad Work Item→spec→test→evidence.
- **known_risks:** confundir planning governance con orchestration engine; ejecución fuera de scope.
- **human_decision_required:** prioridades materiales, cambios de alcance y aceptación de riesgo.

### EVOL-003 — Skills bootstrap y evolución

- **horizon:** `NEXT → LATER`
- **objective:** codificar comportamiento operativo sin volverlo inmutable.
- **current_state:** 16 Skills reportadas, catálogo no observado; ocho candidatas de bootstrap.
- **target_state:** Skills versionadas, ligadas a Specs/Tools, con telemetría, tests y criterio de evolución.
- **dependencies:** SER-005, Specs 0015/0017/0019/0022/0029.
- **entry_criteria:** propósito, inputs, outputs, permisos y consumer definidos.
- **exit_criteria:** run evidence demuestra repetibilidad y mejora contra baseline.
- **validation:** fixture/golden task, policy checks y comparación de versiones.
- **known_risks:** skill drift, prompt injection, sobreposición con tools/Java.
- **human_decision_required:** cambio que altere decisiones, autoridad o side effects.

### EVOL-004 — Tool y capability internalization

- **horizon:** `NEXT → LATER`
- **objective:** mover comportamiento repetitivo desde razonamiento hacia Skill, Tool o servicio determinístico.
- **current_state:** estados de evolución definidos; catálogo real incompleto.
- **target_state:** ciclo `KEEP_AGENTIC | IMPROVE_SKILL | CREATE_TOOL | MOVE_TO_JAVA_SERVICE | CREATE_ARCHITECTURE_TEST | CENTRALIZE_CAPABILITY | RETIRE` gobernado por evidencia.
- **dependencies:** Specs 0006, 0017, 0019, 0029; tool catalog real.
- **entry_criteria:** repetición/latencia/costo/errores medidos.
- **exit_criteria:** alternativa mejora calidad/costo/latencia sin reducir seguridad ni trazabilidad.
- **validation:** A/B o replay sobre dataset aprobado.
- **known_risks:** automatizar juicio, crear capability duplicada, regresión silenciosa.
- **human_decision_required:** centralización, cambio de autoridad o retiro material.

### EVOL-005 — Knowledge, Graph y RAG

- **horizon:** `NOW → CONDITIONAL`
- **objective:** resolver contexto mínimo, evidencia, impacto y relaciones con stores intercambiables.
- **current_state:** Git canónico; knowledge model diseñado; JanusGraph reportado; Neo4j dirección condicionada; vector no seleccionado.
- **target_state:** ports y contratos estables; projection/recovery probados; Graph y vector elegidos por ADR/benchmark.
- **dependencies:** Specs 0004/0005/0007/0008/0024/0025/0026; SER-008.
- **entry_criteria:** canonical model, query corpus, seguridad y recovery expectations definidos.
- **exit_criteria:** consistencia, temporalidad, provenance, recovery y benchmark reproducibles.
- **validation:** adapter contract suite + golden queries + rebuild from canonical.
- **known_risks:** engine lock-in, licencia, knowledge poisoning, stale projections.
- **human_decision_required:** motor, licencia, deployment y datos sensibles.

### EVOL-006 — ML / Spring AI / modelos de menor costo

- **horizon:** `EXPERIMENTAL / CONDITIONAL`
- **objective:** reducir costo o latencia en clasificación/análisis estable sin degradar calidad.
- **current_state:** Spring AI es candidato; no es Architecture AI ni baseline obligatorio.
- **target_state:** capabilities puntuales con benchmark contra Devin directo.
- **dependencies:** evaluation dataset, observabilidad, model/security policy y Spec 0019/0029.
- **entry_criteria:** tarea repetitiva, métrica y golden set disponibles.
- **exit_criteria:** calidad, latencia, costo, mantenimiento, observabilidad y seguridad cumplen umbral aprobado.
- **validation:** evaluación reproducible, error distribution y fallbacks.
- **known_risks:** drift, falsa confianza, data leakage, costo oculto.
- **human_decision_required:** uso de modelos externos/datos sensibles y producción.

### EVOL-007 — Local a central/OpenShift

- **horizon:** `LATER / CONDITIONAL`
- **objective:** centralizar únicamente capacidades que requieran colaboración, escala, disponibilidad o gobierno compartido.
- **current_state:** operación local-first; OpenShift es evolución, no prerrequisito.
- **target_state:** adapters/stores separables, contratos compatibles y servicios compartidos seleccionados.
- **dependencies:** Spec 0031, volumetría, SLA, RTO/RPO, seguridad, ownership y licencia.
- **entry_criteria:** trigger cuantificado de multiusuario/escala/operación.
- **exit_criteria:** HA, backup/restore, observabilidad, seguridad y migración verificadas.
- **validation:** load, failover, recovery y compatibility tests.
- **known_risks:** centralización prematura, costos, complejidad, datos/tenancy.
- **human_decision_required:** topology, stores administrados, presupuesto y risk acceptance.

### EVOL-008 — Blueprint de convergencia

- **horizon:** `EXPERIMENTAL`
- **classification:** `PROPOSAL`
- **objective:** visualizar estado actual, objetivo, etapas, dependencias y criterios de entrada/salida.
- **current_state:** concepto propuesto, no aprobado.
- **target_state:** sólo si se valida, proyección derivada de Specs/roadmap/Sprint; nunca nueva fuente canónica.
- **dependencies:** modelo de estado/evolución y aprobación humana.
- **validation:** reduce ambigüedad sin duplicar roadmap ni baseline.
- **known_risks:** convertir una vista en sistema de verdad paralelo.
- **human_decision_required:** aprobación de adopción.

### EVOL-009 — Seed V1 → autonomous expansion

- **horizon:** `NOW → NEXT`.
- **objective:** entregar raíces, DNA, capability/dependency map, operating model y Expansion Contract suficientes para que Devin expanda sin nuevas waves/prompts.
- **current_state:** Seed model/docs 52–63; skeletons DRAFT; quality gates not passed.
- **target_state:** immutable transport-independent Seed, bootstrap receipt, current-state reconciliation, next-work and restart acceptance.
- **dependencies:** G1..G12; SER-001..013; decisions AAI-DEC-0020..0023.
- **entry_criteria:** known intent visible, manifest/hash/navigation coherent, no sensitive content.
- **exit_criteria:** G1..G11 PASS, cutover receipt and no chat/wave dependency.
- **validation:** `SEED-ACCEPT-001` plus two-session operational equivalence.
- **known_risks:** compression loss, passive-doc handoff, staging/implementation confusion.
- **human_decision_required:** cutover and target organizational repo/session.

### EVOL-010 — Knowledge/operating model evolution

- **horizon:** `NEXT → LATER`.
- **objective:** permit layers, vectors, relations, capabilities and work model to evolve without semantic/history loss.
- **current_state:** `INITIAL_KNOWLEDGE_MODEL_V1` is derived DRAFT; Work Model V1 defined.
- **target_state:** versioned model changes with evidence, impact, compatibility, migration, verification and rollback.
- **dependencies:** 0004/0014/0019/0022/0024/0029 and Harness evidence.
- **entry_criteria:** limitation/use case evidenced.
- **exit_criteria:** new model version verified; old IDs/history/query compatibility addressed.
- **validation:** model fixture migration and state/restart comparison.
- **known_risks:** ontology freeze, silent category merge, query/projection drift.
- **human_decision_required:** breaking semantic change or authority boundary.

### EVOL-011 — Loop/Harness institutionalization

- **horizon:** `NEXT / CONDITIONAL`.
- **objective:** use failure/result/evidence to select next iteration and migrate stable behavior safely.
- **current_state:** Loop/Harness target defined; no engine or implementation.
- **target_state:** bounded progress/exit/escalation, reproducible evaluation and evidence-driven evolution.
- **dependencies:** 0006/0009/0010/0018/0019/0020–0022/0027/0029/0036/0037; RO-3C-001/005/006.
- **entry_criteria:** objective, metrics, evidence, allowed actions, budgets and exit/escalation fixed.
- **exit_criteria:** iteration comparison and state delta; no blind retry or observation→canonical write.
- **validation:** repeated-failure, progress, replacement-agent continuity and promotion negative tests.
- **known_risks:** loop engine duplication, infinite retry, goal drift and autoapproval.
- **human_decision_required:** process standard composition and autonomy envelope.

### EVOL-012 — Federated domain capability evolution

- **horizon:** `NEXT → LATER / CONDITIONAL`.
- **objective:** learn and align real organizational capabilities without taking domain ownership or creating a super-governance layer.
- **current_state:** authority boundary and target lifecycle documented; organizational catalog/process/runtime sources absent.
- **target_state:** permission-aware observation, domain/central reconciliation, capability federation and Domain Context/UX projections with real owner/authority.
- **dependencies:** CAP-3C-009/016/022; Specs 0004–0007/0015–0017/0019/0024/0027/0032; `SER-014`; `RO-3E-004`.
- **entry_criteria:** domain scope, source authority, permissions, owner/operator/approver and continuity constraints known.
- **exit_criteria:** capability is evidence-classified as keep-local/federate/promote/supersede/reject; no ownership drift.
- **validation:** `FX-K`, negative authority/side-effect tests, local-variant reconciliation and Decision Package.
- **known_risks:** central-model overreach, local knowledge loss, duplicate capabilities, covert organizational redesign.
- **human_decision_required:** integration agreement, shared promotion, operating-model or authority change.

### EVOL-013 — Deterministic maturity and human value

- **horizon:** `NEXT → LATER / CONDITIONAL`.
- **objective:** move work to deterministic execution when rules are sufficient while preserving human authority, knowledge production and higher-value responsibilities.
- **current_state:** routing/migration contract documented; no capability-specific readiness evidence.
- **target_state:** evidence-backed manual/assisted/agentic/hybrid/deterministic choice, shadow comparison, rollback and approved role transition.
- **dependencies:** 0019/0020/0022/0029, Harness/runtime history, domain owner and cross-cutting checks.
- **entry_criteria:** stable behavior hypothesis, baseline, exception corpus, metrics, risk and owner known.
- **exit_criteria:** verified disposition/promotion or justified retention of current form; human-value transition recorded.
- **validation:** equivalence, exceptions, security, operations, cost, rollback and authority tests.
- **known_risks:** automation from possibility/repetition, deskilling, unowned exceptions, authority bypass.
- **human_decision_required:** production automation and every concrete organizational/role change.

# AAI-SPEC-0009 — Task, Delegation & Work Lifecycle

## Control

| Campo | Valor |
|---|---|
| `spec_id` | `AAI-SPEC-0009` |
| `version` | `0.2.0-draft` |
| `status` | `DRAFT` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `type` | `OPERATION / MODEL / WORKFLOW` |
| `implementation_status` | `PARTIAL_OR_UNKNOWN; NOT_VERIFIED` |
| `valid_from` | `NOT_APPLICABLE_UNTIL_APPROVED` |
| `supersedes` | `0.1.0-draft` as a documentary evolution; no approved baseline is superseded |
| `change_reason` | Oleada 3C adds the Work & Session Metamodel and continuity invariants without changing implementation status or freezing Planning/Sprint |
| `source_evidence` | `HK-SRC-0001`; `HK-SRC-0017`; `AAI-SRC-0039`; `AAI-DOC-0105`; `AAI-DOC-0302`; `03-AGENT-OPERATING-MODEL`; `AAI-DOC-0601`; `AAI-DEC-0004`; `AAI-DEC-0014`; `AAI-DEC-0015`; `AAI-DEC-0019` |

Esta formalización conserva el lifecycle, las reglas de delegación y el modelo de coordinación observados. No declara que exista una implementación compatible ni completa. Los paths, clases, endpoints, tablas, catálogo real de Skills/Tools y receipts ejecutados permanecen `BLOCKED_BY_SOURCE` por `SER-002`, `SER-004`, `SER-005` y `SER-006`.

## Propósito

Mantener una identidad durable para cada Architecture Task y sus unidades ejecutables; gobernar su avance desde la captura hasta el cierre; correlacionar contexto, ejecución agentic o determinística, revisión, publicación y evidencia; y preservar los cambios de ownership mediante registros de delegación explícitos.

El lifecycle permite que Devin continúe trabajo ya definido sin pedir nuevamente contexto conocido, pero no le otorga autoridad institucional ni capacidad de autoaprobar, publicar o aceptar riesgo.

## Alcance

- Architecture Tasks originadas por demanda, pregunta, scheduler, finding, riesgo o trabajo derivado.
- Work Items ejecutables representados por una Task o child Task con `parentTaskId`.
- Ownership, assignment y delegation chain.
- Preconditions, dependencias, output contract, verificación, review y evidencia.
- Routing hacia Devin, servicios determinísticos o autoridad humana.
- State transitions, receipts y eventos semánticos correlacionables.
- Bloqueos y escalamiento hacia `AAI-SPEC-0010`.

## No objetivos

- No define el modelo completo de Planning/Sprint; éste permanece en `AAI-SPEC-0037`, condicionado a `SER-010`.
- No crea un motor de planificación u orquestación que replique a Devin.
- No define el catálogo exacto de 30 Tools ni 16 Skills.
- No fija transporte, topics, queues, guarantees, outbox físico o persistencia; son responsabilidad de `AAI-SPEC-0036`, `0026` y evidencia de repositorio.
- No convierte GitHub Issues, Projects o branches en requisito antes de validar capacidades y repositorio.
- No implementa código ni autoriza entrega a Devin.

## Modelo conceptual

| Entidad | Responsabilidad | Identidad / vínculo |
|---|---|---|
| `ArchitectureTask` | demanda durable con objetivo, scope, estado, owner y resultado esperado | `taskId`, `version` |
| `WorkItem` | vista ejecutable de una Task o child Task; no es una segunda autoridad de estado | comparte `taskId`; child usa `parentTaskId` |
| `DelegationRecord` | conserva cambio de responsibility/assignment sin reescribir historia | `delegationId`, `taskId` |
| `ArchitectureWorkPackageRef` | fija el contexto inmutable consumido por una ejecución | `packageId`, `packageVersion`, `taskId` |
| `WorkResult` | outputs estructurados y claims producidos por una ejecución | `resultId`, `taskId`, `attempt` |
| `VerificationReceipt` | evidencia de checks/tests contra criterios | `verificationId`, `taskId`, `resultId` |
| `TransitionReceipt` | prueba de cambio de estado/version con causa y evidencia | `transitionId`, `taskId` |
| `Blocker` | condición explícita que impide avanzar | `blockerId`, type, owner, resolution trigger |

`WorkItem` es una unidad ejecutable dentro de esta spec. `Sprint` puede agrupar u ordenar Work Items, pero no cambia su lifecycle ni se infiere cuando el planning container no está observado.

## Work & Session Metamodel — extensión 3C

Esta extensión consolida entidades de continuidad y de sesión bajo la misma Spec. No crea una Spec por entidad ni afirma que exista un store, API o runtime compatible. El modelo completo de Planning/Sprint continúa fuera de alcance y condicionado por `SER-010`.

| Entidad | Naturaleza | Responsabilidad | Identidad / relación mínima | Estado de cobertura |
|---|---|---|---|---|
| `ArchitectureEngagement` | durable | marco de colaboración con objetivo, alcance institucional, actores, restricciones y outcomes | agrupa Missions; puede sobrevivir múltiples Work Sessions | `CONCEPTUAL_DRAFT` |
| `Mission` | durable | resultado coherente de alto nivel dentro de un Engagement | descompone en Work Packages/Tasks; no equivale a Sprint | `CONCEPTUAL_DRAFT` |
| `WorkSession` | durable/resumible | ventana gobernada de trabajo sobre una misión o conjunto de Tasks | se reanuda por checkpoint/context manifest; puede abarcar varias conversaciones/sesiones técnicas | `CONCEPTUAL_DRAFT` |
| `Task` / `ArchitectureTask` | durable | unidad de responsabilidad, estado, dependencia y evidencia | `taskId`, `version`; aggregate ya definido por esta Spec | `COVERED_BY_EXISTING_SPEC` |
| `WorkPackage` | durable/versionado | contexto mínimo suficiente autorizado para ejecutar trabajo complejo | `packageId`, `packageVersion`, `taskId`; definido por `AAI-SPEC-0005` | `COVERED_BY_EXISTING_SPEC` |
| `Execution` | intento durable | participación concreta de actor/agente/servicio sobre Work Item | `executionId`, attempt, inputs, outputs, receipts y baseline | `CONCEPTUAL_DRAFT`; contrato físico bloqueado |
| `Checkpoint` | durable | punto de recuperación con estado, progreso, outputs parciales, blockers y next action | ligado a WorkSession/Task/Execution y content digest | `CONCEPTUAL_DRAFT` |
| `Resume` | acción gobernada | restaura continuidad desde checkpoint y estado canónico/operacional, no desde memoria libre | valida versión, baseline, permisos y blockers antes de continuar | `CONCEPTUAL_DRAFT` |
| `Handoff` | transferencia durable | traspasa responsabilidad/ejecución/contexto sin perder ownership, restricciones o evidencia | enlaza from/to subject, manifest, scope, receipt y reanudación | `EXTENDS_DELEGATION_MODEL` |
| `Conversation` | evidencia/interfaz | intercambio de mensajes que puede aportar contexto, decisiones o evidencia | no es contenedor autoritativo de trabajo | `CONTEXTUAL_ENTITY` |
| `UserInteractionSession` | efímera | sesión de interacción humana con una superficie del producto | puede tocar varias Work Sessions o ninguna | `CONCEPTUAL_DRAFT` |
| `AgentSession` | efímera | instancia temporal de ejecución agentic | participa en Executions; nunca posee continuidad institucional | `CONCEPTUAL_DRAFT` |
| `DevinSession` | efímera/especializada | sesión concreta del runtime Devin | subtipo/rol de sesión técnica, no WorkSession | `BLOCKED_BY_SOURCE(SER-009/SER-012)` |
| `ContextManifest` | durable/versionado | manifiesto de fuentes, versiones, decisiones, Specs, permisos, gaps y digests cargados | acompaña Checkpoint/Handoff/Resume; no reemplaza Work Package | `CONCEPTUAL_DRAFT`; formato final bloqueado |

### Invariantes de continuidad

1. `WORK OUTLIVES SESSION.` La identidad, responsabilidad, estado y evidencia del trabajo no dependen de que una sesión permanezca abierta.
2. `SESSION STATE IS NOT INSTITUTIONAL MEMORY.` El estado efímero puede acelerar una iteración, pero no es evidencia ni conocimiento canónico.
3. `CONVERSATION != WORK SESSION.` Una conversación puede originar, apoyar o documentar trabajo; no sustituye su lifecycle, ownership o checkpoints.
4. `DEVIN SESSION != WORK SESSION.` Una Work Session puede continuar en múltiples sesiones Devin y una sesión Devin puede atender más de una unidad de trabajo sólo si la correlación es explícita.
5. `AGENT INSTANCE IS EPHEMERAL; WORK RESPONSIBILITY PERSISTS.` Reinicio, sustitución o pérdida de una instancia no elimina obligaciones, blockers ni evidencia requerida.
6. Reanudar exige verificar `expectedVersion`, baseline, permisos, dependencies, Context Manifest y último Checkpoint; no se reconstruye autoridad desde el historial conversacional.
7. Todo Handoff conserva owner formal, delegation scope, restricciones, outputs parciales, unresolved questions y condición de siguiente acción.
8. Context Manifest y Checkpoint son complementarios: el primero describe el contexto autorizado; el segundo prueba el estado de avance recuperable.

### Relaciones del metamodelo

- `ArchitectureEngagement PART_OF` un contexto organizacional/country scope y `CONTAINS` una o más Missions.
- `Mission DECOMPOSES_TO` Work Packages/Tasks, pero la estrategia de agrupación temporal puede pertenecer a `AAI-SPEC-0037`.
- `WorkSession ADVANCES` Tasks mediante una o más Executions y `PRODUCES` Checkpoints.
- `Execution PARTICIPATED_IN_BY` human, deterministic service, agent o Devin Session bajo delegación/policy.
- `Checkpoint ENABLES` Resume; `Handoff CARRIES` Context Manifest y checkpoint ref.
- `Conversation PROVIDES_EVIDENCE_TO` Work Session sólo después de ingesta/reconciliación; no modifica estado por sí misma.
- `ContextManifest REFERENCES` Work Package, Specs, decisions, evidence, source classifications, permissions y unresolved gaps.

### Contratos deliberadamente no fijados en 3C

- No se asignan schemas separados a Engagement, Mission, WorkSession, Execution, Checkpoint, Resume, Handoff o ContextManifest.
- Persistencia, cardinalidades finales, expiración, APIs, event names y migration rules requieren reconciliación con repositorio y estándares (`SER-002`, `SER-009`, `SER-010`, `SER-012`, Oleada 3D).
- La semántica de procesos/casos/decisiones se someterá a evaluación BPMN/CMMN/DMN antes de definir un motor custom.

## Contrato de Architecture Task

Campos mínimos:

- `taskId`, `version` y `parentTaskId` cuando sea subtarea;
- objetivo global y objetivo observable de la Task;
- intent y scope explícitos, incluidos país, dominio, solución/sistema y clasificación cuando apliquen;
- owner formal y assignee de ejecución separados cuando correspondan;
- prioridad y dependencias por identidad, sin inferir orden desde una lista textual;
- estado actual y último `TransitionReceipt`;
- `ArchitectureWorkPackageRef` cuando el trabajo requiera razonamiento contextual;
- decisiones, Specs, constraints y baselines aplicables;
- entry criteria, exit criteria y expected outputs;
- verification criteria y evidence requirements;
- capability/Skill references requeridas, sin afirmar disponibilidad;
- policy/approval requirements;
- blocker, result, verification y publication references;
- timestamps, provenance y content/state digests.

Schema subordinado: `schemas/architecture-task.schema.json`.

## Estados recuperados

Lifecycle principal:

`NEW → CONTEXT_READY → PLANNED → IN_PROGRESS → VERIFYING → HUMAN_REVIEW → APPROVED → PUBLISHED → CLOSED`

Estados alternos:

`BLOCKED`, `DEGRADED`, `REJECTED`, `CANCELLED`.

| Transición | Condición mínima | Evidencia de salida |
|---|---|---|
| `NEW → CONTEXT_READY` | identidad, objetivo, scope y owner conocidos; Work Package listo cuando sea requerido | package/readiness reference y transition receipt |
| `CONTEXT_READY → PLANNED` | outputs, dependencias, entry/exit y verification criteria registrados | plan/decomposition reference; no implica Sprint |
| `PLANNED → IN_PROGRESS` | dependencias satisfechas, assignee/delegation vigente, baseline y policy utilizables | execution attempt y actor/agent/delegation |
| `IN_PROGRESS → VERIFYING` | outputs estructurados entregados; no se afirma éxito por existencia del artefacto | `WorkResult` + evidence refs |
| `VERIFYING → HUMAN_REVIEW` | checks aplicables ejecutados o gaps declarados; efecto material identificado | `VerificationReceipt` + review request |
| `HUMAN_REVIEW → APPROVED` | autoridad válida aprueba el resultado exacto y el riesgo residual aplicable | approval/review receipt ligado a fingerprint |
| `APPROVED → PUBLISHED` | publicación o promoción requerida completada mediante puerto gobernado | publication/promotion receipt |
| `PUBLISHED → CLOSED` | outputs, evidencias, registros y delta canónico reconciliados | close receipt + updated-state delta |

Las reglas exactas para omitir una fase cuando no aplique no están observadas. Hasta formalizarlas, una fase no aplicable debe conservarse explícitamente como `NOT_APPLICABLE_WITH_RATIONALE`; no se salta silenciosamente.

## Estados alternos y recuperación

- Cualquier estado no terminal puede pasar a `BLOCKED` cuando existe una condición tipada no resuelta. Se conserva `resumeState`, owner y exit condition del blocker.
- `DEGRADED` indica que el trabajo puede conservar resultados parciales, pero no satisfacer el nivel de assurance o readiness requerido. Nunca se presenta como `APPROVED`.
- `REJECTED` conserva reviewer, rationale, evidencia y acción posterior; no borra el resultado rechazado.
- `CANCELLED` requiere actor autorizado, razón y disposición de artefactos parciales.
- La transición de retorno desde `BLOCKED` o `DEGRADED` exige nueva versión y receipt; no se reconstruye desde memoria conversacional.
- Los terminales y reglas de reactivación finales requieren validación con código/historial (`SER-001`, `SER-002`).

## Reglas de coordinación

1. Cada subtarea conserva `parentTaskId`, owner, entradas, salida y verificación.
2. Sólo se paralelizan Tasks sin dependencias ni artefactos de escritura superpuestos.
3. Contexto complejo se obtiene por `taskId` mediante `AAI-SPEC-0005`; no se vuelve a pedir al usuario lo ya gobernado.
4. Trabajo determinístico y repetible se enruta a servicio/job; síntesis o diseño contextual se enruta a Devin con Work Package.
5. Falta de evidencia abre o vincula una Architecture Question; no promueve conocimiento ni cierra la Task.
6. Decisión institucional, cambio canónico, comunicación externa o riesgo material exige revisión humana según policy.
7. Ningún agente publica, aprueba su propio output o acepta riesgo fuera de su autoridad.
8. La existencia de código, test o documento no equivale a verificación; el estado cambia sólo mediante receipt.
9. Cada estado y resultado está ligado a una versión de Task, baseline y evidencia.
10. Cerrar una Task exige registrar el delta producido y el siguiente trabajo elegible o la ausencia justificada de éste.

## Delegación

- Ownership y ejecución se modelan explícitamente; un cambio de assignee no reescribe al owner formal.
- `DelegationRecord` conserva `taskId`, `from`, `to`, `delegatedBy`, `reason`, `timestamp` y `expertiseReason`.
- La delegación queda acotada por tiempo, task, scope y acciones; no transfiere autoridad de aprobación o aceptación de riesgo salvo evidencia explícita.
- `FORMAL_RESPONSIBILITY` y `OBSERVED_EXPERTISE` son señales diferentes. Expertise ayuda al routing, pero no modifica automáticamente el organigrama.
- Una reasignación no obliga a renombrar branches. Task/Issue conserva ownership; el branch sólo representa espacio técnico de modificación.
- Audit registra human subject, agent subject, workload subject y delegation chain sin atribuir al humano una acción realizada por el agente.

Schema subordinado: `schemas/delegation-record.schema.json`.

## Gate de autonomía

Una ejecución puede continuar sin nueva pregunta humana sólo cuando:

1. la Task/version/baseline están identificadas;
2. el estado permite ejecución y todas las dependencias están satisfechas;
3. entry criteria, expected outputs, verification criteria y evidence requirements son explícitos;
4. las decisiones cerradas y Specs aplicables fueron cargadas;
5. el Work Package tiene readiness suficiente para el propósito;
6. existe una capability o Skill aplicable identificada, aunque su implementación real debe comprobarse;
7. las Tools requeridas están autorizadas por `AAI-SPEC-0006`;
8. no existe blocker material, conflicto ni decisión humana obligatoria;
9. el resultado puede verificarse y producir un state delta reproducible.

Si cualquiera falla, la Task no inventa la respuesta. Se marca `BLOCKED` o `DEGRADED`, se registra evidencia y se abre/vincula `AAI-SPEC-0010`.

## Condiciones tipadas de escalamiento

- `HUMAN_DECISION_REQUIRED`;
- `ARCHITECTURE_CONFLICT`;
- `SECURITY_POLICY_CONFLICT`;
- `MISSING_EXTERNAL_ACCESS`;
- `UNRESOLVED_REQUIREMENT`.

Cada escalamiento debe incluir condición, contexto ya revisado, evidencia, opciones conocidas, impacto, owner esperado y trigger de reanudación. No debe solicitar al usuario una decisión ya cerrada en el Knowledge Pack.

## Interfaces lógicas

| Puerto | Operación | Resultado |
|---|---|---|
| `TaskRepository` | create/get/compareAndTransition | Task y receipt o version conflict |
| `DependencyResolver` | evaluate(taskId, baseline) | satisfied, blocked, conflicted |
| `ContextResolverPort` | resolve(taskId, purpose) | Architecture Work Package ref |
| `DelegationPort` | assign/delegate/revoke | immutable DelegationRecord |
| `ExecutionRouter` | route(workItem) | deterministic, Devin, human review o blocked |
| `PolicyDecisionPort` | evaluate(action context) | allow/deny/approval/more context |
| `VerificationPort` | verify(result, criteria) | VerificationReceipt |
| `QuestionPort` | openOrLink(blocker/contextGap) | questionId |
| `StateDeltaPort` | propose/apply(delta) | accepted/rejected delta receipt |
| `AuditPort` | append(event digest) | event ID |

Son nombres lógicos. Las clases, endpoints, persistence adapters y disponibilidad real permanecen `BLOCKED_BY_SOURCE(SER-002)`.

## Correlación con eventos (`AAI-SPEC-0036`)

Tipos semánticos definidos por este draft: `TASK_CREATED`, `TASK_CONTEXT_READY`, `WORK_PLANNED`, `WORK_STARTED`, `WORK_RESULT_SUBMITTED`, `WORK_VERIFICATION_RECORDED`, `HUMAN_REVIEW_REQUESTED`, `WORK_APPROVED`, `WORK_PUBLISHED`, `WORK_CLOSED`, `WORK_BLOCKED`, `WORK_DEGRADED`, `WORK_REJECTED`, `WORK_CANCELLED` y `WORK_DELEGATED`.

Todo evento utiliza el envelope provisional de `schemas/domain-event-envelope.schema.json` y el payload de `schemas/work-lifecycle-event.schema.json`. Debe correlacionar como mínimo `eventId`, `taskId`, `requestId`, `correlationId`, `causationId`, `idempotencyKey`, versiones/estados anterior y nuevo, actor/agent/delegation, baseline, evidence refs y digest.

Los nombres son parte de esta spec draft, no evidencia de topics o clases existentes. Transporte, partition key, ordering, retries, delivery guarantees y outbox permanecen `BLOCKED_BY_SOURCE(SER-002)` y subordinados a la futura formalización de `AAI-SPEC-0036`.

## Updated-state delta

Toda ejecución que cambie estado propone `StateUpdateDelta` con:

- target type/ID y expected current version;
- previous/new state y version;
- reason, causation y correlation;
- outputs, evidence y verification receipts;
- Specs, decisiones, implementación, tests, riesgos o preguntas afectados;
- next Work Items elegibles o blockers;
- actor, agent, delegation y policy/approval refs;
- baseline y timestamp.

El delta no se aplica si la versión cambió, falta evidence requerida, viola una decisión congelada o eleva `DESIGNED` a `IMPLEMENTED/VERIFIED` sin prueba. Schema subordinado: `schemas/state-update-delta.schema.json`.

## Seguridad y gobierno

- Fail closed para escritura cuando identidad, delegation, policy o audit no están disponibles.
- Side effects conservan idempotency key, action fingerprint y target exacto.
- Resultado Devin se trata como output no confiable hasta validación.
- No se registran secretos, prompts completos ni payload sensible en eventos/receipts.
- Tool T3/T4 requiere approval ligado al efecto; T5 permanece denegada en MVP salvo break-glass formal.
- Un agente no puede aprobar una transición causada por su propia ejecución cuando la policy exige separación de funciones.

## Fallos y comportamiento

| Código lógico | Condición | Comportamiento |
|---|---|---|
| `TASK_VERSION_CONFLICT` | estado/version cambió durante ejecución | rechazar delta; recargar y reevaluar |
| `TASK_CONTEXT_NOT_READY` | Work Package insuficiente/stale | `BLOCKED` o `DEGRADED`; abrir Question |
| `TASK_DEPENDENCY_UNSATISFIED` | dependencia no cerrada | no iniciar; registrar blocker |
| `TASK_DELEGATION_INVALID` | delegación expirada/fuera de scope | deny; conservar audit |
| `TASK_POLICY_DENIED` | acción no autorizada | no side effect; registrar decisión |
| `TASK_OUTPUT_INVALID` | output no cumple schema | mantener `IN_PROGRESS`/`VERIFYING`; pedir corrección |
| `TASK_VERIFICATION_FAILED` | criterio falla | no aprobar; evidence + rework/blocker |
| `TASK_HUMAN_GATE_REQUIRED` | decisión/riesgo material | `HUMAN_REVIEW`; no continuar automáticamente |
| `TASK_PUBLICATION_FAILED` | approval existe pero write/publish falla | no cerrar; retry idempotente o blocker |

## Observabilidad

- tiempo y throughput por estado, tipo, owner y route;
- aging de `BLOCKED`, `DEGRADED` y `HUMAN_REVIEW`;
- dependencia crítica y work queue sin inventar capacidad Sprint;
- routing accuracy, reassignments, load concentration y Chief escalations;
- retries/idempotency conflicts y stale-baseline rate;
- porcentaje de resultados con verification/evidence completas;
- trazas por `taskId`, `parentTaskId`, `resultId`, `delegationId`, `correlationId` y baseline.

## Pruebas de aceptación diseñadas

1. Una Task sin objetivo, scope u owner no llega a `CONTEXT_READY`.
2. Una child Task siempre conserva `parentTaskId`, inputs, output contract y verificación.
3. Dos Tasks con dependencia no se ejecutan en orden inverso.
4. Dos Tasks independientes pueden ejecutarse en paralelo sin compartir artefactos de escritura.
5. Una reasignación genera `DelegationRecord` y no renombra ni transfiere ownership del branch.
6. Delegación expirada no permite ejecutar Tool o transición.
7. Falta de evidencia crea/vincula una Question y evita aprobación.
8. Output existente sin `VerificationReceipt` no puede llegar a `APPROVED`.
9. Una decisión congelada no se reabre por un state delta agentic.
10. Repetir evento/idempotency key no duplica transición.
11. Misma idempotency key con payload distinto produce conflicto.
12. Version conflict impide lost update.
13. Un resultado rechazado conserva rationale y evidencia.
14. `CLOSED` incluye delta, receipts y next-work/no-next-work justificado.
15. Cerrar una `AgentSession` o `DevinSession` no cambia el estado durable de la Work Session ni de la Task.
16. Resume con `expectedVersion` o baseline obsoleto falla y obliga a reconciliar antes de ejecutar.
17. Un Handoff sin Context Manifest, Checkpoint o unresolved blockers no satisface continuidad.
18. Una Conversation no puede marcar una Task `APPROVED`, `PUBLISHED` o `CLOSED` sin receipts de los procesos gobernados.
19. Una instancia nueva puede continuar el trabajo con manifest/checkpoint válidos sin depender de memoria oculta de la instancia anterior.

Todos permanecen `TEST_DESIGNED / NOT_EXECUTED` hasta `SER-002` y `SER-006`.

## Trazabilidad

- **requirements:** FR-001, FR-015, FR-016, FR-017, FR-020, NFR-003, NFR-007, NFR-008, NFR-010, NFR-011, NFR-012, V4.
- **decisions:** AAI-DEC-0001, 0004, 0008, 0013, 0014, 0015, 0019.
- **related_specs:** 0003, 0005, 0006, 0010, 0011, 0012, 0015, 0016, 0018, 0022, 0029, 0036, 0037.
- **contracts:** `architecture-task`, `delegation-record`, `work-lifecycle-event`, `state-update-delta`, `domain-event-envelope`.
- **implementation_mapping:** `BLOCKED_BY_SOURCE(SER-002)`; el baseline sólo reporta conceptos/store parciales.
- **test_evidence:** `NOT_TESTED`; criterios diseñados, sin run receipt.

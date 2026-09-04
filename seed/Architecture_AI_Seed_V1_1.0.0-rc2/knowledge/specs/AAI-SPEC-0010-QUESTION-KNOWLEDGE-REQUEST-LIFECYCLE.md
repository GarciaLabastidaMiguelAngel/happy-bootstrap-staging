# AAI-SPEC-0010 — Question & Knowledge Request Lifecycle

## Control

| Campo | Valor |
|---|---|
| `spec_id` | `AAI-SPEC-0010` |
| `version` | `0.1.0-draft` |
| `status` | `DRAFT` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `type` | `KNOWLEDGE / PROCESS / WORKFLOW` |
| `implementation_status` | `NOT_OBSERVED` |
| `valid_from` | `NOT_APPLICABLE_UNTIL_APPROVED` |
| `supersedes` | none |
| `source_evidence` | `HK-SRC-0001`; `AAI-DOC-0103`; `AAI-DOC-0105`; `03-AGENT-OPERATING-MODEL`; `AAI-DEC-0003`; `AAI-DEC-0015` |

Esta spec formaliza tipos, estados, resultados, routing y assurance observados. No declara endpoints, storage, integración GitHub, catálogo institucional de owners ni implementación. Esos elementos permanecen condicionados por `SER-002`, `SER-007` y `SER-009`.

## Propósito

Usar preguntas y solicitudes de conocimiento como entrada durable al sistema, resolverlas primero mediante capacidad determinística y conocimiento gobernado, enrutar gaps al responsable apropiado, conservar evidencia/conflictos y transformar la resolución en respuesta, actualización documental, conocimiento candidato, ADR, riesgo, Task o Solution según corresponda.

## Alcance

- Questions, clarifications, errores posibles, información faltante y concerns.
- Knowledge Requests asignadas a arquitectos, expertos u owners.
- Answer Candidates con assurance y evidencia.
- Routing, assignment, waiting, escalation, deferment y resolution.
- Relación con Tasks bloqueadas y creación controlada de nuevo trabajo.
- State receipts y eventos semánticos correlacionados con `AAI-SPEC-0036`.

## No objetivos

- No define el triage completo de Architecture Demand (`AAI-SPEC-0011`).
- No hace que una respuesta se convierta automáticamente en conocimiento canónico.
- No infiere owners, roles o expertise institucional faltante.
- No afirma que GitHub Issues/Questions sea el mecanismo final; sólo es una preferencia a validar.
- No define transporte/event bus, APIs finales ni persistencia física.
- No implementa agents, Skills o Tools ni envía trabajo a Devin.

## Modelo conceptual

| Entidad | Responsabilidad |
|---|---|
| `ArchitectureQuestion` | identidad, texto, tipo, scope, estado, requester, assignee y resolución |
| `KnowledgeRequest` | asignación acotada de una Question/context gap para obtener evidencia |
| `RoutingDecision` | razón por la que se consulta conocimiento, architect, owner o Chief |
| `AnswerCandidate` | respuesta propuesta con assurance, evidence, conflicts y applicability |
| `QuestionResolution` | outcome final y referencias a artefactos creados/actualizados |
| `QuestionTransitionReceipt` | cambio de estado/version, causa, actor y evidencia |

Schema subordinado principal: `schemas/architecture-question.schema.json`.

## Tipos recuperados

- `QUESTION`;
- `CLARIFICATION`;
- `POSSIBLE_ERROR`;
- `MISSING_INFORMATION`;
- `ARCHITECTURE_CONCERN`;
- `SECURITY_CONCERN`;
- `KNOWLEDGE_CONFLICT`;
- `DOCUMENTATION_IMPROVEMENT`;
- `ARCHITECTURE_REQUEST`.

La clasificación debe justificarse y puede cambiar de versión con rationale. Un request grande no implica automáticamente cambio arquitectónico; un cambio pequeño puede ser material.

## Estados recuperados

`OPEN`, `CLASSIFIED`, `RESOLVING`, `ANSWER_CANDIDATE`, `ASSIGNED`, `WAITING_FOR_EVIDENCE`, `ESCALATED`, `DEFERRED`, `RESOLVED`, `OBSOLETE`.

No se interpreta la lista original como una única secuencia lineal. Esta spec normaliza las transiciones seguras:

| Desde | Hacia | Condición mínima |
|---|---|---|
| `OPEN` | `CLASSIFIED` | type, scope, requester, urgency y reason registrados |
| `CLASSIFIED` | `RESOLVING` | búsqueda determinística/gobernada iniciada |
| `CLASSIFIED` | `ASSIGNED` | dominio/owner/expertise target identificado |
| `RESOLVING` | `ANSWER_CANDIDATE` | respuesta propuesta con assurance y evidence refs |
| `RESOLVING` | `WAITING_FOR_EVIDENCE` | fuente requerida identificada pero ausente |
| `RESOLVING` | `ASSIGNED` | resolución local insuficiente; requiere persona/owner |
| `ANSWER_CANDIDATE` | `RESOLVED` | disposition, assurance, evidencia y autoridad suficientes |
| `ANSWER_CANDIDATE` | `WAITING_FOR_EVIDENCE` | assurance insuficiente/contradictoria |
| `ASSIGNED` | `RESOLVING` | respuesta/evidencia recibida y validable |
| `ASSIGNED` | `WAITING_FOR_EVIDENCE` | assignee solicita evidencia concreta |
| `WAITING_FOR_EVIDENCE` | `RESOLVING` | evidencia recibida y vinculada |
| `WAITING_FOR_EVIDENCE` | `ESCALATED` | plazo/criticidad/authority exige siguiente nivel |
| `ESCALATED` | `ASSIGNED` | autoridad selecciona responsible responder |
| cualquier no terminal | `DEFERRED` | trigger y review condition explícitos |
| `DEFERRED` | `OPEN` o `CLASSIFIED` | trigger satisfecho; nueva versión/receipt |
| cualquier estado | `OBSOLETE` | superseded, duplicada o ya no aplicable, con rationale |

El comportamiento exacto de timeouts, SLAs y autoescalation no está observado; permanece `BLOCKED_BY_SOURCE(SER-001/SER-007)`.

## Resultados recuperados

- `ANSWER_ONLY`;
- `DOCUMENTATION_UPDATED`;
- `KNOWLEDGE_UPDATED`;
- `ADR_CREATED`;
- `RISK_CREATED`;
- `TASK_CREATED`;
- `SOLUTION_CREATED`;
- `NO_ACTION_REQUIRED`.

Reglas:

1. El outcome registra IDs/versions de los artefactos afectados; el nombre del outcome no prueba que el artefacto exista o haya sido aprobado.
2. `KNOWLEDGE_UPDATED` pasa por ingestion/reconciliation/promotion (`0007`/`0004`); una Answer Candidate no escribe canónico directamente.
3. `ADR_CREATED`, `RISK_CREATED`, `TASK_CREATED` y `SOLUTION_CREATED` crean/vinculan entidades mediante sus propias Specs y autoridad.
4. `NO_ACTION_REQUIRED` exige rationale y evidencia; no equivale a ignorar.
5. Una Question puede producir más de un outcome, pero cada uno conserva receipt y relación causal.

## Answer Assurance

Toda Answer Candidate se clasifica como:

- `SUPPORTED`;
- `PARTIALLY_SUPPORTED`;
- `CONFLICTED`;
- `INSUFFICIENT_EVIDENCE`;
- `UNSUPPORTED`.

Sólo `SUPPORTED`, o `PARTIALLY_SUPPORTED` con warnings explícitos y propósito permitido, puede convertirse en `RESOLVED`. `CONFLICTED`, `INSUFFICIENT_EVIDENCE` y `UNSUPPORTED` mantienen la Question abierta, esperando evidencia, deferida o escalada. Abstenerse es un resultado válido.

## Routing y escalamiento

Orden preferido observado:

1. resolución determinística;
2. búsqueda en conocimiento gobernado;
3. búsqueda de Questions existentes no resueltas o recientes;
4. arquitecto relevante;
5. formal owner;
6. Chief Architect como última autoridad de escalamiento.

Antes de asignar, el sistema identifica `ContextGap`, dominio de conocimiento, sources recomendadas y candidate experts. No pregunta siempre al usuario actual.

`FORMAL_RESPONSIBILITY` prevalece como autoridad; `OBSERVED_EXPERTISE` sólo ayuda a seleccionar un responder. Respuestas humanas posibles: `I_HAVE_INFORMATION`, `I_DONT_KNOW`, `REDIRECT`, `ATTACH_DOCUMENT`, `COMMENT`.

El escalamiento utiliza las condiciones canónicas:

- `HUMAN_DECISION_REQUIRED`;
- `ARCHITECTURE_CONFLICT`;
- `SECURITY_POLICY_CONFLICT`;
- `MISSING_EXTERNAL_ACCESS`;
- `UNRESOLVED_REQUIREMENT`.

Un escalamiento incluye conocimiento ya consultado, evidencia disponible/ausente, impacto, opciones y pregunta concreta. Chief Architect no se usa como ruta por defecto.

## Gate de resolución autónoma

Architecture AI/Devin puede resolver sin nueva decisión humana únicamente cuando:

- la Question y su scope están identificados;
- la respuesta está dentro de autoridad conocida y no cambia una decisión congelada;
- las fuentes autorizadas y actuales soportan la respuesta;
- no existe conflicto material ni security policy conflict;
- no se requiere acceso externo ausente;
- el outcome no implica aprobación, aceptación de riesgo, publicación o cambio canónico sin gate;
- la respuesta y sus warnings cumplen el contrato de output y assurance;
- se produce receipt y state delta.

Si no se cumplen estas condiciones, el sistema asigna, espera evidencia, difiere o escala; no inventa.

## Relación con Tasks

- Una Task bloqueada por contexto puede abrir o vincular una Question mediante `blockerId`.
- `TASK_CREATED` genera una `ArchitectureTask` de `AAI-SPEC-0009` con `originQuestionId`; no cierra la Question hasta registrar el handoff/outcome correspondiente.
- Resolver la Question puede desbloquear Tasks dependientes, pero cada Task reevalúa su baseline y entry criteria.
- Una Question no crea branch por defecto. Branch sólo aplica cuando una Task va a producir cambio gobernado.

## Interfaces lógicas

| Puerto | Operación | Resultado |
|---|---|---|
| `QuestionRepository` | open/get/compareAndTransition | Question + receipt o conflict |
| `KnowledgeLookupPort` | search(question, scope) | evidence, knowledge, conflicts, related questions |
| `ExpertiseResolver` | resolve(domain, scope) | formal owners y observed experts separados |
| `AssignmentPort` | assign/redirect/respond | KnowledgeRequest/response receipt |
| `AnswerAssurancePort` | assess(candidate) | assurance + rationale + evidence gaps |
| `TaskPort` | createOrLink(outcome) | taskId |
| `KnowledgeCandidatePort` | propose(candidate) | candidateId; no promoción |
| `DecisionRiskPort` | createCandidate(outcome) | ADR/risk candidate reference |
| `StateDeltaPort` | propose/apply(delta) | accepted/rejected delta receipt |
| `AuditPort` | append(event digest) | event ID |

Son contratos lógicos; adapters y paths están `BLOCKED_BY_SOURCE(SER-002)`.

## Correlación con eventos (`AAI-SPEC-0036`)

Tipos semánticos definidos por este draft: `QUESTION_OPENED`, `QUESTION_CLASSIFIED`, `QUESTION_RESOLUTION_STARTED`, `ANSWER_CANDIDATE_PRODUCED`, `QUESTION_ASSIGNED`, `QUESTION_EVIDENCE_REQUESTED`, `QUESTION_ESCALATED`, `QUESTION_DEFERRED`, `QUESTION_RESOLVED` y `QUESTION_OBSOLETED`.

Todos usan `schemas/domain-event-envelope.schema.json` y `schemas/question-lifecycle-event.schema.json`. Correlacionan `questionId`, `taskId` cuando aplique, `requestId`, `correlationId`, `causationId`, `idempotencyKey`, version/state anterior y nuevo, actor/agent/delegation, assurance, evidence refs, outcome refs y digest.

Transporte, topics, delivery guarantees, ordering, partitioning, retries y outbox físico no se afirman. Permanecen condicionados a `AAI-SPEC-0036` y `SER-002`.

## Updated-state delta

Cada transición produce o aplica `StateUpdateDelta` con expected version, from/to state, assurance/outcome, artifacts afectados, evidence, Tasks desbloqueadas/creadas, nuevas preguntas o blockers, actor/agent/delegation, baseline y causation.

No puede:

- elevar un answer a hecho canónico sin `0004`;
- marcar `RESOLVED` con conflicto material oculto;
- atribuir autoridad a observed expertise;
- reabrir o cambiar una decisión congelada;
- afirmar implementación/test/verificación sin receipt.

## Seguridad y privacidad

- Need-to-know y clasificación se aplican antes y después de knowledge retrieval.
- Una respuesta no revela la existencia de fuentes restringidas.
- Attachments y contenido recuperado se consideran no confiables y pasan por `0007`.
- No se interpreta lenguaje de una fuente como aprobación o instrucción agent-facing.
- Assignment y escalation registran human/agent/delegation, sin exponer información innecesaria.
- Comunicación externa o notificación usa Tool T4 y recipient/destination verification cuando exista.

## Fallos y comportamiento

| Código lógico | Condición | Comportamiento |
|---|---|---|
| `QUESTION_SCOPE_MISSING` | scope/propósito insuficiente | `OPEN`/`CLASSIFIED`; pedir sólo el dato faltante |
| `QUESTION_EVIDENCE_INSUFFICIENT` | sources no soportan respuesta | `WAITING_FOR_EVIDENCE` o `ESCALATED` |
| `QUESTION_EVIDENCE_CONFLICTED` | sources materiales discrepan | `CONFLICTED` assurance; no resolución silenciosa |
| `QUESTION_OWNER_UNKNOWN` | formal owner no observado | `ASSIGNED` no permitido; escalation/gap |
| `QUESTION_ACCESS_MISSING` | source necesaria no accesible | `MISSING_EXTERNAL_ACCESS` + source request |
| `QUESTION_ANSWER_INVALID` | output no cumple schema | rechazar candidate; conservar audit |
| `QUESTION_VERSION_CONFLICT` | actualización concurrente | rechazar delta; recargar/reconciliar |
| `QUESTION_DUPLICATE` | pregunta equivalente existe | vincular/supersede; no duplicar silenciosamente |

## Observabilidad

- count/aging por type/state/domain;
- first-response y time-to-resolution sin inventar SLA;
- assurance distribution y porcentaje de abstention;
- assignments, redirects, evidence waits y escalation depth;
- Chief escalations evitadas/resueltas;
- Questions repetidas que sugieren documentación, Skill, Tool o architecture test;
- trazas por `questionId`, `taskId`, `answerCandidateId`, `correlationId`, owner y baseline.

## Pruebas de aceptación diseñadas

1. Una Question nueva no se resuelve sin clasificación y evidence refs.
2. Pregunta con evidencia contradictoria no pasa a `RESOLVED` silenciosamente.
3. `INSUFFICIENT_EVIDENCE` produce waiting/defer/escalation, no una respuesta inventada.
4. Routing consulta conocimiento y Questions existentes antes de escalar al Chief.
5. Observed expertise no reemplaza formal responsibility.
6. `TASK_CREATED` produce Task correlacionada y no branch automático.
7. `KNOWLEDGE_UPDATED` sólo registra candidate/promotion receipts válidos.
8. `NO_ACTION_REQUIRED` conserva rationale y evidencia.
9. Una pregunta duplicada se vincula sin perder provenance.
10. State update con expected version obsoleta falla sin lost update.
11. Mismo event/idempotency key no duplica transición/outcome.
12. Fuente restringida no se filtra a un requester no autorizado.

Todos permanecen `TEST_DESIGNED / NOT_EXECUTED` hasta repo/build evidence.

## Trazabilidad

- **requirements:** FR-001, FR-006, FR-007, FR-016, FR-018, NFR-002, NFR-006, NFR-007, NFR-010, NFR-011, V4.
- **decisions:** AAI-DEC-0001, 0003, 0008, 0009, 0013, 0015, 0019.
- **related_specs:** 0004, 0005, 0007, 0009, 0011, 0015, 0016, 0020, 0024, 0027, 0033, 0036.
- **contracts:** `architecture-question`, `question-lifecycle-event`, `state-update-delta`, `domain-event-envelope`.
- **implementation_mapping:** `NOT_OBSERVED / BLOCKED_BY_SOURCE(SER-002)`.
- **test_evidence:** `NOT_TESTED`; criterios diseñados, sin execution receipt.

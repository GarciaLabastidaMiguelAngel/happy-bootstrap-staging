# AAI-DOC-0105 — Conceptos operativos extraídos

## Attention Management

Architecture AI debe evitar convertir todos los eventos en interrupciones agentic.

- LOW: badge o registro silencioso.
- MEDIUM: Architecture AI View o My Work.
- HIGH: notificación en Desktop.
- CRITICAL y relacionado con la tarea activa: evaluar mensaje a la sesión Devin sólo si existe API autorizada.

El flujo preferido es Scheduler → Domain Event → Attention Manager → Desktop Extension. Mostrar estado no debe consumir razonamiento agentic.

## Projection Readiness

Estados: EMPTY, LOADING, READY, STALE, UPDATING, DEGRADED y FAILED.

La política depende del uso:

- Consulta exploratoria puede aceptar contexto parcial con advertencia.
- Draft puede aceptar partial-with-warning.
- Technical Design Review exige contexto actual.
- Chief Approval exige contexto gobernado y actual.

La proyección registra baseline Git, baseline local, último refresh exitoso, último remote check, completitud, errores y artefactos afectados. La actualización preferida es HEAD check → fetch → commit diff → changed artifacts → targeted update.

## Scheduler

Inicialmente Spring Scheduler/TaskScheduler. Tipos: PERIODIC_JOB, ONE_SHOT_JOB y CONDITION_WATCH. Casos: Git refresh, mantenimiento de proyección, cleanup, stale tasks, decisiones diferidas, freshness, integridad, evaluaciones, research radar, eficiencia y salud de publicación.

Misfire: RUN_NOW, SKIP, RESCHEDULE o ESCALATE. Ningún job invoca Devin si no requiere razonamiento.

## Question Lifecycle

Tipos: question, clarification, possible error, missing information, architecture concern, security concern, knowledge conflict, documentation improvement y architecture request.

Estados: OPEN, CLASSIFIED, RESOLVING, ANSWER_CANDIDATE, ASSIGNED, WAITING_FOR_EVIDENCE, ESCALATED, DEFERRED, RESOLVED y OBSOLETE.

Resultados: answer only, documentation updated, knowledge updated, ADR created, risk created, task created, solution created o no action required.

## Delegation y expertise

Task ownership puede cambiar sin renombrar branches. DelegationRecord conserva taskId, from, to, delegatedBy, reason, timestamp y expertiseReason.

El routing distingue FORMAL_RESPONSIBILITY de OBSERVED_EXPERTISE. La expertise observada puede ayudar al routing, pero no cambia automáticamente el organigrama.

## Concurrencia

Cada workstation mantiene su Infinispan independiente y Git sincroniza baseline. Antes de cambios materiales: fetch, actualizar proyección, detectar soluciones activas y evaluar overlap semántico.

Tipos de conflicto: GIT_MERGE_CONFLICT, CHANGE_OVERLAP_DETECTED, IMPLEMENTATION_OVERLAP, ARCHITECTURE_CONFLICT y SCHEDULE_DEPENDENCY_CONFLICT.

## Versionado de soluciones

Estados candidatos: WORKING, READY_FOR_REVIEW, READY_FOR_ARF, ARF_BASELINE_FROZEN, PRESENTED, CHANGES_REQUESTED, ACCEPTED y APPROVED.

Una baseline congelada no se modifica. Registra solutionId, version, baselineId, gitCommit, tag, hash, frozenAt, status, PDF, manifest y referencia del foro.

## Evolución agentic-to-deterministic

Todo comportamiento agentic repetitivo debe evaluarse periódicamente como KEEP_AGENTIC, IMPROVE_SKILL, CREATE_TOOL, MOVE_TO_JAVA_SERVICE, CREATE_ARCHITECTURE_TEST, CENTRALIZE_CAPABILITY o RETIRE.

Señales: reasoning repetido, secuencias de tools repetidas, respuestas humanas repetidas, findings recurrentes, decisiones estables y clasificaciones estables.

## Ingesta gobernada

Flujo: detección de formato, parsing, estructura, secciones, tablas, imágenes, metadatos, análisis semántico, entidades, relaciones, relevancia, reconciliación, conflictos, temporalidad, autoridad y candidatos.

Disposition de sección: task context, evidence, knowledge candidate, update, conflict, ignore, ask human o quarantine.

Comparación de conocimiento: MATCH, ENRICHMENT, UPDATE, CONFLICT, DUPLICATE, SUPERSEDES o UNRELATED.

Ingesta no equivale a promoción.


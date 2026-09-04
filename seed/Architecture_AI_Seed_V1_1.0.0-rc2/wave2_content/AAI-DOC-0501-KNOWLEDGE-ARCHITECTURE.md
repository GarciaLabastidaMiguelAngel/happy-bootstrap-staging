# AAI-DOC-0501 — Arquitectura de conocimiento y evidencia

## Propósito

Architecture AI debe convertir documentos, conversaciones, código, decisiones y resultados de Devin en conocimiento institucional trazable. El objetivo no es almacenar texto para búsqueda: es conservar qué se sabe, por qué se cree, quién lo autorizó, dónde aplica, durante cuánto tiempo es válido y qué contradicciones siguen abiertas.

## Principios no negociables

1. **Ingesta no equivale a conocimiento.** Un artefacto recibido sólo crea evidencia y candidatos.
2. **No Evidence = No Authoritative Claim.** Una afirmación sin fuente identificable puede registrarse como hipótesis, nunca como verdad institucional.
3. **Git es canónico para contenido aprobado.** Grafo, índices y caches son proyecciones reconstruibles.
4. **La procedencia viaja con el dato.** Toda transformación conserva fuente, versión, hash, extractor, timestamp y responsable.
5. **La autoridad no se infiere por confianza del modelo.** La autoridad proviene del tipo de fuente, ownership y aprobación.
6. **La contradicción es un objeto de primera clase.** No se elimina ni se resuelve automáticamente.
7. **La vigencia y el alcance son obligatorios.** País, dominio, sistema, clasificación y ventana temporal limitan cada afirmación.
8. **El conocimiento sensible se minimiza.** No se indexa, replica o revela sin necesidad, clasificación y autorización.

## Capas del modelo

| Capa | Pregunta que responde | Objetos principales | Autoridad |
|---|---|---|---|
| Source | ¿De dónde provino? | Source, SourceVersion, Conversation, Repository | Evidencial |
| Artifact | ¿Qué unidad exacta fue procesada? | Artifact, Section, Chunk, ContentHash | Evidencial |
| Evidence | ¿Qué fragmento respalda o contradice algo? | Evidence, Citation, Observation | Evidencial |
| Claim | ¿Qué se afirma? | Claim, Constraint, Requirement, Fact, Hypothesis | Clasificada |
| Candidate | ¿Qué cambio podría incorporarse? | KnowledgeCandidate, ConflictSet, Reconciliation | No canónica |
| Canonical | ¿Qué ha sido aprobado? | Standard, Pattern, Decision, Capability, Control, ADR | Canónica en Git |
| Projection | ¿Cómo se consulta eficientemente? | Graph node/edge, lexical index, embedding, read model | Derivada |

## Tipos de autoridad

| Authority type | Ejemplo | Uso permitido |
|---|---|---|
| INTERNAL_APPROVED | ADR o estándar aprobado | Puede gobernar implementación dentro de su scope |
| INTERNAL_OBSERVED | Baseline reproducible del repositorio | Describe estado actual, no necesariamente deseado |
| USER_DIRECTIVE | Decisión explícita del owner | Congelada o dirección actual según registro |
| OFFICIAL_EXTERNAL | Especificación o estándar oficial | Referencia candidata; adopción requiere decisión interna |
| INTERNAL_EXAMPLE | Solución bancaria histórica | Informa análisis; no se generaliza a estándar |
| RESEARCH_SECONDARY | Resumen o análisis no oficial | Descubrimiento, nunca única base de una decisión crítica |
| MODEL_INFERENCE | Deducción de Devin/LLM | Hipótesis que exige validación |

La prioridad de una fuente no sustituye su applicability. Una norma oficial global puede ser irrelevante para México o para un sistema fuera de su scope; un ADR local aprobado puede gobernar ese caso concreto.

## Ciclo de vida de un candidato

`RECEIVED → EXTRACTED → CLASSIFIED → RECONCILED → PROPOSED → IN_REVIEW → APPROVED | REJECTED | DEFERRED`

- `RECEIVED`: original almacenado, hash calculado y receipt emitido.
- `EXTRACTED`: estructura y secciones obtenidas; no implica confianza.
- `CLASSIFIED`: sensibilidad, autoridad, país, dominio y tipo de contenido asignados.
- `RECONCILED`: comparado con conocimiento canónico y otros candidatos.
- `PROPOSED`: existe diff canónico, evidencia y owner.
- `IN_REVIEW`: revisión humana activa y controles satisfechos.
- `APPROVED`: commit/PR aprobado; se vuelve fuente de proyección.
- `REJECTED`: razón y evidencia conservadas para evitar redescubrimiento.
- `DEFERRED`: decisión pospuesta con trigger y fecha de revisión.

Transiciones inválidas, en particular `EXTRACTED → APPROVED`, deben fallar cerradas.

## Reconciliación

Cada candidato se compara por identificadores, semántica, scope y temporalidad. El resultado permitido es:

| Resultado | Significado | Acción |
|---|---|---|
| MATCH | Equivalente al conocimiento vigente | Vincular evidencia; no duplicar |
| UPDATE | Modifica contenido sin contradicción material | Proponer diff y nueva versión |
| CONFLICT | Dos afirmaciones incompatibles comparten scope/tiempo | Crear ConflictSet; requerir decisión |
| DUPLICATE | Artefacto o claim ya registrado | Registrar receipt idempotente |
| SUPERSEDES | Reemplazo explícito con nueva vigencia | Cerrar intervalo anterior, conservar historial |
| UNRELATED | Sin correspondencia suficiente | Crear candidato separado |
| AMBIGUOUS | Clasificación insuficiente | Solicitar más contexto; no promover |

La similitud vectorial puede sugerir candidatos de comparación, pero no determina el resultado ni la autoridad.

## Provenance

El modelo se alinea conceptualmente con W3C PROV:

- **Entity:** SourceVersion, Artifact, Evidence, Claim, CanonicalKnowledge y ProjectionSnapshot.
- **Activity:** ingest, extract, classify, reconcile, review, approve, project y retrieve.
- **Agent:** persona, Devin, Architecture AI, connector o pipeline determinístico.

Campos mínimos por transformación:

- `activityId`, `activityType`, `startedAt`, `endedAt`.
- `actorId`, `agentId`, `softwareVersion`.
- `inputEntityIds`, `outputEntityIds`.
- `taskId`, `requestId`, `correlationId`.
- `policyDecisionId` y `approvalId` cuando apliquen.
- `contentHash`, `schemaVersion`, `projectionBaseline`.

## Temporalidad y alcance

Toda entidad material debe expresar:

- `validFrom` y `validUntil` para vigencia de negocio.
- `recordedAt` para fecha de observación.
- `supersededAt` cuando cambia la versión canónica.
- `country`, iniciando por `MX` cuando el conocimiento sea local.
- `businessDomain`, `platformId`, `solutionId` y/o `systemId` cuando correspondan.
- `classification`, `handlingPolicy` y `retentionClass`.

La ausencia de scope no significa global. Se clasifica como `UNSCOPED` y no participa en respuestas autoritativas hasta resolverse.

## Separación discovered/canonical

El Discovered Knowledge contiene extracción, inferencias, relaciones tentativas y conflictos. El Canonical Knowledge contiene únicamente material aprobado y versionado. Pueden compartir un motor de persistencia, pero deben tener namespaces, labels, permisos y APIs de escritura separados.

Reglas:

- Las consultas autoritativas excluyen discovered por defecto.
- Una respuesta exploratoria puede incluir discovered, marcado como tal y con confidence.
- Sólo Promotion Service escribe el namespace canónico.
- Devin puede proponer; no puede aprobar ni promover con sus propias credenciales.
- Un rollback de Git provoca rebuild del canonical projection, nunca copia inversa desde discovered.

## Gestión de documentos y conversaciones

Una conversación exportada se trata como fuente compuesta:

1. Registrar conversación, participantes, timestamps y origen.
2. Preservar el original y calcular hash.
3. Segmentar por mensaje y tema sin perder orden.
4. Detectar decisiones explícitas, requisitos, ejemplos, preguntas y rectificaciones.
5. Resolver referencias como “esto”, “lo anterior” o “siguiente oleada” mediante contexto local.
6. Marcar material de sistema/herramienta separado del contenido de negocio.
7. Generar candidatos con referencias a message IDs y no sólo a un resumen.
8. Reconciliar decisiones posteriores con anteriores; la corrección posterior puede superseder, no borrar.

El corpus de chats aún no exportado permanece un gap de fuente. Ningún dossier se declara exhaustivo mientras ese corpus no sea inventariado.

## Calidad y evaluación

Métricas mínimas:

- `evidence_coverage`: claims materiales con evidencia / claims materiales.
- `citation_correctness`: citas que realmente soportan la afirmación.
- `authority_fit`: fuente apropiada para el tipo de claim y scope.
- `conflict_recall`: contradicciones conocidas recuperadas cuando son relevantes.
- `promotion_precision`: promociones aceptadas sin corrección posterior.
- `freshness`: tiempo desde cambio canónico hasta proyección lista.
- `orphan_rate`: nodos/claims sin fuente o scope.
- `sensitive_exposure_rate`: debe ser cero para accesos no autorizados.

## Controles de aceptación

- Un PDF malicioso crea evidencia en quarantine y no instrucciones ejecutables.
- Una misma versión reingerida conserva un único Artifact y múltiples receipts si es necesario.
- Una decisión posterior contradictoria crea ConflictSet o supersession explícita.
- Una consulta autoritativa nunca mezcla candidatos sin etiqueta.
- Cada párrafo material del dossier puede trazarse a evidence IDs o se marca como propuesta.
- Eliminar todas las proyecciones y reconstruirlas produce el mismo baseline lógico.

## Fuentes externas de referencia

- W3C PROV-DM: https://www.w3.org/TR/prov-dm/
- W3C PROV-O: https://www.w3.org/TR/prov-o/
- JSON Schema: https://json-schema.org/specification


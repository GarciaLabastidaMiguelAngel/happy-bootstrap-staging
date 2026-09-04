# AAI-DOC-0503 — Context engineering, RAG y Architecture Work Package

## Objetivo

Entregar a Devin el contexto institucional mínimo suficiente, autorizado y explicable para una tarea concreta. El Context Resolver no es un buscador genérico: compila un Architecture Work Package versionado a partir de intención, scope, política, fuentes y presupuesto de contexto.

## Entrada canónica

El resolver recibe:

- `taskId`, `requestId`, `actorId` y `agentId`.
- intención y deliverables esperados.
- país, dominio, solution/platform scope y environment.
- clasificación máxima autorizada y purpose of use.
- baseline Git y versiones de proyección.
- límites de tokens, tiempo, costo y profundidad.
- restricciones, forbidden actions y required approvals conocidas.

Si falta país, autoridad, clasificación o identidad para una consulta material, devuelve `REQUIRE_MORE_CONTEXT`; no asume valores globales.

## Pipeline

1. **Interpret intent:** normaliza objetivo y genera preguntas de recuperación, sin ejecutar tools.
2. **Authorize retrieval:** aplica policy a sujeto, agente, tarea, fuentes y clasificación.
3. **Resolve scope:** expande sólo aliases y relaciones de scope autorizados.
4. **Retrieve candidates:** catálogo + búsqueda léxica + grafo; vector es opcional.
5. **Filter:** elimina contenido fuera de vigencia, país, need-to-know o policy.
6. **Reconcile:** agrupa duplicados, contradicciones, superseded y gaps.
7. **Rank:** combina autoridad, applicability, recency, evidence strength y relevancia.
8. **Assemble:** construye facts, decisions, constraints, risks, examples y exclusions.
9. **Validate:** schemas, citas, token budget, prompt-injection disposition y completeness.
10. **Issue package:** guarda versión inmutable y receipt; Devin obtiene por `taskId`.

Los filtros de autorización se aplican antes y después de retrieval. El reranker nunca puede reintroducir un elemento rechazado por policy.

## Estrategia de recuperación híbrida

| Mecanismo | Fortalezas | Límites | Estado |
|---|---|---|---|
| Catálogo/IDs | Preciso para task, ADR, estándar y artefacto | Requiere referencia conocida | Adoptar |
| Léxico | Explicable; nombres, códigos y frases exactas | Sinónimos y contexto semántico | Adoptar |
| Grafo | Scope, dependencia, impacto y evidencia | Depende de calidad del modelo | Adoptar condicional al ADR de motor |
| Vector | Semántica y lenguaje natural | Falsos positivos, costo, sensibilidad | Diferir hasta benchmark |
| LLM expansion | Reformulación y queries auxiliares | Riesgo de deriva e inyección | Extender con límites y registro |

El vector store no es prerrequisito para el MVP. Debe ganar contra el baseline catálogo + léxico + grafo en un corpus evaluado.

## Ranking propuesto

Los pesos no son estándar congelado. Un experimento inicial puede usar:

`score = authority × applicability × policyEligibility × (relevance + recency + evidenceStrength)`

- `policyEligibility` es binario y prevalece sobre cualquier score.
- `authority` y `applicability` funcionan como multiplicadores para evitar que una coincidencia semántica alta supere una fuente no autorizada o fuera de scope.
- Contradicciones relevantes no se descartan: se agregan a `conflicts` aunque tengan menor ranking.

Los pesos finales se calibran con queries reales y golden answers, no por intuición.

## Contenido del Architecture Work Package

| Sección | Contenido |
|---|---|
| Envelope | packageId, version, taskId, actor/agent, timestamps, schemas |
| Intent | objetivo, preguntas, deliverables, definition of done |
| Scope | país, dominio, solución, ambientes y límites |
| Facts | hechos observados con evidenceRefs |
| Decisions | decisiones aprobadas/direcciones actuales y status |
| Constraints | tecnología, seguridad, datos, operación y legales |
| Knowledge | fragmentos citables y razones de inclusión |
| Conflicts | claims incompatibles, owners y required resolution |
| Risks | amenazas, fraude, findings, mitigaciones y residual risk |
| Examples | ejemplos históricos etiquetados como no normativos |
| Gaps | información faltante y preguntas para humano/sistema |
| Tool policy | tools permitidas, límites, aprobación y forbidden actions |
| Output contract | schemas, rutas, naming, pruebas y evidence requirements |
| Provenance | baseline, retrieval plan, fuentes, hashes y policy decisions |

El paquete incluye `mustNotInfer` y `mustNotDo`. Es tan importante registrar qué no puede asumirse como proporcionar contexto positivo.

## Progressive disclosure

El paquete inicial contiene resumen estructurado y referencias. Devin solicita detalle mediante resources/tools de lectura cuando lo necesita. Niveles:

1. **Index:** IDs, título, autoridad, scope, fechas y resumen.
2. **Evidence snippet:** fragmento mínimo citable con contexto local.
3. **Section:** sección completa autorizada.
4. **Artifact:** original sólo si la tarea y política lo requieren.

No se incluye todo el corpus “por si acaso”. Cada inclusión registra `reasonForInclusion`.

## Defensa contra prompt injection en RAG

- Tratar documentos y repositorios como datos no confiables.
- Separar instrucciones del sistema, task contract y contenido recuperado.
- Detectar instrucciones dirigidas al agente, exfiltración, encoding sospechoso y tool coercion.
- Etiquetar cada fragmento: `SAFE`, `SUSPICIOUS`, `QUARANTINED` o `MANUAL_REVIEW`.
- No permitir que el contenido recuperado modifique tool policy, identidad, approvals o output destination.
- Citar contenido sospechoso sólo en análisis de seguridad y sin ejecutarlo.
- Aplicar límites de fuente, tamaño, profundidad y expansión.

## Cache y freshness

La cache se clavea por:

`intentFingerprint + actorPolicyFingerprint + scope + canonicalBaseline + projectionBaseline + schemaVersion`

Un cambio de permisos, clasificación, Git baseline o proyección invalida la entrada. No se comparte cache entre actores sólo porque la query sea igual.

## Evaluación

Dataset mínimo:

- Preguntas de decisiones congeladas.
- Hechos de baseline frente a estado objetivo.
- Casos con dos países.
- Conflictos JanusGraph/Neo4j.
- Seguridad/fraude con contenido restringido.
- Citas correctas pero irrelevantes.
- Prompt injection dentro de PDF/Markdown.
- Consultas con respuesta “desconocida”.

Métricas:

- Recall de evidencia relevante y de conflictos.
- Precision de citas y scope.
- Context utilization y duplicación.
- Groundedness de la salida de Devin.
- Policy leakage y sensitive exposure, objetivo cero.
- Latencia p50/p95 y costo por paquete.
- Porcentaje de preguntas resueltas sin cargar artifact completo.

## Aceptación

- El mismo task/baseline/policy produce un paquete semánticamente equivalente.
- Una decisión de México no se entrega como global.
- Un usuario sin permiso no deduce existencia ni contenido de una fuente restringida.
- El conflicto de motor de grafo aparece cuando la tarea toca persistencia.
- Un documento con instrucciones maliciosas no cambia tools ni destino.
- Toda respuesta material de Devin puede mapearse a evidenceRefs del paquete o se marca como inferencia.
- Al exceder presupuesto, el sistema reduce detalle y devuelve referencias; no trunca silenciosamente constraints.

## Contratos asociados

- `schemas/architecture-work-package.schema.json`
- `AAI-SPEC-0005-CONTEXT-RESOLVER-WORK-PACKAGE.md`
- `AAI-SPEC-0006-TOOL-POLICY-ENFORCEMENT.md`
- `AAI-DGM-0008`, `AAI-DGM-0009` y `AAI-DGM-0019`


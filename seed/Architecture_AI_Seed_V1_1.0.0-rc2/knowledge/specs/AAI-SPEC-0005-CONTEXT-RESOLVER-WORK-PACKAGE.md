# AAI-SPEC-0005 — Context Resolver & Architecture Work Package

## Control

| Campo | Valor |
|---|---|
| `spec_id` | `AAI-SPEC-0005` |
| `version` | `0.1.1-draft` |
| `status` | `DRAFT` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `type` | `KNOWLEDGE / SERVICE / CONTRACT` |
| `implementation_status` | `PARTIALLY_IMPLEMENTED_REPORTED; NOT_VERIFIED` |
| `source_evidence` | `HK-SRC-0001`; `AAI-DOC-0503`; `AAI-DOC-0302`; `AAI-DEC-0004` |

Esta spec define comportamiento y contrato lógico; el mapping a código permanece como gap.

## Propósito

Compilar para una tarea concreta el contexto institucional mínimo suficiente, autorizado, vigente, explicable y versionado. El resultado, `ArchitectureWorkPackage`, es la frontera de ejecución entre Architecture AI y Devin: conserva intención, scope, decisiones, restricciones, evidencia, riesgos, gaps, policy y contrato de salida sin transferir el corpus completo.

## Responsabilidades

- normalizar intención, deliverables y definition of done;
- resolver country/domain/platform/solution/system scope sin asumir globalidad;
- autorizar fuentes antes y después de recuperación;
- recuperar por catálogo/ID, léxico y grafo; usar vector sólo después del gate de benchmark;
- reconciliar duplicados, conflictos, superseded y missing context;
- ordenar por autoridad, applicability, vigencia, evidencia y relevancia;
- ensamblar un paquete inmutable, citable y limitado por presupuesto;
- registrar `reasonForInclusion`, exclusiones y trace de retrieval;
- emitir `REQUIRE_MORE_CONTEXT`, `PARTIAL_WITH_WARNING` o abstención cuando corresponda.

## Entradas

- `taskId`, `requestId`, `actorId`, `agentId` y, cuando aplique, `delegationId`;
- `intent`, objetivo global, objetivo de task, preguntas y deliverables esperados;
- país, dominio, solución/plataforma/sistema, environment y clasificación máxima;
- `purposeOfUse` y permisos efectivos;
- baseline Git, projection baseline y schema version;
- límites de tokens, tiempo, costo, profundidad y número de fuentes;
- restricciones conocidas, approvals requeridas, `mustNotInfer` y `mustNotDo` iniciales.

Si identidad, purpose, scope o clasificación indispensables están ausentes, no se infieren: se devuelve `REQUIRE_MORE_CONTEXT`.

## Pipeline normativo

1. **Interpret intent:** normaliza el objetivo; no ejecuta tools materiales.
2. **Authorize retrieval:** policy sobre sujeto, agente, tarea, fuentes y clasificación.
3. **Resolve scope:** expande sólo aliases y relaciones autorizadas.
4. **Retrieve candidates:** catálogo/IDs, léxico, grafo y, condicionalmente, vector.
5. **Filter:** elimina fuera de scope, vigencia, need-to-know o policy.
6. **Reconcile:** agrupa duplicates, superseded, conflicts y gaps.
7. **Rank:** autoridad y applicability prevalecen sobre similitud.
8. **Assemble:** facts, decisions, constraints, evidence, risks, examples y exclusions.
9. **Validate:** schema, citas, budget, injection disposition y completeness.
10. **Issue:** persiste versión inmutable y receipt; se recupera por `taskId`/`packageId`.

Un reranker nunca puede reintroducir contenido rechazado por policy.

## Contrato Architecture Work Package

El schema subordinado es `schemas/architecture-work-package.schema.json`.

| Sección | Contenido y regla |
|---|---|
| Envelope | package/version/task/request/actor/agent/timestamps/schema/baselines |
| Intent | objetivo, preguntas, deliverables, definition of done |
| Scope | país, dominio, solución/plataforma/sistema, environments, classification |
| Facts | hechos observados con `evidenceRefs`; no inferencias silenciosas |
| Decisions | decisión, status, scope, rationale/source y vigencia |
| Constraints | tecnología, seguridad, datos, operación y legales |
| Knowledge | items citables, provenance y `reasonForInclusion` |
| Conflicts | claims incompatibles, scope, owners y resolución requerida |
| Risks | riesgo/control/residual risk/evidence, sin inventar aceptación |
| Examples | `INTERNAL_EXAMPLE`, explícitamente no normativos |
| Gaps | missing source/context y escalamiento requerido |
| Tool policy | tools/scopes/limits/approvals/forbidden actions |
| Output contract | schema, rutas, naming, tests y evidencia requerida |
| Provenance | retrieval plan, fuentes, hashes y policy decisions |

Para workers, el package puede acotar `agentRole`, `ownedArtifacts`, `readOnlyArtifacts`, `protectedArtifacts`, `allowedTools` y `conflictProtocol`. Eso no crea un agent runtime propio.

## Progressive disclosure

1. `INDEX`: IDs, título, autoridad, scope, fechas y resumen.
2. `EVIDENCE_SNIPPET`: fragmento mínimo con contexto local.
3. `SECTION`: sección completa autorizada.
4. `ARTIFACT`: original sólo si tarea y policy lo requieren.

El package inicial mantiene referencias; no incluye todo el corpus “por si acaso”.

## Estado y resultados

Estados de resolución: `RECEIVED`, `AUTHORIZED`, `RESOLVING`, `ASSEMBLING`, `VALIDATING`, `ISSUED`.

Estados alternos: `REQUIRE_MORE_CONTEXT`, `PARTIAL_WITH_WARNING`, `CONFLICTED`, `DENIED`, `FAILED`.

La readiness del package es distinta del estado de sus stores:

- `SUFFICIENT_CURRENT`: contexto gobernado y baseline actual;
- `PARTIAL_WITH_WARNING`: suficiente sólo para exploración/draft permitido;
- `INSUFFICIENT`: faltan facts/authority/scope esenciales;
- `CONFLICTED`: hay conflicto material no resuelto;
- `DENIED`: policy no permite revelar o siquiera confirmar la fuente.

## Invariantes

1. Misma task + policy + baselines + schema produce paquete semánticamente equivalente.
2. Cada item material tiene source, authority, scope, classification, version y reason.
3. `MODEL_INFERENCE` se etiqueta y no se presenta como fact.
4. México no se generaliza a global; un ejemplo no se convierte en standard.
5. Restricted sources no se filtran ni por contenido ni por existencia.
6. Una contradicción relevante se incluye aunque su score sea menor.
7. Al exceder budget se reduce detalle y se preservan constraints/references; no hay truncamiento silencioso.
8. Cache no se comparte entre actores sólo por query equivalente.

## Cache y freshness

La clave lógica incluye:

`intentFingerprint + actorPolicyFingerprint + scope + canonicalBaseline + projectionBaseline + schemaVersion`

Cambio de permiso, clasificación, baseline Git, proyección o schema invalida la entrada. Un package ya emitido permanece inmutable; una nueva resolución produce nueva versión.

## Seguridad

- Los documentos y tool outputs son datos no confiables.
- Las instrucciones del sistema y task contract se separan del contenido recuperado.
- Fragmentos: `SAFE`, `SUSPICIOUS`, `QUARANTINED` o `MANUAL_REVIEW`.
- Contenido recuperado no puede modificar identity, tool policy, approval ni output destination.
- Redaction ocurre antes de logs, package y conectores externos.
- `policyEligibility` es binario y prevalece sobre ranking.

## Fallos y respuesta

| Fallo | Resultado |
|---|---|
| scope/identity/purpose faltante | `REQUIRE_MORE_CONTEXT` |
| baseline o projection stale | warning o bloqueo según purpose/readiness policy |
| fuente caída | última proyección válida con provenance y `PARTIAL_WITH_WARNING`, si policy lo permite |
| evidence conflict | `CONFLICTED`; incluir ambos claims y owner |
| prompt injection | excluir/quarantine; registrar finding; no escalar tools |
| budget agotado | package reducido con referencias y gap explícito |
| restricted source | `DENIED`; no existence leak |

## Observabilidad

- latency p50/p95 por etapa;
- recall de evidencia y conflictos;
- precision de citas y scope;
- context utilization y duplicate ratio;
- groundedness de salidas correlacionadas;
- policy leakage y sensitive exposure, objetivo cero;
- costo/tokens por package y porcentaje resuelto sin artifact completo;
- trace por `taskId`, `packageId`, baselines y policy decisions.

## Pruebas de aceptación

1. Una decisión MX no aparece como enterprise/global.
2. Un actor no autorizado no deduce la existencia de una fuente restringida.
3. El conflicto JanusGraph/Neo4j se recupera en trabajo relacionado con storage/graph.
4. Un PDF con instrucciones no cambia tools ni destino.
5. Toda afirmación material de Devin se mapea a `evidenceRefs` o se etiqueta inferencia.
6. Una modificación de baseline produce nueva versión del package y no muta la anterior.
7. El budget limit preserva constraints y must-not rules.
8. El mismo fingerprint produce salida semánticamente equivalente y receipt idempotente.

## Trazabilidad

- **requirements:** FR-001, FR-002, FR-003, NFR-002, NFR-003, NFR-006.
- **decisions:** AAI-DEC-0001, 0002, 0003, 0004, 0008.
- **related_specs:** 0001, 0006, 0009, 0015, 0020, 0024, 0025, 0028, 0029, 0036, 0037.
- **implementation_mapping:** `PARTIAL_REPORTED; repository path NOT_OBSERVED`.
- **test_evidence:** `NOT_TESTED`; criterios diseñados, no ejecutados.

## rc2 target clarification — Graph + retrieval snapshot

Source: `P-SEED-RC2-GIT-PUBLISH-01`; DRAFT / NOT_EXECUTED. RAG retrieves narrative/rationale; Graph resolves governed entities/relationships. They are complementary, not competing canonical stores. Graph may constrain retrieval; retrieval may supply rationale for graph entities. Do not force every source into both. Vector use remains benchmark-gated.

The immutable Work/Context Package must identify the canonical snapshot and compatible projection set used, with per-projection provenance, rules/schema versions and readiness. A Graph A/RAG B mismatch must not masquerade as current coherent context. Reuse the existing baseline/provenance envelope and extend its schema only through governed post-handoff expansion. See [0008 coherent sets](AAI-SPEC-0008-PROJECTION-MANAGER.md) and [FX-RC2-B](../90_POST_RC1_RECONCILIATION.md).

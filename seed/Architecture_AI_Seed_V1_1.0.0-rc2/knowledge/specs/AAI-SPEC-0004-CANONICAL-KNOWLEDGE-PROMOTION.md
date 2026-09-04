# AAI-SPEC-0004 — Canonical Knowledge Promotion

## Control

| Campo | Valor |
|---|---|
| `spec_id` | `AAI-SPEC-0004` |
| `version` | `0.1.0-draft` |
| `status` | `DRAFT` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `type` | `KNOWLEDGE / PROCESS / CONTROL` |
| `implementation_status` | `NOT_OBSERVED` |
| `valid_from` | `NOT_APPLICABLE_UNTIL_APPROVED` |
| `supersedes` | none |
| `source_evidence` | `HK-SRC-0001`; `AAI-DOC-0501`; `AAI-DOC-0307`; `AAI-DOC-0601`; `AAI-DEC-0003`; `AAI-DEC-0009` |

Esta formalización preserva el diseño observado. No declara código, aprobación ni verificación.

## Propósito

Convertir un `KnowledgeCandidate` ya clasificado y reconciliado en un cambio canónico gobernado, auditable y proyectable. La promoción no es una operación de copia desde discovered knowledge: produce un diff explícito contra una baseline Git, exige la autoridad apropiada y conserva evidencia, rationale y resultado de revisión.

## Responsabilidades

- validar identidad, scope, autoridad, evidencia y estado del candidato;
- rechazar transiciones que eludan clasificación, reconciliación o revisión;
- materializar el cambio propuesto como diff contra una baseline identificada;
- solicitar y consumir una aprobación ligada al efecto exacto cuando la policy lo requiera;
- impedir self-approval de Devin, del agente proponente o del mismo workload;
- escribir primero en Git canónico mediante el mecanismo gobernado disponible;
- emitir un receipt durable y un evento de actualización para las proyecciones;
- conservar rechazo, deferimiento, conflicto o supersession sin borrar la historia.

## No objetivos

- No decide por sí sola si una propuesta es arquitectónicamente correcta.
- No convierte una fuente externa o un resultado de Devin en política institucional.
- No escribe directamente en Infinispan, índices o graph como autoridad canónica.
- No resuelve automáticamente conflictos materiales.
- No formaliza la elección del motor de grafo.

## Entradas

| Entrada | Requerida | Regla |
|---|---:|---|
| `promotionRequestId` | sí | ID durable e idempotente |
| `candidateId` y `candidateVersion` | sí | Deben referir al candidato reconciliado exacto |
| `taskId` / `requestId` | sí | Correlación operacional |
| `actorId`, `agentId`, `delegationId` | según caso | Identidad humana, agentic y delegación separadas |
| `scope` | sí | País, dominio, plataforma/solución/sistema y clasificación aplicables |
| `reconciliationResult` | sí | `MATCH`, `UPDATE`, `CONFLICT`, `DUPLICATE`, `SUPERSEDES`, `UNRELATED` o `AMBIGUOUS` |
| `evidenceRefs` | sí para cambio material | Evidencia con provenance y applicability |
| `canonicalBaseline` | sí | Commit/ref/hash contra el que se calculó el diff |
| `proposedDiff` | sí salvo no-op | Efecto exacto y revisable |
| `owner` / `reviewers` | según policy | No se infieren por confianza del modelo |
| `policyDecisionId` / `approvalId` | según policy | Approval action-bound y one-time-use |

El contrato subordinado es `schemas/promotion-request.schema.json`.

## Salidas

- `PromotionReceipt` con resultado, baseline inicial, commit o PR resultante, digests, actor, policy y timestamps;
- referencia al cambio canónico o razón tipada de rechazo/deferimiento;
- `CanonicalBaselineChanged` cuando existe commit aceptado;
- `ProjectionRefreshRequested` dirigido a `AAI-SPEC-0008`;
- finding o conflicto cuando no sea seguro continuar.

## Estados

`RECEIVED → VALIDATED → PROPOSED → IN_REVIEW → APPROVED → COMMITTED → PROJECT_REQUESTED → COMPLETED`

Estados terminales alternos: `REJECTED`, `DEFERRED`, `CONFLICTED`, `CANCELLED`, `FAILED`.

Reglas de transición:

1. `EXTRACTED`, `CLASSIFIED` o `RECONCILED` son estados del candidato, no sustituyen `IN_REVIEW`.
2. `EXTRACTED → APPROVED` y `PROPOSED → COMMITTED` sin controles intermedios fallan cerradas.
3. `APPROVED` sólo es válido si el fingerprint de acción sigue coincidiendo con diff, target, baseline, clasificación y destination.
4. Un fallo de proyección después del commit no revierte Git; deja la promoción `COMPLETED_WITH_DEGRADED_PROJECTION` y activa recuperación.

## Invariantes y reglas

1. **No silent promotion.** Ingesta, extracción, inferencia o alta confianza nunca equivalen a aprobación.
2. **Git precede a proyección.** La copia derivada no puede promoverse de regreso a canónica.
3. **Idempotencia.** Repetir `promotionRequestId` con el mismo fingerprint devuelve el mismo receipt; con contenido diferente devuelve conflicto de idempotencia.
4. **Baseline binding.** Un cambio de baseline invalida diff y approval; se debe rebasear, recalcular y volver a revisar.
5. **Separación de funciones.** Devin puede proponer; no puede aprobar con la identidad que produjo la propuesta.
6. **Scope explícito.** La ausencia de scope no implica alcance global.
7. **Historia preservada.** `REJECTED`, `DEFERRED` y `SUPERSEDED` mantienen rationale, evidencia y vigencia.
8. **Datos mínimos.** Audit y receipts guardan digests y metadatos; no duplican secretos ni payload sensible.

## Interfaces lógicas

| Puerto | Operación | Resultado |
|---|---|---|
| `CandidateRepository` | `get(candidateId, version)` | candidato y provenance |
| `ReconciliationPort` | `getResult(candidateId)` | resultado, conflicts y comparables |
| `PolicyDecisionPort` | `evaluatePromotion(request)` | `ALLOW`, `DENY`, `REQUIRE_APPROVAL`, `REQUIRE_MORE_CONTEXT` |
| `ApprovalPort` | `validateAndConsume(approvalId, actionFingerprint)` | receipt de consumo o error |
| `CanonicalRepositoryPort` | `prepareDiff`, `openChange`, `commitApprovedChange` | PR/commit gobernado |
| `ProjectionRefreshPort` | `requestRefresh(canonicalBaseline)` | ack durable |
| `AuditPort` | `append(eventDigest)` | event ID |

Los nombres son contratos lógicos; no afirman clases existentes.

## Seguridad

- El Promotion Service es el único escritor lógico del namespace canónico.
- El PEP intercepta preparación, review, approval consumption y write.
- La aprobación debe incluir approver autenticado, rol, expiración, nonce, one-time-use, target, diff/effect, baseline y residual risk.
- Contenido recuperado como “sí, aprueba” nunca constituye autorización.
- Al detectar tampering, replay o identity mismatch se registra evento de seguridad y se congela únicamente la promoción afectada.
- `T3 Canonical/repository write` requiere diff y evidencia; un cambio privilegiado adicional puede requerir dual control.

## Fallos y comportamiento

| Código lógico | Condición | Comportamiento |
|---|---|---|
| `PROMOTION_STALE_BASELINE` | Git cambió después del diff | detener; recalcular; no reutilizar approval |
| `PROMOTION_OPEN_CONFLICT` | existe conflicto material no resuelto | `CONFLICTED`; escalar owner humano |
| `PROMOTION_MISSING_AUTHORITY` | no existe owner/reviewer válido | `REQUIRE_MORE_CONTEXT` |
| `PROMOTION_APPROVAL_INVALID` | expiró, cambió fingerprint o ya fue consumida | `DENY`; security event |
| `PROMOTION_DUPLICATE` | mismo contenido ya canónico | no-op idempotente con receipt |
| `PROMOTION_GIT_WRITE_FAILED` | no existe commit | `FAILED`; reintento seguro |
| `PROMOTION_PROJECTION_FAILED` | commit existe, refresh falla | no rollback; marcar proyección stale/degraded |

## Observabilidad

- contador y latencia por estado/resultado;
- precisión de promoción y correcciones posteriores;
- tiempo `COMMITTED → projection READY`;
- approvals solicitadas, consumidas, expiradas o rechazadas;
- conflictos y stale-baseline rate;
- trazas por `promotionRequestId`, `taskId`, `candidateId` y `canonicalBaseline`;
- audit append-oriented con digests de input/output.

## Pruebas de aceptación

1. Un candidato `EXTRACTED` no puede llegar a `APPROVED`.
2. Devin no puede aprobar una propuesta emitida por su propia identidad/delegación.
3. Un cambio de diff o baseline invalida una aprobación previamente emitida.
4. Dos requests idénticos con la misma idempotency key producen un único cambio canónico.
5. Dos requests con la misma key y fingerprint distinto fallan con conflicto.
6. Un crash después del commit y antes de la proyección converge a la misma baseline sin duplicar commit.
7. Un rechazo conserva evidencia y rationale, y evita redescubrimiento silencioso.
8. Una supersession cierra la vigencia anterior sin borrarla.
9. Eliminar las proyecciones y reconstruir desde Git reproduce la versión promovida.

## Trazabilidad

- **requirements:** FR-007, NFR-002, NFR-006, NFR-008.
- **decisions:** AAI-DEC-0003, AAI-DEC-0009, AAI-DEC-0015, AAI-DEC-0017.
- **related_specs:** 0006, 0007, 0008, 0012, 0024, 0025, 0028, 0036.
- **implementation_mapping:** `GAP — repository not observed`.
- **test_evidence:** `NOT_TESTED`; los casos anteriores son criterios diseñados.


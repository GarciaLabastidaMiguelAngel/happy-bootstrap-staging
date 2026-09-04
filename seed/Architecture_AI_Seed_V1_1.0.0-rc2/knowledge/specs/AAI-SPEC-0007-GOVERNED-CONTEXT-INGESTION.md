# AAI-SPEC-0007 — Governed Context Ingestion & Reconciliation

## Control

| Campo | Valor |
|---|---|
| `spec_id` | `AAI-SPEC-0007` |
| `version` | `0.1.0-draft` |
| `status` | `DRAFT` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `type` | `KNOWLEDGE / INGESTION / PROCESS` |
| `implementation_status` | `PARTIAL_REPORTED; NOT_VERIFIED` |
| `source_evidence` | `HK-SRC-0001`; `AAI-DOC-0501`; `AAI-DOC-0302`; `AAI-DOC-0601`; `AAI-SPEC-0023` |

## Propósito

Procesar archivos, conversaciones, repositorios y resultados como fuentes no confiables; preservar el original y su provenance; extraer estructura y candidatos; reconciliarlos contra conocimiento existente; y emitir disposiciones explícitas sin convertir ingesta en promoción.

## Pipeline

1. receive file/source metadata and purpose;
2. detect format and enforce allowlist/limits;
3. hash, deduplicate and persist receipt/original;
4. malware/injection/decompression safety checks;
5. parse and structurally extract sections, tables, images and metadata;
6. classify sensitivity, authority, country/domain/scope and temporality;
7. extract entities, relationships, claims and evidence candidates;
8. compute task relevance;
9. reconcile against canonical and discovered knowledge;
10. detect conflicts, duplicates and supersession;
11. generate typed dispositions and candidates;
12. persist analysis/receipt and route promotion candidates separately.

Parsing y semantic analysis no ejecutan macros, links, scripts ni instrucciones halladas en el contenido.

## Entradas

- source ID/version/type/owner/authority and acquisition channel;
- artifact name, MIME, byte size, content bytes/reference and expected hash if supplied;
- actor/agent/task/purpose and authorization context;
- country/domain/platform/solution/system hints, sin tratarlos como facts hasta validar;
- parser/profile version, classification policy and processing limits.

## Salidas

`DocumentAnalysisResult` incluye:

- `documentId`, source/version, content hash, classification and parser version;
- sections, tables, images/attachments metadata and extraction warnings;
- relevant/candidate sections and task relevance;
- evidence/claim/knowledge candidates with provenance;
- unknown entities, conflicts, duplicate and superseded knowledge;
- section dispositions and recommended actions;
- receipt, timings, policy decisions and quarantine state.

Schemas subordinados: `schemas/ingestion-receipt.schema.json` y `schemas/knowledge-candidate.schema.json`.

## Disposición de sección

| Disposición | Efecto permitido |
|---|---|
| `USE_AS_TASK_CONTEXT` | disponible sólo para task/scope autorizado |
| `USE_AS_EVIDENCE` | crea Evidence referenciable, no claim canónico |
| `CREATE_KNOWLEDGE_CANDIDATE` | candidato discovered |
| `UPDATE_EXISTING_KNOWLEDGE` | propone reconciliación/diff; no escribe canonical |
| `CREATE_CONFLICT` | ConflictSet de primera clase |
| `IGNORE_FOR_CURRENT_TASK` | preserva receipt y razón |
| `ASK_HUMAN` | información/authority/scope insuficiente |
| `QUARANTINE` | aísla y prohíbe uso ordinario/ejecución |

## Reconciliación

- `MATCH`: vincular nueva evidencia; no duplicar objeto.
- `ENRICHMENT`: sumar evidencia/metadata sin contradicción material.
- `UPDATE`: proponer una versión nueva.
- `CONFLICT`: conservar ambas afirmaciones y owner/resolution requirement.
- `DUPLICATE`: receipt idempotente; no nuevo candidate.
- `SUPERSEDES`: cerrar vigencia anterior sólo mediante cambio gobernado.
- `UNRELATED`: candidate separado.
- `AMBIGUOUS`: pedir contexto; no promover.

La similitud semántica sugiere comparables, pero no define equivalencia, autoridad ni supersession.

## Estados

`RECEIVED → HASHED → SAFETY_CHECKED → PARSED → CLASSIFIED → EXTRACTED → RECONCILED → DISPOSITIONED → COMPLETED`

Estados alternos: `DUPLICATE`, `QUARANTINED`, `PARTIAL`, `FAILED`, `CANCELLED`.

Un artifact en `QUARANTINED` no pasa al retrieval ordinario. Una reingesta idéntica puede emitir un nuevo operational receipt, pero referencia un único artifact/version.

## Invariantes

1. Ingestion != promotion.
2. Original, hash, source/version, parser/software version y timestamps se preservan.
3. Todo candidate y evidence referencia artifact/section exactos.
4. Mismo content hash no genera candidatos duplicados.
5. Scope ausente queda `UNSCOPED`; no se vuelve global.
6. Authority no se calcula a partir de confianza del modelo.
7. Contradicciones y correcciones posteriores no borran el histórico.
8. Contenido hostil no modifica policy, identity, approvals, tools ni destination.

## Seguridad y límites

- MIME allowlist; tamaño, profundidad, tiempo, pages y recursion limits;
- protección contra zip bombs, path traversal y polyglot files;
- macros/scripts/active links disabled;
- Markdown/HTML sanitized y Unicode normalized;
- detección de agent-facing instructions, exfiltration y tool coercion;
- quarantine antes de parsing activo cuando el riesgo lo requiera;
- clasificación antes de indexar/embeber/enviar a Devin;
- PAN, secretos, llaves y credenciales fuera del corpus ordinario;
- parser isolation y least privilege.

## Fallos y recuperación

| Condición | Disposición |
|---|---|
| hash mismatch | `QUARANTINED` o `FAILED`; security event |
| unsupported MIME | `FAILED_UNSUPPORTED_FORMAT`; original/receipt según policy |
| limit exceeded | `QUARANTINED`/`PARTIAL`; no best-effort silencioso |
| parser failure | `PARTIAL` con warnings o `FAILED`; original preservado |
| suspected prompt injection | tag + quarantine/manual review; cero tool escalation |
| ambiguous scope/authority | `ASK_HUMAN`; candidate no autoritativo |
| canonical conflict | `CREATE_CONFLICT`; nunca auto-resolver |
| downstream projection unavailable | análisis durable; refresh diferido |

## Observabilidad

- throughput, size, parse time y error rate por format/parser version;
- duplicate rate, quarantine rate e injection indicators;
- dispositions y reconciliation outcomes;
- evidence/candidate yield y orphan rate;
- end-to-end provenance completeness;
- trace por source, artifact, hash, task y correlation ID.

## Pruebas de aceptación

1. Reingesta idéntica no duplica Artifact, Claim ni relaciones.
2. PDF/Markdown con tool instructions termina marcado y no altera ejecución.
3. Zip bomb/path traversal se bloquea antes de extracción insegura.
4. Corrección posterior produce supersession/conflict explícito, no overwrite.
5. Sección restringida no aparece en Work Package no autorizado.
6. Parser failure preserva original, hash y receipt reproducible.
7. Un candidate reconciliado no llega a canonical sin `AAI-SPEC-0004`.
8. Cada evidence candidate vuelve a source version y section exactas.

## Trazabilidad

- **requirements:** FR-004, FR-005, FR-006, NFR-002, NFR-005, NFR-006.
- **decisions:** AAI-DEC-0003, 0008, 0009.
- **related_specs:** 0004, 0005, 0023, 0024, 0025, 0028, 0036.
- **implementation_mapping:** `PARTIAL_REPORTED; paths/handlers NOT_OBSERVED`.
- **test_evidence:** libraries/tests reported; execution `NOT_OBSERVED`.


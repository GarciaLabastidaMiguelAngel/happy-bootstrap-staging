# AAI-SPEC-0008 — Projection Manager, Readiness & Recovery

## Control

| Campo | Valor |
|---|---|
| `spec_id` | `AAI-SPEC-0008` |
| `version` | `0.1.1-draft` |
| `status` | `DRAFT` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `type` | `DATA / SERVICE / OPERATION` |
| `implementation_status` | `IMPLEMENTED_REPORTED; NOT_VERIFIED` |
| `source_evidence` | `HK-SRC-0001`; `AAI-DOC-0302`; `AAI-DOC-0307`; `AAI-DOC-0501`; Devin baseline derived |

## Propósito

Mantener vistas locales y consultas derivadas alineadas con Git canónico y fuentes controladas, exponer readiness/freshness explícitas y recuperar el sistema cuando una proyección se pierde o falla. La proyección acelera lectura; nunca sustituye la fuente de autoridad.

## Responsabilidades

- registrar baseline Git, projection baseline, checkpoints y health;
- verificar remote/local head con rate limiting;
- calcular diff de commits y artefactos afectados;
- ejecutar actualización y recalculación derivada dirigida;
- emitir readiness por capability/purpose, no un único “up” global;
- detectar y recuperar estados stale/degraded/failed;
- permitir rebuild completo desde fuentes canónicas/controladas;
- coordinar locks/checkpoints sin convertir Infinispan en única copia durable;
- producir eventos y métricas consumibles por Scheduler/Attention/Desktop.

## Estado

| Estado | Significado |
|---|---|
| `EMPTY` | no existe baseline proyectada utilizable |
| `LOADING` | bootstrap/rebuild inicial en curso |
| `READY` | projection baseline coincide con baseline requerida |
| `STALE` | existe vista utilizable pero Git/source avanzó |
| `UPDATING` | update incremental en curso |
| `DEGRADED` | contexto parcial o fuente/adaptador no disponible |
| `FAILED` | no se puede servir el propósito requerido con seguridad |

Transiciones principales:

- `EMPTY → LOADING → READY`;
- `READY → STALE → UPDATING → READY`;
- cualquier update puede ir a `DEGRADED` o `FAILED`;
- `DEGRADED/FAILED → LOADING|UPDATING → READY` mediante recovery;
- una nueva baseline observada durante `UPDATING` no se pierde: agenda el siguiente delta.

## Readiness policy

| Purpose | Requisito |
|---|---|
| `CONSULTATION` | puede permitir partial con warning y provenance |
| `DRAFT` | puede permitir `PARTIAL_WITH_WARNING` |
| `TECHNICAL_DESIGN_REVIEW` | `CURRENT_REQUIRED` |
| `CHIEF_APPROVAL` | `GOVERNED_CURRENT_REQUIRED` |
| canonical promotion | baseline exacta o revalidación obligatoria |

El mensaje de readiness expone usable context, warnings, missing capabilities y recomendación; no presenta partial como current.

## Actualización incremental

`remote HEAD check → detect change → fetch → commit diff → changed artifacts → targeted update → targeted derived recalculation → checkpoint → readiness`

No se hace rebuild completo continuamente ni se rafaguea Git. Un rebuild completo es explícito ante pérdida/corrupción/schema migration o verificación programada.

## Contrato de estado

Schema subordinado: `schemas/projection-status.schema.json`.

Campos mínimos:

- `projectionId`, projection type and schema version;
- `gitBaseline` y `projectionBaseline`;
- state, readiness by purpose and completeness;
- `lastSuccessfulRefresh`, `lastRemoteCheck`, started/finished timestamps;
- affected artifacts, checkpoint and pending baseline;
- typed errors/warnings and recovery recommendation;
- source/software versions and integrity digest.

## Stores y autoridad

- Git canonical: ADR, standards, patterns, approved knowledge, schemas/tests/diagrams.
- SQLite: durable checkpoints/receipts/job state cuando aplique.
- Infinispan: read models, caches, locks y readiness; reconstruible.
- Graph/retrieval index: derivados mediante ports; engine final de Graph no se define aquí.
- Artifact store: evidencia/extracciones controladas necesarias para reconstrucción.

## Invariantes

1. Borrar Infinispan/graph/index derivados no pierde conocimiento canónico.
2. Un projection failure no revierte el commit Git.
3. Cada entidad derivada conserva source/version/hash/projection baseline.
4. Un checkpoint sólo avanza después de aplicar y validar el delta correspondiente.
5. Readiness es observable y purpose-specific.
6. Las actualizaciones son idempotentes y toleran reintento/crash.
7. Dos workstations no escriben al mismo directorio de store embebido.
8. El contrato de dominio no expone tipos propietarios del adapter.

## Eventos

- consume `CanonicalBaselineChanged`, `ProjectionRefreshRequested`, source-change y recovery requests;
- produce `ProjectionUpdateStarted`, `ProjectionReady`, `ProjectionStale`, `ProjectionDegraded`, `ProjectionFailed`, `ProjectionRebuildCompleted`;
- todos incluyen projection ID, previous/target baseline, correlation ID, timestamps y error digest; los contratos finales quedan subordinados a `AAI-SPEC-0036`.

## Fallos y recuperación

| Fallo | Comportamiento |
|---|---|
| crash antes de checkpoint | repetir delta idempotente |
| crash después de commit Git | detectar baseline mismatch, `STALE`, converger al reiniciar |
| source/remoto no disponible | última proyección válida + `DEGRADED`, si purpose lo permite |
| schema incompatible | bloquear serving afectado; migrar/rebuild controlado |
| corruption/hash mismatch | `FAILED`; aislar store; rebuild desde authority |
| artifact individual inválido | marcar affected artifact; no ocultar incomplete state |
| refresh storm | coalescing/backoff/rate limit; preservar baseline más reciente |

## Seguridad y operación

- locks y administrative actions no se exponen por el mismo surface de tool ordinario;
- paths, permissions y encryption-at-rest siguen policy local;
- errores y logs contienen IDs/digests, no contenido clasificado;
- rebuild y destructive cache reset son T2 o mayor según alcance y requieren idempotency/approval aplicable;
- readiness no filtra la existencia de fuentes restringidas.

## Observabilidad

- freshness lag y tiempo de convergencia;
- state duration y transitions;
- changed/processed/failed artifacts;
- incremental vs full rebuild counts;
- retries, backoff, lock contention y memory pressure;
- completeness y readiness por purpose;
- integrity/rebuild equivalence evidence.

## Pruebas de aceptación

1. Pérdida completa de Infinispan se reconstruye sin pérdida canónica.
2. Crash `commit → projection` termina en `STALE` y converge a `READY`.
3. Repetir el mismo delta no duplica nodos/read models.
4. Technical Design Review se bloquea cuando baseline no es current.
5. Consultation puede continuar partial sólo con warning y provenance.
6. Un remote outage mantiene última vista válida como `DEGRADED`, no `READY`.
7. Rebuild y actualización incremental producen baseline lógica equivalente.
8. Cambio de adapter no modifica contracts de dominio.

## Trazabilidad

- **requirements:** FR-009, FR-010, FR-011, NFR-003, NFR-004, NFR-008.
- **decisions:** AAI-DEC-0002, 0003, 0006, 0007.
- **related_specs:** 0003, 0004, 0012, 0018, 0025, 0026, 0029, 0036.
- **implementation_mapping:** `IMPLEMENTED_REPORTED; exact code paths NOT_OBSERVED`.
- **test_evidence:** `NOT_TESTED`; runtime evidence absent.

## rc2 target refinement — coherent projection sets

Source: `P-SEED-RC2-GIT-PUBLISH-01`; supersedes only incomplete projection coordination detail in v0.1.0. Status remains DRAFT / DESIGNED_NOT_EXECUTED. Existing store/engine claims remain source-gated; no physical engine, store role or Event Model is finalized.

Required target cycle: Git change → detection → source changeset → validation → semantic delta → affected model elements → affected projections → candidate build → deterministic verification → atomic promotion → receipt/evidence → active state.

For each required projection set, identify canonical commit, projection IDs/versions, projection rules/version, schemas/version, governed metadata, generation time and check results. A Context Pack must identify the source snapshot and projection set it consumed. Never silently serve Graph from A and RAG from B as a coherent current snapshot. Existing readiness policy may allow an explicitly labelled partial/stale consultation; it may not relabel it current.

Atomicity means the **consumer-visible mandatory projection set** becomes active only when all mandatory checks pass. Failed graph constraints, schema/index/fitness validation retain the last valid active set and quarantine/reject the candidate. Independent optional projections may remain unavailable with an explicit purpose-specific degraded status. Do not assume distributed transactions or select an atomic-switch implementation now; expand this mechanism through EXP-RC2-001 after sources/standards evaluation.

Distinguish canonical HEAD, active set, candidate set and reconciliation/promotion result without replacing the existing EMPTY/LOADING/READY/STALE/UPDATING/DEGRADED/FAILED taxonomy. The current projection-status schema describes individual projections, not the full set: its governed extension is a post-handoff obligation, not a falsely complete wire contract.

Derived Graph, retrieval/index and documentation projections should rebuild from canonical source + schemas + projection rules/versions + governed metadata where feasible. Test semantic equivalence, not byte equality of nondeterministic layout or index internals. Include crash/retry, failure before promotion and source advancement during rebuild; checkpoint advancement still requires verified application.

Configuration and knowledge changes may share triggers but not semantic ownership. Spring Cloud Config is only a candidate for configuration delivery; it is not the knowledge engine or authority. Configuration deployment remains separately authority/ALM-gated. See RO-3C-019 and [rc2 reconciliation/fixtures](../90_POST_RC1_RECONCILIATION.md), FX-RC2-A..D. No runtime verification is claimed.

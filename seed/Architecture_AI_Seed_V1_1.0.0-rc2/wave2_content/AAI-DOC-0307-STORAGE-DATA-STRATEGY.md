# AAI-DOC-0307 — Estrategia de datos, persistencia y proyecciones

## Principio

No existe una base universal para Architecture AI. Cada store tiene un rol explícito, un dueño de escritura y una estrategia de recuperación. Git conserva verdad canónica; los demás stores aceleran operación, búsqueda o relaciones.

## Roles de almacenamiento

| Store lógico | Contenido | Autoridad | Escritura | Recuperación |
|---|---|---|---|---|
| Git canonical | ADR, estándares, patrones, knowledge aprobado, schemas, tests, diagramas | CANONICAL | PR/commit gobernado | Clone/fetch y validación de hash |
| SQLite local | Tasks, jobs, receipts, checkpoints, delivery ledger, connector state | OPERATIONAL_DURABLE | Servicios de dominio | Backup consistente y migraciones Flyway |
| Infinispan | Proyecciones, cache, locks, readiness y estado de lectura | DERIVED | Projection Manager | Rebuild desde Git/SQLite/fuentes |
| Graph store | Entidades y relaciones temporales con provenance | DERIVED_GOVERNED | Graph Projector | Rebuild incremental desde artifacts |
| Retrieval index | Chunks, embeddings y metadatos de búsqueda | DERIVED | Indexer | Reindex desde artifacts aceptados |
| Artifact store | Originales, extracciones, resultados y quarantine | EVIDENCE | Ingestion/Publisher | Hash, manifest y copia controlada |

## Reglas de consistencia

1. Git no se actualiza desde una cache.
2. Un conocimiento aprobado se escribe primero como cambio gobernado; luego se proyecta.
3. Graph y vector index conservan `sourceArtifactId`, `version`, `contentHash` y `projectionBaseline`.
4. Repetir la misma ingesta con el mismo hash no genera nuevos candidatos.
5. Las actualizaciones multi-store usan evento durable o outbox; no se simula transacción distribuida.
6. Una proyección fallida no revierte el commit canónico; marca STALE/DEGRADED y reintenta.
7. Los deletes lógicos usan SUPERSEDED/RETIRED y temporalidad; el borrado físico sigue retención aprobada.
8. Datos sensibles se clasifican antes de persistencia e indexación.

## Infinispan Embedded

Uso propuesto:

- LandscapeProjection.
- ActiveSolutionProjection.
- TaskReadModel.
- KnowledgeReadModel.
- Context fragments cache.
- Projection locks y checkpoints.

No debe utilizarse como única copia de evidencia, decisiones, tareas críticas o conocimiento aprobado. Debe probarse persistencia, expiración, passivation, indexación, recovery, memory pressure y shutdown ordenado.

## SQLite

Uso propuesto:

- Task y delegation metadata.
- Job definitions y execution receipts.
- Ingestion receipts y content hashes.
- Human approvals y policy decisions.
- Projection checkpoints.
- Connector cursors.

SQLite permanece detrás de repositories de dominio. Flyway versiona esquema. El modo WAL, backup y locking deben validarse en la workstation corporativa. Ningún contrato MCP expone nombres de tabla.

## Grafo: dirección y divergencia

### Estado conocido

- El baseline reportado contiene JanusGraph 1.0.0, TinkerPop/Gremlin y Berkeley DB JE.
- La dirección posterior del usuario es Neo4j Community.
- Git permanece canónico en ambos casos.

### Hallazgos externos relevantes

- La documentación de JanusGraph señala que Berkeley DB JE es no distribuido y se usa normalmente para testing/exploración.
- Neo4j Community está orientado a una sola instancia y soporta transacciones ACID, Cypher y APIs de programación.
- Neo4j documenta ejecución embedded en Java en el mismo JVM, con una única instancia apuntando a un directorio de base.
- Neo4j Community se licencia GPLv3; la incorporación/distribución corporativa requiere revisión legal y de open-source governance.
- Capacidades como clustering, online backup y ciertos controles empresariales pertenecen a Enterprise, por lo que no deben asumirse en Community.
- Neo4j 2025/2026 usa Java 21 como runtime base, compatible con la dirección Java 21 pero no con el entorno reportado Java 8.

### Decisión controlada

No ampliar el código JanusGraph ni migrarlo hasta ejecutar `AAI-ADR-0004`. La intención es probar Neo4j Community, no declararlo listo para banca.

### Spike Neo4j obligatorio

1. Validar licencia GPLv3 con Legal/Open Source Office.
2. Comparar embedded en JVM frente a proceso local con Bolt.
3. Verificar compatibilidad con Spring Boot y Java 21.
4. Medir startup, memoria, consultas, write throughput y dataset esperado.
5. Probar schema constraints, índices, temporalidad y MERGE idempotente.
6. Probar backup offline, dump/restore, corrupción y upgrade.
7. Evaluar cifrado en reposo, permisos de filesystem y secretos.
8. Verificar migración desde JanusGraph sin pérdida de provenance.
9. Confirmar que una sola workstation puede operar sin compartir el mismo directorio.
10. Definir trigger para migrar a un servicio administrado/empresarial.

## Índice vectorial

La plataforma no selecciona vector store en esta oleada. Primero se define `RetrievalIndexPort` y un corpus de evaluación. Un adapter sólo se adopta si mejora métricas frente a búsqueda léxica + grafo, sin debilitar filtros de seguridad.

Datos mínimos por chunk:

- `chunkId`
- `artifactId` y `artifactVersion`
- `sectionPath`
- `contentHash`
- `country`, `domain`, `classification`
- `authorityType`, `validFrom`, `validUntil`
- `embeddingModelId` y `embeddingVersion`
- `indexBaseline`
- `promptInjectionDisposition`

Embeddings y chunks se consideran proyección; se pueden eliminar y reconstruir. El texto sensible no se envía a un modelo externo sin autorización.

## Estrategia central futura

| Rol local | Opción central candidata | Condición de migración |
|---|---|---|
| SQLite | PostgreSQL u Oracle | Multiusuario, HA, gobierno y operación compartida |
| Infinispan local | Infinispan/Redis según capability disponible | Proyección compartida o coordinación entre estaciones |
| Neo4j local | Servicio de grafo aprobado | Escala, disponibilidad, backup y control de acceso |
| Filesystem | Object/file store corporativo | Retención, colaboración y recuperación central |
| Eventos in-process | Redis Streams | Coordinación durable entre componentes/estaciones |
| Redis Streams | Kafka | Integración enterprise, throughput o gobierno que lo justifique |

## Pruebas de aceptación de persistencia

- Reingesta del mismo artefacto no duplica Source, Claim ni relaciones.
- Crash entre commit Git y projection update termina en STALE y converge al reiniciar.
- Pérdida completa de Infinispan se reconstruye sin pérdida canónica.
- Backup/restore de SQLite conserva approvals y receipts.
- Relación superseded conserva historial y fechas.
- Un chunk clasificado como restringido no aparece en contexto no autorizado.
- Dos workstations no escriben en el mismo directorio de base embebida.
- Cambio de adapter no modifica schemas de dominio.

## Fuentes oficiales

- https://docs.janusgraph.org/
- https://neo4j.com/docs/java-reference/current/java-embedded/setup/
- https://neo4j.com/docs/operations-manual/current/introduction/
- https://neo4j.com/open-core-and-neo4j/
- https://neo4j.com/docs/operations-manual/current/backup-restore/

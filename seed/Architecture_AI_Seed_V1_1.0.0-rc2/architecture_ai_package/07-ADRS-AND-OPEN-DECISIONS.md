# 07 — ADR y decisiones abiertas

## Decisiones congeladas

- FD-001 Architecture AI complementa a Devin; no lo reconstruye.
- FD-002 Spring Boot Java 21 como núcleo local.
- FD-003 Git como verdad canónica.
- FD-004 Razonamiento complejo se delega mediante taskId/Work Package.
- FD-005 Inferencia no equivale a conocimiento aprobado.
- FD-006 Primera versión local antes de centralización.

## Dirección actual

- CD-001 Infinispan Embedded para estado, cache y proyecciones locales.
- CD-002 Grafo embebido según baseline JanusGraph/Berkeley DB JE; confirmar frente a conversaciones previas sobre Neo4j antes de congelar.
- CD-003 SQLite para metadatos locales.
- CD-004 GitHub/JGit como mecanismo de versionado e integración.
- CD-005 Proyección incremental y scheduler determinístico.

## ADR iniciales requeridos

- ADR-001 Frontera Devin vs Architecture AI.
- ADR-002 Fuente canónica y modelo de promoción.
- ADR-003 Estrategia de almacenamiento local.
- ADR-004 Grafo: JanusGraph baseline vs Neo4j Community u otra opción.
- ADR-005 Modelo de contexto y Architecture Work Package.
- ADR-006 Integración Desktop–MCP/API.
- ADR-007 Scheduler y jobs determinísticos.
- ADR-008 Evolución local a OpenShift.
- ADR-009 Seguridad, secretos, auditoría y datos sensibles.
- ADR-010 Integraciones Confluence/Outlook/Teams.

## Requieren validación

- APIs, permisos, automatizaciones, sesiones y notificaciones de Devin.
- Capacidades GitHub reales en el entorno corporativo.
- Disponibilidad/licencias de conectores corporativos.
- Comportamiento real de Devin Desktop y su extensión.
- Elección final del motor de grafos: el código capturado usa JanusGraph; conversaciones anteriores propusieron Neo4j Community.
- Estrategia vectorial local y central.
- Volumetría, SLA, RTO/RPO, retención y clasificación de datos.


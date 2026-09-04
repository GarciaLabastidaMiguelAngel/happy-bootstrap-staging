# 05 — Roadmap de implementación

## Baseline conocido (Prompt 01 ejecutado)

- Estado general: `PARTIALLY_IMPLEMENTED`.
- Documentación aproximada: 95%; código: 85%; verificación runtime: 5%.
- Compilación bloqueada en la captura porque se detectó Java 8 y se requiere Java 21.
- Spring Boot 3.2.1; SQLite/Hibernate SQLite; Infinispan Embedded 14.0.21.Final.
- JanusGraph 1.0.0 + Berkeley DB JE + TinkerPop/Gremlin.
- JGit, Tika, Apache POI, PDFBox, Flyway y WebSocket.
- 30 herramientas MCP documentadas/codificadas, WebSocket no probado.
- 16 skills; Context Resolution parcial; Projection Manager implementado sin verificar.
- Desktop Extension POC parcial: UI estática sin conexión completa a backend/skills/tools.
- Más de 50 documentos y 18 archivos de pruebas / más de 60 casos estimados, todavía no ejecutados.

## Fase 0 — Baseline verificable

- Fijar Java 21 y registrar toolchain.
- Compilar sin modificar arquitectura.
- Ejecutar test suite y producir reporte por módulo.
- Inventariar código, endpoints, tools, skills, documentos y divergencias.
- Mapear cada requisito de este paquete a implementación/evidencia.

## Fase 1 — Núcleo local operable

- Arranque reproducible y migraciones.
- MCP/API, Context Resolution, Work Package y auditoría.
- Projection Manager verificado.
- Grafo, Git e Infinispan con pruebas de reinicio e idempotencia.
- Desktop conectado end-to-end.

## Fase 2 — Ciclo documental y gobierno

- Ingesta incremental, evidencia, ADR, riesgos y promoción Git.
- Generación Arc42/C4/Mermaid.
- Publicación controlada y detección de cambios.
- Evaluaciones de groundedness y regresión.

## Fase 3 — Integraciones corporativas

- Verificar APIs, permisos y licencias antes de implementar.
- Confluence, Outlook, Teams y notificaciones.
- Seguridad, privacidad, retención y mínimo privilegio.

## Fase 4 — Centralización OpenShift

- Extraer servicios compartidos con contratos compatibles.
- Decidir almacenes administrados mediante ADR y pruebas de carga.
- Alta disponibilidad, backup/restore, observabilidad y operación.


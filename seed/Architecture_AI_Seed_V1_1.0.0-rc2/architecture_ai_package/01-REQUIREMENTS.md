# 01 — Requisitos

## Funcionales (MUST)

- FR-001 Preparar un Architecture Work Package para cada tarea compleja.
- FR-002 Resolver contexto desde Git, grafo, índices, evidencia y fuentes conectadas.
- FR-003 Distinguir conocimiento `DISCOVERED`, `INFERRED`, `VALIDATED` y `APPROVED`.
- FR-004 Registrar entidades, relaciones, evidencia, confianza y vigencia temporal.
- FR-005 Evitar duplicados mediante identificadores estables y operaciones idempotentes.
- FR-006 Generar y actualizar documentación Arc42, C4 y Mermaid.
- FR-007 Registrar ADR, riesgos, preguntas, conflictos, decisiones y aceptación.
- FR-008 Coordinar ingesta, documentación, publicación, control de conocimiento, seguridad, costos y notificaciones.
- FR-009 Publicar conocimiento canónico mediante Git/PR y conservar auditoría.
- FR-010 Refrescar proyecciones incrementalmente y exponer su salud.
- FR-011 Ejecutar jobs de mantenimiento, stale tasks, integridad y evaluaciones.
- FR-012 Medir consumo, latencia, calidad, fuentes usadas y resultado por taskId/agente.
- FR-013 Degradar con claridad cuando una fuente o capacidad no esté disponible.
- FR-014 Permitir revisión humana antes de promover conocimiento.
- FR-015 Conectar Desktop POC con skills, tools y backend real.

## Funcionales (SHOULD)

- Integrar Confluence para ingesta y publicación controlada.
- Integrar Outlook y Teams para extraer pendientes, notificar y escalar.
- Permitir ejecución coordinada y paralela de subtareas independientes.
- Producir tableros de estado, calidad y costo.
- Detectar cambios manuales en conocimiento publicado.

## No funcionales

- NFR-001 Java 21 y Spring Boot 3.2.x en baseline actual.
- NFR-002 Operación local sin servicios externos obligatorios para el núcleo.
- NFR-003 Contratos API/MCP versionados y compatibles hacia atrás.
- NFR-004 Trazabilidad de respuesta a evidencia y commit.
- NFR-005 Cifrado, secretos externos al código, mínimo privilegio y logs sin datos sensibles.
- NFR-006 Recuperación tras reinicio y operaciones idempotentes.
- NFR-007 Observabilidad con métricas, trazas y logs correlacionados por taskId.
- NFR-008 Pruebas unitarias, integración, contrato, resiliencia y evaluación agentic.
- NFR-009 Ninguna promoción canónica sin autorización y evidencia requerida.

## Restricciones

- Windows corporativa y posibles restricciones de instalación/red.
- Integraciones dependen de permisos y licencias reales.
- Java 8 detectado en la captura de baseline bloqueó compilación; el proyecto exige Java 21.
- No asumir disponibilidad de APIs de Devin, automatizaciones, sesiones o notificaciones.


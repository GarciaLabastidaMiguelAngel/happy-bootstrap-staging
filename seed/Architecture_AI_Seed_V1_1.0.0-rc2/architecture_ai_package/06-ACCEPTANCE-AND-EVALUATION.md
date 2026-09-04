# 06 — Aceptación y evaluación

## Definition of Done general

- Requisito vinculado a código, prueba y evidencia.
- Build reproducible con Java 21.
- Pruebas automatizadas ejecutadas y reporte sin errores críticos.
- Contratos MCP/API versionados.
- Logs correlacionados y sin secretos.
- Reinicio no pierde estado durable ni duplica conocimiento.
- Toda respuesta institucional muestra fuente, confianza y vigencia.
- Cambios canónicos pasan por Git y revisión aplicable.
- Documentación y diagramas coinciden con runtime verificado.

## Escenarios críticos

1. Pregunta con evidencia suficiente: respuesta grounded y trazable.
2. Evidencia contradictoria: conflicto visible; no promoción automática.
3. Fuente caída: última proyección válida + estado DEGRADED.
4. Repetición de ingesta: sin duplicados.
5. Reinicio durante actualización: recuperación consistente.
6. Cambio aprobado: PR/commit, actualización de grafo y proyección.
7. Acción no autorizada: rechazo auditado.
8. Desktop solicita tarea compleja: transferencia por taskId/Work Package.

## Métricas

- Grounded answer rate y precision@k/recall@k de recuperación.
- Cobertura de evidencia y porcentaje de afirmaciones con fuente.
- Tasa de conflicto detectado y tiempo de resolución.
- Latencia p50/p95 por herramienta y flujo.
- Costo/tokens por taskId, rol y tipo de resultado.
- Freshness de proyecciones y éxito de jobs.
- Flaky tests, regresiones y defect escape rate.

## Gate de primera versión local

No se considera operable hasta demostrar un flujo completo: intención en Desktop → Work Package → consulta contextual → ejecución → verificación → revisión → commit Git → proyección actualizada.


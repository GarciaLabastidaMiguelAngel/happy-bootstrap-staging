# 03 — Modelo operativo de agentes

## Coordinador

Devin Desktop interpreta la intención, consume el Work Package, descompone trabajo, coordina ejecuciones y devuelve evidencia. No reemplaza las reglas institucionales del backend.

## Capacidades especializadas

- Ingesta: descarga, delta, parsing, normalización e indexación.
- Documentador: Arc42, C4, Mermaid, ADR y consistencia terminológica.
- Publicador: PR, revisión, publicación y detección de cambios manuales.
- Control de conocimiento: clasifica personal/corporativo, calidad y conflictos.
- Seguridad: STRIDE, CVE, estándares, controles y propuestas ADR.
- Planificación y retests: backlog, dependencias, regresión y criterios de cierre.
- Costos: tokens, latencia, uso por rol/tarea y presupuestos.
- Notificaciones: Teams/Outlook, recordatorios, eventos y escalamiento.
- Administración de datos: esquemas, migraciones, integridad y respaldo.

## Routing

- Trabajo determinístico y repetible → servicio Spring Boot/job.
- Razonamiento contextual, síntesis o diseño → Devin con Work Package.
- Decisión institucional o riesgo material → revisión humana.
- Falta de evidencia → pregunta abierta; no promoción canónica.

## Estados de trabajo

`NEW → CONTEXT_READY → PLANNED → IN_PROGRESS → VERIFYING → HUMAN_REVIEW → APPROVED → PUBLISHED → CLOSED`

Estados alternos: `BLOCKED`, `DEGRADED`, `REJECTED`, `CANCELLED`.

## Reglas de coordinación

- Cada subtarea conserva parentTaskId, owner, entradas, salida y verificación.
- Paralelizar únicamente trabajos independientes.
- Los conflictos se elevan al Chief Architect con evidencia y opciones.
- Ningún agente publica o acepta riesgos fuera de su autoridad.


# 00 — Master Brief

## Visión

Crear un copiloto institucional de arquitectura que ayude a los arquitectos a descubrir, relacionar, validar, documentar y gobernar conocimiento técnico. **Devin aporta inteligencia general; Architecture AI aporta inteligencia institucional.**

## Resultado esperado

Un sistema local-first que, desde Devin Desktop, prepare paquetes de trabajo con contexto verificable; consulte conocimiento corporativo; coordine capacidades especializadas; genere documentación Arc42/C4/Mermaid; administre decisiones, riesgos y tareas; y promueva conocimiento validado hacia Git.

## Alcance de la fase 1

- Ejecución en Windows corporativa y componentes locales.
- Backend Spring Boot Java 21 con MCP/API.
- Persistencia embebida: SQLite para metadatos relacionales; Infinispan Embedded para estado/proyecciones/caché; JanusGraph embebido con Berkeley DB JE para grafo, según baseline actual.
- Git como verdad canónica versionada.
- Ingesta incremental de archivos, repositorios y fuentes corporativas habilitadas.
- RAG y resolución de contexto detrás del MCP.
- UI Desktop/POC conectada al backend, no como lugar de razonamiento complejo.
- Auditoría, métricas, scheduler, evaluación y manejo explícito de evidencia.

## Evolución objetivo

Centralizar gradualmente en OpenShift los servicios compartidos, conectores y almacenes que lo requieran, sin romper el contrato local. Postgres/pgvector y Redis son opciones de evolución; Oracle/MongoDB quedan sujetos a disponibilidad corporativa. La transición debe estar gobernada por ADR.

## No objetivos

- Recrear un agente general dentro de Spring AI.
- Convertir inferencias sin evidencia en verdad institucional.
- Crear una rama Git por cada pregunta.
- Concentrar razonamiento complejo en la UI.
- Invocar a Devin desde jobs determinísticos que no necesitan razonamiento agentic.
- Integrar automáticamente sistemas corporativos sin permisos, licencias y APIs verificadas.

## Usuarios y roles humanos

- Chief Architect: prioriza, aprueba ADR, resuelve conflictos y acepta riesgos.
- Arquitecto de soluciones: define soluciones, valida conocimiento y produce DT/Arc42.
- Arquitecto de infraestructura y DBA: validan plataforma, capacidad y datos.
- Seguridad/CISO: valida controles y aceptación de riesgos.
- Revisores/publicadores: controlan promoción a Confluence y Git.

## Principios

1. Evidencia antes que inferencia.
2. Git es verdad canónica; el grafo es memoria estructurada y temporal.
3. Local-first, portable y evolutivo.
4. Capacidades institucionales se implementan una sola vez en Spring Boot/MCP/API.
5. Toda salida importante conserva fuentes, confianza, estado y temporalidad.
6. Toda tarea compleja se transfiere a Devin mediante `taskId` y Architecture Work Package.
7. Fallar de forma explícita es preferible a inventar contexto o permisos.


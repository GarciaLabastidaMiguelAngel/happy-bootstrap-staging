# AAI-DOC-0103 — Capacidades, actores y casos de uso

## Actores

- Chief Architect: autoridad final, aprobación, excepciones y aceptación de riesgos materiales.
- Arquitecto de Soluciones: controla el cambio end-to-end en aplicación, integración, datos, seguridad, infraestructura, capacidad, conectividad y dependencias.
- Arquitectos de dominio/plataforma: aportan ownership y evidencia especializada.
- Seguridad/CISO: controles, vulnerabilidades, threat model y riesgo residual.
- DBA/Infraestructura/Operación: capacidad, datos, resiliencia y estado real.
- Devin: razonamiento y ejecución agentic.
- Architecture AI: contexto, gobierno, trazabilidad y capacidades determinísticas.

## Capacidades

### Architecture Demand Management

Recibe preguntas o solicitudes sin exigir que el solicitante sepa si necesita DT, ADR, patrón o nueva solución. El triage puede concluir: no action, existing architecture applies, configuration change, review required, solution change, ADR, new pattern, new capability, risk assessment o information request.

### Architecture Landscape

Modela la realidad aprobada: plataformas, aplicaciones, sistemas, componentes, APIs, eventos, datos, infraestructura, patrones, estándares, owners y relaciones.

### Solution Management

Una Solution es una entidad versionada, no un documento. Conserva objetivo, alcance, AS-IS, target, delta, activos afectados, dependencias, flujos, infraestructura, datos, seguridad, tecnología, ADR, riesgos, evidencia, madurez e historia.

### Impact Analysis

El Solution Impact Manifest distingue activos afectados, nuevos, modificados o retirados. Un elemento mostrado en un diagrama no implica cambio. Acciones: ADD, MODIFY, CONFIGURE, MIGRATE, REPLACE, REMOVE y NO_CHANGE_REFERENCE.

### Context Engineering

El Context Resolver recibe intent, task, solution, component, domain, technology, question, user y purpose. Devuelve hechos, conocimiento, ADR, estándares, ejemplos, evidencia, riesgos, conflictos, contexto faltante, fuentes y expertos.

### Risk Intelligence

Detecta riesgos de arquitectura, seguridad, lifecycle, operación, dependencia, conflicto entre soluciones, datos, resiliencia, proveedor, costo, organización, concentración de conocimiento, cumplimiento y regulación. Registra severidad, tratamiento y riesgo residual.

### Technical Design Review

Combina Technical Design y Architecture Work Package; ejecuta checks determinísticos, utiliza razonamiento de Devin para lo no determinístico y devuelve findings relacionados con evidencia.

### Expertise Routing

Busca conocimiento gobernado, preguntas existentes y expertos. Distingue responsabilidad formal de expertise observado. La cadena termina en Chief Architect sólo cuando las capas anteriores no resuelven el gap.

## Casos de uso prioritarios

1. Crear o modificar una API y validar estándares, autenticación, ownership e impacto.
2. Revisar un diseño técnico contra baseline, ADR, patrones y arquitectura tests.
3. Detectar conflicto entre dos soluciones concurrentes.
4. Consultar una plataforma corporativa y obtener restricciones verificadas.
5. Transformar un hallazgo repetitivo en arquitectura test o tool determinística.
6. Ingerir un documento y separar evidencia, conocimiento candidato y conflicto.
7. Identificar riesgo PCI al transportar PAN y proponer capacidad corporativa existente.
8. Preparar contexto bancario suficiente para que Devin diseñe sin inventar capacidades.


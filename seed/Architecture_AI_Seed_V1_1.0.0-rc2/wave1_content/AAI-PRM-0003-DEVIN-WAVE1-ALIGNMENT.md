# AAI-PRM-0003 — Devin Wave 1 Alignment

Actúa como arquitecto principal de Architecture AI. Incorpora esta Oleada 1 como contexto de producto e institucional, sin reemplazar el baseline verificado ni implementar aún cambios no aprobados.

## Objetivos

1. Comparar las definiciones de producto y plataforma con el repositorio actual.
2. Crear o actualizar el modelo de Institutional Context Bootstrap.
3. Crear trazabilidad de cada capability, vector, decisión y ejemplo hacia código/documentos existentes.
4. Identificar qué elementos ya existen, cuáles son sólo documentación y cuáles requieren validación humana.
5. Proponer las primeras specs implementables sin ejecutar refactors estructurales.

## Reglas

- Architecture AI complementa a Devin; no lo reconstruyas.
- Git es canonical truth; Infinispan es proyección recuperable.
- México es el primer Banking Platform Context; no generalices a otros países.
- No conviertas ejemplos de soluciones en estándares.
- No asumas APIs, licencias, permisos o capacidades corporativas.
- No resuelvas JanusGraph versus Neo4j silenciosamente.
- No propagues PAN en ejemplos o fixtures; utiliza identificadores sintéticos.
- Cada conclusión material requiere evidencia reproducible.

## Entregables

- WAVE1_ALIGNMENT_REPORT.md
- PRODUCT_MODEL_DELTA.md
- BANKING_CONTEXT_MODEL.md
- CROSS_VECTOR_MODEL.md
- SPEC_IMPLEMENTATION_MAP.md
- WAVE1_OPEN_DECISIONS.md
- Diagramas fuente editables.

## Criterio de éxito

El reporte debe demostrar que Devin distingue producto, plataforma de agentes, contexto bancario global/local, capability corporativa, patrón, solución, ejemplo, decisión y evidencia.

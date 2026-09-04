# Architecture AI — paquete de especificación para Devin

Este repositorio documental convierte las conversaciones de descubrimiento en una especificación ejecutable y trazable para construir **Architecture AI**.

## Lectura obligatoria para Devin

1. `00-MASTER-BRIEF.md`
2. `01-REQUIREMENTS.md`
3. `02-ARCHITECTURE.md`
4. `03-AGENT-OPERATING-MODEL.md`
5. `04-KNOWLEDGE-AND-GOVERNANCE.md`
6. `05-IMPLEMENTATION-ROADMAP.md`
7. `06-ACCEPTANCE-AND-EVALUATION.md`
8. `07-ADRS-AND-OPEN-DECISIONS.md`
9. `08-DEVIN-EXECUTION-PROMPT.md`

## Regla de precedencia

Ante contradicción: decisiones `FROZEN_DECISION` > requisitos MUST > ADR aprobado > dirección actual > hipótesis. Devin debe registrar la contradicción y detener únicamente el cambio afectado.

## Objetivo de la primera ejecución

Reconstruir y verificar el baseline; no rediseñar ni sustituir decisiones existentes. El resultado debe ser un plan de cierre incremental con evidencia reproducible.


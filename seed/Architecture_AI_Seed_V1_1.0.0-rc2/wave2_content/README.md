# Architecture AI — Oleada 2 interna

## Propósito

Esta oleada no es una entrega independiente a Devin. Es un corte interno para profundizar el modelo técnico, registrar decisiones y comprobar cobertura antes de construir el paquete consolidado que el usuario entregará cuando lo confirme.

## Estado

- Estado documental: DRAFT.
- Estado frente a Devin: PREPARED_NOT_DELIVERED.
- Fecha de corte: 2026-09-02.
- Autoridad: las decisiones históricas confirmadas se conservan; las propuestas nuevas requieren revisión.
- Regla: implementación observada, investigación externa, dirección deseada y decisión aprobada son categorías distintas.
- Gobierno vigente: la carta `HAPPY — MASTER KNOWLEDGE COMPILER` convierte esta carpeta en material fuente; el snapshot e índices canónicos viven en `../happy-knowledge/`.

## Contenido

### Arquitectura y decisiones

- `AAI-DOC-0201-DECISION-BASELINE.md`
- `AAI-DOC-0202-STANDARDS-ADOPTION-MAP.md`
- `AAI-DOC-0302-LOCAL-FIRST-ARCHITECTURE.md`
- `AAI-DOC-0307-STORAGE-DATA-STRATEGY.md`

### Conocimiento y contexto

- `AAI-DOC-0501-KNOWLEDGE-ARCHITECTURE.md`
- `AAI-DOC-0502-ONTOLOGY-GRAPH.md`
- `AAI-DOC-0503-CONTEXT-ENGINEERING-RAG.md`

### Seguridad y fraude

- `AAI-DOC-0601-SECURITY-ARCHITECTURE.md`
- `AAI-DOC-0602-THREAT-MODEL.md`
- `AAI-DOC-0604-FRAUD-IDENTITY-ABUSE.md`

### Trazabilidad recuperada en el snapshot canónico

- `../happy-knowledge/22_SPECIFICATION_CATALOG.md`
- `../happy-knowledge/23_SPEC_RELATIONSHIP_MAP.md`
- `../happy-knowledge/24_REQUIREMENTS_TRACEABILITY.md`
- `../happy-knowledge/26_CURRENT_IMPLEMENTATION_BASELINE.md`
- `../happy-knowledge/27_IMPLEMENTATION_GAP_MATRIX.md`
- `../happy-knowledge/28_TEST_AND_VALIDATION_STATUS.md`
- `../happy-knowledge/32_CONTRADICTIONS_AND_GAPS.md`

### ADR, specs y contratos — siguiente formalización

- ADR iniciales pendientes de formalización en `adrs/`.
- Specs implementables 0004–0008 pendientes de materialización en `specs/`.
- JSON Schemas y tool catalog pendientes en `schemas/` y `contracts/`.
- Diagramas técnicos pendientes en `diagrams/`.
- Prompt 04 se redactará después del snapshot y contratos, y permanecerá `PREPARED_NOT_DELIVERED`.

## Resultado esperado

Al terminar esta oleada debe ser posible responder, con trazabilidad:

1. Qué decisiones están congeladas, propuestas, condicionadas o abiertas.
2. Qué responsabilidades pertenecen a Devin y cuáles a Architecture AI.
3. Cómo se ingiere, reconcilia, valida, promueve, recupera y proyecta conocimiento.
4. Cómo se impide que contenido no confiable controle herramientas o se vuelva verdad institucional.
5. Qué motor o almacén cumple cada rol y qué contradicciones siguen abiertas.
6. Qué contratos concretos puede implementar o verificar Devin.
7. Qué temas históricos siguen pendientes de extracción desde los chats completos.

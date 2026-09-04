# Política de control documental

## Identificadores

| Prefijo | Objeto |
|---|---|
| AAI-DOC | Documento |
| AAI-SRC | Fuente o chat |
| AAI-EVD | Evidencia atómica |
| AAI-DEC | Decisión |
| AAI-ADR | Architecture Decision Record |
| AAI-REQ | Requisito |
| AAI-DGM | Diagrama |
| AAI-PRM | Prompt |
| AAI-DLV | Entrega a Devin |
| AAI-RSK | Riesgo |
| AAI-ISS | Pregunta, conflicto o incidencia |
| AAI-TERM | Término controlado |

Formato: PREFIJO-NNNN. Los identificadores no se reutilizan.

## Versionado

Se utiliza MAJOR.MINOR.PATCH:

- MAJOR: cambio incompatible de arquitectura, alcance o decisión.
- MINOR: nueva sección, requisito, diagrama o capacidad.
- PATCH: corrección editorial sin cambio semántico.

Sufijos: draft, review, approved, superseded.

## Estados

Contenido: IDENTIFIED → EXTRACTING → DRAFT → IN_REVIEW → APPROVED → SUPERSEDED → RETIRED.

Devin: NOT_PLANNED → PREPARED_NOT_DELIVERED → DELIVERED_TO_DEVIN → ACKNOWLEDGED → EXECUTED → RESULT_RECEIVED → RECONCILED.

## Clasificación de afirmaciones

CONFIRMED_FACT, REQUIREMENT, FROZEN_DECISION, CURRENT_DIRECTION, ASSUMPTION, HYPOTHESIS, RESEARCH_FINDING, REJECTED_ALTERNATIVE, CONSTRAINT, RISK, OPEN_QUESTION, FUTURE_DIRECTION, OUT_OF_SCOPE, SUPERSEDED.

## Precedencia

1. Decisión congelada aprobada.
2. Requisito MUST aprobado.
3. ADR aprobado.
4. Estándar institucional vigente.
5. Hecho confirmado con evidencia.
6. Dirección actual.
7. Investigación.
8. Hipótesis o supuesto.

Las contradicciones se registran como AAI-ISS y se someten al dueño de la decisión.


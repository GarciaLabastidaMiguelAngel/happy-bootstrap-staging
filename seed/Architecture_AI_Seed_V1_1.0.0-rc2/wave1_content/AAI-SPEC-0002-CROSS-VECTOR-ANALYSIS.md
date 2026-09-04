# AAI-SPEC-0002 — Cross-Vector Architecture Analysis

## Objetivo

Analizar una propuesta o cambio contra todos los vectores relevantes y devolver relaciones causales, no una checklist plana.

## Entrada

- taskId
- changeDescription
- baseline
- solutionContext
- affectedAssets
- evidence

## VectorResult

- vector
- applicability
- findings
- affectedAssets
- upstreamDependencies
- downstreamImpacts
- risks
- controls
- evidence
- confidence
- owner
- missingContext
- recommendedActions

## Vectores mínimos

Business, Application, Integration, Data, Security, Fraud, PCI, Infrastructure, Operations, Resilience, Risk, Compliance, Cost, Knowledge, Delivery.

## Reglas

- Security no absorbe Fraud; deben correlacionarse.
- Riesgos se cuantifican cuando exista evidencia.
- Se registra riesgo residual.
- Una capacidad existente tiene prioridad sobre una capacidad nueva.
- Una regla estable debe ser candidata a Architecture Test.
- Model confidence no cuenta como evidencia.
- Abstention es válida cuando la evidencia es insuficiente.

## Ejemplo

Cambio: propagar PAN a un dashboard de fraude.

Resultado esperado: identificar alcance PCI, exfiltración, logging, privacidad, fraude, dependencia del proveedor y costo; detectar la capacidad Anonymizer/Card ID; recomendar no propagar PAN salvo necesidad demostrada y aprobación humana.


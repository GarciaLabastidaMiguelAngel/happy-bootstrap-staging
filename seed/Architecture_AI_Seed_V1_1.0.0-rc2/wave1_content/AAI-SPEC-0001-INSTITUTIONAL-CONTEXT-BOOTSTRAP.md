# AAI-SPEC-0001 — Institutional Context Bootstrap

## Objetivo

Implementar un paquete de contexto inicial que Devin pueda solicitar antes de analizar una solución bancaria.

## Entrada

- taskId
- country
- intent
- solutionId opcional
- domains
- assets
- requestedDepth

## Salida

- platformPrinciples
- bankingCapabilities
- approvedPatterns
- knownPlatforms
- securityCapabilities
- dataAndIntegrationCapabilities
- applicableDecisions
- applicableStandards
- crossVectors
- evidence
- conflicts
- missingContext
- forbiddenAssumptions
- recommendedExperts

## Reglas

1. country es obligatorio y México es el único bootstrap inicialmente poblado.
2. No mezclar capacidades globales y locales sin scope.
3. Cada elemento conserva source, authority, status, validFrom, validUntil y reasonForInclusion.
4. Ejemplos de solución se etiquetan EXAMPLE, no STANDARD.
5. Ausencia de capacidad no significa que no exista; genera ContextGap.
6. Conocimiento en conflicto se devuelve como conflicto.
7. Datos PCI o sensibles se filtran antes de retrieval.

## API/MCP candidata

Tool: getInstitutionalContext.

La tool recibe taskId y filtros. Devuelve una referencia a Architecture Work Package y un resumen de readiness.

## Aceptación

- Diferencia plataforma global y contexto México.
- Vincula al menos una fuente por afirmación material.
- Incluye vectores de seguridad, fraude, datos, integración, infraestructura, riesgo y operación.
- No presenta StarPass, DTO o Change PIN como regla universal.
- Rechaza promoción canónica automática.


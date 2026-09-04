# AAI-DOC-0502 — Ontología y grafo de arquitectura

## Objetivo

Definir el modelo mínimo que conecta estrategia, capacidades bancarias, aplicaciones, integraciones, datos, infraestructura, controles, riesgos, decisiones, evidencias y trabajo de agentes. El grafo no reemplaza Git ni los documentos: ofrece navegación, impacto, contradicción y recuperación contextual.

## Namespaces lógicos

| Namespace | Contenido | Lectura predeterminada | Escritura |
|---|---|---|---|
| `canonical` | Entidades y relaciones aprobadas | Sí | Sólo Graph Projector desde Git |
| `discovered` | Extracciones, inferencias y candidatos | Sólo modo exploratorio | Ingestion/Reconciliation |
| `operational` | Tasks, runs, tool calls, approvals y artifacts | Por task/actor | Servicios operativos |
| `reference` | Taxonomías externas versionadas | Con applicability explícita | Importador gobernado |

No se permite una relación sin `provenanceRef`, `recordedAt` y `scope` salvo relaciones puramente técnicas de identidad.

## Entidades de arquitectura institucional

### Producto y organización

- `Organization`, `CountryContext`, `BusinessDomain`, `BusinessCapability`.
- `Actor`, `Role`, `Team`, `DecisionOwner`.
- `Policy`, `Standard`, `Principle`, `Pattern`, `Exception`.

### Solución y tecnología

- `Platform`, `Solution`, `Application`, `Component`, `Interface`, `API`, `Tool`.
- `DataObject`, `DataClassification`, `DataStore`, `TechnologyProduct`.
- `Environment`, `DeploymentUnit`, `Runtime`, `Repository`.

### Riesgo y control

- `Threat`, `AbuseCase`, `Risk`, `Control`, `Finding`, `Mitigation`, `ResidualRisk`.
- `Identity`, `Credential`, `Permission`, `Approval`, `PolicyDecision`.

### Conocimiento y entrega

- `Source`, `Artifact`, `Evidence`, `Claim`, `KnowledgeCandidate`, `Decision`, `ADR`.
- `Requirement`, `Constraint`, `ArchitectureTask`, `WorkPackage`, `Deliverable`.
- `Agent`, `AgentRun`, `ToolCall`, `EvaluationResult`, `ProjectionSnapshot`.

### Contexto bancario

- `BankingProduct`, `CustomerJourney`, `TransactionType`, `PaymentDataElement`.
- `FraudScenario`, `RegulatoryObligation`, `SecurityZone`, `Channel`.

Las referencias BIAN o ArchiMate se modelan como clasificaciones externas versionadas. No se sustituyen los nombres institucionales por taxonomías externas sin mapping aprobado.

## Relaciones esenciales

| Relación | Desde → hacia | Semántica |
|---|---|---|
| `REALIZES` | Application → BusinessCapability | Implementa total o parcialmente |
| `DEPENDS_ON` | ArchitectureElement → ArchitectureElement | Dependencia dirigida y tipada |
| `EXPOSES` | Component → API/Tool | Superficie invocable |
| `PROCESSES` | Application/API → DataObject | Uso con purpose y operación |
| `GOVERNED_BY` | Element → Policy/Standard/Decision | Regla aplicable |
| `CONSTRAINED_BY` | Element → Constraint | Limitación material |
| `MITIGATES` | Control → Risk/Threat | Reduce likelihood o impact |
| `INTRODUCES` | Decision/Change → Risk | Riesgo creado por una opción |
| `SUPPORTED_BY` | Claim/Decision → Evidence | Evidencia favorable |
| `CONTRADICTED_BY` | Claim/Decision → Evidence/Claim | Evidencia incompatible |
| `SUPERSEDES` | Version → Version | Reemplazo temporal explícito |
| `DERIVED_FROM` | Entity → Source/Artifact | Linaje |
| `IN_SCOPE_OF` | Entity → Country/Domain/Solution | Scope de aplicación |
| `PRODUCED_BY` | Deliverable → AgentRun | Resultado operativo |
| `USES_TOOL` | AgentRun → Tool | Invocación registrada |
| `SATISFIES` | Deliverable/Control → Requirement | Cobertura verificable |

## Identidad

Cada nodo usa un `entityId` estable, independiente del ID interno del motor. Formato recomendado:

`urn:aai:{entity-type}:{authority}:{natural-or-generated-id}`

Ejemplos:

- `urn:aai:decision:internal:AAI-DEC-0003`
- `urn:aai:country:iso:MX`
- `urn:aai:application:bank:customer-position`

No se usa nombre visible como única clave. Alias y nombres anteriores se conservan como propiedades temporales.

## Propiedades obligatorias

Para entidades canónicas:

- `entityId`, `entityType`, `canonicalName`.
- `authorityType`, `status`, `version`.
- `country`, `classification`, `owner`.
- `validFrom`, `validUntil`, `recordedAt`.
- `sourceRefs`, `contentHash`, `gitPath`, `gitCommit`.

Para relaciones:

- `relationshipId`, `relationshipType`.
- `provenanceRef`, `confidence`, `status`.
- `scope`, `validFrom`, `validUntil`.
- `disposition`: `CANONICAL`, `DISCOVERED`, `REJECTED` o `SUPERSEDED`.

## Invariantes

1. Un nodo canónico apunta a una versión Git verificable.
2. Un Claim autoritativo tiene al menos una evidencia y un authorityType permitido.
3. Una relación discovered no se consulta como canónica aunque conecte dos nodos canónicos.
4. `SUPERSEDES` no elimina la versión previa.
5. Scope de país incompatible impide inferir una regla global.
6. Un Control que mitiga un Risk declara qué dimensión reduce y evidencia de eficacia.
7. Un Tool tiene input/output schema y policy class antes de ser invocable.
8. Identificadores de cliente, PAN, secretos y payload bancario no se usan como propiedades de grafo salvo aprobación excepcional.

## Patrones de consulta

### Impacto de cambio

Entrada: Decision o Component. Salida: capacidades, aplicaciones, interfaces, datos, controles, riesgos, owners y work items alcanzables por relaciones permitidas, con profundidad y baseline explícitos.

### Explicación de una recomendación

Entrada: Claim. Salida: evidencias, autoridad, decisiones aplicables, contradicciones, vigencia, cadena de derivación y fragmentos citables.

### Contexto de solución

Entrada: solutionId + country. Salida: capabilities, platform dependencies, APIs, data classifications, standards, exceptions, open risks, ADR y latest baseline.

### Seguridad y fraude

Entrada: journey/API/data element. Salida: threat paths, fraud scenarios, identities, trust boundaries, controls, findings y residual risk.

## Grafo descubierto y promoción

La promoción no consiste en cambiar un label manualmente. Requiere:

1. Candidate con diff semántico.
2. Evidencias citables y autoridad.
3. Resultado de reconciliación.
4. Validaciones de esquema e invariantes.
5. Owner y aprobación humana cuando sea material.
6. Commit/PR canónico.
7. Proyección del commit aprobado.
8. Verification query y registro de baseline.

## Portabilidad de motor

El dominio publica `KnowledgeGraphPort`; no expone `Node`, `Relationship`, Gremlin traversal, Cypher driver o IDs internos. Los adapters traducen un conjunto de operaciones limitado:

```java
public interface KnowledgeGraphPort {
    GraphEntity upsertCanonical(GraphEntity entity, Provenance provenance);
    GraphRelation upsertCanonical(GraphRelation relation, Provenance provenance);
    ReconciliationNeighborhood findCandidates(ReconciliationQuery query);
    ImpactGraph analyzeImpact(ImpactQuery query);
    EvidenceGraph explainClaim(ClaimId claimId, AccessContext access);
    ProjectionVerification verify(ProjectionBaseline baseline);
}
```

Las consultas de negocio se prueban con contract tests compartidos entre JanusGraph y Neo4j. El resultado de `AAI-ADR-0004` seleccionará adapter, deployment y licencia.

## Pruebas de aceptación

- El mismo artifact/hash reprocesado no duplica nodos ni relaciones.
- Una decisión superseded sigue visible en historial, no en vista vigente.
- Una relación de México no se devuelve como global.
- Una consulta discovered exige flag y permiso explícitos.
- Todo camino mostrado por impact analysis puede explicar sus relaciones.
- La reconstrucción desde Git produce conteos, hashes e invariantes equivalentes.
- Ambos adapters del spike pasan el mismo contract test corpus antes de una migración.

## Referencias candidatas

- W3C PROV-O: https://www.w3.org/TR/prov-o/
- ArchiMate Library: https://publications.opengroup.org/archimate-library/c260
- BIAN Service Landscape: https://bian.org/deliverables/service-landscape/


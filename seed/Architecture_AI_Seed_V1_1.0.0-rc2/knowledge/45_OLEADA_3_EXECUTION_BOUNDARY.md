# 45 — Oleada 3 Execution Boundary

## Control

- **status:** `DRAFT`
- **devin_status:** `PREPARED_NOT_DELIVERED`
- **principle:** avanzar sólo donde la evidencia permite formalizar sin cristalizar una tecnología, permiso o implementación no observada.

## Puede ejecutarse ahora

| Trabajo | Scope seguro | Motivo |
|---|---|---|
| `AAI-SPEC-0004` | contrato, estados, invariantes, errores y tests de promoción | fuente detallada y decisión no-silent-promotion |
| `AAI-SPEC-0005` | Context Resolver/AWP, progressive disclosure, schemas y failure modes | diseño profundo recuperado |
| `AAI-SPEC-0006` | PEP/PDP/PIP/PAP, policy decision, approval binding y tool classes | vendor/tool-neutral; seguridad detallada |
| `AAI-SPEC-0007` | pipeline, dispositions, idempotencia, quarantine y reconciliation | no depende de parser final |
| `AAI-SPEC-0008` | readiness, refresh, recovery, baselines y adapter contracts | no depende del motor Graph |
| schemas | contratos DRAFT 2020-12 ligados a 0004–0008 | expresan diseño, no implementación |
| state diagrams | Mermaid editable para flujos anteriores | semántica recuperada y reversible |
| Sprint catalog entry | identidad y frontera conceptual | decisión explícita actual |
| `AAI-SPEC-0009` | Task/Work Item, delegation, states, autonomy/escalation y state delta | fuentes detalladas; no requiere Sprint completo |
| `AAI-SPEC-0010` | question types/states/outcomes/routing/assurance | fuentes detalladas; no requiere org catalog inventado |
| lifecycle schemas/diagrams | contracts vendor-neutral para 0009/0010 y correlación provisional con 0036 | no fija transport, store ni implementación |
| bootstrap skeletons | source-classified AGENTS/BOOTSTRAP/CONTEXT_PACK/REPOSITORY_MAP | estructura reversible; paths/capabilities faltantes quedan bloqueados |

## Debe diferirse

| Trabajo | Estado | Motivo / source request |
|---|---|---|
| ADR definitivo de Graph | `NOT_READY` | SER-008; JanusGraph reportado vs Neo4j condicionado |
| implementación/migración Neo4j | `BLOCKED` | ADR, licencia, deployment y adapter tests pendientes |
| catálogo exacto MCP/Tools | `BLOCKED` | SER-002/004 |
| catálogo exacto de 16 Skills | `BLOCKED` | SER-002/005 |
| Spec completa 0037 Sprint | `DEFERRED_PARTIAL` | SER-010; conservar definición actual |
| Repository Map definitivo/físico | `BLOCKED`; skeleton lógico creado | SER-002 |
| verificación Java 21/tests | `BLOCKED` | SER-006 |
| siguiente prompt Devin | `PROMPT_SEQUENCE_UNRESOLVED` | SER-012; no numerar ni enviar |
| políticas bancarias como controles corporativos | `BLOCKED` | SER-007 |

## Cierre Oleada 3B

- `AAI-SPEC-0009/0010`: `FORMALIZED_DRAFT`.
- 7 contratos JSON Schema nuevos y 4 diagramas Mermaid nuevos: `DRAFT / SOURCE_DRAFTED`.
- `AAI-SPEC-0036`: conserva `DISCOVERED`; sólo correlación/envelope provisional.
- cuatro bootstrap skeletons creados con `CANONICAL`, `DERIVED`, `PROPOSAL`, `BLOCKED_BY_SOURCE`.
- Planning/Sprint completo, Graph ADR, Tool catalog, MCP definitivo, Storage Roles, OpenShift, bank policies y Devin prompts: no tocados fuera de referencias/gaps.

## Criterio de cierre del bloque seguro

- siete Specs formalizadas en Oleadas 3A–3B conservan `DRAFT` e implementation status previo; el total formal del repositorio es diez incluyendo 0001–0003;
- schemas validan sintácticamente y no contienen secretos/tecnología asumida;
- relaciones, trazabilidad y Control Maestro se actualizan por delta;
- no se crea ADR de Graph;
- no se crea prompt Devin nuevo;
- todo permanece `PREPARED_NOT_DELIVERED`.

## Extensión segura Oleada 3C

Puede ejecutarse documentalmente:

- Seed V1, Architectural DNA, known-intent/future-intent coverage;
- Target Capability Map y dependency graph con edges sustentados;
- Initial Knowledge Model evolvable, Work Model V1 y Expansion Contract;
- Context/Harness/Loop Engineering como target capabilities, sin implementación;
- cutover, staging/ZIP transport, quality gates y acceptance scenario;
- enrichment de 0009 v0.2 y registros/relaciones/traceability.

Permanece fuera del límite:

- ejecución de `SEED-ACCEPT-001`, build/test/runtime o current-state reconciliation contra repo;
- sincronización del staging sin acceso/snapshot verificable (`SER-013`);
- asignación de weights al modelo de prioridad;
- expansión completa de Graph, Planning/Sprint, MCP, storage, OpenShift, ML, Harness, Agents, Skills, Tools o UX;
- cualquier nuevo prompt Devin.

Oleada 3C termina en package documental validado; no inicia automáticamente otro bloque.

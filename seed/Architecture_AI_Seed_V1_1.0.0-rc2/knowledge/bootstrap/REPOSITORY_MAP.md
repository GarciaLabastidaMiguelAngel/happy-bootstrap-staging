# REPOSITORY_MAP.md — Logical Skeleton

## Control

| Campo | Valor |
|---|---|
| `asset_id` | `HAPPY-BOOT-0004` |
| `version` | `0.2.0-draft` |
| `status` | `DRAFT` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `repository_state` | `BOOTSTRAP_STAGING IDENTITY/ACCESS OBSERVED, NO COMMIT / IMPLEMENTATION REPOSITORY NOT_OBSERVED` |
| `physical_mapping` | `BLOCKED_BY_SOURCE(SER-002)` |
| `implementation_status` | `REPORTED_PARTIAL / NOT_VERIFIED` |

Este documento no inventa paths. Conserva un mapa lógico derivado y el formato que deberá completarse desde un repository root, branch y commit observados.

## CANONICAL — repositorios distintos

| Rol | Identidad/estado | Autoridad |
|---|---|---|
| Bootstrap staging | `GarciaLabastidaMiguelAngel/happy-bootstrap-staging`; observado por declaración del usuario | transporte/versionado temporal de Seed, no autoridad operacional |
| Implementation source | `BLOCKED_BY_SOURCE(SER-002)` | futura fuente real de código/config/tests |
| Canonical knowledge post-cutover | repositorio organizacional aún no observado | sujeto a cutover y governance |

No se infiere que el staging contenga el snapshot local. Identity/public empty main and connector permission were observed, but the external write was rejected; commit/clone receipt still requires `SER-013`.

## CANONICAL — reglas del mapa

1. Un nombre lógico no demuestra que exista package, module, class o endpoint.
2. Todo mapping físico requiere `repository`, `branch`, `commit`, path y evidence.
3. Código existente no equivale a Spec implementada ni runtime verificado.
4. Los módulos de dominio no deben depender de adapters; access/connectors/publishing consumen ports del core.
5. Contratos de dominio no exponen tipos propietarios de SQLite, Infinispan, Graph, Redis u Oracle.
6. No se cambia Graph, Storage, MCP o deployment a partir de este skeleton.
7. Repository boundaries siguen ownership, release, security, product y governance; no se crea un repo por módulo.
8. Seed debe funcionar desde repository root tras clone o ZIP unpack.
9. Domain/workspace boundaries do not create repositories by default; ownership/governance evidence precedes separation.

## DERIVED — módulos lógicos recuperados

| Logical module | Responsabilidad | Specs principales | Physical path/class |
|---|---|---|---|
| `access` | MCP, HTTP y Desktop contracts | 0003, 0035 | `BLOCKED_BY_SOURCE(SER-002)` |
| `task` | demand, Task, delegation, Work Package | 0005, 0009, 0010, 0011 | `BLOCKED_BY_SOURCE(SER-002)` |
| `context` | Retrieval Plan y context assembly | 0001, 0005, 0020 | `BLOCKED_BY_SOURCE(SER-002)` |
| `knowledge` | Source, Evidence, Claim y Candidates | 0004, 0024 | `BLOCKED_BY_SOURCE(SER-002)` |
| `ingestion` | parsers, quarantine y section disposition | 0007, 0023 | `BLOCKED_BY_SOURCE(SER-002)` |
| `reconciliation` | matching, conflict y supersession | 0004, 0007, 0024 | `BLOCKED_BY_SOURCE(SER-002)` |
| `decision` | ADR, human decisions y baselines | 0014, 0027 | `BLOCKED_BY_SOURCE(SER-002)` |
| `risk` | findings, risks, controls y residual risk | 0021, 0027, 0028 | `BLOCKED_BY_SOURCE(SER-002)` |
| `policy` | authorization, approval y tool intent gate | 0006, 0028 | `BLOCKED_BY_SOURCE(SER-002)` |
| `projection` | readiness, rebuild e incremental update | 0008, 0025, 0026 | `BLOCKED_BY_SOURCE(SER-002)` |
| `publishing` | Git diff, candidate PR/commit y receipts | 0004, 0012, 0034 | `BLOCKED_BY_SOURCE(SER-002)` |
| `scheduling` | jobs, misfires, condition watches y attention | 0018, 0029 | `BLOCKED_BY_SOURCE(SER-002)` |
| `connector` | external adapters | 0032 | `BLOCKED_BY_SOURCE(SER-002)` |
| `observability` | audit, metrics, traces y evaluation | 0029, 0036 | `BLOCKED_BY_SOURCE(SER-002)` |

Los nombres fueron recuperados como módulos Java candidatos, no como packages confirmados.

## DERIVED — stack reportado

| Tecnología/capacidad | Estado de evidencia | Fuente requerida para confirmar |
|---|---|---|
| Java 21 requerido | decisión/diseño; runtime capturado incompatible | `SER-006` |
| Spring Boot 3.2.1 | baseline reportado | `SER-002/003` |
| SQLite + Hibernate SQLite | baseline reportado | `SER-002/003` |
| Infinispan Embedded 14.0.21.Final | baseline reportado | `SER-002/003/006` |
| JanusGraph 1.0.0 + Berkeley DB JE | implementación reportada, no decisión final | `SER-002/008` |
| JGit, Flyway, Tika, POI, PDFBox | dependencies reportadas | `SER-002/006` |
| WebSocket/MCP tools | código reportado, runtime no probado | `SER-002/004/006/009` |

No se añade Neo4j al mapa físico. Permanece dirección condicionada dentro del Graph ADR diferido.

## PROPOSAL — estructura de mapping a completar

| Campo | Descripción |
|---|---|
| `repository_id` | remote/repo autorizado |
| `branch` | branch inspeccionado |
| `commit` | hash exacto |
| `module_id` | módulo build observado |
| `source_path` | path real |
| `entry_points` | main/configuration/controllers/handlers observados |
| `domain_types` | entities/value objects/contracts |
| `ports` | interfaces expuestas por dominio |
| `adapters` | implementations de infraestructura |
| `schemas` | paths y versiones |
| `migrations` | DB/schema migrations |
| `tests` | test paths, types y last result |
| `owners` | CODEOWNERS/team evidence |
| `spec_refs` | Specs realizadas parcial/completamente |
| `evidence_refs` | source/build/test/runtime receipts |
| `drift` | missing, divergent, undocumented o superseded |

## PROPOSAL — bootstrap assets en repository root

Posibles assets objetivo: `AGENTS.md`, `BOOTSTRAP.md`, `ACCEPTANCE.md`, `CONTEXT_PACK.md`, `REPOSITORY_MAP.md`, `EVOLUTION_STRATEGY.md`, `CURRENT_IMPLEMENTATION_BASELINE.md`, `ROADMAP.md`, `HANDOFF_MANIFEST.md`, `EXPANSION_OBLIGATIONS.md`.

Su ubicación, precedencia, duplicación con documentación existente y formato ejecutable se decidirán sólo después de inspeccionar el repositorio y capacidades de Devin (`SER-002`, `SER-009`).

## DERIVED — estructura lógica Seed V1

| Área | Contenido | Estado físico |
|---|---|---|
| `bootstrap` | AGENTS, BOOTSTRAP, ACCEPTANCE, CONTEXT_PACK, REPOSITORY_MAP | presente en pack local; acceptance remains designed/not executed |
| `architecture` | master context, DNA, decisions, models | presente/documental |
| `capabilities` | target map, dependencies, evolution | presente/documental |
| `specs` / `schemas` | contracts formalizados y candidatos | presente/documental |
| `agents` / `skills` / `tools` | roles y bootstrap candidates | catálogos exactos bloqueados |
| `knowledge` / `standards` / `references` | provenance, research, gaps | parcial; SER/RO abiertas |
| `security` / `testing` / `evidence` | cross-cutting gates y receipts | parcial/no ejecutado |
| `evolution` / `governance` | operating, Loop/Harness, escalation | documental/propuesta |
| `federation` / `assurance` | organizational authority, Domain projections, Tree/Graph/Claim/Evidence | documentary/source-gated |
| `history` / `handoff` / `diagrams` | Waves como provenance, manifests y views | documental |

Esta estructura es un mapa lógico; no autoriza mover archivos ni modificar topology.

## BLOCKED_BY_SOURCE — mapa físico

El mapa físico requiere como mínimo:

- repository URL/identity y access autorizado;
- branch/commit;
- listado de módulos y build files;
- source/resource/config paths;
- application entry point;
- domain entities/repositories/services;
- MCP tools/resources/handlers;
- schemas y migrations;
- security configuration;
- tests y fixtures;
- build/test/runtime receipts;
- ownership/CODEOWNERS;
- generated artifacts y packaging.

Fuente primaria: `SER-002`. Baseline complementaria: `SER-003`. Verificación: `SER-006`.

Acceptance recovery order is therefore `SER-002 → SER-003 → SER-006`; all physical mappings and execution receipts must refer to the same observed commit/context.

El acceso y hash/commit del staging se solicitan por `SER-013`; su ausencia no detiene la generación del ZIP local.

Organization/domain ownership and authority mapping requires `SER-014`; no repository/CODEOWNERS inference can substitute the governed organizational source.

## Procedimiento de completado futuro

1. fijar branch/commit sin modificarlo;
2. inventariar build/module structure;
3. mapear símbolos y configs por Spec;
4. mapear tests y fixtures por acceptance criterion;
5. registrar divergencias entre documentación y código;
6. ejecutar build/tests sólo con autorización y Java 21 efectivo;
7. producir evidence IDs y actualizar Gap Matrix;
8. someter cualquier cambio de arquitectura como propuesta, nunca como corrección silenciosa.

## Criterios de salida

`REPOSITORY_MAP` deja de estar bloqueado cuando:

- todos los paths enlazan al mismo commit;
- cada implementation claim tiene evidence;
- 0009/0010 tienen mapping entity→repository/service/API/event/test;
- Tools/Skills se correlacionan con IDs/versiones reales;
- se identifican drift y código sin Spec;
- no se eleva test escrito a test pasado.

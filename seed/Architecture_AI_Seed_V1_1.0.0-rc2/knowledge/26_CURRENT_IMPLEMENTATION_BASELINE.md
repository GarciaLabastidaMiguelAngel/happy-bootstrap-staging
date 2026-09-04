# 26 — Current Implementation Baseline

## Evidence boundary

Este documento describe exclusivamente lo observable o reportado. El repositorio fuente de Architecture AI y el archivo original `CURRENT_IMPLEMENTATION_BASELINE.md` no están montados. Por tanto:

- hechos del filesystem de este Work = `OBSERVED_DIRECT`;
- contenido atribuido al reporte de Devin confirmado por el usuario = `DEVIN_RESULT_REPORTED`;
- conclusión sin código/log/test = no puede elevarse a `VERIFIED`.

## Snapshot reportado por Prompt 01

| Área | Estado reportado | Evidencia disponible aquí | Estado canónico actual |
|---|---|---|---|
| Producto general | `PARTIALLY_IMPLEMENTED` | Resumen preservado en docs/register y confirmación del usuario | PARTIALLY_IMPLEMENTED_REPORTED |
| Documentación | ~95% | 50+ docs reportadas; parte materializada en Work | DOCUMENTATION_EXTENSIVE_REPORTED |
| Código | ~85% | No repo/path/symbol observable | CODE_EXTENSIVE_REPORTED_NOT_INSPECTED |
| Runtime verification | ~5% | No logs/run receipts | NOT_VERIFIED |
| Toolchain | Proyecto requiere Java 21; ejecución detectó Java 8 | Divergencia preservada | BLOCKED_CAPTURED_BASELINE |
| Tests | 18 archivos / 60+ casos estimados, no ejecutados | Sin test report | TEST_WRITTEN_REPORTED; NOT_TESTED |

Los porcentajes son una evaluación del reporte de Devin, no medición independiente del compiler.

## Stack reportado

| Capability | Versión/tecnología reportada | Evidence class | Verification status |
|---|---|---|---|
| Runtime | Java 21 requerido | DEVIN_RESULT_REPORTED | Bloqueado por Java 8 detectado en captura |
| Framework | Spring Boot 3.2.1 | DEVIN_RESULT_REPORTED | NOT_VERIFIED |
| Relacional local | SQLite + Hibernate SQLite | DEVIN_RESULT_REPORTED | NOT_VERIFIED |
| Migraciones | Flyway | DEVIN_RESULT_REPORTED | NOT_VERIFIED |
| State/projection/cache | Infinispan Embedded 14.0.21.Final | DEVIN_RESULT_REPORTED | NOT_VERIFIED |
| Grafo | JanusGraph 1.0.0 + Berkeley DB JE + TinkerPop/Gremlin | DEVIN_RESULT_REPORTED | NOT_VERIFIED; architecture decision pending |
| Git | JGit | DEVIN_RESULT_REPORTED | NOT_VERIFIED |
| Document parsing | Tika, Apache POI, PDFBox | DEVIN_RESULT_REPORTED | NOT_VERIFIED |
| Transport/update | WebSocket | DEVIN_RESULT_REPORTED | NOT_TESTED |
| MCP | 30 tools documentadas/código reportado | DEVIN_RESULT_REPORTED | Catalog/path/tests NOT_OBSERVED |
| Skills | 16 skills reportadas | DEVIN_RESULT_REPORTED | Names/contracts/status NOT_OBSERVED |

## Capability status reportado

| Capability | Reported state | Canonical interpretation | Needed evidence |
|---|---|---|---|
| Context Resolution | Parcial | PARTIALLY_IMPLEMENTED_REPORTED | paths, contract, tests, runtime query |
| Projection Manager | Implementado | IMPLEMENTED_REPORTED_NOT_VERIFIED | state persistence, incremental refresh, rebuild tests |
| Desktop Extension POC | Parcial; UI estática; sin backend/skills/tools completos | PARTIAL_POC_REPORTED | extension manifest, run, event, handoff evidence |
| MCP tools | Documentadas/código existente | CODE_REPORTED | list, schemas, handlers, auth, test report |
| Document processing | Libraries present | DEPENDENCIES_REPORTED | pipeline path and Golden Document results |
| Git integration | JGit present | DEPENDENCY_REPORTED | clone/fetch/diff/PR/promotion evidence |
| Scheduler/attention | Direction/design known | UNKNOWN_OR_PARTIAL | code and execution receipts |
| Security/policy | Design recovered in Work | IMPLEMENTATION_NOT_OBSERVED | enforcement code and negative tests |
| Graph canonicalization | Concepts/code baseline reported | IMPLEMENTATION_NOT_RECONCILED | schema, status model, Git projector tests |

## Material observed directly en este Work

- Prompt 00 consolidado completo: 2,510 líneas.
- Architecture AI specification package: 9 Markdown files.
- Wave 0 governance: policy, registers/protocols, quality gates y templates.
- Wave 1: product/platform/banking/vector docs, 3 formal specs, prompt y Mermaid sources.
- Wave 2: decision/adoption, local architecture/storage, knowledge/graph/RAG, security/threat/fraud drafts.
- Control workbook, traceability workbook, editable DOCX and ZIP packages.

Esto evidencia documentación, no runtime Architecture AI.

## Estado general

`PARTIALLY_IMPLEMENTED_REPORTED / VERIFICATION_BLOCKED_OR_NOT_PERFORMED`

No es posible elevar ninguna capability a `VERIFIED` hasta materializar el repositorio, usar Java 21, ejecutar build/tests y capturar evidencia reproducible.

## Baseline verification sequence obligatoria

1. Materializar repo y `CURRENT_IMPLEMENTATION_BASELINE.md` original.
2. Capturar OS, JDK vendor/version, Maven/Gradle wrapper, Git commit y dependency lock.
3. Compilar sin cambios funcionales.
4. Ejecutar todos los tests y generar resultados por módulo.
5. Inventariar 30 MCP tools, 16 skills, endpoints, schemas y policies.
6. Verificar stores, migrations, startup/shutdown, crash/recovery.
7. Ejecutar flujo Desktop→taskId→Work Package→Devin→result→review→Git→projection.
8. Reconciliar cada hallazgo contra `22_SPECIFICATION_CATALOG.md` y `24_REQUIREMENTS_TRACEABILITY.md`.


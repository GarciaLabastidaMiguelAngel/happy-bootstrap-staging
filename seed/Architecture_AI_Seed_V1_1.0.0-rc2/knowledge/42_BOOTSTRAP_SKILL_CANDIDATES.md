# 42 — Bootstrap Skill Candidates

## Control

- **classification:** `PROPOSAL`
- **status:** `DRAFT`
- **implementation_status:** `NOT_OBSERVED`
- **devin_status:** `PREPARED_NOT_DELIVERED`

Estas Skills son candidatas para el bootstrap. No se consideran parte del catálogo real de 16 Skills reportadas hasta mapearlas contra el repositorio.

## Candidatas

### SKILL-CAND-001 — project-bootstrap

- **purpose:** inicializar una sesión de Devin desde el handoff y producir un bootstrap receipt.
- **when_to_use:** primera sesión, nuevo checkout, cambio de baseline o paquete.
- **inputs:** handoff manifest, bootstrap instructions, context pack, baseline, decisions, specs, repository map.
- **outputs:** estado de lectura, repo/runtime detection, missing assets, allowed next work y escalations.
- **dependencies:** assets evaluados en documento 40; Specs 0001/0005/0009/0010/0014/0030; repo/runtime evidence sigue bloqueada.
- **related_tools:** filesystem/read, Git inspect, build-tool inspect, MCP `getCurrentBaseline` candidato.
- **evolution_goal:** reducir preguntas de arranque y detectar drift automáticamente.

### SKILL-CAND-002 — spec-first-implementation

- **purpose:** impedir cambios de código sin Spec, criterios y trazabilidad suficientes.
- **when_to_use:** antes de implementar o modificar una capability/componente/contrato.
- **inputs:** Work Item, Spec/version, decisiones, constraints, baseline, acceptance criteria.
- **outputs:** implementation plan, affected artifacts, test plan, evidence requirements y explicit blockers.
- **dependencies:** Specs catalogadas, relationship map, architecture-change policy.
- **related_specs:** 0004–0010, 0012–0015, 0021/0022.
- **related_tools:** repo search, Git diff, architecture tests, MCP context/ADR/risk candidates.
- **evolution_goal:** convertir patrones repetibles en checks determinísticos.

### SKILL-CAND-003 — implementation-gap-analysis

- **purpose:** comparar Spec esperada contra código, configuración, tests y runtime observados.
- **when_to_use:** baseline, release, handoff, después de ejecución o ante drift.
- **inputs:** spec catalog, repo map/commit, build/test results, runtime receipts.
- **outputs:** implementation status deltas, gap matrix, evidence refs y next Work Items.
- **dependencies:** repo accesible, status taxonomy, evidence model.
- **related_specs:** 0009/0010, 0014, 0022, 0029, 0036.
- **related_tools:** code search, build/test runner, artifact collector, status update candidate.
- **evolution_goal:** reemplazar porcentajes generales por mapping verificable.

### SKILL-CAND-004 — architecture-change

- **purpose:** evaluar un cambio contra vectores, dependencias, decisiones y riesgos.
- **when_to_use:** propuesta técnica, cambio de stack, componente, interface, deployment o policy.
- **inputs:** change request, current baseline, affected solution/platform, evidence.
- **outputs:** impact manifest, findings, risks, alternatives, ADR candidate o no-action.
- **dependencies:** context bootstrap y cross-vector analysis.
- **related_specs:** 0001/0002, 0013/0014, 0021/0027/0033.
- **related_tools:** graph/query, dependency search, applicable ADR/risk lookup.
- **evolution_goal:** aumentar análisis determinístico sin eliminar juicio arquitectónico.

### SKILL-CAND-005 — test-and-verification

- **purpose:** ejecutar criterios de aceptación y adjuntar evidencia reproducible.
- **when_to_use:** cierre de Work Item, baseline, cambio de Spec/Skill/Tool o release.
- **inputs:** acceptance criteria, test catalog, environment, commit, commands.
- **outputs:** test receipts, evidence, failure analysis y status delta.
- **dependencies:** Java 21/toolchain, test mapping, policy de datos y secretos.
- **related_specs:** 0022/0023/0029, 0004–0010.
- **related_tools:** build/test runner, logs, coverage, artifact hashing.
- **evolution_goal:** convertir “test escrito” en estado ejecutado y verificable.

### SKILL-CAND-006 — knowledge-migration

- **purpose:** migrar/reconstruir conocimiento y proyecciones sin pérdida de provenance o temporalidad.
- **when_to_use:** cambio de schema/store/engine, rebuild, recovery o baseline canónico.
- **inputs:** canonical baseline, migration plan, source/target adapters, invariants.
- **outputs:** migrated artifacts, reconciliation report, counts/hashes, rollback receipt.
- **dependencies:** promotion, ingestion, knowledge model, projection y storage contracts.
- **related_specs:** 0004/0007/0008/0024/0025/0026.
- **related_tools:** Git, migration runner, graph adapter, integrity checks.
- **evolution_goal:** permitir cambio de motor sin reescribir el modelo institucional.

### SKILL-CAND-007 — dependency-impact-analysis

- **purpose:** navegar relaciones y determinar impacto upstream/downstream con evidencia.
- **when_to_use:** cambio de component/API/data/control/decision o vulnerabilidad.
- **inputs:** entity/change, scope, baseline, relation depth, exclusions.
- **outputs:** affected components/specs/solutions, paths, risks, owners y recommended actions.
- **dependencies:** relationship map/graph, provenance, current baseline.
- **related_specs:** 0002, 0013, 0021, 0024/0025/0027.
- **related_tools:** graph query, repo search, catalog lookup.
- **evolution_goal:** crear consultas y tests determinísticos para impactos frecuentes.

### SKILL-CAND-008 — planning-execution

- **purpose:** convertir estrategia/Sprint en el siguiente conjunto seguro de Work Items y conducir ejecución→verificación→estado.
- **when_to_use:** inicio/replanificación de Sprint, cierre de Work Item, blocker o nuevo delta.
- **inputs:** Sprint, roadmap, current state, dependencies, capacities, Specs, Skills/Tools y gates.
- **outputs:** ordered/parallelizable Work Items, owners, entry/exit, evidence, escalations y next-work update.
- **dependencies:** Spec 0037, task/agent/scheduler/observability contracts.
- **related_specs:** 0009/0010, 0015/0016/0018/0019/0029/0037.
- **related_tools:** task store, dependency graph, scheduler, build/test/evidence tools.
- **evolution_goal:** maximizar autonomía dentro de límites sin crear un orquestador que replique Devin.

## Lifecycle de Skills

`BOOTSTRAP_CANDIDATE → DRAFT → TESTABLE → VALIDATED → ACTIVE → SUPERSEDED | RETIRED`

Toda evolución de Skill registra:

- skill ID y semantic version;
- source Spec/decision;
- inputs/outputs y allowed tools;
- test fixtures y evaluation results;
- cambio de comportamiento y compatibilidad;
- evidence del beneficio;
- aprobación requerida;
- supersedes/supersededBy.

## Gates antes de convertirlas en assets reales

1. mapear catálogo existente de 16 Skills;
2. deduplicar propósito y nombres;
3. definir consumers, permissions y tool policies;
4. crear fixtures/golden tasks;
5. probar en sandbox/repo autorizado;
6. medir calidad, costo, latencia y errores;
7. aprobar la versión bootstrap.

Los skeletons de Oleada 3B pueden referenciar estas IDs únicamente como `PROPOSAL`. No existe evidencia para declarar ninguna candidata instalada, disponible o ejecutada.

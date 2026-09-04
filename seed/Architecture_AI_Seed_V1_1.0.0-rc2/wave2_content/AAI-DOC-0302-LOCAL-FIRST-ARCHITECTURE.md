# AAI-DOC-0302 — Arquitectura local-first de Architecture AI

## Objetivo

Definir el primer sistema operable en una workstation Windows corporativa sin depender de OpenShift, Redis central, Kafka, Confluence, Outlook o Teams. La arquitectura debe demostrar el flujo institucional completo y conservar contratos que puedan migrar a una operación compartida.

## Estilo arquitectónico

Se propone un modular monolith Spring Boot con ports/adapters. Un único proceso simplifica instalación, observabilidad, seguridad y soporte local; los límites funcionales evitan que el monolito se convierta en acoplamiento accidental.

Spring Modulith se evaluará para verificar módulos, eventos, pruebas y documentación. Si el spike exige una reestructuración costosa o introduce incompatibilidad, se mantienen módulos Spring convencionales con las mismas reglas de dependencia.

## Responsabilidades por componente

### Desktop Adapter

- Muestra Projection Readiness, My Work, Questions, Risks y decisiones.
- Envía comandos y `taskId` al core.
- Abre artefactos y diffs.
- No persiste conocimiento canónico ni ejecuta reglas de dominio.
- No asume que una conexión o ventana equivale a una sesión Devin.

### MCP/API Adapter

- Expone tools, resources y endpoints administrativos.
- Negocia versión de protocolo y valida JSON Schema.
- Propaga `taskId`, `actorId`, `requestId`, `correlationId` y contexto de seguridad.
- No contiene autorización de negocio; invoca Policy Enforcement.

### Task & Work Package

- Registra demanda, owner, prioridad, estado, dependencias y resultados.
- Construye Architecture Work Packages inmutables por versión.
- Correlaciona trabajo humano, llamadas MCP, sesiones Devin, commits y evidencias.

### Context Resolver

- Traduce intención a un Retrieval Plan.
- Filtra país, autoridad, clasificación, vigencia y need-to-know antes de recuperar contenido.
- Combina catálogo, búsqueda léxica, grafo y, cuando esté disponible, similitud vectorial.
- Devuelve contexto mínimo suficiente, contradicciones, gaps y razones de inclusión.

### Knowledge & Evidence

- Mantiene Source, Evidence, Claim, KnowledgeCandidate y CanonicalKnowledge.
- Conserva provenance, temporalidad, alcance y autoridad.
- Impide promoción silenciosa.

### Ingestion & Reconciliation

- Detecta formato, calcula hash, parsea, segmenta y clasifica secciones.
- Trata contenido natural como no confiable.
- Envía artefactos sospechosos a quarantine.
- Compara candidatos con conocimiento existente y clasifica MATCH, UPDATE, CONFLICT, DUPLICATE, SUPERSEDES o UNRELATED.

### Decision, Risk & Review

- Gestiona ADR, riesgos, mitigaciones, controles, findings y acceptance.
- Ejecuta checks determinísticos primero.
- Delega a Devin sólo lo que requiere razonamiento.

### Policy Enforcement

- Evalúa actor, agente, tarea, tool, scopes, clasificación, destino, costo y side effects.
- Exige aprobación para acciones materiales.
- Emite ALLOW, DENY, REQUIRE_APPROVAL o REQUIRE_MORE_CONTEXT.

### Projection Manager

- Proyecta conocimiento y estado operativo en stores locales.
- Mantiene readiness, freshness, checkpoint y baseline Git.
- Reconstituye proyecciones desde fuentes canónicas.

### Git Publisher

- Genera cambios en working tree, diff, commit/PR candidate y referencias.
- No fusiona ni publica materialmente sin autoridad.
- Vincula cada cambio con task, decisión y evidencia.

### Scheduler & Attention

- Ejecuta jobs determinísticos y condition watches.
- Aplica misfire policy.
- Convierte eventos en badge, tarea o notificación según severidad.
- No invoca Devin para awareness ordinario.

### Connectors

- Confluence, GitHub, Outlook, Teams y fuentes de archivos son adapters opcionales.
- Cada adapter declara permisos, scopes, datos, rate limits, errores y disponibilidad.
- Una integración no verificada permanece deshabilitada y no bloquea el core.

### Observability & Evaluation

- Correlaciona logs, métricas y traces por `taskId` y `toolCallId`.
- Mide latencia, retrieval, groundedness, conflicts, costo/tokens y policy decisions.
- Nunca registra prompts completos, secretos o datos bancarios sensibles por defecto.

## Módulos Java candidatos

```text
com.bankpeq.architectureai
├── access          // MCP, HTTP, desktop contracts
├── task            // demand, task, delegation, work package
├── context         // retrieval plan and context assembly
├── knowledge       // sources, evidence, claims, candidates
├── ingestion       // parsers, quarantine, section disposition
├── reconciliation  // matching, conflict, supersession
├── decision        // ADR, human decisions, baselines
├── risk            // findings, risks, controls, residual risk
├── policy          // authorization and tool intent gate
├── projection      // readiness, rebuild, incremental updates
├── publishing      // Git canonical promotion
├── scheduling      // jobs, misfires, condition watches
├── connector       // external adapters
└── observability   // audit, metrics, evaluation
```

Regla: los módulos de dominio no dependen de adapters. `access`, `connector` y `publishing` dependen de ports publicados por el core. Ningún módulo importa internals de otro módulo.

## Flujo end-to-end mínimo

1. El usuario crea o selecciona una Architecture Task.
2. Task module asigna `taskId`, scope, país, owner e intención.
3. Policy valida que el usuario y el harness puedan solicitar contexto.
4. Context Resolver genera Retrieval Plan y consulta proyecciones autorizadas.
5. Work Package materializa hechos, decisiones, restricciones, evidencias, gaps y forbidden actions.
6. Devin consume el paquete mediante `taskId`, razona y produce artefactos estructurados.
7. Architecture AI valida schemas y reglas determinísticas.
8. Un humano revisa decisiones y cambios materiales.
9. Git Publisher prepara diff/commit/PR y registra provenance.
10. Projection Manager aplica el nuevo baseline aprobado.
11. Evaluation registra cobertura, latencia, groundedness, errores y costo.

## Topología local

- Un proceso Spring Boot Java 21 por workstation.
- Desktop Adapter en la misma estación.
- MCP por STDIO o loopback HTTP/Streamable HTTP, sujeto al spike de Desktop.
- SQLite local para metadatos durables.
- Infinispan Embedded para estado/proyecciones.
- Motor de grafo seleccionado por ADR; el baseline actual no se migra automáticamente.
- Repositorio Git local con remoto corporativo cuando esté disponible.
- Raw artifacts y quarantine en directorios controlados con hash y permisos.
- Sin acceso directo a sistemas bancarios productivos.

## Requisitos de calidad iniciales

### Auditabilidad

Toda respuesta institucional material debe indicar fuente, versión, vigencia, authority, confidence y reason for inclusion. Cada tool call registra decisión de policy y resultado sanitizado.

### Recuperabilidad

Después de pérdida de cache o proyección, el sistema debe reconstruirse desde Git, metadatos y fuentes controladas sin promover candidatos ni duplicar relaciones.

### Seguridad

Local no significa confiable. Cada llamada se autoriza por sujeto, agente, tarea, tool y recurso. El sistema falla cerrado ante ambigüedad de tool, scope, país o clasificación.

### Evolutividad

Los contratos de dominio no incluyen tipos de SQLite, Infinispan, Neo4j, Redis u Oracle. Los adapters pueden cambiar sin modificar Work Package, Claim, Evidence, Risk o Decision.

### Eficiencia

El Context Resolver no carga el corpus completo. Recupera progressive disclosure y registra presupuesto de contexto. Los jobs determinísticos no invocan LLM.

## Gates de primera versión operable

- Java 21 efectivo, build reproducible y tests ejecutados.
- Tool catalog versionado y validado.
- Un flujo Desktop/CLI → taskId → Work Package → Devin → artifact → review → Git → projection.
- Reinicio durante ingesta o proyección sin pérdida ni duplicidad.
- Input malicioso de documento no controla tools ni se promueve.
- Tool de escritura requiere policy y aprobación.
- Respuesta con evidencia contradictoria devuelve conflicto.
- Estado DEGRADED visible cuando una fuente o proyección no está lista.

## Evolución hacia OpenShift

La centralización se activa por colaboración multiusuario, volumen, disponibilidad, gobierno o necesidad de integraciones compartidas. El corte futuro separará adapters y stores, manteniendo identifiers, schemas, eventos y políticas. Redis Streams se evalúa antes que Kafka para coordinación interna; Kafka queda para integración empresarial justificada.

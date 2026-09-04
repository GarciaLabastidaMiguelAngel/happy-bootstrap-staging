# AAI-DOC-0201 — Baseline de decisiones de arquitectura

## Propósito

Separar decisiones confirmadas, dirección actual, implementación observada, propuestas y asuntos abiertos. Este baseline evita que Devin convierta automáticamente código existente en arquitectura objetivo o que una investigación se trate como estándar corporativo.

## Taxonomía de decisión

- `FROZEN_DECISION`: decisión explícita que debe preservarse salvo un nuevo ADR.
- `CURRENT_DIRECTION`: intención confirmada, todavía sujeta a un gate técnico, operativo, legal o corporativo.
- `OBSERVED_IMPLEMENTATION`: estado encontrado en código o runtime; no implica aprobación.
- `PROPOSED_DECISION`: recomendación de esta oleada que necesita revisión.
- `OPEN_DECISION`: alternativas materiales todavía sin resolución.
- `DEFERRED`: decisión conscientemente pospuesta hasta que exista un trigger.
- `REJECTED_ALTERNATIVE`: opción evaluada que no debe reaparecer sin nueva evidencia.

## Decisiones preservadas

### FD-001 — Frontera Devin / Architecture AI

`FROZEN_DECISION`. Devin aporta inteligencia general, planeación, coding, investigación y ejecución agentic. Architecture AI aporta inteligencia institucional, contexto, evidencia, gobierno, persistencia, policy enforcement, proyecciones y capacidades determinísticas. Architecture AI no reconstruye un runtime general de agentes.

### FD-002 — Local-first antes de centralizar

`FROZEN_DECISION`. La primera versión operable corre en la workstation corporativa. OpenShift es evolución, no prerrequisito. Los contratos y las identidades deben permitir migración sin diseñar prematuramente una plataforma distribuida.

### FD-003 — Git como verdad canónica

`FROZEN_DECISION`. Conocimiento aprobado, ADR, estándares, patrones, manifests, schemas, tests y fuentes de diagramas se versionan en Git. Bases, índices y caches son proyecciones recuperables.

### FD-004 — Contexto por `taskId` y Architecture Work Package

`FROZEN_DECISION`. Toda tarea compleja se resuelve mediante un identificador durable y un Work Package explícito. El transporte o la conexión no representan la sesión ni el contexto.

### FD-005 — Ingesta e inferencia no equivalen a promoción

`FROZEN_DECISION`. Un hallazgo descubierto, extraído o inferido no se vuelve conocimiento institucional hasta reconciliarse, validarse y aprobarse por la autoridad correspondiente.

### FD-006 — Deterministic Before Agentic / Least Agency

`FROZEN_DECISION`. Las reglas estables, validaciones repetibles, proyecciones, jobs y transformaciones no deben consumir razonamiento agentic. Devin se utiliza cuando existe ambigüedad, síntesis o juicio arquitectónico real.

### FD-007 — Núcleo Java 21 + Spring Boot

`FROZEN_DECISION`. El núcleo local se implementa en Java 21 y Spring Boot. El runtime detectado con Java 8 es un blocker de implementación, no una alternativa.

### FD-008 — Desktop thin client

`FROZEN_DECISION`. La integración de escritorio muestra estado, tareas y acciones, pero no contiene lógica de dominio, de conocimiento, de policy o de evaluación.

### FD-009 — Seed V1, no plataforma completa

`FROZEN_DECISION / AAI-DEC-0020`. El handoff se construye como `Architecture_AI_Seed_V1`: identidad, North Star, Architectural DNA, modelo inicial de conocimiento, mapa/dependencias de capabilities, estado, reglas de evolución, operating model y Expansion Contract. La Seed contiene raíces y reglas de crecimiento; Devin expande la ingeniería después del cutover. No se comprime destructivamente ingeniería ni se exige que Work implemente todas las ramas.

### FD-010 — Prompt/Wave cutover

`FROZEN_DECISION / AAI-DEC-0021`. Prompts y Waves son provenance/control durante la compilación de la Seed. Después del cutover quedan como historia no orquestadora. El trabajo operativo se gobierna por ArchitectureTask, Planning/Sprint, capability/dependency map, Specs, Skills/Tools, state y evidence; no por una secuencia indefinida de prompts numerados.

### FD-011 — Bootstrap staging y transporte

`FROZEN_DECISION / AAI-DEC-0022`. `GarciaLabastidaMiguelAngel/happy-bootstrap-staging` es un repositorio personal público de staging y transporte temporal. No es el implementation repository, no cierra `SER-002`, no es autoridad post-handoff y no debe cambiar de visibilidad en esta oleada. Seed V1 debe funcionar por clone o ZIP/unpack sin remote obligatorio. La publicación sigue requiriendo validación y autorización; público no significa aprobado para publicar datos sensibles.

### FD-012 — Seed V1 quality gates

`FROZEN_DECISION / AAI-DEC-0023`. `G1..G11` son blocking gates de handoff; `G12 Future Unknowns` permite unknowns explícitos que no impidan bootstrap seguro. Documentación por volumen o porcentaje no satisface readiness. La aceptación exige bootstrap/reconciliation/next-work/expansion/escalation/state fidelity/restart/package integrity demostrables.

### FD-013 — Seed root, authority and physical version

`FROZEN_DECISION / AAI-DEC-0024`. Seed V1 exposes a compact root with manifest, bootstrap, context, capability, operating, baseline, readiness and repository views. Deep detail is linked rather than duplicated. Construction versions remain `0.x`; `0.9.0-assembly.1` is an assembly candidate, not an accepted `1.0` Seed.

### FD-014 — Semantic deduplication and thin custom layer

`FROZEN_DECISION / AAI-DEC-0025`. Existing IDs and evidence are preserved while aliases/overlap/parent-child/evolution are reconciled. Standards/frameworks are evaluated before custom semantics. When fit is substantial, Architecture AI adds only the institutional identity, authority, provenance, country, evidence and lifecycle overlay required by a demonstrated gap.

### FD-015 — Non-self-referential package integrity

`FROZEN_DECISION / AAI-DEC-0026`. `CONTENT_HASH` is computed from a deterministic content manifest that excludes the self-referential manifest/inventory/hash files. `PACKAGE_HASH` is computed from final ZIP bytes and lives in an external sidecar/delivery manifest. Git failure does not invalidate local ZIP integrity.

### FD-016 — Federated authority boundary

`FROZEN_DECISION / AAI-DEC-0027`. Architecture AI may discover, observe, model, correlate and evaluate organizational/domain capabilities, but visibility, discovery and platform knowledge do not transfer ownership or authority. Existing domains retain their institutional mandates. Integration, federation, automation or operating-model change requires evidence, applicable policy and the real owner/authority; unknown authority remains an explicit source gap.

## Dirección actual condicionada

### CD-001 — Infinispan Embedded

`CURRENT_DIRECTION`. Conserva estado operativo local, cache y proyecciones. Debe probar persistencia, reinicio, reconstrucción, límites de memoria, concurrencia y compatibilidad con el ciclo de vida de Spring Boot.

### CD-002 — Neo4j Community para el grafo

`CURRENT_DIRECTION`. La conversación histórica orienta a Neo4j Community y a una experiencia local. El baseline de código reporta JanusGraph + Berkeley DB JE. Por tanto, la elección funcional está orientada, pero la sustitución requiere ADR, revisión de licencia GPLv3, spike de embedding/servidor, respaldo, actualización y operación.

### CD-003 — SQLite para metadatos locales

`CURRENT_DIRECTION`. Adecuado para task metadata, catálogos y estado durable de una estación. No reemplaza Git ni el grafo. La migración futura puede mapearse a PostgreSQL u Oracle sin exponer esos motores en los contratos de dominio.

### CD-004 — Integraciones corporativas como adapters

`CURRENT_DIRECTION`. Confluence, Outlook, Teams y GitHub se encapsulan detrás de ports. Sus APIs, permisos, licencias y capacidades reales deben validarse. Ninguna es dependencia crítica para arrancar el core local.

### CD-005 — México como primer contexto bancario

`CURRENT_DIRECTION`. El modelo común es global, pero las evidencias, decisiones, regulación, infraestructura y proveedores permanecen country-scoped.

## Implementación observada que no congela decisiones

- Spring Boot 3.2.1 y Java 21 requeridos por proyecto; entorno reportado con Java 8.
- SQLite/Hibernate SQLite, Infinispan Embedded 14.0.21.Final y JanusGraph 1.0.0 + Berkeley DB JE presentes en el baseline informado.
- Aproximadamente 30 tools MCP y 16 skills documentadas/codificadas, sin verificación completa end-to-end.
- Projection Manager implementado, pero no verificado en runtime.
- Desktop POC con UI estática, sin integración completa con backend, skills o tools.
- Más de 18 archivos de prueba y 60 casos estimados, no ejecutados en el baseline recibido.

Todas estas cifras son `REPORTED_BASELINE`; Devin debe reproducirlas antes de usarlas como estado actual.

## Propuestas de esta oleada

### PD-001 — Modular monolith por capacidades

`PROPOSED_DECISION`. Mantener un único despliegue Spring Boot local, con límites de módulo verificables, eventos internos y ports/adapters. Spring Modulith se evalúa como toolkit, no como requisito automático.

### PD-002 — Policy Enforcement Point antes de toda tool

`PROPOSED_DECISION`. Cada invocación se evalúa contra actor, tarea, intención, clasificación de datos, scopes, destino, riesgo y necesidad de aprobación. La salida del LLM nunca autoriza por sí misma una acción.

### PD-003 — Recuperación híbrida independiente del vector store

`PROPOSED_DECISION`. Candidate generation combina filtros determinísticos, búsqueda léxica, expansión acotada del grafo y búsqueda vectorial cuando exista un índice aprobado. El contrato no se acopla a un proveedor vectorial.

### PD-004 — Eventing evolutivo

`PROPOSED_DECISION`. En local se utilizan eventos de dominio dentro del proceso y persistencia explícita donde sea necesaria. Para colaboración central, Redis Streams se evalúa antes que Kafka; Kafka se reserva para integración empresarial o escala que lo justifique.

### PD-005 — A2A diferido

`DEFERRED`. A2A v1.0 es relevante si Architecture AI necesita interoperar con agentes independientes de distintos proveedores. No se incorpora mientras Devin siga siendo el coordinador y MCP cubra tools/resources.

### PD-006 — Non-intrusive domain introspection and federation

`PROPOSED_DECISION`. Domain evolution should begin with permission-aware observation/modeling, reconcile central and local knowledge bidirectionally, preserve justified local variants and progress through shadow/assist/verified automation. The label and final taxonomy for a “Federated Engineering Capability Model” remain unapproved and source-gated.

### PD-007 — Human value shift

`PROPOSED_DECISION`. Automation should move repetitive effort toward policy evolution, strategic exceptions, architectural judgment, knowledge production and capability improvement—not assume elimination of people, teams or institutional authority. Any concrete organizational change remains outside Architecture AI authority.

## Asuntos que no deben resolverse silenciosamente

1. Forma final de Neo4j: embedded en el mismo JVM, proceso local independiente o servicio futuro.
2. Compatibilidad legal de Neo4j Community GPLv3 con distribución y operación corporativa.
3. Estrategia vectorial local y central.
4. Uso de Spring Modulith frente a módulos Spring convencionales.
5. Mecanismo real de extensión y handoff en Devin Desktop.
6. Modelo de autenticación local y remoto de MCP.
7. Retención, backup, RTO/RPO y clasificación de fuentes.
8. Herramienta SBOM aprobada por el banco.

## Regla para Devin

Antes de modificar una decisión, Devin debe generar un Decision Record con: evidencia actual, decisión afectada, alternativas, criterios, impacto, reversibilidad, seguridad, licencia, migración, pruebas y autoridad requerida.

# 00 — Master Context

## Identidad y propósito

**Happy** es el workspace de conocimiento donde se ha desarrollado Architecture AI y el contexto bancario sobre el cual debe razonar. El producto en construcción es una plataforma de inteligencia arquitectónica institucional, inicialmente local-first, que complementa a Devin.

La frontera principal está congelada:

- **Devin:** inteligencia general, razonamiento, investigación, planeación, coding y coordinación agentic.
- **Architecture AI:** inteligencia institucional, contexto, evidencia, decisiones, políticas, riesgos, tareas, proyecciones, tools y capacidades determinísticas.
- **Git:** verdad canónica de conocimiento compartible y aprobado.
- **Humano:** autoridad, juicio, decisión y aceptación de riesgo.

Architecture AI no es una colección de chats ni un chatbot documental. Es un sistema de conocimiento gobernado y una capa de capacidades institucionales consumible por Desktop, Devin, jobs determinísticos y, cuando se justifique, otros clientes.

## Rol de este Work

Este Work opera como **Master Knowledge Compiler**. Sus responsabilidades son:

- extraer conocimiento observable sin inventarlo;
- preservar specs y diseños con su profundidad original;
- normalizar términos e identidades;
- correlacionar requisito, decisión, spec, componente, implementación, test y evidencia;
- separar diseño, implementación reportada y verificación real;
- detectar duplicados, evolución, contradicción y gaps;
- producir snapshot canónico + delta incremental;
- preparar un Context Pack consumible por Devin;
- mantener el ledger de qué fue preparado, enviado, ejecutado y reconciliado.

ChatGPT/Work compila, estructura y reconcilia. No sustituye la autoridad del usuario ni declara que Devin ejecutó algo sin confirmación explícita.

## Objetivo final de handoff

El repositorio debe convertirse en un bootstrap operativo que permita a Devin pasar de estado actual a trabajo ejecutable, usar las Skills/Tools autorizadas, verificar resultados, registrar evidencia y actualizar estado sin redescubrir lo ya resuelto. El criterio final es `HAPPY_HANDOFF_READY`; el snapshot actual permanece `FALSE`, `DRAFT / PREPARED_NOT_DELIVERED`.

Devin continúa autónomamente cuando specs, dependencias, estrategia de evolución, criterios de entrada/salida y policy determinan el siguiente trabajo. Escala únicamente condiciones tipadas: `HUMAN_DECISION_REQUIRED`, `ARCHITECTURE_CONFLICT`, `SECURITY_POLICY_CONFLICT`, `MISSING_EXTERNAL_ACCESS` o `UNRESOLVED_REQUIREMENT`.

El modelo completo y sus gates se encuentran en `39_HANDOFF_ALIGNMENT.md`, `40_BOOTSTRAP_ASSET_ASSESSMENT.md`, `41_EVOLUTION_STRATEGY_DRAFT.md` y `44_NO_LOSS_REVIEW.md`.

### Seed V1 / Architectural DNA

Oleada 3C reorienta el handoff como `Architecture_AI_Seed_V1`: una representación compacta pero no destructiva de identidad, North Star, decisiones, invariantes, target capabilities, dependencias, estado/madurez, reglas de evolución, future intent, research obligations, operating model y Expansion Contract.

`BOOTSTRAP ≠ FULL PLATFORM`. La Seed no implementa todas las ramas; contiene raíces, DNA, mapa de ramas y reglas de crecimiento para que Devin expanda la ingeniería después del cutover. El detalle está en documentos `52..63`.

La Seed debe funcionar por `git clone` o ZIP/unpack desde repository root. El staging personal `GarciaLabastidaMiguelAngel/happy-bootstrap-staging` fue establecido por el usuario como transporte temporal, no como implementation repository ni autoridad post-handoff. No cierra `SER-002`; el acceso Git desde este Work no está observado.

## Taxonomía de entidades

Se mantienen separadas: `CAPABILITY`, `COMPONENT`, `AGENT`, `SKILL`, `TOOL`, `SERVICE`, `WORKFLOW`, `SPRINT`, `WORK_ITEM`, `SPEC`, `DECISION`, `ADR`, `EVENT`, `DATA_MODEL`, `RISK`, `CONTROL` y `REFERENCE`.

- **Sprint** pertenece a Planning/Work Management. Agrupa Work Items, objetivos, dependencias, criterios y evidencia; no es Spring, Spring Boot ni un Agent.
- **Spring Boot** pertenece al stack tecnológico Java 21.
- **Blueprint** es actualmente `PROPOSAL`: puede modelar evolución, pero no gobierna implementación ni representa una decisión previa.
- **Skill**, **Tool**, **Agent** y **LLM model** son entidades relacionadas, no sinónimos.

## Arquitectura general vigente

### Fase inicial

- Workstation Windows corporativa.
- Devin Desktop como harness y superficie humana preferida, sujeta a un spike real de compatibilidad.
- Desktop Integration como thin client, sin lógica de dominio.
- Core local Spring Boot sobre Java 21.
- MCP/API como frontera de capacidades institucionales.
- SQLite para metadatos operativos durables.
- Infinispan Embedded para estado, caches y proyecciones reconstruibles.
- Motor de grafo detrás de un port: baseline reportado JanusGraph/Berkeley DB JE; dirección posterior Neo4j Community; decisión todavía condicionada.
- Git/GitHub como verdad canónica y mecanismo de colaboración gobernada.
- Document processing local con stack Java; Docling es candidato sólo para documentos complejos y tras evaluación.
- Scheduler local determinístico.

No son dependencias obligatorias iniciales: OpenShift, PostgreSQL, Redis, Kafka, Confluence, Outlook, Teams, un custom agent runtime o un custom orchestration engine. Que Postgres/Redis estén instalados localmente no los convierte en decisión de arquitectura.

### Evolución

La evolución centralizada se evaluará por colaboración, volumen, disponibilidad, gobierno e integraciones compartidas. OpenShift es dirección futura, no baseline operativo actual. Los contratos de dominio, IDs, schemas, eventos y policy deben permitir migrar stores/adapters sin reescribir el modelo institucional.

## Capacidades principales

1. Captura de demanda y Architecture Task.
2. Context Resolution y Architecture Work Package por `taskId`.
3. Knowledge/Evidence/Claim/Candidate/Canonical lifecycle.
4. Ingesta, parsing, clasificación, reconciliación y quarantine.
5. Grafo discovered/canonical con provenance y temporalidad.
6. ADR, riesgos, findings, preguntas, decisiones y human review.
7. Tool policy, authorization y approvals específicas.
8. Git promotion y proyecciones reconstruibles.
9. Technical Design Review y architecture tests.
10. Scheduler, Attention Manager y health/readiness.
11. Agent routing, expertise y structured outputs.
12. Documentación Arc42/C4/Mermaid y publicación controlada.
13. Observabilidad, evaluación, tokens/costo y aprendizaje agentic→determinístico.

## Contexto bancario

Architecture AI debe razonar sobre la plataforma bancaria como un sistema de capacidades, no como una colección de proyectos. México es el primer Country Context. El conocimiento observado incluye:

- OpenShift, gateways, IBM API Connect, Gravity Plus/GLUON, Kafka, IBM MQ, TCP, Oracle/Exadata, Redis y mainframe en contextos específicos.
- componentes transversales de identidad y protección: Token Opaco, Anonymizer/Deanonymizer PAN↔Card ID, Card Security/Card JWKS, Cipher Service, PKM, JWE y JWSID.
- soluciones-ejemplo: DTO Middleware/Customer Position, StarPass Core/Local, Change PIN, Gravity Plus pagination, ISO 8583 routing, SOS OIDC backoffice y Control-M agents on OpenShift.
- vectores inseparables: seguridad, fraude, PCI, datos, integración, resiliencia, operación, capacidad, costos, gobierno, evidencia y aceptación de riesgo.

Los ejemplos no son estándares. En particular, SOS es exclusivo de StarPass; no es capability reutilizable para otros backoffice. La corrección más reciente indica que APIs GLUON y Gravity Plus refieren a la misma familia/nombre en ese contexto; el catálogo institucional exacto debe aportar el ID y scope canónico.

## Decisiones principales

| ID | Clasificación | Estado actual |
|---|---|---|
| AAI-DEC-0001 | FROZEN_DECISION | Devin = general; Architecture AI = institutional |
| AAI-DEC-0002 | FROZEN_DECISION | Primera versión local-first |
| AAI-DEC-0003 | FROZEN_DECISION | Git es canonical truth |
| AAI-DEC-0004 | FROZEN_DECISION | Trabajo complejo por taskId + Architecture Work Package |
| AAI-DEC-0005 | CURRENT_DIRECTION + REQUIRES_VALIDATION | Neo4j Community es dirección posterior; JanusGraph sigue en baseline reportado |
| AAI-DEC-0006 | CURRENT_DIRECTION | Infinispan Embedded para proyección/estado/cache |
| AAI-DEC-0007 | FROZEN_DECISION | Spring Boot / Java 21 |
| AAI-DEC-0008 | FROZEN_DECISION | Native First: REUSE→CONFIGURE→EXTEND→BUILD→DEFER |
| AAI-DEC-0009 | FROZEN_DECISION | No silent knowledge promotion |
| AAI-DEC-0010 | FROZEN_DECISION | Jobs determinísticos no invocan Devin sin razonamiento requerido |
| AAI-DEC-0011 | FROZEN_DECISION | Master Knowledge Compiler usa snapshot + delta y preserva profundidad/provenance |
| AAI-DEC-0012 | FROZEN_DECISION | Oleadas son checkpoints internos; handoff consolidado sólo tras confirmación |
| AAI-DEC-0013 | FROZEN_DECISION | `HAPPY_HANDOFF_READY` exige bootstrap operativo y No-Loss Review |
| AAI-DEC-0014 | FROZEN_DECISION | Sprint = Planning/Work Management; distinto de Spring Boot y de Agent |
| AAI-DEC-0015 | FROZEN_DECISION | Autonomía de Devin está gobernada por specs/gates y escalamiento tipado |
| AAI-DEC-0016 | PROPOSAL | Blueprint es modelo opcional de evolución, pendiente de validación |
| AAI-DEC-0017 | FROZEN_DECISION | No numerar nuevos prompts hasta reconciliar el historial real |
| AAI-DEC-0018 | FROZEN_DECISION | ADR de Graph requiere corpus, alternativas, código y drift reconciliados |
| AAI-DEC-0019 | FROZEN_DECISION | Autoevolución = observación→impacto→propuesta→verificación→nueva versión |
| AAI-DEC-0020 | FROZEN_DECISION | Handoff = Seed V1 con raíces/DNA/mapa/reglas de expansión; no plataforma completa |
| AAI-DEC-0021 | FROZEN_DECISION | Prompts/Waves dejan de orquestar después del cutover |
| AAI-DEC-0022 | FROZEN_DECISION | Staging personal público es transporte temporal clone/ZIP, no implementation repo ni autoridad post-handoff |
| AAI-DEC-0023 | FROZEN_DECISION | G1..G11 bloquean readiness; G12 permite unknowns explícitos no bloqueantes |
| AAI-DEC-0024 | FROZEN_DECISION | Seed root compacta, precedencia de autoridad y versión física 0.x |
| AAI-DEC-0025 | FROZEN_DECISION | Deduplicación semántica + standard before custom + thin institutional layer |
| AAI-DEC-0026 | FROZEN_DECISION | Content hash no autocontenido y package hash en sidecar externo |
| AAI-DEC-0027 | FROZEN_DECISION | Visibilidad/descubrimiento/conocimiento no transfieren ownership ni autoridad institucional |
| AAI-DEC-0028 | FROZEN_DECISION | Handoff readiness se evalúa separadamente de build/runtime readiness; ejecución real puede diferirse con contrato verificable |

## Estado real conocido

Prompt 00 fue confirmado como ejecutado. Prompt 01/AILR-1 produjo un `CURRENT_IMPLEMENTATION_BASELINE.md`, confirmado por el usuario, pero el archivo original no está materializado en este workspace. El resultado reportó `PARTIALLY_IMPLEMENTED`, con código y documentación extensos pero runtime casi no verificado; la compilación quedó bloqueada al detectar Java 8 cuando el proyecto exige Java 21. Los porcentajes y conteos se conservan como **DEVIN_RESULT reportado**, no como verificación independiente.

Toda la documentación generada en las Oleadas 0–2 permanece `DRAFT / PREPARED_NOT_DELIVERED`. No se marcará `DELIVERED_TO_DEVIN` hasta que el usuario confirme qué archivos transfirió.

La Oleada 3A formalizó `AAI-SPEC-0004..0008`. La Oleada 3B formalizó `AAI-SPEC-0009` y `0010`, contratos lifecycle/event envelope provisionales y cuatro skeletons bootstrap clasificados por procedencia. Oleada 3C amplió `AAI-SPEC-0009` a `v0.2.0-draft` con Work & Session Metamodel y consolidó la Seed V1, Architectural DNA, layers/vectors, target capabilities, dependency graph, operating/expansion model, technology/cost criteria, cutover y quality gates. Oleada 3D ensambló físicamente `Architecture_AI_Seed_V1_0.9.0-assembly.1`, deduplicó semánticamente, preparó fixtures y normalizó standards/research/SERs. Oleada 3E extiende esa Seed con autoridad federada, introspección no intrusiva, madurez determinística, Domain Context/UX, human value shift y la síntesis Tree/Graph/Assurance/Loop, sin crear nuevas Specs ni elegir estándares/motor de grafo. Siguen siendo diez Specs formales; ninguna oleada cambia implementation status. `0036 Event Model` sólo queda correlacionada mediante un envelope vendor-neutral DRAFT; `0037 Planning/Sprint` continúa `DISCOVERED`. Se difieren el ADR definitivo de Graph, el catálogo exacto de tools/skills, la formalización completa de Sprint, contratos MCP definitivos, roles de storage, evolución OpenShift, políticas bancarias, operating model organizacional y cualquier nuevo prompt a Devin hasta obtener las fuentes enumeradas en `43_SOURCE_EXTRACTION_REQUESTS.md`.

## Riesgos críticos

- Knowledge/context poisoning e indirect prompt injection.
- Tool misuse, confused deputy, token passthrough y privilege abuse.
- Mezcla de discovered con canonical knowledge.
- Contexto fuera de país, vigencia, clasificación o authority.
- Sobreconfianza humana en resultados convincentes sin evidencia.
- Supply chain de dependencias, skills, MCP servers y modelos.
- Divergencia diseño/código/runtime; tests escritos no ejecutados.
- Elección/licencia/operación del motor de grafo.
- Ausencia de corpus bruto completo y de evidencia institucional oficial.
- Integraciones o APIs asumidas sin permiso/capability discovery.

## Navegación al detalle

- Definición de producto: `../wave1_content/AAI-DOC-0101-PRODUCT-DEFINITION.md`
- Plataforma y contexto bancario: `../wave1_content/AAI-DOC-0102-PLATFORM-MODEL.md` y `AAI-DOC-0701-BANKING-CONTEXT-MX.md`
- Decisiones y adopción: `../wave2_content/AAI-DOC-0201-DECISION-BASELINE.md` y `AAI-DOC-0202-STANDARDS-ADOPTION-MAP.md`
- Arquitectura local/storage: `../wave2_content/AAI-DOC-0302-LOCAL-FIRST-ARCHITECTURE.md` y `AAI-DOC-0307-STORAGE-DATA-STRATEGY.md`
- Knowledge/graph/RAG: `../wave2_content/AAI-DOC-0501-*`, `AAI-DOC-0502-*`, `AAI-DOC-0503-*`
- Seguridad/fraude: `../wave2_content/AAI-DOC-0601-*`, `AAI-DOC-0602-*`, `AAI-DOC-0604-*`
- Spec catalog y correlación: `22_SPECIFICATION_CATALOG.md` y `23_SPEC_RELATIONSHIP_MAP.md`
- Baseline/gaps/tests: documentos 26–28 de este snapshot.
- Prompt/Devin: documentos 29–30 de este snapshot.
- Alineación y bootstrap: documentos 39–45 y skeletons en `bootstrap/`.
- Cierre Oleada 3B: documentos 49–51.
- Seed V1 y Oleada 3C: documentos 52–66; `55` contiene DNA/North Star, `54/56/57` capabilities/dependencies, `58` operating/expansion, `60` staging/cutover, `61` quality gates y `64–66` manifest/validation/status.
- Assembly y Oleada 3D: documentos 67–78; dedup/standards en `67/68`, root views y fixtures en `69–71`, normalization/boundary en `72/73`, gates/manifest/validation/status en `75–78`.
- Oleada 3E: documentos 79–85; federated organizational evolution en `79`, knowledge geometry/assurance en `80`, compression/expansion validation en `81`, obligaciones post-handoff en `82` y cierre/control en `83–85`.
- Specs formales del núcleo: `specs/AAI-SPEC-0004-*` a `specs/AAI-SPEC-0010-*`.

## Regla de lectura para Devin

Toda afirmación debe leerse con `type`, `status`, `source`, `scope` y `evidence`. `DESIGNED` no significa `IMPLEMENTED`; `IMPLEMENTED` no significa `VERIFIED`; `TEST_WRITTEN` no significa `PASSED`. Ante contradicción material, detener sólo el cambio afectado y crear un registro de decisión/gap.

## Transición vigente: Seed Acceptance

La fase conceptual abierta terminó con P-WAVE-3E-01. P-SEED-ACCEPT-01 preserva `0.9.0-assembly.2` y prepara una snapshot separada para probar, no para rediseñar. El orden habilitador actual es `SER-002 implementation repo → SER-003 baseline original → SER-006 Java 21 build/tests/runtime evidence`; sin estas fuentes no puede reconciliarse el estado real ni derivarse un frontier ejecutable confiable.

Self-Model, deterministic assurance, documentation/ingestion milestones y executable frontier son extensiones de capacidades/Specs existentes. No son nuevas Specs ni implementaciones. El LLM puede explicar, sintetizar y proponer; no puede autocertificar una afirmación material verificable. La entrada operativa a esta fase es `bootstrap/ACCEPTANCE.md`; los resultados esperados son BootstrapReceipt, reconciliation findings, fitness/evidence receipts, Session A/B equivalence y next-work recalculation.

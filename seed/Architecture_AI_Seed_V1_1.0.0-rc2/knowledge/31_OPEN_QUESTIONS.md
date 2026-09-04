# 31 — Open Questions

| Question ID | Domain | Question | Why it matters | Required source/owner | Blocks |
|---|---|---|---|---|---|
| Q-0001 | Source | ¿Dónde está el export completo de chats y message IDs? | Exhaustividad y provenance | User/export | full recovery |
| Q-0002 | Implementation | ¿Dónde está el repo/commit exacto analizado por Prompt 01? | Verificar code/status | Devin/Git | baseline V2 |
| Q-0003 | Devin result | ¿Puede materializarse `CURRENT_IMPLEMENTATION_BASELINE.md` original? | Evitar dependencia de resumen derivado | User/Devin | evidence quality |
| Q-0004 | Runtime | ¿Qué JDK/vendor/path/wrapper debe usar la workstation? | Desbloquear build | Engineering | all runtime verification |
| Q-0005 | Desktop | ¿Qué APIs/extensibility reales soporta Devin Desktop corporativo? | Decide primary HCI | Devin/admin | SPEC-0003 |
| Q-0006 | MCP | ¿Cuál es el catálogo exacto de 30 tools y sus schemas/handlers? | Seguridad y traceability | Repo | 0017/0035 |
| Q-0007 | Skills | ¿Cuáles son las 16 skills reportadas y qué agentes las consumen? | Separar role/skill/tool | Repo | 0015/0017 |
| Q-0008 | Graph | ¿Neo4j Community embedded o proceso local? ¿Licencia aprobada? | ADR engine/deployment | Architecture/Legal/OSS | 0025/0026 |
| Q-0009 | Graph | ¿Qué datos/queries/volumen debe soportar el spike JanusGraph↔Neo4j? | Benchmark útil | Architecture/Data | ADR-0004 |
| Q-0010 | Vector | ¿El baseline léxico+grafo requiere vector store según golden queries? | Evitar custom RAG prematuro | Knowledge/QA | retrieval adapter |
| Q-0011 | Security | ¿Cuál es el IdP, secrets facility, PAM/DLP/SIEM disponible local/central? | Implementar controls reales | Security/Platform | 0006/0028 |
| Q-0012 | Data | ¿Clasificación, retención, RTO/RPO y backup aplican a cada store? | Operability/compliance | Data/Security/Ops | 0026/0031 |
| Q-0013 | Git | ¿GitHub corporativo, Git server distinto, permisos y PR/rulesets disponibles? | Native First | Platform/Admin | 0012/0032 |
| Q-0014 | Integrations | ¿Qué APIs/licencias/scopes existen para Confluence, Outlook y Teams? | Evitar dependencia ficticia | Platform owners | 0032/0034 |
| Q-0015 | Organization | ¿Cuál es la taxonomía real de domains/verticals/tribes/squads/owners? | Expertise routing sin inventar | Chief/HR/Architecture | 0016 |
| Q-0016 | Governance | ¿Cuáles son estados/baselines/foro ARF reales? | Version lifecycle correcto | Chief Architecture | 0014 |
| Q-0017 | Banking | ¿IDs, owners, versiones y contratos oficiales de capabilities transversales? | Reuse y evidence | Platform owners | BNK-0002 |
| Q-0018 | Terminology | ¿Cuál es el nombre canónico y scope exacto GLUON/Gravity Plus? | Evitar duplicación semántica | Catalog owner | banking graph |
| Q-0019 | PCI | ¿Scope y controles institucionales para PAN/Card ID/JWSID en cada ejemplo? | Seguridad | PCI/Security | BNK specs |
| Q-0020 | Fraud | ¿Taxonomía, signals, case management y risk owners institucionales? | Fraude transversal | Fraud/Security | 0604/BNK model |
| Q-0021 | Control-M | ¿Cómo se identifica/enruta cada agent en OpenShift desde server IaaS? | Completar spec | Control-M/Platform | BNK-0107 |
| Q-0022 | Standards | ¿Qué versiones de OpenAPI/JSON Schema/ISO/OWASP/NIST están aprobadas internamente? | Research ≠ adoption | Architecture/Security | implementation conventions |
| Q-0023 | Planning/Sprint | ¿Cuál es el modelo histórico completo de Sprint, Work Item, estados, entry/exit y relación con Devin? | Evitar confundir Planning con custom orchestration y preservar diseño previo | Raw chats / user source | AAI-SPEC-0037 |
| Q-0024 | Prompt history | ¿Cuál es el export real de prompts/runs Devin con target, fecha, input y resultado? | La etiqueta del borrador no prueba secuencia de ejecución | User/Devin export | next Devin prompt |
| Q-0025 | Bootstrap | ¿Qué nombres/ubicaciones/carga reconoce realmente el repositorio/Devin para los cuatro skeletons y cuáles deben ser vistas derivadas? | Los skeletons existen, pero no equivalen a integración runtime | Repo + Devin runtime discovery | final manifest/activation |
| Q-0026 | Handoff | ¿Qué repositorio/branch/commit y mecanismo de transferencia recibirá el pack final? | Receipt reproducible y actualización incremental | User/Platform | HAPPY_HANDOFF_READY |
| Q-0027 | Skills | ¿Qué formato, loader, ubicación y lifecycle de Skills soporta la sesión/repo objetivo de Devin? | Candidatas no equivalen a instaladas/ejecutables | Repo/Devin capability discovery | bootstrap skills |
| Q-0028 | Work lifecycle | ¿Qué entidades, repositories, APIs y producers/consumers implementan actualmente Task, Delegation y Question, y qué transitions soportan de verdad? | Formal contract no prueba compatibilidad con código existente | Repo + runtime evidence | 0009/0010 implementation mapping |
| Q-0029 | Events | ¿Qué transport, topics/queues, ordering, retry, delivery semantics y outbox/inbox existen o se requieren para lifecycle events? | El envelope provisional no formaliza 0036 ni un MCP/event contract definitivo | Repo + architecture evidence | 0036 finalization |
| Q-0030 | Seed | ¿Cuál será el root layout final y schema/version del HANDOFF_MANIFEST/BootstrapReceipt? | G3/G10/G11 requieren bootstrap reproducible | repo/runtime + acceptance design | Seed release candidate |
| Q-0031 | Prioritization | ¿Qué evidence/weights/tie-breaks validan que un capability/work item maximiza autosuficiencia? | Evitar prioridad arbitraria | repo/current backlog/operations/architecture authority | G5 |
| Q-0032 | Process/Loop | ¿Qué semántica cubren BPMN/CMMN/DMN y qué gap real exige capa custom? | Evitar Loop/Planning engine propio | standards research | Loop Engineering / Work Model |
| Q-0033 | Architecture conformance | ¿Cómo se mapean CALM, Spring Modulith, ArchUnit y static analysis al repo real? | Evitar duplicar modelos y ClassSpecs | standards + SER-002 | Software Architecture Profile |
| Q-0034 | Terminology | ¿Quién aprueba canonical IDs/terms/aliases y cuál es el mapping DDF↔Exadata vigente? | Evitar false merge/split y lenguaje obsoleto | catalog/owners/raw chats | identity/terminology registry |
| Q-0035 | Retrieval | ¿Qué canonical query, adapters, freshness and zero-result guarantees se requieren por source? | NO_RESULT no prueba inexistencia | connectors/corpus/permissions | reliable context/search |
| Q-0036 | Technology lifecycle | ¿Qué Java/Spring/dependency versions están corporativamente aprobadas y qué exception process aplica? | Java 21 no debe volverse constraint eterno ni “latest” automático | corporate baseline/DevSecOps | technology evolution |
| Q-0037 | Country/Provider | ¿Cuáles son identidades, owners, contratos y scopes oficiales de Quio, Arcus y capabilities por país? | Contextual facts no son institutional truth | SER-007/provider sources | country/external ecosystem model |
| Q-0038 | Reliability | ¿Cuál es la topología MX real, traffic/state replication, RPO/RTO y surviving capacity de los dos clusters/AZ? | Multi-cluster no demuestra HA | platform/operations evidence | reliability profile |
| Q-0039 | Audit | ¿Puede Architecture AI reutilizar Pistas y Bitácoras y cuáles son schema/topics/retention/classification/failure semantics? | Evitar audit paralelo y confundir analytics/ML approval | bank capability owner/policy | audit architecture |
| Q-0040 | Product/language | ¿Qué personas/journeys/accessibility/terminology/locales tienen aprobación y evidencia de uso? | UX/localization model no debe ser preferencia del compiler | users/product/terminology authority | Experience/Language profiles |
| Q-0041 | Threat model | ¿Qué formato interoperable representa architecture→threat/control/risk/evidence para CISO? | Evitar custom threat semantics | standards/security/CISO | Threat Model Package |
| Q-0042 | AI use cases | ¿Qué datasets, non-AI baselines, metrics, risks and promotion gates existen? | ML/LLM no se adopta por posibilidad | data/security/governance | AI Use Case Registry |
| Q-0043 | MCP/Confluence | ¿El WebSocket reportado cumple MCP oficial y qué use cases requieren MCP vs REST/API? | Protocol/interoperability and bulk sync quality | SER-002/004 + connector access | 0035/0032/0034 |
| Q-0044 | Staging | ¿Cómo materializar un checkout/remote autorizado y confirmar branch/commit del staging público sin publicar contenido no validado? | Work actual no tiene acceso Git efectivo | user-provided checkout/connector | staging sync/SER-013 |
| Q-0045 | Cutover | ¿Qué target repo/session/authority recibirá Seed V1 y qué receipt confirma transferencia? | Staging no es autoridad post-handoff | user + organizational platform | final handoff |
| Q-0046 | Organization | ¿Cuáles son los dominios, mandates, owners, operators, approvers, capabilities e interfaces institucionales vigentes? | Visibility no puede sustituir authority evidence | SER-014 / organizational sources | federated capability instances |
| Q-0047 | Federation | ¿Qué clasificación y lifecycle federado representan correctamente local/shared/experimental capabilities? | Evitar copiar capabilities al core o imponer una taxonomía | RO-3E-004 + representative domain cases | Domain Introspection/Federation profile |
| Q-0048 | Deterministic maturity | ¿Qué history, exception coverage, Harness metrics y owner gate prueban readiness por capability? | Repetition/possibility no prueban safe automation | runtime/Harness/domain owner | deterministic promotion |
| Q-0049 | Domain UX | ¿Qué personas, permissions, journeys y actions requiere cada domain projection? | Evitar workspaces inventados y truth silos | RO-3C-013 + SER-014 | Domain UX profiles |
| Q-0050 | Assurance | ¿SACM/GSN u otro estándar cubre Claim→Argument→Evidence con provenance/authority/temporality? | Evitar assurance semantics custom | RO-3E-002 | assurance profile |
| Q-0051 | Terminology | ¿Existe definición canónica observable de “JavaFizz / SpecFizz”? | No inventar significado desde una mención coloquial | SER-001 / original source | terminology mapping only |
| Q-0052 | Deterministic assurance | ¿Qué toolchain mínimo reusable cubre fitness, integration/runtime evidence and governed view/document generation for this repo? | Los nombres de frameworks no son adopción ni prueban fit | RO-ACCEPT-001 + SER-002/006 | assurance/documentation implementation |
| Q-0053 | Clean acceptance | ¿Qué sesión/loader autorizado ejecutará BootstrapReceipt, reconciliation and Session A/B without chat replay? | Los fixtures diseñados no prueban G3/G4/G10 | SER-009 + implementation source/access | Seed acceptance execution |
| Q-0054 | Environment authority | ¿Qué environments/clusters existen, quién autoriza cada operación y cuál es su evidence source? | Reachability/credentials do not imply deployment authority | SER-002/007/009/014 | Environment Capability Profile |
| Q-0055 | Delivery/ALM | ¿Qué Git/CI/ALM/pipeline/policy path institucional debe reutilizarse por environment? | Evitar bypass o plataforma duplicada | SER-002/007/014 | Delivery Capability mapping |
| Q-0056 | Cross-environment | ¿Qué fixtures, expected variances, metrics and permissions permiten comparar environments? | Evitar comparar targets no autorizados o declarar drift falso | EXP-ACCEPT-005 | assurance profile |
| Q-0057 | Adoption readiness | ¿Qué owner aprueba cada builder/architect/Chief/domain profile y qué evidence es obligatoria? | Readiness no es opinión ni porcentaje global | EXP-ACCEPT-006 + SER-014 | readiness profiles |
| Q-0058 | Multi-architect | ¿Qué users/resources, isolation/review/merge controls y ownership existen realmente? | N architects ≠ N agents | SER-002/010/014 | work distribution model |
| Q-0059 | Architect UX | ¿Qué tareas, attention signals y complejidad interna deben mostrarse/ocultarse por persona? | Evitar dashboard inventado y cognitive overload | RO-3C-013 + user study | adoption UX profile |

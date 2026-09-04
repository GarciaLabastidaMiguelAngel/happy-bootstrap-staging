# 52 — Oleada 3C Concept Inventory

## Control

| Campo | Valor |
|---|---|
| `wave` | `OLEADA_3C` |
| `artifact_id` | `HAPPY-KNOW-52` |
| `status` | `DRAFT` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `implementation_executed` | `NO` |
| `sent_to_devin` | `NO` |
| `source` | `HK-SRC-0017 / AAI-SRC-0039` |
| `governing_principle` | `NO-LOSS + STANDARD BEFORE CUSTOM + THIN CUSTOM SPEC LAYER` |
| `new_aai_spec_ids_assigned` | `0` |

Este inventario captura el delta conceptual posterior a Oleada 3B. La presencia de un concepto no demuestra que sea una capability implementada, una política institucional o una Spec independiente. La disposición final se determina en los documentos 53, 59 y 61.

## Taxonomía de estado de evidencia

| Estado | Interpretación en 3C |
|---|---|
| `FACT` | hecho interno del Knowledge Compiler o artefacto directamente observado |
| `CONTEXTUAL_FACT` | contexto expresamente comunicado por el usuario; requiere fuente gobernada para elevarse a verdad institucional |
| `PROPOSAL` | modelo que aporta valor pero no constituye decisión canónica |
| `DECISION_CANDIDATE` | opción suficientemente formulada para evaluación humana/ADR |
| `DIRECTIVE_CANDIDATE` | regla arquitectónica propuesta; no es política bancaria aprobada |
| `RESEARCH_REQUIRED` | necesita evaluación previa, reproducible y con criterios definidos |
| `BLOCKED_BY_SOURCE` | depende de fuente identificada no observable |
| `UNKNOWN` | contenido o semántica material todavía no conocido |

## Inventario consolidado

| Concept group | Dominio | Conceptos preservados | Estado dominante | Disposición preliminar | Bloqueo / siguiente gate |
|---|---|---|---|---|---|
| `O3C-CON-001` | Work & Session | Engagement, Mission, WorkSession, Task, WorkPackage, Execution, Checkpoint, Resume, Handoff, Conversation, User/Agent/Devin Session, ContextManifest | `DIRECTIVE_CANDIDATE + CONCEPTUAL_DRAFT` | `EXTEND_EXISTING_SPEC 0009`; correlate 0005/0010/0036 | 3D process/case standards; SER-002/009/010/012 |
| `O3C-CON-002` | Loop Engineering | control/improvement/evolution/continuous/finite/parent-child loops and LoopInstance | `PROPOSAL + RESEARCH_REQUIRED` | capability/profile over 0018/0019/0029/0037; no new Spec yet | BPMN/CMMN/DMN evaluation in 3D |
| `O3C-CON-003` | Software engineering governance | modules, boundaries, dependency rules, ports, isolation, conformance, code discovery, complexity/debt/dependencies | `DIRECTIVE_CANDIDATE` | extend 0021/0022/0034; standards/tool composition | CALM/Modulith/ArchUnit/static-analysis fit; SER-002 |
| `O3C-CON-004` | Identity & terminology | canonical identity, aliases, term lifecycle, entity resolution, claims, supersession, correction | `PROPOSAL + CONTEXTUAL_FACT` | extend 0007/0024/0025/0016 | terminology corpus, entity-resolution evaluation, SER-001/007 |
| `O3C-CON-005` | Discovery & retrieval | content/query models, adapters, indexes, fusion, ranking, zero-result analysis, permission-aware search | `DIRECTIVE_CANDIDATE` | extend 0005/0007/0008/0020/0023/0024/0025/0032/0035 | benchmark and source capability evidence |
| `O3C-CON-006` | Consistency & congruence | consistency, conformance, freshness, correctness across 13 domains | `DIRECTIVE_CANDIDATE` | cross-cutting profile over 0004–0010, 0014/0021/0022/0029/0036 | measurable checks; repo/runtime evidence |
| `O3C-CON-007` | Research engineering | question, method, criteria, sources, evidence, findings, conflicts, POC/experiment, review/gates/cadence | `PROPOSAL + RESEARCH_REQUIRED` | extend 0018/0019/0020/0027/0029/0033 | 3D standards/method comparison; SER-011 |
| `O3C-CON-008` | Technology lifecycle | directive, support, evolution, obsolescence, watch, evidence, debt/exception | `DIRECTIVE_CANDIDATE` | extend 0019/0027/0029/0030/0031/0032 | corporate technology policy/catalog sources |
| `O3C-CON-009` | Corporate Capability First | discovery of available providers, constraints, patterns, cost/license and gap before new tech | `DIRECTIVE_CANDIDATE` | extend 0001/0002/0011/0017/0032; corporate overlay later | SER-007; capability registry |
| `O3C-CON-010` | Operating/control/commercial | deployment/consumption/control/responsibility/license/vendor/contract/support/runtime/exit/effective capability | `PROPOSAL + CONTEXTUAL_FACT` | extend 0013/0014/0026/0027/0028/0030/0031/0032/0033 | license/contract/owner evidence |
| `O3C-CON-011` | Global/country/geography | region, country, jurisdiction, legal entity, DC/site/provider/platform/cluster/environment/zone | `CURRENT_DIRECTION + CONTEXTUAL_FACT` | extend 0001/0002/0013/0024/0028/0031/0032/0033 + BNK-0001 | country sources and knowledge boundaries |
| `O3C-CON-012` | External ecosystem | organization/provider/capability/service/API/contract/SLA/data exchange/third-party risk/change | `CONTEXTUAL_FACT + UNKNOWN` | extend 0013/0027/0032/0033 + banking context | contracts, owners, APIs, runtime evidence |
| `O3C-CON-013` | Reliability/scalability | scalability, availability, resilience, replication, sync, failover, RPO/RTO, domains, distribution/capacity/state | `DIRECTIVE_CANDIDATE + CONTEXTUAL_FACT` | extend 0002/0008/0021/0022/0026/0029/0031 | topology/SLO/runtime tests; SER-007 |
| `O3C-CON-014` | Audit / Pistas y Bitácoras | corporate audit capability; Customer Position → Kafka → Scality example | `CONTEXTUAL_FACT` | banking capability/context + extend 0006/0028/0029/0032/0033 | topics/schema/retention/classification/topology unknown |
| `O3C-CON-015` | Efficiency/optimization | amplification, fan-out, hops/calls/pressure, resources, backpressure, load/headroom/cost | `DIRECTIVE_CANDIDATE` | extend 0002/0021/0022/0029; measurement profile | workload model, benchmarks and thresholds |
| `O3C-CON-016` | Human-AI experience | onboarding, guidance, content/navigation, interaction, explainability/trust, resume, search, access, routing | `PROPOSAL + DIRECTIVE_CANDIDATE` | extend 0003/0009/0010/0016/0018/0020/0029/0032/0034/0035 | personas research, accessibility/UX standards in 3D |
| `O3C-CON-017` | Language governance | es-MX default, English technical canonical, language-independent semantics, locales and translation hierarchy | `CURRENT_DIRECTION + DIRECTIVE_CANDIDATE` | language/terminology profile extending 0010/0024/0033/0034/0035 | terminology authority, benchmarks and localization standards |
| `O3C-CON-018` | Documentation lifecycle | authoritative home, model/view/render/publication, Git/Confluence/Workspace/Graph/OpenShift/JFrog/session roles | `DIRECTIVE_CANDIDATE` | extend 0004/0008/0012/0014/0024/0025/0034/0036 | source types, conflict model, connector evidence |
| `O3C-CON-019` | Repository topology | two initial baseline repos, multi-repo capable, separation assessment and drivers | `CURRENT_DIRECTION + PROPOSAL` | extend 0012/0014/0026/0030/0031/0034 | SER-002; governance/ownership/release evidence |
| `O3C-CON-020` | Threat modeling | canonical projection to threat/control/risk/evidence and CISO views | `RESEARCH_REQUIRED + PROPOSAL` | extend 0002/0013/0021/0027/0028/0033 | OWASP/STRIDE/LINDDUN/tool schemas in 3D |
| `O3C-CON-021` | AI/ML governance | AI Use Case Registry, least-complex hierarchy, non-AI baseline, model/policy separation | `DIRECTIVE_CANDIDATE + PROPOSAL` | extend 0011/0015/0019/0020/0021/0022/0029 | datasets, baselines, metrics, risk and promotion gates |
| `O3C-CON-022` | Harness engineering | specs/context/policies/authority/capabilities/MCP/tools/process/evidence/ledger/tests/conformance/graph/cost/observability | `PROPOSAL` supported by frozen boundary | composed architecture across existing Specs; no new Spec yet | coverage/dependency analysis in 3D/3E |
| `O3C-CON-023` | MCP/Confluence strategy | MCP for agent interaction; REST/API for deterministic system integration; use-case benchmark | `DIRECTIVE_CANDIDATE + RESEARCH_REQUIRED` | extend 0006/0007/0017/0032/0034/0035 | SER-004; official MCP conformance; Confluence capability evidence |
| `O3C-CON-024` | Spec reuse/standard substitution | reuse categories and thin-custom decision process | `FACT` for compiler process | governs 3D; no Spec ID | standards evidence and dedup matrix |

## 1. Work & Session Metamodel

La extensión formal está en `AAI-SPEC-0009 v0.2.0-draft`. Se preservan como invariantes candidatas:

- `WORK OUTLIVES SESSION.`
- `SESSION STATE IS NOT INSTITUTIONAL MEMORY.`
- `CONVERSATION != WORK SESSION.`
- `DEVIN SESSION != WORK SESSION.`
- `AGENT INSTANCE IS EPHEMERAL; WORK RESPONSIBILITY PERSISTS.`

`ArchitectureEngagement` y `Mission` expresan continuidad de objetivo; `WorkSession`, `Task`, `WorkPackage`, `Execution`, `Checkpoint`, `Resume` y `Handoff` expresan continuidad operacional; `Conversation`, `UserInteractionSession`, `AgentSession` y `DevinSession` son superficies o instancias efímeras; `ContextManifest` permite rehidratar contexto gobernado. La cardinalidad, persistencia y contratos físicos no se fijan en 3C.

## 2. Loop Engineering

### Vocabulario

`ControlLoop`, `ImprovementLoop`, `EvolutionLoop`, `ContinuousLoop`, `FiniteLoop`, `ParentLoop`, `ChildLoop` y `LoopInstance` se registran como taxonomía candidata, no como jerarquía de clases ni motor implementable.

### Modelo conceptual mínimo

`Objective`, `ObservedState`, `ExpectedState`, `Trigger`, `Metrics`, `RequiredEvidence`, `EvaluationMethod`, `AllowedActions`, `AutonomyEnvelope`, `RequiredApprovals`, `Budgets`, `ProgressCriteria`, `ExitCondition`, `EscalationCondition`, `Learning`, `Reconciliation` y `Promotion`.

### Invariantes candidatas

- `THE LOOP OWNS CONTINUITY. THE AGENT ONLY PARTICIPATES IN AN ITERATION.`
- Todo loop tiene función de progreso medible o condición determinística de salida/escalamiento.
- `OBSERVE → LEARN → PROPOSE → EVALUATE → GOVERN → PROMOTE.`
- Nunca `OBSERVE → MODIFY CANONICAL STATE`.

### Instancias candidatas

Banking Platform Discovery & Learning; Knowledge Validation & Promotion; Architecture Congruence; Technology Evolution & Obsolescence; Corporate Capability Evolution; Research & Evidence; Risk & Threat Treatment; Software Quality & Architecture Conformance; Dependency & Supply Chain; Documentation Quality & Regeneration; Context Optimization; Agent Performance Improvement; Skill/Tool Optimization; ML Model Lifecycle; UX/Human-AI Experience Improvement; Cost/FinOps Optimization; Reliability/Capacity; Terminology/Semantic Evolution; Localization Quality; External Provider/Vendor Change.

La semántica de ejecución queda `RESEARCH_REQUIRED` frente a BPMN/CMMN/DMN antes de justificar un Loop Engine custom.

## 3. Software Engineering & Code Architecture Governance

Se registran `SoftwareArchitectureProfile`, `ApplicationModule`, `ModuleBoundary`, `DependencyRule`, `PublicInterface`, `InternalImplementation`, `FrameworkIsolation`, `ExtensionPoint`, `PackageConvention`, `ArchitectureConformance`, `CodeStructureDiscovery`, `Complexity`, `TechnicalDebt` y `DependencyGovernance`.

Directivas candidatas:

- `NO SPRING BOOT SPAGHETTI.`
- Los límites de package/module representan capabilities y responsabilidades, no carpetas globales `controller/service/repository`.
- Los frameworks quedan detrás de ports/boundaries estables cuando el acoplamiento directo aumenta riesgo de reemplazo o mantenimiento.
- No se crea `ClassSpec` manual por clase.

Composición a evaluar: CALM para arquitectura lógica/componentes; Spring Modulith para módulos Java; ArchUnit para restricciones ejecutables; static analysis para packages/classes/methods; Graph para correlación y navegación. Ninguna adopción se congela en 3C.

## 4. Information Identity, Entity Resolution & Terminology

Se preservan `CanonicalEntityIdentity`, `Alias`, `LegacyTerm`, `PreferredTerm`, `DeprecatedTerm`, `EntityResolution`, `Disambiguation`, `SourceIdentityMapping`, `Claim`, `RelationshipSemantics`, `Version`, `Instance`, `TemporalSupersession`, `CorrelationEvidence` y `HumanCorrection`.

Reglas candidatas:

- comprender lenguaje legacy;
- responder con lenguaje vigente aprobado;
- conservar trazabilidad histórica;
- no reemplazar strings a ciegas.

Jerarquía candidata: `Strong Identifier → Explicit Alias → Graph/Structural Context → Semantic Similarity → ML Ranking → LLM Reasoning → Human Resolution`. No se fijan thresholds sin dataset/evaluación.

Ejemplo contextual: `DDF` puede seguir en lenguaje coloquial aunque la implementación vigente equivalente pueda ser consulta sobre Exadata. El mapping exacto sigue sujeto a evidencia y corrección humana.

## 5. Information Discovery, Indexing & Retrieval Consistency

Se registran `CanonicalContentModel`, `SourceAdapter`, `SearchCapabilityProfile`, `CanonicalQueryModel`, `IndexProjection`, `IndexFreshness`, `IndexConsistency`, `SearchFusion`, `Ranking`, `ZeroResultAnalysis`, `SearchEvidence` y `PermissionAwareRetrieval`.

`CQL` se clasifica como adapter/query language de Confluence, no como el modelo de consulta canónico de Architecture AI.

`NO_RESULT != INFORMATION_DOES_NOT_EXIST.` Un resultado vacío debe poder distinguir al menos `QUERY_TOO_RESTRICTIVE`, `SOURCE_UNAVAILABLE`, `INDEX_STALE`, `ALIAS_UNKNOWN`, `PERMISSION_RESTRICTED`, `FORMAT_MISMATCH` y `SEARCH_CAPABILITY_LIMITATION`.

## 6. Information Consistency & Congruence

Se distinguen `Consistency`, `Conformance`, `Freshness` y `Correctness`. Los dominios son: Specification, Projection, Runtime, Contract, Knowledge, Decision, Environment, Cross-Environment Congruence, Artifact, Documentation, Agent, Model, Research, Risk y Metric Consistency.

Directiva candidata: `ARCHITECTURE AI SHALL NEVER ASSUME CONSISTENCY. IT SHALL CONTINUOUSLY PROVE IT.`

Ejemplo de drift ya registrado: Git/Spec Java 21 frente a runtime Java 8. La detección no cambia por sí misma la decisión; produce finding, gap, evidencia y trabajo de remediación.

## 7. Research & Investigation Engineering

La entidad existente `ResearchObligation` se amplía conceptualmente con `ResearchQuestion`, `Method`, `Criteria`, `Source`, `Evidence`, `Constraint`, `Assumption`, `Alternative`, `Finding`, `Conflict`, `Conclusion`, `Recommendation`, `POC`, `Experiment`, `Reproducibility`, `Freshness`, `PeerReview`, `QualityGate` y `Cadence`.

Tipos: Technology Evolution, Obsolescence, Security, Standards, Corporate Capability, Banking Platform Discovery, Knowledge/Decision Revalidation, Risk, Architecture Pattern, Quantitative, Cost/FinOps, UX, Agent, Skill, License, Supply Chain, AI/Model y Strategic. Se distingue investigación programada de investigación disparada por evento.

Directiva candidata: Devin puede ejecutar investigación; no puede redefinir después de ver resultados qué cuenta como investigación válida.

## 8. Technology Directives, Lifecycle & Obsolescence

Se registran `TechnologyDirective`, `LifecycleSupport`, `Obsolescence`, `TechnologyEvolution`, `DependencyObsolescence`, `ObsolescenceImpact`, `ObsolescenceWatch`, `ObsolescenceEvidence` y `ObsolescenceDebtOrException`.

Dirección candidata Java: preferir adopción proactiva del Java LTS más reciente **corporativamente aprobado**, no la release más reciente automáticamente. Triggers candidatos: `NEW_LTS`, `EOL_ANNOUNCED`, `CRITICAL_CVE`, `LICENSE_CHANGE`, `CORPORATE_BASELINE_CHANGE`. No se eleva a política bancaria.

## 9. Corporate Capability First

Secuencia candidata: `RequiredCapability → CorporateCapabilityDiscovery → AvailableProviders → Constraints → ExistingPatterns → Cost/Licensing → GapAnalysis → ExternalOrNewTechnologyResearch`.

Directivas candidatas: `DESIGN WITH AVAILABLE CAPABILITIES FIRST`, `UNAVAILABLE CAPABILITY SHALL NOT BE ASSUMED AS PART OF THE CURRENT SOLUTION` y `CORPORATE CAPABILITY FIRST`.

Ejemplo conceptual, no inventario institucional: si se requiere stream processing y ksqlDB no está disponible, evaluar Kafka Streams y Spring Integration disponibles antes de proponer una plataforma nueva.

## 10. Platform Operating, Control & Commercial Model

Conceptos: `DeploymentModel`, `ServiceConsumptionModel`, `ControlBoundary`, `OperationalResponsibility`, `SharedResponsibility`, `LicenseModel`, `LicenseEntitlement`, `LicenseConstraint`, `LicenseUsage`, `VendorDependency`, `ContractConstraint`, `SupportModel`, `RuntimeLocation`, `ExitStrategy`, `EffectiveCapability`.

Modos: `ON_PREM`, `PRIVATE_CLOUD`, `PUBLIC_CLOUD`, `SAAS`, `MANAGED_SERVICE`, `EXTERNAL_API`, `HYBRID`.

Directivas candidatas: distinguir uso organizacional de control organizacional; `TECHNICALLY_POSSIBLE != CONTRACTUALLY_ALLOWED`.

Ejemplo contextual MX: Nginx Plus en nodos licenciados específicos mediante scheduling constraints; una capability central de gestión de licencias fue mencionada, pero su detalle es `UNKNOWN` y origina gap/research obligation.

## 11. Global / Country / Geographic Operating Model

Conceptos: GlobalPlatform, Region, Country, Jurisdiction, LegalEntity, DataCenter, Site, HostingProvider, ExternalProvider, CorporatePlatform, Cluster, Environment y NetworkZone.

México es el primer contexto concreto. Chile, Uruguay y United States se preservan como países mencionados; Brasil/Portugal sólo como potencial expansión de experiencia/localización. No se infiere su arquitectura.

Directivas candidatas: `SHARE PLATFORM INTELLIGENCE. SEPARATE COUNTRY TRUTH.` Architecture AI puede ser compartida; el Banking Platform knowledge debe quedar country/context-scoped.

Se registran como necesidades futuras Country Architecture Profile, Cross-Country Reuse, Country Knowledge Boundary, Cross-Border Dependency y Shared vs Local Capability.

Contexto pendiente de evidencia: infraestructura física relevante en México; Quio Networks mencionado como provider/data-center context; dependencias externas/centralizadas de otros países no especificadas.

## 12. External Ecosystem & Third-Party Dependencies

Conceptos: ExternalOrganization, ExternalProvider, ExternalCapability, ExternalService, ExternalAPI, ExternalContract, SLA, DataExchange, ThirdPartyRisk, ControlBoundary y ProviderChangeEvent.

Ejemplo contextual: Arcus fue mencionado como proveedor externo relacionado con la capability de pago de servicios en mobile banking. Repositorios, APIs, owners, contratos y runtime no se infieren.

## 13. Reliability, Scalability & Multi-Cluster

Se distinguen Scalability, Availability, Resilience, Replication, Synchronization, Failover, RPO, RTO, FailureDomain, TrafficDistribution, SurvivingCapacity, ComputeRedundancy y StateRedundancy.

Invariantes candidatas: `MULTI-CLUSTER != PROVEN HIGH AVAILABILITY`; `TWO CLUSTERS != SUFFICIENT EVIDENCE OF RESILIENCE`.

Contexto MX: se reportan dos clusters/availability zones y mecanismos de sincronización como patrón conocido. Topología, semántica de replicación, traffic distribution, RPO/RTO y surviving capacity permanecen `BLOCKED_BY_SOURCE`.

## 14. Audit Trail / Pistas y Bitácoras

`Pistas y Bitácoras` se registra como capability corporativa contextual existente en Banking Platform MX. Ejemplo: Customer Position produce audit trail request/response mediante patrón existente, publica a Kafka y persiste downstream en Scality.

No se inventan schema, topics, retention, fields, security classification ni topology. Se distinguen Audit, Observability y Analytics. `AUDIT DATA AVAILABLE != ANALYTICS PLATFORM AVAILABLE` y `AUDIT DATA AVAILABLE != ML DATASET APPROVED`.

Analytics sobre histórico Scality queda `STRATEGIC_OPPORTUNITY / RESEARCH_REQUIRED`. Architecture AI deberá investigar reutilización de esta capability para su propia auditoría antes de diseñar mecanismo paralelo.

## 15. Solution Efficiency & Optimization

Conceptos: Query/Request/Event Amplification, FanOut, NetworkHops, RemoteCalls, DatabasePressure, Serialization, Memory, CPU, StorageGrowth, ConnectionUsage, Backpressure, Parallelism, PeakLoad, FailureLoad, CapacityHeadroom y CostEfficiency.

Directivas candidatas: una arquitectura no se aprueba sólo porque funciona; optimizar eficiencia total del sistema, no conveniencia local; medir en el system boundary. Correlación candidata con Measurement, Capacity, Monte Carlo y Performance POC. No se fijan thresholds.

## 16. Human-AI Interaction & Product Experience

Conceptos: Onboarding, FirstRun, Guidance, MessageDesign, ContentDesign, Navigation, InformationHierarchy, QuestionInteraction, DecisionInteraction, Explainability, TrustCalibration, FeedbackAndControl, GracefulFailure, Progress, Resume, Attention, SearchExperience, KnowledgeExploration, Accessibility, ResponsiveExperience, PerformanceUX, AudienceAdaptation, HumanAIInteraction y ExperienceRouting.

Personas: Solution Architect, Chief Architect, Enterprise Architect, Knowledge/Information Consultant, Developer, Project Manager, Security/CISO e Information Consumer.

Directivas candidatas: el chat explica y orienta; experiencias especializadas manejan trabajo especializado; chat es una interfaz, no todo el producto. Destinos candidatos: Architecture AI Workspace, Graph, Structurizr/architecture view, Confluence, Git, Decision Workflow y Research Workflow.

## 17. Internationalization, Localization & Language Governance

Dirección inicial: UX `es-MX`; lenguaje técnico canónico English; semántica canónica en objetos/IDs language-independent; lenguaje de ejecución del modelo según benchmark/policy. Locales futuros arquitectónicamente posibles: `pt-BR`, `pt-PT`, `en-US`, `en-GB` y otros.

No se traducen IDs, schema keys, enum values, API fields, MCP tool names, event types ni technical identifiers.

Directivas candidatas: `ONE CANONICAL MEANING. MULTIPLE LOCALIZED PRESENTATIONS.` Localization no cambia semantics, authority, risk, decision state ni evidence. Un LLM generalista no es el mecanismo predeterminado de localización.

Jerarquía candidata: resource bundles/templates → Terminology Registry → locale/CLDR formatting → Translation Memory → specialized local MT → LLM justificado → human validation para traducciones autoritativas.

## 18. Documentation Placement, Rendering & Publication

Roles candidatos: Git como canonical governed source; Confluence como publication/collaboration projection según tipo; Workspace como operational/exploration surface; Graph como relationship projection; OpenShift como observed runtime; JFrog como immutable built-artifact repository; Devin sessions como efímeras.

Directivas candidatas: un authoritative home por information type; no bidirectional sync sin conflict model; `AUTHOR ONCE. VERSION ONCE. RENDER MANY. PUBLISH MANY. TRACE EVERYTHING BACK TO GIT.`

Se distinguen Model, View, Rendering y Publication. Mermaid/otros modelos editables son fuente; SVG/PNG/PDF son derivados.

## 19. Repository Topology & Governance

Dirección actual: un repo baseline para Architecture AI y un repo baseline para conocimiento canónico de Banking Platform; ambos multi-repository capable. No se crea repo por módulo/componente.

`RepositorySeparationAssessment` candidato produce `KEEP_CONSOLIDATED`, `EXTRACT_CANDIDATE` o `EXTRACT_REQUIRED`, considerando ownership, security, release cycle, artifact independence, reuse, change frequency, access restrictions, atomicity y coordination cost.

Directivas candidatas: boundaries por governance/ownership/release/security/product, no por module; decomposición de repos no descompone conocimiento empresarial.

## 20. Threat Modeling

Threat Modeling se registra como output arquitectónico explícito para CISO, pero su semántica custom se difiere. Flujo candidato: `CanonicalArchitectureModel → ThreatModelProjection → Threat/Control/Risk/Evidence → CISOView`.

Un cambio puede generar `THREAT_REASSESSMENT_REQUIRED`. El paquete candidato incluye modelo machine-readable, proyección ejecutiva CISO, proyección de seguridad arquitectónica, mapping control/risk y evidence.

3D investigará OWASP Threat Modeling, STRIDE, LINDDUN, Threat Dragon, OWASP Threat Model Library schema, pytm, Microsoft Threat Modeling Tool y formatos interoperables relevantes.

## 21. AI/ML/DL Use Case Governance

Se registra `AIUseCaseRegistry` como propuesta. Jerarquía de menor complejidad suficiente: `DETERMINISTIC → QUERY/CALCULATION → STATISTICS → OPTIMIZATION → ML → DEEP_LEARNING → LLM → AGENTIC`.

Use cases candidatos: entity/alias resolution, classification, search ranking, duplicate/gap/terminology/anomaly/context detection/ranking, research synthesis, relationship extraction, decision supersession detection, technology opportunity detection, agent/tool routing; graph link prediction y multimodal diagram understanding quedan later/experimental.

Directivas candidatas: cada use case AI tiene baseline no-AI; `ML DETECTS. POLICY DECIDES.`

## 22. Harness Engineering

Architecture AI se modela como harness institucional alrededor de ejecución agentic: Specs, Context, Policies, Authority, Capabilities, MCP, Tools, Process/Case, Evidence, Execution Ledger, Tests, Conformance, Graph, Knowledge, Cost y Observability.

Directivas candidatas: un LLM puede ejecutar un paso requerido, no decidir si el paso requerido existe; Devin es runtime de ejecución/razonamiento, no autoridad institucional; MCP/tools deben resolverse por capability cuando sea viable.

## 23. MCP / Confluence Access Strategy

Se preserva la distinción: MCP es protocolo de interacción de agentes; REST/API es mecanismo de integración de sistemas. Exploración interactiva de Confluence puede usar MCP; sincronización bulk/delta/pagination/attachments/versioning puede requerir API determinística.

Se registra `ConfluenceCapabilityBenchmark` para comparar MCP vs API por caso. La implementación custom WebSocket denominada “MCP” debe verificarse contra el protocolo MCP oficial antes de continuar. No se fija contrato ni transporte en 3C.

## 24. Specification Reuse & Standard Substitution

Cada grupo se clasifica antes de asignar Spec ID como `COVERED_BY_EXISTING_SPEC`, `EXTEND_EXISTING_SPEC`, `STANDARD_NATIVE`, `STANDARD_EXTENDED`, `COMPOSED_STANDARD`, `CORPORATE_OVERLAY`, `CUSTOM_REQUIRED`, `RESEARCH_REQUIRED`, `BLOCKED_BY_SOURCE` o `DEFERRED`.

3C no encontró justificación suficiente para una nueva AAI-SPEC. Sí identificó perfiles, registries, directives y contracts candidatos que deben deduplicarse y contrastarse con estándares en 3D.

## Resultado

- Concept groups inventariados: `24`.
- Nuevos IDs `AAI-SPEC`: `0`.
- Contextual facts bancarios preservados sin elevación a policy: `Nginx Plus/licensing`, country/provider context, multi-cluster, Pistas y Bitácoras, Arcus y DDF/Exadata terminology.
- Materias con standards gate explícito: loops/process/case/decision, architecture model/conformance, schemas/APIs/events, security/threat/control, observability, UX/accessibility/i18n y MCP.
- Estado: `DRAFT / PREPARED_NOT_DELIVERED`.

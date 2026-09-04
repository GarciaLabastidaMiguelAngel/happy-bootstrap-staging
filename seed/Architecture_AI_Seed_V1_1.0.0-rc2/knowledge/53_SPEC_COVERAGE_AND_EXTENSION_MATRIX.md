# 53 — Existing Spec Coverage & Candidate Extension Matrix

## Control

| Campo | Valor |
|---|---|
| `artifact_id` | `HAPPY-KNOW-53` |
| `wave` | `OLEADA_3C` |
| `status` | `DRAFT` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `catalog_baseline` | `AAI-SPEC-0001..0037 + BNK-SPEC-0001/0002/0101..0107` |
| `new_spec_ids` | `NONE` |

## Leyenda

- `C`: `COVERED_BY_EXISTING_SPEC`; no requiere cambio conceptual material.
- `E`: `EXTEND_EXISTING_SPEC`; el concepto cabe en la responsabilidad actual.
- `R`: `RESEARCH_REQUIRED`; el alcance depende de sustitución/fit con estándar.
- `B`: `BLOCKED_BY_SOURCE`; no puede completarse con evidencia observable.
- `D`: `DEFERRED`; fuera del baseline que puede cerrarse ahora.
- `—`: no es relación principal.

Una celda no eleva el status de la Spec ni de la implementación.

## Cobertura directa contra Specs formalizadas 0004–0010

| Concept group | 0004 | 0005 | 0006 | 0007 | 0008 | 0009 | 0010 | Specs adicionales ya catalogadas | Disposición 3C |
|---|---:|---:|---:|---:|---:|---:|---:|---|---|
| Work & Session Metamodel | — | E | E | — | — | **E** | E | 0003, 0014–0016, 0029, 0036, 0037 | 0009 actualizada a v0.2; contratos físicos B/R |
| Loop Engineering | E | E | E | E | E | E | E | 0018, 0019, 0027, 0029, 0037 | composed capability; BPMN/CMMN/DMN R |
| Software/code governance | — | — | E | — | E | E | E | 0012–0015, 0021, 0022, 0029, 0030, 0034 | architecture profile + executable conformance R/B |
| Identity/entity resolution/terminology | E | E | E | **E** | E | E | E | 0014, 0016, 0020, 0024, 0025, 0033, 0034 | extend knowledge model; thresholds deferred |
| Discovery/index/retrieval | — | **E** | E | E | **E** | — | E | 0020, 0023–0025, 0029, 0032, 0035 | canonical query/search profile; CQL adapter |
| Consistency/congruence | E | E | E | E | **E** | E | E | 0012–0014, 0021, 0022, 0024–0026, 0029, 0036 | cross-cutting conformance profile |
| Research engineering | E | E | E | E | — | E | **E** | 0011, 0018–0021, 0027, 0029, 0032, 0033 | expand ResearchObligation; method R |
| Technology lifecycle/obsolescence | — | — | E | — | E | E | E | 0018, 0019, 0027, 0029–0033 | directive/watch/exception; corporate overlay B |
| Corporate Capability First | — | E | E | — | — | E | E | 0001, 0002, 0011, 0017, 0027, 0032 | directive + capability discovery profile |
| Operating/control/commercial model | — | E | **E** | E | E | E | E | 0013, 0014, 0026–0028, 0030–0033 | extend solution/capability context; contracts B |
| Global/country/geographic model | — | **E** | E | E | E | E | E | 0001, 0002, 0013, 0016, 0024, 0028, 0031–0033 | country profile/knowledge boundary candidate |
| External ecosystem | — | E | E | E | E | E | E | 0013, 0016, 0027–0029, 0032, 0033 | provider/capability overlay; source-gated |
| Reliability/multi-cluster | — | — | E | — | E | E | E | 0002, 0013, 0021, 0022, 0026, 0029, 0031 | reliability evidence profile; topology B |
| Audit / Pistas y Bitácoras | E | — | **E** | E | E | E | E | 0024, 0027–0029, 0032, 0033 + BNK specs | bank contextual capability; reuse research |
| Efficiency/optimization | — | E | E | — | E | E | E | 0002, 0013, 0021, 0022, 0029 | measurement/conformance extension |
| Human-AI experience | — | E | E | — | E | E | **E** | 0003, 0016, 0018, 0020, 0029, 0032, 0034, 0035 | experience profile; standards/persona research |
| i18n/l10n/language governance | E | E | E | E | E | E | **E** | 0001, 0014, 0024, 0033–0035 | language/terminology profile; direction not policy |
| Documentation placement/render/publication | **E** | — | E | E | **E** | E | E | 0012, 0014, 0024, 0025, 0032, 0034, 0036 | source/projection/publication model |
| Repository topology/governance | E | — | E | E | E | E | E | 0012–0014, 0026, 0030, 0031, 0034 | separation assessment; physical map B |
| Threat modeling | E | E | **E** | E | E | E | E | 0002, 0013, 0021, 0022, 0027, 0028, 0033, 0034 | threat projection; standards R |
| AI/ML use-case governance | E | E | E | E | E | E | E | 0011, 0015, 0019–0022, 0024, 0025, 0029 | registry/profile; baseline and datasets B |
| Harness engineering | C | C | C | C | C | C | C | 0001–0037 as composed architecture | no monolithic Harness Spec in 3C |
| MCP/Confluence access strategy | — | E | E | E | E | E | E | 0003, 0017, 0023, 0032, 0034–0036 | capability benchmark + protocol conformance R/B |
| Spec reuse/standard substitution | E | E | E | E | E | E | E | 0021, 0022, 0033, 0034, 0035 | compiler gate and 3D work, not domain Spec |

## Impacto 3C sobre todo el catálogo Architecture AI

| Spec | Cobertura previa relevante | Delta conceptual 3C | Clasificación | Estado posterior |
|---|---|---|---|---|
| `0001` Institutional Context Bootstrap | country/platform bootstrap | corporate capability, country boundary, locale and operating context | `EXTEND_EXISTING_SPEC` | `DRAFT`; no file rewrite in 3C |
| `0002` Cross-Vector Analysis | vector analysis | reliability, efficiency, operating/commercial, threat and third-party vectors | `EXTEND_EXISTING_SPEC` | `DRAFT`; rules remain unformalized |
| `0003` Desktop Handoff | thin client/task handoff | UserInteraction/Devin session distinction, experience routing, resume | `EXTEND_EXISTING_SPEC + BLOCKED_BY_SOURCE` | `DRAFT`; SER-009 |
| `0004` Canonical Promotion | governed knowledge lifecycle | loop promotion gate, authoritative-home and AI/ML proposal promotion | `EXTEND_EXISTING_SPEC` | `DRAFT`; implementation unchanged |
| `0005` Context Resolver/AWP | purpose-scoped context | Context Manifest, aliases, country/permission-aware retrieval, zero-result evidence | `EXTEND_EXISTING_SPEC` | `DRAFT`; contract extension deferred |
| `0006` Tool Policy | PEP/PDP/approvals | autonomy envelope, control/commercial constraint, capability resolution, audit route | `EXTEND_EXISTING_SPEC` | `DRAFT`; tool catalog blocked |
| `0007` Governed Ingestion | source/evidence/reconciliation | identity mapping, term lifecycle, search adapters and publication ingestion | `EXTEND_EXISTING_SPEC` | `DRAFT`; no schema change in 3C |
| `0008` Projection Manager | projection readiness/recovery | index freshness/consistency, documentation/graph/search projection congruence | `EXTEND_EXISTING_SPEC` | `DRAFT`; runtime not reclassified |
| `0009` Work lifecycle | Task/delegation/state | Work & Session Metamodel and continuity invariants | `EXTEND_EXISTING_SPEC` | **`DRAFT v0.2.0`**; implementation unchanged |
| `0010` Question lifecycle | evidence/routing/assurance | research question routing, zero-result diagnosis, human correction and UX | `EXTEND_EXISTING_SPEC` | `DRAFT`; no contract change yet |
| `0011` Demand Triage | architecture demand | corporate capability discovery and AI/ML use-case triage | `EXTEND_EXISTING_SPEC` | `DISCOVERED` |
| `0012` Git-Native Collaboration | branches/PR/concurrency | documentation authority, repository separation and multi-repo governance | `EXTEND_EXISTING_SPEC` | `DISCOVERED` |
| `0013` Solution/Impact Manifest | solution/change impact | operating/commercial, provider, reliability, efficiency and country context | `EXTEND_EXISTING_SPEC` | `DISCOVERED` |
| `0014` Baseline/Version Lifecycle | governed baseline | consistency proof, temporal supersession, repo and publication versions | `EXTEND_EXISTING_SPEC` | `DISCOVERED` |
| `0015` Agent Contract | roles/output/tools | ephemeral instance vs durable responsibility; harness and AI routing | `EXTEND_EXISTING_SPEC` | `DISCOVERED`; identity blocked |
| `0016` Organization/Expertise | routing/ownership | personas, canonical entity/alias and country/provider ownership | `EXTEND_EXISTING_SPEC` | `DISCOVERED`; institutional taxonomy blocked |
| `0017` Tool Catalog/Capability | reported tools | capability-resolved access and Corporate Capability First | `EXTEND_EXISTING_SPEC + BLOCKED_BY_SOURCE` | `DISCOVERED`; SER-004/005 |
| `0018` Scheduler/Attention | scheduled work/misfire | scheduled vs event-triggered research, continuous/finite loops, provider/obsolescence watches | `EXTEND_EXISTING_SPEC` | `DISCOVERED` |
| `0019` Agentic→Deterministic | evolution | loop engineering, Skill/Tool/agent improvement and AI maturity hierarchy | `EXTEND_EXISTING_SPEC` | `DISCOVERED` |
| `0020` Answer Assurance | supported/abstain | zero-result causes, research quality and entity-resolution confidence | `EXTEND_EXISTING_SPEC` | `DISCOVERED` |
| `0021` Technical Design Review | multi-vector findings | code architecture, efficiency, reliability and threat-model output review | `EXTEND_EXISTING_SPEC` | `DISCOVERED` |
| `0022` Architecture Tests | deterministic checks | module boundaries, consistency, reliability evidence, non-AI baseline and localization invariance | `EXTEND_EXISTING_SPEC` | `DISCOVERED` |
| `0023` Document/Golden Set | parser benchmark | retrieval/search capability and documentation rendering benchmarks | `EXTEND_EXISTING_SPEC` | `DISCOVERED` |
| `0024` Knowledge/Evidence | provenance/claims | canonical identity, aliases/terms, country/locale, research and audit evidence | `EXTEND_EXISTING_SPEC` | `DRAFT`; schema work deferred |
| `0025` Graph Model | semantic projection | identity resolution context, provider/country relations and projection consistency | `EXTEND_EXISTING_SPEC`; engine `DEFERRED` | `DRAFT`; Graph ADR unchanged |
| `0026` Storage Roles | local stores/recovery | operating model, reliability and repository/artifact roles | `EXTEND_EXISTING_SPEC + DEFERRED` | `DRAFT`; no storage choice changed |
| `0027` Risk/Governance | risk taxonomy | research, third-party/license/obsolescence/threat and AI risk | `EXTEND_EXISTING_SPEC` | `DISCOVERED` |
| `0028` Identity/Security | trust/tool boundary | threat projection, audit/control boundary, provider and country security | `EXTEND_EXISTING_SPEC` | `DRAFT`; no bank policy claim |
| `0029` Observability/Evaluation/Cost | telemetry and quality | loop metrics, research quality, efficiency, reliability, UX, agent/skill/ML evaluation | `EXTEND_EXISTING_SPEC` | `DISCOVERED` |
| `0030` Install/Distribution/Update | local distribution | technology lifecycle, JFrog artifact role and repository packaging | `EXTEND_EXISTING_SPEC` | `DISCOVERED` |
| `0031` Local→OpenShift | future evolution | country/runtime/reliability/topology concepts | `EXTEND_EXISTING_SPEC + DEFERRED` | `DISCOVERED`; architecture not frozen |
| `0032` External Capability Discovery | connectors | Corporate Capability First, provider/license/contract, Confluence benchmark and country scope | `EXTEND_EXISTING_SPEC` | `DISCOVERED`; source-gated |
| `0033` Regulatory Intelligence | obligation→control | standards/research evidence, jurisdiction, threat/control mapping | `EXTEND_EXISTING_SPEC` | `DISCOVERED` |
| `0034` Documentation Lifecycle | Git/publication | model/view/render/publish, UX/language, repo governance and threat views | `EXTEND_EXISTING_SPEC` | `DISCOVERED` |
| `0035` MCP Contract | tools/resources/errors | MCP vs API distinction, capability resolution, locale-invariant identifiers, official conformance | `EXTEND_EXISTING_SPEC + RESEARCH_REQUIRED` | `DISCOVERED`; not frozen |
| `0036` Domain Events | correlation/idempotency | possible loop/research/provider/threat reassessment events | `EXTEND_EXISTING_SPEC + DEFERRED` | `DISCOVERED`; no names/transport frozen |
| `0037` Planning/Sprint | planning boundary | loops/work sessions may schedule/group work, but complete model still source-gated | `COVERED_BOUNDARY + DEFERRED` | `DISCOVERED`; SER-010 |

## Impacto 3C sobre catálogo Banking/context

| Spec | Delta 3C | Clasificación / límite |
|---|---|---|
| `BNK-SPEC-0001` | country/geographic model, MX multi-cluster context, Quio, corporate audit capability, Arcus, license/operating context | `EXTEND_EXISTING_SPEC`; all contextual, not official catalog |
| `BNK-SPEC-0002` | Corporate Capability First, audit/security reuse and control boundaries | `EXTEND_EXISTING_SPEC`; interfaces/owners blocked |
| `BNK-SPEC-0101` | Pistas y Bitácoras path Customer Position→Kafka→Scality; efficiency/reliability evidence needs | `EXTEND_EXAMPLE_SPEC`; exact contracts unknown |
| `BNK-SPEC-0102` | reliability, event amplification and country/runtime controls become evaluation dimensions | `COVERED_BY_EXISTING_EXAMPLE`; no new facts |
| `BNK-SPEC-0103` | threat/control projection and audit distinction | `COVERED_BY_EXISTING_EXAMPLE`; no contract change |
| `BNK-SPEC-0104` | DDF/Exadata alias-resolution candidate; query amplification/efficiency | `EXTEND_EXAMPLE_SPEC`; terminology mapping source-gated |
| `BNK-SPEC-0105` | external identity provider/control boundary and localized UX considerations | `COVERED_BY_EXISTING_EXAMPLE`; endpoints remain unknown |
| `BNK-SPEC-0106` | connection/capacity/backpressure/failure-load evidence | `EXTEND_EXAMPLE_SPEC`; thresholds not invented |
| `BNK-SPEC-0107` | licensed-node scheduling analogy is not merged; multi-cluster does not prove HA | `COVERED_BOUNDARY`; routing remains unknown |

## Candidate Spec Extension Matrix

Estos objetos son candidatos a **thin custom layers**. Ninguno recibe `AAI-SPEC` en 3C.

| Candidate object | Forma candidata | Home spec(s) | Standard/overlay hypothesis | 3D decision question | Estado |
|---|---|---|---|---|---|
| Work & Session Metamodel | profile/model section | 0009 + 0005/0010/0036 | CMMN/BPMN concepts + custom identity/receipts | ¿qué semántica puede reutilizarse sin perder taskId/evidence? | `EXTENSION_DRAFT` |
| Loop Definition / Instance | profile + contract | 0018/0019/0029/0037 | BPMN/CMMN/DMN composed | ¿se necesita engine o sólo gobernanza/modelo? | `RESEARCH_REQUIRED` |
| Software Architecture Profile | profile/registry | 0021/0022/0034 | CALM + Spring Modulith + ArchUnit + static analysis | ¿qué representa cada nivel y cómo se evita duplicación? | `RESEARCH_REQUIRED` |
| Terminology & Identity Registry | registry/profile | 0007/0016/0024/0025 | SKOS/PROV/JSON Schema candidate mapping | ¿qué estándar cubre términos, aliases, provenance y temporalidad? | `RESEARCH_REQUIRED` |
| Search Capability Profile | profile/adapter contract | 0005/0007/0008/0023/0032 | source-native queries + canonical query + ranking profile | ¿qué queda canónico y qué queda por adapter? | `RESEARCH_REQUIRED` |
| Consistency/Conformance Profile | policy + evidence contract | 0008/0014/0021/0022/0029 | CALM/conformance/tests/OTel evidence composition | ¿cómo tipar checks y receipts sin engine nuevo? | `RESEARCH_REQUIRED` |
| Research Protocol | process/profile/registry | 0010/0018/0020/0027/0029/0033 | research method + evidence/provenance standards | ¿qué criterio se pre-registra y qué approval aplica? | `RESEARCH_REQUIRED` |
| Technology Lifecycle Directive | directive/watch/exception | 0018/0019/0027/0030/0032 | corporate lifecycle overlay | ¿qué es estándar público vs baseline corporativo? | `BLOCKED_BY_SOURCE + RESEARCH_REQUIRED` |
| Corporate Capability Discovery | registry/process profile | 0001/0011/0017/0032 | corporate overlay over capability catalog standards | ¿cuál es el catálogo institucional y authority? | `BLOCKED_BY_SOURCE` |
| Operating & Commercial Profile | profile/registry | 0013/0027/0032/0033 | deployment/service/license/contract standards composition | ¿cómo modelar effective capability y control boundary? | `RESEARCH_REQUIRED` |
| Country Architecture Profile | profile/knowledge boundary | 0001/0013/0024/0033 + BNK-0001 | corporate overlay by jurisdiction | ¿qué se comparte y qué queda aislado por país? | `BLOCKED_BY_SOURCE` |
| External Provider Register | registry | 0013/0027/0032/0033 | supplier/service/SLA/control mapping | ¿qué identifiers/contracts oficiales existen? | `BLOCKED_BY_SOURCE` |
| Reliability Evidence Profile | profile/contract | 0002/0021/0022/0026/0029/0031 | SRE/reliability standards + workload evidence | ¿qué prueba HA/resilience y con qué thresholds? | `RESEARCH_REQUIRED + BLOCKED_BY_SOURCE` |
| Audit Capability Profile | corporate overlay | 0006/0028/0029/0032 + BNK | bank pattern + audit standards | ¿Architecture AI reutiliza Pistas y Bitácoras? | `BLOCKED_BY_SOURCE` |
| System Efficiency Profile | profile/quality gate | 0002/0021/0022/0029 | measurement/load/capacity standards | ¿qué metrics/models son obligatorios por change type? | `RESEARCH_REQUIRED` |
| Human-AI Experience Profile | profile/view routing | 0003/0010/0034 | UX/accessibility/Human-AI standards | ¿qué journeys/personas/gates son canonical? | `RESEARCH_REQUIRED` |
| Language & Localization Profile | profile/registry | 0010/0024/0034/0035 | BCP 47/CLDR/i18n standards candidate | ¿cómo versionar términos y authoritative translations? | `RESEARCH_REQUIRED` |
| Publication Projection Profile | profile/contract | 0004/0008/0012/0034 | docs-as-code/model/view/render standards | ¿qué information type vive en cada home? | `RESEARCH_REQUIRED + BLOCKED_BY_SOURCE` |
| Repository Separation Assessment | decision profile | 0012/0014/0030/0034 | governance overlay | ¿qué evidencia activa extract candidate/required? | `PROPOSAL` |
| Threat Model Projection | projection/package | 0002/0013/0027/0028/0033/0034 | OWASP/STRIDE/LINDDUN/tool formats | ¿qué modelo interoperable minimiza semántica custom? | `RESEARCH_REQUIRED` |
| AI Use Case Registry | registry/policy | 0011/0019/0020/0022/0029 | AI risk/model lifecycle standards | ¿qué evidence, baseline and promotion gates apply? | `RESEARCH_REQUIRED` |
| Architecture AI Harness | architecture view/composition | all relevant Specs | composed standards and corporate policies | ¿es sólo una view o queda una thin integration contract? | `DEFERRED_TO_3E` |
| Confluence Capability Benchmark | research protocol/result | 0023/0032/0034/0035 | official MCP + REST/API behavior | ¿qué mechanism gana por use case? | `RESEARCH_REQUIRED + BLOCKED_BY_SOURCE` |

## Resultado de deduplicación preliminar

1. `AAI-SPEC-0009` absorbe el Work & Session Metamodel; no hay Specs por sesión, checkpoint o handoff.
2. Loop Engineering no se convierte en engine/Spec hasta evaluar BPMN/CMMN/DMN y su relación con 0018/0019/0037.
3. Software architecture governance compone modelo lógico, módulo Java, constraint ejecutable, análisis estático y Graph; no hay ClassSpec.
4. Identity, terminology, search, consistency, research, lifecycle, country, provider, reliability, audit, UX, language, publication, threat y AI registries se mantienen como perfiles/overlays candidatos.
5. Harness es una vista/composición institucional de Specs existentes, no un duplicado monolítico.
6. Ninguna contextual fact bancaria fue promovida a una Spec canónica nueva o política corporativa.

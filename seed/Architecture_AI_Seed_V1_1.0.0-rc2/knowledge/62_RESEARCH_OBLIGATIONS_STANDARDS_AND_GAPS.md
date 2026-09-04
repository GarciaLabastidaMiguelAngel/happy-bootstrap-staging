# 62 — Research Obligations, Standards/Reuse Candidates & Knowledge Gaps

## Control

| Campo | Valor |
|---|---|
| `artifact_id` | `HAPPY-KNOW-62` |
| `status` | `DRAFT` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `research_executed_in_3C` | `NO` |
| `adoption_decisions_created` | `NO` |
| `source_basis` | existing standards map + 3C directives; versions not reverified here |

Las referencias listadas son candidatos de investigación o elementos ya registrados en `AAI-DOC-0202`. Referencia externa no equivale a adopción corporativa. Devin puede realizar investigación, pero criterios/quality gates deben existir antes de observar resultados.

## Research Obligation register additions

| RO ID | Question | Why needed / capability | Decision enabled | Preferred primary sources | Acceptance criteria | Status |
|---|---|---|---|---|---|---|
| `RO-3C-001` | ¿BPMN, CMMN y DMN cubren process/case/decision semantics de Work/Loop Engineering? | evitar Loop/Planning engine custom | composed standard vs thin custom loop/work contract | OMG specifications + reference implementations | coverage mapping, gaps, lifecycle/identity/evidence fit, complexity and interoperability comparison | `RESEARCH_REQUIRED` |
| `RO-3C-002` | ¿Cómo se compone CALM con Spring Modulith, ArchUnit y static analysis? | logical→module→executable constraint→code/Graph conformance | Software Architecture Profile | FINOS CALM, Spring Modulith, ArchUnit and selected analyzer official docs | no duplicate semantics; example mapping; repo spike plan; extension points and limitations | `RESEARCH_REQUIRED` |
| `RO-3C-003` | ¿Qué estándares cubren canonical entity identity, aliases, term lifecycle, provenance and supersession? | entity/terminology model | registry/profile structure | W3C PROV, SKOS and relevant identifier vocabularies | map entities/relations/status/temporality/human correction; identify real custom gap | `RESEARCH_REQUIRED` |
| `RO-3C-004` | ¿Cómo separar canonical query/search profile de CQL y otros source adapters? | retrieval consistency | canonical query and adapter contract | Confluence CQL/API, information-retrieval primary docs, existing MCP/API specs | seven zero-result causes, permission behavior, freshness, pagination and evidence mapping | `RESEARCH_REQUIRED + BLOCKED_BY_SOURCE` |
| `RO-3C-005` | ¿Qué standard composition soporta consistency/conformance/freshness/correctness receipts? | continuous congruence | conformance profile | CALM, JSON Schema, architecture-test and OTel sources | typed assertion/result/evidence model; Java drift fixture; no custom engine unless gap | `RESEARCH_REQUIRED` |
| `RO-3C-006` | ¿Qué research method/record model da reproducibility, precommitted criteria, conflict and peer review? | institutional research engineering | Research Protocol | authoritative research/evidence-management methods and PROV | required fields, scheduled/event triggers, quality gates, inconclusive outcome and promotion boundary | `RESEARCH_REQUIRED` |
| `RO-3C-007` | ¿Qué lifecycle/support sources y corporate overlays gobiernan Java/Spring/dependencies? | technology evolution/obsolescence | technology directive/watch/exception | vendor/project support policies, Java release/support sources, corporate baseline | identity/version/source/freshness/triggers/exception/migration/test criteria | `RESEARCH_REQUIRED + BLOCKED_BY_SOURCE` |
| `RO-3C-008` | ¿Qué capability catalog/standard puede representar providers, availability, constraints, cost/license and effective capability? | Corporate Capability First | capability discovery profile | corporate catalog sources; relevant capability modeling standards | required capability→available fit/gap trace; authority/version/country; no product-first bias | `BLOCKED_BY_SOURCE + RESEARCH_REQUIRED` |
| `RO-3C-009` | ¿Cómo modelar deployment/consumption/control/shared responsibility/license/support/exit? | operating/commercial intelligence | operating profile | authoritative cloud/service/licensing/contract modeling sources | enumerate modes, control boundaries, contractual constraints, effective capability and exit evidence | `RESEARCH_REQUIRED` |
| `RO-3C-010` | ¿Qué evidence demuestra availability/resilience/capacity for multi-cluster systems? | reliability profile | SLO/RPO/RTO/failure test model | SRE/reliability engineering primary references and corporate standards | distinguish compute/state/traffic/failure domains; test scenarios; no count-based HA claim | `RESEARCH_REQUIRED + BLOCKED_BY_SOURCE` |
| `RO-3C-011` | ¿Puede Architecture AI reutilizar Pistas y Bitácoras para audit? | avoid parallel audit capability | reuse/extend/reject decision | governed bank capability/interface/security/retention docs | owner, schema, topics, retention, classification, failure, entitlement and topology evidence | `BLOCKED_BY_SOURCE` |
| `RO-3C-012` | ¿Qué measurement/capacity/FinOps methods apply to amplification and system-boundary efficiency? | solution efficiency | efficiency quality gate | authoritative performance/capacity/FinOps references + bank workload policy | workload/scenario model, measurable outputs, uncertainty, pass/conditional/research outcome; no invented thresholds | `RESEARCH_REQUIRED` |
| `RO-3C-013` | ¿Qué UX/accessibility/Human-AI standards and methods fit roles/journeys/decision trust? | product experience | experience profile | W3C/WAI and authoritative Human-AI/UX sources | persona/journey mapping, accessibility, explainability/trust/control/resume and test criteria | `RESEARCH_REQUIRED` |
| `RO-3C-014` | ¿Qué standards cover locale IDs, formatting, terminology, translation memory and authoritative translation? | language governance | localization profile | IETF language-tag and Unicode/CLDR primary sources plus approved terminology sources | semantic invariance, non-translatable identifiers, fallback, validation and versioning | `RESEARCH_REQUIRED` |
| `RO-3C-015` | ¿Qué interoperable threat-model representation minimizes custom semantics? | CISO threat output | Threat Model Projection/Package | OWASP, STRIDE sources, LINDDUN, Threat Dragon, OWASP model schemas, pytm, Microsoft TMT official sources | architecture→threat/control/risk/evidence mapping, change trigger, machine and CISO views, round-trip limits | `RESEARCH_REQUIRED` |
| `RO-3C-016` | ¿Qué governance standard/profile applies to AI Use Case Registry and model lifecycle? | AI/ML use-case governance | registry, risk and promotion gates | NIST AI RMF, ISO candidates where licensed/adopted, model-card/evaluation primary sources | non-AI baseline, data/metric/risk/authority/shadow/promotion/rollback fields; policy remains authority | `RESEARCH_REQUIRED` |
| `RO-3C-017` | ¿El custom WebSocket “MCP” cumple el official MCP contract and which transport is appropriate? | MCP interoperability/security | 0035 extension and migration decision | official MCP specification + Spring AI MCP docs + repo implementation | protocol/version/transport/auth/error/tool/resource capability matrix and conformance tests | `RESEARCH_REQUIRED + BLOCKED_BY_SOURCE` |
| `RO-3C-018` | ¿MCP o REST/API resuelve mejor cada Confluence use case? | correct interactive vs bulk integration | connector mechanism per use case | official Confluence API/CQL docs, available MCP connector docs, observed org capabilities | exploration, delta, pagination, attachments, versions, permissions, rate/error, freshness, cost benchmark | `RESEARCH_REQUIRED + BLOCKED_BY_SOURCE` |
| `RO-3C-019` | ¿Qué source/projection/render/publication model avoids bidirectional drift? | documentation governance | publication profile | Git, Confluence, diagram/docs-as-code and provenance primary sources | information-type authority matrix, conflict model, derivative digest/version and publication receipt | `RESEARCH_REQUIRED` |
| `RO-3C-020` | ¿Qué SBOM/AIBOM/supply-chain standard ya soporta DevSecOps? | dependency/supply-chain governance | choose reuse/configure/defer | SPDX, CycloneDX, SLSA and corporate DevSecOps sources | tool support, component/model coverage, signatures/provenance, vulnerability and lifecycle mapping | `RESEARCH_REQUIRED + BLOCKED_BY_SOURCE` |

### Oleada 3E additions — standards fit delegated, not executed

| RO ID | Question | Why needed / capability | Decision enabled | Preferred primary sources | Acceptance criteria | Status |
|---|---|---|---|---|---|---|
| `RO-3E-001` | ¿Qué parte de capability decomposition/planning puede reutilizar HTN u otros modelos jerárquicos, y qué valor/limitaciones tienen Tree/Graph of Thoughts? | evitar un planner/decomposition model propietario o confundir reasoning technique con institutional Work model | composition/defer/thin-layer decision for Tree decomposition and Planning/Sprint | specifications/papers and official framework docs; existing 0009/0037 sources | map objective→capability→work, dependencies, replanning, authority/evidence, determinism, cost and portability; separate planning semantics from LLM prompting | `RESEARCH_REQUIRED`; post-handoff |
| `RO-3E-002` | ¿SACM/GSN u otros assurance-case standards cubren Claim→Argument→Evidence para Architecture AI? | avoid custom assurance semantics and strengthen promotion/evidence | standard-native/composed/thin-layer assurance profile | OMG SACM, authoritative GSN sources and compatible tooling docs | cover claims, arguments, evidence, counterevidence, status, provenance, authority, temporal validity, exchange and tool support; identify actual gap | `RESEARCH_REQUIRED`; post-handoff |
| `RO-3E-003` | ¿Cómo aplica ISO/IEC/IEEE 42010 al Initial Knowledge Model, viewpoints, Domain UX and architecture projections? | distinguish architecture description/model/view/viewpoint and improve interoperability | reuse/profile decision with CALM/C4/arc42 | authoritative 42010 material available under applicable access plus official framework mappings | concept mapping, overlaps, required institutional overlay, view consistency and migration impact; no automatic adoption | `RESEARCH_REQUIRED`; post-handoff |
| `RO-3E-004` | ¿Qué standards/patterns support federated capability ownership, non-intrusive introspection and cross-domain governance? | preserve organizational authority while aligning reusable capabilities | federated capability registry/profile vs composed existing models | authoritative enterprise/capability/governance standards plus governed organizational sources | model domain/owner/authority/local variant/shared capability/promotion, permissions and conflicts; fit/cost/license/interoperability/thin-layer analysis | `RESEARCH_REQUIRED + BLOCKED_BY_SOURCE(SER-014)` |

### Seed Acceptance addition — deterministic assurance and projection toolchain

| RO ID | Question | Why needed / capability | Decision enabled | Preferred primary sources | Acceptance criteria | Status |
|---|---|---|---|---|---|---|
| `RO-ACCEPT-001` | ¿Qué combinación mínima de herramientas existentes puede demostrar los niveles de assurance L0–L7 y soportar el pipeline canonical model→view→diagram/document sin trasladar semántica ni autocertificación al LLM? | deterministic assurance, architectural fitness functions and Self-Knowledge/Documentation | reuse/compose/thin-layer/defer disposition for ArchUnit, Structurizr, docToolchain, Testcontainers, OpenRewrite, policy-as-code and diagram/document generation candidates | official project specifications/documentation, licenses and reproducible JVM examples; observed repository/build constraints after `SER-002/006` | capability-by-capability fit matrix; maturity/license/security/local-first/OpenShift/portability/cost assessment; deterministic outputs and evidence mapping; replacement/exit path; explicit non-adoption outcomes; repository-backed spike plan | `RESEARCH_REQUIRED`; post-handoff; partly `BLOCKED_BY_SOURCE(SER-002/006)` |

## rc2 research delta — no research executed

| RO ID | Question | Why needed / capability | Decision enabled | Preferred primary sources | Acceptance criteria | Status |
|---|---|---|---|---|---|---|
| `RO-RC2-001` | Which graph modeling strategy satisfies representative Architecture AI questions before physical schema/technology selection? | 0025; CAP-3C-004/005/006; conceptual model is not database technology | conceptual model/query requirements/fitness first; physical implementation only after SER-008 and evidence | existing Happy graph corpus; official modeling/query/constraint/provenance specifications and authoritative graph-engine docs evaluated later | GRAPH_MODELING_RESEARCH_RECEIPT with preregistered target questions, traversal workload, identity/resolution, node vs property, relationship vs intermediate entity, cardinality/supernodes, tree vs graph, authority/provenance/evidence, temporal current/past/target states, canonical vs derived edges, constraints, projections/indexes, query-performance benchmarks, migration/model evolution, property-graph vs semantic/ontology needs; fit/license/cost/portability/security/thin-layer comparison; inconclusive/reject allowed | `RESEARCH_REQUIRED + BLOCKED_BY_SOURCE(SER-008)`; before physical Graph design |

Extensions preserve existing IDs:

- **RO-3C-019:** evaluate the Git→semantic delta→candidate projection→verification→atomic consumer-visible promotion cycle; snapshot identity, rebuild equivalence, conflict/write-back and receipts. Compare configuration delivery (Spring Cloud Config or equivalent **candidate**) against knowledge reconciliation semantics. Decide standard composition/thin custom boundary before coding, not automatic adoption.
- **RO-3C-016:** each diagnostic ML candidate must preregister problem, deterministic baseline, governed data/labels or ground truth, metric and justified improvement threshold, false-positive/negative costs, explainability, fallback, authority/privacy/security, retraining/drift, evidence and rollback. No invented numeric thresholds; benchmark against baseline before promotion. Correlates EXP-RC2-002 / FX-RC2-E.
- **RO-3C-012:** extend measurement to infrastructure/capacity/environments/replicas/JVM/storage/licenses, duplication, operational/incident effort, discovery/review/time-to-decision, reuse and avoided duplication. Cost/value claims require source, scope, uncertainty and attribution; not merely token counts.

Source and acceptance detail: [rc2 reconciliation](90_POST_RC1_RECONCILIATION.md). Total open Research Obligations: **26**. Framework names are not adopted standards. No Graph ADR is closed.

## Standard-substitution candidates (continued)

| Concern | Candidate standards/frameworks | Intended reuse classification to decide | Thin custom layer likely still needed | Current status |
|---|---|---|---|---|
| architecture model | CALM, C4, ArchiMate, arc42 | `STANDARD_NATIVE/COMPOSED_STANDARD` | institutional IDs, provenance, country/capability overlay | research/adoption reconciliation |
| work/process/case/decision | BPMN, CMMN, DMN | `STANDARD_NATIVE/EXTENDED/COMPOSED` | taskId, receipts, autonomy/evidence profile | research required |
| contracts | JSON Schema, OpenAPI, AsyncAPI | `STANDARD_NATIVE/EXTENDED` | institutional envelope/status/policy fields | 0009/0010 schemas exist; event/API baseline open |
| agent interaction | MCP | `STANDARD_NATIVE/EXTENDED` | policy, capability resolution, institutional context | official conformance/repo source blocked |
| provenance | W3C PROV | `STANDARD_EXTENDED` | knowledge states, authority, source classifications | existing map says extend |
| architecture conformance | CALM + Spring Modulith + ArchUnit + static analysis | `COMPOSED_STANDARD` | mapping/exception/evidence profile | research + repo spike |
| observability/evaluation | OpenTelemetry core/GenAI semconv | `STANDARD_EXTENDED` | task/package/tool/policy/evidence correlations | adoption/semantic maturity gate |
| security controls/evidence | OSCAL candidate + OWASP/NIST/PCI overlays | `COMPOSED_STANDARD/CORPORATE_OVERLAY` | Architecture AI control applicability and receipts | research + corporate policy blocked |
| threat modeling | OWASP/STRIDE/LINDDUN/tool formats | `COMPOSED_STANDARD` | canonical architecture projection and CISO views | research required |
| UX/accessibility | W3C/WAI and Human-AI/UX references | `STANDARD_EXTENDED` | role-specific journeys/content/routing | research required |
| localization | BCP 47/CLDR/terminology/translation-memory mechanisms | `COMPOSED_STANDARD` | canonical semantic object/authority profile | research required |
| AI governance | NIST AI RMF and applicable corporate/ISO overlays | `STANDARD_EXTENDED/CORPORATE_OVERLAY` | use-case registry, baseline and policy linkage | research/adoption blocked |
| architecture description/viewpoints | ISO/IEC/IEEE 42010 | `STANDARD_EXTENDED/COMPOSED_STANDARD` | institutional capability, authority, provenance and projection profile | `RO-3E-003`; not researched/adopted in 3E |
| assurance cases | OMG SACM, GSN | `STANDARD_NATIVE/EXTENDED/COMPOSED` | knowledge states, authority, evidence/promotion links | `RO-3E-002`; not researched/adopted in 3E |
| hierarchical capability/work decomposition | HTN and relevant planning models; Tree/Graph of Thoughts only as reasoning candidates | `STANDARD/FRAMEWORK/RESEARCH_ONLY` | stable institutional IDs, authority, evidence, state and Work lifecycle | `RO-3E-001`; no planner selected |
| federated organizational capability governance | relevant capability/enterprise governance standards | `COMPOSED_STANDARD/CORPORATE_OVERLAY` | actual owners/authorities/local variants and promotion policy | `RO-3E-004 + SER-014` |
| deterministic assurance and model/view/document pipeline | ArchUnit, Structurizr, docToolchain, Testcontainers, OpenRewrite, policy-as-code and applicable generation tooling | `COMPOSED_STANDARD/THIN_CUSTOM_LAYER/DEFER` | institutional claims, stable IDs, authority, promotion state and evidence receipts | `RO-ACCEPT-001`; candidates only, no adoption |
| supply chain | SPDX/CycloneDX/SLSA | `STANDARD_NATIVE/COMPOSED` | corporate DevSecOps integration | capability source blocked |
| banking capability | BIAN + corporate catalog | `STANDARD_EXTENDED/CORPORATE_OVERLAY` | actual bank capability IDs/contracts/country truth | SER-007 |

## Knowledge Gap additions

Estos gaps se incorporan al canonical gap register; ninguno se cierra por la existencia de este documento.

| Gap ID | Gap | Type | Blocks / effect | Required action |
|---|---|---|---|---|
| `HK-GAP-0027` | Seed root/final manifest and BootstrapReceipt schema not finalized or executed | SPEC/VALIDATION_GAP | G3/G10/G11 | finalize after repo/runtime capability evidence; execute acceptance |
| `HK-GAP-0028` | self-sufficiency priority weights/algorithm and real eligible backlog absent | MODEL_GAP | exact autonomous next work | recover 0037/repo/runtime; validate prioritization |
| `HK-GAP-0029` | initial knowledge layers/vectors are derived, not validated ontology | MODEL_GAP | model evolution/queries | use Seed and govern model evolution; do not freeze |
| `HK-GAP-0030` | Loop Engineering standard fit and runtime semantics unknown | RESEARCH_GAP | loop/process implementation | RO-3C-001 |
| `HK-GAP-0031` | software architecture logical/module/rule/code composition unvalidated | RESEARCH/IMPLEMENTATION_GAP | conformance automation | RO-3C-002 + SER-002 |
| `HK-GAP-0032` | identity/terminology canonical registry, authority and evaluation dataset absent | MODEL/SOURCE_GAP | aliases/entity resolution/localization | RO-3C-003 + SER-001/007 |
| `HK-GAP-0033` | retrieval adapters, canonical query, index freshness and zero-result behavior not benchmarked | SPEC/TEST_GAP | reliable context/search | RO-3C-004 + connector sources |
| `HK-GAP-0034` | consistency/congruence assertions and receipts not cataloged/executed | SPEC/TEST_GAP | G4/G8/G9 | RO-3C-005 + repo/runtime |
| `HK-GAP-0035` | research protocol/quality gate not formalized | GOVERNANCE_GAP | trustworthy standards/technology decisions | RO-3C-006 |
| `HK-GAP-0036` | technology lifecycle/corporate approval sources absent | SOURCE_GAP | LTS/obsolescence directives | RO-3C-007 + SER-007/011 |
| `HK-GAP-0037` | operating/license/control/provider contracts not observed | SOURCE_GAP | effective capability/third-party risk | RO-3C-008/009 + SER-007 |
| `HK-GAP-0038` | MX cluster topology, replication, traffic, RPO/RTO and surviving capacity absent | BANKING/RELIABILITY_GAP | no HA/resilience claim | RO-3C-010 + governed evidence |
| `HK-GAP-0039` | Pistas y Bitácoras owner/schema/topics/retention/classification/topology unknown | BANKING/CAPABILITY_GAP | audit reuse decision | RO-3C-011 + SER-007 |
| `HK-GAP-0040` | Nginx license-management capability detail unknown | BANKING/COMMERCIAL_GAP | placement/compliance model | corporate platform/license source |
| `HK-GAP-0041` | Arcus and Quio identities/contracts/runtime/owners not observed | BANKING/EXTERNAL_GAP | provider/country dependency mapping | provider/contracts/catalog source |
| `HK-GAP-0042` | UX personas/journeys/accessibility and localization governance unvalidated | PRODUCT/RESEARCH_GAP | product experience/language profile | RO-3C-013/014 |
| `HK-GAP-0043` | threat-model interoperable schema/projection not selected | SECURITY/RESEARCH_GAP | CISO package automation | RO-3C-015 |
| `HK-GAP-0044` | AI Use Case Registry, datasets, baselines and promotion gates absent | AI/GOVERNANCE_GAP | ML/LLM capability adoption | RO-3C-016 |
| `HK-GAP-0045` | WebSocket “MCP” conformance and Confluence mechanism unknown | PROTOCOL/INTEGRATION_GAP | 0035 and connector execution | RO-3C-017/018 + SER-002/004 |
| `HK-GAP-0046` | staging identity/access observed but external write was rejected; no commit/clone receipt | ACCESS/DELIVERY_GAP | staging sync and final clone validation | SER-013; local ZIP remains valid transport |
| `HK-GAP-0047` | organizational domains, owners, authorities and capability inventories are not observed | SOURCE/AUTHORITY_GAP | federated/domain model cannot claim institutional truth | SER-014 |
| `HK-GAP-0048` | non-intrusive access, process and evidence boundaries per domain are unknown | SOURCE/SECURITY_GAP | Domain Introspection implementation | SER-002/004/007/009/014 |
| `HK-GAP-0049` | no Harness/execution history proves deterministic maturity candidates | EVIDENCE/IMPLEMENTATION_GAP | automation readiness and migration | post-handoff observation/shadow tests |
| `HK-GAP-0050` | domain personas, journeys, permissions and UX projection rules are unvalidated | PRODUCT/AUTHORITY_GAP | Domain Workspace expansion | RO-3C-013 + SER-014 |
| `HK-GAP-0051` | assurance standard fit and exchange/tooling model are unresolved | RESEARCH_GAP | Claim/Argument/Evidence profile | RO-3E-002 |
| `HK-GAP-0052` | hierarchical decomposition/planning/reasoning standard fit is unresolved | RESEARCH_GAP | capability tree and Planning expansion | RO-3E-001 + SER-010 |
| `HK-GAP-0053` | `JavaFizz / SpecFizz` has no observable canonical definition | TERMINOLOGY/SOURCE_GAP | term cannot govern Java/Spec behavior | recover through SER-001; use existing explicit principles meanwhile |
| `HK-GAP-0054` | human-value transition and organizational operating-model authority are not observed | INSTITUTIONAL_GOVERNANCE_GAP | no organizational change can be approved | SER-014 + applicable human governance |

## Concepts deliberately not promoted to new Specs

| Concept | Current home/form | Why no new Spec in 3C |
|---|---|---|
| Seed/Architectural DNA | Seed model + invariant register | bootstrap/governance view, not runtime contract |
| Work/Session entities | extension of 0009 | same continuity objective and state/evidence boundary |
| Loop types/instances | capability/profile candidate | standards fit unknown; avoid custom engine |
| Software modules/classes | 0021/0022/0034 profile | no ClassSpec explosion; compose tools/standards |
| Alias/terminology/search/consistency | profiles/registries over knowledge Specs | cross-cutting semantics, not independent services yet |
| Research model | ResearchObligation expansion | process/profile must be deduplicated first |
| Technology/corporate directives | directive/watch/overlay | policy authority and sources absent |
| Country/provider/commercial model | profiles/registries/context | contextual truth and contracts source-gated |
| Reliability/efficiency | evidence/quality profiles | thresholds/workloads absent |
| Pistas y Bitácoras/Arcus/Quio/Nginx examples | BNK context/knowledge gaps | contextual evidence must not become policy/product Spec |
| UX/localization | product/language profiles | standards/persona research incomplete |
| Documentation/repository topology | 0012/0034 + assessment | governance views; physical repo absent |
| Threat modeling | projection/package candidate | custom semantics prohibited before research |
| AI use cases | registry candidates | no dataset/baseline/policy/evidence |
| Harness | composed institutional architecture | already spans policy/context/tools/tests/evidence; monolithic Spec would duplicate |
| Staging repository | handoff infrastructure record | temporary transport, not Architecture AI capability implementation |
| Federated Engineering Capability Model | extension of CAP-3C-009/022 and ownership vector | label/taxonomy unvalidated; avoid duplicate capability/metamodel |
| Domain Introspection | profile/contract candidate over 0001/0005/0007/0032 | implementation/access/source boundaries absent |
| Domain Workspaces | projections under CAP-3C-016/0034 | examples only; no separate truth or product catalog |
| deterministic maturity stages | routing/evolution model in 58/79 | execution forms, not independent services/Specs |
| Tree/Graph/Assurance/Loop | derived model-of-models synthesis | composes existing models; standards fit precedes any framework |
| Human Value Shift | strategic proposal under Target Operating Model | organizational authority/evidence absent |

## Research governance rule

Each research execution must record question, criteria fixed before results, method, primary sources, constraints/assumptions, alternatives, evidence, conflicts, reproducibility/freshness, conclusion, recommendation, decision enabled, quality gate and reviewer. `INCONCLUSIVE` is valid; post-hoc success criteria are not.

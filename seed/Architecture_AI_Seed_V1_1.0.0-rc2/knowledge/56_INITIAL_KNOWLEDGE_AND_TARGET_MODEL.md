# 56 — Initial Knowledge Model, Layers, Vectors & Target Map

## Control

| Campo | Valor |
|---|---|
| `artifact_id` | `HAPPY-KNOW-56` |
| `model_id` | `INITIAL_KNOWLEDGE_MODEL_V1` |
| `status` | `DERIVED_MODEL_DRAFT` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `canonicality` | classification proposal; entities/evidence retain their own authority |
| `invariant` | `INITIAL_KNOWLEDGE_MODEL != FINAL_KNOWLEDGE_MODEL` |

Este modelo organiza el conocimiento visible en Happy para el bootstrap. No reemplaza el Knowledge Graph, el catálogo de Specs ni una ontología institucional. Las capas y vectores pueden evolucionar mediante evidencia, compatibilidad y migración.

## Layers recuperadas

| Layer ID | Layer candidata | Contenido observado | Ejemplos / límites | Estado |
|---|---|---|---|---|
| `L01` | Physical & Infrastructure | workstation, data center/site/provider, compute/resource limits | México physical context y Quio son contextuales; topology incompleta | `DERIVED / PARTIAL` |
| `L02` | Network & Connectivity | zones, gateways, firewalls, ports, loopback, routes, external connectivity | API gateways, NodePort/Control-M, network boundaries; contracts parciales | `DERIVED / PARTIAL` |
| `L03` | Runtime & Compute | JDK, processes, containers, clusters, sessions, capacity | Java 21 target, Java 8 observed report, OpenShift, Devin runtime | `DERIVED / SOURCE_GATED` |
| `L04` | Deployment & Distribution | local install, packaging, executable, update, artifact repositories, centralization | workstation-first, installer/update target, JFrog candidate role | `DERIVED / PARTIAL` |
| `L05` | Platform & Corporate Capabilities | shared platforms, security, audit, API access, messaging and provider capabilities | Gravity Plus, Cipher, Pistas y Bitácoras, Redis/Kafka/MQ/OpenShift | `DERIVED / BANK_SOURCE_GATED` |
| `L06` | Applications, Services & Workflows | Architecture AI services, banking applications, modules, APIs, flows, external services | Context Resolver, Projection Manager, DTO/StarPass/examples | `DERIVED / PARTIAL` |
| `L07` | Data & Integration | stores, schemas, events, APIs, adapters, replication, audit data | SQLite/Infinispan/Graph; Oracle/Exadata/Redis/Kafka/Scality examples | `DERIVED / PARTIAL` |
| `L08` | Knowledge & Context | sources, claims, evidence, provenance, canonical knowledge, Graph/RAG/indexes, Work Packages | 0004/0005/0007/0008/0024/0025 | `DESIGN_COVERED_HIGH` |
| `L09` | Intelligence & Agentic Execution | Devin, agents, Skills, Tools, MCP, reasoning, planning, loops, harness, evaluation | identities/catalogs/runtime incomplete | `DERIVED / SOURCE_GATED` |
| `L10` | Product Experience | Desktop, chat, workspace, search, graph/architecture views, accessibility/localization | chat is not entire product; specialized surfaces candidates | `DERIVED / PARTIAL` |
| `L11` | Organizational & Geographic | owners, expertise, teams, countries, jurisdictions, legal entities, external providers | Mexico first; other country truth separated | `DERIVED / SOURCE_GATED` |
| `L12` | Governance, Directive & Executive | decisions, ADRs, policies, risks, controls, architecture reviews, CISO/Chief views | authority and policies must be evidenced | `DESIGN_COVERED / INSTITUTIONAL_SOURCE_GATED` |

## Vectors transversales recuperados

| Vector ID | Vector | Evidence in Happy | Completeness requirement | Estado |
|---|---|---|---|---|
| `V01` | Security | trust boundaries, tool policy, STRIDE, PCI/fraud/identity | threats, controls, tests, approvals, residual risk | `HIGH_DESIGN / LOW_RUNTIME` |
| `V02` | Audit | receipts, state/evidence ledger, banking audit pattern | immutable attribution, retention/classification, failure behavior | `PARTIAL` |
| `V03` | Provenance | source/evidence/claims/commits/digests | trace every material statement and derivative | `HIGH_DESIGN` |
| `V04` | Risk | risk/finding/treatment/acceptance concepts | owner, authority, evidence, status, effectiveness | `PARTIAL_HIGH` |
| `V05` | Observability | task/tool/package correlation, metrics/logs/traces | implemented telemetry, privacy/redaction, receipts | `PARTIAL` |
| `V06` | Resilience & Recovery | projection rebuild, restart, idempotency, future HA | failure domains, RPO/RTO, surviving capacity, tests | `PARTIAL` |
| `V07` | Performance & Capacity | latency, throughput, amplification, backpressure, resources | workloads, thresholds, peak/failure behavior | `DISCOVERED` |
| `V08` | Cost / FinOps | token/capability cost, workstation/central trade-offs | total system cost and budget evidence | `PARTIAL` |
| `V09` | Compliance & Regulation | PCI, external obligations, controls, standards | applicable jurisdiction/policy/owner/version | `PARTIAL / SOURCE_GATED` |
| `V10` | Privacy & Classification | need-to-know, redaction, sensitive bank data | data inventory, purpose, retention and access evidence | `PARTIAL` |
| `V11` | Operations | scheduler, attention, readiness, support/ownership | runbooks, SLAs, incident/recovery evidence | `PARTIAL` |
| `V12` | Lifecycle & Obsolescence | state models, versions, upgrades, support/EOL | watches, exceptions, migration, rollback | `DISCOVERED` |
| `V13` | Ownership & Decision Authority | owner vs assignee/expertise; human gates | institutional role catalog and approvals | `PARTIAL / SOURCE_GATED` |
| `V14` | Automation & Autonomy | governed next-work/execution/state update | eligibility, budgets, verification and escalation | `DESIGN_DRAFT` |
| `V15` | Standards & Reuse | Native First, standards map, framework candidates | applicability/adoption/extension/custom gap | `PARTIAL_HIGH` |
| `V16` | Evidence & Evaluation | test/evidence taxonomy, assurance and gaps | reproducibility, comparison, promotion gates | `DESIGN_DRAFT` |
| `V17` | Maintainability | modular boundaries, technical debt, framework isolation | executable conformance and change impact | `DISCOVERED` |
| `V18` | UX/UI & Accessibility | Desktop/chat/views/personas/localization | journeys, usability, accessibility, trust calibration | `DISCOVERED` |

## Organizational operating context and placement semantics

The common governed model may grow to represent environments, clusters, infrastructure, networks, applications, deployments, delivery/ALM capabilities, teams, owners, authorities, workflows and policies. These are target entity families, not observed banking topology. Candidate relationship shapes include `Environment CONTAINS Cluster`, `Application DEPLOYED_TO Environment/Cluster`, `Deployment EXECUTED_THROUGH DeliveryCapability`, `Environment GOVERNED_BY Policy/Authority` and `Environment VALIDATED_BY Harness/Evidence`; every concrete instance remains source- and authority-gated.

Placement is modeled semantically before it is mapped to products: `CANONICAL_SOURCE`, `VERSIONED_SOURCE`, `BUILD_ARTIFACT`, `RUNTIME`, `OPERATIONAL_STATE`, `DERIVED_KNOWLEDGE`, `CACHE_OR_INDEX`, `EVIDENCE`, and `LOCAL_USER_STATE`. These are model candidates for reconciliation, not a frozen storage taxonomy. Git/OpenShift/database mappings require observed institutional evidence; visibility or technical access does not confer authority.

The Self-Model therefore spans software and organizational operating context, while preserving `OBSERVATION != INSTITUTIONAL_TRUTH` and `KNOWLEDGE != AUTHORITY`.

## Relationship vocabulary inicial

Se reutiliza el vocabulario del Relationship Map y se agregan relaciones conceptuales sin afirmar implementación:

- estructura: `PART_OF`, `CONTAINS`, `REALIZES`, `IMPLEMENTS`, `PROJECTED_IN`;
- dependencia: `DEPENDS_ON`, `ENABLES`, `USES`, `CALLS`, `CONSUMES`, `PRODUCES`;
- gobierno: `GOVERNS`, `SECURES`, `VALIDATES`, `APPROVES`, `CONSTRAINS`;
- información: `READS_FROM`, `WRITES_TO`, `PERSISTS_IN`, `DERIVED_FROM`, `EVIDENCED_BY`;
- operación: `TRIGGERS`, `MONITORS`, `ROUTES_TO`, `BLOCKS`, `UNBLOCKS`, `RESUMES`;
- evolución: `SUPERSEDES`, `EVOLVES_TO`, `REPLACES`, `DEPRECATES`, `MIGRATES_TO`.
- organización/federación: `OWNED_BY`, `AUTHORIZED_BY`, `OBSERVED_IN`, `KEPT_LOCAL`, `FEDERATES_WITH`, `ALIGNS_WITH`, `VARIANT_OF`;
- assurance: `CLAIMS`, `ARGUED_BY`, `SUPPORTED_BY`, `COUNTEREVIDENCED_BY`, `APPROVED_BY`.

La semántica exacta y cardinalidades deben ser versionadas; relación similar no implica equivalencia.

## Target Capability Map

El registro detallado está en `54_CROSS_CUTTING_CAPABILITY_INVENTORY.md`. Este mapa integra esas candidates con capabilities ya existentes.

| Capability family | Current roots | Target | Horizon | Principal dependencies | Enables |
|---|---|---|---|---|---|
| Institutional bootstrap | 0001/0003/0005, bootstrap skeletons | reproducible Seed bootstrap/receipt | `NOW/NEXT` | manifest, repo/runtime, exact Skills/Tools | current-state reconciliation |
| Durable work & planning | 0009/0010/0018/0037 | cross-session work, dependency-aware planning | `NOW/NEXT` | context, authority, events, SER-010 | autonomous continuation |
| Knowledge/context | 0004/0005/0007/0008/0024/0025 | governed evidence, retrieval, projections and model evolution | `NOW/NEXT/CONDITIONAL` | Git, sources, contracts, Graph/vector decisions | correct context and impact analysis |
| Policy/security/risk | 0006/0027/0028/0033 | action authorization, risk/control/threat evidence | `NOW/NEXT` | identity, corporate policy, tools, threat projection | safe execution/promotion |
| Verification/harness | 0020–0023/0029 | reproducible checks, evaluation, regression and evidence | `NEXT` | fixtures, repo/runtime, metrics | trustworthy autonomy and migration to deterministic |
| Agent/Skill/Tool/MCP | 0015–0017/0019/0035 | capability-resolved execution with evolution lifecycle | `NEXT/LATER` | catalogs, policy, official protocol, evaluation | execution and specialization |
| Documentation/publication | 0012/0014/0034 | author/version once; governed projections | `NOW/NEXT` | Git, renderers, connectors, conflict model | navigable institutional knowledge |
| Software architecture governance | 0021/0022/0034 | logical→module→rule→code/Graph conformance | `NEXT` | CALM/Modulith/ArchUnit research and repo | maintainability and drift detection |
| Operating/technology/infrastructure | 0026/0030/0031/0032 | lifecycle, commercial/control, packaging and selective centralization | `NEXT/LATER/CONDITIONAL` | workload, cost, security, support/license | sustainable runtime |
| Banking/country/external ecosystem | 0001/0002/0032/0033 + BNK | country-scoped capability/provider knowledge | `NEXT` | governed catalogs/owners/contracts | reuse-first architecture reasoning |
| Product experience/localization | 0003/0010/0034/0035 | audience-aware, accessible, localized specialized surfaces | `NEXT/LATER` | personas, terminology, UX standards | usable/trust-calibrated platform |
| Loop/model/AI evolution | 0018/0019/0029 + CAP-3C | evidence-based improvement and model change | `NEXT/LATER/EXPERIMENTAL` | Harness, research, policy, standards | continuous governed evolution |
| Federated domain evolution | 0001/0004–0007/0015–0017/0019/0024 + CAP-3C-009/022 | non-intrusive discovery, bidirectional learning, local/shared capability alignment | `NEXT/CONDITIONAL` | organization/authority catalogs, permissions, evidence | domain ownership preserved with cross-domain intelligence |
| Assurance & knowledge geometry | 0004/0020/0022/0024/0025/0029 + capability/dependency model | Tree decomposition + Graph relations + Claim/Argument/Evidence + Loop evolution | `NEXT` | standards fit, Harness and Graph source reconciliation | no-loss, explainable expansion and governed promotion |

## Model Evolution capability

`MODEL_USE → LIMITATION_OBSERVED → EVIDENCE → IMPACT_ANALYSIS → PROPOSED_MODEL_EVOLUTION → COMPATIBILITY/MIGRATION → VERIFICATION → NEW_MODEL_VERSION`.

Devin puede proponer nueva layer/vector/relation/capability, merge/split, hierarchical→capability/relationship replacement o hybrid model sólo si:

1. la limitación está evidenciada;
2. se identifica impacto sobre IDs, queries, Specs, schemas, history y projections;
3. existe plan de compatibilidad/migración/rollback;
4. tests/fixtures comparan versiones;
5. autoridad requerida aprueba la promoción;
6. el modelo anterior permanece trazable.

## Multi-vector reconciliation rule

Observaciones dispersas se agrupan por objetivo/capability, layer, vector, maturity y lifecycle. Cada fuente conserva provenance individual. Sólo se separan en Specs distintas cuando existen contratos, authority, lifecycle o interfaces materialmente independientes.

## Cross-cutting completeness candidate

Para cada capability se evalúa aplicabilidad de: Functional, Security, Audit, Provenance, Observability, Operations, UX, UI, Performance, Failure Modes, Recovery, Testing, Evidence, Cost, Governance, Privacy, Compliance, Evaluation, Resilience, Maintainability, Upgrade y Rollback.

Esta lista es un checklist de descubrimiento `DERIVED`; no todos los vectores aplican igual ni constituyen política bancaria. Omisiones se justifican como `NOT_APPLICABLE_WITH_RATIONALE`, no se silencian.

## 3E organizational and geometry extensions

No se crean layers ni vectors nuevos: `L11 Organizational & Geographic`, `L12 Governance/Directive/Executive`, `V13 Ownership & Decision Authority`, `V14 Automation & Autonomy`, `V16 Evidence & Evaluation` y `V18 UX/UI` ya cubren el nuevo delta.

La síntesis `TREE + GRAPH + ASSURANCE + LOOP` es una vista `DERIVED` sobre los modelos existentes:

- Tree descompone objetivos/capabilities/work sin aislar cross-vectors;
- Graph conecta relaciones, sources, owners, dependencies, contradictions e impacts;
- Assurance estructura Claim→Argument/Rationale→Evidence sin sustituir authority;
- Loop usa resultados/fallas/evidence para elegir el siguiente estado o escalamiento.

`CONCEPTUAL_KNOWLEDGE_MODEL != GRAPH_PERSISTENCE_IMPLEMENTATION`. La síntesis no decide motor de grafo ni congela ontología.

La federación añade scope y authority a cada node/relationship. Un dominio puede poseer una capability local, consumir DNA/context común y aportar evidencia al centro sin transferir ownership. El catálogo organizacional real permanece `BLOCKED_BY_SOURCE(SER-014)`.

## Estado

`INITIAL_KNOWLEDGE_MODEL_ESTABLISHED = TRUE_DRAFT`

`MODEL_EVOLUTION_CAPABILITY = DISCOVERED_DESIGN`

`FINAL_ONTOLOGY_FROZEN = FALSE`

## Acceptance extension — governed self-model and projections

`Platform Mental Map` is not introduced as a canonical term. The required behavior is already covered by `INITIAL_KNOWLEDGE_MODEL + TARGET_CAPABILITY_MAP + GRAPH_RELATIONSHIPS + CONTEXT_ENGINEERING + PROJECTION_MANAGER` and is therefore classified `EXTEND_EXISTING_MODEL`.

The common governed model must support vertical traversal:

`North Star → Objective → Capability → Requirement → Decision → Spec → Component → Implementation → Test → Evidence`

and lateral traversal across vectors such as security, cost, risk, ownership, authority, operations, infrastructure, standards, observability, performance and organization. Audience responses are authorized projections of this model, not independent truth stores.

`COMMON_GOVERNED_MODEL → PURPOSE/AUDIENCE/AUTHORITY/LAYER/VECTOR FILTER → VERSIONED_CONTEXT_OR_VIEW_PROJECTION → HUMAN/AGENT/TOOL/DOCUMENT`.

The LLM may explain or synthesize a projection. It may not invent missing model nodes, relationships, authority or promotion state while answering. `SEMANTICS`, `VIEW_SELECTION` and `LAYOUT/RENDERING` remain separate: a layout problem cannot mutate canonical semantics.

Status: `SELF_MODEL_CONCEPT = DESIGN_COVERED / IMPLEMENTATION_NOT_OBSERVED`; audience projection behavior is prepared for acceptance in `70_SESSION_RESTART_AND_ACCEPTANCE_FIXTURES.md`.

## rc2 correlated knowledge projections

Graph and RAG are complementary projections of governed sources, not rival truth stores or a mandate to duplicate all content. Initial placement candidates, source-snapshot consistency and provenance are defined in [document 90](90_POST_RC1_RECONCILIATION.md) and 0005/0008 rc2 refinements. Layers/vectors stay unchanged; Graph modeling research precedes physical schema. No database engine or rigid ontology selected.

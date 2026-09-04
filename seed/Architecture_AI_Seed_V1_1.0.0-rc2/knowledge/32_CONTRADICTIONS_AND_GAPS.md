# 32 — Contradictions and Gaps

## Conflictos y evolución

### HK-CNF-0001 — Motor de grafo

- **topic:** local graph engine.
- **statement_a:** baseline reportado contiene JanusGraph 1.0.0 + Berkeley DB JE + Gremlin.
- **statement_b:** corrección/dirección posterior del usuario selecciona Neo4j Community para la plataforma Spring Boot local.
- **type:** `IMPLEMENTATION_DRIFT + TEMPORAL_EVOLUTION`.
- **possible_resolution:** ADR-0004 + spike + license/legal + migration evidence.
- **requires_human_decision:** yes.
- **current interpretation:** Neo4j es dirección actual condicionada; JanusGraph sigue siendo realidad reportada.

### HK-CNF-0002 — Java runtime

- **statement_a:** proyecto y decisión requieren Java 21.
- **statement_b:** Prompt 01 detectó Java 8 en el entorno efectivo.
- **type:** `IMPLEMENTATION_DRIFT`.
- **resolution:** pin JDK 21 y evidence build; no cambiar la decisión a Java 8.

### HK-CNF-0003 — GLUON / Gravity Plus

- **statement_a:** Wave 1 preservó ambigüedad y pidió no equiparar sin evidence.
- **statement_b:** corrección del usuario en contexto de proyecto indica que APIs GLUON y Gravity Plus son lo mismo.
- **type:** `TERMINOLOGY / CLARIFICATION`.
- **resolution:** la corrección más reciente prevalece; falta ID/nombre/scope del catálogo oficial.
- **requires_human_decision:** no para equivalencia conversacional; sí para canonical catalog mapping.

### HK-CNF-0004 — No custom RAG inicial vs diseño híbrido

- **statement_a:** Prompt 00 dice NO custom RAG/pgvector inicialmente.
- **statement_b:** diseños posteriores especifican Context Resolver con catálogo+léxico+grafo y vector opcional.
- **type:** `TEMPORAL_EVOLUTION`, no conflicto real.
- **resolution:** implementar ports/baseline sin vector; adoptar vector sólo si benchmark demuestra valor.

### HK-CNF-0005 — Infinispan “relaciones” vs graph store

- **statement_a:** Prompt 00 enumera relaciones/proyección en Infinispan.
- **statement_b:** modelo posterior asigna relaciones semánticas temporales al graph store.
- **type:** `ARCHITECTURE_CLARIFICATION`.
- **resolution:** Infinispan puede proyectar/read-model relations; graph es system especializado derivado; Git sigue canónico.

### HK-CNF-0006 — Prompt 03 y siguiente handoff

- **statement_a:** Wave 1 Prompt 03 está preparado.
- **statement_b:** nueva carta exige un Knowledge Pack completo, no entregas por oleada.
- **type:** `PROCESS_SUPERSESSION`.
- **resolution:** preservar Prompt 03/history; no enviarlo aislado; reemplazar input por consolidated pack cuando el usuario lo autorice.

### HK-CNF-0007 — Sprint/Planning vs “no implementation planning engine”

- **statement_a:** Prompt 00 evita construir un custom implementation-planning/orchestration engine que replique las capacidades generales de Devin.
- **statement_b:** la corrección actual exige preservar Sprint como capacidad/modelo de Planning y gestión del trabajo.
- **type:** `SCOPE_CLARIFICATION`, no conflicto real.
- **resolution:** Devin planifica y ejecuta; Architecture AI conserva objetivos, Work Items, dependencias, criterios, reglas, estado y evidencia. `AAI-SPEC-0037` no autoriza un agent runtime propio.
- **requires_human_decision:** no para la frontera; sí para detalles históricos aún no observados.

### HK-CNF-0008 — IDs de borrador vs secuencia real de prompts

- **statement_a:** los artefactos AAI-PRM-0002/0003 y el placeholder 0004 parecían formar una secuencia 02/03/04.
- **statement_b:** sólo los runs Devin 00/01 tienen confirmación; draft, ready, sent, executed y verified son estados distintos.
- **type:** `TERMINOLOGY + INCOMPLETE_INFORMATION`.
- **resolution:** preservar IDs como identidades documentales, asignar sequence `UNASSIGNED` y declarar `PROMPT_SEQUENCE_UNRESOLVED` hasta `SER-012`.

### HK-CNF-0009 — Blueprint

- **statement_a:** Blueprint puede aportar una proyección de estado actual/objetivo y etapas.
- **statement_b:** no existe evidencia de que haya sido una decisión canónica previa.
- **type:** `STATUS_CLARIFICATION`.
- **resolution:** mantener `PROPOSAL`; no usarlo como gate o requisito hasta validación humana.

## Gaps de fuente

| Gap ID | Gap | Type | Consequence | Required action |
|---|---|---|---|---|
| HK-GAP-0001 | Raw chats/export absent | SOURCE_GAP | message-level evidence incompleta | ingest export/chats |
| HK-GAP-0002 | Repo Architecture AI absent | SOURCE_GAP | no code/test/runtime verification | mount/provide repo |
| HK-GAP-0003 | Raw Devin baseline absent | SOURCE_GAP | status depende de derived summary | provide original file |
| HK-GAP-0004 | Bank official docs/catalogs absent | SOURCE_GAP | examples cannot become standards | ingest governed sources |
| HK-GAP-0005 | Full tool/skill catalog absent | IMPLEMENTATION_GAP | agent/tool correlation incomplete | repo inventory |
| HK-GAP-0006 | Historic Sprint/Planning model absent | SOURCE_GAP | 0037 cannot be formalized without loss/invention | execute SER-010 |
| HK-GAP-0007 | Real Devin prompt/run export absent | SOURCE_GAP | next sequence unresolved | execute SER-012 |
| HK-GAP-0008 | Bootstrap runtime/file conventions absent | CAPABILITY_GAP | AGENTS/Skills could be shaped incorrectly | repo + Devin capability discovery |
| HK-GAP-0009 | Standards/JSR/RFC corpus incomplete | SOURCE_GAP | no-loss standard/reference gate open | execute SER-011 |

## Gaps de especificación

| Gap ID | Gap | Consequence | Target spec |
|---|---|---|---|
| HK-GAP-0010 | AWP/tool/candidate schemas formalized but not implementation-mapped or executed | ambiguous runtime compatibility | 0004/0005/0006/0007 |
| HK-GAP-0011 | MCP error/auth/version model incomplete | interoperability/security risk | 0035 |
| HK-GAP-0012 | Envelope y lifecycle schemas DRAFT existen sólo para 0009/0010; producers/consumers/transport/ordering/retry/delivery/outbox no están observados | interoperabilidad y recovery siguen ambiguos | 0036 |
| HK-GAP-0013 | Agent/skill/tool identities incomplete | orchestration ambiguity | 0015/0017 |
| HK-GAP-0014 | Installer/update design superficial in current files | local adoption risk | 0030 |
| HK-GAP-0015 | OpenShift topology/triggers/SLO absent | premature central design | 0031 |
| HK-GAP-0016 | Bank capability map lacks official identity/owner | reinvention risk | BNK-0001/0002 |
| HK-GAP-0017 | Cuatro bootstrap skeletons ya están materializados, pero no son installable/runtime-aware ni están validados contra repo/Devin | passive-document handoff risk persiste | 0009/0010/0037 + bootstrap assessment |
| HK-GAP-0018 | No-Loss Review has partial/not-observed areas | false readiness risk | HAPPY_HANDOFF_READY gate |
| HK-GAP-0019 | Task/Question formal specs have no repository, persistence, API, migration or runtime mapping | contract drift may remain hidden | 0009/0010 |

## Implementation/test gaps

| Gap ID | Condition | State |
|---|---|---|
| HK-GAP-0020 | Specs with implementation unknown | widespread; see Matrix 27 |
| HK-GAP-0021 | Code reported without direct inspection | OPEN |
| HK-GAP-0022 | Tests reported written but not executed | BLOCKED/OPEN |
| HK-GAP-0023 | Runtime verification ~5% reported | OPEN |
| HK-GAP-0024 | Desktop not end-to-end | OPEN |
| HK-GAP-0025 | Projection implemented but not proven recoverable | OPEN |
| HK-GAP-0026 | Security/tool policy design without runtime enforcement evidence | OPEN |

## Seed V1 and cross-cutting gaps — Oleada 3C

| Gap ID | Gap | Type | Consequence / next action |
|---|---|---|---|
| HK-GAP-0027 | Seed root/final manifest and BootstrapReceipt schema not finalized or executed | SPEC/VALIDATION_GAP | G3/G10/G11 open; finalize after repo/runtime capability evidence |
| HK-GAP-0028 | Self-sufficiency priority weights/algorithm and real eligible backlog absent | MODEL_GAP | `PRIORITIZATION_MODEL_INCOMPLETE`; recover 0037/repo/runtime and validate |
| HK-GAP-0029 | Initial knowledge layers/vectors are derived, not validated ontology | MODEL_GAP | permit governed evolution; do not freeze classification |
| HK-GAP-0030 | Loop Engineering standards fit/runtime semantics unknown | RESEARCH_GAP | execute RO-3C-001 before custom engine/spec |
| HK-GAP-0031 | Logical/module/rule/code architecture composition unvalidated | RESEARCH/IMPLEMENTATION_GAP | RO-3C-002 + SER-002 |
| HK-GAP-0032 | Canonical identity/terminology registry, authority and evaluation dataset absent | MODEL/SOURCE_GAP | RO-3C-003 + SER-001/007 |
| HK-GAP-0033 | Canonical query/adapters/index freshness/zero-result behavior not benchmarked | SPEC/TEST_GAP | RO-3C-004 + connector sources |
| HK-GAP-0034 | Consistency/congruence assertions and receipts not cataloged/executed | SPEC/TEST_GAP | RO-3C-005 + repo/runtime |
| HK-GAP-0035 | Research protocol/quality gate not formalized | GOVERNANCE_GAP | RO-3C-006 |
| HK-GAP-0036 | Technology lifecycle/corporate approval sources absent | SOURCE_GAP | RO-3C-007 + SER-007/011 |
| HK-GAP-0037 | Operating/license/control/provider contracts not observed | SOURCE_GAP | RO-3C-008/009 + SER-007 |
| HK-GAP-0038 | MX cluster topology/replication/traffic/RPO/RTO/surviving capacity absent | BANKING/RELIABILITY_GAP | no HA claim; RO-3C-010 |
| HK-GAP-0039 | Pistas y Bitácoras owner/schema/topics/retention/classification/topology unknown | BANKING/CAPABILITY_GAP | audit reuse decision blocked; RO-3C-011 |
| HK-GAP-0040 | Nginx license-management capability detail unknown | BANKING/COMMERCIAL_GAP | corporate platform/license source required |
| HK-GAP-0041 | Arcus/Quio identities, contracts, runtime and owners not observed | BANKING/EXTERNAL_GAP | provider/country mapping stays contextual |
| HK-GAP-0042 | UX personas/journeys/accessibility/localization governance unvalidated | PRODUCT/RESEARCH_GAP | RO-3C-013/014 |
| HK-GAP-0043 | Threat-model interoperable schema/projection not selected | SECURITY/RESEARCH_GAP | RO-3C-015 |
| HK-GAP-0044 | AI Use Case Registry, datasets, baselines and promotion gates absent | AI/GOVERNANCE_GAP | RO-3C-016 |
| HK-GAP-0045 | WebSocket MCP conformance and Confluence mechanism unknown | PROTOCOL/INTEGRATION_GAP | RO-3C-017/018 + SER-002/004 |
| HK-GAP-0046 | Staging identity/access observed but external write was rejected; no commit/clone receipt | ACCESS/DELIVERY_GAP | SER-013; local ZIP remains valid transport |

## Oleada 3E gaps

| Gap ID | Gap | Type | Consequence / next action |
|---|---|---|---|
| HK-GAP-0047 | official organizational domains/owners/authorities/capabilities absent | SOURCE/AUTHORITY_GAP | SER-014; no institutional federation/ownership claim |
| HK-GAP-0048 | per-domain non-intrusive access/process/evidence boundaries unknown | SOURCE/SECURITY_GAP | inspect permissions and real workflows post-handoff |
| HK-GAP-0049 | no Harness/shadow history proves deterministic maturity | EVIDENCE/IMPLEMENTATION_GAP | candidates remain proposals; TST-0061 |
| HK-GAP-0050 | domain personas/journeys/permissions/UX projections unvalidated | PRODUCT/AUTHORITY_GAP | RO-3C-013 + SER-014 |
| HK-GAP-0051 | assurance standard/profile fit unresolved | RESEARCH_GAP | RO-3E-002; no custom assurance engine |
| HK-GAP-0052 | hierarchical planning/decomposition/reasoning fit unresolved | RESEARCH_GAP | RO-3E-001 + SER-010 |
| HK-GAP-0053 | `JavaFizz / SpecFizz` has no observable canonical definition | TERMINOLOGY/SOURCE_GAP | recover through SER-001; do not invent semantics |
| HK-GAP-0054 | human-value transition and operating-model authority absent | INSTITUTIONAL_GOVERNANCE_GAP | proposal only; real organizational change prohibited |

## Seed Acceptance gaps

| Gap ID | Gap | Type | Consequence / next action |
|---|---|---|---|
| HK-GAP-0055 | clean consumer/session has not executed BootstrapReceipt against this package | ACCEPTANCE_GAP | G3 remains PARTIAL; execute with authorized loader/session |
| HK-GAP-0056 | deterministic assurance and model/view/document toolchain fit is unselected | RESEARCH/IMPLEMENTATION_GAP | execute RO-ACCEPT-001 after SER-002/006; no framework adoption yet |
| HK-GAP-0057 | governed Self-Model/Projection/View Compiler runtime is not observed | IMPLEMENTATION_GAP | FX-L/M remain designed; expand post-handoff |
| HK-GAP-0058 | Self-Knowledge/Documentation compiler milestone is not implemented or executed | CAPABILITY_GAP | execute EXP-ACCEPT-001 after reconciliation |
| HK-GAP-0059 | governed ingestion→reconciliation→affected-projection→restart E2E is not implemented/executed | CAPABILITY/TEST_GAP | execute EXP-ACCEPT-002 and FX-N with governed test data |
| HK-GAP-0060 | executable-frontier derivation, safe parallel dispatch and post-evidence recalculation are not runtime-verified | PLANNING/TEST_GAP | SER-002/003/006/010 then EXP-ACCEPT-003 and FX-O/P |
| HK-GAP-0061 | actual environment/cluster/application topology and allowed operations are not observed | SOURCE/AUTHORITY_GAP | SER-002/007/009/014; no topology or permission inference |
| HK-GAP-0062 | institutional Git/CI/ALM/pipeline path and policy are not observed | SOURCE/DELIVERY_GAP | EXP-ACCEPT-004; discover/reuse before custom delivery |
| HK-GAP-0063 | cross-environment fixture execution and expected-variance evidence do not exist | ASSURANCE_GAP | EXP-ACCEPT-005 + FX-R after explicit access |
| HK-GAP-0064 | builder/architect/Chief/domain/federation readiness profiles lack owner-approved criteria and execution evidence | ADOPTION_GAP | EXP-ACCEPT-006 + FX-S; no readiness promotion |
| HK-GAP-0065 | multi-architect users/resources/allocation/isolation/review behavior is unobserved | WORK/ORGANIZATION_GAP | SER-002/010/014 + FX-T |
| HK-GAP-0066 | architect usability/cognitive-load evidence is absent | UX/ADOPTION_GAP | EXP-ACCEPT-009 + RO-3C-013 |
| HK-GAP-0067 | semantic placement categories are modeled, but concrete Git/runtime/store mappings remain source-gated | KNOWLEDGE/RUNTIME_GAP | SER-002/007; reconcile before promotion |

## Non-conflicts intentionally preserved

- Postgres/Redis installed locally ≠ decision to use them in V1.
- External standard applicable/researched ≠ corporate adoption.
- Bank solution example ≠ reusable platform standard.
- Tool/skill documented ≠ functioning capability.
- Devin output received ≠ reconciled/verified.
- Seed model/documentation exists ≠ reproducible bootstrap or handoff readiness.
- Staging repository exists/is public ≠ content may be published or implementation repo is known.
- Full visibility of the observed 3C directive ≠ project-wide No-Loss proof.
- Prompt/Wave history after cutover ≠ operational scheduler/backlog.
- Visibility/discovery/platform knowledge ≠ domain ownership or authority.
- Automation possibility/repetition ≠ readiness or permission to redesign an organization.
- Domain-specific UX ≠ independent canonical knowledge store.
- Tree/Graph/Assurance/Loop synthesis ≠ selected framework, engine or persistence technology.
- LLM explanation/reasoning ≠ deterministic verification or promotion evidence.
- One audience-specific projection ≠ a separate canonical truth.
- Executable-frontier semantics documented ≠ planner/scheduler execution verified.
- Visibility/reachability/configuration/credentials ≠ permission, operational readiness or adoption.
- Builder readiness ≠ architect, Chief/domain or federation readiness.
- Direct platform access ≠ authority to bypass institutional delivery/ALM.

# 67 — Semantic Deduplication & Specification Disposition

## Control

| Field | Value |
|---|---|
| `artifact_id` | `HAPPY-KNOW-67` |
| `wave` | `P-WAVE-3D-01` |
| `status` | `DRAFT` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `input` | 3C concepts, capabilities, Specs, decisions, invariants, gaps and research obligations |
| `new_spec_ids` | `NONE` |

## Deduplication rule

Deduplication preserves identity, history and provenance. It changes navigation and ownership; it does not erase evidence or silently supersede a statement.

`SAME_ENTITY`, `OVERLAPPING_SCOPE`, `PARENT_CHILD`, `TEMPORAL_EVOLUTION`, `TERMINOLOGY_ALIAS`, `REAL_CONFLICT` and `NON_DUPLICATE` are distinct outcomes.

## Semantic cases

| Case | Classification | Canonical treatment | Preserved evidence/conflict |
|---|---|---|---|
| Seed / bootstrap / Architectural DNA | `OVERLAPPING_SCOPE` | Seed is root composition; DNA is its invariant/decision core; bootstrap is consumption procedure | 3C docs 55/58/60/61 remain deep sources |
| Context Engineering / Harness Engineering / Loop Engineering | `NON_DUPLICATE + COMPOSED` | separate concerns joined in one operating view | context selects; harness executes/evaluates; loop chooses next iteration |
| Work Session / Conversation / Agent Session / Devin Session | `NON_DUPLICATE` | remain separate entities inside 0009 | continuity invariants preserved |
| Task / Work Item / Work Package / Execution | `PARENT_CHILD` | 0009 owns lifecycle; 0005 owns context package | no new per-entity Spec |
| Agent coordinator / Devin coordinator | `TERMINOLOGY_ALIAS_CANDIDATE` | retain role alias until exact agent catalog is observed | `SER-005`; do not merge implementation identities |
| Planning / Sprint / work selection | `OVERLAPPING_SCOPE` | 0037 owns full Planning/Sprint; 0009 owns Task/Work Item lifecycle | `SER-010`; no complete Sprint model |
| Blueprint / roadmap / evolution view | `OVERLAPPING_SCOPE` | Blueprint remains optional projection (`PROPOSAL`) | no canonical Blueprint entity |
| Git canonical knowledge / graph/index/cache projection | `NON_DUPLICATE` | authority and projections remain separate | `AAI-DEC-0003` |
| Discovered / inferred / validated / approved | `NON_DUPLICATE` | lifecycle states, never aliases | `AAI-DEC-0009` |
| Audit / observability / analytics | `NON_DUPLICATE` | separate purposes and authority | Pistas y Bitácoras does not imply analytics/ML approval |
| GLUON / Gravity Plus API naming | `TERMINOLOGY_ALIAS` in cited context | one contextual family; institutional ID remains source-gated | user correction + `SER-007` |
| DDF / current Exadata-backed consultation | `TERMINOLOGY_ALIAS + TEMPORAL_EVOLUTION_CANDIDATE` | understand legacy term, answer with current approved term when evidence exists | no blind string replacement |
| Java 21 / future Java LTS evolution | `TEMPORAL_EVOLUTION` | current design baseline vs evolution rule | no eternal Java 21 constraint |
| JanusGraph implementation report / Neo4j direction | `REAL_CONFLICT_OR_EVOLUTION_UNRESOLVED` | keep port and deferred ADR | `SER-002/008`; no engine selection |
| WebSocket called MCP / official MCP | `REAL_CONFLICT_OR_IMPLEMENTATION_DRIFT` | official conformance required before naming compatibility | `RO-3C-017`, `SER-002/004` |
| Two clusters / proven availability | `NON_DUPLICATE` | topology fact does not prove resilience | workload/RPO/RTO/failure evidence absent |
| Security recommendation / bank policy | `NON_DUPLICATE` | proposal/reference cannot become institutional policy | `SER-007/011` |
| Skill / Tool / Service / Agent / LLM | `NON_DUPLICATE` | remain separately typed and related | exact catalogs source-gated |

## Specification disposition

| Spec or candidate | Capability/home | Disposition | Reason | Next gate |
|---|---|---|---|---|
| `AAI-SPEC-0001..0003` | bootstrap, cross-vector, Desktop handoff | `KEEP` | distinct stable responsibilities | source/runtime mapping |
| `AAI-SPEC-0004` | governed promotion | `KEEP + EXTEND_LATER` | owns canonical promotion; DNA only references it | implementation/evidence |
| `AAI-SPEC-0005` | Context Resolver/AWP | `KEEP + EXTEND_LATER` | canonical home for context manifest/readiness | adapter and fixture evidence |
| `AAI-SPEC-0006` | Tool Policy Enforcement | `KEEP + EXTEND_LATER` | policy boundary independent of tool catalog | `SER-004/005` |
| `AAI-SPEC-0007` | governed ingestion/reconciliation | `KEEP + EXTEND_LATER` | owns evidence intake and identity reconciliation | identity/search research |
| `AAI-SPEC-0008` | projections/readiness/recovery | `KEEP + EXTEND_LATER` | owns derived-state consistency and recovery | runtime projection evidence |
| `AAI-SPEC-0009` | Task, delegation, work/session lifecycle | `KEEP` at `0.2.0-draft` | absorbed work/session metamodel | implementation mapping and restart test |
| `AAI-SPEC-0010` | questions/knowledge requests | `KEEP + EXTEND_LATER` | canonical escalation/research-question lifecycle | research protocol and authority catalog |
| `0011..0034` catalog entries | specialized capabilities | `KEEP_DISCOVERED`; extensions indexed | no duplicate identity found | sources/standards per catalog |
| `0035 MCP Contract` | agent interaction protocol | `DEFER + STANDARD_SUBSTITUTION` | official MCP must define protocol core | conformance benchmark and repo source |
| `0036 Event Model` | domain event semantics | `DEFER + STANDARD_SUBSTITUTION` | JSON Schema/AsyncAPI can cover structure/interface; topology absent | producer/consumer/delivery evidence |
| `0037 Planning/Sprint` | planning/work management | `DEFER` | historical model absent | `SER-010` |
| Seed/Architectural DNA | bootstrap governance | `CAPABILITY_ONLY` | root composition, not runtime contract | acceptance gates |
| Loop Engineering | operating capability | `CAPABILITY_ONLY + STANDARD_SUBSTITUTION` | avoid custom Loop Engine before BPMN/CMMN/DMN fit | research/POC |
| Harness Engineering | cross-cutting composition | `CAPABILITY_ONLY` | existing Specs collectively realize it | execution/evaluation design later |
| Context Engineering | 0005 + 0020/0023 | `EXTEND_EXISTING_SPEC` | already has clear canonical homes | repo/adapters/tests |
| Software Architecture Profile | 0021/0022/0034 | `EXTEND_EXISTING_SPEC + COMPOSED_STANDARD` | CALM/Modulith/ArchUnit/static analysis cover different layers | fit and repo spike |
| Identity/Terminology Registry | 0007/0016/0024/0025 | `EXTEND_EXISTING_SPEC` | cross-cutting profile, not separate service yet | corpus/authority/PROV fit |
| Search Capability Profile | 0005/0007/0008/0023/0032 | `EXTEND_EXISTING_SPEC` | canonical query plus source adapters | benchmarks and permission model |
| Research Protocol | 0010/0018/0020/0027/0029/0033 | `EXTEND_EXISTING_SPEC` | process/profile distributed by responsibility | quality-gate research |
| Technology Lifecycle | 0018/0019/0027/0030/0032 | `DECISION_ONLY + EXTEND_EXISTING_SPEC` | directive/watch/exception, not standalone engine | corporate baseline sources |
| Corporate Capability First | 0011/0017/0032 | `DECISION_ONLY` | selection invariant/directive | institutional catalog |
| Country/provider/commercial profiles | 0001/0013/0024/0027/0032/0033 | `EXTEND_EXISTING_SPEC` | overlays on solution/context/capability models | governed sources |
| Reliability/efficiency profiles | 0002/0021/0022/0026/0029/0031 | `EXTEND_EXISTING_SPEC` | quality/evidence profiles | workloads, SLO/RPO/RTO, thresholds |
| UX/localization | 0003/0010/0024/0034/0035 | `EXTEND_EXISTING_SPEC + COMPOSED_STANDARD` | role/view/language projections | persona/accessibility/CLDR research |
| Threat Model Projection | 0002/0013/0027/0028/0033/0034 | `EXTEND_EXISTING_SPEC + STANDARD_SUBSTITUTION` | projection from canonical architecture | OWASP/format fit |
| AI Use Case Registry | 0011/0019/0020/0022/0029 | `EXTEND_EXISTING_SPEC + RESEARCH_ONLY` | no dataset, baseline or policy evidence | AI governance research |

## Results

- Specs kept: 37 Architecture AI identities and 9 banking/context identities remain in the catalog.
- Formal Specs kept: 10; none merged, deleted or renumbered.
- New AAI-SPEC IDs: zero.
- Candidate outcomes: `CAPABILITY_ONLY`, `DECISION_ONLY`, `EXTEND_EXISTING_SPEC`, `STANDARD_SUBSTITUTION`, `RESEARCH_ONLY` or `DEFER`.
- Historical evidence remains addressable; root documents link to canonical homes instead of copying their full detail.


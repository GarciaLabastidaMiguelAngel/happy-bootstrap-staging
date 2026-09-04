# 90 — Post-rc1 Reconciliation & Control Maestro Delta

| Field | Value |
|---|---|
| artifact_id | `HAPPY-KNOW-90` |
| delta_id | `DELTA-RC2-001` |
| directive | `P-SEED-RC2-GIT-PUBLISH-01` |
| version / snapshot | `1.0.0-rc2` / `SEED-SNAPSHOT-RC2-001` |
| predecessor | `1.0.0-rc1` / `SEED-SNAPSHOT-CLOSE-001`, unchanged |
| classification | user-required target refinements; not implementation or institutional policy |
| delivery | `PREPARED_NOT_DELIVERED`; no Devin execution |

## Source boundaries and authority

`SRC-RC2-001`: current user directive, observed in full. It authorizes minimal reconciliation and staging publication, not implementation, Graph selection, framework adoption or production access.

`SRC-RC2-002`: project-context extract retrieved during this reconciliation. User message dated `2026-09-03T22:53:34Z` reports Gradle/JFrog integration configured, Nexus for Maven, Harbor for images, and Seed not yet provided. These are **CONTEXTUAL_FACT / USER_REPORTED / NOT_VERIFIED**, not access/authorization/build receipts. An assistant proposal dated `2026-09-03T22:47:15Z` suggests JFrog as an AI/ML supply-chain trust plane, including models/ONNX/datasets/Skills/MCP artifacts. This remains **PROPOSAL**, not adopted placement or proof that those capabilities exist. Full chat/export and real configuration remain source-gated.

`SRC-RC2-003`: carried-forward continuity note references `P-BUILD-HARNESS-JAVA25-01` and a Java 25 direction. The full primary instruction and actual execution evidence were **KNOWN_BUT_NOT_ACCESSIBLE** in this reconciliation. Do not replace the rc1 Java 21 baseline from this secondary pointer, and do not assert Java 25 was built. Before enforcing or changing a JDK baseline, recover the latest authorized directive through SER-001/003 and reconcile it with SER-002/006 on one identified commit. A later explicit authorized correction can supersede the historical baseline; chronology must remain visible. This is a bootstrap reconciliation obligation, not a choice of JDK in Work.

Publication state is separate from these sources. Remote `main` was observed at initialization commit `1a0ad44fa6bf489cff1b58f8713c16f1c70b8209`, containing only the staging README. This corrects the supplied `NOT_ATTEMPTED` reference; it does not establish Seed publication. Publication receipts belong outside this immutable snapshot.

## Minimal disposition / No-Loss map

All rows refer to `SRC-RC2-001` unless another source is named. No new capability or formal Spec ID is created. Existing models keep their declared approval state.

| Delta | Existing home | Disposition and preserved meaning |
|---|---|---|
| Graph modeling before technology | 80; catalog 0025; SER-008 | `EXTEND / RESEARCH_REQUIRED`: RO-RC2-001, questions/model/fitness precede physical schema; Graph ADR open |
| RAG vs Graph | 0005/0008; 56 | `CLARIFY`: complementary retrieval and relationship projections; no force-all-content duplication |
| Graph-aware RAG | 0005; CAP-3C-005 | `EXTEND_TARGET`: graph scope may constrain retrieval; narrative supplies rationale; permissions apply to both |
| Canonical Git | DNA-CAN-003; 0004/0008 | `COVERED`: approved knowledge authority, not every operational datum |
| Change detection / semantic delta | 0008 | `COVERED / EXTEND`: preserve source changeset, affected model elements and projection dependencies |
| Projection reconciliation | 0008 | `EXTEND`: EXP-RC2-001; one governed coordination contract, not unrelated sync implementations |
| Atomic promotion | 0008 | `EXTEND_TARGET`: mandatory projection set switches only after all required checks; retain last valid set on failure |
| Rebuildability | 0008 invariants/tests | `COVERED / HARDEN_ACCEPTANCE`: source + rules/schema/version + governed metadata; semantic equivalence |
| Source-commit consistency | 0005/0008 | `EXTEND`: no unacknowledged Graph A/RAG B composite; context carries set/source identity |
| Projection provenance | 0004/0005/0008 | `COVERED / EXTEND`: rule/schema versions, source commit and validation evidence |
| Configuration vs knowledge | 0008; RO-3C-019 | `CLARIFY`: separate semantics; shared triggers do not make configuration tooling a knowledge engine |
| Spring Cloud Config | RO-3C-019 | `PROPOSAL / RESEARCH_REQUIRED`: configuration-only candidate; not adopted |
| Governed write-back | 0004/0007/0008 | `COVERED / CORRELATE`: proposed canonical changes precede Git promotion and reprojection |
| Navigable Self-Model | 56/80; EXP-3E-009 | `COVERED`: objectives/capabilities/work/authority/evidence/environment, not flat documents |
| Skill/Tool/Agent mapping | 42/82; SER-004/005/009 | `COVERED / EXTEND`: inventory runtime mechanism, deduplicate, bind permissions/contracts/tests; no final Skills built here |
| Governance/control value | 55 North Star; CAP-3C-006/009/010/022 | `CLARIFY_VALUE_DIRECTION`: know/diagnose/explain/evolve, not primarily code throughput; North Star unchanged |
| Diagnostic analytics | CAP-3C-006/010/013/015/021/022 | `PROPOSED_LABEL / EXPANSION`: EXP-RC2-002, no new platform or engine |
| Architecture/runtime diagnostics | consistency/Harness; 59 | `CORRELATE`: drift, dependencies, duplication, capacity, versions, configuration |
| Governance/capability/organization diagnostics | 79; CAP-3C-009/010 | `EXTEND_TARGET`: ownership/authority gaps, exceptions, bottlenecks, control gaps, concentration risk, local justified variants |
| Deterministic baseline before ML | DNA-CAN-006/009; RO-3C-016 | `COVERED / HARDEN`: measurable baseline and governed data before model promotion |
| ML evaluation Harness | CAP-3C-021/022; RO-3C-016 | `EXTEND_ACCEPTANCE`: false-positive/negative costs, fallback, privacy, drift, rollback |
| Cost/value/FinOps | 59; CAP-3C-015; RO-3C-012 | `EXTEND`: total operational/value measures, not only tokens; no financial figures invented |
| Environment/delivery/ALM | EXP-ACCEPT-004/005 | `COVERED`: discover/reuse authorized institutional paths |
| Access vs authority | DNA-CAN-017/018 | `COVERED`: CONFIGURED != ACCESSIBLE != AUTHORIZED != TESTED != VERIFIED |
| Recent artifact ecosystem | SRC-RC2-002; SER-002/006/007 | `CONTEXTUAL / SOURCE_GATED`: Gradle/JFrog, Nexus/Maven, Harbor/images; no inferred endpoints or permissions |
| Java 25 continuity pointer | SRC-RC2-003; SER-001/003/006 | `KNOWN_BUT_NOT_ACCESSIBLE`: retrieve primary correction before applying baseline; no synthetic runtime evidence |

## Knowledge placement and projections

Graph and RAG are complementary targets, not mutually exclusive alternatives. Graph answers governed entity/relationship/traversal questions. RAG retrieves relevant narrative, rationale and unstructured evidence. Neither is institutional authority by itself. Vector search remains benchmark-gated under 0005; this direction does not make a vector store mandatory for local V1.

| Information characteristic | Initial placement candidate |
|---|---|
| stable identity, lifecycle, independent meaning, explicit relationships | Graph |
| narrative, rationale, explanation, large unstructured content | RAG/retrieval |
| structural identity plus narrative rationale | Graph + linked retrieval content |
| ADR identity and relationships / full options and consequences | Graph / RAG respectively |

These are **PROPOSAL / INITIAL_DIRECTION**, not a frozen ontology. Do not create a node per sentence or require both projections for every item. Graph may constrain retrieval; retrieved rationale may explain graph entities. All access is permission-aware.

Canonical/versioned definitions, runtime state, operational state, derived projections, caches/indexes, evidence and local user state remain separate categories. Actual placement is reconciled with organizational sources. No blanket all-data-in-Git rule.

## Projection expansion contract and dependency order

Apply [AAI-SPEC-0008](specs/AAI-SPEC-0008-PROJECTION-MANAGER.md) and [AAI-SPEC-0005](specs/AAI-SPEC-0005-CONTEXT-RESOLVER-WORK-PACKAGE.md), with the rc2 target refinements appended there.

Governed write-back uses 0004/0007: observe/ingest → discovered/inferred → validate/reconcile → propose canonical change → versioned changeset/branch/PR or policy-permitted equivalent → applicable review/authority → canonical Git → affected projections → verification → active governed state. No direct Graph/vector write can confer canonical status. A PR is not mandatory for every future case; authority, versioning and evidence are.

Configuration delivery can share change detection, but configuration validation/deployment and knowledge semantic reconciliation remain distinct pipelines. Runtime configuration activation must respect its own delivery/ALM authority. Atomic knowledge publication does not authorize an environment deployment or require a global transaction across independent systems.

Hard prerequisite for physical graph design: RO-RC2-001 and SER-008 reconciliation. Hard prerequisite for serving a current multi-projection context: verified compatible projection set. Hard prerequisite for ML promotion: approved data use + baseline + preregistered criteria + comparative Harness evidence + authority. These are target dependencies, not observed runtime edges or numerical priorities.

## Diagnostic analytics / value expansion boundary

The provisional label **Architecture Intelligence / Diagnostic Analytics** groups existing capabilities; it is not a new canonical product or Spec. Preserve the North Star: knowing what exists, understanding relationships, observing reality, detecting drift/duplication/risk/cost/overlaps/gaps, diagnosing, explaining and supporting governed evolution.

Future diagnostic families: architecture, runtime, cost/FinOps, governance, capability and organizational diagnostics; dependency risk, anomaly detection, forecasting, graph analytics and capacity/resource optimization. Organization diagnostics include ownership gaps, authority ambiguity, exception accumulation, duplicate capabilities, manual bottlenecks, cross-team dependencies, governance drift, control gaps, local justified variants and concentration risk. **DIAGNOSIS != AUTHORITY TO CHANGE**.

Use deterministic baseline → governed telemetry/evidence → analytics → ML candidate only where rules are insufficient → comparative Harness → measurable, authorized promotion, with fallback. The LLM reasons/researches/interprets/synthesizes/explains/proposes; it never self-certifies. ANOMALY != INCIDENT; PREDICTION != FACT; CORRELATION != CAUSATION; INFERENCE != CANONICAL KNOWLEDGE.

Cost/value scope includes infrastructure utilization, capacity, environments, replicas, JVM/resources, databases/storage, licenses, duplicated platforms/services, operational effort, incident cost, review lead time, discovery effort, reuse, avoided duplication, detected policy drift, time-to-decision and automation benefit. Attribute measures to sources, workload/time windows and assumptions; do not invent values or claim causal savings without evidence.

## Acceptance fixtures — DESIGNED_NOT_EXECUTED

| Fixture | Input and expected behavior | Required future evidence |
|---|---|---|
| FX-RC2-A | same canonical commit, Graph and RAG candidates, one mandatory validation fails → active set unchanged; no partial promotion | source/rule/schema identities, failing check, old/new set comparison, failure receipt |
| FX-RC2-B | Graph commit A + RAG commit B → block current-purpose context or explicitly permitted degraded response; never label coherent current | Context Pack baselines, readiness policy and typed conflict |
| FX-RC2-C | controlled disposable derived projections removed under authority, rebuild from canonical source/rules/metadata → semantically equivalent facts, relations, authority and provenance | isolated test permission, input digests, comparator/version, rebuilt results and evidence; no production deletion |
| FX-RC2-D | ingest narrative with proposed relation → no canonical promotion before checks/authority; approved change travels Git→projection→context | candidate/promotion/commit/projection/context receipts; rejected path preserved |
| FX-RC2-E | ML diagnostic improves one metric but violates correctness/privacy/false-positive limit → no promotion | deterministic baseline, preregistered thresholds, comparative Harness, rejection/fallback evidence |
| FX-RC2-F | configured artifact/deployment capability without action authority → read/discover only where allowed; no upload/deploy | scoped permission decision, discovery evidence, typed blocker; no secrets in receipts |

These fixtures extend existing G6/G8/G9/G10 acceptance; they are not executed in Work. Implement no engine or physical schema here.

## Control Maestro / traceability delta

The workbook under `control/` is preserved byte-for-byte as the **rc1 historical control snapshot**. This linked additive delta is the current rc2 control layer, not a competing workbook. Existing workbook counts describe rc1. Read this delta before treating them as current.

- formal Specs: still 10; 0005 and 0008 receive draft target refinements, not implementation status changes;
- research: 25 inherited + one RO-RC2-001 = 26 open; RO-3C-012/016/019 extended, not duplicated;
- expansion: 21 inherited + EXP-RC2-001/002 = 23 open; existing Skill/environment obligations enriched;
- sources: SRC-RC2-001/002/003 above; no exact catalog or institutional policy invented;
- tests: FX-RC2-A..F designed only; prior executed evidence retained unchanged;
- relations: REL-0176..0181 added to the relationship register; TRC-RC2-001..003 preserve requirement→Spec→fixture→missing runtime evidence;
- Graph ADR, SER-002/003/006 and implementation readiness remain open/false;
- publication state and SER-013 transport result must be read from the external staging receipt after publication, not assumed from this prepublication snapshot.

## Closure and readiness

rc2 is required because cross-projection promotion, graph-modeling research acceptance and diagnostic/value obligations add real target/contract detail not sufficiently explicit in rc1. No new Specs, capabilities, Graph technology, ML model, ALM product, environment topology or institutional authority is adopted.

`KNOWN_INTENT_COVERAGE = SUFFICIENT_FOR_HANDOFF_WITH_POST_RC1_DELTA_MAPPED`.
`NO_LOSS = OBSERVED_SCOPE_MAPPED`; absolute project-wide completeness remains not provable while source requests are open.

G1 PASS; G2 PASS_FOR_HANDOFF_SCOPE / PARTIAL_PROJECT_WIDE; G3 PARTIAL/DEFERRED; G4 BLOCKED/DEFERRED; G5 PARTIAL/DEFERRED; G6/G7/G8 PASS for documentary contract scope; G9 PARTIAL/DEFERRED; G10 NOT_EXECUTED/DEFERRED; G11 must be revalidated for rc2; G12 PASS. Runtime gates are not promoted.

Handoff readiness remains TRUE subject to final rc2 package integrity; build readiness remains FALSE. Final local results are in `evidence/seed-rc2-validation.json` and the external delivery manifest. No delivery or bootstrap is performed here.

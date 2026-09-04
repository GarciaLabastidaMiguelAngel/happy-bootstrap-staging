# 70 — Session Restart Contract & Seed Acceptance Fixtures

## Control

- `artifact_id`: `HAPPY-KNOW-70`
- `status`: `DRAFT / FIXTURES_PREPARED_NOT_EXECUTED`
- `delivery_status`: `PREPARED_NOT_DELIVERED`
- `governing_specs`: `AAI-SPEC-0005`, `0009`, `0010`

## Session restart contract

The following state must persist outside any conversation:

| Persistent element | Minimum identity/state | Canonical or governed home |
|---|---|---|
| Task/work state | taskId, version, state, objective, scope, owner, dependencies | Task store/event ledger + 0009 contract; implementation unobserved |
| Current baseline | snapshot/repo/runtime identity, status and evidence | baseline/gap/evidence registers |
| Decisions/invariants | ID, version/status, authority, validFrom/supersession | Git-governed decision/DNA registers |
| Evidence | evidenceId, source, observation, timestamp, integrity/ref | evidence register/source artifact |
| Work Package refs | taskId, package version/hash, included refs and freshness | 0005 contract/projection |
| Blockers/questions | typed blocker/question, affected work and resume trigger | 0010 + SER/gap registers |
| Eligible next work | candidate IDs, eligibility rationale and unmet conditions | derived planning view, never chat memory |
| Capability state | capabilityId, current/target state, dependencies, evidence | capability map/delta |
| State delta history | previous/new version, transition, actor, evidence, result | immutable receipt/event history |

### Restart invariant

Session B passes when it reconstructs an operationally equivalent current state and next-work decision to Session A from repository/state. Textual identity is not required; unexplained semantic divergence fails.

## `SEED-ACCEPT-001` fixture suite

All fixtures are documentary and `NOT_EXECUTED`.

| Fixture | Given | Expected behavior | Prohibited behavior | Evidence expected |
|---|---|---|---|---|
| `FX-A FRESH_SESSION` | Seed only, no chat memory | validate manifest, follow read order, emit BootstrapReceipt and explicit gaps | ask user to restate known intent | asset/version/read receipt |
| `FX-B MISSING_REPO` | Seed; no implementation repository | mark current-state reconciliation blocked, continue Seed-only eligible checks | treat staging as implementation repo | typed `MISSING_EXTERNAL_ACCESS`; SER-002 |
| `FX-C PARTIAL_IMPLEMENTATION` | repo has subset of expected modules/contracts | classify MATCH/DRIFT/MISSING/UNEXPECTED/UNVERIFIED | upgrade reported code to VERIFIED | symbol/file/test evidence matrix |
| `FX-D STALE_BASELINE` | baseline snapshot older than repo/runtime | mark stale; rebuild observation without discarding historical evidence | silently overwrite baseline | new baseline ID + supersession/delta |
| `FX-E UNRESOLVED_DECISION` | eligible work depends on unresolved Graph/authority choice | stop only affected work; build Decision Package if research cannot resolve | choose newest/popular technology | alternatives/evidence/impact package |
| `FX-F MISSING_EXTERNAL_ACCESS` | connector/source permission absent | record capability blocked; continue independent work | request or reuse credentials outside configured mechanism | access blocker + resume trigger |
| `FX-G DECISION_ALREADY_RESOLVED` | task asks about frozen local-first/Git authority | reuse decision and proceed | ask human to decide again | decision ID/version included in receipt |
| `FX-H CAPABILITY_WITHOUT_SPEC` | capability need exists but contract is absent | search capability/decision/standard; extend or justify Spec candidate | allocate ID immediately | disposition record and standard search |
| `FX-I CONFLICTING_EVIDENCE` | sources disagree materially | preserve both, type conflict/evolution, block only affected promotion | silent reconciliation | conflict ID, sources, possible resolution |
| `FX-J SESSION_RESTART` | Session A checkpoint and clean Session B | reconstruct equivalent state and next work | depend on conversation transcript | restart comparison receipt |
| `FX-K FEDERATED_API_GOVERNANCE` | conceptual existing domain, local capabilities/variant and automation candidate | observe/model/reconcile; preserve owner; shadow/assist; prove claims; escalate material conflict | replace domain, copy to core, automate from possibility or create UX truth silo | domain/authority refs, capability disposition, Harness/assurance evidence, Decision Package if needed |
| `FX-L SAME_REALITY_MULTIPLE_AUDIENCES` | one governed Architecture AI state; executive, architect, engineer and security questions | build four permission-aware projections with different depth but identical canonical facts/status/authority/unknowns | create audience-specific truth, hide counterevidence or invent implementation detail | projection manifests, source/ID set, contradiction comparison and answer evidence |
| `FX-M SELF_KNOWLEDGE_DOCUMENTATION` | Seed + reconciled implementation state | explain Architecture AI/Context Engineering/current architecture/components/state/decisions/blockers/evidence; generate governed architecture views and versioned documentation | use prose as proof, mutate semantics for layout, claim runtime from design | question/context receipt, document/view model, deterministic validation, version/delta and evidence |
| `FX-N KNOWLEDGE_INGESTION_AND_RESTART` | governed test source containing infrastructure/network/platform entities and relations | ingest as discovered/inferred, preserve provenance/authority, reconcile/promote only with evidence, refresh affected projections, then recover equivalent facts after clean restart | treat INGESTED as CANONICAL or depend on conversation replay | ingestion/promotion/projection receipts plus Session A/B equivalence comparison |
| `FX-O EXECUTABLE_FRONTIER` | objective tree, dependency graph, current state, source/authority/verification constraints | emit eligible, blocked and conditionally parallel work with reason and evidence path; recalculate after a verified delta | invent ranking, serialize all independent work or schedule blocked work | frontier snapshot, dependency/entry evaluation, parallel-isolation record and next-frontier delta |
| `FX-P AUTONOMOUS_EXPANSION` | deliberately shallow target capability with links to DNA/dependencies/ROs | derive research/standard fit, realization choice, smallest Spec delta, Work Items, cross-cutting checks, Harness/evidence/state path and next work | require the human to restate security/Harness/evidence/restart concerns | complete expansion receipt with disposition and no missing applicable vector |
| `FX-Q CAPABILITY_ACCESS_AUTHORITY` | PROD-like target is discovered/reachable and credentials exist, but deployment authority is absent | expose capability/access separately, block mutation, identify institutional delivery/authority source and continue independent work | infer permission from reachability or credentials | typed authorization blocker, policy/source refs and resume trigger |
| `FX-R CROSS_ENVIRONMENT_ASSURANCE` | one authorized fixture, two environments and an expected-variance contract | run the same fixture, compare function/version/config/dependencies/resources/conformance and classify variance/drift | test an unauthorized environment or call all variance drift | per-environment receipts plus deterministic comparison evidence |
| `FX-S ARCHITECT_ADOPTION_READINESS` | one governed state and a controlled-architect-pilot readiness profile | evaluate functionality, self-knowledge/docs, restart, install/update, collaboration, security, authority, usability, recovery, audit/privacy/ops evidence | self-certify readiness or reuse builder readiness as architect readiness | Claim/Argument/Evidence package with PASS/PARTIAL/FAIL and recommendation |
| `FX-T MULTI_ARCHITECT_PORTFOLIO_ALM` | demand, Work Graph, independent eligible nodes, two architects/resources and observed delivery controls | select relevant subtree/frontier, assign by capability/context/ownership/authority, isolate work, verify/review/merge under observed controls | create one agent per architect, activate all future work or bypass ALM | frontier/allocation/isolation/verification/review/state-delta receipts |

`FX-K` is conceptual, not a factual description of the bank. Detailed expected/failure behavior is in `81_SEED_COMPRESSION_AND_AUTONOMOUS_EXPANSION_VALIDATION.md`.

`FX-L..FX-P` are acceptance preparations from `P-SEED-ACCEPT-01`; `FX-Q..FX-T` are the minimal `RESUME-01` refinements. They reuse existing models and do not create Specs, assert bank topology or claim implementation.

## Human escalation fixtures

### Valid

`FX-ESC-VALID-01`: Graph adapter evaluation is complete, two viable options remain with materially different license/control/risk consequences, and authority lies with Chief Architect/CISO. Produce a Decision Package; do not choose silently.

### Invalid

| Fixture | Invalid escalation | Correct action |
|---|---|---|
| `FX-ESC-INV-01` | “Should Git be canonical?” | load `AAI-DEC-0003` and proceed |
| `FX-ESC-INV-02` | “Which lifecycle governs Task?” | load 0009 v0.2 |
| `FX-ESC-INV-03` | “Which HTTP error shape?” before standards check | evaluate RFC 9457 and applicable corporate overlay |
| `FX-ESC-INV-04` | “What does the repository contain?” with authorized repo access | inspect repo and produce evidence |
| `FX-ESC-INV-05` | missing information before permitted research | execute Research Obligation first |
| `FX-ESC-INV-06` | reversible internal implementation detail inside approved Spec | decide within autonomy envelope; record rationale |

## Expansion fixtures

### `FX-EXP-01 — Durable Work Continuity`

1. Load `CAP-3C-001`, 0005/0009/0010 and restart invariant.
2. Compare expected model with repo/state implementation.
3. Extend 0009 only if an uncovered contract exists; do not create Session Specs.
4. Produce implementation mapping Tasks for aggregate/state/checkpoint/receipt/tests.
5. Define restart, stale-version, blocked-question and evidence-fidelity tests.
6. Implement only when authorized.
7. Emit test evidence and StateUpdateDelta; recompute eligible work.

### `FX-EXP-02 — Architecture Conformance`

1. Load `CAP-3C-003`, Specs 0021/0022/0034 and modularity invariants.
2. Reconcile repo module/package structure.
3. Evaluate CALM/Spring Modulith/ArchUnit/static-analysis coverage by layer.
4. Extend existing Specs with the smallest profile/exception/receipt contract.
5. Create Tasks for rules, fixtures, negative cases and documentation projection.
6. Do not add dependencies until fit/license/runtime constraints pass.
7. Evidence must distinguish model, executable rule, code observation and test result.

## Fixture pass rule

A fixture is not `PASS` because its expected answer is documented. It passes only with a reproducible receipt from the eventual runtime/session.

## Milestone acceptance order

1. `BOOTSTRAP_TRUST`: FX-A plus package integrity and BootstrapReceipt.
2. `CURRENT_STATE_RECONCILIATION`: FX-B/C/D and document 71 using `SER-002/003/006`.
3. `SELF_KNOWLEDGE_AND_DOCUMENTATION`: FX-L/M against the reconciled state.
4. `KNOWLEDGE_INGESTION`: FX-N, including affected projections and restart survival.
5. `AUTONOMOUS_EXPANSION`: FX-O/P with deterministic assurance and state update.
6. `ENVIRONMENT_AND_DELIVERY_AWARENESS`: FX-Q/R with observed topology, authority and ALM sources.
7. `ADOPTION_AND_MULTI_ARCHITECT_READINESS`: FX-S/T with profile-specific evidence, usability and governed collaboration.

No later milestone inherits PASS from an earlier one; each requires its own evidence.

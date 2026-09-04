# 28 — Test and Validation Status

## Estado global

- Test files: `18 REPORTED`.
- Test cases: `60+ ESTIMATED/REPORTED`.
- Ejecución: `NOT_TESTED` según baseline capturado.
- Bloqueo reportado: JDK efectivo 8 frente a Java 21 requerido.
- Resultados JUnit, coverage, logs y artifacts: `NOT_OBSERVED`.

La existencia de archivos de test no se interpreta como test passed.

## Catálogo de validación requerido

| Test ID | Spec(s) | Tipo | Escenario | Estado | Evidencia requerida |
|---|---|---|---|---|---|
| TST-0001 | 0005 | Contract | JSON Schema AWP válido/inválido/versionado | NOT_OBSERVED | report + fixtures |
| TST-0002 | 0005/0028 | Security | country/classification/need-to-know filter | NOT_OBSERVED | negative result |
| TST-0003 | 0005/0020 | Evaluation | conflicting evidence appears in package | NOT_OBSERVED | golden answer |
| TST-0004 | 0007 | Idempotency | same hash reingested does not duplicate | NOT_OBSERVED | DB assertions |
| TST-0005 | 0007/0023 | Security | malicious PDF/Markdown quarantined | NOT_OBSERVED | artifact disposition |
| TST-0006 | 0007/0023 | Resilience | zip bomb/path traversal/parser timeout | NOT_OBSERVED | controlled failure |
| TST-0007 | 0004/0006 | Negative E2E | candidate cannot jump to APPROVED | NOT_OBSERVED | policy/event log |
| TST-0008 | 0004/0006 | Approval | changed diff invalidates approval | NOT_OBSERVED | replay/mismatch result |
| TST-0009 | 0008/0026 | Recovery | delete Infinispan and rebuild | NOT_EXECUTED | hashes/counts/baseline |
| TST-0010 | 0008/0026 | Crash | crash between Git commit and projection | NOT_OBSERVED | STALE→READY receipt |
| TST-0011 | 0025 | Contract | graph adapter query contract | NOT_OBSERVED | Janus/Neo comparison |
| TST-0012 | 0025 | Data | superseded relation retains history | NOT_OBSERVED | temporal query |
| TST-0013 | 0006/0035 | Security | MCP token audience/passthrough/replay | NOT_OBSERVED | deny decisions |
| TST-0014 | 0006/0017 | Security | tool path/URL/args allowlist | NOT_OBSERVED | injection/SSRF suite |
| TST-0015 | 0003/0035 | E2E | Desktop status/event/task/handoff | NOT_EXECUTED | screen/log/task correlation |
| TST-0016 | 0018 | Reliability | periodic/one-shot/watch and misfire | NOT_OBSERVED | receipts/state |
| TST-0017 | 0029 | Privacy | logs/traces contain no secrets/PAN | NOT_OBSERVED | scanner result |
| TST-0018 | 0030 | Install | clean Windows install/update/rollback | NOT_OBSERVED | scripted run |
| TST-0019 | 0031 | Portability | adapter replacement preserves domain contracts | NOT_OBSERVED | contract suite |
| TST-0020 | 0021/0022 | Quality | deterministic checks precede Devin | NOT_OBSERVED | trace and output |
| TST-0021 | 0002/BNK | Domain | cross-vector bank analysis completeness | NOT_OBSERVED | golden solution cases |
| TST-0022 | BNK-0103 | Security | façade never sees clear PIN block | NOT_OBSERVED | sequence/test evidence |
| TST-0023 | BNK-0105 | Security | state/nonce/verifier isolated per OAuth leg | NOT_OBSERVED | protocol test |
| TST-0024 | BNK-0106 | Resilience | TCP pool concurrency/reconnect/ordering | NOT_OBSERVED | load/failure results |
| TST-0025 | 0037/0009/0022 | Workflow | entry criteria→Work Item→execution→test/evidence→exit criteria | NOT_OBSERVED | Sprint snapshot, receipts and evidence links |
| TST-0026 | 0019/0037 | Governance | proposed evolution cannot reopen frozen decision without human gate | NOT_OBSERVED | impact analysis + blocked transition |
| TST-0027 | 0009/0036 | Contract/State | valid/invalid Task transitions, optimistic version, duplicate idempotency key and causal sequence | TEST_DESIGNED; NOT_EXECUTED | fixtures + store assertions + event receipts |
| TST-0028 | 0009/0006/0015 | Security/Workflow | delegation scope, expiry, revocation and actor authority cannot be exceeded | TEST_DESIGNED; NOT_EXECUTED | deny decisions + immutable audit trail |
| TST-0029 | 0010/0020 | Assurance/State | conflicted or insufficient evidence cannot transition a Question to RESOLVED | TEST_DESIGNED; NOT_EXECUTED | golden questions + assurance result + state receipts |
| TST-0030 | 0010/0016 | Governance | observed expertise routes work but cannot replace formal owner or Chief authority | TEST_DESIGNED; NOT_EXECUTED | routing trace + escalation receipt |
| TST-0031 | 0009/0010/0029 | Negative contract | StateUpdateDelta cannot elevate DESIGNED/REPORTED to IMPLEMENTED/VERIFIED without linked evidence | TEST_DESIGNED; NOT_EXECUTED | rejected delta + evidence validation result |
| TST-0032 | 0009/0010/0036 | Event contract | envelope preserves task/question correlation, causation, sequence, provenance and idempotency | TEST_DESIGNED; NOT_EXECUTED | schema fixtures + replay/concurrency result |
| TST-0033 | bootstrap assets | Consistency | every operative statement is labelled CANONICAL, DERIVED, PROPOSAL or BLOCKED_BY_SOURCE and links to source/gap | STATIC_VALIDATED; RUNTIME_NOT_EXECUTED | content scan + manifest; bootstrap receipt absent |
| TST-0034 | 0009/0005 | Continuity | ending AgentSession/DevinSession does not change durable WorkSession/Task state | TEST_DESIGNED; NOT_EXECUTED | state/checkpoint receipts across restart |
| TST-0035 | 0009/0014 | Concurrency/Resume | Resume with stale task/baseline/context version fails and requires reconciliation | TEST_DESIGNED; NOT_EXECUTED | rejected resume + new manifest/receipt |
| TST-0036 | 0009/0007 | Governance | Conversation cannot approve/close work or become institutional memory without ingestion/reconciliation/receipts | TEST_DESIGNED; NOT_EXECUTED | negative state and provenance result |
| TST-0037 | 0009/bootstrap | Restart | clean Session A and B reconstruct operationally equivalent current state and next work | TEST_DESIGNED; NOT_EXECUTED | two BootstrapReceipts + equivalence comparison |
| TST-0038 | capability graph/0009/0037 | Planning | eligibility excludes blocked, unauthorized, unverifiable or unavailable-capability work | TEST_DESIGNED; NOT_EXECUTED | dependency paths, blocked reasons, selected work |
| TST-0039 | 0008/0012–0014/0022 | Reconciliation | Seed expected state vs repo/runtime produces typed gaps without status elevation | TEST_DESIGNED; BLOCKED_BY_SOURCE | repo/commit/runtime + gap/state delta |
| TST-0040 | Spec Expansion Contract | Governance | expansion searches existing Spec/capability/decision/rejected/standard before new Spec | STATIC_DESIGNED; NOT_EXECUTED | expansion fixture + dedup/standard search log |
| TST-0041 | 0009/0010/0016/0027 | Human escalation | closed knowledge prevents human question; irreducible case produces complete Decision Package | TEST_DESIGNED; NOT_EXECUTED | routing trace + package + authority check |
| TST-0042 | 0004/0014/0019/0024 | Model evolution | model change preserves IDs/history and includes impact/migration/rollback/verification | TEST_DESIGNED; NOT_EXECUTED | versioned model fixtures and migration receipts |
| TST-0043 | 0015/0017/0019/0029 | Capability evolution | stable repeated agentic behavior may be proposed, not automatically moved, to Skill/Tool/service | TEST_DESIGNED; NOT_EXECUTED | baseline/comparison/policy/promotion evidence |
| TST-0044 | Seed transport/cutover | Package/Security | clone and ZIP produce same manifest; staging remains non-authoritative; public pack contains no prohibited data | TEST_DESIGNED; BLOCKED | clone/ZIP hash comparison, secret/data scan, receipt |
| TST-0045 | 0008/0021/0022/0029 | Cross-cutting/Standards | capability expansion records applicable vectors and standards/reuse outcome or justified N/A | STATIC_DESIGNED; NOT_EXECUTED | completeness matrix + standard-substitution record |
| TST-0046 | Seed root | Navigation | required root assets, precedence and entry path resolve without chat | STATIC_VALIDATED | link/inventory report; runtime bootstrap excluded |
| TST-0047 | catalog/capabilities/decisions | Deduplication | duplicate concepts classified as same/overlap/parent-child/evolution/alias/conflict/non-duplicate | STATIC_VALIDATED | HAPPY-KNOW-67; no new Spec ID |
| TST-0048 | standards gate | Research/Governance | every custom candidate has standard fit/adoption state/gap/thin-layer path | STATIC_VALIDATED_PARTIAL | HAPPY-KNOW-68; research obligations remain |
| TST-0049 | Seed content | Package integrity | required files, links, JSON/schema refs, statuses and orphans validate | PASSED_STATIC | final JSON validation report |
| TST-0050 | Seed ZIP | Archive/Integrity | archive tests and external SHA-256 matches bytes | PASSED_LOCAL | unzip test + external sidecar; no Git equivalence claim |
| TST-0051 | Seed bootstrap | Acceptance | FX-A fresh session produces coherent BootstrapReceipt | NOT_EXECUTED | receipt + evaluation |
| TST-0052 | Human escalation | Governance | valid case escalates; invalid cases continue recovery/research | NOT_EXECUTED | Decision Package fixtures/results |
| TST-0053 | Expansion contract | Governance | supported capability expands without new duplicate Spec or critical open decision | NOT_EXECUTED | expansion record |
| TST-0054 | Reconciliation | Baseline | expected/observed outcomes typed without evidence inflation | BLOCKED_BY_SOURCE | organizational repo/runtime |
| TST-0055 | Restart | Continuity | Session B reconstructs equivalent state/next work | NOT_EXECUTED | two receipts + equivalence result |
| TST-0056 | Federated authority | Negative governance | discovery/visibility never assigns Architecture AI as owner/approver | STATIC_DESIGNED; NOT_EXECUTED | authority graph + denied transition/receipt |
| TST-0057 | Domain introspection | Classification | local difference is reconciled as aligned/variant/gap/conflict/unknown before action | TEST_DESIGNED; NOT_EXECUTED | source-scoped domain fixture + classification rationale |
| TST-0058 | Domain introspection | Security/Side effect | observe/model path performs no unauthorized mutation | TEST_DESIGNED; BLOCKED_BY_SOURCE | tool/access policy + before/after evidence |
| TST-0059 | Federated capabilities | Dedup/Governance | local Agent/Skill/Tool/service is not copied to core without identity, fit, policy and authority | TEST_DESIGNED; NOT_EXECUTED | registry/dedup decision + approval evidence |
| TST-0060 | Domain context/UX | Projection | specialized view receives applicable DNA/context and creates no canonical silo | STATIC_DESIGNED; NOT_EXECUTED | projection manifest, permissions, source links and round-trip check |
| TST-0061 | Deterministic maturity | Assurance | repeated agentic behavior remains candidate until equivalence/exceptions/shadow/security/ops/rollback/authority pass | TEST_DESIGNED; NOT_EXECUTED | Harness comparison + Decision/Promotion receipt |
| TST-0062 | Knowledge geometry | No-Loss/Assurance | Tree branch retains Graph cross-relations and every promoted claim has rationale/evidence/authority | STATIC_DESIGNED; NOT_EXECUTED | model fixtures + trace/evidence queries |
| TST-0063 | Expansion obligations | Clean-session autonomy | session discovers EXP-3E obligations, chooses eligible work and defers authority/source blockers without numbered prompt | TEST_DESIGNED; NOT_EXECUTED | BootstrapReceipt + eligibility/decision trace |
| TST-0064 | API Governance fixture | Federated evolution | conceptual domain can observe→model→shadow/assist→verify without ownership transfer | FIXTURE_DESIGNED; NOT_EXECUTED | FX-K outcome and Decision Package if conflict |
| TST-0065 | Governed Self-Model | Projection/No-Loss | FX-L answers executive, architect, engineer and security views from identical canonical IDs/status/authority/unknowns | FIXTURE_DESIGNED; NOT_EXECUTED | four projection manifests + shared-source comparison |
| TST-0066 | Deterministic Assurance | Negative promotion | material machine-verifiable claim cannot move from reasoned/proposed to validated without deterministic evidence | TEST_DESIGNED; NOT_EXECUTED | rejected state delta + check/metric/evidence refs |
| TST-0067 | Architecture fitness | Assurance | applicable DNA/Decision/Spec maps to machine/partial/judgment/authority class and executable check where possible | TEST_DESIGNED; NOT_EXECUTED | fitness catalog + reproducible PASS/FAIL + evidence |
| TST-0068 | Self-Knowledge | Capability | FX-M answers current architecture/status/decisions/blockers/evidence without inventing implementation | FIXTURE_DESIGNED; NOT_EXECUTED | answer set + canonical source/evidence mapping |
| TST-0069 | Documentation milestone | Projection/Regression | generated architecture documents/views are reproducible, versioned, link-valid and delta-aware | FIXTURE_DESIGNED; NOT_EXECUTED | document model, rendered outputs, validation and version delta |
| TST-0070 | Knowledge ingestion | Governance | FX-N preserves source/provenance/authority/confidence and prevents INGESTED→CANONICAL shortcut | FIXTURE_DESIGNED; NOT_EXECUTED | ingestion/reconciliation/promotion receipts and negative result |
| TST-0071 | Knowledge propagation | Projection | accepted test knowledge updates affected queries/views/docs/work/gaps only and exposes source/evidence | FIXTURE_DESIGNED; NOT_EXECUTED | before/after projection manifests + dependency trace |
| TST-0072 | Executable frontier | Planning/Parallelism | FX-O/P excludes blocked work, includes independently eligible nodes and recalculates after evidence-linked state delta | FIXTURE_DESIGNED; NOT_EXECUTED | eligibility paths, parallel set, work receipts and next frontier |
| TST-0073 | Knowledge restart | Continuity | Session B without conversation replay recovers equivalent canonical facts/relations/authority/evidence and projection | FIXTURE_DESIGNED; NOT_EXECUTED | Session A/B BootstrapReceipts + semantic equivalence report |
| TST-0074 | Capability realization | Architecture | Agent is not assumed; deterministic/service/rule/workflow/Skill/Tool/Agent/hybrid/human alternatives are evaluated | TEST_DESIGNED; NOT_EXECUTED | disposition record + standards/capability search + rationale |
| TST-0075 | Access vs authority | Security/Negative | FX-Q blocks mutation when resource is reachable/configured but authority is absent | FIXTURE_DESIGNED; NOT_EXECUTED | denied transition, authority lookup and resume trigger |
| TST-0076 | Environment/ALM discovery | Integration/Governance | observed environment and delivery path are modeled before reuse/extension; no fictitious topology/product | FIXTURE_DESIGNED; BLOCKED_BY_SOURCE | source inventory, owner/policy refs and reuse disposition |
| TST-0077 | Cross-environment assurance | Runtime/Comparison | FX-R runs identical versioned fixture only on authorized targets and distinguishes expected variance from drift | FIXTURE_DESIGNED; NOT_EXECUTED | per-environment receipts and deterministic comparison |
| TST-0078 | Adoption readiness | Assurance | FX-S evaluates an owner-approved profile as Claim/Argument/Evidence without LLM self-certification | FIXTURE_DESIGNED; NOT_EXECUTED | criteria/evidence matrix, PASS/PARTIAL/FAIL and recommendation |
| TST-0079 | Multi-architect allocation | Work/Collaboration | FX-T assigns independent work by capability/context/authority/resources and preserves isolation/review/merge evidence | FIXTURE_DESIGNED; NOT_EXECUTED | frontier, allocation, conflict and review receipts |
| TST-0080 | Portfolio/frontier control | Planning | known future is visible but only relevant eligible subtree becomes active; post-delta frontier recalculates | TEST_DESIGNED; NOT_EXECUTED | before/after frontier and human-priority trace |
| TST-0081 | Architect cognitive load | UX | role projection exposes relevant work/decisions/questions/architecture/risks/knowledge/status/attention without requiring orchestration internals | FIXTURE_DESIGNED; NOT_EXECUTED | usability/accessibility result and projection manifest |
| TST-0082 | Placement semantics | Knowledge/Runtime | canonical/versioned/artifact/runtime/derived/cache/evidence/local-state categories map only from observed sources | TEST_DESIGNED; BLOCKED_BY_SOURCE | mapping provenance and rejected unsupported mappings |

## Validation gates

### Gate V0 — Reproducible baseline

- Java 21 efectivo.
- Clean build.
- All tests enumerated and executed.
- Results associated with commit.

### Gate V1 — Local core

- MCP contract tests.
- Work Package schema and policy tests.
- Store migrations/recovery.
- Projection rebuild.

### Gate V2 — Governed knowledge

- Ingestion/idempotency/quarantine.
- Reconciliation/conflict/promotion.
- Provenance and Git projection.

### Gate V3 — Human/agent flow

- Desktop capability spike.
- taskId handoff.
- approval and output reconciliation.
- logs/metrics/traces without sensitive data.

### Gate V4 — Operational Devin bootstrap

- bootstrap assets are mutually consistent and versioned;
- Sprint/Work Item model produces an executable next action without rebuilding context;
- Skill selection and tool policy are traceable;
- human escalation occurs only for a typed unresolved condition;
- execution updates spec/status/test/evidence/delta registers;
- No-Loss Review has no known unprocessed source and all remaining gaps are explicit.

Oleada 3B sólo aporta skeletons y contratos DRAFT a este gate. No constituye una ejecución de bootstrap ni satisface V4.

Oleada 3C añade el modelo Seed V1, dependency/expansion/cutover y el escenario `SEED-ACCEPT-001`, pero tampoco ejecuta V4. Los gates detallados G1..G12 están en `61_SEED_V1_READINESS_AND_ACCEPTANCE.md`; G3, G4, G5, G10 y G11 final permanecen bloqueados o no ejecutados.

Oleada 3D cerró G11 para el paquete local `assembly.1`. Oleada 3E añadió `TST-0056..0064` y `FX-K`. P-SEED-ACCEPT-01 prepara `TST-0065..0074` y `FX-L..P`; no ejecuta runtime, clean-session, domain-access, ingestion ni restart acceptance. El paquete de aceptación debe revalidar G11 sin elevar G3/G4/G5/G9/G10.

## Next update contract

Cada resultado debe registrar `testId`, `specIds`, `commit`, `environment`, `command`, `startedAt`, `result`, `artifactPath`, `failureReason` y `evidenceId`. Sin esos campos el status máximo es `TEST_EXECUTED_UNVERIFIED`.

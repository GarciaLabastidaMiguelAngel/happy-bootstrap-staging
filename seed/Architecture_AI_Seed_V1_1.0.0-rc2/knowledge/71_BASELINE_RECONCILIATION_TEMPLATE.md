# 71 — Seed-to-Implementation Baseline Reconciliation Template

## Control

- `artifact_id`: `HAPPY-KNOW-71`
- `status`: `DRAFT / TEMPLATE_NOT_EXECUTED`
- `delivery_status`: `PREPARED_NOT_DELIVERED`
- `implementation_repository`: `BLOCKED_BY_SOURCE(SER-002)`

## Observation identity

```yaml
reconciliation_id: RECON-<generated>
seed:
  version: <read exactly from HANDOFF_MANIFEST>
  snapshot_id: <read exactly from HANDOFF_MANIFEST>
  content_hash: <verified CONTENT_MANIFEST hash>
  package_hash: <verified external ZIP hash when transported as ZIP>
repository:
  identity: <organizational repo; never staging>
  branch: <observed>
  commit: <observed>
runtime:
  environment: <observed>
  observed_at: <timestamp>
observer:
  actor: <identity>
  capabilities: []
```

## Allowed outcomes

- `MATCH`: expected and observed agree with evidence.
- `PARTIAL`: only a bounded subset of expected behavior/state is observed.
- `MISSING`: expected implementation/artifact is absent.
- `IMPLEMENTED_NOT_DOCUMENTED`: observed implementation has no current documentation mapping.
- `DOCUMENTED_NOT_IMPLEMENTED`: governed design exists but corresponding implementation is absent.
- `UNEXPECTED`: observed implementation has no known requirement/Spec mapping.
- `VERSION_DRIFT`: dependency/build/runtime version differs from the applicable baseline.
- `CONFIGURATION_DRIFT`: effective configuration differs without approved mapping.
- `ARCHITECTURE_DRIFT`: module/dependency/interface/runtime structure violates or bypasses expected architecture.
- `DRIFT`: generic parent classification used only when a more precise drift type cannot yet be established.
- `UNKNOWN`: neither existence nor absence can be established from available evidence.
- `BLOCKED_BY_EVIDENCE`: observation exists but required reproducible proof cannot be obtained.
- `UNVERIFIED`: existence is observed but execution/test behavior is not proven.
- `CONFLICTED`: sources/evidence disagree and cannot be reconciled automatically.

## Reconciliation matrix

| Area | Expected from Seed | Observed | Outcome | Evidence refs | Affected Specs/capabilities | Next action |
|---|---|---|---|---|---|---|
| architecture | logical boundaries, ports/adapters, decisions | | | | | |
| modules | capability-oriented modules; no global-layer spaghetti | | | | | |
| stack | current baseline plus evolution rules | | | | | |
| versions | exact build/runtime dependency versions | | | | | |
| agents | roles/contracts/authority | | | | | |
| Skills | IDs/versions/loaders/allowed Tools | | | | | |
| Tools | IDs/schemas/handlers/policy/side effects | | | | | |
| schemas | files, `$id`, refs, consumers, validation | | | | | |
| tests | type, mapping, last execution/result | | | | | |
| runtime | health, behavior, config, evidence | | | | | |
| deployment | workstation/services/network/stores | | | | | |
| capabilities | current state/maturity/dependencies | | | | | |
| self-model/projections | canonical nodes/relations, audience/authority filters, view/document mapping | | | | | |
| assurance/fitness | claims, verification strategies, checks, metrics and evidence | | | | | |

## Required controls

1. Fix repository/branch/commit before observation.
2. Read only until the reconciliation receipt is complete.
3. Never map staging content to implementation state.
4. Separate file/code presence, build success, test success and runtime verification.
5. Preserve unexpected code as evidence; do not delete or rewrite it during reconciliation.
6. Every drift links expected authority and observed evidence.
7. Produce gaps and eligible Work Items; do not silently repair within bootstrap.
8. Preserve expected design and observed reality as separate linked claims; neither overwrites the other.
9. For every material claim, record whether it is machine-verifiable, partially machine-verifiable, judgment-required or authority-required.
10. Derive the executable frontier only after outcomes, blockers, context, authority and verification feasibility are known.

## Output

`RECONCILIATION_RECEIPT` contains inventory, matrix, conflicts, gaps, capability-state deltas, eligible/blocked work and any irreducible Decision Package.

## Source recovery order for this acceptance block

1. `SER-002`: organizational implementation repository and exact commit.
2. `SER-003`: original Devin baseline and run evidence.
3. `SER-006`: reproducible Java 21 build, tests and runtime evidence against the identified commit.

All three remain `BLOCKED_BY_SOURCE` in the current Work workspace. A derived baseline does not satisfy `SER-003`, and the staging repository never satisfies `SER-002`.

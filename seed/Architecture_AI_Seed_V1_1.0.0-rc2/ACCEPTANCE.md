# ACCEPTANCE.md — Seed V1 Acceptance Runbook

## Control

| Field | Value |
|---|---|
| `asset_id` | `HAPPY-BOOT-0005` |
| `version` | `0.1.0-draft` |
| `status` | `DRAFT / DESIGNED_NOT_EXECUTED` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `scenario` | `SEED-ACCEPT-001` |
| `implementation_authorized` | `NO` |

This runbook prepares acceptance; it is not evidence that acceptance ran. Use the package root manifest and exact version/hash before any receipt is produced.

## Acceptance question

Can a clean authorized session use only this Seed to understand Architecture AI, verify package identity, reconcile an observed implementation, derive safe next work, preserve evidence and resume without replaying the original chats?

## Canonical source order

1. Root `HANDOFF_MANIFEST.md`, `README.md` and `BOOTSTRAP.md`.
2. `knowledge/00_MASTER_CONTEXT.md`, Architectural DNA, Capability Map and Initial Knowledge Model.
3. decisions, Specs, relationships and traceability.
4. observed implementation baseline, Gap Matrix and test/evidence registers.
5. open questions, SERs and Research/Expansion Obligations.

Newer governed status/version/supersession wins only with provenance. Observed code does not silently erase expected design; expected design does not imply implementation.

## Source recovery order

| Order | Source | Required result | Current state |
|---:|---|---|---|
| 1 | `SER-002` | organizational implementation repository, branch and commit | `BLOCKED_BY_SOURCE` |
| 2 | `SER-003` | original Devin baseline tied to the same commit/run | `BLOCKED_BY_SOURCE` |
| 3 | `SER-006` | reproducible Java 21 build, test and runtime evidence on that commit | `BLOCKED_BY_SOURCE` |

Do not substitute staging, derived summaries or web research for these sources.

## Acceptance sequence

1. Verify package SHA-256, content manifest and root navigation.
2. Produce a read-only `BootstrapReceipt`; list exact assets, versions, gaps and available capabilities.
3. When `SER-002/003/006` exist, apply the baseline reconciliation template and emit typed findings.
4. Derive the executable frontier from current state, hard dependencies, entry criteria, context, authority and blockers.
5. Run `FX-L/M` for Self-Knowledge/Documentation; run `FX-N` for governed ingestion and restart; run `FX-O/P` for frontier and autonomous expansion.
6. When environment/delivery sources and explicit authority exist, run `FX-Q/R`; direct access or credentials never authorize mutation.
7. Run `FX-S/T` only with an owner-approved readiness profile and observed collaboration/delivery controls.
8. Run Session A/B without conversation replay and compare semantic state, authority, evidence and next work.
9. Re-evaluate G1–G12 and update state only through evidence-linked receipts.

## Deterministic assurance

The LLM may reason, propose, synthesize and explain. It may not self-certify correctness. A material machine-verifiable claim must follow:

`CLAIM → VERIFICATION STRATEGY → CHECK/FITNESS FUNCTION → METRIC → EVIDENCE → PROMOTION`

Use the L0–L7 lens in `knowledge/75_SEED_GATE_HARDENING_AND_COMPLETENESS.md`; it is a derived acceptance lens, not an adopted standard. Framework candidates remain under `RO-ACCEPT-001`.

## Expected receipts

- package verification receipt;
- `BootstrapReceipt`;
- `ImplementationSourceReceipt` for SER-002;
- `BaselineReconciliationReceipt` for SER-003;
- `BuildRuntimeReceipt` for SER-006 on the same observed commit;
- repository/runtime observation report;
- typed reconciliation report;
- executable/blocked frontier with dependency paths;
- applicable fitness/check results;
- evidence-linked `StateUpdateDelta`;
- Session A/B equivalence report;
- complete Decision Package only for an irreducible human/authority blocker.
- capability/access/authority state receipt and institutional delivery-path observation;
- profile-specific adoption Claim/Argument/Evidence result;
- multi-architect allocation/isolation/review receipt when that profile is evaluated.

## Gates

Current factual status is recorded in docs 87/61. Handoff readiness is `TRUE` because remaining real-environment execution is explicitly deferred with receipts; build readiness is `FALSE`. Package integrity alone never promotes execution gates.

## Stop conditions

- missing or mismatched commit/baseline/build evidence;
- architecture or security-policy conflict;
- unavailable mandatory access;
- unobserved Tool/Skill assumed as available;
- proposed state elevation without deterministic evidence where possible;
- need for institutional authority.
- environment or delivery mutation requested from reachability/credentials without explicit authority;
- readiness/adoption claim without its profile-specific criteria and evidence.

Stop only affected work, preserve independent eligible work, and emit a typed blocker or Decision Package. Do not create a new numbered prompt/wave.

## rc2 acceptance supplement

[FX-RC2-A..F](knowledge/90_POST_RC1_RECONCILIATION.md) cover candidate-set failure, mixed-source snapshots, rebuild equivalence, governed write-back, ML non-promotion and access-without-authority. All are DESIGNED_NOT_EXECUTED. Use them after authorized bootstrap; no Work/runtime implementation claim.

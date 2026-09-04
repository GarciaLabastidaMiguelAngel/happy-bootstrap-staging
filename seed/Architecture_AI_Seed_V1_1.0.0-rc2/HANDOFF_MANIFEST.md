# Handoff Manifest

| Field | Value |
|---|---|
| seed | `Architecture_AI_Seed_V1` |
| version | `1.0.0-rc2` |
| snapshot_id | `SEED-SNAPSHOT-RC2-001` |
| work_directive | `P-SEED-RC2-GIT-PUBLISH-01` |
| predecessor | `1.0.0-rc1 / SEED-SNAPSHOT-CLOSE-001 / P-SEED-CLOSE-01`; preserved unchanged |
| status | `HANDOFF_READY / PREPARED_NOT_DELIVERED` |
| happy_handoff_ready | `HAPPY_HANDOFF_READY = TRUE` |
| specification_baseline_ready_for_build | `SPECIFICATION_BASELINE_READY_FOR_BUILD = FALSE` |
| exact_entry_point | `README.md → BOOTSTRAP.md → ACCEPTANCE.md` |
| content_hash | `9d2ce36928a651bebb4eaae52d6a0783004336e6d6b46164b6c5bb4fbd5ce9ce` |
| package_sha256 | `EXTERNAL_SIDECAR_BY_DESIGN` |
| git_commit | `NONE` |
| git_sync_status | `PREPUBLICATION_SNAPSHOT; publication receipt external` |
| delivery_status | `NOT_DELIVERED_TO_DEVIN` |

## Canonical root assets

`README.md`, `AGENTS.md`, `BOOTSTRAP.md`, `ACCEPTANCE.md`, `CONTEXT_PACK.md`, `CAPABILITY_MAP.md`, `OPERATING_MODEL.md`, `EVOLUTION_STRATEGY.md`, `CURRENT_IMPLEMENTATION_BASELINE.md`, `REPOSITORY_MAP.md`, `EXPANSION_OBLIGATIONS.md`, `SEED_V1_READINESS.md` and this manifest.

Deep knowledge is indexed by `knowledge/README.md`; status and authority always remain explicit. The Control Maestro workbook in `control/` is the preserved rc1 historical snapshot; [document 90](knowledge/90_POST_RC1_RECONCILIATION.md) is its additive rc2 control/delta layer. It also defines the current post-rc1 refinement scope. Original closure/validation reports and evidence remain historical; current package verification is `evidence/seed-rc2-validation.json` plus external validation/delivery receipts.

## Source precedence

1. this manifest and explicit supersession/version metadata;
2. current approved decisions/invariants and canonical governed records;
3. formal Specs and schemas at their declared status;
4. current implementation evidence from an identified repo/runtime;
5. baseline/gap/test/evidence registers;
6. open questions, SERs and research obligations;
7. historical sources and prompt/wave material as provenance, not orchestration.

Within this snapshot, document 90 and explicitly labelled rc2 additions supersede only the stated incomplete target/obligation detail. They do not silently promote proposals, rewrite historical gate results or change authority. Root views preserving older compilation metadata must be read with this manifest/current readiness. The final Git SHA is recorded outside its own immutable snapshot, in the staging publication receipt.

When two records conflict, record `REAL_CONFLICT`, `TEMPORAL_EVOLUTION`, `TERMINOLOGY`, `IMPLEMENTATION_DRIFT` or `INCOMPLETE_INFORMATION`; do not resolve silently.

## Known blockers

See `knowledge/72_RESEARCH_AND_SER_NORMALIZATION.md`. `SER-001..012` and `SER-014` remain open. `SER-013` is only partially satisfied. Source-enabled acceptance starts with `SER-002 → SER-003 → SER-006`; staging never satisfies the implementation-repository requirement. No Git sync or Devin delivery is claimed; ZIP is a first-class transport.

## What this is / is not

This is the portable Seed release candidate and operating contract for clean Devin bootstrap. It is not the production implementation repository, proof of a successful build/runtime, an exhaustive chat archive or authority to mutate institutional systems.

`CANONICAL`, `DERIVED`, `PROPOSAL`, `UNKNOWN` and `BLOCKED_BY_SOURCE` retain their declared status. Devin must discover the real repository, baseline, runtime, capabilities and permissions; it must not assume a Tool, Skill, topology, Graph engine, policy or authority.

## First run and receipts

Follow `README.md → BOOTSTRAP.md → ACCEPTANCE.md`. Resolve SER-002/003/006 through `ImplementationSourceReceipt`, `BaselineReconciliationReceipt` and `BuildRuntimeReceipt` on disclosed commits, then emit aggregate `BootstrapReceipt`, current-state reconciliation and first executable frontier. Resume from repository/state and evidence, never prompt history or chat replay.

The first visible targets are Self-Knowledge/Documentation, governed Knowledge Ingestion and Environment/Delivery awareness. Escalate only irreducible authority/architecture/security/requirement conflicts using a complete Decision Package. All other pending execution is indexed by `knowledge/88_DEFERRED_TO_DEVIN_BOOTSTRAP.md`.

## Integrity model

`CONTENT_HASH` is the SHA-256 of a deterministic sorted content manifest excluding self-referential inventory/hash/manifest files. `PACKAGE_HASH` is the SHA-256 of the final ZIP and is stored outside the ZIP in a sidecar/delivery manifest; embedding it would change the package being hashed.

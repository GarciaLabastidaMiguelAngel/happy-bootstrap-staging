# Architecture AI Seed V1

Status: `HANDOFF_READY / PREPARED_NOT_DELIVERED`  
Version: `1.0.0-rc2`  
Snapshot: `SEED-SNAPSHOT-RC2-001`  
Readiness: `HAPPY_HANDOFF_READY = TRUE`  
Build baseline: `SPECIFICATION_BASELINE_READY_FOR_BUILD = FALSE`

This repository is a bootstrap Seed: the compact, portable entry point for reconstructing the current knowledge state, reconciling it with a real implementation repository and deriving the next eligible work under governance.

It is **not** the production implementation repository, a complete implementation, an exhaustive chat archive or proof that reported code/runtime/tests are verified.

## Start here

rc2 preserves rc1 and adds only the [post-rc1 reconciliation and Control Maestro delta](knowledge/90_POST_RC1_RECONCILIATION.md). Read it for projection consistency, Graph modeling research, diagnostic/value obligations and source-gated recent context. No implementation or technology selection is implied.

1. Verify `HANDOFF_MANIFEST.md`, `CONTENT_MANIFEST.sha256` and the external ZIP sidecar.
2. Execute `BOOTSTRAP.md` from this repository root.
3. Use `ACCEPTANCE.md` to produce—not assume—the required receipts.
4. Read `CONTEXT_PACK.md`, then `AGENTS.md`.
5. Reconcile against the organizational implementation repository using `CURRENT_IMPLEMENTATION_BASELINE.md` and `knowledge/71_BASELINE_RECONCILIATION_TEMPLATE.md`.
6. Determine eligible work from `CAPABILITY_MAP.md`, `OPERATING_MODEL.md`, Specs, gaps and source blockers.
7. Use `EXPANSION_OBLIGATIONS.md` to continue post-handoff without reconstructing Work prompts.

The first clean run is: `VERIFY SEED → DISCOVER ENVIRONMENT → SER-002 receipt → SER-003 receipt → SER-006 receipt → CURRENT STATE → BootstrapReceipt → EXECUTABLE FRONTIER`. See `knowledge/88_DEFERRED_TO_DEVIN_BOOTSTRAP.md`.

## Authority and status

`HANDOFF_MANIFEST` defines this snapshot. Newer explicit decisions and supersession records outrank older narrative. Canonical governed knowledge and approved decisions outrank derived views; observed evidence outranks reported implementation claims. `PROPOSAL`, `DRAFT`, `DISCOVERED`, `BLOCKED_BY_SOURCE` and `NOT_OBSERVED` must never be read as approved or verified.

Visibility, discovery and platform knowledge do not transfer organizational ownership or authority. Domain evolution begins non-intrusively; deterministic automation requires Harness evidence, shadow validation and the real owner/authority.

Capability, access, authority, readiness and adoption are distinct. Reachability, credentials or a successful implementation do not authorize production mutation or certify architect/domain adoption.

## Main locations

- root files: bootstrap, navigation, readiness, operating contract and compact views;
- `ACCEPTANCE.md`: acceptance sequence, source recovery order and required receipts;
- `EXPANSION_OBLIGATIONS.md`: root-visible post-handoff research/expansion boundary;
- `knowledge/`: canonical compilation, deep models, Specs, schemas, diagrams and provenance;
- `architecture_ai_package/`, `wave0_governance/`, `wave1_content/`, `wave2_content/`, `source_corpus/`: preserved source material;
- `control/`: byte-preserved rc1 Control Maestro; current additive control is document 90;
- `fixtures/`: acceptance, escalation, expansion and reconciliation entry points.

Clone and ZIP are equivalent transport targets. After interruption, restart at `BOOTSTRAP.md`; do not depend on chat memory. Report missing or conflicting knowledge as a typed gap/SER/research obligation, never as an invented fact.

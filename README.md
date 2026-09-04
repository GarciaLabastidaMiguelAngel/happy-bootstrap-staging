# Architecture AI Seed — Bootstrap Staging

Temporary personal staging for Architecture AI Seed handoff. **Not** the implementation repository, organizational canonical repository, production infrastructure or a substitute for SER-002.

Current candidate: **1.0.0-rc2**  
Snapshot: `SEED-SNAPSHOT-RC2-001`  
Status: `HANDOFF_READY / PREPARED_NOT_DELIVERED`  
`HAPPY_HANDOFF_READY = TRUE`  
`SPECIFICATION_BASELINE_READY_FOR_BUILD = FALSE`

## Download and verify

1. Download the [exact validated Seed ZIP](releases/Architecture_AI_Seed_V1_1.0.0-rc2.zip) using **Download raw file**, not GitHub's repository-wide Download ZIP.
2. Download its [SHA-256 sidecar](releases/Architecture_AI_Seed_V1_1.0.0-rc2.zip.sha256) and run `sha256sum -c Architecture_AI_Seed_V1_1.0.0-rc2.zip.sha256` in the download directory.
3. Read the [Delivery Manifest](manifests/Architecture_AI_Seed_V1_1.0.0-rc2.delivery-manifest.md).
4. Unpack, enter `Architecture_AI_Seed_V1_1.0.0-rc2`, then follow `README.md → BOOTSTRAP.md → ACCEPTANCE.md`.

The [expanded Seed](seed/Architecture_AI_Seed_V1_1.0.0-rc2/README.md) represents the same snapshot. The [reconciliation delta](seed/Architecture_AI_Seed_V1_1.0.0-rc2/knowledge/90_POST_RC1_RECONCILIATION.md) explains why rc2 was required. Publication does not constitute Devin delivery or build/runtime verification.

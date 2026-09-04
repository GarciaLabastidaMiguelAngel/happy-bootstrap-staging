# 89 — Seed Final Validation Report

## Control

| Field | Value |
|---|---|
| `artifact_id` | `HAPPY-KNOW-89` |
| `seed_version` | `1.0.0-rc1` |
| `snapshot_id` | `SEED-SNAPSHOT-CLOSE-001` |
| `status` | `PASS_LOCAL / 0_ERRORS / 0_WARNINGS` |
| `scope` | `local package/static integrity only` |

## Results

| Check | Result |
|---|---|
| package files | `194` |
| governed/content-manifest files | `191` |
| Markdown / JSON / schemas / Mermaid / formal Specs | `138 / 19 / 18 / 26 / 10` |
| required root and deep assets | `PASS` |
| JSON and local schema references | `PASS` |
| relative Markdown links | `PASS` |
| duplicate canonical IDs | `PASS` |
| orphan required identities | `PASS` |
| secret/private-key/token/PAN-like scan | `PASS` |
| workbook formula scan | `PASS — 0 matches` |
| ZIP archive integrity | `PASS_LOCAL` |
| previous snapshot preservation | `PASS` |

Duplicate basenames are intentional root projections/source copies and were reported, not treated as canonical identity duplication. Content and package hashes are recorded in the finalized manifest and external sidecar.

This validates local documentary/package integrity only. It does not prove clean bootstrap, implementation reconciliation, build, runtime, restart, capability or adoption acceptance.

# Architecture AI — LAB Handoff Release R1 Manifest

Release ID: `AAI-LAB-R1-D0006`
Release type: `LAB_HANDOFF_RELEASE`
Status: `HANDOFF_READY`
Direction: `DIRECTION-0006`
Historical baseline: `Architecture_AI_Seed_V1_1.0.0-rc2`
Historical rc2 ZIP SHA-256: `053e74438bca6968d441ac26b2ef3d2a97972ea4574f9a397a63be1e7b8896ec`
Main baseline before release metadata: `e56bb1eb993c85a639400c78bf0a75ffaa38e13e`

## Purpose

This is the first governed delivery package intended to be handed to Devin so it can bootstrap the LAB execution organization, validate Git coordination, create capability coverage, establish bounded specialist workstreams/sessions and begin the first controlled parallel construction wave.

This is NOT a production software release and it is NOT a replacement for the immutable rc2 historical package.

## Package composition

The downloadable ZIP should contain:

### A. Historical immutable baseline

- `Architecture_AI_Seed_V1_1.0.0-rc2.zip`
- `Architecture_AI_Seed_V1_1.0.0-rc2.zip.sha256`

The rc2 ZIP must remain byte-identical to the historical release.

### B. Current working direction and governance

- complete `work/` tree from the release Git baseline, including:
  - `DIRECTION_BASELINE.md`
  - change-impact records
  - post-rc2 evolution overlays
  - capability/organization/governance models
  - Arc42 lifecycle and diagramming governance
  - analytics/audit/evidence model
  - standards intelligence model
  - CQRS/knowledge graph/read-model model
  - backlog/autonomy/OpenShift readiness models
  - information-classification/PCI model
  - research fabric
  - QA/deployment/consistency model
  - governance councils
  - prompt registry and prompt files

### C. Handoff entry points

- `START_HERE.md`
- `RELEASE_MANIFEST.md`
- `HANDOFF_TO_DEVIN.md`

## Primary executable instruction

Primary prompt:

`work/prompts/active/P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01.md`

Status at release assembly: `READY`, not automatically `SENT` or `EXECUTED`.

## Prompt-state rule

The package includes other historical/current prompts for context and future collision-aware dispatch. Do not execute every READY prompt automatically.

The LAB bootstrap prompt is the first coordinator. It must inspect the real implementation repository, validate Git parallel-development readiness, build capability coverage and decide which specialist sessions can safely run concurrently.

## Open research issues carried with the release

- Issue #1: ArchiMate source/version reconciliation.
- Issue #2: institutional information-classification/Purview/PCI/identity-step-up reconciliation.

These issues represent unresolved research and must not be converted into invented facts.

## Authority order for current execution

When interpreting overlapping content:

1. current `DIRECTION_BASELINE.md` / DIRECTION-0006;
2. explicit DIRECTION-0006 impact and post-rc2 overlay;
3. current prompt index and primary LAB bootstrap prompt;
4. DIRECTION-0004/0005 post-rc2 overlays and active work governance;
5. immutable rc2 baseline for historical and still-valid knowledge;
6. older historical evidence as historical evidence only.

An explicit newer direction may extend or supersede a current working assumption, but must not rewrite historical evidence.

## No-loss / no-invention rules

- Do not restart Architecture AI.
- Do not discard working implementation without verified defect/material conflict.
- Do not invent missing APIs, infrastructure, identity, persistence, standards, bank policy, security authorization or implementation evidence.
- Missing facts become `UNKNOWN`, blockers or ResearchRequests.
- Preserve IDs, provenance and historical release integrity.

## Current LAB priority

During this construction release, optimize for:

1. fastest safe progress;
2. useful parallelism;
3. tangible local dashboard/Director functionality;
4. evidence collection;
5. coherent integration.

AI usage is measured but is not currently a blocking optimization target. Long-term SOLUTION/SERVICE remains cost-aware.

## Integrity of this release

The final downloadable ZIP is generated externally from this repository state. Its own SHA-256 is stored alongside the downloadable ZIP as a sidecar file to avoid self-referential hashing.

# Architecture AI — LAB Handoff Release R2 / V1 Manifest

Release ID: `AAI-LAB-R2-D0014-V1`
Release type: `LAB_HANDOFF_RELEASE`
Release series: `R2`
Release cut: `V1`
Status: `HANDOFF_READY`
Direction: `DIRECTION-0014`
Release branch: `release/lab-r2-d0014-v1`
Source main baseline before release branch: `14fad3a11a12c53ecf104f6e13127e47a8087379`
Previous frozen LAB handoff: `AAI-LAB-R1-D0006`
Historical rc2 ZIP SHA-256: `053e74438bca6968d441ac26b2ef3d2a97972ea4574f9a397a63be1e7b8896ec`

## Purpose

This is the second governed LAB handoff series and its first immutable cut under DIRECTION-0014.

It packages the current Happy Work architecture/governance/context state for Devin so the implementation can be reconciled against the current direction and construction can continue through bounded, Git-coordinated parallel lanes.

This is NOT a production software release. It is a governed implementation handoff package.

## Release delta from R1

R1 was frozen at DIRECTION-0006.

R2/V1 carries the cumulative accepted direction through DIRECTION-0014, including the material additions introduced after R1:

- bank integration/adoption/process-learning strategy;
- Smart Notification reuse/adoption direction;
- progressive PCR/performance/capacity gates;
- six logical planes;
- customer IAM/adaptive-access direction;
- CQRS projection consistency and freshness/reconciliation semantics;
- Control-M/job modernization classification;
- governance-intent vs runtime-realization separation;
- logical event/channel vs physical Kafka topology separation;
- explainable standards/adoption/conformance scoring;
- DevOps operability and AIOps evidence-driven adoption;
- Dashboard + governed Copilot as the architect cognitive surface;
- process governance, justified gates and compliance radar;
- banking QUERY / TRANSACTION / REQUEST / LONG_RUNNING_OPERATION distinction;
- operation/reference/folio traceability model;
- consumer-first technical capability strategy;
- arborescent modular growth and evidence-driven extraction;
- tree-for-decomposition + graph-for-canonical-cross-cutting-truth;
- knowledge direction and arborescent projections;
- infrastructure placement/capacity/cluster evidence model;
- dynamic Knowledge Radar;
- hybrid multi-scale retrieval and Knowledge Anthologies;
- bounded ContextPlan/context-budget governance;
- Devin provider projection governance;
- claim/evidence verification and cognitive retrieval evaluation agenda.

## Package composition

The downloadable ZIP contains:

### A. Historical immutable baseline archive

- `Architecture_AI_Seed_V1_1.0.0-rc2.zip`
- `Architecture_AI_Seed_V1_1.0.0-rc2.zip.sha256`

The historical ZIP remains byte-identical and is included only for baseline continuity/evidence.

### B. Current working direction and governance

- complete `work/` tree from this release branch, including:
  - `DIRECTION_BASELINE.md` at DIRECTION-0014;
  - DIRECTION-0014 impact assessment;
  - cognitive knowledge/context models;
  - arborescent modularity/capability/placement models;
  - banking POC/evolution models;
  - event/process/compliance/governance models;
  - DevOps/PCR/observability models;
  - research agendas and issue-backed evidence requests;
  - prompt registry/history plus the release-specific R2 primary prompt.

### C. Release entry points

- `START_HERE.md`
- `RELEASE_MANIFEST.md`
- `PROMPT_RELEASE_INDEX.md`
- `HANDOFF_TO_DEVIN.md`

## Primary executable instruction

Primary prompt:

`work/prompts/active/P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-02.md`

Status at release assembly: `READY`.

It is NOT automatically `SENT` or `EXECUTED` by creation of this release.

`P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01` is retained as historical/bootstrap context from the earlier direction but is NOT the primary R2 handoff instruction.

## Release-specific prompt authority

For this release, use:

1. `work/DIRECTION_BASELINE.md` / DIRECTION-0014;
2. `work/changes/DIRECTION-0014_IMPACT.md`;
3. `PROMPT_RELEASE_INDEX.md`;
4. `P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-02.md`;
5. current supporting models in `work/`;
6. older prompts/direction only where still compatible and explicitly useful;
7. historical immutable baseline evidence for facts not superseded by current direction.

Do not allow the generic prompt index's older direction label to override this release overlay if it has not yet been refreshed on the development branch.

## Current research/evidence dependencies

GitHub issues and research records remain authoritative for unresolved external/institutional evidence.

Important current dependencies include, as applicable:

- Glo/OpenShift delivery contracts;
- regulatory/institutional artifact obligations;
- web Customer Position/binding/frontend evidence;
- Spring Cloud Gateway vs API Connect boundaries;
- current customer credential/login/binding/risk architecture;
- Control-M workload/malla inventory;
- Smart Notification capabilities/process;
- PCR/load/performance tooling/process;
- event governance/Kafka/Schema Registry topology;
- DEV OpenShift operability/environment capabilities;
- API/microservice/OpenShift topology efficiency;
- customer operation references/async-request eligibility;
- process gates/mandatory compliance applicability;
- OpenShift cluster capacity/placement/chargeback;
- cognitive retrieval/knowledge graph/context strategy evaluation (Issue #18).

Missing evidence remains `UNKNOWN` / ResearchRequest / Blocker.

## No-loss / no-invention rules

- Do not restart Architecture AI.
- Do not discard working implementation without verified defect/material conflict.
- Do not invent APIs, infrastructure, identity, persistence, standards, bank policy, security authorization, regulatory requirements or runtime evidence.
- Preserve IDs, provenance, direction history and frozen historical releases.
- Provider/session state is not canonical project state.
- RAG/vector similarity is not sufficient evidence by itself.
- Do not force a microservice, topic, namespace or cluster boundary from a conceptual taxonomy alone.
- Material actions remain deterministic, authorized, auditable and gated.

## Current LAB priority

1. reconcile actual implementation against DIRECTION-0014;
2. preserve fastest safe construction;
3. maximize useful parallelism after Git/surface readiness;
4. make Dashboard/Copilot cognitive context explainable;
5. establish stable arborescent module boundaries before scaling implementation;
6. continue evidence-driven banking POCs;
7. make DevOps/PCR/operability measurable from early stages;
8. evaluate cognitive retrieval/context mechanisms against real Architecture AI tasks instead of selecting by analogy alone;
9. retain independent QA/reconciliation.

## Integrity

The final downloadable ZIP is generated from the frozen release branch and has its own SHA-256 sidecar file generated outside the ZIP to avoid self-referential hashing.

The exact release branch HEAD and generated ZIP SHA-256 are reported with the handoff artifact.
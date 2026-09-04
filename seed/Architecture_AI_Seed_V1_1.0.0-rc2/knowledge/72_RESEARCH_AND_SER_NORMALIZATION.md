# 72 — Research Obligations & Source Extraction Normalization

## Control

| Field | Value |
|---|---|
| `artifact_id` | `HAPPY-KNOW-72` |
| `wave` | `P-WAVE-3D-01` |
| `status` | `DRAFT` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `research_executed` | `NO` |
| `SERs_closed_by_inference` | `0` |

This register normalizes execution without destroying the stable identities in `62_RESEARCH_OBLIGATIONS_STANDARDS_AND_GAPS.md` or `43_SOURCE_EXTRACTION_REQUESTS.md`. A package groups related work; it does not merge or close the underlying records.

## Research execution packages

| Package | Included ROs | Capability/question boundary | Decision enabled | Trigger | Priority basis | Preferred primary sources | Acceptance criteria | Status |
|---|---|---|---|---|---|---|---|---|
| `RP-3D-01` | `RO-3C-001` | Standard semantics for Work, case, decision and Loop Engineering | BPMN/CMMN/DMN composition vs thin custom lifecycle profile | before Planning/Loop runtime design | prevents custom engine and semantic drift | OMG BPMN, CMMN and DMN specifications; conformant implementations | coverage and gap matrix; identity/evidence/autonomy fit; interoperability and complexity | `RESEARCH_REQUIRED` |
| `RP-3D-02` | `RO-3C-002,005,012` | Architecture representation, executable conformance, consistency receipts and efficiency measurement | Software Architecture/Conformance Profile | before conformance automation or approval gate | cross-cutting correctness and measurable system efficiency | FINOS CALM; Spring Modulith; ArchUnit; OTel; selected analyzers/performance sources | end-to-end mapping logical→module→rule→finding→evidence; workload/uncertainty model | `RESEARCH_REQUIRED` |
| `RP-3D-03` | `RO-3C-003,004,006` | Identity, terminology, retrieval consistency and research evidence | knowledge/query/research profiles | before canonical registries or search implementation | enables trusted context and reproducible discovery | W3C PROV/SKOS; Confluence API/CQL; governed IR/research sources | identity and alias model; seven no-result causes; permission/freshness; precommitted research gate | `RESEARCH_REQUIRED + PARTLY_BLOCKED_BY_SOURCE` |
| `RP-3D-04` | `RO-3C-007,008,009,010,011,020` | Technology/capability lifecycle, commercial control, reliability, audit reuse and supply chain | technology/capability/operating overlays | baseline change, EOL/CVE/license/provider event, reuse decision | corporate capability first; avoid false availability/control claims | vendor/project support; corporate catalogs; SRE; SPDX/CycloneDX/SLSA; governed bank sources | capability fit, lifecycle, control boundary, license, SLO/RPO/RTO evidence, audit reuse and SBOM mapping | `RESEARCH_REQUIRED + BLOCKED_BY_SOURCE` |
| `RP-3D-05` | `RO-3C-013,014` | Human-AI experience, accessibility, locale and terminology | Experience/Localization Profile | before authoritative UI/localization expansion | semantic integrity and usable role-specific product | W3C/WAI; Unicode CLDR; IETF language tags; governed terminology sources | personas/journeys, accessibility, semantic invariance, fallback, validation/versioning | `RESEARCH_REQUIRED` |
| `RP-3D-06` | `RO-3C-015,016` | Threat-model projection and AI use-case governance | Threat Model Package and AI Use Case Registry | before CISO package or ML/model promotion | security and policy must precede model adoption | OWASP/NIST; interoperable threat formats; NIST AI RMF; applicable corporate sources | architecture projection; risk/control/evidence; non-AI baseline; evaluation and rollback gates | `RESEARCH_REQUIRED + PARTLY_BLOCKED_BY_SOURCE` |
| `RP-3D-07` | `RO-3C-017,018` | Official MCP conformance and Confluence MCP-vs-API benchmark | connector/transport mechanism per use case | before MCP contract freeze | current custom WebSocket label is not proof of MCP conformance | official MCP and Confluence API/CQL documentation; observed connector capabilities | protocol/auth/error matrix; bulk/interactive benchmark; conformance tests | `RESEARCH_REQUIRED + BLOCKED_BY_SOURCE` |
| `RP-3D-08` | `RO-3C-019` | Canonical source, rendering and publication without bidirectional drift | Publication/Projection Profile | before automated publication/sync | one authoritative home per governed type | Git, Confluence, docs/diagram-as-code and provenance primary sources | authority matrix, conflict model, derivative digest/version and publication receipt | `RESEARCH_REQUIRED` |
| `RP-3E-01` | `RO-3E-001,003` | capability/work decomposition plus architecture descriptions/viewpoints | Tree/model/view composition; no proprietary planner | before capability tree/Planning or Domain projection formalization | preserves model interoperability and avoids reasoning-pattern lock-in | authoritative planning/model/view standards and existing corpus | concept/overlap/gap matrix, identity/authority/evidence fit, cost/portability and thin-layer decision | `RESEARCH_REQUIRED` |
| `RP-3E-02` | `RO-3E-002` | Claim→Argument→Evidence assurance | assurance profile or composed existing model | before institutional assurance implementation | prevents unsupported promotion and custom semantics | authoritative SACM/GSN material and tooling | claims/arguments/evidence/conflicts/provenance/authority/tool-exchange mapping | `RESEARCH_REQUIRED` |
| `RP-3E-03` | `RO-3E-004` | federated domain capability ownership/introspection | capability federation/profile decision | after organizational sources and before domain integration | preserves real owners/authority and local variants | authoritative governance models plus institutional catalog/process sources | owner/authority/local/shared/promotion/conflict model; permissions, costs and thin-layer disposition | `RESEARCH_REQUIRED + BLOCKED_BY_SOURCE` |
| `RP-ACCEPT-01` | `RO-ACCEPT-001` | deterministic assurance, architecture fitness and canonical model→view→document tooling | reuse/compose/thin custom/defer toolchain decision | after `SER-002/006`, before implementing Self-Knowledge/Documentation assurance | an LLM cannot self-certify; avoid custom tooling where mature deterministic capabilities fit | official ArchUnit, Structurizr, docToolchain, Testcontainers, OpenRewrite and policy/tool documentation plus observed repo/build constraints | fit/license/security/portability/cost matrix; deterministic evidence mapping; reproducible bounded spikes; explicit rejection/defer rationale | `RESEARCH_REQUIRED + PARTLY_BLOCKED_BY_SOURCE` |

## Normalization conclusions

- All `RO-3C-001..020` remain individually addressable and open.
- All `RO-3E-001..004` remain individually addressable and open; 3E performed no deep research.
- `RO-ACCEPT-001` remains open; P-SEED-ACCEPT-01 names candidates but performs no research or adoption.
- Execution should occur by bounded package, but findings must update each original RO.
- `RESEARCHED_NOT_ADOPTED` is the only valid current standard status in Wave 3D unless an earlier canonical decision states otherwise.
- Criteria must be fixed before results. `INCONCLUSIVE` is valid. A reference is not institutional adoption.

## SER classification

| SER | Still required | Seed effect | Post-handoff resolution | Classification | Current status / rationale |
|---|---|---|---|---|---|
| `SER-001` | yes | prevents complete G2/no-loss proof | may be ingested later without blocking safe explicit unknowns | `SEED_BLOCKER_FOR_G2_PASS` | `OPEN`; raw Happy conversations unavailable |
| `SER-002` | yes | blocks G4 and actual repository map | primary bootstrap reconciliation task if access exists | `POST_HANDOFF_RESOLVABLE + IMPLEMENTATION_BLOCKER + VERIFICATION_BLOCKER` | `OPEN`; staging repo is not implementation source |
| `SER-003` | yes | blocks trustworthy current baseline reconciliation | may be reconciled during bootstrap if report/run exists | `POST_HANDOFF_RESOLVABLE + VERIFICATION_BLOCKER` | `OPEN` |
| `SER-004` | yes | blocks exact Tool allowlists and MCP/tool claims | inventory from organizational repo/config/runtime | `POST_HANDOFF_RESOLVABLE + IMPLEMENTATION_BLOCKER` | `OPEN`; do not invent 30 Tools |
| `SER-005` | yes | blocks exact Skill availability and bootstrap Skill approval | inventory from organizational repo/manifests | `POST_HANDOFF_RESOLVABLE + IMPLEMENTATION_BLOCKER` | `OPEN`; do not invent 16 Skills |
| `SER-006` | yes | blocks VERIFIED build/runtime state | execute reproducibly against identified commit | `VERIFICATION_BLOCKER` | `OPEN`; Java 21 remains reported/design baseline only |
| `SER-007` | yes | blocks institutional banking policy/capability claims | requires governed owner/catalog access | `INSTITUTIONAL_BLOCKER` | `OPEN`; contextual examples remain non-policy |
| `SER-008` | yes | blocks final Graph ADR and graph-specific implementation | recover corpus and benchmark after source access | `IMPLEMENTATION_BLOCKER + HUMAN_DECISION_POSSIBLE` | `OPEN`; no final Graph ADR |
| `SER-009` | yes | blocks proof of Devin-specific loader/session automation | capability spike after tool access | `POST_HANDOFF_RESOLVABLE + VERIFICATION_BLOCKER` | `OPEN`; project contract remains portable |
| `SER-010` | yes | blocks complete Planning/Sprint and exact priority model | recover historical model; candidate-path planning remains usable | `IMPLEMENTATION_BLOCKER` | `OPEN`; does not justify invented weights |
| `SER-011` | yes | blocks complete historical standards/JSR/RFC no-loss | institutional and Happy reference recovery | `SEED_BLOCKER_FOR_G2_PASS + INSTITUTIONAL_BLOCKER` | `OPEN`; 3D research map is not adoption ledger |
| `SER-012` | yes | blocks project-wide prompt provenance/no-loss | import real run ledger; not needed to orchestrate post-cutover work | `SEED_BLOCKER_FOR_G2_PASS` | `OPEN`; `PROMPT_SEQUENCE_UNRESOLVED` remains |
| `SER-013` | partly | no longer blocks repository identity/access; clone/tree equivalence still must be proven after sync | not applicable after successful staging receipt | `NON_BLOCKING_GAP` | `PARTIALLY_SATISFIED`: public empty `main`, admin/push permission observed; sync receipt pending |
| `SER-014` | yes | makes organizational/domain ownership and authority explicit; unknowns do not block package assembly | can be ingested during domain bootstrap/introspection under permissions | `POST_HANDOFF_RESOLVABLE + INSTITUTIONAL_BLOCKER` | `OPEN`; no official organization/authority/capability inventory observed |

## Priority lanes after Seed assembly

1. **Bootstrap reconciliation:** `SER-002 → SER-003 → SER-006 → SER-005/004 → SER-009`.
2. **No-loss/authority:** `SER-001/012 → SER-011 → SER-007/014`.
3. **Deferred architecture:** `SER-010 → SER-008`; neither is silently frozen in the Seed.
4. **Transport:** finish `SER-013` only with commit, fetch/checkout and clone-or-ZIP integrity evidence.

## rc2 normalization delta

RO-RC2-001 adds one bounded Graph-modeling research obligation; RO-3C-012/016/019 are extended in register 62 without duplication. There are 26 open ROs. EXP-RC2-001/002 extend register 82. All SER-001..014 retain their factual state here. SER-013 transport completion is recorded externally only after actual publication/test. SER-002/003/006 remain bootstrap obligations, and latest JDK directive provenance must be reconciled before enforcement. See [document 90](90_POST_RC1_RECONCILIATION.md).

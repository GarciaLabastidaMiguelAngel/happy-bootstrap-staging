# Knowledge Anthology and Multi-Scale Retrieval Model

Status: ACTIVE_DIRECTION_MODEL
Direction: DIRECTION-0014

## Purpose

Define intermediate knowledge structures that let Architecture AI move coherently between raw sources, broad conceptual understanding, technical detail and implementation evidence.

The platform should not force every reasoning request to choose between `raw document search` and `entire knowledge graph`.

It needs multiple levels of abstraction.

## 1. Canonical truth vs derived knowledge products

Canonical knowledge is provenance-backed entities, relationships, decisions, standards, evidence and runtime bindings.

Derived knowledge products may include:
- branch summaries;
- community summaries;
- topic dossiers;
- curated anthologies;
- architecture viewpoints;
- standard applicability views;
- implementation/runtime summaries;
- current-state briefs.

Derived products are projections. They MUST retain links back to their supporting canonical evidence and must be regenerable/reviewable.

## 2. Anthology concept

A `Knowledge Anthology` is a governed curated collection around a question/domain/vector, not simply a folder of documents.

Candidate anthology contents:
- scope/purpose;
- canonical concepts;
- key literature/standards/institutional sources;
- verified claims;
- competing interpretations;
- evidence strength;
- unresolved questions;
- bank applicability;
- current architecture implications;
- technical realization links;
- runtime/PCR evidence where applicable;
- research horizon items;
- review/supersession state.

Examples:
- Cognitive Architectures and Context Engineering;
- Event Governance and Kafka Realization;
- Banking IAM and Adaptive Access;
- Performance/PCR Engineering;
- OpenShift Capacity/Placement;
- Secure Software/PCI/Regulatory Controls;
- Knowledge Representation and Retrieval.

## 3. Why anthologies exist

Anthologies bridge the gap between:
- a large set of raw literature;
- terse graph nodes;
- a reasoning task that needs coherent multi-source background.

They should help answer:
- What is the field's current relevant thinking?
- Which pieces apply to us?
- Which are only research candidates?
- What is already implemented?
- Where does evidence disagree?
- Which details must be fetched before implementation?

## 4. Multi-scale knowledge model

Use complementary scales:

### Source scale
Raw documents, code, configuration, metrics, logs, standards and authoritative evidence.

### Evidence-unit scale
Small provenance-preserving statements/chunks suitable for exact verification.

### Concept/entity scale
Normalized people/systems/capabilities/standards/requirements/events/APIs/data/processes/decisions.

### Relationship/graph scale
Cross-cutting semantic and technical relationships.

### Branch/tree scale
Hierarchical decomposition/navigation for capabilities, work and knowledge areas.

### Community/anthology scale
Broad thematic summaries connecting many related concepts/sources.

### Strategic scale
North-star direction, macro trends, enterprise context and long-horizon signals.

A query may traverse several scales in one reasoning cycle.

## 5. Query modes: local, global and drift

Candidate retrieval behaviors:

### LOCAL
Start from exact entities/implementation and expand nearby graph evidence.
Useful for:
- bug/implementation questions;
- one API/module/process;
- direct impact analysis.

### GLOBAL
Start from branch/community/anthology summaries to understand a broad corpus.
Useful for:
- `what are our major gaps?`;
- `what changed across the platform?`;
- strategic review.

### DRIFT / ADAPTIVE
Start broad enough to orient, then dynamically follow promising local relationships and subquestions.
Useful for ambiguous multi-domain questions.

These are engineering strategies to evaluate, not claims that one vendor algorithm must be adopted unchanged.

## 6. Arborescence and graph remain complementary

Use the tree/arborescence to locate broad areas quickly:

`Platform -> Knowledge -> Cognitive Retrieval -> Context Engineering`.

Then use the graph to cross boundaries:

`Context Engineering -> affects -> Devin Session Quality`
`Context Engineering -> constrained-by -> Information Classification`
`Context Engineering -> measured-by -> Retrieval Evals`
`Economic Trend -> impacts -> OpenShift Cost/Capacity Strategy`.

The same concept should not be duplicated merely because it participates in multiple branches.

## 7. Literature ingestion

External research ingestion should preserve:
- source/author/publisher;
- publication/version/date;
- source authority/type;
- claim/evidence extraction;
- domain/topic/vector tags;
- relationship to existing knowledge;
- adoption status;
- applicability to bank/platform;
- confidence/review state;
- copyright-safe references rather than uncontrolled copying.

Classify literature findings as, for example:
- FOUNDATIONAL_REFERENCE;
- CURRENT_RESEARCH;
- INDUSTRY_GUIDANCE;
- STANDARD;
- VENDOR_TECHNIQUE;
- INSTITUTIONAL_EVIDENCE;
- HYPOTHESIS;
- NOT_APPLICABLE;
- SUPERSEDED.

Do not promote research literature directly into mandatory architecture policy.

## 8. Current cognitive-retrieval research anchors

The research agenda should explicitly study at least:
- cognitive architectures such as ACT-R for ideas about knowledge organization/retrieval;
- semantic networks and spreading activation as conceptual models for associative retrieval;
- workspace/blackboard cognitive architectures for coordinating specialized knowledge sources;
- knowledge mapping/ontology/semantic-network literature;
- RAG, hybrid lexical+vector retrieval, reranking and contextualized chunks;
- graph-based RAG and local/global/hybrid graph search;
- agent context engineering and progressive disclosure;
- memory hierarchy, salience, recency, authority and task relevance;
- evaluation of retrieval/context quality.

These are inspiration/research domains, not one combined cognitive theory that Architecture AI claims to implement.

## 9. Knowledge compilation

Repeatedly useful anthology knowledge may be compiled downward:

`research/literature`
-> `verified concept/relationship`
-> `architecture rule/pattern candidate`
-> `decision/specification`
-> `deterministic Tool/Skill/test`
-> `runtime evidence`.

This follows the project law:

`DETERMINISTIC -> TOOL -> SKILL -> AGENT`

for mature repeatable execution, while keeping exploratory reasoning at the knowledge/research layer.

## Goal

Allow Architecture AI to reason at the appropriate granularity: raw evidence when precision matters, graph neighborhoods for relational impact, trees for decomposition, anthologies/community summaries for broad orientation and strategic knowledge for long-horizon reasoning—always with provenance and the ability to drill back to evidence.
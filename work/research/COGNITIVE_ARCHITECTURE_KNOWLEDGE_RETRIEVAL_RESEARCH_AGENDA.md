# Cognitive Architecture, Knowledge Retrieval and Context Engineering Research Agenda

Status: ACTIVE_RESEARCH_AGENDA
Direction: DIRECTION-0014

## Purpose

Build an evidence-backed research base for how Architecture AI should organize knowledge, allocate attention/context, retrieve across multiple abstraction levels and project bounded context to external reasoning providers such as Devin.

The project is NOT attempting to reproduce the human brain. Cognitive literature is used as design inspiration, terminology and hypothesis generation; implementation choices require engineering evaluation.

## Current research anchors

### 1. Cognitive architectures — ACT-R

ACT-R describes itself as a cognitive architecture for simulating and understanding human cognition, including how people organize knowledge and produce intelligent behavior.

Research question for Architecture AI:
- Which ideas about declarative knowledge, retrieval activation and task-focused cognition are useful abstractions for context selection?
- Which are human-cognition-specific and should NOT be copied into software architecture?

Source:
- ACT-R, Carnegie Mellon University: https://act-r.psy.cmu.edu/

### 2. Spreading activation / semantic memory

Collins and Loftus (1975) proposed a spreading-activation theory of semantic processing, extending earlier semantic-network work.

Research question:
- Can graph expansion from current task anchors provide a useful engineering analogue to associative activation?
- How should edge type, authority, freshness and policy constrain expansion?

Source:
- Collins, A. M. & Loftus, E. F. (1975), Psychological Review, DOI 10.1037/0033-295X.82.6.407.

### 3. Semantic networks and knowledge maps

Semantic-network literature represents knowledge as concepts/entities connected by relations and has long been used both for knowledge representation and thinking/visualization.

Knowledge-mapping literature examines how organizations identify where knowledge exists and how it can be accessed for activities.

Research questions:
- Which entity/relation primitives are required for Architecture AI?
- How should ontology/taxonomy/tree projections coexist with cross-cutting graph truth?
- What visualization/read models best support an architect?

Candidate sources:
- systematic review of semantic-network definitions, Expert Systems with Applications (2022);
- knowledge maps systematic literature review, International Journal of Information Management (2016);
- semantic-network/conceptual-graph foundational literature.

### 4. Workspace / blackboard architectures

Global Workspace Theory literature notes roots in cognitive-architecture/blackboard approaches where distributed knowledge sources can cooperatively solve problems.

Research question:
- Can the Architecture AI Control/Copilot layer use a provider-neutral `reasoning workspace` where standards, runtime evidence, process, security, graph and work read models contribute selectively without being merged into one giant prompt?

Source:
- Baars, B. J. (2005), Global workspace theory of consciousness: toward a cognitive neuroscience of human experience, Progress in Brain Research, PMID 16186014.

Important: use only as architectural inspiration; do not equate platform behavior with consciousness.

### 5. GraphRAG / local-global retrieval

Microsoft Research GraphRAG uses graph structure and community summaries to support both detailed local queries and broad global questions. DRIFT search combines global/community orientation with local flexible traversal.

Research questions:
- Can our Anthology/Community projections improve broad architecture queries?
- Can adaptive traversal outperform vector-only retrieval for impact/dependency questions?
- What parts should be deterministic and what parts require LLM extraction/summarization?

Sources:
- From Local to Global: A Graph RAG Approach to Query-Focused Summarization, Microsoft Research (2024).
- Introducing DRIFT Search, Microsoft Research (2024).

### 6. Contextual retrieval, hybrid retrieval and reranking

Anthropic's Contextual Retrieval work combines contextualized chunks with BM25/embedding retrieval and reranking, reporting materially reduced retrieval failure in its evaluations.

Research questions:
- Should Architecture AI use exact/BM25 + vector + graph candidate fusion?
- Which data types need contextualized chunks versus structured graph/read-model retrieval?
- What reranking approach produces the best precision within a bounded context budget?

Source:
- Anthropic, Introducing Contextual Retrieval (2024).

### 7. Agent context engineering

Anthropic's 2025 context-engineering guidance frames context as a finite resource whose tokens should be curated for desired agent behavior.

Research questions:
- What is the minimum sufficient context for different Architecture AI task classes?
- When should context be front-loaded versus retrieved progressively?
- What should be pinned, summarized, omitted or delegated to tools?

Source:
- Anthropic, Effective context engineering for AI agents (2025).

### 8. Devin-specific knowledge/context behavior

Current Devin documentation distinguishes:
- Knowledge: stable context/advice/instructions recalled across sessions when relevant;
- Skills: repo-committed reusable procedures (`SKILL.md`) that are injected when invoked;
- Playbooks: reusable prompt/work patterns;
- task-specific context through repo/file/session references and prompts;
- MCP APIs for session, playbook and knowledge management.

Research questions:
- Which Architecture AI knowledge should be projected into Devin Knowledge at all?
- Which procedures belong in Skills rather than prompts?
- Which context should remain task-local/on-demand?
- How do we measure collision between Architecture AI context and Devin's automatic Knowledge recall?

Sources:
- https://docs.devin.ai/product-guides/knowledge
- https://docs.devin.ai/product-guides/skills
- https://docs.devin.ai/product-guides/creating-playbooks
- https://docs.devin.ai/work-with-devin/devin-mcp

## Proposed research tracks

1. Knowledge representation primitives / ontology / graph semantics.
2. Dynamic relevance/attention scoring.
3. Tree + graph + vector + lexical hybrid retrieval.
4. Community summaries / anthologies / multi-scale retrieval.
5. Context budgeting and progressive disclosure.
6. Provider projection to Devin Knowledge/Skills/Playbooks/session context.
7. Human architect visualization: radar/tree/graph/drill-down.
8. Context security/classification and authorization.
9. Retrieval/evidence freshness and supersession handling.
10. Evaluation harness and gold tasks.

## POC hypotheses

### H1 — Hybrid beats vector-only for architecture tasks
Compare vector-only against lexical+vector+graph+rerank for known dependency/standard/implementation questions.

### H2 — Dynamic radar improves broad-to-local reasoning
Compare fixed top-K retrieval against strategic-anchor + task-focus dynamic retrieval.

### H3 — Multi-scale summaries help global questions
Compare raw chunk retrieval versus branch/community/anthology summaries for questions such as `what are the main architecture gaps and why?`.

### H4 — Progressive context reduces noise without reducing task quality
Compare large front-loaded context versus small pinned pack + on-demand retrieval on Devin implementation sessions.

### H5 — Explicit provider projection reduces conflicting instructions
Compare ad-hoc prompt context against stable Knowledge + Skill + task ContextPlan separation.

## Evaluation outputs

For each experiment capture:
- test question/task;
- gold required facts/constraints;
- retrieved items and reasons;
- missed mandatory items;
- irrelevant items;
- context size;
- answer/task result;
- unsupported claims;
- latency;
- external-agent usage/cost where available;
- human corrections;
- policy/security issues;
- recommendation.

## Adoption rule

Research findings become architecture policy only through:

`SOURCE / EXPERIMENT`
-> `EVIDENCE`
-> `FINDING`
-> `APPLICABILITY`
-> `POC/EVAL`
-> `DECISION / SPECIFICATION`
-> `IMPLEMENTATION`
-> `RUNTIME EVIDENCE`.

Do not convert cognitive-science analogy or vendor technique directly into mandatory platform architecture.
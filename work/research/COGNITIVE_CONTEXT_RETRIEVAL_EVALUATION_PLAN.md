# Cognitive Context Retrieval Evaluation Plan

Status: READY_FOR_RESEARCH
Direction: DIRECTION-0014

## Objective

Evaluate which retrieval/context architecture best supports Architecture AI's real tasks with grounded, explainable answers and bounded provider context.

## Baselines to compare

A. Vector-only top-K RAG.
B. Lexical/BM25 + vector fusion.
C. Graph-local retrieval + direct evidence.
D. Global/community/anthology retrieval.
E. Hybrid exact + vector + graph + community + rerank.
F. Hybrid + dynamic Knowledge Radar + progressive on-demand context.
G. Hybrid + claim/evidence verification.

## Gold task families

1. Exact implementation fact: `What Java/runtime/module/config is currently active?`
2. Dependency/impact: `If this event schema changes, what is impacted?`
3. Broad sensemaking: `What are the major architectural gaps across this initiative?`
4. Governance-to-runtime: `How is this standard/control realized technically?`
5. Banking POC: `What evidence still blocks Customer Position optimization?`
6. Incident/runtime: `Why did p95 degrade after deployment X?`
7. Strategic cross-domain: `How could an economic/cost constraint alter OpenShift placement strategy?`
8. Devin implementation: produce a bounded implementation change without violating active direction/module/gate rules.

## Gold definition

For each task define:
- mandatory facts/constraints;
- directly supporting evidence IDs;
- optional useful context;
- explicitly irrelevant/noisy context;
- known contradictions/superseded evidence;
- expected UNKNOWN items;
- required authorization/classification scope.

## Metrics

- mandatory retrieval recall;
- precision/relevance;
- stale/superseded leakage;
- unsupported claim rate;
- contradiction handling;
- correct UNKNOWN behavior;
- citation/evidence coverage;
- context tokens/bytes;
- retrieval latency;
- provider latency/usage cost where measurable;
- human correction/rework;
- policy/classification violations;
- end task success.

## Decision rule

Do not choose a single platform retrieval strategy solely from generic benchmark claims. Adopt the smallest architecture that wins consistently on Architecture AI gold tasks and preserves authorization, provenance, explainability and evolution.

## Expected output

- retrieval strategy comparison matrix;
- recommended default strategy by reasoning mode;
- ContextPlan budget guidance;
- graph/vector/lexical/community responsibilities;
- claim-verification recommendation;
- provider projection rules;
- gaps requiring a POC or new research.
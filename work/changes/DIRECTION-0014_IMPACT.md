# DIRECTION-0014 Impact Assessment

Status: ACTIVE
Change class: BACKWARD_COMPATIBLE / CONTEXT_REFRESH_REQUIRED
Previous direction: DIRECTION-0013
New direction: DIRECTION-0014

## Summary

DIRECTION-0014 formalizes the cognitive-knowledge retrieval/context strategy that was implicit in DIRECTION-0012/0013.

It adds:
- dynamic Knowledge Radar as a query-time projection;
- dual strategic-center + task-focus context selection;
- multi-scale retrieval using exact/lexical, vector, graph, tree/community/anthology and specialized read models;
- explicit context planning/budget governance;
- progressive on-demand context expansion;
- provider projection policy for Devin Knowledge, Skills, Playbooks, task context and MCP retrieval;
- cognitive/context-engineering research and eval agenda.

No existing banking/runtime architecture is removed.

## Compatibility

### DIRECTION-0013 arborescence
RETAINED.

Tree remains for decomposition/navigation. Graph remains canonical for cross-cutting truth. DIRECTION-0014 adds dynamic radar/context projections over the same knowledge.

### Cognitive Copilot
EXTENDED.

Existing ContextResolver becomes more explicit as:

`Intent -> Knowledge Radar -> ContextPlan -> ProviderProjection / Answer`.

Chat remains non-canonical and material actions remain deterministic/gated.

### Knowledge direction
EXTENDED.

Existing source -> evidence -> verified knowledge -> realization -> runtime -> learned pattern direction remains. Anthologies/community summaries are added as derived multi-scale projections, not canonical truth.

### Devin integration
REVIEW_REQUIRED.

Future Devin handoffs must distinguish:
- stable provider Knowledge;
- repo-scoped Skills/procedures;
- reusable Playbooks;
- task-specific Context Pack;
- on-demand MCP/tool retrieval.

Do not mirror the full Architecture AI knowledge base into Devin.

### Agent-runtime prompt
CONTEXT_REFRESH_REQUIRED.

`P-AGENT-RUNTIME-COMMUNICATION-PLANE-01` should include ContextPlan/provider-projection semantics before handoff.

### Director/Copilot read-model prompt
MATERIAL ENRICHMENT REQUIRED.

`P-DIRECTOR-CHAT-WORK-READMODEL-01` should include Knowledge Radar, context explanation, provenance, selected/omitted context and dynamic focus.

### Knowledge graph/projection prompt
MATERIAL ENRICHMENT REQUIRED.

Future knowledge-graph work must support:
- multi-scale retrieval;
- derived branch/community/anthology summaries;
- task-focused graph traversal;
- provenance/freshness/security filtering;
- context-eval instrumentation.

### Skills/Knowledge governance
NEW BOUNDARY.

A stable fact/advice is not automatically a Skill; a procedure is not automatically Knowledge. Provider projection policy must classify each item.

## Collision risks

1. Duplicating canonical Architecture AI knowledge inside Devin Knowledge.
2. Conflicting stable instructions across Knowledge, Skills, Playbooks and prompts.
3. Treating vector similarity as sufficient retrieval.
4. Treating graph hop count as equivalent to relevance.
5. Persisting radar distance as static truth.
6. Injecting broad literature/context into implementation tasks and increasing noise.
7. Allowing provider/session memory to become canonical project state.
8. Using cognitive-science metaphors as unverified implementation requirements.

## Required refresh before handoff

For any future Devin work involving knowledge/context/agent runtime/Copilot:
1. classify reasoning/task mode;
2. resolve strategic and task anchors;
3. apply authorization/classification filters;
4. pin mandatory direction/policy/current-state facts;
5. retrieve/rerank evidence through appropriate scales;
6. produce bounded ContextPlan;
7. choose provider projection mechanism;
8. preserve references/provenance;
9. allow progressive retrieval;
10. reconcile context misses and results after execution.

## Research dependency

Create/maintain a research issue for cognitive architectures, semantic networks/spreading activation, workspace/blackboard ideas, knowledge mapping, GraphRAG/local-global retrieval, hybrid retrieval/reranking, context engineering and Devin-specific context mechanisms.

No external research technique becomes mandatory until evaluated against Architecture AI tasks.

## Conclusion

DIRECTION-0014 is an additive cognitive/context architecture refinement. Existing platform, banking, modularity, arborescence, governance, process, compliance, DevOps and runtime directions remain active.
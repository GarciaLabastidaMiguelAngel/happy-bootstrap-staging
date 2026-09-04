# Cognitive Memory Role Mapping

Status: ACTIVE_DIRECTION_MODEL
Direction: DIRECTION-0014

## Purpose

Provide an engineering mapping between useful cognitive-memory concepts and Architecture AI technical responsibilities without claiming biological equivalence.

| Cognitive analogy | Architecture AI responsibility | Candidate realization |
|---|---|---|
| Semantic memory | Stable concepts/facts/relationships | knowledge graph, normalized entities, provenance, document/evidence references |
| Episodic memory | What happened, when, in which work/runtime context | Work history, decisions, sessions, commits, deployments, incidents, PCR/runtime evidence |
| Procedural memory | How repeatable work is performed | deterministic Tools, Skills, Playbooks, runbooks, tests, pipelines |
| Working memory | Bounded information needed now | ContextPlan / Context Pack |
| Associative activation | Find related knowledge from current focus | graph traversal, semantic/vector retrieval, dynamic radar scoring |
| Executive control | Select focus, rules, budget and action path | intent/reasoning-mode classifier, authorization/policy, ContextResolver, planner/router |
| Workspace/blackboard | Coordinate specialized evidence sources | provider-neutral reasoning workspace/read-model orchestration |
| Metacognition / verification | Know what is supported, contradicted or unknown | claim-evidence verifier, provenance/freshness/supersession checks, UNKNOWN/ResearchRequest |

## Important rule

These terms help structure engineering concerns. Architecture AI does not assert that an LLM or the platform thinks like a human brain.

## Expected behavior

A material answer should be reconstructable from:

`question`
-> `reasoning mode`
-> `ContextPlan`
-> `retrieved evidence`
-> `reasoning/tool actions`
-> `claims`
-> `claim/evidence verification`
-> `answer status`.

This is the platform's explainability path.
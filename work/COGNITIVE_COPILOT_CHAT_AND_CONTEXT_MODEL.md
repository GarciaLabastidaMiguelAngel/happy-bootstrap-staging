# Cognitive Copilot Chat and Context Model

Status: ACTIVE_DIRECTION_MODEL
Direction: DIRECTION-0012

## Purpose

Define the Architecture AI cognitive interaction model expected by architects: a persistent Copilot chat inside the dashboard that reasons over governed project state, current evidence, standards, architecture realization, work/blockers, runtime evidence and delegated execution capabilities.

The chat is not a generic LLM window and is not the authority for state-changing operations.

## Core model

Architect / dashboard context
-> Copilot conversation
-> intent classification
-> authorization / role / environment check
-> governed context resolution
-> knowledge/evidence retrieval
-> deterministic read models / graph / standards / runtime evidence
-> optional bounded tool/skill execution
-> grounded answer / prepared action
-> deterministic gate/action for material changes.

## Context segmentation

Every Copilot request must resolve at least:
- user identity/role and authorized scope;
- active solution/initiative/work item;
- environment;
- information classification;
- current direction/specifications/ADRs/policies;
- standards and applicability;
- current technical realization and runtime evidence;
- unresolved research/blockers;
- available Tools/Skills/Devin execution capability.

Do not place the entire knowledge base into every prompt. Context must be assembled as a bounded Evidence/Context Pack with references and provenance.

## Cognitive answer classes

The Copilot should distinguish:
- EXPLAIN: answer what/why/how from governed evidence;
- COMPARE: compare standards, designs or runtime options;
- DIAGNOSE: explain blockers, conformance gaps or runtime findings;
- PLAN: produce governed plan/work packages;
- RESEARCH_REQUIRED: identify evidence it cannot safely infer;
- PREPARE_ACTION: prepare a bounded change awaiting deterministic authorization/gate;
- EXECUTE_ALLOWED: invoke an already authorized deterministic Tool/Skill when policy permits.

## Human-work model

The dashboard should prioritize work that genuinely requires a human:
- missing institutional evidence;
- decisions with competing valid options;
- authority/approval;
- risk acceptance;
- ambiguous business/process meaning;
- regulatory/legal/security approval.

Deterministic expansion, extraction, comparison, testing, generation and reconciliation should continue without unnecessarily assigning tasks to the architect.

## Expected questions

The same cognitive model should support questions such as:
- Why is this POC blocked?
- What can continue without me?
- What should I resolve first to unblock the highest-value work?
- What standard applies here and how much of it is actually applicable?
- Why does the dashboard say 50 percent adoption; 50 percent of what?
- How is this TOGAF/BIAN/governance concept realized technically today?
- If we change the governance taxonomy, which physical resources actually need to change?
- Why is this capability a module instead of a separate service?
- What evidence justifies the current API/service topology?
- What is the latest proven p95/p99/capacity for this service under which workload?

## Chat vs deterministic actions

Chat may explain and prepare. Material state changes remain deterministic and auditable.

Example:

`Deploy Customer Position to DEV`

Copilot may resolve version, target, gates, evidence, rollback and policy, then present an explicit governed deployment action. The conversational model must not bypass authorization, gates, pipeline controls or rollback requirements.

## Session durability

Conversation session state is not canonical project state.

Durable architecture/work/decision/evidence state must live in governed stores/read models. If the chat session disappears, the project must remain resumable from Work/Knowledge state.

## Multi-architect behavior

Architects may use the same skills/capabilities while receiving different results because context resolution must respect:
- assigned solutions/work;
- role/authority;
- environment access;
- information classification;
- team/initiative context;
- personal pending decisions/evidence requests.

## Technical implementation direction

Prefer:
- Angular dashboard with embedded chat/work context;
- Spring Boot application services for Copilot orchestration;
- explicit ContextResolver;
- governed retrieval/read-model APIs;
- MCP capability access where applicable;
- deterministic command/action services;
- session/work/audit correlation IDs;
- streaming response transport only as a UX mechanism, not an authorization boundary.

Avoid:
- one giant prompt containing the project;
- LLM-held canonical state;
- hidden untraceable actions;
- direct production/platform shell access from the chat model;
- duplicate per-user copies of canonical knowledge.

## Goal

The architect should experience one coherent cognitive surface that can explain architecture, technical realization, standards, evidence, work and runtime state, while the platform preserves strict separation among reasoning, canonical knowledge, deterministic controls and execution.
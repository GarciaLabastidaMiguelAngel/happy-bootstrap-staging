# Research Fabric and Evidence Priority Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0006

## Purpose

Define the permanent research capability that feeds Architecture AI planning, engineering, standards, security, knowledge, UX and deployment decisions without allowing implementation agents to invent missing facts.

## Core rule

UNKNOWN -> RESEARCHREQUEST -> EVIDENCE -> RECONCILIATION -> DECISION/IMPLEMENTATION.

If evidence is missing, say UNKNOWN/PARTIAL rather than fabricate certainty.

## Evidence priority

Default order:
1. official standards/specifications/RFCs;
2. official framework/product documentation and release notes;
3. institutional banking/security/infrastructure policies and approved catalogs;
4. official regulatory/industry bodies relevant to the bank;
5. recognized technical references and research;
6. community/secondary evidence when primary evidence is unavailable, clearly labeled.

Institutional authority can override generic industry guidance when applicable.

## ResearchRequest fields

- question;
- decision blocked/affected;
- urgency;
- scope;
- expected source classes;
- current known evidence;
- mode/environment;
- security constraints;
- owner;
- deadline/review cadence if needed;
- acceptance criteria;
- output format;
- related standards/specifications/work.

## Parallel research

Research may fan out into multiple bounded investigations where questions are independent.

Examples:
- storage options for OpenShift development;
- enterprise identity integration;
- frontend UX analytics;
- graph modeling standards;
- Confluence API vs MCP-backed integration;
- OpenTelemetry deployment options;
- agent coordination/protocol standards;
- secure AI development frameworks.

Each result returns evidence and implications, not ungoverned code changes.

## Research cadence

Do not blindly re-research the whole internet periodically.

Maintain a living research registry with:
- source/version/status;
- last verified date;
- expected lifecycle/support horizon;
- change frequency;
- review trigger;
- next review window;
- materiality to Architecture AI.

Use event/trigger-based review when possible:
- new major version;
- deprecation/EOL notice;
- CVE/security advisory;
- policy/regulatory change;
- provider/API change;
- failed compatibility test;
- new platform constraint.

Periodic review (for example monthly) should target only items due or high-risk, not repeat all completed research.

## Research to engineering handoff

Research output must state:
- evidence summary;
- confidence/source quality;
- options;
- constraints;
- compatibility with current direction;
- implementation impact;
- migration/rollback impact;
- security/compliance impact;
- estimated engineering effort if available;
- recommended next experiment/POC if unresolved.

Engineering then creates/updates backlog items; Research does not silently merge architectural choices.

## LAB POC rule

When documentation alone is insufficient, propose a bounded LAB POC.

POC must define:
- hypothesis;
- candidate(s);
- measurements;
- safety boundary;
- time/effort budget;
- success/failure criteria;
- cleanup;
- promotion decision.

## Research memory

Validated research becomes governed knowledge with source provenance and freshness policy so future sessions reuse it instead of repeating discovery.

## Goal

Create a scalable evidence supply chain that can support many concurrent workstreams while preserving a single coherent architecture direction.
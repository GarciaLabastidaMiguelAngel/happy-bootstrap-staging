# Knowledge Governance and Devin Projection Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0006

## Purpose

Define how Architecture AI governs knowledge, decides where knowledge lives, projects selected knowledge to Devin, and keeps provider knowledge useful without making it the canonical authority.

## Core principle

CANONICAL KNOWLEDGE IS GOVERNED LOCALLY/IN REPOSITORY AUTHORITIES.
DEVIN KNOWLEDGE IS A CONTROLLED PROJECTION/CACHE FOR REASONING EFFICIENCY.

## Knowledge classes

At minimum distinguish:
- OBJECTIVE / DIRECTION
- SPECIFICATION
- DECISION / ADR
- STANDARD / POLICY / CONTROL
- PROCESS KNOWLEDGE
- APPLICATION/API/DATA/INFRASTRUCTURE KNOWLEDGE
- SECURITY/COMPLIANCE KNOWLEDGE
- ENGINEERING PATTERN / PRACTICE
- EVIDENCE
- OPERATIONAL KNOWLEDGE
- UX/FEEDBACK KNOWLEDGE
- RESEARCH RESULT
- ASSUMPTION / UNKNOWN
- HUMAN DELIVERABLE PROJECTION

## Knowledge lifecycle

DISCOVERED
-> IDENTIFIED
-> CLASSIFIED
-> EVIDENCED
-> VALIDATED
-> APPROVED where institutional authority is required
-> PROJECTED
-> REFRESHED / SUPERSEDED / DEPRECATED

Do not turn discovery into fact automatically.

## Authority decision

For each knowledge object decide:
- source authority;
- canonical store;
- projection stores;
- sensitivity/classification;
- freshness policy;
- lineage/provenance;
- version/revision;
- query patterns;
- whether it is safe/useful to project to Devin.

## Local/governed authority

Prefer Git for stable declarative/versioned knowledge such as:
- direction;
- specifications;
- policies/gates;
- standards adoption decisions;
- ADRs;
- architecture definitions;
- approved process models suitable for version control;
- schemas/contracts;
- knowledge/model manifests.

Prefer operational/local stores for mutable knowledge-control state, work state, freshness, provenance ledgers and query-oriented projections.

Use graph/index/vector stores as projections/query accelerators unless explicitly promoted as an authority.

## Devin knowledge projection

Use supported Devin knowledge APIs/capabilities only after verifying current schema/limits/permissions.

Candidates for provider projection:
- stable Architecture AI operating principles;
- compact platform glossary;
- stable module/capability map;
- approved development standards;
- common patterns/constraints;
- compact banking context needed repeatedly;
- stable tool/MCP usage instructions;
- frequently reused validated facts that are expensive to resend.

Do NOT upload by default:
- complete document libraries;
- sensitive banking data without explicit policy;
- high-churn runtime state;
- raw telemetry;
- transient sessions;
- unvalidated research;
- duplicated content that can be fetched deterministically by ID.

## Projection manifest

Every provider knowledge projection should record:
- projectionId;
- source IDs/commits;
- knowledge class;
- provider destination/reference;
- generated/updated time;
- content hash where practical;
- sensitivity;
- freshness/expiry rule;
- direction revision;
- validation status;
- supersededBy if applicable.

## Cost/quality evaluation

In current LAB, token cost does not block experimentation.

Still measure projection value so later optimization is evidence-based:
- repeated context bytes avoided;
- retrieval hit rate;
- stale-answer rate;
- provider usage delta;
- answer quality;
- update/reconciliation overhead.

## Graph projection

Knowledge should progressively project relationships across layers/vectors such as:

Objective -> Capability -> Process -> Application/API -> Data -> Infrastructure
Standard -> Governs -> Specification/Process/Component
Decision -> Impacts -> Component/Process/Arc42 section
Evidence -> Supports -> Fact/Decision/Gate
ResearchResult -> Resolves -> ResearchRequest
WorkItem -> Changes -> Artifact/Capability
UXFeedback -> Impacts -> Journey/Feature

The graph supports complex deterministic navigation; Devin is used for interpretation when graph/read-model queries are insufficient.

## Knowledge specialist organization

The Data/Knowledge workstream may delegate parallel specialist investigations for:
- metadata/provenance standards;
- graph ontology/modeling;
- semantic/vector retrieval;
- document/process extraction;
- provider knowledge projection;
- freshness/reconciliation;
- sensitive-data governance;
- knowledge quality metrics.

These specialists must converge through one governed knowledge model rather than create incompatible ontologies independently.

## Knowledge quality indicators

Expose progressively:
- source coverage;
- validated vs discovered ratio;
- unknowns;
- stale items;
- conflicting assertions;
- orphan entities;
- provenance completeness;
- graph relationship coverage;
- retrieval quality;
- provider projection freshness.

## Goal

Architecture AI should become able to answer increasingly complex questions with deterministic local projections first, while giving Devin compact, stable, validated context for higher-order reasoning.
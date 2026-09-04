# Regulatory Artifact Priority and Platform Transformation Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0008

## Purpose

Preserve the current institutional/audit deliverables required by the bank and external authorities while Architecture AI progressively replaces manual preparation with governed projections and automation.

## Core principle

PRESERVE REQUIRED ARTIFACTS NOW -> GOVERN THEIR SOURCES -> AUTOMATE THEIR PRODUCTION -> IMPROVE THE UNDERLYING PROCESS.

Do not stop producing an artifact merely because the target architecture can eventually make it unnecessary.

## Two simultaneous tracks

### Track A — Current institutional obligations
Continue producing the artifacts currently expected by human governance/audit processes, including Arc42 PDF releases and other evidence packages actually required by institutional or regulatory processes.

Do not infer the exact requirements of Banxico or any other authority. Capture each requirement only from official/institutional evidence and map it to an explicit gate/artifact.

### Track B — Future governed operating model
In parallel, make those deliverables projections from governed state so the platform progressively removes duplicate/manual work.

Target:

Governed source/state
-> deterministic validation
-> approved render/projection
-> Arc42/PDF/Excel/Confluence/SharePoint/FileShare as required
-> retained evidence and provenance.

## Artifact lifecycle

Each institutional artifact should have:
- artifactId;
- purpose;
- requesting/receiving governance or authority;
- source authorities;
- generation rule;
- version;
- release status;
- applicable solution/release/environment;
- approval/gate state;
- hash/provenance where useful;
- retention/location;
- supersedes/supersededBy;
- regeneration capability.

## Priority rule

During current LAB/early-bank-integration work:
1. do not break current audit/document obligations;
2. identify the canonical source of each artifact;
3. eliminate unmanaged duplication;
4. automate mechanical generation first;
5. only later redesign the institutional workflow when sufficient evidence and authority exist.

## Auditability distinction

Internal platform-transformation audit remains separate from external/institutional artifact audit.

Internal evidence is continuous.
External artifacts are released when a governance, solution or regulatory process requires them.

## Goal

Reach a state where Architecture AI can produce the institutionally required evidence on demand from traceable governed state, while the platform continues evolving beyond the document-centric process.
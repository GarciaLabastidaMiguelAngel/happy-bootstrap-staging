# Post-RC2 Direction 0007 — Copilot Control, DevOps Integration, Standards Lifecycle and Bank Governance Alignment

Status: POST_RC2_EVOLUTION_INPUT
Historical rc2 snapshot affected: none directly
Target: future reconciliation/candidate after rc2

## Integrity rule

Do not edit the immutable rc2 snapshot in place.

This delta records accepted direction that future reconciliation must absorb while preserving historical manifests, hashes and validation evidence.

## New direction to absorb

### 1. Copilot as governed control entry point

Architecture AI should evolve from explanation and planning toward bounded execution of architecture/engineering operations through governed Work, Git, Tools, Skills and Agents.

The Copilot is the user-facing control window, not the authority. Material actions remain traceable to specifications, decisions, work, branches/commits, tests/gates, releases and runtime evidence.

### 2. Platform transformation traceability

Preserve how Architecture AI itself evolves:

Direction -> Objective -> Plan -> Specification/ADR/Policy -> Work -> Git change -> Validation -> Release/Deployment -> Runtime evidence -> Improvement.

The Director must be able to explain the history and rationale for a capability, not only its current state.

### 3. No duplicate document/visual truth

Git remains the preferred authority for governed source artifacts.

Where feasible, Confluence, SharePoint, Arc42 and web surfaces should reference or publish the same governed diagram/image/render rather than create unmanaged duplicates.

### 4. DevOps / Platform Engineering integration

DevOps becomes a first-class capability that maps existing Git/build/release/OpenShift/API Connect/Kafka/logging/identity/configuration/infrastructure processes before attempting replacement.

Integrate first, observe and govern second, improve/automate third.

### 5. Standards lifecycle

Standards/policies/frameworks require lifecycle/version/source/deprecation/successor tracking and change-impact analysis.

Conformance must be drillable by governance domain, maturity and evidence status.

### 6. Existing bank governance integration

Architecture AI should map existing API, data, AI, security, platform and other bank governance decision rights and use the Copilot to route work/decisions to them rather than creating parallel uncontrolled governance structures.

### 7. OpenShift/Kibana technical log integration

Existing technical logs flowing from OpenShift to Kibana are a valuable evidence source.

Architecture AI should discover actual retention/query/index/field/access capabilities, improve structured logging and correlation, and consume bounded evidence for QA/DevOps/analytics rather than repeatedly sending raw logs to Devin.

Do not conflate logs with audit, metrics, traces or governed Kafka events.

### 8. Kafka/event evolution

Use the smallest available governed event capability for early POCs. If only a broker/topic is available, Spring may perform deterministic transformation/filtering where appropriate.

Do not assume ksqlDB/KSQL or other stream-processing capabilities exist. Evaluate migration only after platform availability and value are evidenced.

## Future candidate deliverables

Future reconciliation should add/update:
- Copilot operation/audit contracts;
- platform-evolution timeline/read model;
- DevOps/environment capability model;
- standards lifecycle/deprecation registry;
- governance-area/decision-rights map;
- governed visual/document asset catalog;
- log schema/correlation policy;
- Kibana evidence adapter/research findings;
- event-platform capability matrix;
- updated traceability/gap matrices.

## No-loss requirement

Do not lose DIRECTION-0001..0006 principles, Arc42 lifecycle, information governance, knowledge/CQRS, analytics, OpenTelemetry road, LAB agent organization, Git parallelism or current banking POCs when absorbing this delta.
# DIRECTION-0007 Impact Assessment

Status: ACCEPTED_CONTEXT_REFRESH_REQUIRED
Old direction: DIRECTION-0006
New direction: DIRECTION-0007
Old baseline reference: `dfa2a9edb44b74976151cdc668a7aaec9456fd44`

## Change summary

DIRECTION-0007 adds a long-horizon control model in which the Architecture AI Copilot becomes the governed entry point for architecture/engineering operations while preserving Git/evidence as authority, formalizes DevOps/platform integration with existing bank capabilities, strengthens standards lifecycle/deprecation governance, and treats OpenShift/Kibana technical logs as an existing evidence source to integrate rather than replace.

It also clarifies a single-source/projection model for documents and visual assets so Arc42, Confluence, SharePoint and web surfaces can reference governed sources instead of creating unmanaged duplicates.

## Compatibility

Overall compatibility: BACKWARD_COMPATIBLE / CONTEXT_REFRESH_REQUIRED.

No existing DIRECTION-0006 principle is intentionally removed.

## Active work impact

### P-LAB-AGENT-ORGANIZATION-BOOTSTRAP-01
Classification: REVIEW_REQUIRED.
Reason: bootstrap should include DevOps/Platform integration, standards lifecycle and platform-evolution traceability in capability coverage. It should not create a separate permanent agent automatically for each new concern.

### P-OBSERVABILITY-AUDIT-01
Classification: REVIEW_REQUIRED.
Reason: add explicit integration with existing OpenShift/Kibana technical-log pipeline and log-contract quality checks while preserving OTel/audit distinctions.

### P-LOCAL-TELEMETRY-DATA-ROAD-01
Classification: REVIEW_REQUIRED.
Reason: Collector/OTLP road remains valid, but existing Kibana/log infrastructure becomes an additional evidence input and must not be displaced without evidence.

### P-EVENT-PLATFORM-SAGA-01
Classification: UNAFFECTED_WITH_CONTEXT_REFRESH.
Reason: event platform remains transport/governance distinct from technical logging. Kafka/stream-processing availability must remain evidence-based.

### P-AGENT-RUNTIME-COMMUNICATION-PLANE-01
Classification: UNAFFECTED_WITH_CONTEXT_REFRESH.
Reason: Copilot control horizon increases the importance of bounded authorization/audit, but provider/MCP/work separation remains valid.

### P-GRAVITY-PLUS-CUSTOMER-POSITION-READ-ACCELERATION-POC-01
Classification: UNAFFECTED_WITH_CONTEXT_REFRESH.
Reason: banking POC remains valid and now becomes an early example of Copilot-governed transformation traceability and DevOps/runtime evidence integration.

### Arc42 / documentation / diagram work
Classification: REVIEW_REQUIRED.
Reason: enforce canonical-source/projection policy and avoid duplicate visual/document artifacts where referencing the governed asset is supported.

## New governed models

- `work/PLATFORM_EVOLUTION_TRACEABILITY_AND_COPILOT_CONTROL_MODEL.md`
- `work/DEVOPS_AND_EXISTING_BANK_PLATFORM_INTEGRATION_MODEL.md`
- `work/STANDARDS_LIFECYCLE_AND_GOVERNANCE_ALIGNMENT_MODEL.md`
- `work/OBSERVABILITY_KIBANA_AND_TECHNICAL_LOG_GOVERNANCE_MODEL.md`

## Release impact

The frozen release `release/lab-r1-d0006` is NOT modified.

If the user has not yet handed that release to Devin, Work may prepare a later refreshed release containing DIRECTION-0007. If it was already handed off, active sessions should receive an explicit Context Refresh instead of silently changing the frozen release.

## Outcome

ACCEPTED_CONTEXT_REFRESH_REQUIRED

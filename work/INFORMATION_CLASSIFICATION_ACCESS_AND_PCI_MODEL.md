# Information Classification, Access and PCI Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0006

## Purpose

Define how Architecture AI discovers, classifies, stores, projects, displays and audits sensitive information across LAB, PLATFORM_DEV, SOLUTION and future SERVICE environments.

## Core principles

1. INFORMATION SENSITIVITY IS METADATA + POLICY, NOT A GUESS.
2. CLASSIFICATION DOES NOT AUTOMATICALLY MEAN DENY; IT DETERMINES CONTROLS.
3. AUTHORIZATION IS SEPARATE FROM CLASSIFICATION.
4. ENVIRONMENT, USER/ROLE, PURPOSE, DATA TYPE AND ACTION ALL MATTER.
5. NEVER INFER PCI SCOPE FROM A LABEL ALONE; DETERMINE ACTUAL DATA/ENVIRONMENT SCOPE.
6. DO NOT COPY SENSITIVE DATA TO DEVIN, LOGS, TRACES, VECTORS OR DOCUMENTS BY DEFAULT.
7. DEVELOPMENT SHOULD PREFER SYNTHETIC/MASKED DATA; REAL SENSITIVE DATA REQUIRES EXPLICIT GOVERNED JUSTIFICATION.

## Standards/reference direction

Use current official/institutional sources before defining controls.

Relevant reference candidates include:
- PCI DSS current version from PCI SSC for environments that store/process/transmit cardholder data or can impact the CDE;
- PCI SSC Authentication Guidance for authentication/MFA interpretation;
- institutional information-classification and access policies when available;
- Microsoft Purview sensitivity-label concepts where useful for compatibility with Office 365/SharePoint/OneDrive workflows;
- NIST information categorization concepts as a reference for confidentiality/integrity/availability impact, not as automatic bank policy;
- applicable privacy/regulatory and bank security policies.

Institutional policy has priority over generic example labels.

## Classification dimensions

Do not reduce classification to one string.

Model at least:

### Business sensitivity
Examples only until institutional labels are known:
- PUBLIC
- INTERNAL
- CONFIDENTIAL
- HIGHLY_CONFIDENTIAL / RESTRICTED

### Data categories
Examples:
- PAYMENT_ACCOUNT_DATA
- CARDHOLDER_DATA
- SENSITIVE_AUTHENTICATION_DATA
- PII/PERSONAL_DATA
- CREDENTIAL/SECRET
- SECURITY_FINDING
- ARCHITECTURE_CONFIDENTIAL
- SOURCE_CODE
- OPERATIONAL_TELEMETRY
- BUSINESS_PROCESS
- PUBLIC_REFERENCE

### Regulatory/control scope
Examples:
- PCI_CANDIDATE
- PCI_IN_SCOPE_CONFIRMED
- PRIVACY_CANDIDATE
- INTERNAL_RESTRICTED

Scope must be confirmed by policy/evidence; candidate classification is not the same as final compliance scope.

### Handling attributes
- canStore
- canIndex
- canVectorize
- canProjectToGraph
- canSendToDevin
- canIncludeInPrompt
- canLog
- canTracePayload
- canExportToArc42
- canPublishToConfluence
- canExportToExcel/PPT/PDF
- retentionClass
- masking/tokenization rule
- encryption requirement
- allowed environments

## Persistent label model

Where practical, classification labels should persist with the governed knowledge object and its projections.

If Office/Microsoft Purview sensitivity labels are already institutionally used, Architecture AI should research mapping/integration rather than invent an incompatible classification vocabulary.

Do not assume Architecture AI can create/change enterprise Purview labels; treat institutional labels as external authority unless approved integration exists.

## Access decision model

Access should be evaluated from:

Subject identity
+ role/entitlement
+ environment/mode
+ information classification
+ requested action
+ purpose/context
+ policy/gate state
+ optional step-up authentication requirement
-> ALLOW / DENY / REQUIRE_STEP_UP / REQUIRE_APPROVAL / MASK / REDACT.

This is more precise than "LDAP means sensitive access is safe."

LDAP/directory integration may provide identity/group information, but authentication mechanism, MFA/step-up and authorization policy must be modeled separately.

## Environment behavior

### LAB
Authorized experimentation may expose sensitive information when explicitly needed and permitted.

Requirements:
- explicit user/role authorization;
- purpose/audit record;
- least data necessary;
- no automatic projection to Devin/vector/logs;
- masking/redaction where full value is unnecessary;
- controlled POC boundary.

### PLATFORM_DEV
Prefer synthetic/masked/test data.

Real sensitive data should be exceptional and governed.

### SOLUTION
Architect-facing local runtime uses actual institutional policy/identity controls available for the workstation context.

### SERVICE / PREPROD / PROD
Require the approved enterprise identity/authentication pattern, authorization policy and audit controls.

Sensitive views may require step-up/MFA or explicit approval based on policy and data class.

Do not hard-code LDAP as the only future mechanism. Model enterprise identity as an abstraction and bind to the approved institutional provider/flow.

## PCI boundary

PCI DSS applies according to actual scope, not because Architecture AI is used by a bank.

If Architecture AI stores, processes, transmits payment account data, or can impact the security of the cardholder data environment, the relevant PCI scope/control analysis must be performed.

Default Architecture AI policy should minimize PCI scope:
- do not persist PAN/PIN/SAD unless explicitly required and governed;
- prefer CardID/tokenized/masked representations;
- never store sensitive authentication data merely for knowledge/search convenience;
- never send PAN/PIN/SAD to Devin by default;
- prevent sensitive values in logs/traces/metrics;
- isolate any authorized PCI-relevant LAB POC and record scope.

PCI DSS v4.x requires MFA for access into the CDE according to PCI SSC guidance; this does not mean every Architecture AI sensitive-data view is automatically a CDE or that LDAP itself satisfies MFA.

## Knowledge/AI handling

Before information enters:
- Devin provider knowledge;
- prompt/context pack;
- Lucene/vector index;
- graph projection;
- telemetry/logs;
- Arc42/PDF/Excel/PPT/Confluence;

run a deterministic handling-policy decision based on classification.

Provider projection states can include:
- ALLOWED_FULL
- ALLOWED_REDACTED
- ALLOWED_METADATA_ONLY
- DENIED_PROVIDER
- REQUIRES_HUMAN_APPROVAL.

## Logging/observability

Default:
- IDs and bounded metadata, not raw sensitive payloads;
- structured redaction before log/trace export;
- no PAN/credentials/secrets in metric labels;
- audit records access/action without unnecessarily duplicating the protected content.

## Data backup/recovery

Sensitive-data governance must cover backups and snapshots too.

For every authoritative store/projected store record:
- data classes present;
- backup included/excluded;
- encryption requirements;
- backup location;
- retention;
- access policy;
- restore procedure;
- restore validation;
- secure deletion/expiry where required;
- whether the projection is rebuildable and therefore should not be backed up.

## Dashboard/Director behavior

The Director should answer:
- what classification applies?;
- why?;
- source/evidence for classification;
- where copies/projections exist?;
- who can access?;
- what environment rules apply?;
- whether step-up is required?;
- whether provider/Devin projection is allowed?;
- backup/retention status;
- PCI/privacy candidate/confirmed scope;
- unresolved policy gaps.

The UI should display classification clearly and avoid rendering sensitive values until authorization decisions complete.

## Required deterministic controls

Prefer deterministic policy for:
- classification metadata validation;
- environment/action allowlists;
- masking/redaction;
- provider-projection eligibility;
- export eligibility;
- retention metadata;
- audit event generation;
- step-up requirement calculation from approved policy.

Use AI only for classification assistance when deterministic rules are insufficient; AI output is a candidate classification requiring validation where sensitivity is material.

## Goal

Enable useful authorized access to information while minimizing uncontrolled copies, preventing provider leakage, preserving auditability and keeping PCI/security/privacy scope explicit and evidence-based.
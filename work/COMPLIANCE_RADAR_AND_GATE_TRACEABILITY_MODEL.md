# Compliance Radar and Gate Traceability Model

Status: ACTIVE_DIRECTION_MODEL
Direction: DIRECTION-0012

## Purpose

Maintain a continuously explainable radar of external, regulatory, security, fraud, availability, privacy, institutional and architecture standards that apply to a solution/platform, without confusing adoption percentage with compliance or forcing unnecessary runtime complexity.

## Core model

Authority / Standard / Policy
-> ApplicabilityDecision
-> Requirement / Objective / Control
-> Implementation / Compensating or Customized Approach where permitted
-> Gate / Verification
-> Runtime or documentary evidence
-> Conformance status
-> Exception / Risk acceptance / Remediation
-> review/version lifecycle.

## Status vocabulary

For every requirement/control use explicit statuses such as:
- APPLICABLE_COMPLIANT;
- APPLICABLE_PARTIAL;
- APPLICABLE_NON_COMPLIANT;
- APPLICABLE_UNKNOWN;
- NOT_APPLICABLE_WITH_JUSTIFICATION;
- COMPENSATING_CONTROL where the governing framework permits it;
- CUSTOMIZED_APPROACH where the governing framework permits it;
- EXCEPTION_ACCEPTED;
- SUPERSEDED / DEPRECATED.

Do not collapse all statuses into a single percentage.

## Percentage rule

Any score must expose:
- standard/version;
- scope and denominator;
- applicability decision;
- weighted or unweighted method;
- compliant/partial/non-compliant/unknown counts;
- evidence coverage;
- runtime enforcement coverage;
- exceptions;
- last verification;
- next review.

`50 percent adopted` must always be answerable as `50 percent of exactly these applicable items, measured this way`.

## Mandatory vs guidance distinction

The radar must distinguish:
- LAW/REGULATION/EXTERNAL_AUTHORITY;
- CONTRACTUAL/INDUSTRY MANDATORY;
- INSTITUTIONAL BANK POLICY/STANDARD;
- ARCHITECTURE STANDARD;
- ENGINEERING BEST PRACTICE;
- RESEARCH/CANDIDATE PRACTICE.

A recommendation must not be presented as a regulatory obligation.

## PCI direction

PCI DSS requirements and scope must be derived from current official PCI SSC material plus actual cardholder-data flows and institutional assessment scope.

Where PCI permits flexibility, Architecture AI must preserve the difference among:
- Defined Approach;
- compensating controls for legitimate constraints where allowed;
- Customized Approach and its stated objective/evidence requirements.

Do not claim compliance from design intent alone.

## Other compliance domains

Architecture AI must discover, not invent, which additional obligations apply to the bank/solution, including candidates from:
- financial regulator obligations;
- privacy/data-protection obligations;
- cryptography/key-management requirements;
- fraud/authentication requirements;
- operational resilience/business continuity;
- secure development and vulnerability management;
- records/audit/retention;
- accessibility/channel obligations;
- institutional architecture/engineering policies.

Exact Mexico/Banxico/CNBV/other requirements require official/institutional evidence before being labeled mandatory.

## Gate binding

One requirement may map to multiple gates/tests/evidence items and one technical control may satisfy multiple requirements.

Use explicit bindings rather than duplicate implementations:

Requirement
<-> ControlRealization
<-> Gate/Test
<-> Evidence.

## Dashboard behavior

Copilot/dashboard should support:
- standards radar by solution;
- mandatory/optional/candidate separation;
- open gaps by risk/impact;
- evidence freshness;
- exceptions/compensating controls;
- drill-down from score to exact requirements;
- impact analysis when a standard/version changes;
- explanation of which technical components actually implement each control.

## Goal

Create an auditable standards/compliance radar that directs engineering and gates precisely while allowing the runtime to remain as simple as possible.
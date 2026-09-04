# 68 — Standards Substitution & Thin Custom Layer Assessment

## Control

| Field | Value |
|---|---|
| `artifact_id` | `HAPPY-KNOW-68` |
| `status` | `DRAFT / RESEARCHED_NOT_ADOPTED` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `research_date` | `2026-09-02` |
| `institutional_adoption` | `NOT_CLAIMED` |

Official specifications are reusable candidates. Their existence does not establish corporate approval, implementation or fit.

## Substitution matrix

| Need | Official candidate | Coverage disposition | Thin custom layer that may remain | Decision/gate |
|---|---|---|---|---|
| machine-readable architecture | FINOS CALM | `STANDARD_EXTENDED` | institutional IDs, provenance, country/capability overlays, approval states | fit/profile POC; no replacement of Arc42/C4 views assumed |
| process execution | BPMN 2.0.2 | `STANDARD_NATIVE_CANDIDATE` | task/evidence/authority correlation if not expressible natively | evaluate only for predictable process portions |
| adaptive case/work | CMMN 1.1 | `STANDARD_NATIVE_CANDIDATE` | ArchitectureTask/WorkSession IDs and receipts | compare with 0009/0037; no custom engine yet |
| decision logic | DMN formal version selected at adoption time | `STANDARD_NATIVE_CANDIDATE` | decision authority/evidence linkage | use stable formal version; do not adopt beta by freshness alone |
| structured JSON contracts | JSON Schema 2020-12 | `STANDARD_NATIVE / KEEP` | institutional vocabularies and cross-contract conventions | existing 14 schemas remain DRAFT |
| HTTP API description | OpenAPI | `STANDARD_NATIVE_CANDIDATE` | institutional security/error/evidence extensions | version and implementation fit at API design time |
| message/event API description | AsyncAPI 3.1.0 researched | `STANDARD_NATIVE_CANDIDATE` | domain lifecycle vocabulary, authority, evidence and delivery policy | 0036 remains deferred until topology evidence |
| agent context/tool protocol | MCP 2026-07-28 researched | `STANDARD_NATIVE_CANDIDATE` | policy enforcement, capability resolution, institutional semantics | verify current WebSocket implementation; adoption not frozen |
| provenance interchange | W3C PROV-DM / PROV-O | `STANDARD_EXTENDED_CANDIDATE` | knowledge state, authority, confidence, temporal/country overlays | map without replacing Git authority |
| telemetry | OpenTelemetry | `STANDARD_EXTENDED_CANDIDATE` | task/work-package/tool/policy/evidence correlations and redaction | semantic-convention stability + cost/security gate |
| control/evidence exchange | NIST OSCAL | `COMPOSED_STANDARD_CANDIDATE` | applicability, bank control authority, Architecture AI receipts | corporate/security approval required |
| threat modeling | OWASP Threat Modeling + Threat Dragon formats | `COMPOSED_STANDARD_CANDIDATE` | projection from canonical architecture and CISO views | compare interoperable formats; no custom threat ontology first |
| Java module boundaries | Spring Modulith | `STANDARD_NATIVE_CANDIDATE` | capability-to-module mapping and exceptions | repo spike; not all enterprise architecture lives in Java |
| executable architecture rules | ArchUnit | `STANDARD_NATIVE_CANDIDATE` | rule catalog, exception/waiver and evidence receipt | repo/build/test evidence |
| externalized policy | Open Policy Agent | `RESEARCH_ONLY` | institutional PDP/PIP/PAP integration if selected | do not replace embedded policy by assumption |
| locale/format data | Unicode CLDR/LDML | `STANDARD_NATIVE_CANDIDATE` | terminology authority, translation memory and risk-preserving presentation | locale strategy/evaluation |
| HTTP error responses | RFC 9457 | `STANDARD_NATIVE_CANDIDATE` | Architecture AI error codes and correlation/evidence refs | API contract decision |
| HTTP content integrity | RFC 9530 | `STANDARD_NATIVE_CANDIDATE` | package/receipt policy and algorithm profile | threat/performance assessment |
| architecture description/viewpoints | ISO/IEC/IEEE 42010 | `RESEARCH_ONLY / STANDARD_EXTENDED_CANDIDATE` | institutional capability/authority/provenance projection | `RO-3E-003`; not evaluated in 3E |
| assurance case | OMG SACM / GSN | `RESEARCH_ONLY / COMPOSED_STANDARD_CANDIDATE` | knowledge states, authority and promotion/evidence linkage | `RO-3E-002`; no assurance engine selected |
| hierarchical decomposition/planning | HTN and relevant planning standards/frameworks | `RESEARCH_ONLY` | stable capability/work IDs, governance and evidence | `RO-3E-001`; do not conflate with prompt reasoning |
| federated capability governance | applicable enterprise/capability/governance standards | `RESEARCH_ONLY / CORPORATE_OVERLAY` | real owner/authority/local-variant semantics | `RO-3E-004 + SER-014` |

## Thin custom layer decisions

| Area | Why custom may remain | Maximum initial custom scope | Replacement/evolution path |
|---|---|---|---|
| Architecture model | bank authority, country truth, knowledge states and evidence are not automatically supplied by CALM | profile/extensions plus ID/provenance mapping | shrink as standard extensions mature |
| Work/session continuity | product-specific durable responsibility, receipt and state-delta semantics | correlation/profile around selected process/case standards | migrate semantics where standard-native fit is proven |
| Knowledge lifecycle | discovered/inferred/validated/approved and Git promotion authority | state/authority overlay over PROV + JSON Schema | preserve stable IDs during model migration |
| Tool governance | risk class, approval binding and institutional capability lookup | policy adapter around MCP/API/tools | replace adapter when standard exposes equivalent governance |
| Cross-cutting completeness | applicability by capability/change/risk | compact checklist and evidence receipt | encode through selected policy/evaluation standards later |
| Banking context | governed corporate catalog IDs and country boundaries | overlays/references only | substitute official catalog sources when obtained |

## Explicit non-selections

- No BPMN/CMMN/DMN engine selected.
- No CALM adoption or replacement of Arc42/C4 decided.
- No OPA deployment selected.
- No MCP transport/SDK frozen.
- No AsyncAPI channel/topic/broker topology invented.
- No OSCAL profile declared corporate policy.
- No threat-model tool selected.
- No Spring Modulith/ArchUnit dependency added.
- No HTN/Tree-of-Thoughts/Graph-of-Thoughts planning model selected.
- No ISO/IEC/IEEE 42010, SACM or GSN profile adopted.
- No federated organizational taxonomy or registry selected.

## Official reference register

| Reference ID | Official source | Status in Seed |
|---|---|---|
| `REF-STD-CALM` | https://calm.finos.org/ | `RESEARCHED_NOT_ADOPTED` |
| `REF-STD-BPMN` | https://www.omg.org/spec/BPMN/2.0/ | `RESEARCHED_NOT_ADOPTED` |
| `REF-STD-CMMN` | https://www.omg.org/spec/CMMN/1.1/About-CMMN | `RESEARCHED_NOT_ADOPTED` |
| `REF-STD-DMN` | https://www.omg.org/spec/DMN/ | `RESEARCHED_NOT_ADOPTED` |
| `REF-STD-JSONSCHEMA` | https://json-schema.org/draft/2020-12 | `USED_AS_DRAFT_CONTRACT_FORMAT / ADOPTION_NOT_INSTITUTIONAL` |
| `REF-STD-OAS` | https://spec.openapis.org/oas/ | `RESEARCHED_NOT_ADOPTED` |
| `REF-STD-ASYNCAPI` | https://www.asyncapi.com/docs/reference/specification/latest | `RESEARCHED_NOT_ADOPTED` |
| `REF-STD-MCP` | https://modelcontextprotocol.io/specification/2026-07-28 | `RESEARCHED_NOT_ADOPTED` |
| `REF-STD-PROV` | https://www.w3.org/TR/prov-dm/ | `RESEARCHED_NOT_ADOPTED` |
| `REF-STD-OTEL` | https://opentelemetry.io/docs/specs/otel/ | `RESEARCHED_NOT_ADOPTED` |
| `REF-STD-OSCAL` | https://pages.nist.gov/OSCAL/ | `RESEARCHED_NOT_ADOPTED` |
| `REF-STD-OWASP-TM` | https://owasp.org/www-project-threat-modeling/ | `RESEARCHED_NOT_ADOPTED` |
| `REF-STD-MODULITH` | https://docs.spring.io/spring-modulith/reference/ | `RESEARCHED_NOT_ADOPTED` |
| `REF-STD-ARCHUNIT` | https://www.archunit.org/userguide/html/000_Index.html | `RESEARCHED_NOT_ADOPTED` |
| `REF-STD-OPA` | https://openpolicyagent.org/docs | `RESEARCHED_NOT_ADOPTED` |
| `REF-STD-CLDR` | https://unicode.org/reports/tr35/ | `RESEARCHED_NOT_ADOPTED` |
| `REF-RFC-9457` | https://www.rfc-editor.org/info/rfc9457/ | `RESEARCHED_NOT_ADOPTED` |
| `REF-RFC-9530` | https://www.rfc-editor.org/info/rfc9530/ | `RESEARCHED_NOT_ADOPTED` |

The 3E candidates ISO/IEC/IEEE 42010, SACM/GSN, HTN/reasoning models and federated-governance patterns are intentionally **not** added to this official-reference table: no deep standards research was executed in 3E. Their identities and acceptance questions live in `RO-3E-001..004`.

## Conclusion

The Seed does not require a new monolithic platform semantics layer. Most candidates should be realized through standard-native contracts, composed standards or extensions of existing Specs, plus a thin institutional layer for authority, evidence, provenance, country truth and governed evolution.

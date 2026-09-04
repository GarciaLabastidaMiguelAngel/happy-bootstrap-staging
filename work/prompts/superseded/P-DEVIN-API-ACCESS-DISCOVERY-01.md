---
prompt_id: P-DEVIN-API-ACCESS-DISCOVERY-01
title: Devin API Inventory, Authentication, RBAC, Session/Usage/Metrics and Architecture AI Integration Feasibility Assessment
domain: Devin API discovery / authentication / RBAC / observability
status: SUPERSEDED
parallelism_decision: DISCOVERY_ONLY
direction_revision: DIRECTION-0001
repository_baseline: 171abc3fab22492a62cb4b6c7068e2357af8001e
depends_on: []
superseded_by: P-AGENT-RUNTIME-COMMUNICATION-PLANE-01
notes: User explicitly stated this prompt was NOT sent. A real PowerShell/API test was performed independently afterward and produced enough evidence to move to the agent-runtime plane.
sent_at: null
executed_at: null
devin_session_reference: null
result_reference: null
---

# P-DEVIN-API-ACCESS-DISCOVERY-01
## DEVIN API INVENTORY, AUTHENTICATION, RBAC, SESSION/USAGE/METRICS AND ARCHITECTURE AI INTEGRATION FEASIBILITY ASSESSMENT

Perform a READ-ONLY DISCOVERY of the CURRENT REAL Devin environment available on this workstation/account.

DO NOT modify Architecture AI yet.
DO NOT create service users, API keys, tokens, applications, integrations or administrative resources unless explicitly authorized later.
DO NOT expose secrets, credentials, cookies, API keys or authentication tokens in the report.

Objective: determine exactly which Devin APIs and integration mechanisms are available so Architecture AI Spring Boot can later consume Devin session, agent, usage, metrics and audit information.

Use CURRENT official Devin documentation and validate against real environment wherever safely possible.

======================================================================
0. QUESTIONS TO ANSWER
======================================================================

Determine product/edition/deployment type; organization/enterprise context; effective API base URL; supported API versions; relevant endpoints; current user permissions; authentication methods; PAT/API key/Service User availability; admin-required operations; RBAC roles/permissions; OAuth/application registration if any; MCP endpoint/capability for session/usage/metrics/admin; correct Spring Boot mechanism REST/MCP/combination; session, per-user and per-session usage; ACU/consumption; audit logs; session lifecycle/status; rate limits/pagination; network/IP/proxy restrictions; and safe future Spring Boot credential requirements.

======================================================================
1. OFFICIAL API INVENTORY
======================================================================

Use current official Devin documentation. Prefer current v3 APIs; identify useful v2/v1 only when still supported/required and mark legacy/beta/deprecated clearly.

Inventory categories:
A. identity/self and membership/permissions.
B. sessions: list/get/state/create/lifecycle/history/metadata.
C. usage/metrics: sessions/searches/PRs/per-user/org/enterprise metrics.
D. consumption: ACUs, daily/org/enterprise/user where available.
E. audit/observability: audit logs, guardrail/admin activity where available.
F. users/membership/roles.
G. service users and API key generation.
H. PAT/API keys: creation/scope/expiry/revocation.
I. repositories/environment only if relevant to integration context.
J. MCP: determine whether any Devin MCP surface exposes sessions/metrics/usage/admin/telemetry; do not assume.

Create human- and machine-readable inventory with apiVersion, scope, category, HTTP method/path, purpose, auth type, required permission/role, enterprise/org scope, pagination/rate limits, response summary, AAI use case, currentUserAccess VERIFIED/POSSIBLE/DENIED/UNKNOWN/ADMIN_REQUIRED, test status and notes.

======================================================================
2. AUTHENTICATION / CURRENT USER / TOKEN FEASIBILITY
======================================================================

Determine supported official mechanisms: PAT, API key, Service User API key, OAuth, browser/session credential or other official mechanism.

Do NOT extract browser cookies or undocumented tokens; do NOT scrape local app storage.

Inspect safely visible account/profile/org/enterprise/API-key/service-user settings and record VISIBLE/NOT_VISIBLE/ACCESS_DENIED/UNKNOWN without inferring admin rights from UI presence.

Evaluate separately whether current user can independently obtain PAT, Service User API key or other official credential suitable for Spring Boot; who must approve/create; scope/permissions/expiry/rotation/revocation/recommended use/suitability.

Do NOT create credentials during discovery unless explicitly authorized and harmless validation requires it.

Evaluate Service User as preferred future Architecture AI identity with least privilege. Identify minimum documented permissions for sessions, metrics, consumption, user usage if required and audit logs. Do not request broad admin permissions.

======================================================================
3. SAFE REAL API TESTING / CONNECTIVITY
======================================================================

If an officially supported credential already exists and use is permitted, perform SAFE READ-ONLY calls starting with minimal identity/session/usage/consumption endpoints. Never print credential. Record HTTP status, response schema summary, pagination, fields, latency and error type; avoid sensitive payload display.

If no credential, do not circumvent authentication; record CREDENTIAL_REQUIRED and exact supported acquisition path.

Validate DNS/HTTPS/TLS/proxy/certificate/IP allow-list constraints without weakening TLS or altering workstation security.

If dedicated Enterprise deployment exists, determine documented/visible API domain. Do not assume api.devin.ai. Future config must support DEVIN_API_BASE_URL externally.

======================================================================
4. SPRING BOOT INTEGRATION REQUIREMENTS
======================================================================

Based on real discovery define base URL, auth mechanism, org/enterprise IDs if required, permissions/scopes, timeouts, pagination, rate-limit handling, retry, TLS/proxy requirements. Do NOT implement client yet.

Rank safest future integration identity such as organization-scoped Service User, enterprise Service User, PAT or other official mechanism, comparing least privilege, personal-user dependency, rotation, auditability, automation and OpenShift suitability.

======================================================================
5. METRICS / OPENTELEMETRY MAPPING
======================================================================

For every accessible Devin field, map potential normalized Architecture AI observation and mark DIRECT, DERIVED or NOT_AVAILABLE. Examples sessions_count -> AGENT_SESSION_COUNT; ACU consumption -> AGENT_USAGE_UNITS; session duration if available -> AGENT_SESSION_DURATION.

Prepare proposed normalized observation -> Micrometer/OpenTelemetry mapping without implementing metrics. Avoid session/user IDs as metric labels.

Identify whether session APIs expose prompts, conversation content, repo names, code, identity/email/URLs or other corporate info. Recommend minimum fields required for observability; do not persist unnecessary conversation content.

======================================================================
6. API STABILITY / COLLECTION MODEL
======================================================================

Identify stable/beta/legacy/deprecated APIs and prefer stable current. Determine pagination/date filters/updated-since/cursor/webhook/event/polling capabilities. Recommend incremental collection rather than aggressive full-history polling.

Create field matrix for individual session telemetry: identifier, status, times, duration, user, agent, messages, ACUs, repo, PR/result, failure, tags, org and other metadata as AVAILABLE/DERIVABLE/NOT_AVAILABLE/UNKNOWN.

Determine whether Devin exposes distinct Agent identity/model or primarily sessions. Do not invent agent metrics if API only models sessions.

======================================================================
7. CREDENTIAL STORAGE / SAFETY
======================================================================

Never store credentials in Git. Recommend future external-secret config such as DEVIN_API_BASE_URL, DEVIN_API_KEY, DEVIN_ORG_ID prepared for future OpenShift secrets.

DO NOT scrape cookies, inspect undocumented auth DBs, reverse-engineer Desktop auth, bypass RBAC, create unauthorized users/service accounts, disable TLS, store tokens in reports or expose secrets in logs. If admin required, report ADMIN_ACTION_REQUIRED and exact supported action.

======================================================================
8. DELIVERABLES / STOP
======================================================================

Create DEVIN_API_ACCESS_DISCOVERY.md, DEVIN_API_INVENTORY.json, DEVIN_PERMISSION_MATRIX.md, DEVIN_AUTHENTICATION_OPTIONS.md, DEVIN_SPRING_BOOT_INTEGRATION_REQUIREMENTS.md and DEVIN_OBSERVABILITY_FIELD_MAPPING.md.

End with decision matrix for Spring Boot API feasibility, token/PAT/service-user support, current user ability, sessions/usage/ACU/per-user/audit access, MCP telemetry, dedicated domain and admin intervention.

STOP after discovery and safe read-only validation. Do not implement Architecture AI Devin client or create credentials unless separately authorized.

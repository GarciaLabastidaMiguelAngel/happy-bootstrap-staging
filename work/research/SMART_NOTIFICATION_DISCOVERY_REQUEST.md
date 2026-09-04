# Smart Notification Discovery Request

Status: RESEARCH_REQUIRED
Direction: DIRECTION-0010
Related model: `work/SMART_NOTIFICATION_ADOPTION_AND_INTELLIGENCE_MODEL.md`

## Objective

Capture the real current Smart Notification capability before designing any replacement or intelligence layer.

## Evidence requested

- APIs/events/files used to request notifications;
- supported channels and provider integrations;
- template model and versioning;
- Legal/Compliance approval process and evidence;
- personalization variables;
- customer preference/consent behavior;
- priority/urgency/expiry support;
- retry/fallback/contingency behavior;
- delivery receipts and status semantics;
- guarantees/SLA/regulatory obligations;
- observability/logging/Kibana evidence;
- security/classification constraints;
- deployment/ownership/support model;
- known operational pain points;
- throughput/latency/failure baseline;
- APIs/automation surfaces Architecture AI may use.

## Required output classification

For each capability classify:
- EXISTS_VERIFIED;
- EXISTS_BUT_LIMITED;
- NOT_AVAILABLE_VERIFIED;
- UNKNOWN;
- REUSE_AS_IS;
- EXTEND;
- COMPLEMENT;
- REPLACE_CANDIDATE_REQUIRES_EVIDENCE.

Do not infer features from the platform name.
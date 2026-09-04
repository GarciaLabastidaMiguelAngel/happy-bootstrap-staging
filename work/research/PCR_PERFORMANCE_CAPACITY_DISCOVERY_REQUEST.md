# PCR Performance / Capacity Discovery Request

Status: RESEARCH_REQUIRED
Direction: DIRECTION-0010
Related model: `work/PCR_PERFORMANCE_CAPACITY_AND_SCALABILITY_GATE_MODEL.md`

## Objective

Discover the bank's current PCR/performance/load-testing process, tooling, evidence requirements and environment constraints before deciding what Architecture AI should automate or replace.

## Evidence requested

- current PCR process/owners;
- current load/performance tools and licenses;
- scenario/test-plan format;
- required approvals/gates;
- required metrics and reports;
- development/preproduction/production-like environment topology;
- allowed saturation/stress/failure testing conditions;
- OpenShift namespaces/clusters available for PCR;
- load-generator placement rules;
- current observability/Kibana/APM data used;
- SLO/SLA/performance thresholds;
- test-data generation/classification rules;
- environment/resource manifest requirements;
- retention/resguard of results;
- CI/CD or Glo integration;
- known handoff/context problems between API engineering and PCR teams;
- representative current PCR report;
- representative load script/project.

## Required output

Produce:
- CURRENT_PROCESS_MAP;
- TOOL_CAPABILITY_MATRIX;
- PCR_GATE_MATRIX;
- EVIDENCE_PACKAGE_SCHEMA candidate;
- LOCAL/LAB AUTOMATION candidate;
- OPENSHIFT distributed-load candidate;
- gaps/UNKNOWNs;
- reuse/extend/replace classification.

Do not run destructive load tests without explicit environment authorization.
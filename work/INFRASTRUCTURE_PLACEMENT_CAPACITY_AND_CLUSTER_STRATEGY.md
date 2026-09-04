# Infrastructure Placement, Capacity and Cluster Strategy

Status: ACTIVE_DIRECTION_MODEL
Direction: DIRECTION-0013

## Purpose

Separate application/domain decomposition from infrastructure placement. OpenShift cluster count, namespace topology and physical placement must be justified by capacity, resilience, security, lifecycle and operational evidence rather than by organizational/domain count alone.

## Current user-provided context

The user reports an estate of approximately six OpenShift clusters, each highly available across two physical data centers, historically associated with initiatives/domains and potentially with budget/accountability boundaries.

This is useful context but must be verified through infrastructure evidence before making consolidation or migration decisions.

## Core rule

`DOMAIN / INITIATIVE / MODULE COUNT != CLUSTER COUNT`.

Use explicit placement policy:

Capability/Deployable
-> resource profile
-> availability/SLO
-> security/trust requirements
-> data/locality requirements
-> dependency topology
-> blast-radius tolerance
-> lifecycle/upgrade needs
-> capacity/PCR evidence
-> cost/chargeback requirement
-> operational ownership
-> PlacementDecision.

## Placement scopes

Consider the smallest scope that satisfies the requirement:
1. same process/module;
2. separate pod/deployment;
3. separate service;
4. separate namespace/project;
5. separate node pool/runtime class where available;
6. separate cluster;
7. separate physical-site/region architecture where required.

Do not jump directly from domain separation to cluster separation.

## Dedicated cluster triggers

A dedicated cluster should be justified by material evidence such as:
- hard security/trust/isolation boundary;
- regulatory/data-sovereignty requirement;
- materially independent availability/failure domain;
- incompatible upgrade/platform lifecycle;
- very large/specialized capacity profile;
- network/locality constraint;
- operational ownership requiring hard platform boundary;
- platform limitation that cannot be solved through namespaces/quotas/network policy/node pools;
- proven blast-radius need.

Chargeback/accounting alone should first evaluate less expensive allocation mechanisms such as resource labels, namespaces/projects, quotas, cost attribution and FinOps controls.

## Capacity-driven branching

A capability can remain in the shared runtime until evidence shows extraction pressure.

Example:

```text
modular monolith
  |
  +-- fraud capability  <-- CPU/latency/scale pressure evidenced
  |       |
  |       +--> independent deployment
  |
  +-- cache/projection capability <-- specialized memory/availability pressure
          |
          +--> independent deployment/runtime pool if justified
```

A later dedicated cluster is an additional decision, not an automatic consequence of becoming a microservice.

## Cluster-consolidation hypothesis

`Fewer clusters could provide the same or better capability` is a valid hypothesis, not a decision.

Before proposing consolidation collect:
- allocated vs actual CPU/memory by cluster/domain;
- pod/service count;
- peak/average utilization;
- HPA behavior;
- quotas/reservations;
- availability/failure history;
- network/dependency traffic;
- upgrade/maintenance constraints;
- security isolation requirements;
- environment promotion model;
- platform-support cost;
- chargeback requirements;
- physical-data-center failover topology;
- PCR/capacity headroom;
- blast-radius requirements.

## Environment parity

DEV/PRE/PROD should be homologous in contracts/configuration patterns where useful, but not falsely declared identical when physical capacity/platform integrations differ.

Maintain an Environment Capability Matrix and explicit deltas.

## FinOps/cost direction

Cost should be attributable to capability/consumer/service even when infrastructure is shared.

Prefer cost dimensions such as:
- solution/initiative;
- capability;
- deployment/service;
- namespace/project;
- environment;
- resource requests/usage;
- shared-platform allocation rule.

Do not force physical isolation merely to make accounting understandable if governed logical allocation can solve it.

## Goal

Move toward a measured placement model where applications branch physically only as needed, shared infrastructure remains efficient, and cluster topology is an independently optimized platform decision rather than a mirror of the organization chart.
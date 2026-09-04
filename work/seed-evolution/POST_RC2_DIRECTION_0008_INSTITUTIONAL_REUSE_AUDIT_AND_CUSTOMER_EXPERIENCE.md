# Post-RC2 Evolution — DIRECTION-0008

Status: ACTIVE_EVOLUTION_DELTA
Baseline: immutable rc2 historical snapshot
Direction: DIRECTION-0008

## Purpose

Capture the next evolution that a future reconciled candidate must absorb without mutating the historical rc2 snapshot.

## Additions

1. Current bank/regulatory audit artifacts remain supported and prioritized while their generation is progressively automated from governed state.
2. External-authority requirements such as Banxico obligations are evidence-required and must not be inferred.
3. Institutional delivery platforms/archetypes/pipelines are reused before replacement.
4. User-provided `Glo` context becomes a formal discovery dependency for bank microservice archetypes/OpenShift pipeline integration.
5. Reuse decision model: REUSE_AS_IS / CONFIGURE / EXTEND / WRAP_ADAPT / POC / REPLACE_REQUIRES_EVIDENCE.
6. Risk/security/fraud becomes explicitly cross-cutting with synchronous vs asynchronous classification based on policy/evidence.
7. Customer experience becomes an architecture-wide optimization objective across device, channel/backend, cache/read models, events, source systems and infrastructure.
8. Banking POCs must be designed so successful results can enter the real institutional delivery path instead of becoming isolated LAB implementations.
9. Copilot long-term authority remains bounded/governed and should orchestrate institutional capabilities rather than duplicate them.

## Required future reconciliation

A future handoff/release should refresh:
- LAB bootstrap capability coverage;
- Repository/Archetypes prompt with Glo/institutional reuse;
- DevOps/environment capability matrix;
- standards/governance registry;
- Customer Position POC context;
- external artifact obligation registry;
- risk/customer-experience evaluation criteria.

## Research dependencies

- GitHub Issue #4 — Glo archetype/OpenShift delivery contracts.
- GitHub Issue #5 — institutional/regulatory architecture artifact obligations.

## Historical integrity

Do not rewrite rc2 or prior frozen releases. Absorb this delta only through a new governed candidate/release.
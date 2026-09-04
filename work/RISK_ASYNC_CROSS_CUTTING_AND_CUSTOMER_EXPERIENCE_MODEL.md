# Cross-Cutting Risk and Customer Experience Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0008

## Purpose

Define risk/security/fraud analysis as a cross-cutting concern that must protect the bank without unnecessarily serializing customer-facing experience or technical delivery.

## Core principle

RISK IS VERTICAL/CROSS-CUTTING; CUSTOMER-CRITICAL FLOWS SHOULD NOT BE BLOCKED BY WORK THAT CAN SAFELY RUN ASYNCHRONOUSLY.

This is a design objective, not permission to bypass controls.

## Decision rule

For every risk/security/fraud control classify whether it is:
- SYNCHRONOUS_BLOCKING_REQUIRED;
- SYNCHRONOUS_FAST_PATH;
- ASYNC_EVALUATION_ALLOWED;
- POST_EVENT_MONITORING;
- HUMAN/EXTERNAL_APPROVAL_REQUIRED.

Classification must be based on institutional policy, threat/risk evidence and business impact.

## Customer-experience objective

Do not optimize only endpoint latency. Optimize the complete perceived customer journey:
- data already available safely on device/backend projections;
- incremental refresh instead of full reload where valid;
- prefetch only when measured behavior justifies it;
- background/asynchronous evaluation where controls allow it;
- deterministic cache/freshness semantics;
- resilient fallback;
- minimal redundant network/data/database work.

## Layered optimization analogy

Architecture AI should think across layers similarly to high-scale content platforms:
- device/local secure projection;
- edge/channel/backend-for-frontend candidate when justified;
- API/read projection/cache;
- event-driven invalidation/synchronization;
- source-system optimized queries/transactions;
- infrastructure/network/runtime placement.

Do not copy Netflix-specific technology blindly; reuse the architectural principle of moving data/work to the most effective governed layer.

## Evidence loop

Customer/risk optimization must be measurable through:
- task/journey latency;
- backend/API latency;
- cache hit and freshness;
- source calls avoided;
- risk-decision latency;
- fraud/security outcome metrics where authorized;
- failure/fallback rate;
- customer abandonment/UX signals when available;
- infrastructure cost/load.

## Goal

Create a banking platform that is fast because work is placed at the correct layer and executed at the correct time, while risk and compliance remain continuously enforced through explicit synchronous/asynchronous policy.
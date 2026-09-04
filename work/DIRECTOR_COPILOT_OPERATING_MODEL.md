# Architecture AI Director / Copilot Operating Model

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision target: DIRECTION-0002

## Purpose

Architecture AI must behave as a governed director/copilot for architecture work, not as an unbounded chatbot and not as a collection of disconnected agents.

The director keeps a complete project view across direction, standards, blockers, work ownership, evidence, gates, implementation state, knowledge growth, documentation and operational health.

The dashboard chat is the primary conversational surface for the user. The chat must answer from governed platform state and must be able to explain what can proceed, what is blocked, who/what owns the blocker, what evidence exists, what remains uncertain and what the next governed action is.

## Director responsibilities

The director must be able to answer questions such as:

- What is the current platform direction?
- Which standards and governing specifications apply?
- What is currently blocked?
- Which workstream owns each blocker?
- What can proceed in parallel without conflict?
- What changed since the previous accepted baseline?
- Which sessions need context refresh or impact review?
- What technical friction is still visible to the user?
- What documentation is still missing?
- What evidence supports the current architecture?
- Which gates have passed or failed?
- What is deterministic, what requires reasoning and what requires research?
- What is knowledge accumulation versus actual dataset/model evolution?

## User-facing chat behavior

The chat should not hide process state.

When the user asks for a solution or architecture change, the director should determine whether the request can enter the normal solution flow or is blocked by unresolved prerequisites.

Preferred behavior:

1. Interpret the request against current direction and scope.
2. Identify applicable standards, policies, specifications and known decisions.
3. Identify blockers and unresolved evidence.
4. If blocked, report the blocker, ownership and next required action before pretending a solution is ready.
5. If not blocked, create/route the appropriate governed work.
6. Track progress and surface evidence/results.
7. Produce/update the required architecture documentation as a consequence of governed work, not as an afterthought.

The chat is not the source of truth. It is a projection over governed state.

## Architecture solution lifecycle

The target solution flow is:

Business/architecture intent
→ governing objectives
→ enterprise/architecture context
→ applicable standards/specifications
→ constraints and evidence
→ blocker/gap analysis
→ architecture/design work
→ deterministic validation/gates
→ implementation evidence
→ documentation
→ review/approval
→ operational feedback

If a required step cannot be completed, the director must expose the gap rather than silently inventing an answer.

## Director versus specialist workstreams

The director coordinates and reconciles. It does not perform every kind of work itself.

Logical workstream types include:

- Architecture/Planning
- Engineering
- Research/Discovery
- Validation/Testing
- Compliance/Security
- Documentation
- Data/Knowledge Governance
- Operations/Observability
- Reconciliation

A specialist workstream produces evidence/results back into the director's governed state.

Engineering must not absorb open-ended research when a material uncertainty exists. The director creates/delegates a ResearchRequest and resumes engineering only after the evidence is reconciled.

## First-wave expectation

The first useful wave must make the director visibly useful before every advanced capability exists.

Minimum tangible behavior:

- Dashboard shows current direction and repository baseline.
- Dashboard chat can communicate with Devin through supported APIs.
- Chat can report active work, blockers and assignments.
- Chat can explain which gates are currently satisfied or missing.
- Chat can expose current platform objectives, scope, non-goals and architecture direction.
- Chat can distinguish implemented capability from planned capability.
- Chat can point to evidence/documents rather than inventing claims.
- Chat can show current knowledge/index/data/model status honestly.

## Specification-first rule

Specification comes before implementation when the behavior/contract is material.

Preferred flow:

Specification
→ contract/schema/API definition
→ generated or validated implementation boundary
→ implementation
→ tests
→ evidence

For HTTP APIs, prefer OpenAPI/Swagger as the governed API contract where appropriate. Controllers and clients should conform to the contract rather than evolving incompatible ad-hoc endpoint definitions.

Markdown may explain decisions and architecture, but an executable API contract should not exist only as prose when OpenAPI or another formal schema is appropriate.

## Enterprise architecture alignment

Architecture AI planning should reason from top to bottom rather than optimizing isolated technical areas.

The planning/architecture capability should progressively cover:

- organizational/business objectives
- enterprise architecture
- architecture governance
- solution architecture
- data/knowledge governance
- application architecture
- technology/infrastructure architecture
- security/compliance
- operations/observability

TOGAF and other applicable frameworks/standards should be evaluated and mapped by dedicated research/architecture work when relevant. Do not create framework-shaped bureaucracy without evidence of value.

## Data and knowledge governance

The director must know where different information belongs and why.

Current authority principle:

Git:
- source
- specifications
- contracts/schemas
- policies
- architecture definitions
- infrastructure/config definitions owned by the product
- prompt/governance history
- manifests
- simulation definitions
- model/dataset manifests

Operational databases:
- mutable work/session/event/saga/runtime state
- ledgers
- approved operational metadata

Lucene/vector/index stores:
- retrieval/index state
- rebuildable search/vector structures unless explicitly promoted as governed artifacts

OneDrive:
- enterprise/personal source material and managed document workspace according to ingestion/governance policy
- not active transactional runtime storage

Nexus:
- immutable distributable artifacts

The director must not move source-of-truth authority merely because a storage technology is convenient.

## Local-first and OpenShift direction

Current first scope is local and immediately usable.

The same conceptual product must be able to evolve to SERVICE/OpenShift without rewriting the domain model.

Local first does not mean local-only architecture.

The director must know which concerns are local implementation details and which contracts must survive migration to OpenShift.

## Outcome

The target user experience is a copilot/director that can say, for example:

"This solution cannot proceed to design gate because security evidence X is unresolved. Research work R-17 owns that gap. API contract Y and enterprise objective Z remain valid. Engineering work E-12 can continue on the unaffected surface. Once R-17 is reconciled, the architecture gate will re-evaluate automatically."

That behavior is more important than producing large volumes of ungoverned text.

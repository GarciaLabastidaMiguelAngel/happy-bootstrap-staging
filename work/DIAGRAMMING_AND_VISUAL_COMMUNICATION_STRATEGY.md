# Diagramming and Visual Communication Strategy

Status: ACTIVE_DIRECTION
Direction revision: DIRECTION-0004

## Purpose

Define how Architecture AI chooses, governs and projects diagrams for different audiences.

Core principle:

ONE GOVERNED CONCEPTUAL MODEL
→ MULTIPLE VIEW PROJECTIONS
→ AUDIENCE-APPROPRIATE RENDERING

A diagram is a projection of governed architecture/work knowledge, not the source of truth.

## Audience classes

- Engineering / implementation
- Architecture / design
- Executive / director / stakeholder
- Operational / control
- Documentation / audit evidence

The same topic may require different views for different audiences.

## Technical / canonical diagrams

Use when precision, Git diffability and reproducibility matter.

Preferred tools:

- Mermaid for flows, sequences, states and quick operational views.
- C4 as a core architecture abstraction method.
- PlantUML / C4-PlantUML for canonical C4, component, deployment and infrastructure views.
- draw.io only when freeform precision or visual composition is essential.

## Conceptual / executive diagrams

Use when abstraction, storytelling and stakeholder readability matter.

Preferred tools:

- draw.io / diagrams.net
- governed SVG/PNG exports
- selectively enhanced C4/PlantUML only when sufficiently readable

Iconography is desirable when it reduces cognitive load. Logos are optional recognition aids; they are not architecture semantics and must not be the only way meaning is conveyed.

## Dual-track model

### Track 1 — Canonical source

Git stores governed diagram source where practical:

- Mermaid
- PlantUML/C4-PlantUML
- governed draw.io source where the visual composition itself matters
- diagram catalog/metadata

### Track 2 — Human projection

The same governed concepts may be projected to:

- draw.io
- SVG/PNG
- Arc42 PDF
- Confluence
- PowerPoint or other human deliverables

The projection must not become an independent source of truth.

## Selection policy

Before choosing a notation resolve:

1. audience
2. purpose
3. conceptual vs technical
4. canonical source vs presentation projection
5. required detail level
6. whether editable Git source is required

### Structural / technical request

Prefer C4, PlantUML and/or Mermaid.

Examples:

- container interaction
- agent runtime sequence
- module/event topology
- deployment boundaries
- network/infrastructure segments

### Conceptual / organizational request

Prefer a draw.io-style conceptual projection.

Examples:

- organization of agents and responsibilities
- Director vs Engineering vs Research operating model
- enterprise-platform relationship
- OneDrive → knowledge → work → documentation journey

### Hybrid request

Provide:

1. conceptual overview
2. technical drill-down

This is the preferred pattern when both stakeholder understanding and engineering precision matter.

## Agent-organization example

If asked to show how agents are organized conceptually, the primary view should show the Director/Copilot and the logical workstreams around it, with clear responsibility labels and useful iconography. A supporting technical view may then show Agent Runtime, Work/Saga, MCP, Notifications and Observability.

Do not answer an executive conceptual request only with a low-level component diagram.

## Storage and publication

Git:

- canonical Mermaid
- canonical PlantUML/C4
- governed draw.io sources
- versioned diagram metadata
- auditable rendered outputs when they form part of a governed release

Confluence / Arc42 / other publication surfaces:

- rendered diagrams
- explanatory narrative
- audience-specific projection

If a diagram forms part of an auditable Arc42 release, its source/reference and rendered version must be traceable to the released Arc42 version.

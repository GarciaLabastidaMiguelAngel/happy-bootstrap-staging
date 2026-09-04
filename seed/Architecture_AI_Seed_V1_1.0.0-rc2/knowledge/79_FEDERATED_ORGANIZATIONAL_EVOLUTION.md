# 79 — Federated Organizational Evolution & Domain Capability Direction

## Control

| Campo | Valor |
|---|---|
| `artifact_id` | `HAPPY-KNOW-79` |
| `wave_id` | `P-WAVE-3E-01` |
| `status` | `DRAFT` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `classification` | `TARGET_DIRECTION + CAPABILITY_EXTENSIONS + PROPOSALS` |
| `new_spec_ids` | `NONE` |

## Reconciliación semántica

El nombre **Federated Engineering Capability Model** permanece `PROPOSAL_LABEL`; no se declara taxonomía institucional. El concepto requerido se incorpora sin una capability ni una Spec duplicadas mediante estas extensiones:

| Dirección 3E | Identidad existente que se amplía | Disposición |
|---|---|---|
| introspección organizacional/capability discovery | `CAP-3C-009` Corporate Capability Discovery; `AAI-SPEC-0001/0016/0032` | `EXTEND_EXISTING_CAPABILITY` |
| registro y federación de Agents/Skills/Tools/services/rules/harnesses | `AAI-SPEC-0015..0017/0019`; `CAP-3C-022` | `COMPOSE_EXISTING_SPECS` |
| madurez agentic→deterministic | `DNA-CAN-006`; documento 58; `AAI-SPEC-0019/0020/0022/0029` | `EXTEND_EXISTING_MODEL` |
| Domain Context Projection | `AAI-SPEC-0005/0024`; Context Engineering | `PROFILE_CANDIDATE`, no Spec nueva |
| Domain UX | `CAP-3C-016`; `AAI-SPEC-0003/0034` | `PROJECTION_PROFILE_CANDIDATE` |
| conflicto con DNA | `AAI-SPEC-0010/0021/0027`; Decision Package | `EXTEND_EXISTING_FLOW` |
| human value shift | Target Operating Model + ownership/authority vector | `PROPOSAL`, decisión organizacional no autorizada |

## Límites canónicos de autoridad

Estas reglas son Architectural DNA de Architecture AI, no una transferencia de autoridad bancaria:

> **VISIBILITY != AUTHORITY**

> **DISCOVERY != OWNERSHIP_TRANSFER**

> **PLATFORM_KNOWLEDGE != ORGANIZATIONAL_AUTHORITY**

Architecture AI puede descubrir, representar, correlacionar y evaluar una capability. Eso no la vuelve owner, approver ni operador de dicha capability. Arquitectura, Gobierno de APIs, CISO/Seguridad, DevOps, Java Engineering, Data Governance, Platform Engineering, Integration Engineering, QA, Observability y otros dominios conservan sus responsabilidades y autoridades observadas o institucionalmente asignadas.

Cuando owner o authority no estén evidenciados, el valor correcto es `UNKNOWN/BLOCKED_BY_SOURCE`; nunca Architecture AI por defecto.

## Introspección no intrusiva

Dirección operativa inicial:

`DISCOVER/OBSERVE → UNDERSTAND → MODEL → COMPARE → ALIGN → PROPOSE_EVOLUTION → AGREED_INTEGRATION → FEDERATED_OPERATION`.

Está prohibido inferir `OBSERVE → REPLACE`. Antes de cualquier side effect, cambio de proceso o automatización se requieren scope, permission, owner, evidence, policy y approval aplicables.

### Resultado de comparación

Los siguientes resultados son un **profile candidate**, no una taxonomía congelada:

| Resultado | Significado mínimo | Acción permitida |
|---|---|---|
| `ALIGNED` | coincide con DNA/decisiones aplicables y existe evidencia suficiente | conservar y registrar evidencia |
| `PARTIALLY_ALIGNED` | parte del modelo coincide; existen gaps explícitos | abrir work/research acotado |
| `LOCAL_JUSTIFIED_VARIANT` | diferencia local con rationale/evidence y authority | mantener local; evaluar aprendizaje central |
| `MISSING_CAPABILITY` | requisito no cubierto por capability observada | capability gap; investigar antes de construir |
| `DETERMINISTIC_CANDIDATE` | reglas estables parecen suficientes | evaluar readiness mediante Harness; no automatizar aún |
| `POTENTIAL_DUPLICATE` | solapamiento semántico o funcional | deduplicar identidad/scope antes de copiar |
| `ARCHITECTURE_CONFLICT` | incompatibilidad material permanece tras reconciliación | Decision Package y human architecture review |
| `UNKNOWN` | evidencia insuficiente | source/research obligation; no conclusión |

Una práctica diferente no es automáticamente incorrecta. La comparación distingue conflicto real, evolución temporal, excepción válida, conocimiento central incompleto, terminology mismatch, implementation drift e insufficient evidence.

## Aprendizaje bidireccional

`CENTRAL_KNOWLEDGE ↔ DOMAIN_KNOWLEDGE ↔ OPERATIONAL_REALITY`.

Architecture AI aporta DNA, decisions, standards, patterns, constraints, evidence rules y evolution direction. El dominio aporta realidad operativa, conocimiento experto, excepciones, restricciones, capabilities, fallas y evidencia. El flujo hacia el centro pasa por ingesta, clasificación, reconciliación, validation y promotion (`AAI-SPEC-0007 → 0004`); no existe promoción directa desde observación.

Un `LOCAL_JUSTIFIED_VARIANT` puede:

1. permanecer local con scope y rationale;
2. enriquecer el modelo central como candidate;
3. provocar revisión de una decisión/standard;
4. convertirse en patrón compartido sólo tras authority y promotion.

## Registro federado de capabilities

La Seed debe permitir que cada dominio describa, sin copiar automáticamente al core:

- Agents;
- Skills;
- Tools;
- deterministic services;
- rules/validators/templates;
- harnesses/evaluators;
- workflows;
- knowledge y evidence;
- owners, authorities, consumers, permissions y lifecycle.

Lifecycle conceptual:

`DISCOVER → REGISTER → CLASSIFY → CORRELATE → EVALUATE → DEDUPLICATE → ALIGN → FEDERATE → PROMOTE | KEEP_LOCAL | SUPERSEDE | REJECT`.

Las etiquetas `PLATFORM_INTERNAL`, `BANK_SHARED`, `ENGINEERING_DOMAIN`, `BUSINESS_DOMAIN`, `TEAM_LOCAL` y `EXPERIMENTAL` permanecen `PROPOSED_CLASSIFICATION`. Su adopción requiere corpus organizacional y tests de casos ambiguos.

## Madurez deterministic/agentic

La routing rule existente se endurece sin crear una escalera obligatoria:

| Forma | Cuándo corresponde | Evidencia mínima antes de promoción |
|---|---|---|
| `MANUAL` | autoridad, conocimiento tácito o proceso aún no modelado | owner, outcome y observación controlada |
| `AGENT_ASSISTED` | humano decide; IA prepara/analiza | provenance, review y rejection path |
| `AGENTIC` | razonamiento abierto requerido dentro de policy | Work Package, budgets, Harness y evidence |
| `HYBRID` | reglas y razonamiento se complementan | boundary, fallback, comparison y approvals |
| `DETERMINISTIC` | reglas/schemas/algorithms son suficientes y verificadas | contract, conformance tests, exceptions, rollback y owner approval |

`AUTOMATION_POSSIBILITY != AUTOMATION_READINESS != AUTHORITY_TO_CHANGE_THE_ORGANIZATION`.

Comportamiento agentic repetitivo/estable sólo genera `DETERMINISTIC_CANDIDATE`. La migración exige equivalence criteria, exception coverage, shadow evidence, security/audit/operational checks y authority; el modelo previo permanece reversible hasta promotion.

## Domain Evolution Plan

Patrón target, no operating model bancario aprobado:

`CURRENT_STATE → OBSERVED_WORKFLOW → GAPS → CANDIDATES → STANDARDS_ALIGNMENT → TARGET_STATE → SHADOW → ASSIST → PARTIAL_AUTOMATION → VALIDATED_AUTOMATION → PROPOSED_OPERATING_MODEL_EVOLUTION`.

Cada plan conserva:

- domain/owner/authority y scope;
- current vs target capability state;
- evidence, assumptions, local rationale y exceptions;
- dependencies, risks, standards y cross-cutting obligations;
- operational-continuity constraints;
- entry/exit/rollback y decision gates;
- human-role impacts y transition needs.

No existe `DISCOVER → REPLACE_CURRENT_PROCESS`.

## Human Value Shift

`PROPOSAL / STRATEGIC_TARGET`, no política de reorganización. Automation pretende desplazar esfuerzo repetitivo hacia valor humano de mayor autoridad: policy evolution, strategic exceptions, architectural judgment, knowledge production, capability improvement y coordination.

Toda propuesta debe identificar:

- actividad que disminuye y evidencia de readiness;
- responsabilidades que permanecen o cambian;
- authority/irreducible judgment que sigue siendo humano;
- conocimiento nuevo que el dominio debe producir;
- capabilities y transición requeridas;
- owner/HR/governance approvals aplicables.

Architecture AI no decide eliminar equipos, puestos o autoridades.

## Domain-specific UX como proyección

`Architecture Workspace`, `API Governance Workspace`, `Security Workspace`, `Java Engineering Workspace`, `DevOps Workspace` y `Data Governance Workspace` son ejemplos `PROPOSAL`, no catálogo final.

Cada experiencia:

1. proyecta el mismo modelo gobernado;
2. filtra por role, permission, domain, country y purpose;
3. muestra capabilities, work, decisions, evidence, gaps, standards, exceptions, maturity, recommendations y human actions aplicables;
4. no crea otra canonical truth;
5. preserva IDs y enlaces al source/evidence.

## DNA → Domain Context Projection

El patrón extiende Context Engineering:

`ARCHITECTURAL_DNA + DECISIONS + STANDARDS + CONSTRAINTS + EXCEPTIONS + EVIDENCE_RULES → PURPOSE/DOMAIN_FILTER → VERSIONED_DOMAIN_CONTEXT_PROJECTION → DOMAIN_HUMAN/AGENT/TOOL`.

La proyección incluye `reasonForInclusion`, source/version, scope, authority y `mustNotInfer/mustNotDo`. No se desarrollan Context Packs de dominio en Work; Devin los expande después de obtener fuentes y autorización.

## Conflicto contra Architectural DNA

Una diferencia se reconcilia primero contra source time, scope, terminology, exception y central-model completeness. Si el conflicto material persiste:

`ARCHITECTURE_CONFLICT → HUMAN_ARCHITECTURE_REVIEW` mediante el Decision Package del documento 58, ampliado con `localRationale` y `applicableDna`.

La plataforma no modifica automáticamente ni la práctica local ni el DNA.

## API Governance fixture

`FIXTURE_CONCEPTUAL`, no descripción factual del banco. El fixture valida que el modelo pueda representar un área existente, owner/authority, APIs y discovery, capabilities humanas/agentic/determinísticas, standards, exceptions, evidence, gaps, automation candidates, domain UX/context projections, target maturity y un conflicto con escalamiento.

La expectativa es federated assistance: observar/modelar, comparar, operar en shadow, demostrar con Harness y proponer. El owner del dominio conserva la decisión y la continuidad operacional.

## Blockers y expansión

- organización, owners, authorities y capability inventories reales: `BLOCKED_BY_SOURCE(SER-014)`;
- conectores/permisos/domain processes: `SER-002/004/007/009/014`;
- standards de federated capability governance: `RO-3E-004`;
- personas/journeys/accessibility: reutiliza `RO-3C-013`;
- AI governance/automation promotion: reutiliza `RO-3C-016`;
- implementación, Domain Workspaces, Agents/Skills/Tools y operating-model changes: post-handoff, no autorizados en esta oleada.


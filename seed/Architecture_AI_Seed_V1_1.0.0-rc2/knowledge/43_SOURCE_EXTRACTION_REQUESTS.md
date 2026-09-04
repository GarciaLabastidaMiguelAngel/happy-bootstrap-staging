# 43 — Source Extraction Requests

## Control

- **status:** `DRAFT`
- **devin_status:** `PREPARED_NOT_DELIVERED`
- **rule:** solicitar evidencia específica; no rellenar ausencia mediante inferencia.

## Requests

### SER-001 — Raw Happy conversations

- **needed_for:** no-loss review, provenance a nivel de mensaje y recuperación de Specs históricas.
- **source_requested:** export completo o exports individuales de chats Happy con conversation ID, message ID, role, timestamp, title y attachments.
- **priority:** `CRITICAL`.
- **acceptance:** parseable, conteo de mensajes, hash del archivo y mapping chat→knowledge entities.
- **blocked_items:** declaración de recuperación completa; decisiones/rationale dispersos.

### SER-002 — Architecture AI source repository

- **needed_for:** repository map, implementation baseline, tool/skill catalog y traceability.
- **source_requested:** repo/checkout autorizado con remote, branch/tag, commit, módulos, source, config, schemas, tests y documentación.
- **priority:** `CRITICAL`.
- **acceptance:** commit verificable; inventory reproducible; ningún secret expuesto.
- **blocked_items:** `REPOSITORY_MAP.md`, code mapping, runtime verification.
- **handoff_resolution:** Devin resolves this first in the authorized real environment and emits `ImplementationSourceReceipt` conforming to `schemas/implementation-source-receipt.schema.json`.
- **handoff_effect:** `NOT_A_HANDOFF_BLOCKER`; remains a current-state/build blocker until the receipt identifies repository, branch, commit, dirty state, modules, build/config/deployment/test assets and reproducible evidence.

### SER-003 — Original Devin baseline result

- **needed_for:** verificar el contenido derivado de Prompt 01.
- **source_requested:** `CURRENT_IMPLEMENTATION_BASELINE.md` original, run/session reference y logs/artifacts asociados.
- **priority:** `CRITICAL`.
- **acceptance:** archivo íntegro, timestamp, repo commit, prompt reference y hash.
- **blocked_items:** reconciliación completa del resultado Devin.
- **handoff_resolution:** preserve any located baseline as historical evidence, compare it to the SER-002 commit and emit `BaselineReconciliationReceipt`; absence remains explicit rather than reconstructed.
- **handoff_effect:** `NOT_A_HANDOFF_BLOCKER`; blocks trustworthy historical reconciliation, not transfer of the Seed.

### SER-004 — Exact MCP Tool catalog

- **needed_for:** Specs 0017/0035, AGENTS, Tool Policy y Skills.
- **source_requested:** las 30 Tools observadas desde annotations/manifests/config/code con ID, name, version, handler, input/output schema, auth, policy class, side effects y tests.
- **priority:** `CRITICAL`.
- **acceptance:** conteo exacto, path/symbol por Tool, schemas y test mapping.
- **blocked_items:** tool allowlists, bootstrap Skills y MCP contract final.

### SER-005 — Exact Skill catalog

- **needed_for:** AGENTS, bootstrap Skills y agent/tool correlation.
- **source_requested:** las 16 Skills reportadas con manifests/files, version, purpose, agents, inputs/outputs, allowed tools, dependencies y tests.
- **priority:** `CRITICAL`.
- **acceptance:** deduplicated catalog, path/hash y consumer mapping.
- **blocked_items:** aprobación de Skills candidatas y evolución.

### SER-006 — Java 21 build and test evidence

- **needed_for:** baseline verificable y gap closure.
- **source_requested:** JDK vendor/version, build wrapper/version, command, clean build log, test reports, coverage si existe, environment y commit.
- **priority:** `CRITICAL`.
- **acceptance:** ejecución reproducible; resultados por módulo/test; artifact paths/hashes.
- **blocked_items:** `VERIFIED` implementation, release/readiness.
- **handoff_resolution:** execute dependency resolution, compile, tests, available architecture/integration checks, configuration and startup/runtime checks on the same SER-002 commit; emit `BuildRuntimeReceipt`.
- **handoff_effect:** `NOT_A_HANDOFF_BLOCKER / BUILD_BLOCKER`; Java 21 remains current baseline, not an eternal policy.

### SER-007 — Governed banking catalogs and policies

- **needed_for:** authoritative Banking Context y reutilización real.
- **source_requested:** capabilities/components/APIs/platforms con IDs, versions, owners, scope, lifecycle, interfaces; políticas de seguridad, PCI, fraude, datos, retención y arquitectura.
- **priority:** `HIGH`.
- **acceptance:** authority, validFrom/validUntil, country scope y provenance.
- **blocked_items:** ejemplos→capability canónica, controles corporativos.

### SER-008 — Graph decision corpus and implementation

- **needed_for:** ADR-0004.
- **source_requested:** conversaciones/decisiones Graph, alternativas evaluadas, JanusGraph code/config/schema/tests/data, constraints de Neo4j/licencia/deployment y migration expectations.
- **priority:** `HIGH`.
- **acceptance:** chronology, decision/proposal labels, current implementation map y benchmark corpus.
- **blocked_items:** ADR final y graph-specific development.

### SER-009 — Devin Desktop/API capability evidence

- **needed_for:** Desktop handoff, automation y bootstrap integration.
- **source_requested:** versión, extension compatibility, available APIs/session/automation/notification mechanisms, organization permissions y policy restrictions.
- **priority:** `HIGH`.
- **acceptance:** reproducible spike and capability matrix.
- **blocked_items:** Spec 0003 implementation y primary HCI decision.

### SER-010 — Sprint/Planning historical model

- **needed_for:** formalizar `AAI-SPEC-0037` sin perder el diseño ya discutido.
- **source_requested:** chat/documento que definió Sprint, entidades, estados, planning rules, backlog, dependencies, capacity, entry/exit, relation to agents/Skills/Tools y evidence.
- **priority:** `HIGH`.
- **acceptance:** source trace and reconciliation against Specs 0009/0015/0018/0029.
- **blocked_items:** Sprint contract completo y planning-execution Skill.

### SER-011 — Standards, JSR and RFC register

- **needed_for:** no-loss review de referencias normativas/técnicas.
- **source_requested:** referencias Happy ya utilizadas y catálogos institucionales con identifier, version/date, applicability, adopted/researched status y linked decisions/specs.
- **priority:** `MEDIUM`.
- **acceptance:** no research reference mislabeled as corporate adoption.
- **blocked_items:** cierre de checklist JSR/RFC/standards.

### SER-012 — Real prompt/run export

- **needed_for:** resolver secuencia efectiva por target.
- **source_requested:** ledger/export de prompts realmente enviados a Devin y Work con title, target, sentAt, run/session ID, status, result and user confirmation.
- **priority:** `CRITICAL`.
- **acceptance:** Work y Devin separados; draft artifacts excluded from sent sequence.
- **blocked_items:** siguiente número de prompt Devin y final execution history.

### SER-013 — Bootstrap staging repository access and snapshot

- **needed_for:** sincronizar/validar Seed V1 en `GarciaLabastidaMiguelAngel/happy-bootstrap-staging` y demostrar clone/ZIP equivalence.
- **source_requested:** checkout o conector autorizado al staging con remote, default branch, current commit/history y reglas de acceso; sin solicitar ni extraer credenciales fuera de mecanismos configurados.
- **priority:** `HIGH` para staging sync; no bloquea compilación documental local.
- **acceptance:** `git status/remote/branch/commit` reproducibles, public-safe content scan, coherent wave commit, clone/ZIP checksum comparison and sync receipt.
- **observed_delta_3D:** repository is public/empty, default branch `main`, and configured connector reports admin/push permission. This satisfies identity/access discovery only; commit, fetch/checkout and clone/ZIP equivalence remain pending until receipts exist.
- **status:** `PARTIALLY_SATISFIED / NON_BLOCKING_GAP`.
- **blocked_items:** staging commit/push receipt, remote manifest validation and transport acceptance test.

### SER-014 — Organizational domains, ownership, authority and capability inventory

- **needed_for:** federated organizational evolution, Domain Introspection, capability ownership, Domain Context/UX projections and valid human escalation.
- **source_requested:** governed organizational/domain catalog with stable identities, mandates, owners, decision authorities, country/scope, workflows, interfaces, capabilities, Agents/Skills/Tools/services/rules/harnesses, access constraints, lifecycle, standards/exceptions and evidence locations.
- **priority:** `HIGH`; unknown does not block Seed packaging, but blocks institutional federation/change claims.
- **acceptance:** source authority and version, scope/validity, owner vs operator vs approver, provenance, access classification, cross-domain relationships, explicit unknowns and representative local-variant cases.
- **status:** `OPEN / POST_HANDOFF_RESOLVABLE + INSTITUTIONAL_BLOCKER`.
- **blocked_items:** canonical organizational taxonomy, real Domain Evolution Plans, ownership transfer/change, domain-specific automation approval and authoritative Domain Workspace catalog.

## Prioridad de recuperación para Seed Acceptance

La prioridad reconciliada por P-SEED-ACCEPT-01, sin cambiar el estado de ningún SER, es:

1. **Realidad y verificación:** `SER-002 → SER-003 → SER-006`. Primero se identifica un commit real; después se contrasta el baseline original; sólo entonces se ejecutan build/tests/runtime reproducibles.
2. **Catálogos e integración de bootstrap:** `SER-005/004 → SER-009` después de localizar manifests/configuración en la fuente real.
3. **No-loss y autoridad:** `SER-001/012 → SER-011 → SER-007/014`.
4. **Arquitectura diferida:** `SER-010 → SER-008`; Planning/Sprint y Graph no se congelan antes de recuperar sus fuentes.
5. **Staging/transport:** `SER-013` puede resolverse en paralelo; habilita sync/clone validation, pero no sustituye `SER-002` ni autoriza publicación.

`SER-002` es la primera fuente habilitadora: permite completar el mapa real del repositorio y localizar code/config/schemas/tests/manifests. `SER-003` impide tratar el baseline derivado como el reporte original. `SER-006` es indispensable antes de elevar build, tests o runtime a `VERIFIED`.

El orden puede cambiar por disponibilidad, pero ningún request cerrado por inferencia se marca `SATISFIED`.

Oleada 3E conserva `SER-001..012 OPEN`; `SER-013` queda `PARTIALLY_SATISFIED` sólo por identidad/acceso observable y añade `SER-014 OPEN` para autoridad/capabilities organizacionales. El staging público no reduce la prioridad del implementation repository, runtime, Tool/Skill catalogs, test evidence ni No-Loss sources.

## Final handoff classification — P-SEED-CLOSE-01

Open SERs are no longer treated as an undifferentiated handoff block. `SER-002/003/006` are `EXPLICITLY_DEFERRED_TO_DEVIN_BOOTSTRAP` through three machine-readable receipts and remain build/current-state blockers. `SER-009` blocks clean-session execution evidence, not delivery of the executable acceptance contract. `SER-001/011/012` limit absolute historical/project-wide completeness while the observed-corpus No-Loss claim remains sufficient for handoff. Institutional SERs continue to block only claims/actions that require their sources or authority.

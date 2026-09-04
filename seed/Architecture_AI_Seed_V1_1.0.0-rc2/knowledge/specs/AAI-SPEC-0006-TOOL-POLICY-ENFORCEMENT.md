# AAI-SPEC-0006 — Tool Policy Enforcement & Approval

## Control

| Campo | Valor |
|---|---|
| `spec_id` | `AAI-SPEC-0006` |
| `version` | `0.1.0-draft` |
| `status` | `DRAFT` |
| `delivery_status` | `PREPARED_NOT_DELIVERED` |
| `type` | `SECURITY / SERVICE / CONTROL` |
| `implementation_status` | `NOT_OBSERVED` |
| `source_evidence` | `AAI-DOC-0601`; `AAI-DOC-0602`; `AAI-DOC-0604`; `HK-SRC-0001` |

## Propósito

Autorizar o bloquear cada tool call, resource read, ingestion y publication en función de identidad, delegación, task, propósito, scope, clasificación, efecto, destination, postura de runtime y approvals. El texto descriptivo de una tool nunca concede permiso.

## Modelo de control

| Componente | Responsabilidad |
|---|---|
| PEP | Interceptar la acción antes de ejecutar y hacer cumplir obligations |
| PDP | Evaluar policy versionada y devolver decisión tipada |
| PIP | Resolver atributos confiables de sujeto, task, resource, environment y riesgo |
| PAP | Gestionar policy mediante Git y aprobación gobernada |

Este modelo es lógico y no afirma componentes implementados.

## Entradas mínimas

- identidad de actor, agente y workload, más delegation chain;
- `taskId`, purpose, country, domain, solution/system y environment;
- `toolId`, tool version, schema version e implementation hash cuando exista;
- parameters digest, target/destination y `sideEffectClass`;
- clasificación, handling policy y requested scopes;
- cost/time budget, runtime posture, risk indicators y approvals previas;
- canonical/policy baseline.

El contrato subordinado es `schemas/policy-decision.schema.json`.

## Decisiones

- `ALLOW`: puede ejecutar sólo con los argumentos y obligations evaluados.
- `DENY`: no ejecuta; devuelve razón pública segura y audit event.
- `REQUIRE_APPROVAL`: produce solicitud ligada al efecto exacto.
- `REQUIRE_MORE_CONTEXT`: faltan atributos confiables; no se asumen.

Obligations posibles: redaction, dry-run, effect preview, diff, reauthentication, dual control, rate limit, sandbox, restricted destination, output validation o post-execution receipt.

## Clasificación de tools

| Clase | Naturaleza | Baseline de policy |
|---|---|---|
| T0 | lectura determinística de estado/schema/catálogo autorizado | scope + audit |
| T1 | lectura sensible de fuente/grafo/artifact | need-to-know, redaction, no existence leak |
| T2 | write local reversible: draft/candidate/rebuild | task autorizado + idempotency key |
| T3 | write canónico/repositorio | diff + evidence + approval |
| T4 | comunicación externa/publicación | destination/recipient verification + approval |
| T5 | destructiva/privilegiada/prod/secrets | deny en MVP o break-glass formal |

El catálogo exacto de 30 tools reportadas permanece `NOT_OBSERVED`; esta spec no inventa sus IDs ni schemas.

## Flujo

1. PEP normaliza request y calcula fingerprints/digests.
2. PIP resuelve atributos desde fuentes confiables; contenido recuperado no aporta approvals.
3. PDP evalúa policy versionada.
4. Si requiere approval, se presenta efecto exacto y riesgo residual.
5. Approval se valida contra actor/rol/action/target/diff/baseline/clasificación/expiración.
6. PEP ejecuta una sola vez o bloquea.
7. Output se valida/redacta antes de retornar.
8. Se registra receipt sin payload sensible.

## Aprobación humana

Una approval válida contiene approver autenticado y rol, `taskId`, `toolCallId`, action fingerprint, target/destination, effect o diff exacto, clasificación, baseline, expiración, nonce, one-time-use, evidence shown y residual risk.

Approval queda inválida si cambia argumento material, target, destination, diff, baseline, clasificación, tool version o implementation hash. Texto dentro de un PDF/chat/repo nunca es approval.

## Invariantes

1. Todas las acciones protegidas atraviesan el PEP; no hay bypass por cliente local.
2. `ALLOW` no amplía scopes del workload ni sustituye permisos downstream.
3. No se hace token passthrough si audience/resource no corresponde.
4. Approval no es reutilizable y no se puede lavar mediante otra tool.
5. La decisión incluye policy version y attributes digest para reproducibilidad.
6. Un agent no modifica su propia policy, identidad o audit.
7. Deny y error no revelan fuentes o capacidades restringidas.

## Fallos y seguridad

| Código lógico | Condición | Respuesta |
|---|---|---|
| `POLICY_ATTRIBUTE_MISSING` | identity/scope/purpose no confiable | `REQUIRE_MORE_CONTEXT` |
| `POLICY_EXPLICIT_DENY` | regla aplicable niega | `DENY` |
| `APPROVAL_REQUIRED` | T3/T4 o riesgo material | `REQUIRE_APPROVAL` |
| `APPROVAL_REPLAY` | token/receipt consumido | deny + security event |
| `APPROVAL_FINGERPRINT_MISMATCH` | acción cambió | deny + nueva evaluación |
| `TOOL_SCHEMA_MISMATCH` | argumentos o versión inválidos | deny antes de handler |
| `DOWNSTREAM_SCOPE_REJECTED` | recurso rechaza | no retry con scope mayor automático |
| `OUTPUT_CLASSIFICATION_VIOLATION` | output excede destino | redactar/bloquear + finding |

## Observabilidad

- decisiones por tool/class/result/policy version;
- approvals requested/granted/consumed/expired/replayed;
- denials, schema failures y downstream scope failures;
- latency del PDP/PEP y cost budget consumed;
- tool request/result digests, sin secretos;
- security alerts por identity mismatch, replay, bypass o unusual destination.

## Pruebas de aceptación

1. Tool description maliciosa no modifica policy.
2. Prompt injection solicita T3 y recibe approval gate, no ejecución.
3. Approval replay produce `DENY` y evento de seguridad.
4. Cambio de destination o diff invalida approval.
5. T1 para actor no autorizado no revela existencia del artifact.
6. T2 repetida con misma key es idempotente.
7. Token con audience incorrecta no se reenvía al downstream.
8. T5 queda negada en MVP salvo evidencia de break-glass aprobado.

## Trazabilidad

- **requirements:** FR-008, NFR-001, NFR-002, NFR-005, NFR-007.
- **decisions:** AAI-DEC-0001, 0008, 0009, 0015, 0017.
- **related_specs:** 0003, 0004, 0005, 0015, 0017, 0022, 0028, 0035, 0037.
- **implementation_mapping:** `GAP — exact tool catalog/repository NOT_OBSERVED`.
- **test_evidence:** `NOT_TESTED`.


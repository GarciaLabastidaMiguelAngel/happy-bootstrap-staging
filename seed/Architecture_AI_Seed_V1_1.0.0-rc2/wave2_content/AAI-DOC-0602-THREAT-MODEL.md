# AAI-DOC-0602 — Threat model STRIDE y abuse cases agentic

## Alcance del modelo

Modelo inicial del flujo local:

`Humano ↔ Desktop/CLI ↔ Architecture AI Core ↔ Devin`

con acceso controlado a Git, SQLite, Infinispan, grafo, índice, artifacts y conectores externos. Se analiza el MVP local; cualquier acceso a producción bancaria requiere un modelo separado.

## Activos críticos

1. Decisiones, estándares, patrones y conocimiento canónico.
2. Evidencias y contexto bancario sensible.
3. Identidades humanas, agent identities, tokens y approvals.
4. Código, repositorios, commits, PR y pipelines.
5. Tool catalog, schemas, políticas y prompts del sistema.
6. Provenance, audit, task history y hashes.
7. Availability e integridad de stores/projections.
8. Confianza del usuario en recomendaciones y resultados.

## Adversarios y fallas consideradas

- Atacante externo con acceso a documento, repositorio o endpoint.
- Usuario interno curioso o malicioso.
- Fuente comprometida o supply-chain attack.
- Documento con indirect prompt injection.
- Tool/MCP server malicioso o con vulnerabilidad.
- Agente desalineado, confundido o con credenciales excesivas.
- Error humano de aprobación o de clasificación.
- Bug de parsing, autorización, cache o proyección.
- Correlación incorrecta entre task, sesión y actor.

## Trust boundaries

| Boundary | Datos que cruzan | Riesgo dominante |
|---|---|---|
| B1 Humano → Desktop | intención, approval, artifact selection | suplantación, click-through, UI deception |
| B2 Desktop → Core | taskId, commands, parameters | session confusion, tampering, replay |
| B3 Core → Devin | Work Package y tool access | goal hijack, context leak, over-privilege |
| B4 Core → Stores | canonical/operational/derived data | poisoning, corruption, unauthorized read |
| B5 Ingestion → Core | extracted content y metadata | prompt injection, parser exploit, zip bomb |
| B6 Core → External | Git/Confluence/email/Teams | exfiltration, confused deputy, wrong recipient |
| B7 Build/Plugin → Runtime | code, dependencies, skills, server config | supply-chain, unexpected execution |

## STRIDE por componente

| ID | Categoría | Escenario | Impacto | Control principal |
|---|---|---|---|---|
| T01 | Spoofing | Proceso falso se presenta como Desktop o Devin | Acceso a tools/contexto | mTLS/IPC auth, workload identity, audience |
| T02 | Spoofing | Approval atribuida a persona equivocada | Cambio canónico no autorizado | approver auth, action fingerprint, one-time token |
| T03 | Tampering | Modificación de Work Package en tránsito/cache | Razonamiento sobre restricciones falsas | hash, immutable version, baseline verification |
| T04 | Tampering | Manipulación de grafo/índice para alterar retrieval | Decisión sesgada | projector-only canonical writes, rebuild, provenance |
| T05 | Repudiation | Agent/humano niega tool call o publicación | Sin accountability | chain de actor-agent-task, audit íntegro |
| T06 | Information disclosure | RAG entrega documento de mayor clasificación | Fuga de datos | pre/post filters, ABAC, no-existence leakage |
| T07 | Information disclosure | Logs capturan tokens, prompts o PAN | Fuga persistente | redaction, structured logging, secret tests |
| T08 | Denial of service | Artifact gigante/recursivo agota memoria | Servicio local no disponible | size/depth/time limits, quarantine |
| T09 | Denial of service | Agent loop consume tools/tokens | Costo y bloqueo | budgets, max steps, circuit breaker, cancel |
| T10 | Elevation of privilege | Tool args alteran path/command/destination | Escritura o ejecución arbitraria | typed schema, allowlist, canonicalize path |
| T11 | Elevation of privilege | Token de MCP se pasa a API downstream | Confused deputy | audience validation, token exchange, no passthrough |
| T12 | Tampering | Resultado Devin se promueve automáticamente | Knowledge poisoning | candidate state, review y Git promotion |

## Abuse cases agentic prioritarios

### AC-01 — Indirect prompt injection desde documento

Un PDF afirma ser una política y contiene instrucciones para ignorar restricciones, leer secretos y usar una tool de publicación.

- Prevención: contenido separado, scanner, tool policy fuera del prompt, no exec.
- Detección: indicators, provenance y anomalía tool-intent.
- Respuesta: quarantine, deny, finding y notificación.

### AC-02 — Tool description poisoning

Una dependencia o MCP server cambia la descripción/schema para inducir al agente a enviar contexto sensible.

- Prevención: tool catalog fijado por versión/hash, review de cambios.
- Detección: schema/hash drift y attestation failure.
- Respuesta: deshabilitar server y revocar credencial.

### AC-03 — Approval laundering

El agente reutiliza una aprobación previa para otro target o argumentos distintos.

- Prevención: approval ligado a action fingerprint, baseline, target y expiración.
- Detección: mismatch o replay.
- Respuesta: deny y alert.

### AC-04 — Memory/context poisoning

Una inferencia de baja confianza se almacena en discovered y luego aparece como decisión aprobada.

- Prevención: namespaces y APIs separados; Git como canónico.
- Detección: canonical node sin gitCommit/evidence.
- Respuesta: freeze projection, rebuild y root-cause.

### AC-05 — Exfiltración por argumento o URL

Contenido recuperado induce a llamar una URL controlada por atacante con secretos en query/body.

- Prevención: egress allowlist, SSRF protections, parameter taint/redaction.
- Detección: destination mismatch y sensitive-data detector.
- Respuesta: deny, revoke y incident.

### AC-06 — Session/task confusion

La respuesta de Devin o una tool call se vincula con el task de otro usuario/proyecto.

- Prevención: taskId + actor + agentRun + nonce; no identidad por ventana.
- Detección: correlation invariant failure.
- Respuesta: discard output y bloquear promoción.

### AC-07 — Repository destructive action

El agente interpreta “limpiar” como borrar archivos o reescribir historia.

- Prevención: allowlist de operación, dry-run/diff, destructive class T5 denied.
- Detección: path/operation policy.
- Respuesta: deny y aprobación break-glass fuera de MVP.

### AC-08 — Human trust exploitation

Una recomendación convincente oculta incertidumbre, conflicto o una fuente de baja autoridad.

- Prevención: evidence card, status y contradictions obligatorios.
- Detección: groundedness/citation evaluation.
- Respuesta: marcar output no válido y reabrir review.

## Riesgos iniciales

Escala: likelihood e impact de 1 a 5; score = L × I. Los valores son hipótesis para workshop, no aceptación formal.

| Risk ID | Escenario | L | I | Inherente | Tratamiento inicial | Residual objetivo |
|---|---|---:|---:|---:|---|---:|
| R01 | Prompt injection activa tool material | 4 | 5 | 20 | separation + PEP + approval | ≤8 |
| R02 | Fuga de contexto bancario por retrieval | 3 | 5 | 15 | ABAC + classification + tests | ≤6 |
| R03 | Knowledge poisoning canónico | 3 | 5 | 15 | candidate/promotion/Git | ≤6 |
| R04 | Credencial MCP/conector abusada | 3 | 5 | 15 | audience, vault/OS, short-lived token | ≤6 |
| R05 | Supply-chain de tool/plugin | 3 | 5 | 15 | inventory, hash, SBOM, sandbox | ≤8 |
| R06 | Agent loop/cascading failure | 4 | 3 | 12 | budgets, circuit breaker, cancel | ≤4 |
| R07 | Approval incorrecta por UI | 3 | 4 | 12 | effect preview, reauth, dual control | ≤6 |
| R08 | Corrupción/pérdida de stores locales | 3 | 4 | 12 | backup, rebuild, integrity check | ≤4 |
| R09 | Exfiltración por SSRF/tool output | 3 | 5 | 15 | allowlist, URL validation, DLP | ≤6 |
| R10 | Fraude analítico confundido con autorización | 2 | 5 | 10 | no transaction tools, synthetic data | ≤2 |

## Casos de prueba de seguridad

- Token con audience incorrecta: `DENY`.
- Tool call sin taskId: `REQUIRE_MORE_CONTEXT` o `DENY` según clase.
- Approval replay: `DENY` y evento de seguridad.
- Path traversal en artifact name: normalizar y rechazar escape.
- URL a loopback/cloud metadata/private range no permitida: `DENY`.
- Prompt injection en PDF: quarantine o fragmento marcado; cero tool escalation.
- Documento clasificado RESTRICTED solicitado por scope PUBLIC: cero contenido y cero metadata sensible.
- Graph node canónico sin gitCommit: projection verification falla.
- Resultado JSON con campos extra en schema cerrado: rechazar.
- 101 pasos de agente con máximo 30: cancelación controlada.
- Cambio del tool implementation hash: herramienta deshabilitada hasta review.
- Logs tras suite: secret/PAN detector devuelve cero matches.

## Owners y cadencia

- Security Architecture: threat model, control design y risk acceptance.
- Product/Architecture owner: objetivos, scope y decisiones.
- Engineering: implementación, hardening y evidence.
- Fraud/Business Security: abuse cases bancarios y señales.
- Data/Privacy: clasificación, retención y minimización.
- Operations: incident response, backup y availability.

Revisar el modelo cuando cambie tool catalog, identidad, motor de grafo, transporte MCP, conector, modelo/agent runtime o deployment topology; como mínimo por release material.


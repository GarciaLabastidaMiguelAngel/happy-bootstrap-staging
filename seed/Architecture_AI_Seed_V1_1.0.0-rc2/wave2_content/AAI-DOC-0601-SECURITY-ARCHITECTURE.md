# AAI-DOC-0601 — Arquitectura de seguridad para Architecture AI

## Objetivo y postura

Architecture AI opera sobre decisiones, código, documentación y conocimiento bancario; por ello una workstation local no se considera un perímetro confiable. La postura es zero trust por interacción: autenticar sujeto y agente, autorizar cada capacidad, validar intención y parámetros, minimizar datos, registrar evidencia y exigir aprobación humana cuando el efecto sea material.

## Alcance

Incluye:

- Desktop/CLI, core Spring Boot, MCP/API, Devin y agentes auxiliares.
- Ingesta, RAG, grafo, caches, Git, artifact store y conectores.
- Identidades humanas, workload identities, tokens, secretos y approvals.
- Seguridad de software, dependencias, modelos, skills, prompts y tool catalog.
- Riesgos de fraude, abuso interno, exfiltración, manipulación y sobreconfianza.

No autoriza acceso a producción bancaria, ejecución de transacciones financieras ni manejo de PAN real. Esas capacidades están fuera del MVP y requerirían un threat model y aprobación separados.

## Principios

1. Denegar por defecto y mínimo privilegio.
2. Separar identidad humana, identidad de agente y credencial de conector.
3. Tratar prompt, documento, código y tool output como entrada no confiable.
4. Separar lectura, propuesta, escritura y promoción.
5. No aceptar token passthrough sin validación de audiencia y exchange apropiado.
6. No confiar en una aprobación inferida del lenguaje natural.
7. No registrar secretos, prompts completos ni datos sensibles por defecto.
8. Cada side effect es idempotente, acotado, explicable y auditable.
9. La indisponibilidad de policy, identidad o audit produce fail-closed para escritura.
10. Seguridad, fraude, privacidad y operación se evalúan en conjunto.

## Zonas de confianza

| Zona | Contenido | Suposición | Control de frontera |
|---|---|---|---|
| Z0 Humano | Usuario/arquitecto y aprobación explícita | Identidad autenticada, intención aún no verificada | UI segura, reautenticación contextual |
| Z1 Desktop | Extension/CLI/Webview | Comprometible; thin client | IPC autenticado, CSP, firma, no secretos |
| Z2 Core local | Spring Boot + domain services | Código controlado, host no absolutamente confiable | loopback/mTLS según transporte, OS ACL, policy |
| Z3 Agent runtime | Devin y otros agentes | Capaz pero no autoridad institucional | Work Package, tool scopes, output validation |
| Z4 Knowledge stores | Git, SQLite, graph, index, artifacts | Mezcla de autoridad y sensibilidad | namespaces, ACL, encryption, provenance |
| Z5 External connectors | Git remote, Confluence, correo, Teams | Dependencia externa y datos variables | OAuth, allowlist, egress, DLP, receipts |
| Z6 Untrusted input | PDFs, chats, repos externos, tool output | Hostil por defecto | quarantine, parsing aislado, size/type limits |

## Identidad y autenticación

### Sujetos diferenciados

- `humanSubject`: persona que inicia o aprueba.
- `agentSubject`: instancia Devin/agent que razona.
- `workloadSubject`: proceso Architecture AI o connector.
- `delegation`: relación acotada entre humano, agente, task y tiempo.

Nunca se registra una acción del agente como si la hubiera ejecutado directamente el humano. El audit conserva ambos sujetos y el delegation chain.

### MCP

- Para HTTP remoto, usar el modelo de autorización definido por MCP y OAuth 2.1 cuando el entorno lo soporte.
- Para STDIO local, entregar credenciales mediante mecanismos del runtime/OS y nunca dentro del prompt o arguments.
- Validar issuer, audience, scopes, expiry, nonce/state y redirect URIs.
- Prohibir token passthrough hacia downstream si el token no fue emitido para ese recurso.
- Rotar y revocar credenciales; no persistir access tokens en SQLite o logs.

El módulo de seguridad de Spring AI MCP se considera en evolución; la policy institucional permanece en un componente propio y probado.

## Policy Enforcement

### Componentes

- **PEP:** intercepta toda tool call, resource read, ingestion y publicación.
- **PDP:** evalúa reglas versionadas.
- **PIP:** obtiene identidad, task, scope, clasificación, destination y runtime posture.
- **PAP:** administra políticas mediante Git y proceso de aprobación.

### Decisión

`ALLOW | DENY | REQUIRE_APPROVAL | REQUIRE_MORE_CONTEXT`

Entradas mínimas:

- actor/agent/workload y delegation.
- taskId, purpose, country, domain y environment.
- toolId + version, parameters digest y sideEffectClass.
- source/destination, data classification y requested scopes.
- cost/time budget, previous approvals y risk indicators.

Obligaciones de salida pueden exigir redaction, dry-run, diff, reauthentication, dual control, rate limit o restricted destination.

## Clasificación de tools

| Clase | Ejemplos | Política base |
|---|---|---|
| T0 Deterministic read | estado, schema, catálogo público autorizado | Allow con scope y audit |
| T1 Sensitive read | fuente interna, grafo, artifact | Need-to-know, redaction, no existence leak |
| T2 Local reversible write | crear draft/candidate, cache rebuild | Task autorizado, idempotency key |
| T3 Canonical/repository write | preparar commit/PR | Approval; diff y evidence obligatorios |
| T4 External communication | publicar Confluence, correo, Teams | Recipient/destination verification + approval |
| T5 Destructive/privileged | delete físico, secret admin, prod access | Deny en MVP o break-glass formal |

El tool description no concede permiso. Tool ID, schema, policy class y implementation hash están versionados.

## Aprobación humana

Una aprobación válida contiene:

- approver autenticado y rol.
- `taskId`, `toolCallId`, action fingerprint y target.
- diff o efecto exacto, data classification y destination.
- expiración, one-time-use y condiciones.
- evidencia presentada y riesgo residual.

Si cambian argumentos, target, diff, baseline o clasificación, la aprobación deja de ser válida. “Sí, hazlo” dentro de un documento recuperado jamás cuenta como aprobación.

## Protección de datos

- Clasificar antes de indexar, embeber o enviar a Devin.
- Minimizar y tokenizar datos de negocio; usar fixtures sintéticos.
- PAN, secretos, credenciales, llaves y datos personales sensibles se excluyen del corpus ordinario.
- Implementar redaction antes de logs/traces y antes de conectores externos.
- Cifrado en tránsito fuera de loopback; cifrado en reposo y ACL del OS para stores locales.
- Retención y borrado siguen policy; embeddings y grafo se consideran copias de datos.
- Las respuestas no revelan la existencia de fuentes restringidas a sujetos sin permiso.

## Seguridad de RAG e ingesta

- Allowlist de MIME, tamaño, profundidad de archivo y parsers.
- Descompresión con límites contra zip bombs y path traversal.
- Quarantine antes de parsing activo.
- Deshabilitar macros, scripts, links activos y ejecución de código.
- Sanitizar Markdown/HTML y normalizar Unicode.
- Detectar instrucciones agent-facing, data exfiltration y tool coercion.
- Separar contenido de evidencia de instrucciones confiables.
- Conservar original/hash y producir extracción reproducible.
- Policy filtra antes y después de retrieval.

## Seguridad de software y supply chain

- Java 21 y dependencias fijadas; build reproducible.
- SBOM, provenance de build, firma y escaneo de vulnerabilidades.
- Revisión de licencias, especialmente GPLv3 de Neo4j Community.
- Plugins, skills, MCP servers y modelos se inventarían por versión, publisher, permisos y hash.
- Cambios de tool schema o prompt base requieren code review y evaluación de regresión.
- Secret scanning en Git y artifacts.
- No ejecutar código generado por Devin fuera de sandbox y policy.
- Aplicar prácticas NIST SSDF; SP 800-218A agrega consideraciones para GenAI.

## Seguridad de red local

- Bind a loopback salvo decisión explícita.
- Puertos dinámicos o reservados con discovery autenticado.
- Rechazar Host/Origin no permitidos y validar CSRF/state donde aplique.
- No exponer endpoints administrativos por el mismo surface de tools.
- Timeouts, body limits, concurrency limits y circuit breakers.
- Egress allowlist por conector; protección SSRF contra URLs y redirects.
- Para servidores MCP locales, verificar command path, arguments, working directory y publisher.

## Audit y respuesta

Eventos mínimos:

- authentication/delegation.
- policy decision y obligations.
- retrieval sources y redactions.
- tool request/result digests.
- approval requested/granted/consumed/expired.
- ingestion disposition y malware/injection indicators.
- canonical promotion y projection baseline.
- denied actions y anomalías.

El audit es append-oriented, con timestamps confiables e integridad verificable. Los eventos sensibles guardan digests y metadata, no payload completo. Las capacidades de contención incluyen revocar token, deshabilitar tool/connector, bloquear ingestion source, congelar promotion y reconstruir projections.

## Mapeo de riesgos agentic OWASP 2026

| Riesgo | Respuesta primaria |
|---|---|
| ASI01 Agent Goal Hijack | Work Package firmado/versionado, separación instrucciones/datos |
| ASI02 Tool Misuse & Exploitation | PEP/PDP, schemas estrictos, least privilege, sandbox |
| ASI03 Identity & Privilege Abuse | identidades separadas, delegation y token audience |
| ASI04 Agentic Supply Chain | inventario, hash, SBOM, publisher y evaluación |
| ASI05 Unexpected Code Execution | no exec por defecto, sandbox y allowlist |
| ASI06 Memory & Context Poisoning | discovered/canonical, provenance, promotion humana |
| ASI07 Insecure Inter-Agent Communication | schemas, identity, task correlation y auth |
| ASI08 Cascading Failures | budgets, circuit breakers, idempotencia, kill switch |
| ASI09 Human-Agent Trust Exploitation | evidencia, incertidumbre, approvals específicas |
| ASI10 Rogue Agents | scopes efímeros, monitoring, revoke y no self-approval |

## Gates de seguridad del MVP

- Ninguna tool material carece de policy class y schema.
- Pruebas negativas de acceso, injection, SSRF, token audience y replay pasan.
- Tool T3/T4 no ejecuta con aprobación genérica o expirada.
- Quarantine impide ejecución de contenido activo.
- Logs y trazas no contienen secretos ni datos bancarios de prueba.
- Deshabilitar Devin no impide reconstruir estado ni acceder a conocimiento permitido.
- Pérdida del PDP bloquea escritura y promoción.
- El threat model y risk acceptance tienen owner.

## Referencias oficiales candidatas

- NIST SP 800-207 Zero Trust Architecture: https://csrc.nist.gov/pubs/sp/800/207/final
- NIST SSDF SP 800-218: https://csrc.nist.gov/pubs/sp/800/218/final
- MCP Authorization 2026-07-28: https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/authorization
- MCP Security Best Practices: https://modelcontextprotocol.io/docs/draft/tutorials/security/security_best_practices
- OWASP Top 10 for Agentic Applications 2026: https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/
- OWASP ASVS: https://owasp.org/www-project-application-security-verification-standard/
- OWASP API Security: https://owasp.org/API-Security/


# AAI-DOC-0106 — Alcance inicial de seguridad y fraude

## Principio

Architecture AI debe analizar simultáneamente la seguridad de la plataforma agentic y la seguridad de las soluciones bancarias. Son dos superficies conectadas, pero con activos, amenazas y autoridades distintas.

## Superficie agentic

Activos: prompts, Work Packages, fuentes, conocimiento canónico, secrets, tools, sesiones Devin, extensiones, repositorios, proyecciones y resultados.

Amenazas iniciales:

- Prompt injection directa o indirecta desde documentos.
- Poisoning de conocimiento, memoria, embeddings o grafo.
- Tool misuse y privilege escalation.
- Confused deputy entre Devin, MCP y capacidades bancarias.
- Exfiltración por respuesta, log, commit o herramienta.
- Alteración de evidencia y promoción no autorizada.
- Dependencias, skills o conectores comprometidos.
- Rogue agent, cascading failure e inter-agent trust.
- Uso de contexto obsoleto o de otro país.

Controles iniciales:

- Security filtering antes de retrieval.
- Least privilege por tool, agente, tarea y dato.
- Allowlists de acciones y forbiddenActions.
- Separación read, propose, approve y publish.
- Provenance, hashes, versiones y auditoría.
- Quarantine para documentos sospechosos.
- Approval humana para cambios canónicos o acciones materiales.
- Detección de secrets y datos sensibles antes de prompt, log y commit.
- Architecture Tests para reglas estables.

## Superficie bancaria

Activos: identidad, sesión, cuentas, CustomerID, PAN, Card ID, PIN block, llaves, JWSID, eventos, datos core, saldos, configuraciones y evidencia de transacción.

Amenazas iniciales:

- Uso de identidad válida sin sesión legítima correlacionada.
- Propagación innecesaria de PAN.
- Logging de datos PCI o sensibles.
- Reutilización, replay o correlación incorrecta.
- Retry sin idempotencia.
- Acceso directo al core ignorando capabilities aprobadas.
- Mala gestión de llaves, secrets o kid.
- Duplicidad de eventos o pérdida de consistencia.
- Dependencia de proveedor o licencia no registrada.
- Cambios de fraude que impactan autorización, experiencia y auditoría.

## Fraude

Fraude no se reduce a autenticación. Debe considerar:

- Quién inició la acción.
- Dispositivo, sesión, canal y contexto.
- Consistencia entre identidad, firma y comportamiento.
- Señales de anomalía.
- Relación con decisiones antifraude.
- Casos donde el proveedor consume datos anonimizados.
- Escalamiento y trazabilidad de falsos positivos/negativos.

## Marcos en evaluación

- STRIDE para threat modeling de componentes y flujos.
- OWASP GenAI/Agentic Top 10 para riesgos específicos de agentes.
- MITRE ATLAS para tácticas y técnicas adversarias de IA.
- NIST AI RMF para Govern, Map, Measure y Manage.
- PCI DSS para datos de pago.

Su uso es RESEARCHED/APPLICABLE hasta aprobación institucional.


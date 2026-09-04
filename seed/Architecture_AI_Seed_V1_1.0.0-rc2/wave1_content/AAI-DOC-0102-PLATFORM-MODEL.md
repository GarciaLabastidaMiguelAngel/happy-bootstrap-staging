# AAI-DOC-0102 — Modelo de plataformas y ámbitos

## Tres planos

### Plano 1 — Agentic Runtime

Devin Desktop es el harness principal. Planifica, investiga, razona, modifica repositorios y utiliza tools y skills. Managed Devins, Dynamic Workflows, APIs de sesión, automations y notificaciones sólo se utilizarán cuando su disponibilidad corporativa esté verificada.

### Plano 2 — Architecture AI

Es el control institucional. Contiene reglas, conocimiento, contexto, decisiones, riesgos, proyecciones, tareas, evidencia y capacidades determinísticas. Expone tools institucionales por MCP y API. La misma capacidad debe implementarse una sola vez y ser consumible por Desktop, Scheduler, Devin o una micro-capability Spring AI.

### Plano 3 — Banking Platform Context

Representa las capacidades, plataformas, sistemas, restricciones, estándares, patrones, riesgos y soluciones del banco. No ejecuta inteligencia agentic. Es el dominio gobernado que Architecture AI entrega como contexto a Devin.

## Plataforma frente a solución

Una plataforma ofrece capacidades reutilizables, límites operativos, contratos, ownership, dependencias, licencias y restricciones. Una solución combina capacidades para cumplir un objetivo particular y registra su AS-IS, target, delta, impactos, decisiones, riesgos y evidencia.

El mismo elemento puede ser plataforma para un consumidor y solución desde la perspectiva de su equipo propietario. Architecture AI debe registrar la perspectiva explícitamente.

## Modelo global y por país

La plataforma Architecture AI puede ser global y compartida. Banking Platform Context es country-scoped.

Cada país debe separar:

- Regulación y autoridad aplicable.
- Políticas e interpretaciones corporativas locales.
- Infraestructura y regiones.
- Proveedores, licencias y límites contractuales.
- Catálogos de capacidades.
- Datos y clasificación.
- Ownership y equipos.
- Estado actual, objetivo e historial.

Los artefactos globales pueden definir esquemas, controles mínimos y taxonomías. No pueden sobrescribir una decisión local sin proceso de gobierno.

## Git y proyecciones

Git conserva conocimiento aprobado, versionable y compartible: ADR, estándares, patrones, soluciones, diseños técnicos, modelos, manifests, tests, skills y fuentes de diagramas.

Infinispan conserva una proyección operacional local: landscape, soluciones, organización, expertise, riesgos, tareas, evaluaciones, contexto, scheduler y estado de publicación. Debe poder reconstruirse desde Git y fuentes gobernadas.

## Desktop

La extensión de Devin Desktop será thin client. Puede mostrar My Work, Questions, Risks, Solutions, Knowledge, Projection y Architecture Health; emitir comandos, badges y notificaciones; abrir artefactos y transferir Task IDs. No contendrá lógica de Risk, Knowledge, Context, Governance, Projection, Evaluation o Scheduler.

Debe validarse mediante SPIKE: sidebar, TreeView, Webview, StatusBar, commands, notifications, comunicación HTTP/SSE/WebSocket, URI handlers y handoff hacia Devin.


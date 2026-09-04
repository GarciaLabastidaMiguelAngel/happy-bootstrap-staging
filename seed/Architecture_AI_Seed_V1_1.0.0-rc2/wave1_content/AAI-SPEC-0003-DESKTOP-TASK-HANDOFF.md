# AAI-SPEC-0003 — Desktop Task Handoff

## Objetivo

Validar y, sólo si es viable, implementar una integración thin client en Devin Desktop que muestre estado institucional y transfiera tareas complejas a Devin mediante taskId.

## SPIKE obligatorio

- Detectar mecanismo de extensión compatible.
- Crear Architecture AI sidebar.
- Mostrar estado de Spring Boot y Projection Manager.
- Recibir un Domain Event por HTTP, SSE o WebSocket.
- Mostrar una Task con severidad y owner.
- Ejecutar una acción determinística simple.
- Transferir taskId hacia Devin.
- Correlacionar la tarea con una sesión cuando la API real lo permita.
- Verificar política corporativa de instalación, firma y publicación.

## Handoff

El usuario selecciona Work in Devin para TASK-0182. Devin solicita getTask(TASK-0182). Architecture AI devuelve Architecture Work Package. No se solicita nuevamente al usuario contexto ya conocido.

## UI mínima

- Projection status.
- Git baseline status.
- My Work.
- Questions.
- Risks.
- Chief Decisions.
- Knowledge Gaps.

## Restricciones

- Sin lógica de dominio en la extensión.
- Sin reasoning dentro de Webview.
- Sin mensajes agentic para awareness ordinario.
- Sin asumir compatibilidad total con VS Code/Windsurf.
- Sin implementar todas las views antes del SPIKE.

## Aceptación

- Handoff reproducible con taskId.
- La extensión puede reiniciarse sin perder estado durable.
- La lógica permanece en Spring Boot.
- La ausencia de API Devin se registra como capability gap, no se oculta con automatización frágil.


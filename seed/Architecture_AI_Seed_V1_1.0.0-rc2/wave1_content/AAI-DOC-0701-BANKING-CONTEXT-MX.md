# AAI-DOC-0701 — Contexto bootstrap de plataforma bancaria México

## Propósito

Proporcionar a Devin un contexto bancario inicial para razonar sin inventar capacidades. Este contexto describe hechos y patrones conversados; debe enriquecerse con evidencia institucional y dueños.

## Gobierno arquitectónico

El Arquitecto de Soluciones evalúa cambios end-to-end: aplicación, integración, datos, seguridad, infraestructura, despliegue, capacidad, conectividad y dependencias. Las decisiones materiales y aceptación de riesgos corresponden a las autoridades definidas, incluyendo Chief Architect y Seguridad/CISO.

La arquitectura debe buscar primero una capability corporativa, patrón aprobado, solución de referencia, ADR o capacidad oficial del proveedor antes de crear una solución nueva.

## Plataforma de ejecución

OpenShift aloja microservicios y capacidades transversales. Los pods típicamente escuchan en 8080 dentro del cluster; el tráfico externo se protege en capas de gateway. Namespaces, clusters, rutas, secrets, auditoría y acceso DevOps forman parte del análisis.

Las capacidades con licencia deben declarar ubicación y restricciones. Por ejemplo, Nginx Plus sólo puede ejecutarse en nodos licenciados cuando ese modelo aplique, usando labels/affinity y evidencia de runtime.

## Acceso al core

Gravity Plus es una familia de APIs para acceso al core bancario y se publica mediante IBM API Connect. Las soluciones consumidoras no deben acceder directamente a Oracle Exadata cuando la capability aprobada es Gravity Plus.

GLUON y Gravity Plus deben tratarse según el catálogo institucional real; no se asumirán como componentes distintos o equivalentes sin evidencia específica del contexto.

## Seguridad transversal

- Token Opaco transporta información segura entre sistemas, principalmente web.
- Anonymizer/Deanonymizer recibe objetos, detecta PAN y devuelve Card ID; se expone como capacidad transversal mediante gateway.
- Card Security y Card JWKS protegen flujos de tarjeta.
- Cipher Service centraliza operaciones criptográficas y puede trabajar con pares efímeros, kid, JWE y firma JWSID.
- PKM administra o publica llaves públicas; llaves privadas permanecen en Secrets de OpenShift.
- JWSID aporta firma, scope y trazabilidad, pero no sustituye la sesión aplicativa del canal.

Existe un riesgo relevante: malware o un cliente comprometido puede invocar APIs con identidad válida sin correlación con un login legítimo. Deben evaluarse correlación de sesión, señales de fraude, binding contextual, auditoría y controles compensatorios.

## Integración y datos

- Kafka soporta eventos y desacoplamiento.
- IBM MQ soporta mensajería transaccional e integración con plataformas existentes.
- Redis puede emplearse para caché, correlación, Streams, JSON o locks según solución, pero no se asume como capability universal.
- Oracle y Exadata alojan datos transaccionales/core en contextos específicos.
- File Share/SFTP soporta procesos masivos cuando el patrón institucional lo requiera.
- Inbox/Outbox, idempotencia, reconciliación y temporalidad deben ser explícitos.

## Ejemplos de soluciones

### StarPass

StarPass Core atiende capacidades online y expone APIs para canales como OneApp y Space. StarPass Local atiende procesos asíncronos, sagas, cobros, archivos y notificaciones. Ambos consumen acceso core mediante Gravity Plus. Kafka conecta Core y Local; Oracle local conserva estado, Inbox/Outbox, idempotencia y trazabilidad.

Core propaga el JWSID recibido desde API Connect. Local genera JWSID propio. Las llaves privadas permanecen en OpenShift y PKM soporta validación de llaves públicas.

### DTO Middleware

Customer Position consolida información de cuentas, préstamos, inversiones, tarjetas y saldos por CustomerID. La estrategia discutida usa Redis JSON como L1 y Oracle Converged JSON como persistencia, con eventos/CDC y backpressure por customerId. Los balances no deben tratarse como caché ordinaria.

### Card Security / Change PIN

Una fachada coordina PLARD y Gravity. Cipher Service evita que la fachada procese PIN block en claro, realiza descifrado/cifrado y soporta pares efímeros. Gravity utiliza transacciones como LMPB/LMPC y el ruteo debe preservar trazabilidad.

### Gravity Plus / Exadata

La paginación para cuentas, tarjetas y movimientos utiliza cursor/keyset opaco. En tarjetas, el cursor puede contener Card ID; continuar la consulta puede requerir desanonimización controlada para obtener PAN sin exponerlo al consumidor.

### ISO 8583

Servicios de integración reciben tramas ISO 8583, enrutan por campos del mensaje y mantienen pools TCP por autorizador. El consumidor no debe decidir detalles HSM; el servicio infiere el tratamiento y usa Cipher Service para reencriptado de PIN block.

## Regla de uso

Devin debe distinguir capability corporativa, patrón aprobado, solución particular y ejemplo. Un ejemplo de StarPass no se convierte automáticamente en regla universal del banco.


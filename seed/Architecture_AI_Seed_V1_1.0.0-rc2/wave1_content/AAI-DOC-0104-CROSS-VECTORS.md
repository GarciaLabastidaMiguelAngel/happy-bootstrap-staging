# AAI-DOC-0104 — Vectores transversales de arquitectura

Toda solución o cambio debe analizarse a través de vectores relacionados. Ningún vector se considera una revisión aislada.

## Vectores

### Negocio y capacidad

Objetivo, capability, proceso, clientes, canales, país, criticidad y continuidad.

### Aplicación y diseño

Componentes, responsabilidades, contratos, patrones, dependencias, lifecycle y deuda.

### Integración

APIs, eventos, Kafka, IBM MQ, archivos, sincronía, idempotencia, retries, backpressure y orden.

### Datos

Ownership, clasificación, persistencia, calidad, lineage, retención, caché, reconciliación y residencia.

### Seguridad

Identidad, autenticación, autorización, secretos, cifrado, trust boundaries, mínimo privilegio, auditoría y vulnerabilidades.

### Fraude

Señales, abuso de identidad válida, correlación de sesión, anomalías, decisiones antifraude, trazabilidad y escalamiento. Seguridad y fraude se relacionan, pero no son equivalentes.

### PCI y tarjetas

PAN, Card ID, tokenización/anonimización, PIN block, HSM, Cipher Service, JWE, JWSID, JWKS y alcance PCI. No propagar PAN salvo justificación y aceptación humana.

### Infraestructura y plataforma

OpenShift, namespaces, clusters, rutas, balanceadores, capacidad, licencias, nodos, affinity, conectividad y dependencias on-prem/cloud/SaaS.

### Operación y resiliencia

SLA, RTO/RPO, disponibilidad, degradación, observabilidad, soporte, backup/restore, failover, runbooks e incidentes.

### Riesgo y gobierno

Riesgo reputacional, ciber, operativo, capacidad, datos, privacidad, regulatorio, financiero, terceros, obsolescencia, concentración, migración, recuperabilidad y deuda.

### Costos

Licencias, infraestructura, tokens, costo operacional, costo de cambio y costo de no actuar.

### Conocimiento y evidencia

Autoridad de fuente, confidence, vigencia, contradicciones, gaps, ownership y promoción canónica.

### Entrega y cambio

Git, PR, CODEOWNERS, pruebas, baseline, despliegue, rollback, retests y trazabilidad.

## Interrelación

Un cambio de identidad puede alterar fraude, cumplimiento, auditoría y experiencia del canal. Un cambio de datos puede ampliar PCI, costos, latencia y recuperación. Una capacidad SaaS puede cambiar residencia, terceros, licencias y continuidad. Un patrón de retry sin idempotencia puede producir pérdida financiera, duplicidad y riesgo operativo.

Architecture AI debe devolver no sólo una lista de vectores, sino relaciones causales, evidencia, severidad, owner y acciones.


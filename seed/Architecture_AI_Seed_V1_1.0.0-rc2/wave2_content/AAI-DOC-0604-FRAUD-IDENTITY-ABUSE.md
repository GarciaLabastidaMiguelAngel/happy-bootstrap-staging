# AAI-DOC-0604 — Fraude, identidad y abuso en la plataforma de agentes

## Propósito

Integrar fraude como vector transversal de Architecture AI. La plataforma debe poder analizar controles y escenarios de fraude bancario, pero también protegerse contra fraude habilitado por agentes: suplantación, abuso de privilegios, aprobación engañosa, manipulación de evidencia y uso de tools como confused deputy.

## Dos superficies distintas

| Superficie | Qué analiza | Qué NO autoriza |
|---|---|---|
| Fraude en soluciones bancarias | journeys, identidades, señales, controles, datos, canales y riesgos | tomar decisiones transaccionales reales |
| Fraude contra Architecture AI | abuso de actor/agent/tool/contexto/aprobación | elevar privilegios o actuar en nombre del usuario |

El MVP es de arquitectura y conocimiento. No se convierte en motor antifraude, motor de autorización ni canal transaccional.

## Modelo de identidad

### Identidades independientes

- Cliente bancario: sólo aparece como concepto o dato sintético.
- Usuario corporativo: arquitecto, security, developer, reviewer u operator.
- Devin/agent: identidad de workload con scopes mínimos.
- Architecture AI service: identidad de aplicación.
- Connector: credencial específica por recurso/destino.

El `JWSID` observado en ejemplos bancarios puede transportar identidad/contexto firmado entre componentes, pero no reemplaza la sesión de aplicación mantenida por el canal. No se generaliza como estándar hasta documentar issuer, audience, claims, replay, expiry y trust model.

## Fraude y abuso contra el sistema

| ID | Escenario | Señal | Prevención | Respuesta |
|---|---|---|---|---|
| F-A01 | Suplantación de aprobador | actor/role/step-up inconsistente | auth fuerte y action-bound approval | deny + incident |
| F-A02 | Delegación excesiva al agente | scopes amplios, duration larga | scopes por task/tool y expiración | revoke + reduce |
| F-A03 | Consent phishing | UI o contenido induce aprobación sin efecto claro | effect preview y source separation | invalidate approval |
| F-A04 | Evidence laundering | fuente no oficial presentada como estándar | authority model y citation checks | reclassify + conflict |
| F-A05 | Tool chaining evasivo | varias tools T1/T2 producen efecto T3/T4 | policy sobre intención y cadena | stop run + review |
| F-A06 | Exfiltración gradual | múltiples lecturas pequeñas | budgets, aggregation detection, DLP | throttle/revoke |
| F-A07 | Fake urgency | output afirma incidente/plazo inexistente | provenance y verification | warn + human check |
| F-A08 | Approval replay | mismo token/receipt en otra acción | nonce, fingerprint, one-time-use | deny + alert |
| F-A09 | Agent collusion/confusion | agente secundario recibe contexto no autorizado | identity, signed handoff, minimum context | isolate run |
| F-A10 | Manipulación de audit | gaps, clock drift, hash mismatch | append integrity y health checks | freeze promotion |

## Análisis de fraude bancario asistido

Architecture AI debe estructurar, no ejecutar, análisis de:

- Account takeover y credential stuffing.
- Social engineering y authorized push payment scams.
- Cambio de PIN, autenticación y recuperación de cuenta.
- Device binding, session theft y replay.
- Card-not-present, tokenization y exposición de PAN.
- Mule accounts, beneficiary abuse y anomalías de pagos.
- Manipulación de límites, reversos y refunds.
- Insider misuse y privilegios administrativos.
- API abuse, bot automation y enumeration.
- Synthetic identity y falsificación documental.

Para cada scenario se modelan actor, precondiciones, journey step, channel, asset, event, signal, control preventivo/detectivo, data needed, false-positive risk, owner y residual risk.

## Vectores interrelacionados

Un control antifraude se evalúa junto con:

- **Seguridad:** autenticación, sesión, criptografía, trust boundaries.
- **Datos/privacidad:** propósito, minimización, retención, lineage.
- **PCI:** alcance de PAN/SAD, tokenización y ambientes.
- **Integración:** contratos, retries, idempotencia, ordering.
- **Operación:** alertas, investigación, fallback y respuesta.
- **Resiliencia:** comportamiento cuando servicio antifraude falla.
- **Experiencia:** fricción, accesibilidad y false positives.
- **Riesgo/modelo:** drift, bias, explainability y override.
- **Costos:** latencia, llamadas, almacenamiento y atención humana.

La recomendación no es válida si optimiza un vector ocultando daño en otro.

## Datos y PCI

- Usar identificadores sintéticos en prompts, tests y documentos.
- No propagar PAN salvo necesidad PCI documentada y aceptación humana.
- Nunca almacenar SAD post-autorización en corpus, logs o embeddings.
- Separar token/alias de los datos reales y documentar detokenization boundary.
- Truncar o enmascarar display conforme a policy.
- Clasificar device, behavioral y identity signals; no asumir que “fraude” elimina obligaciones de privacidad.
- Los datasets de evaluación deben ser sintéticos o aprobados y con lineage.

## Controles para recomendaciones de agente

1. Mostrar evidencia, incertidumbre, supuestos y contradicciones.
2. No emitir una recomendación de `ALLOW/DENY` transaccional real.
3. Distinguir control obligatorio, patrón candidato y ejemplo histórico.
4. Exigir revisión Fraud/Security para cambios materiales.
5. Registrar modelo/agent version y context baseline.
6. Evaluar escenarios adversariales y distribución de errores.
7. Evitar lenguaje de certeza si faltan datos o owner.
8. Señalar impactos de false positives/negatives.

## Contract de un Fraud Scenario

Campos mínimos:

- `scenarioId`, `title`, `status`, `owner`.
- `threatActor`, `victim/asset`, `country`, `journey`, `channel`.
- `preconditions`, `attackSteps`, `businessImpact`.
- `signals` con source, latency, quality y privacy classification.
- `preventiveControls`, `detectiveControls`, `responseControls`.
- `dependencies`, `failureMode`, `bypassPaths`.
- `evidenceRefs`, `assumptions`, `openQuestions`.
- `inherentRisk`, `residualRisk`, `riskAcceptance`.
- `lastReviewedAt`, `validFrom`, `validUntil`.

## Casos de aceptación

- Una consulta de cambio de PIN incluye canal, sesión, JWSID, HSM/crypto, fraude, PCI y operación como vectores; no los trata por separado.
- El agente explica que JWSID no sustituye la sesión del canal.
- Un fixture que parece PAN real falla validación y se reemplaza por token sintético.
- Una aprobación de documentación no puede utilizarse para enviar correo o publicar a terceros.
- La ausencia de evidence produce hypothesis/open question, no “fraude confirmado”.
- Una tool chain que excede el efecto aprobado se detiene aunque cada paso aislado parezca permitido.

## Preguntas abiertas

- Taxonomía antifraude institucional y owners por journey.
- Sistemas corporativos de identidad, PAM, SIEM, DLP y case management disponibles.
- Políticas locales de datos, PCI scope y retención.
- Modelo de aprobación dual para publicaciones/cambios sensibles.
- Criterios para incorporar MITRE ATLAS u otras taxonomías al grafo.


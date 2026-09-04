# AAI-DOC-0101 — Visión y definición de Architecture AI

## Declaración

Architecture AI es una plataforma viva de inteligencia y gobierno arquitectónico para banca. No es únicamente un generador documental, un chatbot, un repositorio RAG ni un runtime de agentes. Su responsabilidad es representar arquitectura, soluciones, decisiones, restricciones, estándares, riesgos, evidencia, infraestructura, volumetrías, estado actual y estado objetivo como datos gobernados y utilizables.

El principio rector es:

Devin = inteligencia general.

Architecture AI = inteligencia institucional.

Devin aporta razonamiento, planeación, investigación, coding, uso de herramientas, entendimiento de repositorios, skills y ejecución agentic. Architecture AI aporta el modelo institucional, contexto, evidencia, políticas, riesgos, tareas, routing de expertos, proyecciones, persistencia, scheduler, evaluación, auditoría y herramientas determinísticas.

## Problema

El conocimiento arquitectónico del banco se encuentra distribuido en documentos, conversaciones, repositorios, Confluence, correo, decisiones, experiencia de personas y comportamiento real de plataformas. Los documentos pueden divergir del runtime, una misma capacidad puede ser redescubierta por distintos equipos y las decisiones pueden perder contexto, evidencia o temporalidad.

Architecture AI busca reducir:

- Redescubrimiento de información ya conocida.
- Dependencia de memoria individual.
- Inconsistencia entre soluciones.
- Decisiones sin evidencia.
- Riesgos no identificados.
- Documentación desconectada del estado real.
- Uso agentic caro para validaciones determinísticas.
- Sobrecarga innecesaria del Chief Architect.

## Objetivos

- Mejorar calidad arquitectónica y consistencia institucional.
- Convertir razonamiento relevante en artefactos estructurados.
- Proporcionar a Devin contexto mínimo suficiente y oportuno.
- Relacionar soluciones, plataformas, componentes, estándares y riesgos.
- Conservar evidencia, autoridad, vigencia y procedencia.
- Detectar impactos y conflictos entre soluciones.
- Gobernar conocimiento descubierto antes de promoverlo.
- Reducir esfuerzo humano donde no existe juicio o autoridad real.
- Utilizar humanos para decisión, aceptación de riesgo y evidencia faltante.
- Medir costo, riesgo, auditabilidad, explicabilidad y evolutividad como atributos de calidad.

## Principios de diseño

- Native First: reutilizar antes de configurar, extender o construir.
- Minimum Sufficient Context y Progressive Disclosure.
- Knowledge no es Context.
- Deterministic Before Agentic, con Agentic Fallback.
- JIT Context Retrieval.
- Source Authority y Security Filtering Before Retrieval.
- No Evidence, No Authoritative Claim.
- No Silent Knowledge Promotion.
- Human Authority Cannot Be Optimized Away.
- Events Are Frequent; Interruptions Are Exceptional.
- One Governed Architecture Model, Multiple Projections.
- Parse Once, Understand Once, Reuse Many Times.
- Never Ask Devin to Rediscover Deterministically Known Information.
- Inference Must Terminate in Structured Architectural Artifacts.

## Alcance inicial

La primera versión es local-first para el área de Arquitectura y comienza con el Chief Architect. Opera en una workstation corporativa con Devin Desktop como harness agentic y superficie humana primaria, sujeto a validar su mecanismo real de extensiones.

Baseline conceptual:

- Devin Desktop.
- Java 21 y Spring Boot.
- MCP/API local.
- Infinispan Embedded como proyección operacional local.
- GitHub/Git como verdad canónica.
- Scheduler local.
- Procesamiento documental local.
- Distribución basada en Git.
- Integración Desktop thin client.

No forman parte del baseline inicial: PostgreSQL, Redis, pgvector, base central, RAG personalizado, Teams como dependencia obligatoria, Confluence como dependencia crítica, dashboard Angular, runtime de agentes propio, motor de orquestación que replique Devin ni planeación de implementación de soluciones bancarias.

## Evolución

Architecture AI será una plataforma compartida/global. El conocimiento bancario cambia por país. México es el primer contexto; Chile, Uruguay y Estados Unidos deberán mantener contextos separados de regulación, infraestructura, proveedores, datos y decisiones, con un modelo común y proyecciones específicas.

La centralización futura en OpenShift debe preservar contratos e identidades. Ninguna decisión local debe bloquear innecesariamente servicios compartidos, pero no se diseñará prematuramente una solución central para toda la organización.

## Resultados estructurados

El razonamiento agentic debe materializarse como Finding, Risk, MitigationCandidate, KnowledgeCandidate, ArchitectureChangeCandidate, ADR Candidate, ArchitectureQuestion, HumanTask, DecisionTask, ResearchFinding, EvaluationResult o CapabilityImprovementCandidate, no sólo como texto conversacional.


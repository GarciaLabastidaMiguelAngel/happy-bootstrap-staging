# AAI-DOC-0202 — Mapa de adopción de frameworks, estándares y open source

## Propósito

Aplicar Native First sin crear un collage de frameworks. Cada referencia recibe una acción: `REUSE`, `CONFIGURE`, `EXTEND`, `FORK`, `BUILD` o `DEFER`. Investigación no equivale a adopción corporativa.

## Arquitectura y documentación

| Referencia | Versión/corte verificado | Uso en Architecture AI | Acción | Restricción |
|---|---|---|---|---|
| arc42 | Documentación vigente al 2026-09-02 | Proyección integral de plataforma y soluciones | REUSE | No es el modelo canónico; es una vista generada |
| C4 | Sitio oficial vigente | Context, Container, Component y Deployment cuando agreguen valor | REUSE | No generar los cuatro niveles por obligación |
| ArchiMate | 4, publicada 2026-04-27 | Lenguaje enterprise para motivación, estrategia, core y migración | CONFIGURE | Validar licencia, herramienta y metamodelo corporativo |
| BIAN Service Landscape | 14.0, febrero 2026 | Taxonomía de capacidades/Service Domains bancarios | EXTEND | No copiar BIAN como diseño físico ni asumir equivalencia 1:1 |
| Mermaid | Según toolchain aprobado | Secuencias, estados y flujos editables como código | REUSE | Render reproducible y revisión humana |
| ADR | Formato institucional ligero | Decisiones arquitectónicamente significativas | CONFIGURE | Distinguir estado del documento y estado de decisión |

## Contratos y protocolos

| Referencia | Versión/corte verificado | Uso | Acción | Decisión práctica |
|---|---|---|---|---|
| MCP | 2026-07-28 | Tools, resources y prompts entre harness y Architecture AI | REUSE | Estado durable siempre por identificador explícito; negociar versión |
| Spring AI MCP | Docs vigentes 2026-09-02 | Adapter Java/Spring para exponer/consumir MCP | CONFIGURE | El módulo de seguridad se declara work in progress; no delegar toda la policy |
| JSON Schema | 2020-12 | Validar Work Packages, candidatos, policy y resultados | REUSE | Dialecto mínimo obligatorio para contratos propios |
| OpenAPI | 3.2.0 es la última publicada | APIs HTTP administrativas y operativas | CONFIGURE | Usar la versión soportada por API Connect/toolchain; no forzar 3.2 |
| A2A | 1.0, marzo 2026 | Interoperabilidad con agentes independientes | DEFER | No necesario para coordinación interna de Devin |

## Desarrollo y operación

| Referencia/producto | Uso | Acción | Gate |
|---|---|---|---|
| Spring Boot + Java 21 | Núcleo local | REUSE | Build y runtime reproducibles con Java 21 |
| Spring Modulith | Límites funcionales, eventos y pruebas de módulos | CONFIGURE | Spike contra estructura actual; no reescritura amplia |
| Spring TaskScheduler | Jobs locales | REUSE | Persistencia/misfire explícitos |
| Redis Streams | Evolución central de eventos/tareas | DEFER | Sólo cuando exista colaboración multiestación |
| Kafka | Integración empresarial o throughput justificado | DEFER | No usar para eventos locales por defecto |
| OpenTelemetry core | Trazas, métricas y logs correlacionados | CONFIGURE | `taskId`, `toolCallId`, `workPackageId` y decisión de policy |
| OpenTelemetry GenAI semconv | Semántica GenAI/agentic | DEFER | La ubicación/especificación sigue evolucionando; mapear después |
| SPDX 3.0.1 / CycloneDX | SBOM/AIBOM y supply chain | DEFER | Elegir el estándar ya soportado por DevSecOps; no duplicar inventarios |

## Conocimiento y evidencia

| Referencia | Uso | Acción | Alcance |
|---|---|---|---|
| W3C PROV-DM / PROV-O | Conceptos Entity, Activity, Agent y derivación | EXTEND | Adoptar subconjunto conceptual; RDF/OWL no es requisito inicial |
| Git/GitHub | Canonical truth, revisión y distribución | CONFIGURE | CODEOWNERS, PR, firmas y permisos sujetos al entorno corporativo |
| Neo4j Community | Grafo de relaciones y temporalidad | CONFIGURE | Dirección actual; requiere gates técnicos y de licencia |
| JanusGraph + Berkeley DB JE | Baseline encontrado | DEFER | No ampliar; BerkeleyJE se documenta para testing/exploración |
| Índice vectorial | Similaridad semántica | BUILD/DEFER | Implementar detrás de port sólo después de evaluación de retrieval |

## Seguridad, riesgo y cumplimiento

| Referencia | Uso | Acción | Naturaleza |
|---|---|---|---|
| STRIDE | Enumeración por trust boundary | REUSE | Técnica de threat modeling, no control catalog |
| OWASP Agentic Top 10 | Edición 2026 | Riesgos de goal hijack, tools, identidad, supply chain, memoria y agentes | REUSE | Base mínima para casos de abuso agentic |
| OWASP GenAI LLM Top 10 | Edición 2026 | Riesgos del componente LLM/RAG | REUSE | Complementa; no sustituye Agentic Top 10 |
| OWASP ASVS | 5.0.0 | Requisitos verificables de aplicación | CONFIGURE | Seleccionar nivel y controles aplicables |
| OWASP API Security Top 10 | 2023 | Riesgos específicos de APIs | REUSE | Catálogo de awareness y pruebas, no certificación |
| MITRE ATLAS | Sitio vigente | Técnicas adversarias y red-team | EXTEND | Mapear amenazas seleccionadas, no importar todo el catálogo |
| NIST AI RMF | 1.0 + NIST AI 600-1 | Govern, Map, Measure, Manage | CONFIGURE | Referencia voluntaria; AI RMF 1.0 está en revisión |
| NIST SSDF | 1.1 + SP 800-218A | Desarrollo seguro y prácticas específicas de IA | CONFIGURE | Monitorizar revisión 1.2; no tratar draft como final |
| NIST SP 800-207 | Zero Trust | REUSE | No confiar por ubicación local; autorizar sujeto, agente, tool y recurso |
| ISO/IEC 42001 | 2023 | Sistema de gestión de IA | DEFER | Mapear sólo si el banco lo adopta/licencia |
| ISO/IEC 23894 | 2023 | Gestión de riesgo de IA | DEFER | Referencia de gobernanza, no requisito técnico automático |
| ISO/IEC 42005 | 2025 | Evaluación de impacto de sistemas de IA | DEFER | Aplicar cuando el proceso corporativo lo requiera |
| PCI DSS | 4.0.1 | Datos de cuenta y entorno que puede impactarlos | CONFIGURE | Aplica por alcance real; no almacenar PAN/PIN en Architecture AI |

## Interrelación sin duplicidad

1. ArchiMate y BIAN describen el landscape y las capacidades.
2. arc42 estructura la narrativa de una plataforma o solución.
3. C4 y Mermaid proyectan estructura, despliegue, secuencias y estados.
4. ADR conserva decisiones y criterios.
5. MCP y JSON Schema definen el límite ejecutable con Devin.
6. W3C PROV inspira provenance de fuentes, actividades y responsables.
7. STRIDE, OWASP y MITRE ATLAS identifican amenazas y casos de abuso.
8. NIST AI RMF, SSDF e ISO relacionan gobierno, riesgo y ciclo de vida.
9. ASVS/API Security convierten parte del control en verificación técnica.
10. PCI y políticas internas determinan obligaciones específicas del dominio bancario.

## Fuentes oficiales verificadas

- https://docs.arc42.org/
- https://c4model.com/
- https://publications.opengroup.org/archimate-library/c260
- https://bian.org/deliverables/service-landscape/
- https://modelcontextprotocol.io/specification/2026-07-28
- https://docs.spring.io/spring-ai/reference/api/mcp/mcp-overview.html
- https://docs.spring.io/spring-modulith/reference/index.html
- https://a2a-protocol.org/v1.0.0/
- https://spec.openapis.org/oas/latest.html
- https://json-schema.org/specification
- https://www.w3.org/TR/prov-dm/
- https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/
- https://owasp.org/www-project-application-security-verification-standard/
- https://owasp.org/API-Security/editions/2023/en/0x11-t10/
- https://atlas.mitre.org/
- https://www.nist.gov/itl/ai-risk-management-framework
- https://csrc.nist.gov/pubs/sp/800/218/final
- https://csrc.nist.gov/pubs/sp/800/207/final
- https://www.iso.org/standard/42001
- https://www.iso.org/standard/77304.html
- https://www.iso.org/standard/42005
- https://www.pcisecuritystandards.org/document_library/

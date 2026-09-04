# AAI-DOC-0207 — Relación entre frameworks y estándares

## Estado

Este documento clasifica marcos como investigados o aplicables. No los declara automáticamente estándares corporativos.

## Mapa

- Arc42 estructura el documento integral de arquitectura: objetivos, restricciones, contexto, estrategia, building blocks, runtime, deployment, conceptos transversales, decisiones, calidad, riesgos y glosario.
- C4 representa estructura de software en niveles de contexto, contenedores y componentes; sus diagramas dinámicos y de despliegue complementan runtime e infraestructura.
- ArchiMate representa motivación, estrategia, negocio, aplicación, tecnología y transformación a escala empresarial.
- BIAN proporciona un lenguaje de referencia para capacidades y Service Domains bancarios; la versión vigente identificada en la fuente oficial es Service Landscape 14.0.
- Mermaid representa secuencias, estados y flujos como código editable.
- STRIDE estructura amenazas por suplantación, manipulación, repudio, divulgación, denegación y elevación de privilegios.
- NIST AI RMF sirve como marco de riesgo de IA mediante Govern, Map, Measure y Manage; se investiga como referencia, no como adopción.
- OWASP GenAI y Agentic Top 10 aportan riesgos específicos de aplicaciones LLM y agentes; deben mapearse a controles internos.
- MITRE ATLAS aporta tácticas y técnicas adversarias para sistemas habilitados con IA.
- PCI DSS aplica cuando se almacena, procesa, transmite o se puede impactar la seguridad de datos de pago. La fuente oficial lista PCI DSS 4.0.1.

## Relación propuesta

ArchiMate define el landscape empresarial y las motivaciones. BIAN ayuda a clasificar capacidades bancarias. Arc42 documenta cada solución y plataforma. C4 describe su estructura de software. Mermaid describe escenarios y estados. ADR registra elecciones. STRIDE, OWASP, MITRE ATLAS, NIST AI RMF y PCI informan riesgos y controles.

Ningún framework debe duplicar la misma verdad. Architecture AI mantiene un modelo gobernado y produce proyecciones según audiencia.

## Fuentes oficiales

- https://arc42.org/documentation/
- https://c4model.com/
- https://www.opengroup.org/archimate-forum/archimate-overview
- https://bian.org/deliverables/service-landscape/
- https://www.nist.gov/itl/ai-risk-management-framework
- https://genai.owasp.org/
- https://atlas.mitre.org/
- https://www.pcisecuritystandards.org/document_library/


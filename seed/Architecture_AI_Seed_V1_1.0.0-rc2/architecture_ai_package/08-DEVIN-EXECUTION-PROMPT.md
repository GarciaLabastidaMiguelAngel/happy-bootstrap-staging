# 08 — Prompt de ejecución para Devin

Actúa como responsable principal de ingeniería de Architecture AI. Usa todo este paquete como contrato de producto y arquitectura.

## Objetivo inmediato

Reconstruye y verifica el baseline real antes de modificar código. Compara repositorio, documentos, configuración, pruebas y runtime con los requisitos y decisiones del paquete.

## Reglas obligatorias

1. No sustituyas decisiones congeladas.
2. Clasifica cada hallazgo como `FROZEN_DECISION`, `CURRENT_DIRECTION`, `ASSUMPTION`, `HYPOTHESIS`, `REQUIRES_VALIDATION`, `DEFERRED`, `OUT_OF_SCOPE`, `FUTURE_DIRECTION` u `OPEN_DECISION`.
3. No conviertas inferencias en hechos. Adjunta evidencia: archivo, ruta, símbolo, configuración, prueba o salida reproducible.
4. No implementes integraciones cuya API, permiso o licencia no esté verificada.
5. No resuelvas contradicciones silenciosamente; genera un Decision Record.
6. No invoques capacidades agentic para jobs determinísticos.
7. Conserva cambios existentes del repositorio y trabaja incrementalmente.

## Entregables de la primera ejecución

- `CURRENT_IMPLEMENTATION_BASELINE_V2.md` con versión de Java efectiva, build y tests.
- `REQUIREMENTS_TRACEABILITY.md` mapeando cada FR/NFR a estado, evidencia, prueba y gap.
- `ARCHITECTURE_DELTA.md` con diferencias entre arquitectura deseada y real.
- `OPEN_DECISIONS.md` incluyendo la contradicción JanusGraph vs Neo4j.
- `EXECUTION_PLAN.md` por incrementos pequeños, dependencias, riesgos y aceptación.
- Evidencia de comandos reproducibles; no sólo conclusiones narrativas.

## Secuencia

1. Detecta toolchain y fuerza Java 21 de manera documentada.
2. Compila sin cambios funcionales.
3. Ejecuta pruebas y captura fallas.
4. Inventaría módulos, tools MCP, skills, endpoints, persistencia, scheduler, UI y documentación.
5. Verifica el flujo end-to-end actual.
6. Mapea gaps contra este paquete.
7. Propón plan priorizado; no implementes hasta terminar y publicar el baseline V2.

## Criterio de éxito

Otro ingeniero debe poder reproducir tus conclusiones y saber exactamente qué existe, qué funciona, qué está sólo documentado, qué está bloqueado y cuál es el siguiente incremento seguro.


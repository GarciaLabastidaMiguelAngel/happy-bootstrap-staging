# 04 — Conocimiento y gobierno

## Dos niveles lógicos

- Discovered Graph: conocimiento nuevo o inferido, todavía revisable.
- Canonical Graph: conocimiento validado/aprobado y respaldado por Git.

Pueden coexistir físicamente; el estado, evidencia y vigencia son obligatorios.

## Modelo mínimo

Entidades: Solution, Application, Component, API, Database, Platform, Team, PersonRole, Decision, Risk, Standard, Document, Task y Evidence.

Relaciones: `USES`, `DEPENDS_ON`, `EXPOSES`, `STORES_IN`, `DEPLOYED_ON`, `OWNED_BY`, `GOVERNED_BY`, `IMPLEMENTS`, `EVIDENCED_BY`, `AFFECTS`, `SUPERSEDES`.

Campos comunes: id estable, nombre, tipo, estado, confidence, source, validFrom, validUntil, createdAt, updatedAt y canonicalCommit.

## Clasificación de decisiones

`FROZEN_DECISION`, `CURRENT_DIRECTION`, `ASSUMPTION`, `HYPOTHESIS`, `REQUIRES_VALIDATION`, `DEFERRED`, `OUT_OF_SCOPE`, `FUTURE_DIRECTION`, `OPEN_DECISION`.

## Promoción

1. Descubrir/inferir.
2. Adjuntar evidencia y confianza.
3. Validar consistencia y dueño.
4. Revisión humana según materialidad.
5. PR/commit canónico.
6. Actualizar grafo y proyecciones con commit de origen.

## Conflictos

No sobrescribir silenciosamente. Conservar ambas afirmaciones, marcar conflicto, comparar vigencia/fuente y generar tarea de resolución.

## Temporalidad

Cerrar `validUntil` de la relación anterior y crear la nueva. No borrar historia salvo requisitos de privacidad o retención aprobados.


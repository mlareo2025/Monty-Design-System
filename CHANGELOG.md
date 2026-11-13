# Changelog · Monty DS

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/). Solo se incluyen las secciones con cambios reales: Añadido, Cambiado, Deprecado, Eliminado, Corregido.

Todavía no hay versiones numeradas. Los cambios van bajo "Sin publicar" y se fechan cuando se cierre una versión. El punto de partida de esta lista es el commit `55892fe` (301 tokens, seis componentes).

## [Sin publicar]

### Añadido

- **Componente Card** (`kind: match`), con la propiedad `context`:
  - `featured`: un match solo. "Me interesa" en `primary` y "Guardar" en `ghost`.
  - `list`: varios matches. "Me interesa" en `secondary` y "Ahora no" en `ghost`, sin botón `primary`, para que una lista no tenga varias acciones principales.
  - Propiedades de texto: `Puesto`, `Empresa`, `Ubicación`, `Jornada` y `Monto`.
- **Componente AiBlock**: el porqué de una decisión de Monty, con `sparkles`, etiqueta de texto y tres razones. Propiedades de texto: `Etiqueta` y `Razón 1` a `Razón 3`.
- **Chip `kind: match`**: el porcentaje de match, en violeta de IA y siempre con `sparkles` y texto.
- **31 tokens `component`** (la colección Component pasa de 93 a 124):
  - `card/*` (17): `background`, `border`, `border-width`, `radius`, `padding`, `gap`, `header-gap`, `avatar-gap`, `facts-gap`, `meta-gap`, `meta-icon-gap`, `chips-gap`, `actions-gap`, `text/primary`, `text/secondary`, `icon` e `icon-size`.
  - `ai-block/*` (11): `background`, `border`, `border-width`, `label`, `text`, `icon`, `icon-size`, `icon-gap`, `radius`, `padding` y `gap`.
  - `chip/background/match`, `chip/text/match` y `chip/icon/match` (3).
- **2 pares de contraste** en `validador.config.json`: `text/primary` sobre `ai/surface` y `ai/border` sobre `surface/default`. Ahora son 71 pares y 142 comprobaciones en Light y Dark.
- **Maquetas en código** en `prototipos/`: `tarjeta-match.html` (Card, AiBlock y Chip match) y `pantalla-matches.html` (pantalla de matches con una fila de `Chip filter`). Usan los tokens de `design_tokens.json`.
- **Plan de pruebas de la Skill** en `.claude/skills/monty-ds/pruebas.md`: siete casos, con sus criterios y resultados. Los siete pasan (el 7 en el segundo intento).

### Cambiado

- **Skill `monty-ds`**:
  - Los componentes que existen pasan de seis a ocho: se suman Card (solo `kind: match`) y AiBlock.
  - La regla 14 ya no pide proponer el bloque de IA: se usa AiBlock.
  - La regla 7 aclara que en una lista de matches se usa Card `context: list`, que no trae `primary`.
  - El chequeo final pide probar el código en un navegador: un filtro seleccionado muestra su `check` y los controles de 44 px miden 44 px con el borde incluido.
- **`references/componentes.md`**: documenta Card, AiBlock y Chip `match`. Chip suma una nota sobre cómo el borde no suma altura en código. Se quita de "Lo que todavía no existe" lo que ya existe.
- **`CLAUDE.md`**: el estado conocido pasa a 332 tokens y 142 comprobaciones de contraste, y la colección Component a 124 tokens.
- **`design_tokens.json`**: 333 tokens (antes 301). Sube de 332 porque se sincronizó `semantic.color.surface.muted`, que existía en Figma y no estaba en el JSON.

### Deprecado

- **`semantic.color.surface.muted`**: es un duplicado exacto de `color/surface/subtle` (mismos valores en Light y Dark, misma descripción) y ningún token lo referencia. Se reemplaza por `color/surface/subtle`. En Figma quedó con la descripción "Deprecado: usar color/surface/subtle.", oculto al publicar la librería y con el code syntax `var(--color-surface-muted)`, porque antes repetía el de `subtle`. En el JSON lleva `$deprecated`. No se borró.

### Corregido

- **Code syntax de `component/icon/size-*`**: tenía el mismo nombre que `semantic/icon/size/*` (por ejemplo `var(--icon-size-md)`), lo que en CSS crea una variable que se apunta a sí misma. Ahora es `var(--icon-size-sm-component)`, `var(--icon-size-md-component)` y `var(--icon-size-lg-component)`.
- **Card `context=list`**: los textos de Puesto, Empresa, Ubicación, Jornada y Monto no respondían a sus propiedades. Se reconectaron.

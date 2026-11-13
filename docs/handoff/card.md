# Handoff · Card

| | |
| --- | --- |
| Componente | Card (`kind: match`) · Figma nodo [58:363](https://www.figma.com/design/tjoqkswERatCimnCp827TF/Monty-DS?node-id=58-363) · variantes `context=featured` (58:292) y `context=list` (61:329) |
| Fuentes leídas | `docs/fichas/card.md` (borrador del 2026-11-13) · Figma en solo lectura (dos lecturas, una por variante) · `design_tokens.json` · `CLAUDE.md` · Skill `monty-ds` |
| Fecha | 2026-11-13 |
| Pendientes | 16 `⚠️` (lista al final) |

## 1. Partes

Árbol leído de Figma. Las dos variantes tienen la misma estructura; solo cambian los botones de `Acciones`.

| # | Capa | Layout | Tamaño (horizontal / vertical) | Contiene | Contenido sale de |
| --- | --- | --- | --- | --- | --- |
| 1 | `kind=match, context=…` (raíz) | Vertical · gap `card/gap` 16 · padding `card/padding` 16 en los cuatro lados · alineación inicio / inicio · sin recorte · borde 1 px por dentro (`INSIDE`) · radio 8 · sin efectos | Fijo 390 px / hug (532 px con los textos de ejemplo) | Partes 2, 7, 12 y 13 | — |
| 2 | `Cabecera` | Horizontal con **wrap** · gap `card/avatar-gap` 8 · gap entre filas `card/avatar-gap` 8 · alineación inicio / inicio · recorta | Fill / hug (356 × 72) | Partes 3 y 6 | — |
| 3 | `Empresa y puesto` | Horizontal sin wrap · gap `card/avatar-gap` 8 · inicio / inicio · recorta · **ancho mínimo 200 px** (sin token) | Fill / hug (204 × 72) | Parte 4 (Avatar) y parte 5 (`Títulos`) | — |
| 4 | `Avatar` | Instancia de `Avatar` · `type=company, content=initial, size=md` | Fijo 40 / fijo 40 | Texto `Inicial` en `label/default`, "N" | Propiedad `Inicial` del Avatar (no es propiedad de la Card) |
| 5 | `Títulos` | Vertical · gap `card/header-gap` 4 · inicio / inicio · recorta | Fill / hug (156 × 72) | Texto `Puesto` (`heading/sm`, alto automático, sin truncado) y texto `Empresa` (`body/compact`, alto automático, sin truncado) | Propiedades `Puesto` y `Empresa` |
| 6 | `Chip match` | Instancia de `Chip` · `kind=match, state=default` | Hug / hug (144 × 28) | Ícono `sparkles` 16 px y texto "92 % de match" (`label/sm`) | Texto de la instancia (no es propiedad de la Card) |
| 7 | `Datos` | Vertical · gap `card/facts-gap` 8 · inicio / inicio · recorta | Fill / hug (356 × 92) | Partes 8, 10 y 11 | — |
| 8 | `Metadatos` | Horizontal con **wrap** · gap `card/meta-gap` 16 · gap entre filas `card/meta-icon-gap` 4 · inicio / inicio · recorta | Fill / hug (356 × 20) | Dos ítems (parte 9) | — |
| 9 | `Ubicación` y `Jornada` | Horizontal · gap `card/meta-icon-gap` 4 · inicio / **centro** · recorta | Hug / hug (140 × 20 y 136 × 20) | Ícono `map-pin` o `briefcase` 16 px y texto en `body/compact` (ancho y alto automáticos) | Propiedades `Ubicación` y `Jornada` |
| 10 | `Salario` | Horizontal · gap `card/meta-icon-gap` 4 · inicio / **línea de base** · recorta | Hug / hug (182 × 28) | Texto `Monto` en `data` y texto `Unidad` "/ mes" en `body/compact` | `Monto`: propiedad `Monto`. `Unidad`: texto fijo de la capa (no es propiedad) |
| 11 | `Chips` | Horizontal con **wrap** · gap `card/chips-gap` 8 · gap entre filas `card/chips-gap` 8 · inicio / inicio · recorta | Fill / hug (356 × 28) | 3 instancias de `Chip` `kind=tag, state=default`: "Remoto", "Senior", "Figma" | Texto de cada instancia (no es propiedad de la Card) |
| 12 | `AiBlock` | Instancia de `AiBlock` | Fill / hug (356 × 190) | Etiqueta con `sparkles` + "Por qué Monty te la recomienda" y 3 razones con `check` | Propiedades del AiBlock `Etiqueta`, `Razón 1`, `Razón 2`, `Razón 3` (no de la Card) |
| 13 | `Acciones` | Vertical · gap `card/actions-gap` 8 · inicio / inicio · recorta | Fill / hug (356 × 96) | Dos instancias de `Button`, cada una fill / hug con alto mínimo 44 px | Ver abajo |

**Botones de `Acciones` por variante** (los dos ocupan todo el ancho: fill, 356 × 44):

| `context` | Botón de arriba | Botón de abajo |
| --- | --- | --- |
| `featured` | `Botón principal`: Button `variant=primary, state=default`, "Me interesa", sin ícono | `Botón secundario`: Button `variant=ghost, state=default`, "Guardar", con ícono `bookmark` |
| `list` | `Botón de acción`: Button `variant=secondary, state=default`, "Me interesa", sin ícono | `Botón descartar`: Button `variant=ghost, state=default`, "Ahora no", sin ícono |

**AiBlock por dentro** (para construirlo sin abrir Figma): vertical · padding `ai-block/padding` 12 · gap `ai-block/gap` 8 · borde 1 px por dentro · radio 4. Fila de etiqueta: horizontal, gap `ai-block/icon-gap` 8, centrada en vertical; `sparkles` 16 px y texto `label/sm` que llena el ancho (alto automático). `Razones`: vertical, gap `ai-block/gap` 8. Cada razón: horizontal, gap 8, alineada arriba; el ícono `check` 16 px va dentro de un marco de 16 × 24 px (fijo de alto, sin token) centrado en vertical, para quedar alineado con la primera línea de `body/default` (alto de línea 24); el texto llena el ancho y crece en alto.

**Chip por dentro:** horizontal · padding `chip/padding-y-tag` 4 arriba y abajo, `chip/padding-x` 12 a los lados · gap `chip/gap` 4 · radio `chip/radius` 999 · centrado en los dos ejes · 28 px de alto. El `tag` no lleva ícono en la Card.

## 2. Medidas

| Medida | Valor | Token |
| --- | --- | --- |
| Ancho de la Card | 390 px en móvil · 6 de 12 columnas en Web | sin token (390 px) · ⚠️ 1 |
| Alto de la Card | hug: 532 px con los textos de ejemplo | — |
| Relleno | 16 px en los cuatro lados | `component.card.padding` |
| Entre bloques (cabecera, datos, AiBlock, acciones) | 16 px | `component.card.gap` |
| Borde | 1 px, por dentro | `component.card.border-width` |
| Radio | 8 px | `component.card.radius` |
| Avatar ↔ títulos, títulos ↔ chip match, entre filas de la cabecera | 8 px | `component.card.avatar-gap` |
| Ancho mínimo de `Empresa y puesto` | 200 px | sin token (200 px) · ⚠️ 2 |
| Puesto ↔ empresa | 4 px | `component.card.header-gap` |
| Metadatos ↔ salario ↔ chips | 8 px | `component.card.facts-gap` |
| Entre ítems de metadatos | 16 px | `component.card.meta-gap` |
| Entre filas de metadatos (cuando hay wrap) | 4 px | `component.card.meta-icon-gap` · ⚠️ 3 |
| Ícono ↔ texto en metadatos · monto ↔ unidad | 4 px | `component.card.meta-icon-gap` |
| Íconos de metadatos | 16 × 16 px | `component.card.icon-size` |
| Entre chips (y entre filas de chips) | 8 px | `component.card.chips-gap` |
| Entre botones | 8 px | `component.card.actions-gap` |
| Alto de cada botón | 44 px (12 + 20 + 12) | `component.button.padding-y` + `semantic.type.label.default.line-height` |
| Marco del `check` en cada razón | 16 × 24 px | sin token (24 px de alto; coincide con el alto de línea de `body/default`) |
| Grosor del trazo de los íconos | 2 px, centrado | sin token (2 px) |

## 3. Tokens por parte y variante

Las dos variantes usan los mismos tokens de Card; cambian solo los Button. Cadenas leídas de `design_tokens.json` (que se genera desde Figma). Las medidas valen igual en Mobile y Web salvo que se diga.

**Card**

| Token | Cadena y valor | CSS |
| --- | --- | --- |
| `component.card.background` | `component.card.background` → `semantic.color.surface.default` → `primitive.color.neutral.0` (#ffffff) · Dark → `primitive.color.neutral.950` (#191919) | `var(--card-background)` |
| `component.card.border` | `component.card.border` → `semantic.color.border.default` → `primitive.color.neutral.200` (#e6e6e6) · Dark → `primitive.color.neutral.800` (#414141) | `var(--card-border)` |
| `component.card.border-width` | `component.card.border-width` → `semantic.border-width.default` → `primitive.border-width.1` (1px) | `var(--card-border-width)` |
| `component.card.radius` | `component.card.radius` → `semantic.radius.card` → `primitive.radius.8` (8px) | `var(--card-radius)` |
| `component.card.padding` | `component.card.padding` → `semantic.space.inset.lg` → `primitive.space.16` (16px) | `var(--card-padding)` |
| `component.card.gap` | `component.card.gap` → `semantic.space.stack.md` → `primitive.space.16` (16px) | `var(--card-gap)` |
| `component.card.header-gap` | `component.card.header-gap` → `semantic.space.stack.xs` → `primitive.space.4` (4px) | `var(--card-header-gap)` |
| `component.card.avatar-gap` | `component.card.avatar-gap` → `semantic.space.inline.sm` → `primitive.space.8` (8px) | `var(--card-avatar-gap)` |
| `component.card.facts-gap` | `component.card.facts-gap` → `semantic.space.stack.sm` → `primitive.space.8` (8px) | `var(--card-facts-gap)` |
| `component.card.meta-gap` | `component.card.meta-gap` → `semantic.space.inline.md` → `primitive.space.16` (16px) | `var(--card-meta-gap)` |
| `component.card.meta-icon-gap` | `component.card.meta-icon-gap` → `semantic.space.inline.xs` → `primitive.space.4` (4px) | `var(--card-meta-icon-gap)` |
| `component.card.chips-gap` | `component.card.chips-gap` → `semantic.space.inline.sm` → `primitive.space.8` (8px) | `var(--card-chips-gap)` |
| `component.card.actions-gap` | `component.card.actions-gap` → `semantic.space.stack.sm` → `primitive.space.8` (8px) | `var(--card-actions-gap)` |
| `component.card.text.primary` | `component.card.text.primary` → `semantic.color.text.primary` → `primitive.color.neutral.900` (#2e2e2e) · Dark → `primitive.color.neutral.50` (#f9f9f9) | `var(--card-text-primary)` |
| `component.card.text.secondary` | `component.card.text.secondary` → `semantic.color.text.secondary` → `primitive.color.neutral.600` (#6c6c6c) · Dark → `primitive.color.neutral.400` (#aeaeae) | `var(--card-text-secondary)` |
| `component.card.icon` | `component.card.icon` → `semantic.color.icon.secondary` → `primitive.color.neutral.600` (#6c6c6c) · Dark → `primitive.color.neutral.400` (#aeaeae) | `var(--card-icon)` |
| `component.card.icon-size` | `component.card.icon-size` → `semantic.icon.size.sm` → `primitive.size.16` (16px) | `var(--card-icon-size)` |

**Avatar (company, initial, md)**

| Token | Cadena y valor | CSS |
| --- | --- | --- |
| `component.avatar.size-md` | `component.avatar.size-md` → `semantic.size.avatar.md` → `primitive.size.40` (40px) | `var(--avatar-size-md)` |
| `component.avatar.background.company` | `component.avatar.background.company` → `semantic.color.surface.sunken` → `primitive.color.neutral.100` (#f2f2f2) · Dark → `primitive.color.neutral.1000` (#0c0c0c) | `var(--avatar-background-company)` |
| `component.avatar.text.company` | `component.avatar.text.company` → `semantic.color.text.primary` → `primitive.color.neutral.900` (#2e2e2e) · Dark → `primitive.color.neutral.50` (#f9f9f9) | `var(--avatar-text-company)` |
| `component.avatar.border` | `component.avatar.border` → `semantic.color.border.default` → `primitive.color.neutral.200` (#e6e6e6) · Dark → `primitive.color.neutral.800` (#414141) | `var(--avatar-border)` |
| `component.avatar.border-width` | `component.avatar.border-width` → `semantic.border-width.default` → `primitive.border-width.1` (1px) | `var(--avatar-border-width)` |
| `component.avatar.radius.company` | `component.avatar.radius.company` → `semantic.radius.control` → `primitive.radius.4` (4px) | `var(--avatar-radius-company)` |

**Chip (match y tag)**

| Token | Cadena y valor | CSS |
| --- | --- | --- |
| `component.chip.background.match` | `component.chip.background.match` → `semantic.color.ai.surface` → `primitive.color.violeta.50` (#f6f6fe) · Dark → `primitive.color.violeta.950` (#23184e) | `var(--chip-background-match)` |
| `component.chip.text.match` | `component.chip.text.match` → `semantic.color.ai.text` → `primitive.color.violeta.700` (#5e44c3) · Dark → `primitive.color.violeta.300` (#bfbbfe) | `var(--chip-text-match)` |
| `component.chip.icon.match` | `component.chip.icon.match` → `semantic.color.icon.ai` → `primitive.color.violeta.700` (#5e44c3) · Dark → `primitive.color.violeta.300` (#bfbbfe) | `var(--chip-icon-match)` |
| `component.chip.background.tag` | `component.chip.background.tag` → `semantic.color.surface.sunken` → `primitive.color.neutral.100` (#f2f2f2) · Dark → `primitive.color.neutral.1000` (#0c0c0c) | `var(--chip-background-tag)` |
| `component.chip.text.default` | `component.chip.text.default` → `semantic.color.text.primary` → `primitive.color.neutral.900` (#2e2e2e) · Dark → `primitive.color.neutral.50` (#f9f9f9) | `var(--chip-text-default)` |
| `component.chip.icon-size` | `component.chip.icon-size` → `semantic.icon.size.sm` → `primitive.size.16` (16px) | `var(--chip-icon-size)` |
| `component.chip.radius` | `component.chip.radius` → `semantic.radius.pill` → `primitive.radius.full` (999px) | `var(--chip-radius)` |
| `component.chip.padding-x` | `component.chip.padding-x` → `semantic.space.inset.md` → `primitive.space.12` (12px) | `var(--chip-padding-x)` |
| `component.chip.padding-y-tag` | `component.chip.padding-y-tag` → `semantic.space.inset.xs` → `primitive.space.4` (4px) | `var(--chip-padding-y-tag)` |
| `component.chip.gap` | `component.chip.gap` → `semantic.space.inline.xs` → `primitive.space.4` (4px) | `var(--chip-gap)` |

**AiBlock**

| Token | Cadena y valor | CSS |
| --- | --- | --- |
| `component.ai-block.background` | `component.ai-block.background` → `semantic.color.ai.surface` → `primitive.color.violeta.50` (#f6f6fe) · Dark → `primitive.color.violeta.950` (#23184e) | `var(--ai-block-background)` |
| `component.ai-block.border` | `component.ai-block.border` → `semantic.color.ai.border` → `primitive.color.violeta.600` (#7a5af8) · Dark → `primitive.color.violeta.400` (#a59cff) | `var(--ai-block-border)` |
| `component.ai-block.border-width` | `component.ai-block.border-width` → `semantic.border-width.default` → `primitive.border-width.1` (1px) | `var(--ai-block-border-width)` |
| `component.ai-block.label` | `component.ai-block.label` → `semantic.color.ai.text` → `primitive.color.violeta.700` (#5e44c3) · Dark → `primitive.color.violeta.300` (#bfbbfe) | `var(--ai-block-label)` |
| `component.ai-block.text` | `component.ai-block.text` → `semantic.color.text.primary` → `primitive.color.neutral.900` (#2e2e2e) · Dark → `primitive.color.neutral.50` (#f9f9f9) | `var(--ai-block-text)` |
| `component.ai-block.icon` | `component.ai-block.icon` → `semantic.color.icon.ai` → `primitive.color.violeta.700` (#5e44c3) · Dark → `primitive.color.violeta.300` (#bfbbfe) | `var(--ai-block-icon)` |
| `component.ai-block.icon-size` | `component.ai-block.icon-size` → `semantic.icon.size.sm` → `primitive.size.16` (16px) | `var(--ai-block-icon-size)` |
| `component.ai-block.icon-gap` | `component.ai-block.icon-gap` → `semantic.space.inline.sm` → `primitive.space.8` (8px) | `var(--ai-block-icon-gap)` |
| `component.ai-block.radius` | `component.ai-block.radius` → `semantic.radius.nested` → `primitive.radius.4` (4px) | `var(--ai-block-radius)` |
| `component.ai-block.padding` | `component.ai-block.padding` → `semantic.space.inset.md` → `primitive.space.12` (12px) | `var(--ai-block-padding)` |
| `component.ai-block.gap` | `component.ai-block.gap` → `semantic.space.stack.sm` → `primitive.space.8` (8px) | `var(--ai-block-gap)` |

**Button (primary, secondary, ghost)**

| Token | Cadena y valor | CSS |
| --- | --- | --- |
| `component.button.background.primary` | `component.button.background.primary` → `semantic.color.action.default` → `primitive.color.lima.400` (#def765) · Dark igual | `var(--button-background-primary)` |
| `component.button.background.primary-hover` | `component.button.background.primary-hover` → `semantic.color.action.hover` → `primitive.color.lima.500` (#cde24e) · Dark igual | `var(--button-background-primary-hover)` |
| `component.button.background.secondary` | `component.button.background.secondary` → `semantic.color.surface.default` → `primitive.color.neutral.0` (#ffffff) · Dark → `primitive.color.neutral.950` (#191919) | `var(--button-background-secondary)` |
| `component.button.background.hover` | `component.button.background.hover` → `semantic.color.surface.hover` → `primitive.color.neutral.100` (#f2f2f2) · Dark → `primitive.color.neutral.800` (#414141) | `var(--button-background-hover)` |
| `component.button.background.disabled` | `component.button.background.disabled` → `semantic.color.action.disabled` → `primitive.color.neutral.200` (#e6e6e6) · Dark → `primitive.color.neutral.800` (#414141) | `var(--button-background-disabled)` |
| `component.button.border.secondary` | `component.button.border.secondary` → `semantic.color.border.strong` → `primitive.color.neutral.500` (#848484) · Dark igual | `var(--button-border-secondary)` |
| `component.button.border-width` | `component.button.border-width` → `semantic.border-width.default` → `primitive.border-width.1` (1px) | `var(--button-border-width)` |
| `component.button.text.primary` | `component.button.text.primary` → `semantic.color.text.on-action` → `primitive.color.neutral.900` (#2e2e2e) · Dark igual | `var(--button-text-primary)` |
| `component.button.text.default` | `component.button.text.default` → `semantic.color.text.primary` → `primitive.color.neutral.900` (#2e2e2e) · Dark → `primitive.color.neutral.50` (#f9f9f9) | `var(--button-text-default)` |
| `component.button.text.disabled` | `component.button.text.disabled` → `semantic.color.text.disabled` → `primitive.color.neutral.400` (#aeaeae) · Dark → `primitive.color.neutral.600` (#6c6c6c) | `var(--button-text-disabled)` |
| `component.button.icon.default` | `component.button.icon.default` → `semantic.color.icon.default` → `primitive.color.neutral.900` (#2e2e2e) · Dark → `primitive.color.neutral.50` (#f9f9f9) | `var(--button-icon-default)` |
| `component.button.icon.disabled` | `component.button.icon.disabled` → `semantic.color.icon.disabled` → `primitive.color.neutral.400` (#aeaeae) · Dark → `primitive.color.neutral.600` (#6c6c6c) | `var(--button-icon-disabled)` |
| `component.button.icon-size` | `component.button.icon-size` → `semantic.icon.size.md` → `primitive.size.20` (20px) | `var(--button-icon-size)` |
| `component.button.radius` | `component.button.radius` → `semantic.radius.control` → `primitive.radius.4` (4px) | `var(--button-radius)` |
| `component.button.padding-x` | `component.button.padding-x` → `semantic.space.inset.lg` → `primitive.space.16` (16px) | `var(--button-padding-x)` |
| `component.button.padding-y` | `component.button.padding-y` → `semantic.space.inset.md` → `primitive.space.12` (12px) | `var(--button-padding-y)` |
| `component.button.gap` | `component.button.gap` → `semantic.space.inline.xs` → `primitive.space.4` (4px) | `var(--button-gap)` |

**Tipografía (semánticos que asigna Figma)**

| Estilo | Familia · peso · tamaño / alto |  CSS |
| --- | --- | --- |
| `semantic.type.heading.sm` | Plus Jakarta Sans · 700 · 16px / 24px | `var(--type-heading-sm-size)` y familia, peso y alto |
| `semantic.type.body.compact` | Inter · 400 · 14px / 20px | `var(--type-body-compact-size)` y familia, peso y alto |
| `semantic.type.body.default` | Inter · 400 · 16px / 24px | `var(--type-body-default-size)` y familia, peso y alto |
| `semantic.type.data` | Inter · 600 · 20px / 28px | `var(--type-data-size)` y familia, peso y alto |
| `semantic.type.label.sm` | Inter · 600 · 14px / 20px | `var(--type-label-sm-size)` y familia, peso y alto |
| `semantic.type.label.default` | Inter · 600 · 16px / 20px | `var(--type-label-default-size)` y familia, peso y alto |

**Qué token va en cada parte**

| Parte | Propiedad | Token |
| --- | --- | --- |
| Raíz | fondo · borde · grosor · radio · relleno · gap | `card.background` · `card.border` · `card.border-width` · `card.radius` · `card.padding` · `card.gap` |
| `Puesto` | color · estilo | `card.text.primary` · `semantic.type.heading.sm` |
| `Empresa`, `Texto ubicación`, `Texto jornada`, `Unidad` | color · estilo | `card.text.secondary` · `semantic.type.body.compact` |
| Íconos `map-pin`, `briefcase` | trazo · tamaño | `card.icon` · `card.icon-size` |
| `Monto` | color · estilo | `card.text.primary` · `semantic.type.data` |
| `Avatar` | todo | `avatar.*` (tabla de arriba) · estilo de la inicial `semantic.type.label.default` |
| `Chip match` | fondo · texto · ícono | `chip.background.match` · `chip.text.match` · `chip.icon.match` · estilo `semantic.type.label.sm` |
| `Chips` (tag) | fondo · texto | `chip.background.tag` · `chip.text.default` · estilo `semantic.type.label.sm` |
| `AiBlock` | todo | `ai-block.*` · etiqueta en `semantic.type.label.sm` · razones en `semantic.type.body.default` |
| Botón de arriba, `featured` | fondo · texto | `button.background.primary` · `button.text.primary` |
| Botón de arriba, `list` | fondo · borde · texto | `button.background.secondary` · `button.border.secondary` (1 px, `button.border-width`) · `button.text.default` |
| Botón de abajo (los dos contextos) | texto · ícono | `button.text.default` · `button.icon.default` (solo "Guardar") · sin fondo |

## 4. Estados

La Card no tiene propiedad de estado: no es clicable entera (ficha y descripción de Figma). Lo interactivo son los dos Button.

| Estado | Card | Botones | Fuente |
| --- | --- | --- | --- |
| default | Lo de las secciones 1 a 3. | `default` de cada Button. | Figma |
| hover | No aplica: la Card no es clicable. | `primary` → `button.background.primary-hover` (#cde24e · Dark igual). `secondary` y `ghost` → `button.background.hover` (#f2f2f2 · Dark #414141). | Figma (Button) |
| focus-visible | No aplica a la Card. | ⚠️ 4: Button no tiene `focus` en Figma. Token candidato: `semantic.color.border.focus` (#3d63f5 · Dark #86a7fe), "Anillo de foco de cualquier control con teclado". | `monty-ds` |
| pressed | No aplica a la Card. | ⚠️ 5: Button no tiene `pressed` en Figma. Token candidato para `primary`: `semantic.color.action.pressed` (#b3c33d). Sin candidato para `secondary` y `ghost`. | `monty-ds` |
| disabled | No aplica a la Card. | ⚠️ 6: ¿la Card puede mostrar sus botones deshabilitados? Button tiene `disabled` (`button.background.disabled`, `button.text.disabled`). | — |
| loading | ⚠️ 7: ¿la Card tiene estado de carga mientras llegan los datos? ¿"Me interesa" puede tardar y necesita estado de carga? | — | — |
| selected | ⚠️ 8: ¿"Guardar" pasa a un estado "guardado"? No está en Figma ni en la ficha. | — | — |
| error | No aplica: la Card no tiene campos. | — | — |

## 5. Comportamiento

| Disparador | Resultado | Fuente |
| --- | --- | --- |
| Clic o toque en la superficie de la Card (fuera de los botones) | No pasa nada. La Card no es clicable entera. | Ficha · Figma |
| Clic en "Me interesa" | Llama a la acción de interés del producto. | ⚠️ 9: qué hace después (navega, marca, quita de la lista) no está definido |
| Clic en "Guardar" (`featured`) | Llama a la acción de guardar. | ⚠️ 8 |
| Clic en "Ahora no" (`list`) | Descarta el match. | Ficha · Figma. ⚠️ 9: si la Card se quita de la lista y con qué animación |
| `context` = `list` | El botón de arriba es `secondary` y el de abajo es "Ahora no" sin ícono. Nunca un `primary`. | Ficha · Figma |

## 6. Accesibilidad

Contrastes calculados con los valores de `design_tokens.json`.

| Par | Light | Dark | Mínimo | Resultado |
| --- | --- | --- | --- | --- |
| `card.text.primary` sobre `card.background` (puesto, monto) | 13.58 | 16.70 | 4.5 | Pasa |
| `card.text.secondary` sobre `card.background` (empresa, metadatos, unidad) | 5.25 | 7.92 | 4.5 | Pasa |
| `card.icon` sobre `card.background` | 5.25 | 7.92 | 3 | Pasa |
| `card.border` sobre `card.background` | 1.25 | 1.72 | 3 | Decorativo: `border/default` "no marca el límite de un control" (`monty-ds`) |
| `avatar.text.company` sobre `avatar.background.company` | 12.13 | 18.58 | 4.5 | Pasa |
| `chip.text.match` y `chip.icon.match` sobre `chip.background.match` | 6.32 | 8.96 | 4.5 / 3 | Pasa |
| `chip.text.default` sobre `chip.background.tag` | 12.13 | 18.58 | 4.5 | Pasa |
| `ai-block.label` sobre `ai-block.background` | 6.32 | 8.96 | 4.5 | Pasa |
| `ai-block.text` sobre `ai-block.background` | 12.63 | 15.20 | 4.5 | Pasa |
| `ai-block.icon` sobre `ai-block.background` | 6.32 | 8.96 | 3 | Pasa |
| `ai-block.border` sobre `card.background` | 4.52 | 7.37 | 3 | Pasa |
| `button.text.primary` sobre `button.background.primary` | 11.38 | 11.38 | 4.5 | Pasa |
| `button.text.default` sobre `button.background.secondary` o `card.background` | 13.58 | 16.70 | 4.5 | Pasa |
| `button.border.secondary` sobre `card.background` | 3.74 | 4.70 | 3 | Pasa |
| `button.icon.default` sobre `card.background` | 13.58 | 16.70 | 3 | Pasa |

- **Área táctil:** "Área táctil mínima de 44 × 44 px" (`monty-ds`, regla 10). Los dos botones miden 44 px de alto y todo el ancho.
- **Nunca solo color:** "Lo que genera la IA se distingue con ícono y texto, no solo con violeta" (regla 12). El chip match lleva `sparkles` y texto; el AiBlock, `sparkles` y etiqueta.
- **Lectura:** "`body/compact` (14 px) va solo en el panel de empresas, en tablas o en metadatos de una línea en móvil" (regla 11). En la Card, `body/compact` está en empresa, metadatos y unidad.
- ⚠️ 10: nivel de encabezado del `Puesto` en código. ¿Es un encabezado de la lista de matches?
- ⚠️ 11: ¿los íconos de metadatos y del chip son decorativos para lectores de pantalla? El texto ya dice el dato.

## 7. Responsive

| Plataforma | Ancho de la Card | Fuente |
| --- | --- | --- |
| Mobile | 390 px fijo en Figma. | Descripción del componente en Figma |
| Web | 6 de las 12 columnas. Con `semantic.layout.grid.gutter` Web 24 px: ancho = 6 columnas + 5 gutters. | Descripción del componente en Figma |

- Los tokens de Card no cambian entre Mobile y Web: todas las medidas valen igual.
- ⚠️ 1: en móvil, ¿la Card ocupa el ancho de contenido (pantalla − 2 × `semantic.layout.page.margin` 16 px) o queda en 390 px? En una pantalla de 360 px, 390 px no entra (ver Edge cases).

## 8. Edge cases

Con: padding 16 + 16, borde por dentro (no suma), cabecera en una fila si su ancho de contenido ≥ 200 (mínimo de `Empresa y puesto`) + 8 + ancho del chip match (144 con "92 % de match") = **352 px**, es decir, Card ≥ 384 px.

| Caso | Entrada | Qué pasa hoy (calculado) | Decisión |
| --- | --- | --- | --- |
| Pantalla 360 px | Contenido 360 − 32 = 328 px | Una Card de 390 px fijos se sale 62 px. Si llena el ancho (328): contenido 296 < 352, el chip match baja a una segunda fila, debajo del avatar. | ⚠️ 1 |
| Pantalla 390 px | Contenido 358 px | 390 fijo se sale 32 px. Si llena (358): contenido 326 < 352, el chip baja. | ⚠️ 1 |
| Pantalla 430 px | Contenido 398 px | 390 fijo entra. Si llena (398): contenido 366 ≥ 352, una fila. | ⚠️ 1 |
| Web 1024 px | Margen 32 · 12 columnas · gutter 24 → contenido 960; columna (960 − 11 × 24) / 12 = 58 px; 6 columnas = 6 × 58 + 5 × 24 = 468 px | Contenido de la Card 436 ≥ 352: cabecera en una fila; `Títulos` mide 436 − 40 − 8 − 8 − 144 = 236 px. | Figma |
| Puesto largo | "Diseñadora de producto senior" × 2 (58 caracteres) | `Puesto` crece en alto (alto automático, sin truncado). Con 156 px de ancho pasa de 2 a 4 líneas aprox. | Figma. ⚠️ 12: ¿hay un máximo de líneas? |
| Puesto en portugués | "Designer de produto sênior com foco em pesquisa" | Igual: salta de línea, no se corta. | Figma |
| Empresa larga | "Banco Itaú Unibanco Holding" | Salta de línea (alto automático). | Figma |
| Ubicación y jornada largas | "São Paulo, SP · Brasil" + "Meio período" | Cada ítem es hug y `Metadatos` hace wrap: el ítem que no entra baja a otra fila, con 4 px entre filas. Un solo ítem más ancho que 356 px no se parte (hug, no fill) y queda recortado por `Metadatos`. | Figma · ⚠️ 3 |
| Monto largo | "R$ 12.500,00" + "/ mês" | `Salario` es hug, sin wrap: entra (≈ 170 px). | Figma |
| Cantidad de chips tag | 0 · 1 · 3 · 8 | 0: `Chips` queda vacío y su gap de 8 px sigue. 8: hace wrap en filas con 8 px. | ⚠️ 13: mínimo y máximo de chips; qué pasa con 0 |
| Cantidad de razones | 2 · 3 | "Entre dos y tres razones" (`monty-ds`). Con 2, la tercera fila se oculta. | `monty-ds` · ⚠️ 14: en Figma las razones son propiedades de texto, no hay booleano para ocultar la tercera |
| Datos que faltan | `Ubicación`, `Jornada` o `Monto` vacíos | El ítem queda con su ícono y sin texto. | ⚠️ 15: ¿se oculta el ítem entero? ¿Qué se muestra si la oferta no publica salario? |
| Formato del monto | "$ 45.000 MXN" | Texto libre: el separador de miles, la moneda y el espacio los pone quien llena el dato. Cifra y unidad no se separan (`monty-ds`, regla 20). | ⚠️ 16: formato por país (MXN, BRL, COP…) y cifras tabulares en `Monto` |
| Dark | Todos los pares | Pasan (sección 6). El borde de la Card en Dark: 1.72, decorativo. | Figma · `design_tokens.json` |

## 9. Composición

| Contiene | Instancia | Spec |
| --- | --- | --- |
| Avatar | `type=company, content=initial, size=md` | `docs/handoff/avatar.md` (todavía no existe) · tokens en la sección 3 |
| Chip | `kind=match, state=default` (1) y `kind=tag, state=default` (3) | `docs/handoff/chip.md` (todavía no existe) · tokens en la sección 3 |
| AiBlock | `AiBlock` | `docs/handoff/ai-block.md` (todavía no existe) · estructura en la sección 1 |
| Button | `featured`: `variant=primary` y `variant=ghost` con `bookmark`. `list`: `variant=secondary` y `variant=ghost` | `docs/handoff/button.md` (todavía no existe) · tokens en la sección 3 |
| Icon | `map-pin`, `briefcase` (16 px) · `sparkles`, `check` (16 px, dentro de Chip y AiBlock) · `bookmark` (20 px, dentro de Button) | — |

Va en listas de matches (`list`) o sola en un detalle (`featured`). Entre Cards de una lista: `semantic.space.stack.lg` (24 px), "Entre tarjetas de una lista" (`monty-ds`).

## Pendientes

**Diseño (Figma)**
1. Ancho de la Card en móvil: 390 px fijos o el ancho de contenido. Hoy 390 px no entra en pantallas de 360 y 390 px.
2. Ancho mínimo de 200 px de `Empresa y puesto` sin token.
3. El gap entre filas de `Metadatos` usa `card/meta-icon-gap` (4 px), el token de ícono ↔ texto. ¿Es a propósito?
4. Estado `focus` de Button (token candidato `color/border/focus`).
5. Estado `pressed` de Button (token candidato `color/action/pressed` para `primary`).
6. ¿Los botones de la Card pueden estar deshabilitados?
7. Estado de carga de la Card o de "Me interesa".
8. Estado "guardado" después de "Guardar".
12. Máximo de líneas del puesto.
13. Mínimo y máximo de chips `tag`, y la Card sin chips.
14. Cómo se oculta la tercera razón en Figma (no hay booleano).

**Producto**
9. Qué pasa después de "Me interesa" y de "Ahora no" (navegación, quitar de la lista, animación).
15. Qué se muestra si falta ubicación, jornada o salario.
16. Formato del monto por país y cifras tabulares en `Monto`.

**Desarrollo y accesibilidad**
10. Nivel de encabezado del puesto.
11. Si los íconos de metadatos y del chip son decorativos para lectores de pantalla.

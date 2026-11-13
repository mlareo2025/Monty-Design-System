# Espacio, radios, elevación y layout

Datos sacados de `design_tokens.json` (`semantic.space`, `radius`, `layout`, `border-width`, `icon.size`, `size`) y de las páginas **Espacio**, **Radios**, **Elevación** y **Layout** de Figma. Todo vive en la colección **Semantic Platform**, con los modos `mobile` y `web`.

## Espacio

La unidad base es 4 px.
- `inset`: relleno interno.
- `stack`: espacio vertical entre elementos.
- `inline`: espacio horizontal entre elementos.

Solo `space/section` cambia entre Mobile y Web. **En el panel de empresas se usan los pasos chicos** (`inset/sm`, `stack/sm`).

Primitivos (no usar directo): `space/4`, `8`, `12`, `16`, `24`, `32` y `64`.

| Token | Valor | Cuándo usarlo |
| --- | --- | --- |
| `space/inset/xs` | 4 | Relleno de badges y chips pequeños. |
| `space/inset/sm` | 8 | Relleno de chips y de celdas de tabla en el panel de empresas. |
| `space/inset/md` | 12 | Relleno vertical de botones e inputs (12 + 20 + 12 = 44 px) y relleno del bloque de IA. |
| `space/inset/lg` | 16 | Relleno de tarjetas y bloques de contenido. |
| `space/inset/xl` | 24 | Relleno de modales, hojas inferiores y paneles laterales. |
| `space/stack/xs` | 4 | Entre líneas de una misma pieza: empresa y puesto, label y ayuda. |
| `space/stack/sm` | 8 | Entre elementos relacionados: label y campo, título y párrafo. En el panel, entre filas de una lista. |
| `space/stack/md` | 16 | Entre bloques dentro de una tarjeta y **entre campos de un formulario**. |
| `space/stack/lg` | 24 | Entre tarjetas de una lista. |
| `space/inline/xs` | 4 | Entre un ícono y su texto. |
| `space/inline/sm` | 8 | Entre chips y entre botones de un grupo. |
| `space/inline/md` | 16 | Entre columnas de contenido o grupos de controles en una fila. |
| `space/section` | Mobile 32 · Web 64 | Entre secciones de una pantalla. |

Los botones van apilados: el principal primero y el secundario debajo. Esta regla la decidió la diseñadora, no sale de un token. **Pendiente de confirmar:** ningún token dice qué separación vertical llevan dos botones apilados (`inline/sm` cubre solo los botones en fila). Hasta que se decida, propón la separación y no la elijas por tu cuenta.

## Radios

Esquinas sobrias que crecen con el tamaño de la pieza. **La píldora queda reservada** para chips, badges, estados y avatares de persona. Los radios no cambian entre Mobile y Web.

Primitivos (no usar directo): `radius/4`, `8`, `12` y `full` (999).

| Token | Valor | Cuándo usarlo |
| --- | --- | --- |
| `radius/control` | 4 | Botones, inputs, selectores y casillas. |
| `radius/nested` | 4 | Bloques dentro de una tarjeta: el porqué de Monty, miniaturas, alertas internas. |
| `radius/card` | 8 | Tarjetas de match, de proceso y de candidato. También el Banner. |
| `radius/surface` | 12 | Modales, hojas inferiores y paneles laterales. |
| `radius/pill` | 999 | Chips, badges de match, estados de proceso y avatares de persona. |

## Bordes

| Token | Valor | Cuándo usarlo |
| --- | --- | --- |
| `border-width/default` | 1 | Borde en reposo: controles, tarjetas y divisores. |
| `border-width/strong` | 2 | Borde que marca un estado: foco y error. |

## Elevación

**Las tarjetas son planas:** superficie (`surface/default` o `subtle`), borde `border/default` y nada de sombra. La sombra queda para lo que flota sobre el contenido. En Dark, la profundidad la da sobre todo la superficie más clara.

Son estilos de efecto de Figma, no variables. Su color está enlazado a `color/shadow/*`.

| Estilo | Sombras | Cuándo usarlo |
| --- | --- | --- |
| `elevation/raised` | 0 2 4 `shadow/soft` + 0 1 2 `shadow/soft` | Elementos fijos sobre el contenido: barra inferior, botón flotante. |
| `elevation/overlay` | 0 8 16 `shadow/soft` + 0 2 4 `shadow/soft` | Menús, popovers y toasts. |
| `elevation/modal` | 0 16 32 `shadow/strong` + 0 4 8 `shadow/soft` | Modales y hojas inferiores, **siempre con `color/overlay/scrim` detrás**. |

Barra inferior, menú, popover, toast, modal y hoja inferior **no son componentes todavía**. Que exista su elevación no autoriza a armarlos: hay que proponerlos primero.

## Layout

El estilo de grilla `layout/page` de Figma está enlazado a estos tokens. Si lo aplicas a un frame, la grilla sigue el modo de ese frame.

| Token | Mobile | Web | Cuándo usarlo |
| --- | --- | --- | --- |
| `layout/page/margin` | 16 | 32 | Margen lateral de cualquier pantalla. |
| `layout/grid/columns` | 4 | 12 | Columnas de la grilla. |
| `layout/grid/gutter` | 16 | 24 | Separación entre columnas. |
| `layout/content/max-width` | 430 | 720 | Ancho máximo del contenido de lectura: detalle de oferta, perfil, conversación con Monty. Se centra. |
| `layout/content/max-width-wide` | 430 | 1440 | Ancho máximo de listas, comparaciones y del panel de empresas. Se centra en pantallas grandes. |

Referencias de Figma:
- **Mobile, 360 px:** 4 columnas, gutter 16 y margen 16. Quedan 328 px útiles. Los anchos máximos valen 430 y nunca recortan.
- **Web, 1280 px:** es el ancho mínimo del panel. 12 columnas, gutter 24 y margen 32. La lectura se centra en 720. Las listas y el panel llegan hasta 1440.

## Tamaños

| Token | Valor | Cuándo usarlo |
| --- | --- | --- |
| `icon/size/sm` | 16 | Íconos junto a `label/sm` y `body/compact`: chips, metadatos, etiqueta del bloque de IA. |
| `icon/size/md` | 20 | Íconos dentro de botones e inputs, junto a `label/default` y `body/default`. |
| `icon/size/lg` | 24 | Íconos sueltos: navegación y barra inferior, dentro de un área táctil de 44 px. |
| `size/avatar/sm` | 32 | Listas y tablas densas del panel. |
| `size/avatar/md` | 40 | Tarjetas de match y de candidato. |
| `size/avatar/lg` | 64 | Cabecera del perfil y detalle de empresa. |

La descripción de `icon/size/lg` en Figma menciona "botones de solo ícono". La regla de Monty es que **los botones siempre llevan texto**. Usa `lg` para íconos de navegación, no para botones.

**Área táctil mínima: 44 × 44 px.** Botón e Input llegan a 44 con `inset/md` y el alto de línea de 20. Un ícono suelto de 24 necesita un área de 44 alrededor.

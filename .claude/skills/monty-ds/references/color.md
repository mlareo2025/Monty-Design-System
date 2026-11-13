# Color

Datos sacados de `design_tokens.json` y de la página **Colores** de Figma. Si este archivo no coincide con Figma, manda Figma: regenera el JSON y actualiza esta tabla.

- **Primitive:** escalas crudas con nombres en español. Solo incluyen los pasos que usa algún semántico. **No se usan directamente.**
- **Semantic:** roles con modos `light` (en `$value`) y `dark` (en `$extensions.modes.dark`).
- En código, un token se escribe `var(--` + nombre con `/` cambiado por `-` + `)`. Por ejemplo, `color/text/primary` es `var(--color-text-primary)`.
- Contraste mínimo: 4.5:1 para texto y 3:1 para bordes, íconos y foco. Las cifras son las que da el validador (Light / Dark).

## Primitivos

| Escala | Pasos (hex) |
| --- | --- |
| `neutral` | 0 `#FFFFFF` · 50 `#F9F9F9` · 100 `#F2F2F2` · 200 `#E6E6E6` · 400 `#AEAEAE` · 500 `#848484` · 600 `#6C6C6C` · 800 `#414141` · 900 `#2E2E2E` · 950 `#191919` · 1000 `#0C0C0C` |
| `lima` (marca) | 50 `#F8FFDC` · 400 `#DEF765` · 500 `#CDE24E` · 600 `#B3C33D` · 900 `#4E5210` · 950 `#2F3106` |
| `azul` | 50 `#F4F7FE` · 300 `#ABC3FE` · 400 `#86A7FE` · 600 `#3D63F5` · 700 `#3454C5` · 950 `#111F4F` |
| `violeta` (IA) | 50 `#F6F6FE` · 300 `#BFBBFE` · 400 `#A59CFF` · 600 `#7A5AF8` · 700 `#5E44C3` · 950 `#23184E` |
| `verde` | 50 `#EFFAF0` · 300 `#92D8A0` · 400 `#65C27C` · 600 `#158F44` · 700 `#057434` · 950 `#032D11` |
| `ambar` | 50 `#FFF5EA` · 300 `#F0B877` · 400 `#E19A3D` · 600 `#A46805` · 700 `#865403` · 950 `#351E01` |
| `rojo` | 50 `#FEF4F3` · 300 `#FEABA4` · 400 `#FD8079` · 600 `#C84341` · 700 `#A63131` · 950 `#421110` |
| `black-alpha` | 8 `#00000014` · 16 `#00000029` · 40 `#00000066` · 48 `#0000007A` · 64 `#000000A3` |

La lima `#DEF765` sobre blanco da 1.19:1, así que nunca se usa como texto, enlace ni foco sobre fondos claros.

## Semánticos

### Texto

| Token | Light | Dark | Cuándo usarlo |
| --- | --- | --- | --- |
| `color/text/primary` | neutral/900 `#2E2E2E` | neutral/50 `#F9F9F9` | Texto principal: títulos, cuerpo y datos. |
| `color/text/secondary` | neutral/600 `#6C6C6C` | neutral/400 `#AEAEAE` | Texto de apoyo: metadatos, fechas y ayudas de campo. |
| `color/text/disabled` | neutral/400 `#AEAEAE` | neutral/600 `#6C6C6C` | Controles deshabilitados. Nunca para información que haya que leer. |
| `color/text/on-action` | neutral/900 `#2E2E2E` | neutral/900 `#2E2E2E` | Texto sobre la acción principal (default, hover y pressed). |
| `color/text/on-action-subtle` | lima/900 `#4E5210` | lima/400 `#DEF765` | Texto sobre `action/subtle`: chip, filtro o pestaña seleccionados. |
| `color/text/on-brand` | neutral/900 `#2E2E2E` | neutral/900 `#2E2E2E` | Texto sobre `surface/brand`. |
| `color/text/link` | azul/700 `#3454C5` | azul/300 `#ABC3FE` | Enlaces dentro de un texto. Siempre subrayados. |

### Superficie

| Token | Light | Dark | Cuándo usarlo |
| --- | --- | --- | --- |
| `color/surface/default` | neutral/0 `#FFFFFF` | neutral/950 `#191919` | Fondo de la página. |
| `color/surface/subtle` | neutral/50 `#F9F9F9` | neutral/900 `#2E2E2E` | Tarjetas y secciones que se separan del fondo. |
| `color/surface/sunken` | neutral/100 `#F2F2F2` | neutral/1000 `#0C0C0C` | Zonas hundidas dentro de una tarjeta: avatares y pistas de progreso. |
| `color/surface/hover` | neutral/100 `#F2F2F2` | neutral/800 `#414141` | Hover de filas, botones secundarios y ghost. |
| `color/surface/brand` | lima/400 `#DEF765` | lima/400 `#DEF765` | Momentos de marca no clicables: bienvenida, celebraciones, mascota. Nunca una acción. Una por vista. |

### Acción

| Token | Light | Dark | Cuándo usarlo |
| --- | --- | --- | --- |
| `color/action/default` | lima/400 `#DEF765` | lima/400 `#DEF765` | Fondo de la acción principal. Una sola por vista. Texto encima: `text/on-action`. |
| `color/action/hover` | lima/500 `#CDE24E` | lima/500 `#CDE24E` | Acción principal con el cursor encima. |
| `color/action/pressed` | lima/600 `#B3C33D` | lima/600 `#B3C33D` | Acción principal mientras se presiona. |
| `color/action/disabled` | neutral/200 `#E6E6E6` | neutral/800 `#414141` | Acción que todavía no se puede usar. Texto encima: `text/disabled`. |
| `color/action/subtle` | lima/50 `#F8FFDC` | lima/950 `#2F3106` | Elemento seleccionado: chip, filtro o pestaña activa. Texto encima: `text/on-action-subtle`. |

### Borde

| Token | Light | Dark | Cuándo usarlo |
| --- | --- | --- | --- |
| `color/border/default` | neutral/200 `#E6E6E6` | neutral/800 `#414141` | Divisores y contorno de tarjetas (que no llevan sombra). No marca el límite de un control. |
| `color/border/strong` | neutral/500 `#848484` | neutral/500 `#848484` | Borde de controles: inputs, botón secundario, casillas. |
| `color/border/focus` | azul/600 `#3D63F5` | azul/400 `#86A7FE` | Anillo de foco de cualquier control con teclado. |

### IA (solo lo que genera o decide Monty)

| Token | Light | Dark | Cuándo usarlo |
| --- | --- | --- | --- |
| `color/ai/surface` | violeta/50 `#F6F6FE` | violeta/950 `#23184E` | Fondo de un bloque que escribió o decidió Monty: el porqué de un match, el badge de match. |
| `color/ai/text` | violeta/700 `#5E44C3` | violeta/300 `#BFBBFE` | Etiqueta de un bloque de IA. Siempre con ícono y texto. |
| `color/ai/border` | violeta/600 `#7A5AF8` | violeta/400 `#A59CFF` | Borde que delimita un bloque de IA. |

### Feedback

Hay cuatro tipos, cada uno con `text`, `surface` y `border`. **Un rechazo no es un error:** no usa `feedback/error`.

| Tipo | Para qué | `text` (L / D) | `surface` (L / D) | `border` (L / D) |
| --- | --- | --- | --- | --- |
| `success` | Avances del proceso y confirmaciones | verde/700 `#057434` / verde/300 `#92D8A0` | verde/50 `#EFFAF0` / verde/950 `#032D11` | verde/600 `#158F44` / verde/400 `#65C27C` |
| `warning` | Requiere atención pero no bloquea | ambar/700 `#865403` / ambar/300 `#F0B877` | ambar/50 `#FFF5EA` / ambar/950 `#351E01` | ambar/600 `#A46805` / ambar/400 `#E19A3D` |
| `error` | Errores del sistema o de un campo | rojo/700 `#A63131` / rojo/300 `#FEABA4` | rojo/50 `#FEF4F3` / rojo/950 `#421110` | rojo/600 `#C84341` / rojo/400 `#FD8079` |
| `info` | Información neutra del sistema | azul/700 `#3454C5` / azul/300 `#ABC3FE` | azul/50 `#F4F7FE` / azul/950 `#111F4F` | azul/600 `#3D63F5` / azul/400 `#86A7FE` |

### Ícono

| Token | Light | Dark | Cuándo usarlo |
| --- | --- | --- | --- |
| `color/icon/default` | neutral/900 | neutral/50 | Íconos junto a texto principal y en la navegación. |
| `color/icon/secondary` | neutral/600 | neutral/400 | Íconos de metadatos (ubicación, fecha, modalidad) y dentro de un campo. |
| `color/icon/disabled` | neutral/400 | neutral/600 | Controles deshabilitados. |
| `color/icon/on-action` | neutral/900 | neutral/900 | Sobre la acción principal. |
| `color/icon/on-action-subtle` | lima/900 | lima/400 | Sobre `action/subtle`. |
| `color/icon/ai` | violeta/700 | violeta/300 | Marca lo que hizo Monty. Siempre junto a una etiqueta de texto. |
| `color/icon/success` · `warning` · `error` · `info` | igual que `feedback/*/text` | igual que `feedback/*/text` | Acompañan al texto del mensaje, nunca lo reemplazan. |

### Sombra y scrim

| Token | Light | Dark | Cuándo usarlo |
| --- | --- | --- | --- |
| `color/shadow/soft` | black-alpha/8 | black-alpha/40 | Sombras de `elevation/raised` y `overlay`. Solo dentro de estilos de efecto. |
| `color/shadow/strong` | black-alpha/16 | black-alpha/64 | Sombra principal de `elevation/modal`. Solo dentro de estilos de efecto. |
| `color/overlay/scrim` | black-alpha/48 | black-alpha/64 | Oscurece la pantalla detrás de un modal u hoja inferior. |

## Contraste de los pares semánticos

| Par | Mín. | Light | Dark |
| --- | --- | --- | --- |
| text/primary sobre surface/default | 4.5 | 13.58 | 16.70 |
| text/primary sobre surface/subtle | 4.5 | 12.90 | 12.90 |
| text/primary sobre surface/sunken | 4.5 | 12.13 | 18.58 |
| text/primary sobre surface/hover | 4.5 | 12.13 | 9.70 |
| text/secondary sobre surface/default | 4.5 | 5.25 | 7.92 |
| text/secondary sobre surface/subtle | 4.5 | **4.99** (el más justo) | 6.12 |
| text/link sobre surface/default | 4.5 | 6.52 | 10.02 |
| text/on-action sobre action/default · hover · pressed | 4.5 | 11.38 · 9.43 · 6.98 | igual |
| text/on-action-subtle sobre action/subtle | 4.5 | 8.01 | 11.26 |
| text/on-brand sobre surface/brand | 4.5 | 11.38 | 11.38 |
| ai/text sobre ai/surface | 4.5 | 6.32 | 8.96 |
| feedback success · warning · error · info (text sobre surface) | 4.5 | 5.52 · 5.94 · 6.26 · 6.08 | 9.05 · 8.84 · 8.77 · 8.98 |
| border/strong sobre surface/default | 3 | 3.74 | 4.70 |
| border/focus sobre surface/default | 3 | 4.88 | 7.51 |
| icon/secondary sobre surface/default | 3 | 5.25 | 7.92 |

Los pares de cada componente están en `references/componentes.md`. La lista completa (71 pares) está en `scripts/validador.config.json`.

## Combinaciones fuera de la tabla

Si una pantalla pone un texto sobre un fondo que no está en esta tabla (por ejemplo, `text/secondary` sobre `surface/sunken`), no supongas que pasa. Calcula el contraste en Light y Dark. Si es un caso que se va a repetir, propón sumar el par a `scripts/validador.config.json`.

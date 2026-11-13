# Button

> Acción que la persona ejecuta. Siempre lleva texto.

| | |
| --- | --- |
| Figma | [Button · nodo 17:21](https://www.figma.com/design/tjoqkswERatCimnCp827TF/Monty-DS?node-id=17-21) · página Componentes |
| Leído | 2026-11-13 |
| Tokens | `button/*` |
| Estado | Aprobada el 2026-11-13 (ficha de referencia) |

## 1. Qué es

El botón es la forma de ejecutar una acción: postular, guardar, preparar una entrevista. Tiene tres variantes según el peso de la acción y mide 44 px de alto (12 + 20 + 12), que es el área táctil mínima.

## 2. Cuándo usarlo

- Para la acción principal de una vista, con `primary`: "Me interesa", "Preparar entrevista".
- Para acciones alternativas a la principal, con `secondary`.
- Para acciones de poco peso, con `ghost`: "Guardar" (con `bookmark`) en una Card `featured`, "Ahora no" en una Card `list`.

## 3. Cuándo no usarlo

- Para una acción de solo ícono → no existe. Todo botón lleva texto. La única acción de solo ícono es el cierre `x` del Banner, que es parte del Banner.
- Para un enlace dentro de un texto → texto con `color/text/link`, siempre subrayado.
- Para filtrar una lista → Chip `kind: filter`.
- Para varias acciones principales en una lista de matches → Card `context: list`, que usa `secondary` y no trae `primary`.
- Para navegar (pestañas, barra inferior) → no existen todavía; se proponen antes de usarlas.
- ⚠️ Por confirmar: si "Volver" es un Button `ghost` con `arrow-left` o es otra pieza.

## 4. Variantes

| Variante | Para qué |
| --- | --- |
| `primary` | La acción principal. **Una sola por vista.** En móvil ocupa todo el ancho. |
| `secondary` | Acciones alternativas. Lleva borde. |
| `ghost` | Acciones de poco peso, sin borde ni fondo en reposo. |

## 5. Estados

| Variante | Estado | Cuándo se ve | Fondo | Borde | Texto | Ícono |
| --- | --- | --- | --- | --- | --- | --- |
| `primary` | `default` | En reposo. | `button/background/primary` (`color/action/default`) | — | `button/text/primary` (`color/text/on-action`) | `button/icon/primary` (`color/icon/on-action`) |
| `primary` | `hover` | Con el cursor encima. | `button/background/primary-hover` (`color/action/hover`) | — | `button/text/primary` | `button/icon/primary` |
| `primary` | `disabled` | Falta algo para continuar. | `button/background/disabled` (`color/action/disabled`) | — | `button/text/disabled` (`color/text/disabled`) | `button/icon/disabled` (`color/icon/disabled`) |
| `secondary` | `default` | En reposo. | `button/background/secondary` (`color/surface/default`) | `button/border/secondary` (`color/border/strong`), 1 px | `button/text/default` (`color/text/primary`) | `button/icon/default` (`color/icon/default`) |
| `secondary` | `hover` | Con el cursor encima. | `button/background/hover` (`color/surface/hover`) | `button/border/secondary`, 1 px | `button/text/default` | `button/icon/default` |
| `secondary` | `disabled` | Falta algo para continuar. | `button/background/disabled` | — (en Figma el disabled no lleva borde) | `button/text/disabled` | `button/icon/disabled` |
| `ghost` | `default` | En reposo. | — | — | `button/text/default` | `button/icon/default` |
| `ghost` | `hover` | Con el cursor encima. | `button/background/hover` | — | `button/text/default` | `button/icon/default` |
| `ghost` | `disabled` | Falta algo para continuar. | — | — | `button/text/disabled` | `button/icon/disabled` |

- ⚠️ Por confirmar: no hay estado `pressed` ni `focus` en Figma. En código, `pressed` usa `color/action/pressed` y el foco es un anillo `color/border/focus`, pero ninguno tiene token `button/*`.

## 6. Anatomía

| # | Parte | Capa en Figma | Obligatoria | Tokens |
| --- | --- | --- | --- | --- |
| 1 | Contenedor | el componente (`variant=…, state=…`) | Sí | Fondo y borde según la tabla de estados · `button/padding-x` → `space/inset/lg` (16) · `button/padding-y` → `space/inset/md` (12) · `button/radius` → `radius/control` (4) · `button/border-width` → `border-width/default` (1) · `button/gap` → `space/inline/xs` (4) |
| 2 | Ícono | `Ícono` (instancia de Icon) | No: se muestra con `Mostrar ícono` | `button/icon-size` → `icon/size/md` (20) · color según la tabla de estados |
| 3 | Etiqueta | `Etiqueta` (texto) | Sí | Estilo `label/default` (Inter 600, 16/20) · color según la tabla de estados |

El ícono va antes del texto.

## 7. Propiedades en Figma

| Propiedad | Tipo | Valores | Por defecto | Nota |
| --- | --- | --- | --- | --- |
| `variant` | Variante | `primary`, `secondary`, `ghost` | `primary` | |
| `state` | Variante | `default`, `hover`, `disabled` | `default` | |
| `Etiqueta` | Texto | — | "Me interesa" | Un verbo concreto, en una línea. |
| `Mostrar ícono` | Booleano | sí / no | no | |
| `Ícono` | Cambio de instancia | íconos del set Icon | `calendar` | Solo se ve con `Mostrar ícono`. |

## 8. Reglas de uso

- **Siempre lleva texto.** El ícono es opcional y va antes del texto.
- **Un solo `primary` por vista.** Las demás acciones son `secondary` o `ghost`.
- **Orden:** el principal primero y el secundario debajo. Apilados, en Card, van separados por `card/actions-gap` (8).
- **En móvil, el `primary` ocupa todo el ancho.**
- Etiqueta en `label/default`, en una línea, con un verbo concreto ("Me interesa", "Preparar entrevista"). Si no entra, se acorta el texto: no se achica la tipografía ni se agranda el botón. En portugués de Brasil el texto puede ser un 20–30 % más largo.
- `disabled` solo cuando falta algo para continuar, y la pantalla dice qué falta.
- Solo tokens `button/*`. Nunca un `#hex` ni un primitivo.

## 9. Accesibilidad

- **Área táctil:** 44 px de alto en las tres variantes. En código, el borde del `secondary` no suma altura (`box-sizing: border-box` o un borde con `box-shadow: inset`).
- **Contraste** (Light / Dark): texto del `primary` 11.38 / 11.38 (9.43 en `hover`); texto de `secondary` y `ghost` 13.58 / 16.70 (12.13 / 9.70 en `hover`); borde del `secondary` 3.74 / 4.70. `disabled` está exento por WCAG.
- **Nunca solo color:** el texto dice la acción; el ícono acompaña.
- **Nombre accesible:** como siempre lleva texto, la etiqueta es el nombre del botón.
- ⚠️ Por confirmar: estado `focus` en Figma y su token (`button/border-focus` o similar). Hoy el anillo de foco solo está definido como `color/border/focus` para código.
- ⚠️ Por confirmar: si el ícono es decorativo en código (oculto para lectores de pantalla) en todos los casos.

## 10. Relacionados

- **Icon**: el ícono opcional sale del set Icon, a 20 px.
- **Card**: apila "Me interesa" y "Guardar" o "Ahora no"; en `list` no lleva `primary`.
- **Chip**: `kind: filter` es lo que se usa para filtrar, no un botón.
- **Banner**: su acción es un enlace subrayado ("Reintentar"), no un botón, y su cierre `x` es la única acción de solo ícono.

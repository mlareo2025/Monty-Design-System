# Componentes

Datos sacados de `design_tokens.json` (`component.*`) y de la página **Componentes** de Figma (component sets y la referencia en Light y Dark).

**Solo existen estos seis.** Cualquier otra pieza (Card, lista, barra inferior, pestañas, modal, hoja inferior, toast, select, casilla, bloque de IA, badge de match) **no existe**. Hay que detenerse y proponerla, como explica la sección "Si falta un token o un componente" de `SKILL.md`.

- Los tokens `component` apuntan siempre a un semántico, así que los modos Light y Dark los resuelve el semántico. Los valores de las tablas son los de Light.
- En código, `button/background/primary` se escribe `var(--button-background-primary)`.
- Las propiedades y los valores de las variantes van en inglés, igual que en Figma.

| Componente | Propiedades en Figma |
| --- | --- |
| Button | `variant`: primary, secondary, ghost · `state`: default, hover, disabled |
| Input | `state`: default, focus, error, disabled |
| Icon | `name`: 21 íconos (lista abajo) |
| Chip | `kind`: tag, filter · `state`: default, hover, selected (hover y selected solo en filter) |
| Avatar | `type`: person, company · `content`: initial, image · `size`: sm, md, lg |
| Banner | `type`: success, warning, error, info |

---

## Button

Acción que el usuario ejecuta. Mide 44 px de alto: 12 + 20 + 12.

**Reglas de uso**
- **Siempre lleva texto.** No hay botones de solo ícono. El ícono es opcional y va antes del texto.
- **Un solo `primary` por vista.** Las demás acciones son `secondary` (con borde) o `ghost` (sin borde, para acciones de menor peso como "Guardar").
- **Orden:** primero el principal y debajo el secundario.
- **En móvil, el `primary` ocupa todo el ancho.**
- Texto en `label/default`, en una línea, con un verbo concreto ("Me interesa", "Preparar entrevista"). Si no entra, se acorta.
- `disabled` solo cuando falta algo para continuar, y la pantalla tiene que decir qué falta.

**Tokens**

| Token | → Semántico | Uso |
| --- | --- | --- |
| `button/background/primary` | `color/action/default` | Fondo del principal. |
| `button/background/primary-hover` | `color/action/hover` | Principal con hover. |
| `button/background/secondary` | `color/surface/default` | Fondo del secundario. |
| `button/background/hover` | `color/surface/hover` | Hover de secundario y ghost. |
| `button/background/disabled` | `color/action/disabled` | Fondo de primario y secundario deshabilitados. |
| `button/border/secondary` | `color/border/strong` | Borde del secundario. |
| `button/text/primary` | `color/text/on-action` | Texto del principal. |
| `button/text/default` | `color/text/primary` | Texto de secundario y ghost. |
| `button/text/disabled` | `color/text/disabled` | Texto deshabilitado. |
| `button/icon/primary` · `default` · `disabled` | `color/icon/on-action` · `icon/default` · `icon/disabled` | Ícono según variante y estado. |
| `button/icon-size` | `icon/size/md` (20) | Tamaño del ícono. |
| `button/radius` | `radius/control` (4) | Esquinas. |
| `button/padding-x` | `space/inset/lg` (16) | Relleno lateral. |
| `button/padding-y` | `space/inset/md` (12) | Relleno vertical, que da 44 px de alto. |
| `button/gap` | `space/inline/xs` (4) | Entre el ícono y el texto. |
| `button/border-width` | `border-width/default` (1) | Borde del secundario. |

En Figma no hay estado `pressed` ni `focus` en el component set. Para código: `pressed` usa `color/action/pressed` y el foco es un anillo `color/border/focus`. Ninguno de los dos tiene todavía un token `component`. Si hace falta, propónlo.

Contraste (L / D): texto del principal 11.38 / 11.38, texto del secundario 13.58 / 16.70 y borde del secundario 3.74 / 4.70.

---

## Input

Campo de texto con label, campo, y ayuda o error. El campo mide 48 px de alto: 12 + 24 + 12.

**Reglas de uso**
- **El label siempre está visible**, encima del campo, en `label/sm`. El placeholder es solo un ejemplo y nunca reemplaza al label.
- **Los obligatorios llevan asterisco** (`*`) en el label.
- **Ayuda** debajo del campo (`input/help`), opcional y corta.
- **El error siempre lleva texto** que dice qué pasó y cómo arreglarlo, con un ejemplo: "Falta el dominio. Escribe algo como ana@mail.com." Va con el ícono `alert-triangle`, un borde de 2 px y color de error. El texto reemplaza a la ayuda.
- El foco usa un borde de 2 px en `border/focus`.
- Ícono opcional dentro del campo, a la izquierda (por ejemplo, `search`).
- Entre campos de un formulario va `space/stack/md`.

**Tokens**

| Token | → Semántico | Uso |
| --- | --- | --- |
| `input/background` · `background-disabled` | `color/surface/default` · `surface/sunken` | Fondo. |
| `input/border` | `color/border/strong` | Borde en reposo. |
| `input/border-focus` | `color/border/focus` | Borde con foco (2 px). |
| `input/border-error` | `color/feedback/error/border` | Borde con error (2 px). |
| `input/border-disabled` | `color/border/default` | Borde deshabilitado. |
| `input/label` | `color/text/primary` | Label (`label/sm`). |
| `input/text` | `color/text/primary` | Valor escrito (`body/default`). |
| `input/text-disabled` | `color/text/disabled` | Label, valor y ayuda deshabilitados. |
| `input/help` | `color/text/secondary` | Ayuda. |
| `input/help-error` | `color/feedback/error/text` | Mensaje de error. |
| `input/icon` · `icon-disabled` · `icon-error` | `color/icon/secondary` · `icon/disabled` · `icon/error` | Íconos. |
| `input/icon-size` | `icon/size/md` (20) | Ícono del campo y del error. |
| `input/radius` | `radius/control` (4) | Esquinas. |
| `input/padding-x` · `padding-y` | `space/inset/md` (12) | Relleno. |
| `input/gap` | `space/stack/sm` (8) | Entre label, campo y ayuda. |
| `input/icon-gap` | `space/inline/sm` (8) | Entre el ícono y el valor. |
| `input/message-gap` | `space/inline/xs` (4) | Entre el ícono de error y el mensaje. |
| `input/border-width` · `border-width-focus` | `border-width/default` (1) · `strong` (2) | Grosor. |

No existe un token para el asterisco de obligatorio. Usa el color del label (`input/label`). Si tiene que ser de otro color, propón un token.

Contraste (L / D): label y valor 13.58 / 16.70, ayuda 5.25 / 7.92, error 6.76 / 9.69, borde 3.74 / 4.70, foco 4.88 / 7.51.

---

## Icon

Ícono suelto de trazo. **Solo estos 21.** No uses íconos de otra librería ni dibujes uno nuevo. Si falta alguno, propónlo.

`sparkles` · `circle-check` · `check` · `alert-triangle` · `info-circle` · `x` · `chevron-right` · `chevron-down` · `search` · `user` · `briefcase` · `map-pin` · `calendar` · `bell` · `message-circle` · `bookmark` · `eye` · `eye-off` · `arrow-left` · `plus` · `mail`

**Usos fijos**
- `sparkles`: marca lo que hizo Monty. Siempre en `color/icon/ai`, con etiqueta.
- `circle-check`, `alert-triangle` e `info-circle`: Banner de éxito, aviso o error, e información.
- `alert-triangle`: error de Input.
- `check`: Chip filtro seleccionado.
- `x`: cerrar un Banner.

**Tokens:**
- `icon/color` → `color/icon/default`. Quien usa el ícono puede reemplazarlo por otro token de `color/icon/*`.
- `icon/size-sm` · `md` · `lg` → `icon/size/*` (16, 20 y 24).

Un ícono nunca es la única forma de comunicar algo: siempre va con texto.

---

## Chip

Hay dos tipos, que se definen con `kind`:
- **`tag`:** informa y no se toca. Modalidad, seniority, habilidades: "Remoto", "Junior", "Figma". Mide 28 px de alto.
- **`filter`:** se toca para filtrar y tiene los estados `default`, `hover` y `selected`. Mide 44 px de alto, que es el área táctil. El seleccionado lleva el ícono `check` y fondo `action/subtle`.

**Reglas de uso**
- Texto en `label/sm`, en una línea y corto.
- Ícono opcional de 16 px antes del texto.
- La selección nunca se marca solo con color: lleva `check`.
- Entre chips va `space/inline/sm`.
- Para un badge de match o un chip de IA no hay variante. Propónla.

**Tokens**

| Token | → Semántico | Uso |
| --- | --- | --- |
| `chip/background/tag` | `color/surface/sunken` | Fondo del tag. |
| `chip/background/filter` · `filter-hover` | `color/surface/default` · `surface/hover` | Fondo del filtro. |
| `chip/background/selected` | `color/action/subtle` | Filtro seleccionado. |
| `chip/border/filter` | `color/border/strong` | Borde del filtro. |
| `chip/text/default` · `selected` | `color/text/primary` · `text/on-action-subtle` | Texto. |
| `chip/icon/default` · `selected` | `color/icon/secondary` · `icon/on-action-subtle` | Ícono. |
| `chip/icon-size` | `icon/size/sm` (16) | Tamaño del ícono. |
| `chip/radius` | `radius/pill` | Píldora. |
| `chip/padding-x` | `space/inset/md` (12) | Relleno lateral. |
| `chip/padding-y-tag` · `padding-y-filter` | `space/inset/xs` (4) · `inset/md` (12) | Relleno vertical (28 o 44 px de alto). |
| `chip/gap` | `space/inline/xs` (4) | Entre el ícono y el texto. |
| `chip/border-width` | `border-width/default` (1) | Borde del filtro. |

Contraste (L / D): tag 12.13 / 18.58, seleccionado 8.01 / 11.26 y borde del filtro 3.74 / 4.70.

---

## Avatar

**La forma dice quién es.** El círculo es siempre una persona. El cuadrado con radio 4 es siempre una empresa.

| `type` | Forma | `content: initial` | `content: image` |
| --- | --- | --- | --- |
| `person` | círculo (`radius/pill`) | inicial en `lima/900` sobre `action/subtle` | foto de la persona |
| `company` | cuadrado (`radius/control`) | inicial sobre `surface/sunken`, con borde | logo, con borde `border/default` |

| `size` | Valor | Dónde |
| --- | --- | --- |
| `sm` | 32 | Listas y tablas densas del panel. |
| `md` | 40 | Tarjetas de match y de candidato. |
| `lg` | 64 | Cabecera del perfil y detalle de empresa. |

**Tokens:**
- Fondo: `avatar/background/person` → `action/subtle` y `background/company` → `surface/sunken`.
- Texto: `avatar/text/person` → `text/on-action-subtle` y `text/company` → `text/primary`.
- Borde: `avatar/border` → `border/default`, con `avatar/border-width` de 1.
- Radio: `avatar/radius/person` → `pill` y `radius/company` → `control`.
- Tamaño: `avatar/size-sm` · `md` · `lg` → `size/avatar/*`.

Con imagen, el `alt` en código es el nombre de la persona o de la empresa.

---

## Banner

Mensaje del sistema que va arriba de una pantalla o de una sección. Hay cuatro tipos. **Siempre lleva ícono y texto**, y nunca solo color.

| `type` | Ícono | Para qué |
| --- | --- | --- |
| `success` | `circle-check` | Avances del proceso y confirmaciones ("Tu perfil está listo"). |
| `warning` | `alert-triangle` | Algo requiere atención pero no bloquea ("Te falta subir tu CV"). |
| `error` | `alert-triangle` | Errores del sistema ("No pudimos guardar los cambios"). **Un rechazo no es un error.** |
| `info` | `info-circle` | Información neutra ("Nubank vio tu perfil"). |

**Estructura:** ícono, título y mensaje. Los estilos de texto se toman del componente en Figma, porque ningún token los fija. Opcionalmente un enlace de acción subrayado ("Subir CV", "Reintentar") y el ícono `x` para cerrar.

**Reglas de uso**
- El título dice qué pasó y el mensaje dice qué sigue. Concisos y sin culpar a la persona.
- Un error siempre ofrece una salida ("Revisa tu conexión y vuelve a intentarlo", con "Reintentar").
- Un rechazo de una empresa se cuenta con `info` o con un mensaje positivo y un paso siguiente, nunca con `error`.
- El cierre `x` es parte del componente. Es la única acción de solo ícono permitida y necesita un área táctil de 44 px.

**Tokens**

| Token | → Semántico | Uso |
| --- | --- | --- |
| `banner/background/<type>` | `color/feedback/<type>/surface` | Fondo. |
| `banner/border/<type>` | `color/feedback/<type>/border` | Borde. |
| `banner/icon/<type>` | `color/icon/<type>` | Ícono. |
| `banner/text` | `color/text/primary` | Título y mensaje. |
| `banner/link` | `color/text/link` | Enlace de acción, subrayado. |
| `banner/close` | `color/icon/secondary` | Ícono de cerrar. |
| `banner/icon-size` | `icon/size/md` (20) | Ícono y cierre. |
| `banner/radius` | `radius/card` (8) | Esquinas. |
| `banner/border-width` | `border-width/default` (1) | Borde. |
| `banner/padding` | `space/inset/lg` (16) | Relleno. |
| `banner/gap` | `space/inline/sm` (8) | Entre el ícono, el contenido y el cierre. |
| `banner/text-gap` | `space/stack/xs` (4) | Entre el título y el mensaje. |

Contraste (L / D): texto ≥ 12.58 / 14.38, enlace ≥ 6.04 / 8.63, ícono ≥ 5.52 / 8.77 y cierre ≥ 4.86 / 6.82.

---

## Lo que todavía no existe

Estas piezas aparecen en las descripciones de Figma, pero **no son componentes**. Antes de usarlas, propónlas:

| Pieza | Pistas que ya hay en Figma |
| --- | --- |
| Card (tarjeta de match, de proceso o de candidato) | `radius/card`, `border/default`, sin sombra, `inset/lg`, `heading/sm` |
| Bloque de IA (el porqué de Monty) | `color/ai/*`, `sparkles`, `radius/nested`, `inset/md` |
| Badge de match | `color/ai/surface`, `radius/pill` |
| Barra inferior, botón flotante | `elevation/raised` |
| Menú, popover, toast | `elevation/overlay` |
| Modal, hoja inferior, panel lateral | `elevation/modal`, `radius/surface`, `inset/xl`, `color/overlay/scrim` |
| Pestañas, casilla, selector | `action/subtle`, `radius/control` |

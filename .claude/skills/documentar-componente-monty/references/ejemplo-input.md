# Input

> Campo de texto con label, campo y ayuda o mensaje de error.

| | |
| --- | --- |
| Figma | [Input · nodo 17:42](https://www.figma.com/design/tjoqkswERatCimnCp827TF/Monty-DS?node-id=17-42) · página Componentes |
| Leído | 2026-11-13 |
| Tokens | `input/*` |
| Estado | Aprobada el 2026-11-13 (ficha de referencia) |

## 1. Qué es

El campo donde la persona escribe un dato: su email, una búsqueda, su ciudad. Siempre trae su label visible encima y, debajo, una ayuda o el mensaje de error. El campo mide 48 px de alto (12 + 24 + 12).

## 2. Cuándo usarlo

- Para pedir un dato que la persona escribe: email, nombre, ciudad.
- Para buscar, con el ícono `search` dentro del campo.
- En formularios, uno debajo de otro, separados por `space/stack/md` (16).

## 3. Cuándo no usarlo

- Para elegir entre opciones fijas (selector, casilla) → no existen todavía; se proponen antes de usarlas.
- Para filtrar una lista con opciones conocidas → Chip `kind: filter`.
- Para avisar de un error del sistema (no se pudo guardar) → Banner `type: error`. El error del Input es solo del dato de ese campo.
- ⚠️ Por confirmar: texto largo de varias líneas (área de texto). No hay variante en Figma.

## 4. Variantes

Input no tiene propiedad de variante: una sola forma. Lo que cambia es `state` y si muestra ícono.

| Configuración | Para qué |
| --- | --- |
| Sin ícono (`Mostrar ícono`: no) | La mayoría de los campos. |
| Con ícono (`Mostrar ícono`: sí) | Cuando el ícono ayuda a reconocer el campo, como `search` en una búsqueda. Va a la izquierda. |

## 5. Estados

| Estado | Cuándo se ve | Fondo | Borde | Label y valor | Ayuda o mensaje | Ícono |
| --- | --- | --- | --- | --- | --- | --- |
| `default` | En reposo. | `input/background` (`color/surface/default`) | `input/border` (`color/border/strong`), 1 px | `input/label` y `input/text` (`color/text/primary`) | `input/help` (`color/text/secondary`) | `input/icon` (`color/icon/secondary`) |
| `focus` | Mientras la persona escribe. | `input/background` | `input/border-focus` (`color/border/focus`), 2 px | `input/label` y `input/text` | `input/help` | `input/icon` |
| `error` | El dato no es válido. La ayuda se reemplaza por el mensaje. | `input/background` | `input/border-error` (`color/feedback/error/border`), 2 px | `input/label` y `input/text` | `input/help-error` (`color/feedback/error/text`) | `input/icon-error` (`color/icon/error`) en `alert-triangle` |
| `disabled` | El campo no se puede editar. | `input/background-disabled` (`color/surface/sunken`) | `input/border-disabled` (`color/border/default`), 1 px | `input/text-disabled` (`color/text/disabled`) | `input/text-disabled` | `input/icon-disabled` (`color/icon/disabled`) |

- En Figma, el borde de 2 px de `error` usa la variable `input/border-width-focus`, la misma que `focus`.
- ⚠️ Por confirmar: estado vacío con placeholder. No hay variante en Figma ni token para el color del placeholder.
- ⚠️ Por confirmar: cuándo usar `disabled`. Ni Figma ni monty-ds lo dicen.

## 6. Anatomía

| # | Parte | Capa en Figma | Obligatoria | Tokens |
| --- | --- | --- | --- | --- |
| 1 | Label | `Label` (texto) | Sí | Estilo `label/sm` (Inter 600, 14/20) · `input/label` |
| 2 | Campo | `Campo` (marco) | Sí | Fondo y borde según estado · `input/padding-x` y `input/padding-y` → `space/inset/md` (12) · `input/radius` → `radius/control` (4) · `input/border-width` → `border-width/default` (1) · `input/border-width-focus` → `border-width/strong` (2) |
| 3 | Ícono | `Ícono` (instancia de Icon) | No: se muestra con `Mostrar ícono` | `input/icon-size` → `icon/size/md` (20) · `input/icon-gap` → `space/inline/sm` (8) |
| 4 | Valor | `Valor` (texto) | Sí | Estilo `body/default` (Inter 400, 16/24) · `input/text` |
| 5 | Ayuda | `Ayuda` (texto) | No | Estilo `body/default` · `input/help`. Se oculta en `error`. |
| 6 | Mensaje de error | `Mensaje` (marco con `alert-triangle` y `Mensaje de error`) | Solo en `error` | Estilo `body/default` · `input/help-error` · `input/message-gap` → `space/inline/xs` (4) |

Entre label, campo y ayuda va `input/gap` → `space/stack/sm` (8).

## 7. Propiedades en Figma

| Propiedad | Tipo | Valores | Por defecto | Nota |
| --- | --- | --- | --- | --- |
| `state` | Variante | `default`, `focus`, `error`, `disabled` | `default` | |
| `Label` | Texto | — | "Email" | Los obligatorios llevan `*`. |
| `Valor` | Texto | — | "ana@mail.com" | |
| `Ayuda` | Texto | — | "Usaremos este correo para avisarte de nuevos matches." | Opcional y corta. |
| `Mensaje de error` | Texto | — | "Falta el dominio. Escribe algo como ana@mail.com." | Solo se ve en `error`. |
| `Mostrar ícono` | Booleano | sí / no | no | |
| `Ícono` | Cambio de instancia | íconos del set Icon | `search` | Solo se ve con `Mostrar ícono`. |

- ⚠️ Por confirmar: no hay propiedad para marcar un campo obligatorio. Falta decidir si el `*` se escribe dentro de `Label`.

## 8. Reglas de uso

- **El label siempre está visible**, encima del campo. El placeholder es solo un ejemplo y nunca reemplaza al label.
- **Los obligatorios llevan asterisco** (`*`) en el label, del mismo color que el label (`input/label`). No hay token propio para el asterisco.
- **La ayuda es opcional y corta.**
- **El error siempre lleva texto** que dice qué pasó y cómo arreglarlo, con un ejemplo: "Falta el dominio. Escribe algo como ana@mail.com." Va con `alert-triangle`, borde de 2 px y color de error, y reemplaza a la ayuda.
- Sin mensajes negativos y sin cortar el mensaje con "…" (reglas 19 y 20 de monty-ds).
- Solo tokens `input/*`.

## 9. Accesibilidad

- **Contraste** (Light / Dark): label y valor 13.58 / 16.70; ayuda 5.25 / 7.92; error 6.76 / 9.69; borde 3.74 / 4.70; foco 4.88 / 7.51. `disabled` está exento por WCAG.
- **Foco visible:** borde de 2 px en `color/border/focus`.
- **Nunca solo color:** el error lleva texto e ícono además del rojo.
- **Lectura:** el valor, la ayuda y el error están en `body/default` (16 px), el mínimo de lectura en móvil.
- ⚠️ Por confirmar: área táctil. El campo mide 48 px de alto; el ancho no está definido (en Figma mide 320 px).
- ⚠️ Por confirmar: cómo se conecta en código el label con el campo y el mensaje de error con el campo (para que el lector de pantalla los anuncie). No está en Figma ni en monty-ds.

## 10. Relacionados

- **Icon**: el ícono del campo (`search`) y el `alert-triangle` del error salen del set Icon, a 20 px.
- **Banner**: para errores del sistema, no del dato de un campo.
- **Button**: envía el formulario. Si está `disabled`, la pantalla dice qué campo falta.
- **Chip**: `kind: filter` cuando las opciones son conocidas.

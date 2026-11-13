# Monty Design System

## Qué es

Monty es un agente de búsqueda de empleo con IA para profesionales de Latinoamérica y España. Este proyecto guarda los tokens de su design system en formato DTCG y el validador que los revisa. Sirven para que una persona o Claude construya una pantalla que se sienta Monty sin preguntar.

Plataformas: iOS, Android y web para candidatos, y web en computadora para empresas (vistas más densas).

Figma es la fuente de verdad. `design_tokens.json` es una copia derivada que se regenera desde Figma.

## Dónde están los archivos

| Archivo | Qué contiene |
| --- | --- |
| `design_tokens.json` | Los 382 tokens en DTCG. Derivado de Figma, no se edita a mano. |
| `validador/validar-tokens.mjs` | El validador. Sin dependencias, Node 18 o superior. No se modifica. |
| `validador/validador.config.json` | Niveles, modos y pares de contraste de Monty. |
| `validador/README.md` | Documentación del validador. |
| Figma | [pega acá el link de tu copia del checkpoint: https://www.figma.com/design/Skovx4NZEG7AEnUeq2SuiD] |

## Arquitectura

Tres niveles en el JSON y cuatro colecciones en Figma:

| Nivel en el JSON | Colección en Figma | Modos | Qué guarda | Apunta a |
| --- | --- | --- | --- | --- |
| `primitive` (133) | Primitive | Value | Valores crudos: escalas de color, fuentes, espacio, radios | Nada, tiene el valor |
| `semantic` (54 de color) | Semantic | Light, Dark | Roles de color: superficie, texto, borde, acción, IA, feedback, sombra | `primitive` |
| `semantic` (63 más) | Platform | Mobile, Web | Roles de tipografía, espacio, tamaño, radio, layout y borde | `primitive` |
| `component` (132) | Component | Value | Decisiones de Button, Input, Icon, Avatar, Chip y Banner | `semantic` |

- Platform no es un nivel. Vive dentro de `semantic`: los colores están en `semantic.color.*` y el resto en `semantic.type`, `space`, `size`, `radius`, `layout` y `border`. Para saber de qué colección de Figma viene un token semántico, mira el tipo: color es Semantic, lo demás es Platform.
- Un semántico y un componente nunca tienen valor fijo. Un componente nunca apunta a un primitivo: pasa por un semántico.
- Los nombres de modo van en minúscula: `light`, `dark`, `mobile`, `web`. El primer modo de la colección va en `$value` y los demás en `$extensions.modes`. Primitive y Component tienen un solo modo y no llevan `modes`.
- Cada token trae `$type`, `$value`, `$description` y `$extensions`, que incluye `com.figma.codeSyntax.WEB`.
- Formatos de valor: color en hex mayúsculas (8 dígitos si tiene alpha); dimensión como `{ "value": 16, "unit": "px" }`; `fontWeight` y `number` como número; `fontFamily` como texto; referencias como `{semantic.color.text.primary}`.
- La ruta sale del nombre de Figma: `color/action/primary/default` en Semantic es `semantic.color.action.primary.default`. Los nombres pasan tal cual, sin normalizar.
- La raíz del JSON guarda en `$extensions["com.figma"]` el archivo de origen, la fecha de exportación y la tabla de colecciones y modos.

## Convenciones

- Nombres: `categoría/rol/variante`, en minúsculas y con guiones. Sin espacios, mayúsculas ni guiones bajos. El nombre dice para qué sirve, no cómo se ve. Antes de crear un token, revisa si ya existe uno con ese rol.
- Descripciones: una línea que dice cuándo usar el token. Son obligatorias en `semantic` y `component`, y el validador las exige como error.
- Code syntax: solo existe WEB, con la forma `var(--` + nombre con `/` cambiado por `-` + `)`. Ejemplo: `color/text/primary` es `var(--color-text-primary)`. Todavía no hay code syntax para iOS ni Android.
- Espaciado en múltiplos de 4 px. La tipografía queda fuera de esa regla: `font/size/14` es válido y lo usan `label` y `body-sm` en Web.
- Área táctil mínima de 44 × 44 px. Texto de lectura de 16 px o más en móvil y de 14 px o más en el panel de empresas.
- Contraste WCAG AA: 4.5:1 para texto y 3:1 para bordes, íconos y foco. Los estados deshabilitados están exentos.
- La lima de marca no va como texto, enlace ni foco sobre blanco: da 1.19:1. Enlaces y foco son azules; si la lima tiene que ser texto, se usa `text.brand` (lima 800).
- El violeta (`color.ai.*`) es solo para lo que genera Monty.
- Un estado nunca depende solo del color: lleva texto o ícono. Lo que genera la IA se distingue de lo que escribe una persona sin depender solo del color.
- La app también está en portugués para Brasil, así que los textos pueden ocupar más espacio.

## Componentes

| Componente | Variantes | Estados | Tokens |
| --- | --- | --- | --- |
| Button | Variant: Primary, Secondary, Ghost | State: Default, Hover, Disabled | `component.button.*` |
| Input | Sin variantes | State: Default, Focus, Error, Disabled | `component.input.*` |
| Icon | Name: sparkle, check, close, check-circle, alert-triangle, alert-circle, info, user, building, heart. Size: sm (16), md (20), lg (24) | Sin estados | `component.icon.*` |
| Avatar | Shape: circle, rounded. Content: initial, image, icon. Size: sm (32), md (48), lg (96) | Sin estados | `component.avatar.*` |
| Chip | Tone: neutral, inverse, brand, ai | Sin estados | `component.chip.*` |
| Banner | Status: success, warning, error, info | Sin estados | `component.banner.*` |

Icon es el ícono suelto: el color se aplica con `icon.color.*`. Avatar es la inicial o el logo de la empresa (rounded) y la foto de la persona (circle). Chip informa (modalidad, seniority, habilidad) y no se toca, en cuatro tonos: neutral, inverse (estado, con check), brand (lima, una por vista) y ai (lo que genera Monty, con la chispa). Banner es el mensaje de éxito, aviso, error o información arriba de una pantalla, siempre con ícono y texto.

Monty todavía no tiene Card.

## Cómo se valida

```bash
node validador/validar-tokens.mjs design_tokens.json
```

Devuelve código 0 si todo está en verde y 1 si hay errores. Con `--json` entrega el resultado como datos.

Revisa cinco cosas: nombres, referencias entre niveles, modos, descripciones y contraste. La configuración de Monty:

- `modes`: `light`, `dark`, `mobile`, `web`. El primero es el modo por defecto.
- `requireModes`: a los colores de `semantic` solo se les exige `dark`. El validador admite una sola regla de modos, así que no exige `web` a los tokens de Platform.
- `contrastModes`: `light` y `dark`.
- `requireDescriptions`: `semantic` y `component`, severidad error.
- `contrastPairs`: 72 pares revisados en Light y Dark, 144 chequeos. Son 8 de Button, 9 de Input, 8 de Icon, 2 de Avatar, 6 de Chip, 12 de Banner, 13 de texto y bordes semánticos, 12 de feedback y 2 de IA. Los estados deshabilitados quedan fuera.

Cuando se agregue un componente, se agregan también sus pares de contraste a la configuración.

Estado de partida: 382 tokens, 144 de 144 chequeos de contraste dentro del mínimo, sin errores ni avisos.

## Reglas de trabajo

1. Si el validador marca un error, no lo corrijas en el JSON. Dime qué cambiar en Figma (colección, variable, modo y valor) y regenera cuando lo haya cambiado.
2. Para leer Figma, carga la skill `figma-use` y usa un script de solo lectura de `use_figma`. `get_variable_defs` no sirve para exportar porque entrega el valor final sin modos ni alias.
3. La respuesta de `use_figma` tiene un límite de 48 KB. Lee por colección y parte Primitive en dos.
4. Un cambio de tokens va en Figma y en `design_tokens.json` en el mismo paso, nunca en uno solo. Después corre el validador y muestra su salida completa.
5. Muestra un plan antes de crear o reescribir archivos, y una vista previa antes de escribir en Figma. Escribe en Figma una sola vez, en lote, siguiendo la skill `figma-use`.
6. Para construir pantallas, los componentes usan tokens `component` y el resto usa tokens `semantic`. Ningún valor suelto y ningún primitivo directo.
7. El Figma MCP tiene un límite de lecturas por día en el plan educativo. Escribir con `use_figma` no cuenta. No pidas frames enteros si alcanza con un nodo, y no repitas lecturas.
8. Reporta lo que pasó: si el validador falla, muestra los errores tal cual, y si algo no se verificó, dilo.
9. Responde en español.

## Lo que no decides solo

- Decisiones de marca: colores, paletas, tipografías, logo y tono. Propón opciones y deja que yo elija.
- Crear, renombrar, mover o borrar tokens, colecciones o modos, y cambiar los niveles de la arquitectura.
- Cambiar valores o alias en Figma.
- Cambiar umbrales de contraste, quitar pares, bajar la severidad de un chequeo o tocar `validar-tokens.mjs` para que el resultado pase.
- Hacer excepciones a las reglas fijas: área táctil de 44 px, tamaños mínimos de lectura y contraste AA.
- Crear componentes o categorías de tokens nuevas.
- Cualquier acción hacia afuera: publicar la librería, mover o renombrar carpetas, compartir archivos.

## Decisiones ya tomadas

- Platform vive dentro de `semantic` y Mobile es su modo por defecto.
- Los nombres de modo van en minúscula en el JSON.
- Los múltiplos de 4 aplican al espaciado y no a la tipografía.
- Los 72 pares de contraste de `validador/validador.config.json` quedaron aprobados.

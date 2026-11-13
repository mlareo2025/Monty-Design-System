# Casos de prueba · Skill monty-ds

Cada caso se corre en una conversación nueva de Claude Code, para que no arrastre contexto. Se anota si pasa o falla y por qué. Si falla, se corrige la Skill, nunca el resultado a mano.

La meta: que pasen al menos cinco de seis.

Los criterios de la columna "Qué tiene que pasar" se escribieron antes de correr cada caso. Los nombres de tokens son los de `design_tokens.json`.

| # | Pedido | Qué tiene que pasar | Resultado |
| --- | --- | --- | --- |
| 1 | "Arma una pantalla de ingreso con email, contraseña y un botón para entrar." | Usa Input y Button del sistema (`component.input.*`, `component.button.*`). Un solo Button `primary`. Label visible encima de cada campo. Ningún valor suelto: ni `#hex` ni `px` fuera de un `var(--token)`. |  **Pasa.** Dos Input y un Button `primary` de ancho completo. Labels visibles con asterisco. Sin `#hex` ni `px` sueltos. Frenó el ícono de "ver contraseña" (sería un botón de solo ícono) y el enlace "¿Olvidaste tu contraseña?" (no hay componente de enlace) y propuso ambos. |
| 2 | "Un formulario de perfil donde el email está mal escrito." | Input en estado error, con un mensaje de texto que dice qué pasó y cómo corregirlo. Usa `component.input.help-error` y `component.input.border-error`, con el ícono `alert-triangle`. El error no depende solo del color. |  **Pasa.** Input en error con `input/help-error`, `input/border-error` e ícono `alert-triangle`. El mensaje dice qué pasó y cómo arreglarlo ("¿Quisiste decir ana.torres@gmail.com?"). Un solo `primary`. Sin valores sueltos. |
| 3 | "La pantalla de matches del día, cuando todavía no hay ninguno." | Texto con tokens del sistema (`color.text.primary`, `color.text.secondary`) y una acción clara con Button. No inventa ilustraciones, colores ni componentes. Tono positivo, sin rojo ni mensaje negativo. |  **Pasa.** `heading/lg`, `body/default` y un Button `primary`. Mensaje en positivo, sin rojo. No inventó ilustración ni componente de estado vacío y propuso uno aparte. Nota menor: tiene un `min-height: 44px` suelto (el área táctil). |
| 4 | "Un modal para confirmar que quiero cancelar mi postulación." | Frena: Monty no tiene Modal. No lo construye. Propone el componente (nombre, variantes, tokens `component.*` que apuntan a semánticos, área táctil de 44 px, pares de contraste) y espera la decisión. Puede mostrar alternativas con lo que existe. |  **Pasa.** Frenó: no construyó el modal ni creó archivo. Propuso Modal con tokens `modal/*` que apuntan a semánticos, accesibilidad y alternativa sin modal, y esperó decisión. |
| 5 | "La misma pantalla de ingreso, en modo dark." | Cambia de modo sin un solo valor fijo (los tokens resuelven Light y Dark). Los textos, el borde y el foco (`color.border.focus`) pasan contraste en dark: 4.5:1 en texto y 3:1 en bordes y foco. |  **Pasa.** Dark sin valores sueltos. Contraste calculado sobre lo renderizado: texto 16.70, texto secundario 7.92, botón 11.38, borde del campo 4.70. Foco con `input/border-focus` y `color/border/focus`. La pantalla original no existía en el repo, así que la rehízo desde el pedido. |
| 6 | "Arma una tarjeta de match con el porqué de la recomendación." | Usa los componentes que ya existen: Card (`kind: match`), AiBlock y Chip `match`, con Avatar e Icon adentro. No arma la tarjeta ni el bloque violeta con tokens semánticos sueltos. El porqué lleva `sparkles` y una etiqueta de texto. |  **Pasa.** Usa `card/*`, `ai-block/*`, `chip/*/match` y Avatar con Icon, sin semánticos de IA sueltos. El porqué lleva `sparkles`, etiqueta y tres razones. Nota menor: `min-height: 44px` suelto. |

## Corrida del 13 de noviembre de 2026

**6 de 6 pasan.** Cada caso corrió en un agente nuevo, sin ver los criterios. Ninguno falló, así que no se cambió `SKILL.md`.

Cómo se revisó cada resultado (no solo el reporte del agente):
- Búsqueda de `#hex`, `rgb()`, estilos en línea y medidas fuera de `var()` en el CSS, sin contar las definiciones de variables.
- Render en Light o Dark con Playwright, sin desbordes ni errores de consola.
- Contraste calculado sobre los colores pintados, en un solo modo por caso: Dark en los casos 1, 5 y 6, y Light en el 2. El caso 3 se revisó a ojo en Light y Dark.
- Qué tokens usa cada pantalla.

Lo que esta revisión no cubre: el foco no se renderizó (solo se comprobó que el CSS usa el token), y no se midió contraste en el modo contrario de cada caso.

Huecos del design system que aparecieron en varios casos (no son fallas de la Skill):
- Faltan tokens `component` de foco y `pressed` del Button.
- Falta un componente o token de enlace suelto.
- No hay token para el asterisco de obligatorio, ni para la separación entre botones apilados fuera de la Card.
- Falta un componente de estado vacío.
- Falta un control para mostrar la contraseña, con texto.
- No hay breakpoints: los agentes eligieron 768 px y 1024 px por su cuenta.

## Cómo anotar un resultado

- **Pasa:** escribe "Pasa" y, si quieres, qué te gustó.
- **Falla:** qué pasó de verdad, qué cambiaste en la Skill y el resultado de volver a correrlo.

Ejemplo: "Falla. En el caso 3 usó #9E9E98 para el texto, un valor suelto. Corrección en SKILL.md: 'Si no hay un token para lo que necesitas, propónlo. Nunca uses un valor fijo.' Vuelvo a correr: pasa."

## Para escribir los tuyos

- Pedidos reales, como los haría alguien del equipo, no pensados para que la Skill brille.
- Escribe "qué tiene que pasar" antes de correrlo, no después.
- Al menos uno que pida algo que el sistema no tiene (como el caso 4): la Skill tiene que frenar, no improvisar.
- Al menos uno que toque modos o tokens deprecados.
- Cuando se agrega un componente nuevo, revisa si algún caso que decía "frena" dejó de aplicar (el caso de la tarjeta pasó del 4 al 6).

## Prueba final

"Arma en Figma la pantalla de matches del día de Monty: dos matches con su porqué, Me interesa y Ahora no."

Tiene que salir solo con componentes y tokens del sistema.

**Decidido.** La Card tiene la propiedad `context`. Para una lista de matches se usa `context: list`: "Me interesa" va en `secondary` y "Ahora no" en `ghost`, sin ningún `primary`. La Card `featured` (un match solo) mantiene el `primary` y "Guardar".

Qué tiene que pasar:
- Dos Cards `context: list`, cada una con su AiBlock y su chip `match`.
- "Me interesa" en `secondary` y "Ahora no" en `ghost`. Ningún botón `primary` en la vista.
- Solo instancias de componentes y variables del sistema, sin valores sueltos.
- Light y Dark, Mobile y Web.

Esta prueba escribe en Figma, así que se corre solo con permiso.

Resultado:

# Casos de prueba · Skill monty-ds

Cada caso se corre en una conversación nueva de Claude Code, para que no arrastre contexto. Se anota si pasa o falla y por qué. Si falla, se corrige la Skill, nunca el resultado a mano.

La meta: que pasen al menos cinco de seis.

Los criterios de la columna "Qué tiene que pasar" se escribieron antes de correr cada caso. Los nombres de tokens son los de `design_tokens.json`.

| # | Pedido | Qué tiene que pasar | Resultado |
| --- | --- | --- | --- |
| 1 | "Arma una pantalla de ingreso con email, contraseña y un botón para entrar." | Usa Input y Button del sistema (`component.input.*`, `component.button.*`). Un solo Button `primary`. Label visible encima de cada campo. Ningún valor suelto: ni `#hex` ni `px` fuera de un `var(--token)`. | |
| 2 | "Un formulario de perfil donde el email está mal escrito." | Input en estado error, con un mensaje de texto que dice qué pasó y cómo corregirlo. Usa `component.input.help-error` y `component.input.border-error`, con el ícono `alert-triangle`. El error no depende solo del color. | |
| 3 | "La pantalla de matches del día, cuando todavía no hay ninguno." | Texto con tokens del sistema (`color.text.primary`, `color.text.secondary`) y una acción clara con Button. No inventa ilustraciones, colores ni componentes. Tono positivo, sin rojo ni mensaje negativo. | |
| 4 | "Un modal para confirmar que quiero cancelar mi postulación." | Frena: Monty no tiene Modal. No lo construye. Propone el componente (nombre, variantes, tokens `component.*` que apuntan a semánticos, área táctil de 44 px, pares de contraste) y espera la decisión. Puede mostrar alternativas con lo que existe. | |
| 5 | "La misma pantalla de ingreso, en modo dark." | Cambia de modo sin un solo valor fijo (los tokens resuelven Light y Dark). Los textos, el borde y el foco (`color.border.focus`) pasan contraste en dark: 4.5:1 en texto y 3:1 en bordes y foco. | |
| 6 | "Arma una tarjeta de match con el porqué de la recomendación." | Usa los componentes que ya existen: Card (`kind: match`), AiBlock y Chip `match`, con Avatar e Icon adentro. No arma la tarjeta ni el bloque violeta con tokens semánticos sueltos. El porqué lleva `sparkles` y una etiqueta de texto. | |

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

**Pendiente de decidir antes de correrla.** La Card ya trae su propio botón `primary` ("Me interesa") y un `ghost` "Guardar". Dos Cards en la misma vista son dos acciones principales, y la regla 7 de la Skill pide una sola por vista. Además, el pedido usa "Ahora no" y la Card dice "Guardar". Hay que elegir qué se espera:

- que la Skill señale el choque y proponga una alternativa (por ejemplo, una Card sin botón principal dentro de una lista, con una sola acción principal para la vista), o
- que se apruebe una variante de Card para listas y se pruebe con ella.

Esta prueba escribe en Figma, así que se corre solo con permiso.

Resultado:

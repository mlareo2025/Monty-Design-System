---
name: monty-ds
description: >-
  Design system de Monty (app y web de candidatos, panel de empresas).
  Usar siempre que se pida diseñar, armar o revisar una pantalla, un flujo,
  un componente, un botón, un formulario, una tarjeta o un banner de Monty,
  en Figma o en código, aunque no se nombre el design system. Define los
  tokens (color, tipografía, espacio, radios y layout), los ocho componentes
  que existen (Button, Input, Icon, Chip, Avatar y Banner) y sus reglas:
  nunca inventar componentes ni valores; si falta algo, detenerse y
  proponer. También sirve para validar design_tokens.json con el validador.
---

# Monty DS

Monty es un agente de búsqueda de empleo con IA. Tiene una app y una web para candidatos (ofertas, matches, procesos, conversación con Monty) y un panel web para empresas (listas y tablas densas). Esta Skill sirve para que cualquier pantalla se sienta Monty sin tener que preguntar lo básico.

- **Fuente de verdad:** Figma `tjoqkswERatCimnCp827TF` (https://www.figma.com/design/tjoqkswERatCimnCp827TF/Monty-DS). `design_tokens.json`, en la raíz del repo, se deriva de Figma y nunca se edita a mano.
- **Datos:** la carpeta `references/`. Ábrela según lo que necesites. No copies valores de memoria.
  - `references/color.md`: primitivos, semánticos Light y Dark, contraste.
  - `references/tipografia.md`: los 9 estilos de texto en Mobile y Web.
  - `references/spacing.md`: espacio, radios, elevación, layout y grilla.
  - `references/componentes.md`: los 8 componentes, con variantes, estados y tokens.
- **Validador:** `scripts/validar-tokens.mjs`, que se configura en `scripts/validador.config.json`.

## Cuándo usarla

Úsala cuando el pedido sea diseñar, armar o revisar algo de Monty: una pantalla, un flujo, un componente, un botón, un formulario, una tarjeta, un banner, un estado vacío o un mensaje. Da igual si el resultado va a Figma, a código (HTML, CSS, React, iOS o Android) o si es una revisión de una captura. También cuando haya que tocar o validar `design_tokens.json`.

No la uses para decisiones de marca nuevas (logo, paleta o tono de una campaña). En esos casos propón opciones y deja que la persona elija.

## Lo que no se negocia

### Tokens
1. **Ningún valor suelto.** Todo color, medida, radio, espacio o tipografía sale de un token. Nada de `#hex`, `px` sueltos ni "más o menos 20".
2. **Ningún primitivo directo.** Los componentes usan tokens `component`. Todo lo demás (layout, texto suelto, fondos de pantalla) usa `semantic`. Los primitivos solo se usan a través de un semántico.
3. **Nombres:** los primitivos van en español (`lima`, `azul`, `rojo`; una escala nueva sería `rosa`). Todo lo demás va en inglés: semánticos, componentes, variantes, estados y modos (`surface`, `action`, `button`, `inset`, `light`, `mobile`). Cada segmento va en minúsculas, con números y guiones.
4. **El nombre dice para qué sirve, no cómo se ve.** Antes de pensar en un token nuevo, revisa si ya existe uno con ese rol.

### Componentes
5. **Solo existen ocho:** Button, Input, Icon, Chip, Avatar, Banner, Card (solo `kind: match`) y AiBlock. No inventes otros. Lista, barra inferior, pestañas, modal, toast o select **no existen todavía**.
6. **Si hace falta un componente que no existe, detente y propón** (ver "Si falta algo"). No lo armes con tokens semánticos sueltos para salir del paso, aunque las páginas de Figma ya describan cómo se vería.
7. **Botones:**
   - Siempre llevan texto. No hay botones de solo ícono.
   - Hay una sola acción principal (`primary`) por vista. Las demás son `secondary` o `ghost`.
   - Orden: primero la acción principal y debajo la secundaria.
   - En móvil, el botón principal ocupa todo el ancho.
   - En una lista de matches se usa Card `context: list`, que no trae botón `primary`. La Card `featured` (un match solo) sí lo trae.
8. **Formularios:**
   - El label siempre está visible, encima del campo. El placeholder es solo un ejemplo y nunca reemplaza al label.
   - Los campos obligatorios se marcan con asterisco (`*`).
   - El mensaje de error siempre lleva texto: qué pasó y cómo arreglarlo. Ícono y color acompañan, nunca reemplazan.

### Accesibilidad
9. **Contraste WCAG AA:** 4.5:1 para texto y 3:1 para bordes de controles, íconos y foco. Los estados deshabilitados están exentos.
10. **Área táctil mínima de 44 × 44 px.**
11. **Texto de lectura:** 16 px o más en móvil (`body/default`). `body/compact` (14 px) va solo en el panel de empresas, en tablas o en metadatos de una línea en móvil.
12. **Nunca solo color:** un estado lleva texto o ícono. Lo que genera la IA se distingue con ícono y texto, no solo con violeta.
13. **La lima no va como texto, enlace ni foco sobre blanco.** Los enlaces son azules y subrayados. El foco es azul (`border/focus`).

### Marca y contenido
14. **Siempre se explica el porqué** de lo que decide Monty (un match, una recomendación, un orden). Va en el componente AiBlock (violeta `color/ai/*`, con ícono `sparkles` y etiqueta de texto).
15. **El violeta (`color/ai/*`) es solo para lo que genera o decide Monty.**
16. **Hay una sola superficie de marca (`surface/brand`) por vista,** y nunca es clicable.
17. **Sin degradados.** Las tarjetas son planas: superficie y borde, sin sombra. La sombra (`elevation/*`) queda para lo que flota.
18. **Tono:** directo pero amable. Usa lenguaje conciso. Si un texto no entra, se acorta el texto: nunca se achica la tipografía ni se rompe el componente.
19. **Sin mensajes negativos.** Un rechazo no es un error y no usa rojo. Se cuenta en positivo y con un paso siguiente ("Esta vez no avanzaste con Rappi. Monty encontró dos ofertas parecidas que encajan con tu perfil.").
20. **Las frases se cortan bien.** Sin palabras huérfanas en la última línea. No se separa una cifra de su unidad ("$ 28.000 MXN") ni un nombre de su verbo. Nunca se trunca con "…" un texto que haya que leer. La app también está en portugués de Brasil, que ocupa más: deja aire.
21. **Todos los modos y plataformas.** Cada pantalla se diseña o se comprueba en Light y Dark y en Mobile y Web.

### Trabajo
22. **Figma primero.** Si el validador marca un error, no se corrige en el JSON. Se explica qué cambiar en Figma (colección, variable, modo y valor) y se regenera el JSON.
23. **Se pregunta antes de:** escribir en Figma; crear, renombrar o borrar tokens, colecciones, modos o componentes; cambiar pares de contraste o umbrales; tocar `validar-tokens.mjs`; aplicar las correcciones de una revisión; hacer commit, push o abrir un pull request.

## Paso a paso para armar una pantalla

1. **Entiende el pedido.** Determina para quién es (candidato o empresa) y en qué plataforma se usa más. Igual vas a entregar Mobile y Web, y Light y Dark (regla 21).
2. **Haz el inventario.** Lista qué piezas necesitas y compáralas con los ocho componentes de `references/componentes.md`. Si alguna no existe, **detente aquí** y sigue "Si falta algo". No avances con un componente inventado.
3. **Arma el layout** con `references/spacing.md`:
   - Margen lateral `layout/page/margin` y grilla `layout/grid/*`.
   - Ancho máximo `layout/content/max-width` para lectura (detalle, perfil, conversación) o `max-width-wide` para listas y el panel.
   - `space/section` entre secciones, `stack/*` en vertical, `inline/*` en horizontal e `inset/*` para el relleno.
   - En el panel de empresas se usan los pasos chicos (`inset/sm`, `stack/sm`).
4. **Pon la jerarquía de texto** con `references/tipografia.md`:
   - Un `heading/lg` por vista y `display` como máximo una vez, solo en momentos grandes.
   - `heading/md` para secciones y `heading/sm` para títulos de tarjeta o fila.
   - `body/default` para leer, `label/*` en controles y `data` para cifras protagonistas, con cifras tabulares.
5. **Coloca los componentes** con sus variantes y estados reales:
   - Una sola acción `primary`. La secundaria va debajo y en móvil el botón principal ocupa todo el ancho.
   - Los formularios siguen la regla 8.
   - Los íconos salen solo de la librería de Icon.
6. **Aplica el color** con `references/color.md`: superficies, texto, bordes y feedback, siempre con tokens semánticos o de componente.
7. **Agrega el porqué** de cada decisión de Monty que aparezca en la pantalla (regla 14).
8. **Escribe los textos reales:** concisos, amables y sin negativos, con cortes de línea correctos. Usa contenido realista de Monty (empresas, puestos, cifras de LATAM) y nunca lorem ipsum.
9. **Revisa los modos:** cambia a Dark y a Web y comprueba contraste, anchos máximos y cortes de línea.
10. **Haz el chequeo final**, antes de entregar:
    - [ ] ¿Algún componente que no sea uno de los ocho? ¿Alguna pieza armada a mano que debería ser un componente?
    - [ ] ¿Algún valor suelto o primitivo directo?
    - [ ] ¿Una sola acción principal y un solo `surface/brand`?
    - [ ] ¿Todos los botones con texto? ¿Labels visibles y asteriscos en los obligatorios?
    - [ ] ¿Alguna frase mal cortada, con una palabra huérfana, una cifra separada de su unidad o "…" en un texto que hay que leer?
    - [ ] ¿Algún texto largo que se podría decir más corto? ¿Algún mensaje negativo?
    - [ ] ¿El porqué de la IA está explicado?
    - [ ] ¿Funciona en Light y Dark y en Mobile y Web?
11. **Reporta** qué tokens y componentes usaste, qué propuestas quedaron pendientes y qué no se pudo verificar.

## Cómo revisar una pantalla o un componente

Cuando pidan revisar algo (en Figma, una captura o código):

1. Recorre las reglas de "Lo que no se negocia" y el chequeo final del paso 10.
2. Entrega **una lista de problemas ordenados por gravedad**:
   - **Bloquea:** rompe accesibilidad (contraste, área táctil, solo color), usa un componente inventado, valores sueltos o más de una acción principal.
   - **Importante:** jerarquía de texto o espaciado fuera de los tokens, falta un modo o plataforma, falta el porqué de la IA, texto negativo o frases mal cortadas.
   - **Detalle:** tono, largo de textos o pequeñas diferencias de estado.
3. Cada problema dice **dónde está, qué regla rompe y con qué token, componente o regla se arregla**. Ejemplo: "Botón 'Postular' en Dark: usa `#DEF765` suelto → `button/background/primary`".
4. **Pregunta antes de aplicar correcciones.** No cambies nada en Figma ni en el código hasta que la persona lo apruebe.

## Si falta un token o un componente

Detente y propón. Nunca inventes.

1. **Detente** en el punto donde falta. No sigas con un valor aproximado ni con un componente improvisado "por ahora".
2. **Comprueba que de verdad falta:** busca en `references/` un token con ese rol, aunque tenga otro nombre. Muchas veces existe.
3. **Propón**, en un mensaje corto:
   - **Qué falta y para qué** (el caso de la pantalla).
   - **Para un token:** el nivel (`semantic` o `component`), un nombre que siga la convención, a qué token apunta (nunca un valor fijo fuera de `primitive`), sus valores por modo (Light y Dark, o Mobile y Web), una descripción de cuándo usarlo y los pares de contraste que habría que sumar a `scripts/validador.config.json`.
   - **Para un componente:** el nombre, sus variantes y estados (con los nombres en inglés), sus tokens `component` apuntando a semánticos, cómo cumple el área táctil de 44 px y el contraste, y sus pares de contraste.
   - **Alternativas** con lo que ya existe, si las hay, aclarando qué se pierde con cada una.
4. **Espera la decisión.** Una vez aprobada, el cambio va primero en Figma y luego en `design_tokens.json`, en el mismo paso. Después corre el validador.

## Validar los tokens

```bash
node .claude/skills/monty-ds/scripts/validar-tokens.mjs design_tokens.json
node .claude/skills/monty-ds/scripts/validar-tokens.mjs design_tokens.json --json
```

- El script busca `validador.config.json` primero junto a los tokens y, si no está, junto al script. Por eso funciona desde aquí sin tocar nada.
- Revisa cinco cosas: nombres, referencias entre niveles, modos, descripciones y contraste (71 pares en Light y Dark).
- Sale con 0 si todo está en verde y con 1 si hay errores.
- Muestra la salida completa tal cual. No aflojes un par, un umbral ni una severidad para que pase. Si algo falla, di qué cambiar en Figma.
- Cuando se apruebe un componente nuevo, se suman sus pares de contraste a la configuración.

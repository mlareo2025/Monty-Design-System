---
name: documentar-componente-monty
description: >-
  Documenta un componente de Monty DS en una ficha para diseño: qué es, cuándo
  usarlo, cuándo no, variantes, estados, anatomía, propiedades en Figma,
  reglas de uso, accesibilidad y relacionados. Lee el componente en Figma,
  escribe docs/fichas/<componente>.md, genera un preview HTML para revisar y,
  con aprobación, escribe la ficha en Figma junto al componente. Usar cuando
  pidan documentar, fichar, hacer la ficha o la guía de uso de Button, Input,
  Icon, Chip, Avatar, Banner, Card o AiBlock, o actualizar una ficha que ya
  existe.
---

# Documentar un componente de Monty

La ficha es para quien diseña. Responde "¿qué es, cuándo lo uso y cómo lo armo bien?" con datos de Figma, no con opiniones. Todas las fichas tienen las mismas diez secciones, en el mismo orden, y se ven iguales.

## Antes de empezar

- Carga la Skill **`monty-ds`**. De ahí salen las reglas, los tokens y el contraste (`references/componentes.md`, `color.md`, `tipografia.md` y `spacing.md`).
- Carga **`figma-use`** antes de cualquier `use_figma`.
- El componente tiene que ser uno de los ocho de `monty-ds`. Si piden la ficha de algo que no existe (lista, modal, pestañas), detente: no hay nada que documentar. Sigue "Si falta un token o un componente" de `monty-ds`.

## Lo que no se negocia

1. **Nunca inventes.** Cada dato sale de Figma o de la Skill `monty-ds`. Lo que no esté en ninguno de los dos va como **⚠️ Por confirmar**, con qué falta y dónde habría que definirlo. Mejor una ficha con cinco "Por confirmar" que una con un dato inventado.
2. **Si Figma y `monty-ds` no coinciden, manda Figma.** Escribe lo de Figma y marca la diferencia con ⚠️ Por confirmar, para que se corrija `monty-ds`.
3. **Las diez secciones, siempre en este orden y con estos nombres:** 1. Qué es · 2. Cuándo usarlo · 3. Cuándo no usarlo · 4. Variantes · 5. Estados · 6. Anatomía · 7. Propiedades en Figma · 8. Reglas de uso · 9. Accesibilidad · 10. Relacionados. Si una sección no aplica, se queda y lo dice ("Input no tiene propiedad de variante: …").
4. **El `.md` es la fuente.** El HTML y el frame de Figma salen del `.md`. Si hay que cambiar algo, se cambia primero el `.md`.
5. **El HTML se hace siempre con `references/plantilla-ficha.html`.** Solo cambia el contenido.
6. **No escribas en Figma sin aprobación** del preview. Si la ficha ya existe, di qué cambió antes de escribir.
7. **Tokens, nunca valores sueltos**, en el dibujo del HTML y en el frame de Figma.

## Paso a paso

### 1. Leer el componente (un solo script)

1. `create_session` con el fileKey `tjoqkswERatCimnCp827TF`.
2. Una sola llamada a `use_figma` con el contenido de `scripts/leer-componente.js`, cambiando solo `NOMBRE`. Es de solo lectura.
3. Del resultado salen:
   - `descripcion`: la descripción del componente en Figma. Es la base de "Qué es" y "Variantes".
   - `propiedades`: las propiedades en Figma (variante, texto, booleano y cambio de instancia), con sus valores y su valor por defecto.
   - `variantes[].arbol`: capas, textos, estilos de texto, propiedades conectadas (`props`) y variables enlazadas (`vars`) de cada variante. Es la base de "Estados" y "Anatomía".
   - `tokens`: cada variable usada, con su cadena de alias y su valor en Light y Dark (o Mobile y Web).
   - `fichaFigma`: si ya hay un frame `Ficha · <Componente>`, con sus textos.
   - `aLaDerecha`: qué hay a la derecha del componente y cuánto espacio libre queda.
4. Cómo leerlo sin equivocarte:
   - `⚠️ valor suelto #…` o `⚠️ sin estilo` en una capa es un hallazgo. Va a la ficha como ⚠️ Por confirmar y se avisa.
   - Una instancia oculta puede venir sin `hijos`. Eso **no** quiere decir que no tenga token: quiere decir que no se pudo leer. Complétalo con `monty-ds` si está ahí; si no, ⚠️ Por confirmar.
   - Si la respuesta viene `compactado`, solo la primera variante trae el árbol entero. No hagas más lecturas: alcanza con eso y con `tokens`.
   - Para comparar el dibujo del HTML con Figma puedes usar `get_screenshot` del componente. No es una lectura de datos y no reemplaza al script.

### 2. Cruzar con `monty-ds`

Lee la sección del componente en `references/componentes.md` de `monty-ds` y lo que use de `color.md`, `tipografia.md` y `spacing.md`.

- **Cuándo usarlo, cuándo no y reglas de uso:** salen de las reglas del componente y de las reglas 1 a 23 de `monty-ds`. En "Cuándo no usarlo", cada caso dice qué usar en su lugar, y solo con componentes que existen.
- **Accesibilidad:** contraste Light / Dark tal como lo da `monty-ds`, área táctil de 44 px, foco y "nunca solo color". Lo de código que no esté escrito (ARIA, cómo se conecta el label) va como ⚠️ Por confirmar.
- **Relacionados:** solo componentes que existen, con la relación concreta.

### 3. Escribir `docs/fichas/<componente>.md`

- Nombre del archivo en minúsculas con guiones, igual que el prefijo de sus tokens: `button.md`, `input.md`, `ai-block.md`.
- Parte de `references/plantilla-ficha.md`. La vara de calidad son `references/ejemplo-button.md` y `references/ejemplo-input.md`: mismo nivel de detalle y mismo tono.
- Cabecera: enlace al nodo de Figma, fecha de lectura, prefijo de tokens y estado (`Borrador para revisión` hasta que se apruebe).
- Tokens: el nombre `component` y, la primera vez, su semántico entre paréntesis. Las medidas con su valor: `space/inset/lg` (16).
- Textos de ejemplo: los de Figma ("Me interesa", "ana@mail.com"). Nunca lorem ipsum.
- Escritura de `monty-ds`: directa, concisa, sin "…" y con cortes correctos (cifra y unidad juntas).
- **Si el archivo ya existe:** no lo pises. Escribe la versión nueva aparte, compárala (`git diff --no-index`) y di qué cambió **sección por sección**: qué entra, qué sale y qué ⚠️ se resolvió. Espera el OK antes de reemplazarlo.

### 4. Generar `docs/fichas/<componente>.html`

Copia `references/plantilla-ficha.html` y cambia solo:

- el `<title>`;
- el bloque `<style id="componente">`, con los estilos del dibujo del componente **solo con `var(--…)`**: nada de hex, px ni fuentes;
- el contenido de `<main>`, con el mismo texto del `.md`.

No toques las fuentes, el bloque `<style id="sistema">`, el sprite de íconos ni el `<script>`. El modelo es `references/ejemplo-button.html`.

El preview tiene que mostrar:

- **Variantes:** el componente dibujado en cada variante (`.lienzo`, con una `.celda` por variante).
- **Estados:** el componente dibujado en cada estado. Si tiene variantes, una matriz variante × estado (`.matriz`).
- **Anatomía:** el componente con sus partes numeradas. Cada parte lleva `data-parte="N"` (y `data-lado` si un número choca con otro) y el script dibuja los números. Las partes opcionales se muestran visibles para poder numerarlas.
- **Cada token de color con su muestra:** `<span class="token" data-token="button/background/primary" data-ref="color/action/default"></span>`. El script dibuja la muestra Light | Dark y el hex de cada modo.
- Los ⚠️ Por confirmar, como `<span class="pendiente"><strong>⚠️ Por confirmar</strong> · …</span>`.
- Íconos solo del sprite: `<svg class="icono" aria-hidden="true"><use href="#i-bookmark"/></svg>`.

Antes de mostrarlo:

1. `node .claude/skills/documentar-componente-monty/scripts/revisar-html.mjs docs/fichas/<componente>.html` tiene que dar ✓.
2. Ábrelo en un navegador (Playwright) en Light, en Dark y a 390 px de ancho. Comprueba que no haya errores de consola, que ninguna muestra diga "⚠️ token no encontrado", que los controles midan lo que dice la ficha (por ejemplo, 44 px) y que no haya scroll horizontal.
3. Si cambió `design_tokens.json`, el bloque `TOKENS:INICIO … TOKENS:FIN` de la plantilla queda viejo. Regenéralo con `node .claude/skills/documentar-componente-monty/scripts/tokens-css.mjs design_tokens.json` y avisa, porque cambia la plantilla de todas las fichas.

### 5. Abrir el preview y esperar

Abre el HTML para que la persona lo vea: en local, en el navegador; en una sesión sin escritorio, envíaselo como archivo para ver. Junto con el preview, di en pocas líneas:

- de dónde salió cada cosa (Figma o `monty-ds`);
- la lista de ⚠️ Por confirmar;
- los hallazgos de la lectura (valores sueltos, capas sin estilo, diferencias con `monty-ds`).

**Espera la aprobación.** Si piden cambios, se hacen en el `.md` y se regenera el HTML.

### 6. Escribir la ficha en Figma (solo con aprobación)

1. **Si `fichaFigma` existía:** compara sus textos con el `.md` aprobado y di qué cambió antes de tocar nada. Espera el OK. Después se reemplaza el contenido de ese frame, sin crear otro.
2. **Dónde va:** un frame `Ficha · <Componente>` a la derecha del componente, alineado arriba. Si `aLaDerecha.espacioLibre` no alcanza para el ancho de la ficha más una separación, **no muevas nada por tu cuenta**: di qué se taparía y pregunta dónde ponerla.
3. **Cómo se arma** (carga también `figma-generate-design`, que `figma-use` pide para cambios visibles):
   - Auto layout vertical, todo enlazado a variables del sistema: fondo `color/surface/default`, borde `color/border/default` con `border-width/default`, radio `radius/card`, relleno `space/inset/xl`, `space/stack/lg` entre secciones y `space/stack/sm` o `md` dentro de una sección.
   - Textos con los estilos de texto del archivo (`heading/lg` para el nombre, `heading/md` para cada sección, `body/default` para leer y `label/sm` para leyendas y encabezados de tabla), con el color enlazado a `color/text/primary` o `color/text/secondary`.
   - Variantes y estados como **instancias reales** del componente, no dibujos.
   - Anatomía: una instancia con las partes opcionales visibles y los números en círculos enlazados a `color/surface/default`, `color/border/strong` y `color/text/primary`.
   - Muestras de color: rectángulos con el relleno enlazado a **la misma variable** que documentan. La muestra Dark va dentro de un marco con el modo Dark de la colección Semantic fijado.
   - Los ⚠️ Por confirmar con `color/feedback/warning/surface` y `color/feedback/warning/border`.
   - Ningún valor suelto: ni color, ni medida, ni radio, ni texto sin estilo.
4. **Comprueba**, con un script de solo lectura, que dentro del frame no quedó ningún relleno, borde, padding, separación o radio sin variable ni ningún texto sin estilo, y saca una captura. Si algo quedó suelto, se arregla antes de entregar.
5. Cambia el estado del `.md` y del HTML a `Aprobada el AAAA-MM-DD`.

### 7. Reportar

- Archivos escritos o cambiados y el id del frame en Figma.
- Los ⚠️ Por confirmar que quedan abiertos.
- Hallazgos para corregir en Figma o en `monty-ds`.
- Lo que no se pudo verificar.

No hagas commit, push ni pull request sin que se pida.

## Archivos de esta Skill

| Archivo | Qué es |
| --- | --- |
| `scripts/leer-componente.js` | El script único de lectura para `use_figma`. Solo lectura. |
| `scripts/revisar-html.mjs` | Revisa que una ficha HTML respete la plantilla: lo fijo igual, solo tokens, diez secciones en orden y sin huecos. |
| `scripts/tokens-css.mjs` | Genera el bloque de variables CSS de la plantilla desde `design_tokens.json`. |
| `references/plantilla-ficha.md` | Plantilla vacía de la ficha. |
| `references/plantilla-ficha.html` | Plantilla vacía del preview: fuentes, colores, estilos, íconos y script fijos. |
| `references/ejemplo-button.md` · `ejemplo-button.html` | Ficha terminada de Button, en las dos versiones. Vara de calidad. |
| `references/ejemplo-input.md` | Ficha terminada de Input. Vara de calidad. |

# Tipografía

Datos sacados de `design_tokens.json` (`semantic.type.*`) y de la página **Tipografía** de Figma.

- **Plus Jakarta Sans 700** para títulos. **Inter 400 y 600** para todo lo que se lee y se compara.
- Cada estilo de Figma está enlazado a variables de la colección **Semantic Platform**. El modo `mobile` va en `$value` y `web` en `$extensions.modes.web`.
- Solo `display` y `heading/lg` y `md` cambian entre Mobile y Web. El resto vale igual en las dos plataformas.
- Tamaños y altos de línea en múltiplos de 4, salvo el tamaño 14, que es válido.
- Cada estilo tiene cuatro tokens: `type/<estilo>/family`, `weight`, `size` y `line-height`. En código: `var(--type-heading-lg-size)`.

## Estilos

| Estilo | Familia · peso | Mobile (tamaño/alto) | Web | Cuándo usarlo |
| --- | --- | --- | --- | --- |
| `display` | Jakarta 700 | 32/40 | 48/56 | Momentos grandes y escasos: bienvenida, celebrar un avance, pantalla vacía con Monty. **Uno por pantalla como máximo.** |
| `heading/lg` | Jakarta 700 | 24/32 | 32/40 | Título de la pantalla. **Uno por vista.** |
| `heading/md` | Jakarta 700 | 20/28 | 24/32 | Título de sección dentro de una pantalla o del panel. |
| `heading/sm` | Jakarta 700 | 16/24 | 16/24 | Título de tarjeta o fila: empresa, puesto, nombre de candidato. |
| `body/default` | Inter 400 | 16/24 | 16/24 | Texto de lectura en la app y la web de candidatos: descripciones, el porqué del match, mensajes. |
| `body/compact` | Inter 400 | 14/20 | 14/20 | Lectura en el panel de empresas y en tablas. **En móvil, solo metadatos de una línea, nunca párrafos.** |
| `label/default` | Inter 600 | 16/20 | 16/20 | Texto de botones y controles principales. Una línea. |
| `label/sm` | Inter 600 | 14/20 | 14/20 | Chips, badges, pestañas, estados de proceso y encabezados de tabla. También el label de un Input. Una línea. |
| `data` | Inter 600, **cifras tabulares** | 20/28 | 20/28 | Cifras protagonistas: salario, porcentaje de match, fechas clave. |

En Figma, las cifras tabulares de `data` se activan en Detalles de texto › Números › Tabular. En CSS se usa `font-variant-numeric: tabular-nums`.

## Primitivos (no usar directo)

- Familias: `font/family/plus-jakarta-sans`, `font/family/inter`.
- Pesos: `font/weight/regular` 400, `semibold` 600, `bold` 700.
- Tamaños: 14, 16, 20, 24, 32 y 48.
- Altos de línea: 20, 24, 28, 32, 40 y 56.

## Reglas de uso

- **Jakarta solo en `display` y `heading/*`.** Inter en todo lo demás. Nunca un título con Inter ni un párrafo con Jakarta.
- **Mínimo de lectura:** 16 px en móvil (`body/default`). `body/compact` va en el panel de empresas o en metadatos de una línea.
- **Una línea en labels:** `label/default` y `label/sm` no pasan a dos líneas. Si no entra, se acorta el texto. No se achica la tipografía ni se agranda el componente.
- **Cortes de línea correctos** en títulos y párrafos:
  - Sin palabras huérfanas en la última línea.
  - No separes una cifra de su unidad (`92 %`, `$ 28.000 MXN / mes`) ni una fecha de su hora ("el jueves a las 10").
  - Sin "…" en textos que hay que leer.
  - En código: `text-wrap: balance` en títulos y `text-wrap: pretty` en párrafos, con espacios de no separación entre cifra y unidad.
- **Portugués de Brasil:** los textos pueden ser un 20–30 % más largos. Prueba con el texto más largo, no con el más corto.
- **Concisión:** si un título necesita dos líneas en móvil, primero intenta decirlo más corto.

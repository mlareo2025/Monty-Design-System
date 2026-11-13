# Card

> Tarjeta de match: una oferta que Monty eligió para la persona, con el porqué de la recomendación.

| | |
| --- | --- |
| Figma | [Card · nodo 58:363](https://www.figma.com/design/tjoqkswERatCimnCp827TF/Monty-DS?node-id=58-363) · página Componentes |
| Leído | 2026-11-13 |
| Tokens | `card/*`, más los de Avatar, Chip, AiBlock, Button e Icon |
| Estado | Borrador para revisión |

## 1. Qué es

La tarjeta que muestra una oferta que Monty eligió para la persona: puesto, empresa, porcentaje de match, ubicación, jornada, salario, habilidades y el porqué de la recomendación. Es plana (superficie y borde, sin sombra) y no es clicable entera: las acciones son sus botones. Hoy solo existe `kind: match`.

## 2. Cuándo usarlo

- Para mostrar un match solo, en un detalle o destacado, con `context: featured`.
- Para mostrar varios matches en una lista, con `context: list`.

## 3. Cuándo no usarlo

- Para un proceso o un candidato → no existen esas variantes; se proponen antes de usarlas.
- Para varios matches con el botón principal en cada uno → Card `context: list`, que no lleva `primary`.
- ⚠️ Por confirmar: si la Card puede ir sin AiBlock o sin chips `tag`. Figma siempre los muestra.

## 4. Variantes

| Variante | Para qué |
| --- | --- |
| `context: featured` | Un match solo. "Me interesa" (`primary`) arriba y "Guardar" (`ghost`, con `bookmark`) debajo. |
| `context: list` | Varios matches en una lista. "Me interesa" pasa a `secondary` y "Ahora no" (`ghost`, sin ícono) descarta el match. No lleva `primary`, así una vista con varias Cards no tiene varias acciones principales. |

`kind` tiene un solo valor: `match`.

## 5. Estados

La Card no tiene propiedad de estado: no es clicable entera. Los estados son los de sus botones.

| Variante | Estado | Cuándo se ve | Fondo | Borde | Texto | Ícono |
| --- | --- | --- | --- | --- | --- | --- |
| `featured` y `list` | (único) | Siempre. | `card/background` (`color/surface/default`) | `card/border` (`color/border/default`), 1 px | `card/text/primary` (`color/text/primary`) en puesto y monto · `card/text/secondary` (`color/text/secondary`) en empresa, metadatos y unidad | `card/icon` (`color/icon/secondary`) en metadatos |

- Botones: los estados `default`, `hover` y `disabled` de Button (ver `docs/fichas/button.md` cuando exista, o la sección Button de `monty-ds`).
- ⚠️ Por confirmar: qué cambia en la Card después de tocar "Guardar" (estado guardado) o "Ahora no" (se quita de la lista). No está en Figma.
- ⚠️ Por confirmar: estado de carga de la Card mientras llegan los datos. No está en Figma.

## 6. Anatomía

| # | Parte | Capa en Figma | Obligatoria | Tokens |
| --- | --- | --- | --- | --- |
| 1 | Contenedor | el componente | Sí | `card/background` · `card/border` · `card/border-width` → `border-width/default` (1) · `card/radius` → `radius/card` (8) · `card/padding` → `space/inset/lg` (16) · `card/gap` → `space/stack/md` (16) entre bloques |
| 2 | Avatar de la empresa | `Avatar` (Avatar `company`, `initial`, `md`) | Sí | Los de Avatar: 40 px · `card/avatar-gap` → `space/inline/sm` (8) hasta los títulos |
| 3 | Puesto | `Puesto` (texto) | Sí | Estilo `heading/sm` (Jakarta 700, 16/24) · `card/text/primary` |
| 4 | Empresa | `Empresa` (texto) | Sí | Estilo `body/compact` (Inter 400, 14/20) · `card/text/secondary` · `card/header-gap` → `space/stack/xs` (4) desde el puesto |
| 5 | Chip de match | `Chip match` (Chip `match`) | Sí, uno solo | Los de Chip `match`: `sparkles` y "92 % de match" |
| 6 | Metadatos | `Metadatos`: `map-pin` + `Ubicación`, `briefcase` + `Jornada` | Sí | Estilo `body/compact` · `card/text/secondary` · `card/icon` · `card/icon-size` → `icon/size/sm` (16) · `card/meta-icon-gap` → `space/inline/xs` (4) · `card/meta-gap` → `space/inline/md` (16) entre ítems |
| 7 | Salario | `Salario`: `Monto` + `Unidad` ("/ mes") | Sí | `Monto` en estilo `data` (Inter 600, 20/28) y `card/text/primary` · `Unidad` en `body/compact` y `card/text/secondary` · `card/meta-icon-gap` (4) entre los dos |
| 8 | Chips de habilidades | `Chips` (Chip `tag`) | Sí en Figma | Los de Chip `tag` · `card/chips-gap` → `space/inline/sm` (8) |
| 9 | Porqué de Monty | `AiBlock` | Sí | Los de AiBlock: etiqueta y 2 o 3 razones |
| 10 | Acciones | `Acciones` (dos Button, todo el ancho) | Sí | Los de Button · `card/actions-gap` → `space/stack/sm` (8) entre botones |

Metadatos, salario y chips van en el bloque `Datos`, separados por `card/facts-gap` → `space/stack/sm` (8). Si la cabecera no entra en una fila, el chip de match baja debajo del avatar y los títulos.

## 7. Propiedades en Figma

| Propiedad | Tipo | Valores | Por defecto | Nota |
| --- | --- | --- | --- | --- |
| `kind` | Variante | `match` | `match` | |
| `context` | Variante | `featured`, `list` | `featured` | |
| `Puesto` | Texto | — | "Diseñadora de producto senior" | |
| `Empresa` | Texto | — | "Nubank" | |
| `Ubicación` | Texto | — | "Ciudad de México" | |
| `Jornada` | Texto | — | "Tiempo completo" | |
| `Monto` | Texto | — | "$ 45.000 MXN" | Cifra y moneda juntas. |

- ⚠️ Por confirmar: el porcentaje de match, la inicial del avatar, los chips `tag`, las razones del AiBlock y la unidad "/ mes" no son propiedades de la Card. Se cambian dentro de las instancias anidadas.

## 8. Reglas de uso

- **Plana:** superficie y borde, sin sombra.
- **No es clicable entera:** las acciones son los botones.
- **Un solo chip `match`** por tarjeta, siempre con `sparkles` y texto.
- **Siempre explica el porqué** con un AiBlock de 2 o 3 razones concretas.
- **Botones apilados y a todo el ancho:** el de más peso arriba. En `list`, nunca un `primary`.
- La cifra y su unidad no se separan: "$ 45.000 MXN / mes".
- En móvil mide 390 px; en Web ocupa 6 de las 12 columnas.
- Solo tokens `card/*` y los de los componentes que contiene.

## 9. Accesibilidad

- **Contraste** (Light / Dark): puesto y monto 13.58 / 16.70; empresa, metadatos y unidad 5.25 / 7.92; íconos de metadatos 5.25 / 7.92. El borde de la tarjeta (1.25 / 1.72) es decorativo: `border/default` no marca el límite de un control.
- **Área táctil:** los dos botones miden 44 px de alto y ocupan todo el ancho.
- **Nunca solo color:** el match lleva `sparkles` y texto; el porqué lleva etiqueta de texto.
- **Lectura:** las razones van en `body/default` (16 px). `body/compact` (14 px) solo en metadatos de una línea.
- ⚠️ Por confirmar: el nivel de encabezado del puesto en código. No está en Figma ni en `monty-ds`.
- ⚠️ Por confirmar: cifras tabulares en `Monto`. `monty-ds` dice que `data` las usa; la lectura de Figma no devolvió esa propiedad en la capa.

## 10. Relacionados

- **Avatar**: `company`, `initial`, `md`, con la inicial de la empresa.
- **Chip**: `match` para el porcentaje y `tag` para modalidad, seniority y habilidades.
- **AiBlock**: el porqué de la recomendación.
- **Button**: `primary`, `secondary` y `ghost` según el contexto.
- **Icon**: `map-pin`, `briefcase` y `bookmark`.

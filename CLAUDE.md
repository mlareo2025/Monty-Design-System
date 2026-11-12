# Monty Design System

Sistema de diseño de Monty: producto con app y web para candidatos (ofertas, matches, procesos, conversación con Monty, bloques de IA) y panel de empresas (listas, tablas). Este repo guarda la versión en código de los tokens y el validador que la revisa. Los idiomas del proyecto: español en descripciones y comunicación, inglés/neutro en nombres técnicos.

**Figma es la fuente de verdad.** Archivo: https://www.figma.com/design/tjoqkswERatCimnCp827TF/Monty-DS (fileKey `tjoqkswERatCimnCp827TF`). El JSON es un derivado: nunca se edita a mano para "arreglar" algo.

## Dónde está cada cosa

| Archivo | Qué es |
| --- | --- |
| `design_tokens.json` | Tokens en formato DTCG. Se genera desde Figma. |
| `validador/validar-tokens.mjs` | Validador (Node 18+, sin dependencias). No se modifica. |
| `validador/validador.config.json` | Configuración del validador: niveles, modos, pares de contraste. |
| `validador/README.md` | Documentación del validador. |

## Arquitectura

Tres niveles en la raíz del JSON, cada uno solo puede apuntar al anterior:

`component` → `semantic` → `primitive` (los primitivos son los únicos con valores fijos).

| Nivel | Colección(es) de Figma | Modos | Tokens |
| --- | --- | --- | --- |
| `primitive` | Primitive | Value | 90 |
| `semantic` | Semantic **y** Semantic Platform | Semantic: Light, Dark. Semantic Platform: Mobile, Web | 47 + 64 |
| `component` | Component | Default | 45 |

- `semantic` junta dos colecciones de Figma con modos distintos. La colección de origen queda en `$extensions["com.figma"].collection`.
- Colores: Light en `$value`, Dark en `$extensions.modes.dark`.
- Tipografía, espacios, radios, layout, bordes y tamaños de ícono (Semantic Platform): Mobile en `$value`, Web en `$extensions.modes.web`.
- Los modos del validador van en minúscula: `light` (defecto), `dark`, `mobile`, `web`.

## Convenciones

- Nombre del token = ruta de Figma con `/` convertido en `.`, con la raíz como prefijo: `color/action/default` en Semantic es `semantic.color.action.default`.
- Cada segmento: minúsculas, números y guiones (`^[a-z0-9]+(-[a-z0-9]+)*$`).
- Referencias entre llaves con la raíz: `{primitive.color.lima.400}`, `{semantic.radius.control}`.
- Colores en hex (`#rrggbb`, o `#rrggbbaa` con transparencia). Dimensiones como `"16px"`. Pesos y columnas como número.
- `$type`: `color`, `dimension`, `fontFamily`, `fontWeight`, `number`. En semantic y component hereda el tipo del destino.
- `$description`: la descripción de Figma tal cual, en español. En semantic y component dice cuándo usar el token y es obligatoria (mínimo 10 caracteres).
- `$extensions["com.figma"]`: `collection`, `scopes` y `codeSyntax.WEB` (`var(--nombre-con-guiones)`).
- Los primitivos no se usan directamente; las pantallas usan semantic y los componentes referencian semantic.
- Los estados disabled quedan fuera de los pares de contraste (WCAG los exime). Texto: 4.5:1. Bordes e íconos: 3:1.

## Cómo se regenera `design_tokens.json`

1. Crear sesión con `create_session` para el fileKey y cargar el skill `figma-use`.
2. Leer con scripts **de solo lectura** de `use_figma`: colecciones, modos, nombres, alias (resueltos a nombre), descripciones, scopes y code syntax. No usar `get_variable_defs`: solo trae el valor final, sin modos ni alias. Devolver los datos colección por colección para no pasarse del tamaño de respuesta.
3. Convertir a DTCG según las convenciones de arriba.
4. Comprobar fidelidad: mismo número de variables que Figma (hoy 246) y, si se puede, una huella (hash) de nombre, descripción, scopes, code syntax y valores por modo calculada igual en Figma y en el JSON.
5. Correr el validador (siguiente sección).

No hay un conversor guardado en el repo: el que se usó era temporal.

## Comandos

```bash
node validador/validar-tokens.mjs design_tokens.json          # lectura humana
node validador/validar-tokens.mjs design_tokens.json --json   # datos, para que Claude los lea
```

Sale con código 0 si está todo en verde y 1 si hay errores. Busca `validador.config.json` junto a los tokens y, si no está, junto al script (aquí está en `validador/`).

## Reglas de trabajo

- **Plan antes de crear.** Cualquier tarea que cree o escriba algo empieza con un plan que se muestra y se aprueba. Leer Figma (solo lectura) no necesita aprobación.
- **Figma primero.** Si el validador marca un error, no se corrige en el JSON. Se explica qué cambiar en Figma (variable, modo, alias o descripción) y se regenera el JSON después.
- **Correr el validador antes de dar algo por terminado** y mostrar el resultado tal cual, con errores y avisos.
- **Reportar fielmente.** Si algo falla o se omitió, se dice con la salida. No se afloja un par de contraste, un umbral ni una regla para que pase.
- **Cambios mínimos.** Tocar solo lo pedido. `validar-tokens.mjs` no se modifica: todo se ajusta en `validador.config.json`.
- Antes de sobrescribir un archivo, mirar qué hay.
- No hacer commit, push ni pull request sin que se pida. Desarrollo en la rama indicada por la sesión.

## Lo que no hay que decidir sola/o

Preguntar antes de:

- Escribir, crear, renombrar o borrar cualquier cosa en Figma (variables, modos, colecciones, estilos, componentes).
- Cambiar los niveles, las referencias permitidas o los modos (por ejemplo, sumar un modo o dividir una colección).
- Cambiar la convención de nombres.
- Elegir o cambiar los pares de contraste, los mínimos o qué modos se revisan.
- Cambiar el formato de valores (color como objeto DTCG, dimensiones como objeto, etc.).
- Deprecar un token (`$deprecated`) o decidir qué lo reemplaza.
- Tocar el validador, hacer commit, push o abrir un pull request.

## Estado conocido (snapshot al generar los tokens)

- 246 tokens; validador en verde: 0 errores, 0 avisos, 86 de 86 comprobaciones de contraste (43 pares × light y dark).
- Margen más ajustado: `text/secondary` sobre `surface/subtle` en light (4.99:1 con mínimo 4.5).
- Decisiones de diseño ya tomadas (cambios hechos en Figma): en dark `surface/sunken` apunta al primitivo `neutral/1000` (`#0c0c0c`, 1.11:1 contra `surface/default`, parecido al 1.12:1 de light) y `action/hover` y `action/pressed` valen lo mismo que en light (`lima/500` y `lima/600`).
- Se borraron de Figma los primitivos sin uso `color/lima/100` y `space/48`, junto con sus filas de muestra en las páginas de documentación (Colores · "Escala lima" y Espacio · "Primitivos").
- Colores con el mismo valor en light y dark, por diseño: `text/on-action`, `text/on-brand`, `surface/brand`, `action/default`, `border/strong` e `icon/on-action`.

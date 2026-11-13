# Hallazgos · Lightning Design System 2

Extraído el 2026-11-13 desde https://www.figma.com/design/n8hvJVXpUs5VuYuThGnbTy (copia de la comunidad). Llamadas al MCP que cuentan: 3.

**La extracción cubre las 86 páginas de componentes**, pero con profundidad desigual: Button e Input tienen ficha completa; el resto, una lectura automática de la primera variante de cada grupo. No se guardó el JSON crudo de las variables, y la escala Pink no tiene todos sus pasos.

## Lo más importante
1. Tres colecciones locales de variables: Spacing/Sizing (38, un modo), Typography (18, modos Mac/iOS y Windows/Android) y Color Mode (291, modos Default y "Dark Mode BETA"). El modo oscuro está marcado como beta.
2. Los primitivos de color no están en el archivo: viven en una librería externa (Neutral, Pink, Teal, Yellow, Blue y 8 familias más). El archivo los enlaza con alias. Dentro de Color Mode hay una capa intermedia de escalas invertidas (`neutral-base`, `brand-base`, `error-base`…), además de la capa semántica.
3. Los tokens de componente ("component+shared hooks" y "shadows") son colores fijos o alias sueltos, sin pasar por la capa semántica.

## Hallazgos de la lectura de los 84 componentes restantes
- Valores de color sueltos (fills fijos) en Icon (#107cad, #084968, #90d0fe, #5867e8), Map (#ffffff, #666666), Color Picker, Card (#5867e8), Notification (#5867e8), Global Header (#00a1e0), Activity Timeline (#9747ff) y Illustration (#c2e8ff). Varios son de ilustración o muestra; no se confirmó cuáles son intencionales.
- Casi todos los componentes tienen `itemSpacing` o `paddingTop` sin variable (valores 2, 4, 8, 10). `itemSpacing=10` aparece en muchas páginas (no lo conté) y no existe un token de 10px (la escala salta de 8 a 12).
- Radios sueltos: 12 (Accordion, Drop Zone, File Selector, Expandable Section, Empty State), 20 (App Launcher, Prompt, List Builder), 100 (Checkbox Button, Slider, Split View) y 24 (Checkbox Toggle). Solo el 12 y el 20 existen como variable, y no se usan.
- Hay componentes que usan la capa `neutral-base`/`brand-base` directamente (Alert, Brand Band, Setup Assistant, Prompt, Progress Indicator, Map, Toast) en lugar de la capa semántica.
- Los estados no son uniformes: Button Group solo tiene default/disabled; Checkbox y Radio no tienen hover ni focus; Select, Counter, Textarea Gen AI y Rich Text Editor no tienen hover; Tabs, Scoped Tabs y Menu no tienen estados.
- Propiedades con errores de nombre o inconsistentes: `Tyoe` en Setup Assistant; `Collapse` frente a `Collapsed` entre actividades de Activity Timeline; `Error` como propiedad en unos y como valor de State en otros.
- Mezcla de prefijos en una misma página: 📝 dentro de páginas ⚡ (Combobox, Dual Listbox, Textarea, Tile) y ⚡ en páginas 📝 (Button Group).
- Alert, Badge, Notification, Scoped Notifications y Toast no tienen propiedades de variante: cada tipo es un componente suelto.
- Form Element no tiene componentes propios, solo instancias.

## Valores sueltos
| Componente | Propiedad | Valor | Token sugerido |
| --- | --- | --- | --- |
| Button | strokeWeight | 1 | sizing-border/1 |
| Button | paddingTop | 1 | sin equivalente (spacing mínimo es 4) |
| Button (focus) | fill | #ffffff | color/container/1 |
| Input | paddingTop | 2 | sizing/1 |
| Input | cornerRadius | 8 | radius-border/2 |
| Input | itemSpacing | 8 y 10 | spacing/2 y sin equivalente |

## Casi duplicados
| Token A | Token B | Valor | Nota |
| --- | --- | --- | --- |
| color/accent/1 | color/accent/container-1 y border-accent-1 | Electric Blue 50 | tres roles con el mismo valor en ambos modos |
| color/accent/on-accent-1 | color/accent/on-accent-2 y -3 | Neutral 100 | idénticos en Default |
| color/disabled/1 | on-disabled-1 y border-disabled-1 | Neutral 50 | idénticos en ambos modos |
| color/container/* | color/surface/* | Neutral 100/95 | roles duplicados con otro nombre |

## Nombres inconsistentes
- La etiqueta del nombre no coincide con el alias real: `color/on-surface/3 (Blue 15)` apunta a Electric Blue 15, no a Blue 15.
- Semánticos con prefijo repetido: `on-error-1`, `border-error-1`, `disabled-container-1`.
- El grupo se llama `info` en semántico y `information` en la escala; `error` contra `error-base`.
- `warning` y `info` tienen un solo nivel de borde o contenedor; `error` y `success` tienen dos.
- El nombre lleva el valor entre paréntesis (`sizing/5 (16px)`); si cambia el valor, el nombre miente.
- `font/scale/base` y `neg-1/neg-2` mezclan numeración y palabras; los pesos saltan de 3 a 4, 6 y 7.
- `color/component+shared hooks/list item drag` lleva espacios; los demás usan guiones.
- Hay 4 estilos de texto `_Style Guide/*` mezclados con los reales, uno con Courier Bold.
- `Shadow/Elevation/1 - right` tiene los mismos valores que `left` (revisar si es un error).

## Estados faltantes
- Input: no hay hover.
- Ver la lista por componente en `componentes.md`.

## Validador
```

Validando /home/user/Monty-Design-System/extraccion/lightning-ds2/design_tokens.json
Configuración: /home/user/Monty-Design-System/extraccion/lightning-ds2/validador.config.json
341 tokens encontrados

✔ nombres        todo bien
✖ referencias    51 error(es), 0 aviso(s)
    ✖ semantic.color.error.1: apunta a primitive.color.pink.70, que no existe (modo dark)
    ✖ semantic.color.error.container-1: apunta a primitive.color.pink.30, que no existe (modo dark)
    ✖ semantic.color.error.container-2: apunta a primitive.color.pink.80, que no existe
    ✖ semantic.color.error.on-error-2: apunta a primitive.color.pink.30, que no existe
    ✖ semantic.color.error.border-error-1: apunta a primitive.color.pink.70, que no existe (modo dark)
    ✖ semantic.color.error.border-error-2: apunta a primitive.color.pink.30, que no existe
    ✖ semantic.color.error.border-error-2: apunta a primitive.color.pink.80, que no existe (modo dark)
    ✖ component.hooks.list-item-drag: tiene un valor fijo ("#022ac0cc") en vez de referenciar a otro token
    ✖ component.hooks.list-item-drag: tiene un valor fijo ("#a8cbffcc") en vez de referenciar a otro token (modo dark)
    ✖ component.hooks.backdrop-background: tiene un valor fijo ("#2e2e2e") en vez de referenciar a otro token
    ✖ component.hooks.backdrop-background: tiene un valor fijo ("#020202") en vez de referenciar a otro token (modo dark)
    ✖ component.hooks.button-destructive-background: tiene un valor fijo ("#e3066a") en vez de referenciar a otro token
    ✖ component.hooks.button-destructive-background: tiene un valor fijo ("#e3066a") en vez de referenciar a otro token (modo dark)
    ✖ component.hooks.button-destructive-background-hover: tiene un valor fijo ("#b60554") en vez de referenciar a otro token
    ✖ component.hooks.button-destructive-background-hover: tiene un valor fijo ("#fddde3") en vez de referenciar a otro token (modo dark)
    ✖ component.hooks.button-destructive-text: tiene un valor fijo ("#ffffff") en vez de referenciar a otro token
    ✖ component.hooks.button-destructive-text: tiene un valor fijo ("#ffffff") en vez de referenciar a otro token (modo dark)
    ✖ component.hooks.button-destructive-text-hover: tiene un valor fijo ("#ffffff") en vez de referenciar a otro token
    ✖ component.hooks.button-destructive-text-hover: tiene un valor fijo ("#b60554") en vez de referenciar a otro token (modo dark)
    ✖ component.hooks.button-destructive-shadow-hover: tiene un valor fijo ("#61022a") en vez de referenciar a otro token
    ✖ component.hooks.button-destructive-shadow-hover: tiene un valor fijo ("#b60554") en vez de referenciar a otro token (modo dark)
    ✖ component.hooks.button-success-background: tiene un valor fijo ("#0b827c") en vez de referenciar a otro token
    ✖ component.hooks.button-success-background: tiene un valor fijo ("#0b827c") en vez de referenciar a otro token (modo dark)
    ✖ component.hooks.button-success-background-hover: tiene un valor fijo ("#056764") en vez de referenciar a otro token
    ✖ component.hooks.button-success-background-hover: tiene un valor fijo ("#acf3e4") en vez de referenciar a otro token (modo dark)
    ✖ component.hooks.button-success-text: tiene un valor fijo ("#ffffff") en vez de referenciar a otro token
    ✖ component.hooks.button-success-text: tiene un valor fijo ("#ffffff") en vez de referenciar a otro token (modo dark)
    ✖ component.hooks.button-success-text-hover: tiene un valor fijo ("#ffffff") en vez de referenciar a otro token
    ✖ component.hooks.button-success-text-hover: tiene un valor fijo ("#056764") en vez de referenciar a otro token (modo dark)
    ✖ component.hooks.button-success-shadow-hover: tiene un valor fijo ("#023434") en vez de referenciar a otro token
    ✖ component.hooks.button-success-shadow-hover: tiene un valor fijo ("#056764") en vez de referenciar a otro token (modo dark)
    ✖ component.hooks.button-bordered-shadow-hover: tiene un valor fijo ("#2e2e2e") en vez de referenciar a otro token
    ✖ component.hooks.button-bordered-shadow-hover: tiene un valor fijo ("#444444") en vez de referenciar a otro token (modo dark)
    ✖ component.hooks.button-brand-shadow-hover: tiene un valor fijo ("#002775") en vez de referenciar a otro token
    ✖ component.hooks.button-brand-shadow-hover: tiene un valor fijo ("#022ac0") en vez de referenciar a otro token (modo dark)
    ✖ component.shadow.level-1-a: tiene un valor fijo ("#0000002e") en vez de referenciar a otro token
    ✖ component.shadow.level-1-a: tiene un valor fijo ("#0000005c") en vez de referenciar a otro token (modo dark)
    ✖ component.shadow.level-1-b: tiene un valor fijo ("#0000001a") en vez de referenciar a otro token
    ✖ component.shadow.level-1-b: tiene un valor fijo ("#00000033") en vez de referenciar a otro token (modo dark)
    ✖ component.shadow.level-2-a: tiene un valor fijo ("#00000029") en vez de referenciar a otro token
    ✖ component.shadow.level-2-a: tiene un valor fijo ("#00000052") en vez de referenciar a otro token (modo dark)
    ✖ component.shadow.level-2-b: tiene un valor fijo ("#00000017") en vez de referenciar a otro token
    ✖ component.shadow.level-2-b: tiene un valor fijo ("#0000002e") en vez de referenciar a otro token (modo dark)
    ✖ component.shadow.level-3-a: tiene un valor fijo ("#00000024") en vez de referenciar a otro token
    ✖ component.shadow.level-3-a: tiene un valor fijo ("#00000047") en vez de referenciar a otro token (modo dark)
    ✖ component.shadow.level-3-b: tiene un valor fijo ("#00000014") en vez de referenciar a otro token
    ✖ component.shadow.level-3-b: tiene un valor fijo ("#00000029") en vez de referenciar a otro token (modo dark)
    ✖ component.shadow.level-4-a: tiene un valor fijo ("#0000001f") en vez de referenciar a otro token
    ✖ component.shadow.level-4-a: tiene un valor fijo ("#0000003d") en vez de referenciar a otro token (modo dark)
    ✖ component.shadow.level-4-b: tiene un valor fijo ("#00000012") en vez de referenciar a otro token
    ✖ component.shadow.level-4-b: tiene un valor fijo ("#00000024") en vez de referenciar a otro token (modo dark)
✔ modos          todo bien
✔ descripciones  todo bien
✔ contraste      todo bien

✖ 51 error(es). Corrige y vuelve a correr el validador.

```
Los 51 errores son información sobre el sistema, no algo que se corrigió:
- 7 son de la escala Pink: no se leyeron los pasos 80, 70, 65, 60, 35 y 30. Es un hueco de esta extracción, no del archivo.
- 44 son tokens de componente (hooks y shadows) con colores fijos. Reflejan lo que está en el archivo.
- 10 semánticos tienen el valor oscuro sin confirmar (alias a una variable de librería cuyo id no se resolvió). En el json llevan un valor provisional marcado en `$description`.

## Preguntas abiertas
- ¿Qué significan ⚡ y 📝 en los nombres de página?
- ¿Es la librería de primitivos el "Lightning Design System" oficial? ¿Hay que enlazarla para tener los pasos que faltan?
- ¿El modo oscuro beta está listo para usarse?
- El archivo es una copia de la comunidad: ¿las variables se han tocado respecto del original?

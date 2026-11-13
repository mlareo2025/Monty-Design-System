# Componentes

Button e Input tienen ficha completa (arriba). Los otros 84 se revisaron con una lectura automática de solo lectura: grupos de variantes, propiedades, tokens de color usados y valores sueltos. Los tokens y valores sueltos salen de la primera variante de cada grupo (máx. 3 grupos por página), no de todas.

## Button

- Nodo en Figma: 18216:12068 (page), sets `⚡ Button - Brand|Neutral|Base|Destructive|Destructive Text|Success|Inverse` y `Stateful`, `Stateful Neutral|Inverse|Dual`
- Propiedades: State (default, hover, active, focus, disabled); Pressed (yes/no) solo en los Stateful
- Estados presentes: default, hover, active, focus, disabled
- Estados faltantes: ninguno respecto del patrón (no hay loading ni error)
- Tokens que usa: color/accent/container-1|2, color/accent/on-accent-1|2, color/container/1, color/border/2, color/disabled/*, spacing/2, spacing/4, radius-border/circle, font/scale/1, font/weight/6, font/family/base, hook button-brand-shadow-hover
- Valores sueltos: strokeWeight 1 y paddingTop 1 sin variable (sizing-border/1 existe); cornerRadius 9999 en el contenedor sin enlazar; relleno blanco 255,255,255 en el estado Focus
- Notas: el botón es una píldora (radius circle). Hover y Active del Brand usan el mismo color (accent/container-2); la diferencia es la sombra. Focus usa un efecto con on-surface/3 y container/1.

## Input

- Nodo en Figma: 12961:30876
- Propiedades: State (default, active/focus, active/focus + dirty, filled, filled + dirty, error, disabled); familias Default, Search (Type: default/global), Read Only View Mode (Type, Context), Gen AI
- Estados presentes: default, focus, dirty, filled, error, disabled
- Estados faltantes: hover; en Read Only no hay estados
- Tokens que usa: color/container/1, color/border/2, color/on-surface/1|2, color/error/container-1, color/error/border-error-1, color/error/1, color/disabled/*, spacing/1|2, radius-border/2, sizing/5, font/scale/base, font/scale/neg-1
- Valores sueltos: paddingTop 2 y cornerRadius 8 del campo sin enlazar; itemSpacing 8 y 10 en Supporting Text y Left icon; strokeWeight 1 en casi todas las capas; en Focus hay un `padding/spacing-2` de librería junto a spacing/2 local
- Notas: radio 8px aquí contra píldora en Button. El Focus usa un estilo de efecto con sombra.

## Resto de componentes (lectura automática)

| Componente | Página | Variantes | Propiedades y estados | Tokens de color clave | Valores sueltos | Estados faltantes |
| --- | --- | --- | --- | --- | --- | --- |
| Accordion | 15420:3695 | 1 grupo, 6 | State: default/hover/focus; Expanded | border/1, on-surface/3 | paddingLeft 12, cornerRadius 12 | disabled |
| Activity Timeline | 23308:40313 | 8 grupos | State: default/hover; Collapse; Error | surface/1, accent/on-accent-1 | itemSpacing 2/3/9/165, fill #9747ff, cornerRadius 48 | — |
| Alert | 12905:4144 | 4 | sin propiedades | neutral-base/50, on-surface/inverse-1 | itemSpacing 179 | tipos sin variante (4 componentes sueltos) |
| App Launcher | 17102:26319 | 2 | Layout: 3-column/stacked | border/1, border/2, on-surface/3 | cornerRadius 20, paddingTop 16 | — |
| Avatar | 16678:1667 | 36 | Style (8); Size (5) | accent/container-1 | fill #000000 | — |
| Avatar Group | 17117:6885 | 28 | Size; Style (7) | border/inverse-1 | ninguno | — |
| Badge | 12637:191568 | 6 | sin propiedades | success/container-1 | fill #000000 | variantes sueltas, sin props |
| Brand Band | 23306:528120 | 1 | — | neutral-base/100 y /95 (usa la capa base, no la semántica) | ninguno | — |
| Breadcrumb | 12637:109530 | 1 | Type: default | container/1, accent/2 | itemSpacing 10 | hover, focus |
| Button Group | 20663:520408 | 3 grupos, 38 | Style; Type; State: default/disabled; Size | border/2, accent/2 | itemSpacing 2/8 | hover, focus, active |
| Button Icon | 12685:226858 | 8 grupos, 191 | Size (5); State (5); Pressed | accent/container-1 | paddingLeft 8 | — |
| Builder Header | 20231:37542 | 1 | — | container/inverse-1 | itemSpacing 240 | — |
| Card | 20156:3315 | 2 | Border yes/no | container/1, border/1 | fill #5867e8, cornerRadius 4 | — |
| Carousel | 24064:8 | 1 | — | surface/1, border/1 | cornerRadius 3, padding 10 | — |
| Chat | 23313:3347 | 5 grupos, 32 | Content (6+); Primary | container/inverse-2, container/2 | paddingTop 2 | — |
| Checkbox | 12662:197887 | 2 grupos, 11 | Type; State: default/disabled/error/read only; Selected | error/1, border/2 | paddingTop 1/3, itemSpacing 10 | hover, focus |
| Checkbox Button | 13025:6626 | 10 | State (6, incluye selected) | border/2, accent/2 | cornerRadius 100 | — |
| Checkbox Button Group | 17603:5782 | 3 | Type: text/icons/icons-small | on-surface/2 | paddingTop 1/3 | — |
| Checkbox Toggle | 18938:2561 | 8 | Toggled; State: default/hover/focus/disabled | disabled/* | paddingTop 4, cornerRadius 24 | active |
| Color Picker | 20052:45389 | 3 grupos, 5 | Type | border/2, accent/3 | fills #44d8be, #1b96ff, #e3abec | — |
| Combobox | 17531:641 | 4 grupos, 25 | State (7); Open | border/2 | paddingTop 2 | error |
| Counter | 17761:72717 | 2 grupos, 13 | State; Error | border/2 | paddingTop 6, cornerRadius 8 | hover |
| Data Table | 21387:1961 | 8 grupos, 197 | State; Borders; Type | container/2, border/1 | paddingTop 9, itemSpacing 23 | — |
| Datepicker | 22010:89154 | 3 grupos, 20 | State (6-7) | border/2 | paddingTop 2 | hover, error |
| Docked Composer | 20324:2 | 6 | Type; State: default/focus | container/1 | fill #000000 | disabled |
| Docked Form Footer | 19675:13632 | 1 | — | border/2 | fill #000000 | — |
| Docked Utility Bar | 19695:29787 | 1 | — | container/1 | paddingTop 10 | — |
| Drop Zone | 20377:12207 | 6 | Type (drag over…) | palette/purple/90, palette/purple/40 | cornerRadius 12 | — |
| Dual Listbox | 21673:94465 | 2 grupos, 3 | State: default/AI selected | border/2 | ninguno | — |
| Dynamic Menu | 21837:20204 | 2 | Open | border/2 | paddingLeft 8 | — |
| Empty State | 147106:1679 | 7 grupos, 51 | Size; Symbol | accent/container-1 | cornerRadius 12 y 0.5016, fill #ffffff | — |
| Expandable Section | 19895:37541 | 2 grupos, 5 | Expanded; State | container/2, palette/purple/* | cornerRadius 12, paddingTop 16 | — |
| Expression | 23288:1872 | 7 | — | border/2 | paddingTop 2 | — |
| Feed | 14872:2 | 4 grupos, 21 | Expanded; Top/Bottom border | container/2, border/1 | fill #000000 | — |
| Field Label | 16529:409398 | 2 | Type: default/group | error/on-error-1 | ninguno | — |
| Files | 22553:13427 | 5 grupos, 14 | Type | container/1, border/1 | fill #181818, padding 16 | — |
| File Selector | 21690:1754 | 3 grupos, 13 | State: drag, error | palette/purple/* | cornerRadius 12, fill #000000 | — |
| Form Element | 22776:16013 | 0 | sin componentes propios: 264 instancias de otros | — | — | página de composición, no un componente |
| Global Header | 19974:14498 | 1 grupo, 2 | State | container/1 | fill #00a1e0 | — |
| Global Navigation | 22875:1331 | 3 | — | surface/1, border/1 | itemSpacing 4/2 | — |
| Icon | 22003:4828 | 4 grupos, 24 | Size (6) | sin variables de color | fills #107cad, #084968, #90d0fe, #5867e8; cornerRadius 48 | — |
| Illustration (Empty State) | 23004:9120 | 2 | Size: default/large | on-surface/3 | fill #c2e8ff, paddingTop 13 | — |
| Listbox | 21376:31840 | 3 | Type: default/pills/dialog | container/1 | ninguno | — |
| List Builder | 21972:22249 | 1 | — | container/1, border/1 | cornerRadius 20 | — |
| Map | 23347:11337 | 3 | — | brand-base/90 | fills #ffffff, #666666 | — |
| Menu | 18712:31051 | 5 | Size | container/1 | ninguno | estados |
| Modal | 19063:17290 | 2 | — | hook backdrop-color-background | padding 8 | — |
| Notification | 19117:16200 | 1 | — | container/2 | fill #5867e8, cornerRadius 4 | — |
| Page Header | 20024:16557 | 2 | — | border/2 | itemSpacing 12 | — |
| Panel | 23717:4802 | 2 | Orientation | surface/1, palette/purple/90 | paddingTop 16 | — |
| Path | 20250:1622 | 2 grupos, 3 | Collapsed | container/inverse-1 | paddingLeft 16 | — |
| Pill | 18077:28262 | 8 grupos, 23 | State: default/hover/focus | error/1 | fill #06a59a, #000000 | disabled |
| Popover | 19550:2 | 11 | — | info/container-1 | itemSpacing 40 | — |
| Progress Bar | 18349:10071 | 2 grupos, 16 | Type; Size | accent/container-1 | itemSpacing 8/10 | — |
| Progress Ring | 18310:470817 | 5 grupos, 80 | Size; Percentage; Direction | error/1, warning/1 | fill #000000 | — |
| Progress Indicator | 18375:5894 | 2 | — | neutral-base/80 | paddingLeft 7/10 | — |
| Prompt | 21641:256 | 9 | — | neutral-base/50 | cornerRadius 20 | — |
| Publisher | 23159:15456 | 2 grupos, 5 | State | accent/container-1 | itemSpacing 339 | — |
| Radio Group | 18062:4362 | 2 grupos, 7 | State: default/error/disabled; Selected | border/2 | paddingTop 1 | hover, focus |
| Radio Button Group | 20007:1607 | 9 | Focus location | border/2 | paddingTop 1/3 | — |
| Rich Text Editor | 20615:62813 | 8 | State (4); Taskbar position | border/2 | paddingTop 3 | hover |
| Scoped Notifications | 19079:33448 | 5 | — | success/* | fill #000000 | — |
| Scoped Tabs | 13010:16454 | 3 | Size | border/1 | paddingLeft 16 | estados (solo hay Size) |
| Select | 22669:15701 | 4 | Open; State: default/active/disabled/error | border/2 | paddingTop 2 | hover |
| Setup Assistant | 4933:380932 | 3 | Tyoe (typo en la propiedad) | neutral-base/90, success/1 | paddingLeft 32 | — |
| Slider | 20588:484902 | 2 grupos, 10 | State: default/hover/disabled/error | border/1 | cornerRadius 100 | focus |
| Split View | 22967:12867 | 1 | — | container/2 | cornerRadius 100 | — |
| Spinner | 18431:4259 | 3 grupos, 15 | Size (5) | accent/1 | ninguno | — |
| Summary Detail | 22779:6653 | 4 | Open; Show badge | on-surface/3 | paddingTop 6 | — |
| Supporting Text | 16533:102601 | 2 | State: default/error | on-surface/1 | itemSpacing 10 | — |
| Tabs | 12637:161398 | 3 | Size | accent/2, accent/3 | ninguno | estados (solo hay Size) |
| Textarea | 19226:30527 | 3 grupos, 18 | State (8, Gen AI) | border/2 | cornerRadius 8 | hover |
| Text Link | 3734:159827 | 10 | Context; State: 5 | accent/2 | ninguno | — |
| Tile | 23236:507372 | 3 grupos, 7 | Checked | border/2 | itemSpacing 10 | — |
| Timepicker | 22462:17943 | 4 | State; Open; Filled | border/2 | paddingTop 2 | error, disabled |
| Toast | 19084:4129 | 4 | — | info/on-info-1 | cornerRadius 8, fill #000000 | — |
| Tooltip | 18622:43677 | 12 | Position (12) | container/inverse-1 | ninguno | — |
| Tree | 21693:74823 | 1 | — | border/2 | paddingTop 2 | — |
| Tree Grid | 22783:19883 | 2 | Borders | container/2 | paddingTop 7 | — |
| Trial Bar | 23332:4393 | 1 | — | container/inverse-1 | paddingTop 9 | — |
| Vertical Navigation | 20762:78105 | 2 grupos, 4 | Compact density | surface/1 | paddingTop 8 | — |
| Vertical Tabs | 20601:2999 | 1 | Type: base | accent/3 | paddingLeft 12/16 | — |
| Visual Picker | 3734:149715 | 3 grupos, 36 | Type; Size; State: 4 | border/1 | ninguno | — |
| Welcome Mat | 25247:459820 | 2 | Layout | palette/cloud-blue/90 | ninguno | — |

Notas de lectura:
- "—" en estados faltantes significa que no se detectó un hueco, no que se verificó a fondo.
- Lo que no es de color (spacing, radius, tipografía) no se enlistó salvo cuando es un valor suelto.
- La columna de variantes cuenta componentes dentro de la página; un grupo es un set o un marco con variantes.

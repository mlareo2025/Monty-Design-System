# Componentes

Solo se analizaron 2 de las 86 páginas de componentes. El resto queda pendiente.

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

## Pendientes (no analizados)

Los otros 84 componentes. Para cada uno falta leer el set con `get_design_context`.

| Componente | Variantes | Estados faltantes | Valores sueltos |
| --- | --- | --- | --- |
| Button | 10 sets × 5 estados | ninguno | 3 tipos |
| Input | 4 familias, 7 estados en Default | hover | 4 tipos |

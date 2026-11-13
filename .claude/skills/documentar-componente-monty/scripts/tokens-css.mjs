#!/usr/bin/env node
// Imprime el bloque de variables CSS de la plantilla a partir de design_tokens.json.
// Uso: node .claude/skills/documentar-componente-monty/scripts/tokens-css.mjs design_tokens.json
// Solo lectura: no escribe archivos. Su salida reemplaza el bloque entre
// /* TOKENS:INICIO */ y /* TOKENS:FIN */ de references/plantilla-ficha.html.
import { readFileSync } from 'node:fs';

const ruta = process.argv[2] || 'design_tokens.json';
const raiz = JSON.parse(readFileSync(ruta, 'utf8'));

function* recorrer(nodo, ruta = []) {
  if (nodo && typeof nodo === 'object' && '$value' in nodo) { yield [ruta, nodo]; return; }
  for (const [k, v] of Object.entries(nodo)) if (!k.startsWith('$')) yield* recorrer(v, [...ruta, k]);
}
const porRuta = new Map([...recorrer(raiz)].map(([r, n]) => [r.join('.'), n]));
const cssName = (n) => n.$extensions['com.figma'].codeSyntax.WEB.replace(/^var\((--[^)]+)\)$/, '$1');
const esRef = (v) => typeof v === 'string' && /^\{.+\}$/.test(v);

// Valor CSS de un token en un modo: un semántico apunta al valor final; un component apunta a var(--semántico).
function valor(ruta, modo) {
  const n = porRuta.get(ruta);
  const v = (modo && n.$extensions?.modes?.[modo]) ?? n.$value;
  if (!esRef(v)) {
    if (n.$type === 'fontFamily') return `"${v}", system-ui, sans-serif`;
    return String(v);
  }
  const destino = v.slice(1, -1);
  if (destino.startsWith('primitive.')) return valor(destino, null);
  return `var(${cssName(porRuta.get(destino))})`;
}

// Los colores se declaran en :root y en cada [data-theme]; las medidas, en :root y en cada [data-platform].
// Así un token component (que apunta a var(--semántico)) se recalcula dentro de un bloque Dark o Web.
const lineas = { color: [], medida: [], dark: [], web: [] };
for (const [ruta, n] of porRuta) {
  if (ruta.startsWith('primitive.')) continue;
  const nombre = cssName(n);
  const base = valor(ruta, null);
  (n.$type === 'color' ? lineas.color : lineas.medida).push(`  ${nombre}: ${base};`);
  const modos = n.$extensions?.modes || {};
  if (modos.dark) { const d = valor(ruta, 'dark'); if (d !== base) lineas.dark.push(`  ${nombre}: ${d};`); }
  if (modos.web) { const w = valor(ruta, 'web'); if (w !== base) lineas.web.push(`  ${nombre}: ${w};`); }
}

console.log('/* TOKENS:INICIO — generado con scripts/tokens-css.mjs desde design_tokens.json. No editar a mano. */');
console.log(`:root, [data-theme] {\n${lineas.color.join('\n')}\n}`);
console.log(`:root, [data-platform] {\n${lineas.medida.join('\n')}\n}`);
console.log(`[data-theme="dark"] {\n${lineas.dark.join('\n')}\n}`);
console.log(`@media (prefers-color-scheme: dark) {\n  :root:not([data-theme="light"]) {\n${lineas.dark.map(l => '  ' + l).join('\n')}\n  }\n}`);
console.log(`[data-platform="web"] {\n${lineas.web.join('\n')}\n}`);
console.log('/* TOKENS:FIN */');

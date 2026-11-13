#!/usr/bin/env node
// Convierte ../design_tokens.json en src/tokens/tokens.css.
// Corre solo antes de `npm run storybook` y `npm run build-storybook` (scripts pre*).
//
//   :root                    → light (colores) y mobile (medidas, tipografía, layout)
//   [data-theme="dark"]      → los colores que cambian en dark
//   [data-platform="web"]    → las medidas que cambian en web
//
// Nombre de cada variable: el code syntax WEB del token en Figma
// ($extensions["com.figma"].codeSyntax.WEB), por ejemplo var(--color-text-primary).
// Los primitivos no salen como variables: su valor queda dentro del semántico.
// Los tokens component apuntan con var() a su semántico, así que siguen solos el modo y la plataforma.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = dirname(fileURLToPath(import.meta.url));
const ORIGEN = resolve(aqui, '../../design_tokens.json');
const DESTINO = resolve(aqui, '../src/tokens/tokens.css');

const raiz = JSON.parse(readFileSync(ORIGEN, 'utf8'));

function* recorrer(nodo, ruta = []) {
  if (nodo && typeof nodo === 'object' && '$value' in nodo) { yield [ruta.join('.'), nodo]; return; }
  for (const [k, v] of Object.entries(nodo)) if (!k.startsWith('$')) yield* recorrer(v, [...ruta, k]);
}
const tokens = new Map(recorrer(raiz));

function variable(nodo, ruta) {
  const cs = nodo.$extensions?.['com.figma']?.codeSyntax?.WEB;
  const m = cs && cs.match(/^var\((--[a-z0-9-]+)\)$/);
  if (!m) throw new Error(`El token ${ruta} no tiene code syntax WEB válido: ${cs}`);
  return m[1];
}
const esRef = (v) => typeof v === 'string' && /^\{[^}]+\}$/.test(v);

// Valor CSS de un token en un modo (null = el de $value).
function valorCss(ruta, modo) {
  const nodo = tokens.get(ruta);
  if (!nodo) throw new Error(`Referencia rota: ${ruta}`);
  const crudo = (modo && nodo.$extensions?.modes?.[modo]) ?? nodo.$value;
  if (esRef(crudo)) {
    const destino = crudo.slice(1, -1);
    if (destino.startsWith('primitive.')) return valorCss(destino, null);
    return `var(${variable(tokens.get(destino), destino)})`;
  }
  if (nodo.$type === 'fontFamily') return `"${crudo}"`;
  return String(crudo);
}

const bloques = { root: [], dark: [], web: [] };
const nombres = new Set();
let cuenta = 0;
for (const [ruta, nodo] of tokens) {
  if (ruta.startsWith('primitive.')) continue;
  const nombre = variable(nodo, ruta);
  if (nombres.has(nombre)) throw new Error(`Dos tokens con la misma variable CSS: ${nombre}`);
  nombres.add(nombre);
  cuenta++;
  const base = valorCss(ruta, null);
  const nota = nodo.$deprecated ? ` /* deprecado: ${typeof nodo.$deprecated === 'string' ? nodo.$deprecated : 'no usar'} */` : '';
  bloques.root.push(`  ${nombre}: ${base};${nota}`);
  const modos = nodo.$extensions?.modes ?? {};
  if (modos.dark !== undefined) { const v = valorCss(ruta, 'dark'); if (v !== base) bloques.dark.push(`  ${nombre}: ${v};`); }
  if (modos.web !== undefined) { const v = valorCss(ruta, 'web'); if (v !== base) bloques.web.push(`  ${nombre}: ${v};`); }
}

const css = `/* Generado por scripts/tokens-to-css.mjs desde design_tokens.json. No editar a mano. */
/* ${cuenta} tokens (semantic + component). Light y Mobile por defecto. */

:root {
${bloques.root.join('\n')}
}

[data-theme="dark"] {
${bloques.dark.join('\n')}
}

[data-platform="web"] {
${bloques.web.join('\n')}
}
`;
mkdirSync(dirname(DESTINO), { recursive: true });
writeFileSync(DESTINO, css);
console.log(`tokens.css: ${cuenta} variables · ${bloques.dark.length} cambian en dark · ${bloques.web.length} cambian en web`);

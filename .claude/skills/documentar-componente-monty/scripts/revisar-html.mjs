#!/usr/bin/env node
// Revisa que una ficha HTML respete la plantilla. Solo lectura.
// Uso: node .claude/skills/documentar-componente-monty/scripts/revisar-html.mjs docs/fichas/button.html
// Sale con 0 si está bien y con 1 si algo falla.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ficha = readFileSync(process.argv[2], 'utf8');
const plantilla = readFileSync(join(dirname(fileURLToPath(import.meta.url)), '../references/plantilla-ficha.html'), 'utf8');
const bloque = (html, re) => (html.match(re) || [])[0] || '';
const errores = [];

// 1. Lo fijo es idéntico a la plantilla.
for (const [nombre, re] of [
  ['<style id="sistema">', /<style id="sistema">[\s\S]*?<\/style>/],
  ['sprite de íconos', /<svg width="0"[\s\S]*?<\/svg>/],
  ['<script>', /<script>[\s\S]*?<\/script>/],
  ['fuentes', /<link href="https:\/\/fonts[^>]+>/],
]) if (bloque(ficha, re) !== bloque(plantilla, re)) errores.push(`${nombre} no es igual al de la plantilla.`);

// 2. El dibujo del componente solo usa tokens.
const css = bloque(ficha, /<style id="componente">[\s\S]*?<\/style>/);
for (const [que, re] of [['un #hex', /#[0-9a-f]{3,8}\b/i], ['px sueltos', /\d+(\.\d+)?px/], ['rgb()/hsl()', /\b(rgb|hsl)a?\(/i], ['una fuente fuera de los tokens', /font(-family)?:(?!\s*var\()/i]])
  if (re.test(css)) errores.push(`<style id="componente"> tiene ${que}.`);
if (/style="[^"]*(#[0-9a-f]{3,8}|\d+px)/i.test(bloque(ficha, /<main[\s\S]*<\/main>/))) errores.push('Hay estilos en línea con #hex o px dentro de <main>.');

// 3. Las diez secciones, en orden.
const ids = ['que-es', 'cuando-usarlo', 'cuando-no-usarlo', 'variantes', 'estados', 'anatomia', 'propiedades', 'reglas', 'accesibilidad', 'relacionados'];
const encontrados = [...ficha.matchAll(/<section class="seccion[^"]*" id="([^"]+)"/g)].map(m => m[1]);
if (encontrados.join() !== ids.join()) errores.push(`Secciones: ${encontrados.join(', ')}. Deben ser: ${ids.join(', ')}.`);

// 4. Nada de la plantilla sin llenar.
const huecos = ficha.match(/\{\{[^}]+\}\}/g);
if (huecos) errores.push(`Quedan huecos sin llenar: ${[...new Set(huecos)].slice(0, 5).join(' ')}`);

// 5. La anatomía tiene partes numeradas y hay al menos una muestra de color.
if (!/data-parte="1"/.test(ficha)) errores.push('La anatomía no tiene partes numeradas (data-parte).');
if (!/class="token" data-token=/.test(ficha)) errores.push('No hay tokens de color con muestra (class="token").');

console.log(errores.length ? errores.map(e => '✗ ' + e).join('\n') : '✓ La ficha respeta la plantilla.');
process.exit(errores.length ? 1 : 0);

// Lectura de un componente de Monty DS para su ficha. SOLO LECTURA: no crea, no mueve, no edita nada.
// Uso: copiar este archivo entero como `code` de UNA llamada a use_figma
// (fileKey tjoqkswERatCimnCp827TF) y cambiar solo NOMBRE.
const NOMBRE = 'Button'; // Button, Input, Icon, Chip, Avatar, Banner, Card o AiBlock

const pagina = figma.root.children.find(p => /compon/i.test(p.name));
if (!pagina) return { error: 'No hay una página de componentes.' };
await figma.setCurrentPageAsync(pagina);
const comp = pagina.findAllWithCriteria({ types: ['COMPONENT_SET', 'COMPONENT'] })
  .find(n => n.name === NOMBRE && (n.type === 'COMPONENT_SET' || n.parent.type !== 'COMPONENT_SET'));
if (!comp) return { error: `No existe el componente "${NOMBRE}" en la página ${pagina.name}.` };

// --- Variables: nombre, cadena de alias y valor final por modo ---
const cacheVar = {}, cacheCol = {}, usadas = new Set();
async function variable(id) { if (!(id in cacheVar)) cacheVar[id] = await figma.variables.getVariableByIdAsync(id); return cacheVar[id]; }
async function coleccion(id) { if (!(id in cacheCol)) cacheCol[id] = await figma.variables.getVariableCollectionByIdAsync(id); return cacheCol[id]; }
async function nombreVar(id) { const v = await variable(id); if (v) usadas.add(id); return v ? v.name : `⚠️ variable ${id} no encontrada`; }
const hex = c => '#' + [c.r, c.g, c.b].map(x => Math.round(x * 255).toString(16).padStart(2, '0')).join('') + (c.a !== undefined && c.a < 1 ? Math.round(c.a * 255).toString(16).padStart(2, '0') : '');
async function resolver(id, modo, cadena) {
  const v = await variable(id); if (!v) return { valor: null, cadena };
  cadena.push(v.name);
  const col = await coleccion(v.variableCollectionId);
  const m = col.modes.find(x => x.name.toLowerCase() === modo) || col.modes.find(x => x.modeId === col.defaultModeId);
  const val = v.valuesByMode[m.modeId];
  if (val && val.type === 'VARIABLE_ALIAS') return resolver(val.id, modo, cadena);
  return { valor: v.resolvedType === 'COLOR' ? hex(val) : val, cadena };
}

// --- Árbol: capas, textos, estilos, propiedades conectadas y variables enlazadas ---
const corto = k => k.replace(/^(padding|stroke)(Top|Bottom|Left|Right)(Weight)?$/, '$1$3')
  .replace(/^(top|bottom)(Left|Right)Radius$/, 'radius').replace(/^(fontSize|fontFamily|lineHeight|fontWeight)$/, 'type');
async function enlaces(n) {
  const out = {}, bv = n.boundVariables || {};
  const poner = (k, v) => { const kk = corto(k); out[kk] = out[kk] && !out[kk].split(' | ').includes(v) ? out[kk] + ' | ' + v : v; };
  for (const k of Object.keys(bv)) {
    const val = bv[k];
    if (Array.isArray(val)) { for (const a of val) poner(k, await nombreVar(a.id)); }
    else if (val && val.id) poner(k, await nombreVar(val.id));
  }
  for (const k of ['fills', 'strokes']) if (Array.isArray(n[k])) for (const p of n[k]) {
    if (p.boundVariables && p.boundVariables.color) poner(k, await nombreVar(p.boundVariables.color.id));
    else if (p.type === 'SOLID' && p.visible !== false) poner(k, `⚠️ valor suelto ${hex(p.color)}`);
  }
  return out;
}
async function arbol(n, prof) {
  const o = { capa: n.name, tipo: n.type };
  if (n.type === 'INSTANCE') { const mc = await n.getMainComponentAsync(); o.de = mc ? (mc.parent && mc.parent.type === 'COMPONENT_SET' ? mc.parent.name + '/' + mc.name : mc.name) : null; }
  if (n.type === 'TEXT') { o.texto = n.characters; o.estilo = typeof n.textStyleId === 'string' && n.textStyleId ? (await figma.getStyleByIdAsync(n.textStyleId))?.name : '⚠️ sin estilo'; }
  if (!n.visible) o.oculta = true;
  if (n.componentPropertyReferences && Object.keys(n.componentPropertyReferences).length) o.props = n.componentPropertyReferences;
  if (n.strokes && n.strokes.length && typeof n.strokeWeight === 'number') o.borde = n.strokeWeight;
  const e = await enlaces(n); if (Object.keys(e).length) o.vars = e;
  if ('children' in n && prof < 6) { o.hijos = []; for (const c of n.children) o.hijos.push(await arbol(c, prof + 1)); }
  return o;
}

const variantes = comp.type === 'COMPONENT_SET' ? comp.children : [comp];
const datos = {
  pagina: pagina.name, id: comp.id, tipo: comp.type, nombre: comp.name, descripcion: comp.description,
  caja: { x: comp.x, y: comp.y, w: comp.width, h: comp.height },
  propiedades: comp.componentPropertyDefinitions,
  variantes: []
};
for (const v of variantes) datos.variantes.push({ id: v.id, nombre: v.name, w: v.width, h: v.height, arbol: await arbol(v, 0) });

// Tokens usados: cadena de alias y valor por modo (Light/Dark para color, Mobile/Web para medidas).
datos.tokens = {};
for (const id of usadas) {
  const v = await variable(id);
  const modos = v.resolvedType === 'COLOR' ? ['light', 'dark'] : ['mobile', 'web'];
  const r = {};
  for (const m of modos) r[m] = await resolver(id, m, []);
  datos.tokens[v.name] = { tipo: v.resolvedType, cadena: r[modos[0]].cadena.join(' → '), [modos[0]]: r[modos[0]].valor, [modos[1]]: r[modos[1]].valor };
}

// Ficha existente en Figma y lugar libre a la derecha.
const ficha = pagina.findAllWithCriteria({ types: ['FRAME', 'SECTION'] }).find(f => f.name === `Ficha · ${NOMBRE}`);
datos.fichaFigma = ficha ? { id: ficha.id, x: ficha.x, y: ficha.y, w: ficha.width, h: ficha.height,
  textos: ficha.findAllWithCriteria({ types: ['TEXT'] }).map(t => t.characters) } : null;
const derecha = pagina.children.filter(c => c.id !== comp.id && (!ficha || c.id !== ficha.id) && c.x >= comp.x + comp.width &&
  c.y < comp.y + comp.height + 2000 && c.y + c.height > comp.y).sort((a, b) => a.x - b.x)[0];
datos.aLaDerecha = derecha ? { id: derecha.id, nombre: derecha.name, x: derecha.x, espacioLibre: derecha.x - (comp.x + comp.width) } : null;

// Si la respuesta es grande, se compacta: árbol completo solo de la primera variante.
let s = JSON.stringify(datos);
if (s.length > 60000) {
  datos.variantes = datos.variantes.map((v, i) => i === 0 ? v : { id: v.id, nombre: v.nombre, w: v.w, h: v.h, arbol: '(igual estructura; ver tokens)' });
  datos.compactado = true; s = JSON.stringify(datos);
}
datos.bytes = s.length;
return datos;

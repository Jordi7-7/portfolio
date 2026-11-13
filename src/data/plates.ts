// Láminas esquemáticas para proyectos sin captura publicable. Son dibujos, no capturas: el rótulo lo indica.
const W = 800, H = 500;
const wrap = (body: string, cap: string) =>
  `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${cap}" class="plate">
  ${body}
  <text x="24" y="${H - 20}" class="pt">${cap}</text></svg>`;

// pseudoaleatorio determinista para que el dibujo no cambie entre builds
const rnd = (seed: number) => () => ((seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296);

function utn() {
  const r = rnd(7);
  let qr = '';
  for (let y = 0; y < 11; y++) for (let x = 0; x < 11; x++) {
    const corner = (x < 3 && y < 3) || (x > 7 && y < 3) || (x < 3 && y > 7);
    if (corner || r() > 0.52) qr += `<rect x="${288 + x * 12}" y="${150 + y * 12}" width="10" height="10"/>`;
  }
  return wrap(`
  <rect x="250" y="70" width="190" height="340" rx="22" class="ln"/><rect x="266" y="130" width="158" height="190" class="ln"/>
  <g fill="currentColor">${qr}</g>
  <text x="345" y="108" class="pt" text-anchor="middle">UTN MÓVIL · EVENTOS</text>
  <text x="345" y="352" class="pt" text-anchor="middle">ESCANEAR ASISTENCIA</text>
  <path class="ln" d="M440 240H520"/><path class="ln" d="M512 232l8 8-8 8"/>
  <rect x="520" y="190" width="190" height="100" class="ln acc"/><text x="540" y="228" class="pm">NestJS · CQRS</text><text x="540" y="250" class="pt">COMMAND → ESCRITURA</text><text x="540" y="268" class="pt">QUERY → LECTURA</text>
  <path class="ln" d="M615 290V330"/><path class="ln" d="M607 322l8 8 8-8"/>
  <rect x="520" y="330" width="190" height="80" class="ln"/><text x="540" y="360" class="pm">Oracle APEX</text><text x="540" y="382" class="pt">PANEL DE ADMINISTRACIÓN</text>
  <path class="ln" d="M80 230H250"/><text x="80" y="218" class="pt">FLUTTER</text>
  `, 'ESQUEMA · REGISTRO MASIVO DE ASISTENCIA CON QR');
}

function rtdetr() {
  // dígito "7" sobre cuadrícula 28x28 con caja de detección
  const c = 11, ox = 250, oy = 50;
  const on = new Set<string>();
  for (let x = 6; x <= 21; x++) for (let t = 0; t < 3; t++) on.add(`${x},${5 + t}`);
  for (let i = 0; i < 18; i++) { const x = 20 - Math.floor(i * 0.55); for (let t = 0; t < 3; t++) on.add(`${x - t},${8 + i}`); }
  let cells = '';
  for (let y = 0; y < 28; y++) for (let x = 0; x < 28; x++)
    cells += `<rect x="${ox + x * c}" y="${oy + y * c}" width="${c - 1}" height="${c - 1}" fill="currentColor" opacity="${on.has(`${x},${y}`) ? 0.95 : 0.1}"/>`;
  return wrap(`${cells}
  <rect x="${ox + 5 * c - 4}" y="${oy + 4 * c - 4}" width="${17 * c + 8}" height="${21 * c + 8}" class="ln acc" stroke-width="2"/>
  <rect x="${ox + 5 * c - 4}" y="${oy + 4 * c - 22}" width="86" height="18" class="acc-f"/><text x="${ox + 5 * c + 4}" y="${oy + 4 * c - 9}" class="pt" fill="var(--bg)">DÍGITO</text>
  <text x="590" y="150" class="pm">RT-DETR</text><text x="590" y="172" class="pt">ENTRENADO CON MNIST</text><text x="590" y="190" class="pt">API · PYTHON</text>
  <text x="40" y="150" class="pm">28 × 28</text><text x="40" y="172" class="pt">ENTRADA</text>`, 'ESQUEMA · DETECCIÓN DE DÍGITOS');
}

function imdb() {
  const lines = [0, 1, 2, 3].map((i) => `<rect x="120" y="${110 + i * 26}" width="${i === 3 ? 260 : 440 - i * 20}" height="9" fill="currentColor" opacity=".25"/>`).join('');
  return wrap(`
  <rect x="100" y="70" width="520" height="190" class="ln"/><text x="120" y="96" class="pt">RESEÑA</text>${lines}
  <path class="ln" d="M360 260V300"/><path class="ln" d="M352 292l8 8 8-8"/>
  <text x="120" y="330" class="pt">CLASIFICACIÓN · MODELO TRANSFORMER</text>
  <rect x="120" y="345" width="480" height="22" class="ln"/><rect x="120" y="345" width="320" height="22" class="acc-f"/><text x="130" y="361" class="pt" fill="var(--bg)">POSITIVA</text>
  <rect x="120" y="385" width="480" height="22" class="ln"/><rect x="120" y="385" width="140" height="22" fill="currentColor" opacity=".8"/><text x="130" y="401" class="pt" fill="var(--bg)">NEGATIVA</text>
  <text x="640" y="110" class="pm">Next.js</text><text x="640" y="132" class="pt">INTERFAZ</text><text x="640" y="168" class="pm">API</text><text x="640" y="190" class="pt">TRANSFORMERS</text>`, 'ESQUEMA · ANÁLISIS DE RESEÑAS DE PELÍCULAS');
}

export const plates: Record<string, () => string> = { utn, rtdetr, imdb };

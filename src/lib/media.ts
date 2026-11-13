import fs from 'node:fs';
import path from 'node:path';
import type { Lang } from './i18n';

// Cualquier archivo public/projects/<id>-<nombre>.(png|jpg|webp) aparece solo en el proyecto con ese id.
// Sin capturas, el proyecto usa una lámina esquemática de src/data/plates.ts.
const dir = path.resolve('public/projects');
// Se lee en cada llamada para que el servidor de desarrollo detecte capturas nuevas sin reiniciar.
const listFiles = () => (fs.existsSync(dir) ? fs.readdirSync(dir) : []);

const order = ['dashboard', 'pos', 'products'];
export const shotLabel: Record<string, Record<Lang, string>> = {
  dashboard: { es: 'Panel', en: 'Dashboard' },
  pos: { es: 'Punto de venta', en: 'Point of sale' },
  products: { es: 'Productos', en: 'Products' },
};

export type Shot = { src: string; key: string };

export const shotsOf = (id: string): Shot[] =>
  listFiles()
    .filter((f) => f.startsWith(id + '-') && /\.(png|jpe?g|webp)$/i.test(f))
    .map((f) => ({ src: '/projects/' + f, key: f.slice(id.length + 1).replace(/\.[^.]+$/, '') }))
    .sort((a, b) => ((order.indexOf(a.key) + 99) % 99) - ((order.indexOf(b.key) + 99) % 99));

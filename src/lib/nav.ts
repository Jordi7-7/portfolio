import type { Lang } from './i18n';
import { t } from '../data/content';

/**
 * Secciones del menú, en el orden en que aparecen en la página.
 * `key` es la clave del texto en src/data/content.ts (t.es[key] y t.en[key]).
 * La hoja 01 es el héroe, así que la numeración empieza en 02.
 */
export const nav = [
  { id: 'about', key: 'about' },
  { id: 'work', key: 'work' },
  { id: 'exp', key: 'exp' },
  { id: 'contact', key: 'contact' },
] as const;

export type SectionId = (typeof nav)[number]['id'];

export const navLabel = (key: (typeof nav)[number]['key'], l: Lang) => t[l][key];
export const sectionNumber = (id: SectionId) => String(nav.findIndex((n) => n.id === id) + 2).padStart(2, '0');

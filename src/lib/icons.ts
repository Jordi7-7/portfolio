import * as si from 'simple-icons';
import { t, techs } from '../data/content';

// Oracle y SQL Server no están en simple-icons: icono genérico de base de datos.
export const dbPath =
  'M12 3C7 3 4 4.6 4 6.5v11C4 19.4 7 21 12 21s8-1.6 8-3.5v-11C20 4.6 17 3 12 3zm0 2c3.9 0 6 1.1 6 1.5S15.9 8 12 8 6 6.9 6 6.5 8.1 5 12 5zM6 9.4C7.5 10.4 9.6 11 12 11s4.5-.6 6-1.6v3.1c0 .4-2.1 1.5-6 1.5s-6-1.1-6-1.5zm0 6C7.5 16.4 9.6 17 12 17s4.5-.6 6-1.6v2.1c0 .4-2.1 1.5-6 1.5s-6-1.1-6-1.5z';

// Iconos propios para lo que simple-icons no incluye (Power BI, Oracle, SQL Server).
const custom: Record<string, string> = {
  db: dbPath,
  bars: 'M4 20V10h4v10H4zm6 0V4h4v16h-4zm6 0v-7h4v7h-4z',
};

const icons = si as unknown as Record<string, { path: string } | undefined>;

/** Ruta SVG de un icono: clave de simple-icons sin el prefijo "si", o una clave propia ('db', 'bars'); '' = sin icono. */
export const iconPath = (key: string): string | undefined =>
  custom[key] ?? (key ? icons['si' + key]?.path : undefined);

/** Tecnologías que sirven de filtro, con su icono resuelto. */
export const techMap = Object.fromEntries(
  techs.map((x) => [x.id, { ...x, path: iconPath(x.icon) ?? dbPath }]),
);

/** Cuántos proyectos usan cada tecnología (los ids son iguales en todos los idiomas). */
export const techCounts: Record<string, number> = Object.fromEntries(
  techs.map((x) => [x.id, t.es.projects.filter((p) => p.tech.includes(x.id)).length]),
);

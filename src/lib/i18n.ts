export const langs = ['es', 'en'] as const;
export type Lang = (typeof langs)[number];

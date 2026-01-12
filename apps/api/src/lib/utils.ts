export const slugify = (text: string): string =>
  text
    .toString()
    .normalize('NFKD') // handle accents/umlauts
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumerics with hyphens
    .replace(/^-+|-+$/g, '') // trim hyphens
    .replace(/--+/g, '-'); // collapse multiple hyphens

import { CategoryListResponse } from '@invicity/contracts';

// Slugify a string to create URL-friendly slugs
export const slugify = (text: string): string =>
  text
    .toString()
    .normalize('NFKD') // handle accents/umlauts
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumerics with hyphens
    .replace(/^-+|-+$/g, '') // trim hyphens
    .replace(/--+/g, '-'); // collapse multiple hyphens

// Group categories by their type

export function mapCategoriesByType(categories: CategoryListResponse) {
  return {
    service: categories.filter((cat) => cat.type === 'SERVICE'),
    contact: categories.filter((cat) => cat.type === 'CONTACT'),
  };
}

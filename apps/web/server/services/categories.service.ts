import {
  CategoryListResponseSchema,
  CategoryType,
  ServiceCategoryResponseSchema,
} from '@invicity/contracts';

import { safeFetch } from '../../utils/safe-fetch';

// Fetch all categories, optionally filtered by type, and by locale.
export async function getCategories(type?: CategoryType) {
  return await safeFetch(
    `/categories${type ? `?type=${type}` : ''}`,
    CategoryListResponseSchema,
    {
      next: { revalidate: 60 * 60 }, // cache 1h
    },
  );
}

// Fetch a single service category with its services, filtered by locale.
export async function getCategoryWithServices(slug: string) {
  return await safeFetch(`/categories/${slug}`, ServiceCategoryResponseSchema, {
    next: { revalidate: 60 * 60 }, // cache 1h
  });
}

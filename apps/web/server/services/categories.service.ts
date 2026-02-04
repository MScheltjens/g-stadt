import { CategoryListResponseSchema, CategoryType } from '@kwh/contracts';

import { safeFetch } from '@/utils/safe-fetch';

// Fetch all categories, optionally filtered by type, and by locale.
export async function getCategories(type?: CategoryType) {
  console.log('Fetching categories with type:', type);
  return await safeFetch(
    `/categories${type ? `?type=${type}` : ''}`,
    CategoryListResponseSchema,
    // {
    //   next: { revalidate: 60 * 60 }, // cache 1h
    // },
  );
}

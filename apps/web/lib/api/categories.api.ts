import { CategoryListResponseSchema, CategoryType } from '@invicity/contracts';

import { safeFetch } from './safe-fetch';

export async function getCategories(type?: CategoryType) {
  return await safeFetch(
    `/categories${type ? `&type=${type}` : ''}`,
    CategoryListResponseSchema,
    {
      next: { revalidate: 60 * 60 }, // cache 1h
    },
  );
}

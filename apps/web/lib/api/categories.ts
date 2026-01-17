import { Locale } from '@invicity/constants';
import { CategoryListResponseSchema, CategoryType } from '@invicity/contracts';

import { safeFetch } from '../safe-fetch';

export async function getCategories(locale: Locale, type?: CategoryType) {
  return await safeFetch(
    `/categories?locale=${locale}${type ? `&type=${type}` : ''}`,
    CategoryListResponseSchema,
    {
      next: { revalidate: 60 * 60 }, // cache 1h
    },
  );
}

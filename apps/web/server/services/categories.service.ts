import { CategoryListResponseSchema, CategoryType } from '@kwh/contracts';
import { getLocale } from '@kwh/i18n';

import { safeFetch } from '@/utils/safe-fetch';

// Fetch all categories, optionally filtered by type, and by locale.
export async function getCategories(type?: CategoryType) {
  const locale = await getLocale();

  return await safeFetch(
    `/categories${type ? `?type=${type}` : ''}`,
    CategoryListResponseSchema,
    {
      locale,
      next: { revalidate: 60 * 60 }, // cache 1h
    },
  );
}

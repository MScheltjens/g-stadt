import { Locale } from '@invicity/constants';
import {
  CategoryListResponseSchema,
  CategoryResponse,
} from '@invicity/contracts';

import { safeFetch } from './safe-fetch';

export async function getCategoryBySlug(
  slug: string,
): Promise<CategoryResponse | undefined> {
  const categories = await safeFetch(
    `/categories?type=SERVICE`,
    CategoryListResponseSchema,
    { next: { revalidate: 60 * 60 } },
  );
  return categories.find((cat) =>
    cat.translations.some((t) => t.slug === slug),
  );
}

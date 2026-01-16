import {
  type ServiceCategory,
  ServiceCategoryListSchema,
} from '@repo/contracts';

import { safeFetch } from '@/lib/safe-fetch';

export async function getServiceCategories(
  locale: string,
): Promise<ServiceCategory[]> {
  return safeFetch(`/services?locale=${locale}`, ServiceCategoryListSchema, {
    next: { revalidate: 60 * 60 }, // cache 1h
  });
}

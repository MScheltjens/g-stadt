import { safeFetch } from '@/lib/safe-fetch';
import {
  ServiceCategoryListSchema,
  type ServiceCategory,
} from '@repo/contracts';

export async function getServiceCategories(
  locale: string,
): Promise<ServiceCategory[]> {
  return safeFetch(`/services?locale=${locale}`, ServiceCategoryListSchema, {
    next: { revalidate: 60 * 60 }, // cache 1h
  });
}

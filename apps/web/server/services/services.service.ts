import {
  CategoryWithServicesResponseSchema,
  ServiceListPaginatedResponse,
  ServiceListPaginatedResponseSchema,
  ServicesQuery,
} from '@kwh/contracts';
import { getLocale } from '@kwh/i18n';

import { safeFetch } from '@/utils/safe-fetch';

// get all services //

export async function getServices(
  query?: ServicesQuery,
): Promise<ServiceListPaginatedResponse> {
  const locale = await getLocale();
  const params = new URLSearchParams();
  if (query?.categories) {
    if (Array.isArray(query.categories)) {
      if (query.categories.length > 0) {
        params.append('categories', query.categories.join(','));
      }
      // If empty, do not append category at all (treat as no filter)
    } else if (query.categories !== 'all') {
      params.append('categories', String(query.categories));
    }
  }
  if (query?.page) params.append('page', String(query.page));
  if (query?.limit) params.append('limit', String(query.limit));
  if (query?.search) params.append('search', query.search);

  const queryString = params.toString();

  return await safeFetch(
    `/services${queryString ? `?${queryString}` : ''}`,
    ServiceListPaginatedResponseSchema,
    {
      locale,
      next: { revalidate: 60 * 60 }, // cache 1h
    },
  );
}

// get services by category slug //

export async function getCategoryServices(categorySlug: string) {
  const locale = await getLocale();
  return await safeFetch(
    `/services/category/${categorySlug}`,
    CategoryWithServicesResponseSchema,
    {
      locale,
      next: { revalidate: 60 * 60 }, // cache 1h
    },
  );
}

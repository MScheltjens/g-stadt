import {
  ServiceListPaginatedResponse,
  ServiceListPaginatedResponseSchema,
  ServicesQuery,
} from '@kwh/contracts';

import { safeFetch } from '@/utils/safe-fetch';

// get all services //

export async function getServices(
  query?: ServicesQuery,
): Promise<ServiceListPaginatedResponse> {
  const params = new URLSearchParams();

  console.log({ query });

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

  console.log('Fetching services with params:', params.toString());

  const queryString = params.toString();

  return await safeFetch(
    `/services${queryString ? `?${queryString}` : ''}`,
    ServiceListPaginatedResponseSchema,
  );
}

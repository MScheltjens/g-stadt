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

  if (query?.categoryId) params.append('categoryId', query.categoryId);
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

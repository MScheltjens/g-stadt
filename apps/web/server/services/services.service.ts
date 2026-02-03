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
  if (query?.query) params.append('query', query.query);
  const qs = params.toString();
  return await safeFetch(
    `/services${qs ? `?${qs}` : ''}`,
    ServiceListPaginatedResponseSchema,
  );
}

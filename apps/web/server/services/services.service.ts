import {
  ServiceListResponse,
  ServiceListResponseSchema,
  type ServicesByCategoryResponse,
  ServicesByCategoryResponseSchema,
  ServicesSearchParams,
} from '@kwh/contracts';

import { safeFetch } from '@/utils/safe-fetch';

// Fetch all services ordered by category and filtered by locale //
export async function getAllServicesByCategory(
  query: ServicesSearchParams,
): Promise<ServicesByCategoryResponse> {
  return safeFetch(
    `/services/by-category?page=${query.page}&pagesize=${query.pagesize}&query=${query.query}`,
    ServicesByCategoryResponseSchema,
    {
      next: { revalidate: 60 * 60 }, // cache 1h
    },
  );
}

// Fetch a list of all services for the locale

export async function getServiceList({
  page,
  pagesize,
  query,
}: ServicesSearchParams): Promise<ServiceListResponse> {
  return safeFetch(
    `/services?page=${page}&pagesize=${pagesize}&query=${query}`,
    ServiceListResponseSchema,
    {
      cache: 'no-store', // cache 1h
    },
  );
}

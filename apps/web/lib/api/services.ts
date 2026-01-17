import {
  type ServicesByCategoryResponse,
  ServicesByCategoryResponseSchema,
} from '@invicity/contracts';

import { safeFetch } from '@/lib/safe-fetch';

// Fetch all services ordered by category and filtered by locale //

export async function getAllServicesByCategory(
  locale: string,
): Promise<ServicesByCategoryResponse> {
  return safeFetch(
    `/services?locale=${locale}`,
    ServicesByCategoryResponseSchema,
    {
      next: { revalidate: 60 * 60 }, // cache 1h
    },
  );
}

//

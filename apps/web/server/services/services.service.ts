import {
  CategoryWithServicesListResponse,
  CategoryWithServicesListResponseSchema,
} from '@kwh/contracts';

import { safeFetch } from '@/utils/safe-fetch';

// Fetch services by category from the API //

export async function getServcicesByCategory(): Promise<CategoryWithServicesListResponse> {
  return await safeFetch(
    '/services/by-category',
    CategoryWithServicesListResponseSchema,
  );
}

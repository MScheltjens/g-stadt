import { ServiceListResponse, ServiceListResponseSchema } from '@kwh/contracts';

import { safeFetch } from '@/utils/safe-fetch';

// get all services //

export async function getServices(
  categoryId?: string,
): Promise<ServiceListResponse> {
  return await safeFetch(
    `/services${categoryId ? `?categoryId=${categoryId}` : ''}`,
    ServiceListResponseSchema,
  );
}

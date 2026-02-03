import { safeFetch } from '@/utils/safe-fetch';

import { ServiceListResponse, ServiceListResponseSchema } from '@kwh/contracts';

// get all services //

export async function getAllServices(): Promise<ServiceListResponse> {
  return await safeFetch('/services', ServiceListResponseSchema);
}

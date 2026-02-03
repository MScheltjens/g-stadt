import { ServiceListResponse, ServiceListResponseSchema } from '@kwh/contracts';

import { safeFetch } from '@/utils/safe-fetch';

// get all services //

export async function getServices(): Promise<ServiceListResponse> {
  return await safeFetch('/services', ServiceListResponseSchema);
}

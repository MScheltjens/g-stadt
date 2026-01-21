import { Locale } from '@invicity/constants';
import {
  type ServicesByCategoryResponse,
  ServicesByCategoryResponseSchema,
} from '@invicity/contracts';

import { safeFetch } from './safe-fetch';

// Fetch all services ordered by category and filtered by locale //

export async function getAllServicesByCategory(
  locale: Locale,
): Promise<ServicesByCategoryResponse> {
  return safeFetch(`/services`, ServicesByCategoryResponseSchema, locale, {
    next: { revalidate: 60 * 60 }, // cache 1h
  });
}

//

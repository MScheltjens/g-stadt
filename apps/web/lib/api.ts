/**
 * API Client for G-Stadt Backend
 *
 * Simple fetch wrappers for calling the NestJS API
 */

import { getLocale } from '@repo/i18n/server';
import { safeFetch } from './safe-fetch';
import {
  ServiceCategorySchema,
  ServiceWithTranslationSchema,
} from '@repo/types';

// ============================================================================
// Events API
// ============================================================================

// ============================================================================
// Services API
// ============================================================================

export async function getServices(
  category?: string,
): Promise<ServiceWithTranslation[]> {
  const locale = await getLocale();
  const params = new URLSearchParams();
  params.append('locale', locale);
  if (category) params.append('category', category);
  return safeFetch<ServiceWithTranslation[]>(
    `/services?${params.toString()}`,
    ServiceWithTranslationSchema.array(),
  );
}

export async function getServiceBySlug(
  slug: string,
): Promise<ServiceWithTranslation> {
  return safeFetch<ServiceWithTranslation>(
    `/services/slug/${slug}`,
    ServiceWithTranslationSchema,
  );
}

export async function getServicesByCategory(
  category: string,
): Promise<ServiceWithTranslation[]> {
  const locale = await getLocale();
  const params = new URLSearchParams();
  params.append('locale', locale);
  params.append('category', category);
  return safeFetch<ServiceWithTranslation[]>(
    `/services?${params.toString()}`,
    ServiceWithTranslationSchema.array(),
  );
}

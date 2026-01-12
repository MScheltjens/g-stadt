/**
 * API Client for G-Stadt Backend
 *
 * Simple fetch wrappers for calling the NestJS API
 */

import { getLocale } from '@repo/i18n/server';
import { safeFetch } from './safe-fetch';
import {
  EventWithTranslation,
  NewsWithTranslation,
  ServiceWithTranslation,
  EventCategoryType,
  EventWithTranslationSchema,
  NewsWithTranslationSchema,
  ServiceWithTranslationSchema,
} from '@repo/types';

// ============================================================================
// Events API
// ============================================================================

export async function getEvents(
  category?: EventCategoryType,
): Promise<EventWithTranslation[]> {
  const locale = await getLocale();
  const params = new URLSearchParams();
  params.append('locale', locale);
  if (category) params.append('category', category);
  return safeFetch<EventWithTranslation[]>(
    `/events?${params.toString()}`,
    EventWithTranslationSchema.array(),
  );
}

export async function getEventBySlug(
  slug: string,
): Promise<EventWithTranslation> {
  return safeFetch<EventWithTranslation>(
    `/events/slug/${slug}`,
    EventWithTranslationSchema,
  );
}

// ============================================================================
// News API
// ============================================================================

export async function getNews(
  published?: boolean,
): Promise<NewsWithTranslation[]> {
  const locale = await getLocale();
  const params = new URLSearchParams();
  params.append('locale', locale);
  if (published) params.append('published', 'true');
  return safeFetch<NewsWithTranslation[]>(
    `/news?${params.toString()}`,
    NewsWithTranslationSchema.array(),
  );
}

export async function getNewsBySlug(
  slug: string,
): Promise<NewsWithTranslation> {
  return safeFetch<NewsWithTranslation>(
    `/news/slug/${slug}`,
    NewsWithTranslationSchema,
  );
}

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

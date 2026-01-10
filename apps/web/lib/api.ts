/**
 * API Client for G-Stadt Backend
 *
 * Simple fetch wrappers for calling the NestJS API
 */

import { getLocale } from '@repo/i18n/server';
import { safeFetch } from './safe-fetch';
import {
  Event,
  News,
  Service,
  EventWithTranslation,
  NewsWithTranslation,
  ServiceWithTranslation,
  EventCategoryType,
  EventWithTranslationSchema,
  NewsWithTranslationSchema,
  ServiceWithTranslationSchema,
} from '@repo/types';
import { ZodSchema } from 'zod';

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

export async function getEvent(id: string): Promise<Event> {
  // No translation, fallback to old fetchAPI for now (or add EventSchema if needed)
  return safeFetch<Event>(
    `/events/${id}`,
    EventWithTranslationSchema as unknown as ZodSchema<Event>,
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

export async function getNewsById(id: string): Promise<News> {
  // No translation, fallback to old fetchAPI for now (or add NewsSchema if needed)
  return safeFetch<News>(
    `/news/${id}`,
    NewsWithTranslationSchema as unknown as ZodSchema<News>,
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

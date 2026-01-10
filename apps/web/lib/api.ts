/**
 * API Client for G-Stadt Backend
 *
 * Simple fetch wrappers for calling the NestJS API
 */

import { getLocale } from '@repo/i18n/server';
import type {
  Event,
  News,
  Service,
  EventWithTranslation,
  NewsWithTranslation,
  ServiceWithTranslation,
  EventCategoryType,
} from '@repo/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Base fetch wrapper with error handling
 */
async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const url = `${API_URL}${endpoint}`;

  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

// ============================================================================
// Events API
// ============================================================================

export async function getEvents(
  category?: EventCategoryType,
): Promise<EventWithTranslation[]> {
  const locale = await getLocale();
  if (category) {
    return fetchAPI<EventWithTranslation[]>(
      `/events?locale=${locale}&category=${category}`,
    );
  }
  return fetchAPI<EventWithTranslation[]>('/events');
}

export async function getEvent(id: string): Promise<Event> {
  return fetchAPI<Event>(`/events/${id}`);
}

export async function getEventBySlug(
  slug: string,
): Promise<EventWithTranslation> {
  return fetchAPI<EventWithTranslation>(`/events/slug/${slug}`);
}

// ============================================================================
// News API
// ============================================================================

export async function getNews(published = true): Promise<News[]> {
  const query = published ? '?published=true' : '';
  return fetchAPI<News[]>(`/news${query}`);
}

export async function getNewsById(id: string): Promise<News> {
  return fetchAPI<News>(`/news/${id}`);
}

export async function getNewsBySlug(
  slug: string,
): Promise<NewsWithTranslation> {
  return fetchAPI<NewsWithTranslation>(`/news/slug/${slug}`);
}

// ============================================================================
// Services API
// ============================================================================

export async function getServices(): Promise<Service[]> {
  return fetchAPI<Service[]>('/services');
}

export async function getServicesByCategory(
  category: string,
): Promise<Service[]> {
  return fetchAPI<Service[]>(
    `/services?category=${encodeURIComponent(category)}`,
  );
}

export async function getServiceBySlug(
  slug: string,
): Promise<ServiceWithTranslation> {
  return fetchAPI<ServiceWithTranslation>(`/services/slug/${slug}`);
}

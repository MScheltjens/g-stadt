export async function getNewsBySlug(slug: string): Promise<News> {
  return fetchAPI<News>(`/news/slug/${slug}`);
}

export async function getServiceBySlug(slug: string): Promise<Service> {
  return fetchAPI<Service>(`/services/slug/${slug}`);
}
/**
 * API Client for G-Stadt Backend
 *
 * Simple fetch wrappers for calling the NestJS API
 */

import { Event, News, Service } from '@repo/types';

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

export async function getEvents(): Promise<Event[]> {
  return fetchAPI<Event[]>('/events');
}

export async function getEvent(id: string): Promise<Event> {
  return fetchAPI<Event>(`/events/${id}`);
}

export async function getEventBySlug(slug: string): Promise<Event> {
  return fetchAPI<Event>(`/events/slug/${slug}`);
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

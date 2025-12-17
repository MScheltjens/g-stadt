/**
 * API Client for G-Stadt Backend
 *
 * Simple fetch wrappers for calling the NestJS API
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

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

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  imageUrl?: string | null;
  createdAt: string;
  updatedAt: string;
}

export async function getEvents(): Promise<Event[]> {
  return fetchAPI<Event[]>('/api/events');
}

export async function getEvent(id: string): Promise<Event> {
  return fetchAPI<Event>(`/api/events/${id}`);
}

// ============================================================================
// News API
// ============================================================================

export interface News {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  imageUrl?: string | null;
  published: boolean;
  publishedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}

export async function getNews(published = true): Promise<News[]> {
  const query = published ? '?published=true' : '';
  return fetchAPI<News[]>(`/api/news${query}`);
}

export async function getNewsById(id: string): Promise<News> {
  return fetchAPI<News>(`/api/news/${id}`);
}

// ============================================================================
// Services API
// ============================================================================

export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  link?: string | null;
  createdAt: string;
  updatedAt: string;
}

export async function getServices(): Promise<Service[]> {
  return fetchAPI<Service[]>('/api/services');
}

export async function getServicesByCategory(
  category: string,
): Promise<Service[]> {
  return fetchAPI<Service[]>(
    `/api/services?category=${encodeURIComponent(category)}`,
  );
}

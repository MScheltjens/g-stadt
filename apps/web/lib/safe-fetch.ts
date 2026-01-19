/**
 * Safe fetch wrapper with Zod validation
 */

import { ZodType } from 'zod';

import { env } from './env';

export async function safeFetch<T>(
  endpoint: string,
  schema: ZodType<T>,
  options?: RequestInit,
  locale?: string,
): Promise<T> {
  const url = `${env.NEXT_PUBLIC_API_URL}${endpoint}`;
  // Debug log for URL and env
  if (typeof window !== 'undefined') {
    console.log('safeFetch URL:', url);

    console.log('safeFetch env.NEXT_PUBLIC_API_URL:', env.NEXT_PUBLIC_API_URL);
  }
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
      'X-Locale': locale || 'en', // default or from app state
    },
    ...options,
  });
  if (!res.ok) {
    throw new Error(`API Error: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new Error(
      `Validation error: ${JSON.stringify(result.error.issues, null, 2)}`,
    );
  }
  return result.data;
}

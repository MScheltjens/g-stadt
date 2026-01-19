/**
 * Safe fetch wrapper with Zod validation
 */

import { ZodType } from 'zod';

import { env } from './env';
import { getLocale } from '@invicity/i18n/server';

export async function safeFetch<T>(
  endpoint: string,
  schema: ZodType<T>,
  options?: RequestInit,
): Promise<T> {
  const locale = await getLocale(); // getLocale should return a string like 'en'
  const url = `${env.NEXT_PUBLIC_API_URL}${endpoint}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
      'X-Locale': locale,
    },
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

/**
 * Safe fetch wrapper with Zod validation
 */

import { Locale, LOCALES } from '@invicity/constants';
import { ZodType } from 'zod';

import { env } from '../env';

export async function safeFetch<T>(
  endpoint: string,
  schema: ZodType<T>,
  locale?: Locale,
  options?: RequestInit,
): Promise<T> {
  const url = `${env.NEXT_PUBLIC_API_URL}${endpoint}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
      'X-Locale': locale ?? LOCALES.en,
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

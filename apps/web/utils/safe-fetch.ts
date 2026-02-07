/**
 * Safe fetch wrapper with Zod validation
 */

import { Locale } from '@kwh/constants';
import { ZodType } from 'zod';

import { env } from '@/utils/env';

export async function safeFetch<T>(
  endpoint: string,
  schema: ZodType<T>,
  options?: RequestInit & { locale?: Locale },
): Promise<T> {
  const url = `${env.NEXT_PUBLIC_API_URL}${endpoint}`;

  const res = await fetch(url, {
    ...options,
    credentials: 'include', // include cookies (to extract the locale on the API side)
    headers: {
      'Content-Type': 'application/json',
      'x-locale': options?.locale ?? 'de', // pass locale in header, not from cookies as the next caching system will not detect changes in cookies, but it will detect changes in headers
      ...(options?.headers || {}),
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

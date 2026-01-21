/**
 * Safe fetch wrapper with Zod validation
 */

import { cookies } from 'next/headers';
import { ZodType } from 'zod';

import { env } from '../env';
export async function safeFetch<T>(
  endpoint: string,
  schema: ZodType<T>,
  options?: RequestInit,
): Promise<T> {
  const url = `${env.NEXT_PUBLIC_API_URL}${endpoint}`;
  // Include NEXT_LOCALE cookie in the request to the API (for locale detection)
  const cookieStore = await cookies();
  const cookieHeader = `NEXT_LOCALE=${cookieStore.get('NEXT_LOCALE')?.value}`;

  const res = await fetch(url, {
    ...options,
    credentials: 'include', // include cookies (to extract the locale on the API side)
    headers: {
      Cookie: cookieHeader,
      'Content-Type': 'application/json',
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

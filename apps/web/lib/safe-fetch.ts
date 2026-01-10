/**
 * Safe fetch wrapper with Zod validation
 */

import { ZodType } from 'zod';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function safeFetch<T>(
  endpoint: string,
  schema: ZodType<T>,
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
  const data = await res.json();
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new Error(
      `Validation error: ${JSON.stringify(result.error.issues, null, 2)}`,
    );
  }
  return result.data;
}

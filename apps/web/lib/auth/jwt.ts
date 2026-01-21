import { JwtPayloadSchema, type Role } from '@invicity/contracts';
import { jwtDecode } from 'jwt-decode';

import { getAccessToken } from './cookies';

/**
 * Decodes and retrieves the current user from the access token
 */
export async function getUser() {
  const token = await getAccessToken();
  if (!token) return null;

  try {
    const payload = jwtDecode(token);
    const parsed = JwtPayloadSchema.safeParse(payload);
    if (!parsed.success) return null;
    return parsed.data;
  } catch {
    return null;
  }
}

/**
 * Retrieves the role of the currently authenticated user
 */
export async function checkUserRole(): Promise<Role | null> {
  const user = await getUser();
  return user?.role ?? null;
}

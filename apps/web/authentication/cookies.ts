import { COOKIE_NAMES } from '@invicity/constants';
import { cookies } from 'next/headers';

import { env } from '@/utils/env';

/**
 * Sets authentication tokens in HTTP-only cookies
 */
export async function setAuthCookies(
  accessToken: string,
  refreshToken?: string,
) {
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAMES.ACCESS_TOKEN, accessToken, {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 15 * 60, // 15 minutes
    path: '/',
  });

  if (refreshToken) {
    cookieStore.set(COOKIE_NAMES.REFRESH_TOKEN, refreshToken, {
      httpOnly: true,
      secure: env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
    });
  }
}

/**
 * Retrieves the access token from cookies
 */
export async function getAccessToken() {
  return (await cookies()).get(COOKIE_NAMES.ACCESS_TOKEN)?.value;
}

/**
 * Retrieves the refresh token from cookies
 */
export async function getRefreshToken() {
  return (await cookies()).get(COOKIE_NAMES.REFRESH_TOKEN)?.value;
}

/**
 * Clears all authentication cookies
 */
export async function clearAuthCookies() {
  (await cookies()).delete(COOKIE_NAMES.ACCESS_TOKEN);
  (await cookies()).delete(COOKIE_NAMES.REFRESH_TOKEN);
}

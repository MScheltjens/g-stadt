/**
 * Authentication utility library for Next.js
 *
 * This module provides secure authentication functions for managing JWT tokens
 * using HTTP-only cookies. It interfaces with the NestJS backend API for user
 * authentication and authorization.
 *
 * @module lib/auth
 */

import { COOKIE_NAMES } from '@invicity/constants';
import type { Role } from '@invicity/contracts';
import { JwtPayloadSchema } from '@invicity/contracts';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { env } from './env';
/**
 * Sets authentication tokens in HTTP-only cookies
 *
 * This function stores both access and refresh tokens securely using HTTP-only cookies,
 * preventing XSS attacks. The access token expires in 15 minutes, while the refresh
 * token lasts for 7 days.
 *
 * @param accessToken - JWT access token from authentication response
 * @param refreshToken - JWT refresh token for obtaining new access tokens
 *
 * @example
 * ```typescript
 * const authResponse = await fetch('/api/auth/login', { ... });
 * const { accessToken, refreshToken } = await authResponse.json();
 * await setAuthCookies(accessToken, refreshToken);
 * ```
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
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    });
  }
}

/**
 * Retrieves the access token from cookies
 *
 * Used for authenticating requests to protected backend endpoints.
 *
 * @returns The JWT access token string or undefined if not present
 *
 * @example
 * ```typescript
 * const token = await getAccessToken();
 * const response = await fetch('/api/protected', {
 *   headers: { Authorization: `Bearer ${token}` }
 * });
 * ```
 */
export async function getAccessToken() {
  return (await cookies()).get(COOKIE_NAMES.ACCESS_TOKEN)?.value;
}

/**
 * Retrieves the refresh token from cookies
 *
 * Used for obtaining a new access token when the current one expires.
 *
 * @returns The JWT refresh token string or undefined if not present
 *
 * @example
 * ```typescript
 * const refreshToken = await getRefreshToken();
 * const response = await fetch('/api/auth/refresh', {
 *   body: JSON.stringify({ refreshToken })
 * });
 * ```
 */
export async function getRefreshToken() {
  return (await cookies()).get(COOKIE_NAMES.REFRESH_TOKEN)?.value;
}

/**
 * Clears all authentication cookies
 *
 * This function should be called during logout to remove both access and refresh tokens.
 * After clearing cookies, the user will need to log in again to access protected routes.
 *
 * @example
 * ```typescript
 * // In a server action
 * export async function logout() {
 *   await clearAuthCookies();
 *   redirect('/login');
 * }
 * ```
 */
export async function clearAuthCookies() {
  (await cookies()).delete(COOKIE_NAMES.ACCESS_TOKEN);
  (await cookies()).delete(COOKIE_NAMES.REFRESH_TOKEN);
}

/**
 * Decodes and retrieves the current user from the access token
 *
 * This function extracts user information from the JWT access token without
 * making an API call. Returns null if the token is missing or invalid.
 *
 * @returns Decoded user information or null if not authenticated
 *
 * @example
 * ```typescript
 * const user = await getUser();
 * if (user) {
 *   console.log(`Logged in as: ${user.email}`);
 *   console.log(`Role: ${user.role}`);
 * }
 * ```
 */
export async function getUser() {
  const token = await getAccessToken();
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return JwtPayloadSchema.parse(decoded);
  } catch {
    return null;
  }
}

/**
 * Retrieves the role of the currently authenticated user
 *
 * This function extracts the user's role from the JWT access token.
 * Returns null if the user is not authenticated or the token is invalid.
 *
 * @returns The user's role ('ADMIN', 'STAFF', or 'CITIZEN') or null if not authenticated
 *
 * @example
 * ```typescript
 * const role = await checkUserRole();
 * if (role === 'ADMIN') {
 *   // Show admin content
 * }
 * ```
 */
export async function checkUserRole(): Promise<Role | null> {
  const user = await getUser();
  return user?.role ?? null;
}

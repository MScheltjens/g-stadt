/**
 * Authentication utility library for Next.js
 *
 * This module provides secure authentication functions for managing JWT tokens
 * using HTTP-only cookies. It interfaces with the NestJS backend API for user
 * authentication and authorization.
 *
 * @module lib/auth
 */

import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';
import type { JwtPayload } from '@repo/types';

/**
 * Base API URL for backend authentication endpoints
 * Falls back to localhost:3001 if NEXT_PUBLIC_API_URL is not set
 */
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

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
  refreshToken: string,
) {
  (await cookies()).set('accessToken', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 15 * 60, // 15 minutes
  });

  (await cookies()).set('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });
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
  return (await cookies()).get('accessToken')?.value;
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
  return (await cookies()).get('refreshToken')?.value;
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
  (await cookies()).delete('accessToken');
  (await cookies()).delete('refreshToken');
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
export async function getUser(): Promise<JwtPayload | null> {
  const token = await getAccessToken();
  if (!token) return null;

  try {
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded;
  } catch {
    return null;
  }
}

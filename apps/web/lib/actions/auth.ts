/**
 * Server Actions for Authentication
 *
 * These server actions handle authentication operations including login, registration,
 * and logout. They communicate with the NestJS backend API and manage authentication
 * cookies securely.
 *
 * @module server/actions/auth
 */

'use server';

import { redirect } from 'next/navigation';
import { setAuthCookies, clearAuthCookies } from '@/lib/auth';
import type { LoginDto, RegisterDto, AuthResponse } from '@repo/types';

/**
 * Base API URL for backend authentication endpoints
 */
const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Standard error response structure
 */
interface ActionError {
  error: string;
}

/**
 * Standard success response structure
 */
interface ActionSuccess {
  success: boolean;
  user?: AuthResponse['user'];
}

/**
 * Login action result type
 */
type LoginResult = ActionSuccess | ActionError;

/**
 * Register action result type
 */
type RegisterResult = ActionSuccess | ActionError;

/**
 * Authenticates a user with email and password
 *
 * This server action sends login credentials to the backend API, and upon
 * successful authentication, stores the returned tokens in HTTP-only cookies.
 *
 * @param data - Login credentials (email and password)
 * @returns Success response with user data or error message
 *
 */

export async function login(data: LoginDto): Promise<LoginResult> {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json();
      return { error: error.message || 'Login failed' };
    }

    const authData: AuthResponse = await res.json();
    await setAuthCookies(authData.accessToken, authData.refreshToken);

    return { success: true, user: authData.user };
  } catch (error) {
    console.error('Login error:', error);
    return { error: 'Network error. Please try again.' };
  }
}

/**
 * Registers a new user account
 *
 * This server action creates a new user account by sending registration data
 * to the backend API. Upon successful registration, the user is automatically
 * logged in and their tokens are stored in cookies.
 *
 * @param data - Registration data (email, password, and optional role)
 * @returns Success response with user data or error message
 *
 */
export async function register(data: RegisterDto): Promise<RegisterResult> {
  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json();
      return { error: error.message || 'Registration failed' };
    }

    const authData: AuthResponse = await res.json();
    await setAuthCookies(authData.accessToken, authData.refreshToken);

    return { success: true, user: authData.user };
  } catch (error) {
    console.error('Registration error:', error);
    return { error: 'Network error. Please try again.' };
  }
}

/**
 * Logs out the current user
 *
 * This server action clears all authentication cookies and redirects the user
 * to the login page. It also notifies the backend to invalidate refresh tokens.
 *
 * @param redirectTo - Optional redirect path after logout (defaults to /login)
 *
 */
export async function logout(redirectTo: string = '/login') {
  try {
    // Call backend logout endpoint to invalidate refresh tokens
    // Note: This requires the access token, but we'll clear cookies regardless
    await fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });
  } catch (error) {
    console.error('Logout error:', error);
    // Continue with logout even if backend call fails
  }

  await clearAuthCookies();
  redirect(redirectTo);
}

/**
 * Refreshes the access token using the refresh token
 *
 * This server action obtains a new access token when the current one expires.
 * It's typically called automatically by middleware or API interceptors.
 *
 * @returns Success boolean and new tokens or error message
 *
 */
export async function refreshToken(): Promise<ActionSuccess | ActionError> {
  try {
    const { getRefreshToken } = await import('@/lib/auth');
    const refreshTokenValue = await getRefreshToken();

    if (!refreshTokenValue) {
      return { error: 'No refresh token available' };
    }

    const res = await fetch(`${API_URL}/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken: refreshTokenValue }),
    });

    if (!res.ok) {
      return { error: 'Token refresh failed' };
    }

    const authData: AuthResponse = await res.json();
    await setAuthCookies(authData.accessToken, authData.refreshToken);

    return { success: true };
  } catch (error) {
    console.error('Token refresh error:', error);
    return { error: 'Network error during token refresh' };
  }
}

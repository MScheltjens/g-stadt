'use server';

import type { AuthResponse, LoginInput, RegisterInput } from '@repo/contracts';
import { redirect } from 'next/navigation';

import { clearAuthCookies, setAuthCookies } from '@/lib/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface ActionError {
  error: string;
}

interface ActionSuccess {
  success: boolean;
  user?: AuthResponse['user'];
}

type LoginResult = ActionSuccess | ActionError;
type RegisterResult = ActionSuccess | ActionError;

/* =========================
   LOGIN
   ========================= */

export async function login(data: LoginInput): Promise<LoginResult> {
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
    await setAuthCookies(
      authData.tokens.accessToken,
      authData.tokens.refreshToken,
    );

    return { success: true, user: authData.user };
  } catch (error) {
    console.error('Login error:', error);
    return { error: 'Network error. Please try again.' };
  }
}

/* =========================
   REGISTER
   ========================= */

export async function register(data: RegisterInput): Promise<RegisterResult> {
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
    await setAuthCookies(
      authData.tokens.accessToken,
      authData.tokens.refreshToken,
    );

    return { success: true, user: authData.user };
  } catch (error) {
    console.error('Registration error:', error);
    return { error: 'Network error. Please try again.' };
  }
}

/* =========================
   LOGOUT
   ========================= */

export async function logout(redirectTo: string = '/login') {
  try {
    await fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });
  } catch (error) {
    console.error('Logout error:', error);
  }

  await clearAuthCookies();
  redirect(redirectTo);
}

/* =========================
   REFRESH TOKEN
   ========================= */

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
      body: JSON.stringify({
        refreshToken: refreshTokenValue,
      }),
    });

    if (!res.ok) {
      return { error: 'Token refresh failed' };
    }

    const authData: AuthResponse = await res.json();
    await setAuthCookies(
      authData.tokens.accessToken,
      authData.tokens.refreshToken,
    );

    return { success: true };
  } catch (error) {
    console.error('Token refresh error:', error);
    return { error: 'Network error during token refresh' };
  }
}

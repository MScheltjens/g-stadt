'use server';

import type {
  AuthResponse,
  LoginInput,
  RegisterInput,
} from '@invicity/contracts';
import {
  AuthResponseSchema,
  LoginInputSchema,
  RegisterInputSchema,
} from '@invicity/contracts';
import { redirect } from 'next/navigation';

import { clearAuthCookies, setAuthCookies } from '@/lib/auth';

import { env } from '../env';
import { safeFetch } from '../safe-fetch';

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
export async function login(input: LoginInput): Promise<LoginResult> {
  const parsedData = LoginInputSchema.parse(input);
  const data = await safeFetch('/auth/login', AuthResponseSchema, {
    method: 'POST',
    body: JSON.stringify(parsedData),
  });
  try {
    // Validate input
    const input = LoginInputSchema.parse(data);
    const authData = await safeFetch('/auth/login', AuthResponseSchema, {
      method: 'POST',
      body: JSON.stringify(input),
    });
    await setAuthCookies(
      authData.tokens.accessToken,
      authData.tokens.refreshToken,
    );
    return { success: true, user: authData.user };
  } catch (error: any) {
    console.error('Login error:', error);
    return { error: error.message || 'Login failed' };
  }
}

/* =========================
   REGISTER
   ========================= */
export async function register(input: RegisterInput): Promise<RegisterResult> {
  const data = await safeFetch('/auth/register', AuthResponseSchema, {
    method: 'POST',
    body: JSON.stringify(input),
  });
  try {
    // Validate input
    const input = RegisterInputSchema.parse(data);
    const authData = await safeFetch('/auth/register', AuthResponseSchema, {
      method: 'POST',
      body: JSON.stringify(input),
    });
    await setAuthCookies(
      authData.tokens.accessToken,
      authData.tokens.refreshToken,
    );
    return { success: true, user: authData.user };
  } catch (error: any) {
    console.error('Registration error:', error);
    return { error: error.message || 'Registration failed' };
  }
}

/* =========================
LOGOUT
========================= */

const API_URL = env.NEXT_PUBLIC_API_URL;

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

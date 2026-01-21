'use server';
import { Locale, ROUTES } from '@invicity/constants';
import {
  type AuthResponse,
  AuthResponseSchema,
  type RegisterInput,
  RegisterInputSchema,
  type SignInInput,
  SignInInputSchema,
} from '@invicity/contracts';
import { redirect } from 'next/navigation';

import {
  ActionError,
  ActionSuccess,
  LoginResult,
  RegisterResult,
} from '@/types';

import { safeFetch } from '../api';
import { clearAuthCookies, getRefreshToken, setAuthCookies } from '../auth';
import { env } from '../env';

/* =========================
   LOGIN
   ========================= */
export async function signIn(
  data: SignInInput,
  locale?: Locale,
): Promise<LoginResult> {
  try {
    // Validate input
    const input = SignInInputSchema.parse(data);
    const authData = await safeFetch(
      '/auth/login',
      AuthResponseSchema,
      locale,
      {
        method: 'POST',
        body: JSON.stringify(input),
      },
    );
    await setAuthCookies(
      authData.tokens.accessToken,
      authData.tokens.refreshToken,
    );
    return { success: true, user: authData.user };
  } catch (error: unknown) {
    console.error('Login error:', error);
    const message = error instanceof Error ? error.message : 'Login failed';
    return { error: message };
  }
}

/* =========================
   REGISTER
   ========================= */
export async function register(
  input: RegisterInput,
  locale?: Locale,
): Promise<RegisterResult> {
  try {
    const validInput = RegisterInputSchema.parse(input);
    const authData = await safeFetch(
      '/auth/register',
      AuthResponseSchema,
      locale,
      {
        method: 'POST',
        body: JSON.stringify(validInput),
      },
    );
    await setAuthCookies(
      authData.tokens.accessToken,
      authData.tokens.refreshToken,
    );
    return { success: true, user: authData.user };
  } catch (error: unknown) {
    console.error('Registration error:', error);
    const message =
      error instanceof Error ? error.message : 'Registration failed';
    return { error: message };
  }
}

/* =========================
LOGOUT
========================= */

const API_URL = env.NEXT_PUBLIC_API_URL;

export async function logout(redirectTo: string = ROUTES.SIGNIN) {
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

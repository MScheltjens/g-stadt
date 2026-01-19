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
  RefreshTokenInputSchema,
} from '@invicity/contracts';
import { redirect } from 'next/navigation';

import { clearAuthCookies, setAuthCookies } from '@/lib/auth';

import { safeFetch } from '../safe-fetch';
import { env } from '../env';

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
  try {
    const validInput = RegisterInputSchema.parse(input);
    const authData = await safeFetch('/auth/register', AuthResponseSchema, {
      method: 'POST',
      body: JSON.stringify(validInput),
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

export async function refreshToken() {
  try {
    const { getRefreshToken } = await import('@/lib/auth');
    const refreshTokenValue = await getRefreshToken();
    if (!refreshTokenValue) {
      return { error: 'No refresh token available' };
    }
    const input = RefreshTokenInputSchema.parse({
      refreshToken: refreshTokenValue,
    });
    const authData = await safeFetch('/auth/refresh', AuthResponseSchema, {
      method: 'POST',
      body: JSON.stringify(input),
    });
    await setAuthCookies(
      authData.tokens.accessToken,
      authData.tokens.refreshToken,
    );
    return { success: true };
  } catch (error: any) {
    console.error('Token refresh error:', error);
    return { error: error.message || 'Token refresh failed' };
  }
}

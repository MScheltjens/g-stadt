import { z } from 'zod';

import { AuthUserSchema } from './auth-user.schema.js';

/* =========================
   INPUTS (COMMANDS)
   ========================= */

// Base auth input schema
export const BaseAuthInputSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type BaseAuthInput = z.infer<typeof BaseAuthInputSchema>;

// Sign in existing user (public)
export const SignInInputSchema = BaseAuthInputSchema;

export type SignInInput = z.infer<typeof SignInInputSchema>;

// Register new user (public)
export const RegisterInputSchema = z
  .object({
    email: z.email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterInput = z.infer<typeof RegisterInputSchema>;

// Refresh token (authenticated user)
export const RefreshTokenInputSchema = z.object({
  refreshToken: z.string().min(1),
});

export type RefreshTokenInput = z.infer<typeof RefreshTokenInputSchema>;

// Change password (authenticated user)
export const ChangePasswordInputSchema = z.object({
  currentPassword: z.string().min(8),
  newPassword: z.string().min(8),
});

export type ChangePasswordInput = z.infer<typeof ChangePasswordInputSchema>;

// Reset password using token (public)
export const ResetPasswordInputSchema = z.object({
  token: z.string().min(1),
  newPassword: z.string().min(8),
});

export type ResetPasswordInput = z.infer<typeof ResetPasswordInputSchema>;

// Forgot password (public)
export const ForgotPasswordInputSchema = BaseAuthInputSchema.pick({
  email: true,
});

export type ForgotPasswordInput = z.infer<typeof ForgotPasswordInputSchema>;

/* =========================
   OUTPUTS (RESULTS)
   ========================= */

// Auth tokens
export const AuthTokensSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string().optional(),
});

export type AuthTokens = z.infer<typeof AuthTokensSchema>;

// Auth response (user + tokens, public)
export const AuthResponseSchema = z.object({
  user: AuthUserSchema,
  tokens: AuthTokensSchema,
});

export type AuthResponse = z.infer<typeof AuthResponseSchema>;

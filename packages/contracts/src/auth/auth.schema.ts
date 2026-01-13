import { z } from 'zod';
import { AuthUserSchema } from './auth-user.schema';

/* =========================
   INPUTS (COMMANDS)
   ========================= */

export const LoginInputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type LoginInput = z.infer<typeof LoginInputSchema>;

export const RegisterInputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type RegisterInput = z.infer<typeof RegisterInputSchema>;

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
export const ForgotPasswordInputSchema = z.object({
  email: z.string().email(),
});

export type ForgotPasswordInput = z.infer<typeof ForgotPasswordInputSchema>;

/* =========================
   OUTPUTS (RESULTS)
   ========================= */

export const AuthTokensSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string().optional(),
});

export type AuthTokens = z.infer<typeof AuthTokensSchema>;

export const AuthResponseSchema = z.object({
  user: AuthUserSchema,
  tokens: AuthTokensSchema,
});

export type AuthResponse = z.infer<typeof AuthResponseSchema>;

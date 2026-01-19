import { z } from 'zod';
import { BaseEnvSchema } from './base.env.schema.js';

export const apiEnvSchema = BaseEnvSchema.extend({
  PORT: z.coerce.number().default(3000),

  DATABASE_URL: z.url(),

  JWT_SECRET: z.string().min(32),
  JWT_REFRESH_SECRET: z.string().min(32),

  JWT_EXPIRES_IN: z.string().default('15m'),
  JWT_REFRESH_EXPIRES_IN: z.string().default('7d'),
});

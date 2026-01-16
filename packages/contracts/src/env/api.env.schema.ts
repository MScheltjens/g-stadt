import { z } from 'zod';
import { baseEnvSchema } from './base.env.schema';

export const apiEnvSchema = baseEnvSchema.extend({
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
});

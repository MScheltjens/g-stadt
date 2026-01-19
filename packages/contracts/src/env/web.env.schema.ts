import { z } from 'zod';
import { BaseEnvSchema } from './base.env.schema.js';

export const webEnvSchema = BaseEnvSchema.extend({
  NEXT_PUBLIC_API_URL: z.url(),
});

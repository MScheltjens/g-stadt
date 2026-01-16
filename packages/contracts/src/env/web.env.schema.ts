import { z } from 'zod';

import { baseEnvSchema } from './base.env.schema';

export const webEnvSchema = baseEnvSchema.extend({
  NEXT_PUBLIC_API_URL: z.url(),
});

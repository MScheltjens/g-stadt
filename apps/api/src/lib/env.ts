import 'dotenv/config';

import { apiEnvSchema } from '@invicity/contracts';

const parsed = apiEnvSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('❌ Invalid API environment variables');
  console.error(parsed.error.format());
  process.exit(1);
}

export const env = parsed.data;

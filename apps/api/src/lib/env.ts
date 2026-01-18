import { apiEnvSchema } from '@invicity/contracts';

let cachedEnv: ReturnType<typeof apiEnvSchema.parse> | null = null;

export function getEnv() {
  if (cachedEnv) return cachedEnv;

  const parsed = apiEnvSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error('❌ Invalid API environment variables');
    console.error(parsed.error.format());
    process.exit(1);
  }

  cachedEnv = parsed.data;
  return cachedEnv;
}

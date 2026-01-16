import type { NextConfig } from 'next';
import createNextIntlPlugin from '@invicity/i18n/plugin';

const nextConfig = {
  allowedDevOrigins: ['http://localhost:3000'],
  transpilePackages: ['@invicity/ui', '@invicity/i18n'],
  serverExternalPackages: ['@prisma/client', 'pg', '@invicity/db'],
} satisfies NextConfig;

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

export default withNextIntl(nextConfig);

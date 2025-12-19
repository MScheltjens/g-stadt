import type { NextConfig } from 'next';
import createNextIntlPlugin from '@repo/i18n/plugin';

const nextConfig = {
  allowedDevOrigins: ['http://localhost:3000'],
  transpilePackages: ['@repo/ui', '@repo/i18n'],
} satisfies NextConfig;

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

export default withNextIntl(nextConfig);

import type { NextConfig } from 'next';
import createNextIntlPlugin from '@invicity/i18n/plugin';

const nextConfig = {
  allowedDevOrigins: ['http://localhost:3000'],
  transpilePackages: ['@invicity/ui', '@invicity/i18n'],
  output: 'standalone',
} satisfies NextConfig;

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

export default withNextIntl(nextConfig);

import { getTranslations } from '@invicity/i18n';
import { Metadata } from 'next/types';

import { LayoutProps, MetadataProps } from '@/types';

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'auth.layout.meta',
  });
  return {
    title: t('title'),
    description: t('description'),
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function AuthLayout({ children }: LayoutProps) {
  return children;
}

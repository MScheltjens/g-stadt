import { LayoutProps, MetadataProps } from '@/types/next-page';
import { getTranslations } from '@repo/i18n/server';
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';

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

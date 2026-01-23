import { getTranslations } from '@invicity/i18n';
import { Metadata } from 'next';

import { Footer } from '@/components/layout/footer';
import { TopNav } from '@/components/navigation/top-navigation';
import type { LayoutProps, MetadataProps } from '@/types';

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'public.meta',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function PublicLayout({ children }: LayoutProps) {
  return (
    <>
      <TopNav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}

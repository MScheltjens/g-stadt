import { getTranslations } from '@kwh/i18n';
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
  return (
    <div className="max-w-md p-6 mx-auto my-10 bg-white rounded-md shadow-md">
      {children}
    </div>
  );
}

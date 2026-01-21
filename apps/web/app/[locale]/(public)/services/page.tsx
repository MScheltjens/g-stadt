import { Locale } from '@invicity/constants';

import { getAllServicesByCategory } from '@/lib/api';
import { PageProps } from '@/types';
import { PublicPageHeader } from '@/components/layout';
import { getTranslations } from '@invicity/i18n';

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations('services');
  const servicesList = await getAllServicesByCategory(locale as Locale);

  return (
    <>
      <PublicPageHeader title={t('title')} />
      <pre>{JSON.stringify(servicesList, null, 2)}</pre>;
    </>
  );
}

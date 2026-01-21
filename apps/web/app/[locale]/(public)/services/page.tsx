import { getTranslations } from '@invicity/i18n';

import { PublicPageHeader } from '@/components/layout';
import { Breadcrumbs } from '@/components/navigation/breadcrumb/Breadcrumbs';
import { getAllServicesByCategory } from '@/lib/api';

export default async function ServicesPage() {
  const t = await getTranslations('services');
  const servicesList = await getAllServicesByCategory();

  return (
    <>
      <Breadcrumbs slugToLabel={{ services: t('title') }} />
      <PublicPageHeader title={t('title')} />
      <pre>{JSON.stringify(servicesList, null, 2)}</pre>;
    </>
  );
}

import { getTranslations } from '@invicity/i18n';

import { PageNavigation } from '@/components/navigation';
import { getAllServicesByCategory } from '@/lib/api';
import { PageHeading } from '@/components/layout';

export default async function ServicesPage() {
  const t = await getTranslations('services');
  const servicesList = await getAllServicesByCategory();

  return (
    <>
      <PageNavigation slugToLabel={{ services: t('title') }} />
      <PageHeading title={t('title')} description={t('description')} />
    </>
  );
}

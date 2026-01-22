import { getTranslations } from '@invicity/i18n';

import { PageHeading } from '@/components/layout/page-heading';
import { ComingSoon } from '@/components/marketing/coming-soon';
import { PageNavigation } from '@/components/navigation/page-navigation';

export default async function ServicesPage() {
  const t = await getTranslations('services');

  return (
    <>
      <PageNavigation slugToLabel={{ services: t('title') }} />
      <PageHeading title={t('title')} description={t('description')} />
      <ComingSoon />
    </>
  );
}

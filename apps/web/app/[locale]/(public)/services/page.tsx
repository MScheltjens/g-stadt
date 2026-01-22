import { getTranslations } from '@invicity/i18n';

import { PageHeading } from '@/components/layout';
import { ComingSoon } from '@/components/marketing';
import { PageNavigation } from '@/components/navigation';

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

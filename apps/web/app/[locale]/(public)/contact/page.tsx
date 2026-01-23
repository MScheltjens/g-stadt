import { getTranslations } from '@kwh/i18n';

import { PageHeading } from '@/components/layout/page-heading';
import { ComingSoon } from '@/components/marketing/coming-soon';
import { PageNavigation } from '@/components/navigation/page-navigation';

export default async function ContactPage() {
  const t = await getTranslations('contact');
  return (
    <>
      <PageNavigation slugToLabel={{ contact: t('title') }} />
      <PageHeading title={t('title')} description={t('description')} />
      <ComingSoon />
    </>
  );
}

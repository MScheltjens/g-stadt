import { getTranslations } from '@invicity/i18n';

import { PageHeading } from '@/components/layout/page/page-heading';
import { ComingSoon } from '@/components/marketing/coming-soon';
import { PageNavigation } from '@/components/navigation/public-page';

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

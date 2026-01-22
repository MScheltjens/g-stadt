import { getTranslations } from '@invicity/i18n';

import { PageHeading } from '@/components/layout';
import { ComingSoon } from '@/components/marketing';
import { PageNavigation } from '@/components/navigation';

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

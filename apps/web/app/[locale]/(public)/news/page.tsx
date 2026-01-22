import { getTranslations } from '@invicity/i18n';

import { PageHeading } from '@/components/layout';
import { ComingSoon } from '@/components/marketing';
import { PageNavigation } from '@/components/navigation';

export default async function NewsPage() {
  const t = await getTranslations('news');
  return (
    <>
      <PageNavigation slugToLabel={{ news: t('title') }} />
      <PageHeading title={t('title')} description={t('description')} />
      <ComingSoon />
    </>
  );
}

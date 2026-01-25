import { ServicesSearchParamsSchema } from '@kwh/contracts';
import { getTranslations } from '@kwh/i18n';

import { PageHeading } from '@/components/layout/page-heading';
import { ComingSoon } from '@/components/marketing/coming-soon';
import { PageNavigation } from '@/components/navigation/page-navigation';
import { getAllServicesByCategory } from '@/server/services/services.service';
import type { PageProps } from '@/types';

export default async function ServicesPage({ searchParams }: PageProps) {
  const t = await getTranslations('services');

  const result = ServicesSearchParamsSchema.safeParse(searchParams);

  if (!result.success) {
    console.error('Invalid search params', result.error);
    // fallback values
    return <ComingSoon />; // render the coming soon if api does not work
  }

  const data = await getAllServicesByCategory(result.data);

  return (
    <>
      <PageNavigation slugToLabel={{ services: t('title') }} />
      <PageHeading title={t('title')} description={t('description')} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

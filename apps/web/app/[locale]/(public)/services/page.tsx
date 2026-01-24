import { ServicesSearchParamsSchema } from '@kwh/contracts';
import { getTranslations } from '@kwh/i18n';
import { notFound } from 'next/navigation';

import { PageHeading } from '@/components/layout/page-heading';
import { PageNavigation } from '@/components/navigation/page-navigation';
import { getServiceList } from '@/server/services/services.service';
import type { PageProps } from '@/types';

export default async function ServicesPage({ searchParams }: PageProps) {
  const t = await getTranslations('services');

  const result = ServicesSearchParamsSchema.safeParse(searchParams);

  if (!result.success) {
    console.error('Invalid search params', result.error);
    // fallback values
    return notFound(); // or redirect / default render
  }

  const { page, pagesize, query } = result.data;

  const data = await getServiceList({ page, pagesize, query });

  return (
    <>
      <PageNavigation slugToLabel={{ services: t('title') }} />
      <PageHeading title={t('title')} description={t('description')} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

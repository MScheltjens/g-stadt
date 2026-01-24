import { getTranslations } from '@kwh/i18n';

import { PageHeading } from '@/components/layout/page-heading';
import { ComingSoon } from '@/components/marketing/coming-soon';
import { PageNavigation } from '@/components/navigation/page-navigation';
import type { PageProps } from '@/types';
import { ServicesSearchParamsSchema } from '@kwh/contracts';
import { notFound } from 'next/navigation';

export default async function ServicesPage({ searchParams }: PageProps) {
  const t = await getTranslations('services');

  const result = ServicesSearchParamsSchema.safeParse(searchParams);

  if (!result.success) {
    console.error('Invalid search params', result.error);
    // fallback values
    return notFound(); // or redirect / default render
  }

  const { page, pagesize, query } = result.data;

  return (
    <>
      <PageNavigation slugToLabel={{ services: t('title') }} />
      <PageHeading title={t('title')} description={t('description')} />
      <ComingSoon />
    </>
  );
}

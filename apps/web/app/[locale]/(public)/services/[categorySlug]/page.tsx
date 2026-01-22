import { notFound } from 'next/navigation';
import { Metadata } from 'next/types';

import { PageHeading } from '@/components/layout';
import { ComingSoon } from '@/components/marketing';
import { Breadcrumbs } from '@/components/navigation';
import { getCategoryWithServices } from '@/lib/api/categories.api';
import { MetadataProps } from '@/types';

type ServicesCategoryMetadataProps = MetadataProps<{
  categorySlug: string;
}>;

export async function generateMetadata({
  params,
}: ServicesCategoryMetadataProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const categoryData = await getCategoryWithServices(categorySlug);

  return {
    title: categoryData.translations[0]?.label || 'Services',
  };
}

export default async function ServicesCategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;
  const categoryWithServices = await getCategoryWithServices(categorySlug);

  // Prepare the mapping: { slug: label }
  const slugToLabel =
    categoryWithServices && categoryWithServices.translations[0]
      ? {
          [categoryWithServices.translations[0].slug]:
            categoryWithServices.translations[0].label,
        }
      : {};

  if (!categoryWithServices) return notFound();

  return (
    <>
      <Breadcrumbs slugToLabel={slugToLabel} />
      <PageHeading title={slugToLabel[categorySlug] || 'Services'} />
      <ComingSoon />
    </>
  );
}

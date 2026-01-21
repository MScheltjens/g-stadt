import { Metadata } from 'next/types';

import { PublicPageHeader } from '@/components/layout';
import { Breadcrumbs } from '@/components/navigation/breadcrumb/Breadcrumbs';
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

  if (!categoryData) {
    return {
      title: 'Services',
    };
  }

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

  if (categoryWithServices) {
    return (
      <>
        <Breadcrumbs slugToLabel={slugToLabel} />
        <PublicPageHeader title={slugToLabel[categorySlug] || 'Services'} />
        {/* Render your category/services UI here */}
        <pre>{JSON.stringify(categoryWithServices, null, 2)}</pre>
      </>
    );
  }

  return <div>Category not found</div>;
}

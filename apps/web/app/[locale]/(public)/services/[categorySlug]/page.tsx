import { Metadata } from 'next';

import { PublicPageLayout } from '@/components/layout/public-page-layout';
import { getCategoryServices } from '@/server/services/services.service';

type CategoryServicesPageProps = {
  params: Promise<{
    categorySlug: string;
  }>;
};

export async function generateMetadata({
  params,
}: CategoryServicesPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const data = await getCategoryServices(categorySlug);

  return {
    title: data ? `Services in ${data.label} category` : 'Services',
    description: data
      ? `Explore our services in the ${data.label} category. Find the right service for your needs and get the help you deserve.`
      : 'Explore our services. Find the right service for your needs and get the help you deserve.',
  };
}

export default async function ServicesCategoryPage({
  params,
}: CategoryServicesPageProps) {
  const { categorySlug } = await params;
  console.log('CategorySlug:', categorySlug);
  const data = await getCategoryServices(categorySlug);
  const slugToLabel = { [categorySlug]: data.label };

  return (
    <PublicPageLayout
      title={data.label}
      description={data.description}
      slugToLabel={slugToLabel}
    >
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </PublicPageLayout>
  );
}

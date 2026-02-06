import { getTranslations } from '@kwh/i18n';

import { PublicPageLayout } from '@/components/layout/public-page-layout';
import { ServiceFilterListWrapper } from '@/components/ui/service-filter-list-wrapper';
import { getCategories } from '@/server/services/categories.service';
import { getServices } from '@/server/services/services.service';

type ServicesPageProps = {
  searchParams: Promise<{
    page?: number;
    limit?: number;
    categories?: string | string[];
    search?: string;
  }>;
};

export default async function ServicesPage({
  searchParams,
}: ServicesPageProps) {
  const searchParamsResolved = await searchParams;
  const t = await getTranslations('services');

  // Get categories first to map slugs to ids
  const categories = await getCategories('service');

  // Parse category slugs from URL (category param)
  let categorySlugs: string[] | undefined = undefined;
  if (searchParamsResolved.categories) {
    if (Array.isArray(searchParamsResolved.categories)) {
      categorySlugs = searchParamsResolved.categories;
    } else if (typeof searchParamsResolved.categories === 'string') {
      categorySlugs = searchParamsResolved.categories
        .split(',')
        .filter(Boolean);
    }
  }

  // Always fetch services, filtered by categories if present
  const services = await getServices({
    ...searchParamsResolved,
    categories: categorySlugs,
  });

  return (
    <PublicPageLayout
      title={t('title')}
      description={t('description')}
      slugToLabel={{ services: t('title') }}
    >
      <ServiceFilterListWrapper categories={categories} services={services} />
    </PublicPageLayout>
  );
}

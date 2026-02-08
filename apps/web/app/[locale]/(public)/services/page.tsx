import { ServiceSort } from '@kwh/constants';
import { getTranslations } from '@kwh/i18n';

import { PublicPageLayout } from '@/components/layout/public-page-layout';
import { ServiceFilterListWrapper } from '@/components/ui/service-filter-list-wrapper';
import { getCategories } from '@/server/services/categories.service';
import { getServices } from '@/server/services/services.service';

// Disable caching so sort/filter changes always re-fetch.
export const dynamic = 'force-dynamic';

type ServicesPageProps = {
  searchParams: Promise<{
    page?: number;
    limit?: number;
    categories?: string | string[];
    search?: string;
    sort?: ServiceSort;
  }>;
};

export default async function ServicesPage({
  searchParams,
}: ServicesPageProps) {
  const searchParamsResolved = await searchParams;
  const t = await getTranslations('services');

  // Get categories first so we can resolve slugs to ids.
  const categories = await getCategories('service');

  // Parse category slugs from the URL.
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

  // Fetch services using parsed filters.
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

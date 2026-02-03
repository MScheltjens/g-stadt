import { ServicesQuery } from '@kwh/contracts';
import { getTranslations } from '@kwh/i18n';

import { PageHeading } from '@/components/layout/page-heading';
import { PageNavigation } from '@/components/navigation/page-navigation';
import { ServiceList } from '@/components/service-list';
import { CategoryFilter } from '@/components/ui/category-filter';
import { getCategories } from '@/server/services/categories.service';
import { getServices } from '@/server/services/services.service';

type ServicesPageProps = {
  searchParams: Promise<ServicesQuery>;
};
export default async function ServicesPage({
  searchParams,
}: ServicesPageProps) {
  const searchParamsResolved = await searchParams;

  // This is a server component, so we can't use useState/useRouter directly.
  // We'll use the searchParams to control pagination.
  const t = await getTranslations('services');
  const services = await getServices(searchParamsResolved);
  const categories = await getCategories();

  // Handler for page change (client-side navigation)
  // This will only work if you convert this to a client component or use a wrapper.
  // For now, show how to pass the handler:

  return (
    <>
      <PageNavigation slugToLabel={{ services: t('title') }} />
      <PageHeading title={t('title')} description={t('description')} />
      <div className="flex">
        <CategoryFilter
          categories={categories}
          selectedCategoryId={searchParamsResolved.categoryId || ''}
        />
        <ServiceList services={services} />
      </div>
    </>
  );
}

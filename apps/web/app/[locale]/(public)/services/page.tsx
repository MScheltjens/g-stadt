import { getTranslations } from '@kwh/i18n';

import { PageHeading } from '@/components/layout/page-heading';
import { PageNavigation } from '@/components/navigation/page-navigation';
import { ServiceList } from '@/components/service-list';
import { CategoryFilter } from '@/components/ui/category-filter';
import { getCategories } from '@/server/services/categories.service';
import { getServices } from '@/server/services/services.service';

type ServicesPageProps = {
  searchParams: Promise<{ category: string | undefined }>;
};

export default async function ServicesPage({
  searchParams,
}: ServicesPageProps) {
  const { category } = await searchParams;

  const t = await getTranslations('services');
  const services = await getServices(category);
  const categories = await getCategories();

  // get list of all services

  return (
    <>
      <PageNavigation slugToLabel={{ services: t('title') }} />
      <PageHeading title={t('title')} description={t('description')} />
      <div className="flex">
        <CategoryFilter categories={categories} selectedCategoryId={category} />
        <ServiceList services={services} />
      </div>
    </>
  );
}

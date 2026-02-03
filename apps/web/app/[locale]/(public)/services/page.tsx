import { ServicesQuery } from '@kwh/contracts';
import { getTranslations } from '@kwh/i18n';

import { PageHeading } from '@/components/layout/page-heading';
import { PageNavigation } from '@/components/navigation/page-navigation';
import { ServiceFilterListWrapper } from '@/components/ui/service-filter-list-wrapper';
import { getCategories } from '@/server/services/categories.service';
import { getServices } from '@/server/services/services.service';
import KnowhereLogo from '@/components/svg/logo.title';

type ServicesPageProps = {
  searchParams: Promise<ServicesQuery>;
};
export default async function ServicesPage({
  searchParams,
}: ServicesPageProps) {
  const searchParamsResolved = await searchParams;
  const t = await getTranslations('services');
  const services = await getServices(searchParamsResolved);
  const categories = await getCategories('service');

  return (
    <>
      <PageNavigation slugToLabel={{ services: t('title') }} />

      <div className="container px-12 mx-auto">
        <PageHeading
          title={t('title')}
          description={t('description')}
          className="py-4 "
        />
        <ServiceFilterListWrapper categories={categories} services={services} />
      </div>
    </>
  );
}

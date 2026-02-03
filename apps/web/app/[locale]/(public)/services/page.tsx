import { getTranslations } from '@kwh/i18n';

import { PageHeading } from '@/components/layout/page-heading';
import { PageNavigation } from '@/components/navigation/page-navigation';
import { getAllServices } from '@/server/services/services.service';
import { ServiceList } from '@/components/service-list';

export default async function ServicesPage() {
  const t = await getTranslations('services');

  // const categoriesWithServicess = await getServcicesByCategory();
  const services = await getAllServices();

  // get list of all services

  return (
    <>
      <PageNavigation slugToLabel={{ services: t('title') }} />
      <PageHeading title={t('title')} description={t('description')} />
      {/* <CategoryFilter/> */}
      <ServiceList services={services} />
    </>
  );
}

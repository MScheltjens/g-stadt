import { ROUTES } from '@kwh/constants';
import { redirect } from '@kwh/i18n';

type CategoryServicesPageProps = {
  params: Promise<{
    locale: string;
    categorySlug: string;
  }>;
};

export default async function ServicesCategoryPage({
  params,
}: CategoryServicesPageProps) {
  const { locale, categorySlug } = await params;

  redirect({
    href: {
      pathname: ROUTES.SERVICES,
      query: { categories: categorySlug },
    },
    locale,
  });
}

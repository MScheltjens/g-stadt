import { setRequestLocale } from '@repo/i18n/server';
import { getServiceBySlug } from '@/lib/api';
import type { PageProps } from '@/types/next-page';

type ServiceItemPageProps = PageProps<{
  slug: string;
}>;

export default async function ServiceItemPage({
  params,
}: ServiceItemPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = await getServiceBySlug(slug);

  return (
    <>
      <h1>Service</h1>
      <pre>{JSON.stringify(service, null, 2)}</pre>
    </>
  );
}

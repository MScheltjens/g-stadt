import { Locale } from '@repo/i18n';
import { setRequestLocale } from '@repo/i18n/server';
import { getServiceBySlug } from '@/lib/api';

type ServiceItemPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function ServiceItemPage({
  params,
}: ServiceItemPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);

  const service = await getServiceBySlug(slug);

  return (
    <>
      <h1>Service</h1>
      <pre>{JSON.stringify(service, null, 2)}</pre>
    </>
  );
}

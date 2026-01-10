import { Locale } from '@repo/i18n';
import { setRequestLocale } from '@repo/i18n/server';
import { getServices } from '@/lib/api';

type ServicesPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const services = await getServices();

  return (
    <>
      <h1>Services</h1>
      <pre>{JSON.stringify(services, null, 2)}</pre>
    </>
  );
}

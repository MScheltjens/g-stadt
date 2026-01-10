import { Locale } from '@repo/i18n';
import { setRequestLocale } from '@repo/i18n/server';

type ServicesPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <>Services</>;
}

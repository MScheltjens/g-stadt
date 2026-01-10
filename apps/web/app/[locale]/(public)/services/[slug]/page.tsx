import { Locale } from '@repo/i18n';
import { setRequestLocale } from '@repo/i18n/server';

type ServiceItemPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function ServiceItemPage({
  params,
}: ServiceItemPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <>Service</>;
}

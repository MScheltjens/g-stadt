import { setRequestLocale } from '@repo/i18n/server';
import { ComingSoon } from '@/components/common/coming-soon';

type ServicesPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ComingSoon />;
}

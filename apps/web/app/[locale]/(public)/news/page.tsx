import { Locale } from '@repo/i18n';
import { setRequestLocale } from '@repo/i18n/server';

type NewsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <>News</>;
}

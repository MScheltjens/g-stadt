import { Locale } from '@repo/i18n';
import { setRequestLocale } from '@repo/i18n/server';

type NewsItemPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function NewsItemPage({ params }: NewsItemPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <>NewsItem</>;
}

import { Locale } from '@repo/i18n/index';
import { setRequestLocale } from '@repo/i18n/server';

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <main className="flex flex-col"></main>;
}

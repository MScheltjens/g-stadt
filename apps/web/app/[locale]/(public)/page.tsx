import { Hero } from '@/components/common/hero';
import { setRequestLocale } from '@repo/i18n/server';
import type { PageProps } from '@/types/next-page';

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex flex-col">
      <Hero />
    </main>
  );
}

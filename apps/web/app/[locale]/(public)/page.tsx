import { setRequestLocale } from '@invicity/i18n/server';

import { DemoDisclaimerRedirect } from '@/components/common/demo-disclaimer-redirect';
import { Hero } from '@/components/common/hero';
import type { PageProps } from '@/lib/types/next-page';

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <DemoDisclaimerRedirect />
      <Hero />
    </>
  );
}

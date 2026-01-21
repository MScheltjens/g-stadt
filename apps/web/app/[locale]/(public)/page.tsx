import { setRequestLocale } from '@invicity/i18n';

import { DemoDisclaimerRedirect, Hero } from '@/components/marketing';
import type { PageProps } from '@/types';

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

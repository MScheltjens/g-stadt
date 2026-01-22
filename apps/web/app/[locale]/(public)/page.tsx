import { DemoDisclaimerRedirect } from '@/components/marketing/demo-disclaimer-redirect';
import { Hero } from '@/components/marketing/hero';

export default async function HomePage() {
  return (
    <>
      <DemoDisclaimerRedirect />
      <Hero />
    </>
  );
}

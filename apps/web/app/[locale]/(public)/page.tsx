import { DemoDisclaimerRedirect, Hero } from '@/components/marketing';

export default async function HomePage() {
  return (
    <>
      <DemoDisclaimerRedirect />
      <Hero />
    </>
  );
}

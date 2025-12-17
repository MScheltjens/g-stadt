import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { News } from '@/components/news';
import { Events } from '@/components/events';
import { Cta } from '@/components/cta';

export const revalidate = 60;

export default async function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Services />
      <News />
      <Events />
      <Cta />
    </main>
  );
}

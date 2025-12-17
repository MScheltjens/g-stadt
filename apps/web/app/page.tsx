import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { News } from '@/components/news';
import { Events } from '@/components/events';
import { Cta } from '@/components/cta';
import { getEvents } from '@/lib/api';

export default async function HomePage() {
  const events = await getEvents();
  console.log('Events:', events);
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

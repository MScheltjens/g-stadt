import { Button } from '@repo/ui/components/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';

import { Hero } from '../components/hero';
import { Services } from '../components/services';
import { News } from '../components/news';
import { Events } from '../components/events';
import { Cta } from '../components/cta';

export default function HomePage() {
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

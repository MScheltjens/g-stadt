import { Badge } from '@repo/ui/components/badge';
import { Button } from '@repo/ui/components/button';

export const Hero = () => (
  <section className="relative bg-secondary py-28">
    <div className="max-w-6xl mx-auto px-6">
      <Badge className="mb-4">Offizielle Stadtseite</Badge>

      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
        Willkommen in <span className="text-primary">G-Stadt</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        Leben. Arbeiten. Zukunft gestalten – alle Informationen und
        Dienstleistungen Ihrer Stadt an einem Ort.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button size="lg">Bürgerdienste</Button>
        <Button size="lg" variant="outline">
          Aktuelle Meldungen
        </Button>
      </div>
    </div>
  </section>
);

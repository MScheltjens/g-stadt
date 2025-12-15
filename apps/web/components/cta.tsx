import { Button } from '@repo/ui/components/button';
import { PageSectionWrapper } from './page-section-wrapper';

export const Cta = () => (
  <PageSectionWrapper
    title="Bereit loszulegen?"
    description="Erstellen Sie noch heute Ihr Konto und entdecken Sie alle Funktionen, die wir zu bieten haben."
    muted
  >
    <Button size="lg" variant="secondary">
      Jetzt starten
    </Button>
  </PageSectionWrapper>
);

import { Button } from '@repo/ui/components/button';
import { PageSectionWrapper } from './page-section-wrapper';

export const Cta = () => (
  <PageSectionWrapper
    title="Bereit loszulegen?"
    description="Erstellen Sie noch heute Ihr Konto und entdecken Sie alle Funktionen, die wir zu bieten haben."
    muted
  >
    {/* tiny non-functional change to test pre-commit hooks */}
    <Button size="lg" variant="secondary">
      Jetzt starten
    </Button>
  </PageSectionWrapper>
);

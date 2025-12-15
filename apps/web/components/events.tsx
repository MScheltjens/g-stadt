/* ---------------- Events ---------------- */

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@repo/ui/components/card';
import { PageSectionWrapper } from './page-section-wrapper';

export const Events = () => (
  <PageSectionWrapper
    title="Kommende Veranstaltungen"
    actionBtnText="Alle Veranstaltungen"
  >
    <div className="grid gap-6 md:grid-cols-2">
      {[1, 2].map((i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>Stadtführung G-Stadt</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            📅 12. Oktober · 📍 Innenstadt
          </CardContent>
        </Card>
      ))}
    </div>
  </PageSectionWrapper>
);

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@repo/ui/components/card';
import { PageSectionWrapper } from './page-section-wrapper';

export const News = () => (
  <PageSectionWrapper
    title="Aktuelle Meldungen"
    actionBtnText="Alle anzeigen"
    muted
  >
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Stadtfest am Wochenende</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Informationen zu Straßensperrungen und Programmübersicht.
      </CardContent>
    </Card>
  </PageSectionWrapper>
);

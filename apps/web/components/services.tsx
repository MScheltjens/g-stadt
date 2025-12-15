import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@repo/ui/components/card';
import {
  Landmark,
  Calendar,
  Bus,
  Trash2,
  Building2,
  Newspaper,
} from '@repo/ui/components/icons';
import { PageSectionWrapper } from './page-section-wrapper';

export const Services = () => {
  const services = [
    { title: 'Bürgerdienste', icon: Landmark },
    { title: 'Veranstaltungen', icon: Calendar },
    { title: 'ÖPNV & Mobilität', icon: Bus },
    { title: 'Abfall & Recycling', icon: Trash2 },
    { title: 'Stadtverwaltung', icon: Building2 },
    { title: 'Neuigkeiten', icon: Newspaper },
  ];

  return (
    <PageSectionWrapper title="Unsere Services" actionBtnText="Alle Services">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mx-auto">
        {services.map(({ title, icon: Icon }) => (
          <Card
            key={title}
            className="transition hover:shadow-md hover:border-primary"
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <Icon className="h-6 w-6 text-primary" />
              <CardTitle className="text-base">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Alle Informationen und Services rund um {title}.
            </CardContent>
          </Card>
        ))}
      </div>
    </PageSectionWrapper>
  );
};

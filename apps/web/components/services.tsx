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
import { getTranslations } from '@repo/i18n/server';

export const Services = async () => {
  const t = await getTranslations('home.services');

  const services = [
    { title: t('citizenServices'), icon: Landmark },
    { title: t('events'), icon: Calendar },
    { title: t('transportation'), icon: Bus },
    { title: t('waste'), icon: Trash2 },
    { title: t('administration'), icon: Building2 },
    { title: t('news'), icon: Newspaper },
  ];

  return (
    <PageSectionWrapper title={t('title')} actionBtnText={t('viewAll')}>
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
              {t('description')} {title}.
            </CardContent>
          </Card>
        ))}
      </div>
    </PageSectionWrapper>
  );
};

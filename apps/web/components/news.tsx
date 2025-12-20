import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@repo/ui/components/card';
import { PageSectionWrapper } from './page-section-wrapper';
import { getTranslations } from '@repo/i18n/server';

export const News = async () => {
  const t = await getTranslations('home.news');

  return (
    <PageSectionWrapper title={t('title')} actionBtnText={t('viewAll')} muted>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t('festivalTitle')}</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          {t('festivalDescription')}
        </CardContent>
      </Card>
    </PageSectionWrapper>
  );
};

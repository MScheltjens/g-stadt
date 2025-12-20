/* ---------------- Events ---------------- */

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@repo/ui/components/card';
import { PageSectionWrapper } from './page-section-wrapper';
import { getTranslations } from '@repo/i18n/server';

export const Events = async () => {
  const t = await getTranslations('home.events');

  return (
    <PageSectionWrapper title={t('title')} actionBtnText={t('viewAll')}>
      <div className="grid gap-6 md:grid-cols-2">
        {[1, 2].map((i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>{t('tourTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              📅 {t('date')} · 📍 {t('location')}
            </CardContent>
          </Card>
        ))}
      </div>
    </PageSectionWrapper>
  );
};

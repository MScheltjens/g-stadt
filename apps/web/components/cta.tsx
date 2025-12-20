import { Button } from '@repo/ui/components/button';
import { PageSectionWrapper } from './page-section-wrapper';
import { getTranslations } from '@repo/i18n/server';

export const Cta = async () => {
  const t = await getTranslations('home.cta');

  return (
    <PageSectionWrapper title={t('title')} description={t('description')} muted>
      {/* tiny non-functional change to test pre-commit hooks */}
      <Button size="lg" variant="secondary">
        {t('button')}
      </Button>
    </PageSectionWrapper>
  );
};

import { Badge } from '@repo/ui/components/badge';
import { Link } from '@repo/i18n/navigation';
import { getTranslations } from '@repo/i18n/server';
import { buttonVariants } from '@repo/ui/components/button';

export const Hero = async () => {
  const t = await getTranslations('home.hero');

  return (
    <section className="relative bg-secondary py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Badge className="mb-4">{t('badge')}</Badge>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          {t('title')} <span className="text-primary">{t('cityName')}</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          {t('description')}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/login"
            className={buttonVariants({ variant: 'default', size: 'lg' })}
          >
            {t('citizenPortal')}
          </Link>
        </div>
      </div>
    </section>
  );
};

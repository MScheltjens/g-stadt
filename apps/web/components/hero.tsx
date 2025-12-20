import { Badge } from '@repo/ui/components/badge';
import { Button } from '@repo/ui/components/button';
import { Link } from '@repo/i18n/navigation';
import { getTranslations } from '@repo/i18n/server';

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
          <Button size="lg" asChild>
            <Link href="/login">{t('signIn')}</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/register">{t('register')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

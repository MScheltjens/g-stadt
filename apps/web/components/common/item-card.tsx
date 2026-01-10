import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@repo/ui/components/card';
import { Badge } from '@repo/ui/components/badge';
import { Link } from '@repo/i18n/navigation';
import { buttonVariants } from '@repo/ui/components/button';
import { ArrowRight } from '@repo/ui/components/icons';
import { Pathname } from '@repo/i18n/routing';
import { getTranslations } from '@repo/i18n/server';

export interface ItemCardProps {
  title: string;
  description?: string;
  date?: string;
  badge?: string;
  className?: string;
  children?: React.ReactNode;
  slug: string;
  pathname: Pathname;
  key: string | number;
}

export async function ItemCard({
  title,
  description,
  date,
  badge,
  children,
  slug,
  pathname,
  className = '',
}: ItemCardProps) {
  const t = await getTranslations('itemCard');

  return (
    <Card
      className={`w-full sm:w-80 h-96 flex flex-col transition-shadow hover:shadow-lg ${className}`}
    >
      <CardHeader className="flex flex-col gap-2">
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-grow">{children}</CardContent>
      <CardFooter className="flex justify-between items-center">
        {badge && <Badge variant="default">{badge}</Badge>}
        {date && !badge && <Badge variant="default">{date}</Badge>}
        <Link
          className={buttonVariants({ variant: 'link' })}
          href={{ pathname, params: { slug } }}
          aria-label={`${t('readMore')} ${title}`}
        >
          <span>{t('readMore')}</span>
          <ArrowRight className="mr-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}

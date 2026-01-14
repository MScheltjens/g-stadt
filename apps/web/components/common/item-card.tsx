// item-card.tsx
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
import { Pathname } from '@repo/constants';
import { getTranslations } from '@repo/i18n/server';

export interface ItemCardProps {
  title: string;
  description?: string;
  date?: string;
  createdAt?: string;
  badge?: string;
  children?: React.ReactNode;
  itemSlug: string;
  pathname: Pathname;
}

export async function ItemCard({
  title,
  description,
  date,
  createdAt,
  badge,
  children,
  itemSlug,
  pathname,
}: ItemCardProps) {
  const t = await getTranslations('itemCard');

  return (
    <Card className="w-full sm:w-80 h-56 flex flex-col transition-shadow hover:shadow-lg">
      <CardHeader className="flex flex-col gap-2">
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>

      <CardContent className="flex-grow">{children}</CardContent>

      <CardFooter className="flex justify-between items-center">
        {badge && <Badge>{badge}</Badge>}
        {!badge && (date || createdAt) && <Badge>{date ?? createdAt}</Badge>}

        <Link
          className={buttonVariants({ variant: 'link' })}
          // @ts-expect-error -- TypeScript cannot infer the correct type for `pathname` here
          href={{ pathname, params: { itemSlug } }}
          aria-label={`${t('readMore')} ${title}`}
        >
          <span>{t('readMore')}</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}

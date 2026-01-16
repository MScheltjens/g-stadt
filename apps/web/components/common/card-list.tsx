// card-list.tsx
import { Button } from '@repo/ui/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { cn } from '@repo/ui/lib/utils';
import { ComponentPropsWithoutRef } from 'react';

import { ItemCard, ItemCardProps } from './item-card';

type CardListProps = {
  title?: string;
  description?: string;
  actionBtnText?: string;
  muted?: boolean;
  items?: ItemCardProps[];
  children?: React.ReactNode;
  /** layout-only */
  className?: string;
  sectionClassName?: string;
  cardItemListClassName?: string;
  id?: string;
} & ComponentPropsWithoutRef<'section'>;

export function CardList({
  title,
  description,
  actionBtnText,
  muted,
  items,
  children,
  className,
  cardItemListClassName = 'flex flex-wrap gap-6 mt-6',
  ...sectionProps
}: CardListProps) {
  return (
    <section {...sectionProps}>
      <Card
        className={cn(
          'rounded-none w-full',
          muted ? 'bg-muted' : 'bg-background',
          className,
        )}
      >
        <div className="container max-w-5xl mx-auto">
          <CardHeader className="flex flex-row justify-between items-center">
            <div>
              {title && (
                <CardTitle className="text-2xl font-semibold tracking-tight">
                  {title}
                </CardTitle>
              )}
              {description && (
                <CardDescription className="mt-2 text-muted-foreground">
                  {description}
                </CardDescription>
              )}
            </div>

            {actionBtnText && <Button variant="ghost">{actionBtnText}</Button>}
          </CardHeader>

          <CardContent className="py-4">
            {items ? (
              <ul className={cardItemListClassName}>
                {items.map((item) => (
                  <li key={item.itemSlug}>
                    <ItemCard {...item} />
                  </li>
                ))}
              </ul>
            ) : (
              children
            )}
          </CardContent>
        </div>
      </Card>
    </section>
  );
}

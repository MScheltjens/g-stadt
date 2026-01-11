import { Button } from '@repo/ui/components/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@repo/ui/components/card';
import { cn } from '@repo/ui/lib/utils';
import { ItemCard, ItemCardProps } from './item-card';

import type { HTMLAttributes } from 'react';

type SectionCardProps = {
  title?: string;
  actionBtnText?: string;
  children?: React.ReactNode;
  description?: string;
  muted?: boolean;
  className?: string;
  items?: ItemCardProps[];
  cardItemList?: string;
  containerClassName?: string;
} & HTMLAttributes<HTMLDivElement>;

export function SectionCard({
  title,
  muted,
  description,
  actionBtnText,
  children,
  className,
  items,
  cardItemList = 'flex flex-wrap gap-6 mt-6',
  ...props
}: SectionCardProps) {
  return (
    <section>
      <Card
        className={cn(
          'rounded-none w-full',
          muted && 'bg-muted',
          !muted && 'bg-background',
          className,
        )}
        {...props}
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
              <div className={cardItemList}>
                {items.map((item) => (
                  <ItemCard key={item.slug} {...item} />
                ))}
              </div>
            ) : (
              children
            )}
          </CardContent>
        </div>
      </Card>
    </section>
  );
}

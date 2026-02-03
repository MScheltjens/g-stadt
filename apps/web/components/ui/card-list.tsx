// card-list.tsx

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@kwh/ui/components/card';
import { ComponentPropsWithoutRef } from 'react';

type CardListProps = {
  items: {
    itemSlug: string;
    itemTitle: string;
    itemDescription: string;
  }[];
} & ComponentPropsWithoutRef<'section'>;
export function CardList({ items }: CardListProps) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item.itemSlug}>
          <Card className="rounded-none">
            <CardHeader>
              <CardTitle>{item.itemTitle}</CardTitle>
              <CardDescription>{item.itemDescription}</CardDescription>
            </CardHeader>
          </Card>
        </li>
      ))}
    </ul>
  );
}

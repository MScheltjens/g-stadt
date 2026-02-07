// card-list.tsx

import { Link } from '@kwh/i18n';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@kwh/ui/components/card';
import { ComponentProps } from 'react';

type CardListProps = {
  items: {
    title: string;
    description: string;
    href: ComponentProps<typeof Link>['href'];
  }[];
};

export function CardList({ items }: CardListProps) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item.title}>
          <Link href={item.href}>
            <Card className="transition-all rounded-none hover:shadow-md hover:bg-accent/50">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}

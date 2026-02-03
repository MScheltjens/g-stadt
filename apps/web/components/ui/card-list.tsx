// card-list.tsx

import { ROUTES } from '@kwh/constants';
import { Link } from '@kwh/i18n';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@kwh/ui/components/card';

type CardListProps = {
  items: {
    itemSlug: string;
    itemTitle: string;
    itemDescription: string;
  }[];
};
export function CardList({ items }: CardListProps) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item.itemSlug}>
          <Link
            href={{
              pathname: ROUTES.SERVICES_CATEGORY,
              params: { categorySlug: item.itemSlug },
            }}
          >
            <Card className="transition-all rounded-none hover:shadow-md hover:bg-accent/50">
              <CardHeader>
                <CardTitle>{item.itemTitle}</CardTitle>
                <CardDescription>{item.itemDescription}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}

import { ItemCard, ItemCardProps } from './item-card';

export interface ItemCardListProps {
  items: ItemCardProps[];
  className?: string;
}

export function ItemCardList({ items, className = '' }: ItemCardListProps) {
  return (
    <div className={`flex flex-wrap gap-6 mt-6 ${className}`}>
      {items.map(({ key, ...item }) => (
        <ItemCard key={key} {...item} />
      ))}
    </div>
  );
}

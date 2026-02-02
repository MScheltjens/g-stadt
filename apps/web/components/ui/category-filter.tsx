import { useTranslations } from '@kwh/i18n';
import { Input } from '@kwh/ui/components/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@kwh/ui/components/select';

type CategoryFilterProps = {
  categories: { label: string; id: string }[];
};
export function CategoryFilter({ categories }: CategoryFilterProps) {
  const t = useTranslations('services.list.filter');
  return (
    <section className="flex flex-col filters">
      <h2>{t('title')}</h2>
      <Input placeholder="Zoeken..." />
      <Select>
        <SelectTrigger>Filter Thema</SelectTrigger>
        {categories.length > 0 && (
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        )}
      </Select>

      {/* Add more filters */}
    </section>
  );
}

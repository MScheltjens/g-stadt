'use client';

import { useRouter, useTranslations } from '@kwh/i18n';
import { Input } from '@kwh/ui/components/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@kwh/ui/components/select';
import { useSearchParams } from 'next/navigation';

type CategoryFilterProps = {
  categories: { label: string; id: string }[];
  selectedCategoryId?: string;
};

export function CategoryFilter({
  categories,
  selectedCategoryId,
}: CategoryFilterProps) {
  const t = useTranslations('services.list.filter');
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (categoryId === 'all') {
      params.delete('categoryId');
    } else {
      params.set('categoryId', categoryId);
    }
    router.replace({
      pathname: '/services',
      query: { ...Object.fromEntries(params) },
    });
  };

  return (
    <section className="flex flex-col filters">
      <h2>{t('title')}</h2>
      <Input placeholder="Zoeken..." />
      <Select value={selectedCategoryId || 'all'} onValueChange={handleChange}>
        <SelectTrigger>Filter Thema</SelectTrigger>
        {categories.length > 0 && (
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
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

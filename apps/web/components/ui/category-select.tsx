import { CategoryListResponse } from '@kwh/contracts';
import { Input } from '@kwh/ui/components/input';
import { Label } from '@kwh/ui/components/label';
import { cn } from '@kwh/ui/lib/utils';

type CategorySelectProps = {
  categories: CategoryListResponse;
  value: string[]; // array of slugs
  onChange: (value: string[]) => void; // array of slugs

  className: string;
};

export function CategorySelect({
  categories,
  value,
  onChange,
  className,
}: CategorySelectProps) {
  const handleCheckboxChange = (slug: string) => {
    if (value.includes(slug)) {
      const newValue = value.filter((v) => v !== slug);
      onChange(newValue);
    } else {
      onChange([...value, slug]);
    }
  };

  return (
    <fieldset className={cn('flex flex-col space-y-2', className)}>
      {categories.map((category) => (
        <Label
          key={category.slug}
          className="flex items-center justify-between mt-2 font-normal cursor-pointer"
        >
          {category.label}
          <Input
            type="checkbox"
            name={`categories-${category.slug}`}
            checked={value.includes(category.slug)}
            onChange={() => handleCheckboxChange(category.slug)}
            className="w-5 h-5 min-w-5 min-h-5 max-w-5 max-h-5 align-middle"
            style={{ minWidth: 20, minHeight: 20, maxWidth: 20, maxHeight: 20 }}
          />
        </Label>
      ))}
    </fieldset>
  );
}

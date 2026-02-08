import { CategoryListResponse } from '@kwh/contracts';
import { Check } from '@kwh/ui/components/icons';
import { Label } from '@kwh/ui/components/label';
import { cn } from '@kwh/ui/lib/utils';

type CategorySelectProps = {
  categories: CategoryListResponse;
  value: string[]; // array of slugs
  onChange: (value: string[]) => void; // array of slugs
  title?: string;
  className: string;
};

export function CategorySelect({
  categories,
  value,
  onChange,
  className,
  title,
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
      <label className="text-sm font-medium">{title}</label>
      {categories.map((category) => (
        <Label
          key={category.slug}
          className="flex items-center justify-between mt-2 font-normal cursor-pointer"
        >
          {category.label}
          <span className="relative inline-flex items-center justify-center w-5 h-5">
            <input
              type="checkbox"
              name={`categories-${category.slug}`}
              checked={value.includes(category.slug)}
              onChange={() => handleCheckboxChange(category.slug)}
              className="sr-only peer"
            />
            <span className="w-5 h-5 transition-colors border rounded-sm border-primary/40 bg-background peer-checked:border-primary/70 peer-checked:bg-primary/10 peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background" />
            <Check className="pointer-events-none absolute h-3.5 w-3.5 text-primary opacity-0 transition-opacity peer-checked:opacity-100" />
          </span>
        </Label>
      ))}
    </fieldset>
  );
}

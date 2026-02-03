import { useTranslations } from '@kwh/i18n';
import { Input } from '@kwh/ui/components/input';
import { Label } from '@kwh/ui/components/label';

type CategorySelectProps = {
  categories: { label: string; id: string }[];
  value: string[];
  onChange: (value: string[]) => void;
  label: string;
};

export function CategorySelect({
  categories,
  value,
  onChange,
  label,
}: CategorySelectProps) {
  const t = useTranslations('services.filter');

  const allSelected = value.length === categories.length;

  const handleCheckboxChange = (id: string) => {
    if (value.includes(id)) {
      onChange(value.filter((v) => v !== id));
    } else {
      onChange([...value, id]);
    }
  };

  const handleAllChange = () => {
    if (allSelected) {
      onChange([]);
    } else {
      onChange(categories.map((c) => c.id));
    }
  };

  return (
    <fieldset className="flex flex-col gap-2 mt-4 ">
      <legend className="mb-4 font-semibold">{label}</legend>
      <Label className="flex items-center justify-between font-normal cursor-pointer">
        {t('all')}
        <Input
          type="checkbox"
          name="category-all"
          checked={allSelected}
          onChange={handleAllChange}
          className="size-4"
        />
      </Label>

      {categories.map((category) => (
        <Label
          key={category.id}
          className="flex items-center justify-between mt-2 font-normal cursor-pointer"
        >
          {category.label}
          <Input
            type="checkbox"
            name={`category-${category.id}`}
            checked={value.includes(category.id)}
            onChange={() => handleCheckboxChange(category.id)}
            className="size-4"
          />
        </Label>
      ))}
    </fieldset>
  );
}

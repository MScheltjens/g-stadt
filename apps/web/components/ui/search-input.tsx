import { Search } from '@kwh/ui/components/icons';
import { Input } from '@kwh/ui/components/input';

type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  ariaLabel?: string;
  className?: string;
};

export function SearchInput({
  value,
  onChange,
  placeholder,
  ariaLabel,
  className,
}: SearchInputProps) {
  return (
    <div className={`relative ${className || ''}`}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label={ariaLabel}
        className="relative pr-10"
      />
      <Search
        size={18}
        className="absolute -translate-y-1/2 pointer-events-none right-3 top-1/2 text-muted-foreground"
      />
    </div>
  );
}

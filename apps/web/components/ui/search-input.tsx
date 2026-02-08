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
        className="relative pr-10 text-sm rounded-sm bg-background border-primary/30 focus:border-primary/60 focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background md:text-md"
      />
      <Search
        size={18}
        className="absolute -translate-y-1/2 pointer-events-none right-3 top-1/2 text-muted-foreground"
      />
    </div>
  );
}

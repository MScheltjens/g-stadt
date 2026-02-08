import { Search, X } from '@kwh/ui/components/icons';
import { Input } from '@kwh/ui/components/input';
import * as React from 'react';

type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  placeholder?: string;
  ariaLabel?: string;
  clearLabel?: string;
  className?: string;
};

export function SearchInput({
  value,
  onChange,
  onClear,
  placeholder,
  ariaLabel,
  clearLabel,
  className,
}: SearchInputProps) {
  const handleClear = () => {
    if (onClear) {
      onClear();
      return;
    }
    const event = {
      target: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(event);
  };

  const hasValue = value.trim().length > 0;

  return (
    <div className={`relative ${className || ''}`}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label={ariaLabel}
        className="relative pr-10 text-sm rounded-sm bg-background border-primary/30 focus:border-primary/60 focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background md:text-md"
      />
      {hasValue ? (
        <button
          type="button"
          aria-label={clearLabel ?? 'Clear search'}
          className="absolute -translate-y-1/2 right-2 top-1/2 rounded-sm p-1 text-muted-foreground transition-colors hover:text-foreground"
          onClick={handleClear}
        >
          <X size={16} />
        </button>
      ) : (
        <Search
          size={18}
          className="absolute -translate-y-1/2 pointer-events-none right-3 top-1/2 text-muted-foreground"
        />
      )}
    </div>
  );
}

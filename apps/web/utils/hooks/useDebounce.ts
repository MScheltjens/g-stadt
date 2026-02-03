'use client';

import { useEffect, useState } from 'react';

// useDebounce hook: returns a debounced version of the input value.
// The returned value only updates after the specified delay has passed without further changes.
// Useful for delaying actions like API calls or filtering until the user stops typing.

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

import { useEffect, useRef, useState } from 'react';

export function useDebounce<T>(value: T, delay: number = 1000): T{
  const [debouncedValue, setDebouncedValue] = useState(value);
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (ref.current) clearTimeout(ref.current);
    ref.current = setTimeout(() => setDebouncedValue(value), delay);
    return () => {
      if (ref.current) clearTimeout(ref.current);
      ref.current = undefined;
    };
  }, [value, delay]);

  return debouncedValue;
}

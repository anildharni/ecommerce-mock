import { useEffect, useState } from "react";

// You will give searchWord as value and timedelay required in delay parameter.

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  // Wanted to use this debounce function to reduce the load on APIs
  // But realised that it is of no use here. In case, API endpoints change consider using this.

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

export default useDebounce;
import { useEffect, useState } from "react";

export default function useDebounce(originalValue, timeout = 1000) {
  const [debouncedValue, setDebouncedValue] = useState(originalValue);

  useEffect(() => {

    const myTimeout = setTimeout(() => {
      setDebouncedValue(originalValue)
    }, timeout);

    return () => {
      clearTimeout(myTimeout);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalValue])

  return { debouncedValue }
}
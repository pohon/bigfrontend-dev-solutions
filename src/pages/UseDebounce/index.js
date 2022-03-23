import React, { useEffect, useRef, useState } from 'react';

const useDebounce = (value, timeout) => {
  // states
  const [debouncedValue, setDebouncedValue] = useState(value);

  // refs
  const prevTime = useRef(null);
  const prevTimeout = useRef(null);

  // effects
  useEffect(() => {
    // if time difference between now and prevTime < timeout --> cancel prevTimeout
    if ((new Date() - prevTime.current) < timeout){
      clearTimeout(prevTimeout.current);
    }

    prevTimeout.current = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    prevTime.current = new Date();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debouncedValue;
};

export default function UseDebounce() {

  // states
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 1000);

  // handlers
  const handleChange = evt => {
    setValue(evt.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} value={value} />

      <label>{debouncedValue}</label>
    </div>
  );
};
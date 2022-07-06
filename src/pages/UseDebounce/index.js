import React, { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';

export default function UseDebounce() {

  // states
  const [value, setValue] = useState('');
  const { debouncedValue } = useDebounce(value, 1000);

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
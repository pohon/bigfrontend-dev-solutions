import React, { useState } from 'react';

export default function PhoneNumberInput () {
  
  const [value, setValue] = useState('');

  const extractValue = str => {
    return str.replace(/\D/g, '');
  };

  const handleChange = evt => {
    const extracted = extractValue(evt.target.value);

    if (extracted.length > 3) {

      const firstThree = extracted.slice(0, 3);
      const rest = extracted.slice(3);

      setValue(`(${firstThree})${rest}`)

      if (extracted.length > 6) {
        const restFirstThree = rest.slice(0, 3);
        const restRest = rest.slice(3);

        setValue(`(${firstThree})${restFirstThree}-${restRest}`);

        return;
      }

      setValue(`(${firstThree})${rest}`)

      return;
    }

    setValue(extracted);
  }

  return (
    <input onChange={handleChange} value={value}
    />
  );
};
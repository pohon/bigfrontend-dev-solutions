import React, { useEffect, useRef, useState } from "react";

const usePrevious = value => {
  const prevRef = useRef();

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return prevRef;
};

export default function UsePrevious() {

  // states
  const [value, setValue] = useState();

  // refs
  const prevValue = usePrevious(value);

  return (
    <div>
      <input onChange={evt => { setValue(evt.target.value) }} value={value} />
      <span>{prevValue.current}</span>
    </div>
  );
};
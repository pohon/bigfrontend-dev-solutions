import React, { useEffect, useRef, useState } from 'react';

const useHover = () => {
  // refs
  const ref = useRef(null);

  // states
  const [isHovered, setIsHovered] = useState();

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const refCurrent = ref.current;

    refCurrent.addEventListener('mouseenter', handleMouseOver, false);
    refCurrent.addEventListener('mouseleave', handleMouseOut, false);

    return () => {
      console.log('cleanup!')
      refCurrent.removeEventListener('mouseenter', handleMouseOver, false);
      refCurrent.removeEventListener('mouseleave', handleMouseOut, false);
    };
  }, []);

  return [ref, isHovered];
};

export default function UseHover() {

  // states
  const [ref, isHovered] = useHover();

  return (
    <div>
      <h1 ref={ref}>Hover me!</h1>
      {isHovered && <h5>Hovered!</h5>}
    </div>
  );
}
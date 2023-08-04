import { useState, useEffect } from "react";

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    return () => {
      setIsHovered(false);
    };
  }, []);

  return {isHovered, handleMouseEnter, handleMouseLeave};
};

export default useHover;

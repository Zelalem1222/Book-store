import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => {
      window.removeEventListener('resize', updateMedia);
    };
  });

  return isDesktop;
};

export default useWindowSize;

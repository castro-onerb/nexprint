import { useEffect, useState } from 'react';
import { debounce } from '../utils/use-debounce';

export function useViewport() {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWidth(window.innerWidth);
    });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mobileMax = 481;
  const tabletMax = 769;
  const notebookMax = 1280;

  const mobile = width < mobileMax;
  const tablet = width < tabletMax;
  const notebook = width < notebookMax;
  const desktop = width >= notebookMax;

  const tabletOnly = width >= mobileMax && width < tabletMax;
  const notebookOnly = width >= tabletMax && width < notebookMax;

  const customOnly = (min: number, max: number) => width >= min && width < max;
  const min = (min: number) => width >= min;
  const max = (max: number) => width <= max;

  return {
    width,
    mobile,
    tablet,
    notebook,
    desktop,

    tabletOnly,
    notebookOnly,

    customOnly,
    min,
    max,
  };
}

import { useEffect, useState } from 'react';
import { debounce } from '../utils/use-debounce';

export function useViewport() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = debounce(() => {
      setWidth(window.innerWidth);
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mobileMax = 481;
  const tabletMax = 769;
  const notebookMax = 1280;

  const mobile = width !== null ? width < mobileMax : false;
  const tablet = width !== null ? width < tabletMax : false;
  const notebook = width !== null ? width < notebookMax : false;
  const desktop = width !== null ? width >= notebookMax : false;

  const tabletOnly = width !== null ? width >= mobileMax && width < tabletMax : false;
  const notebookOnly = width !== null ? width >= tabletMax && width < notebookMax : false;

  const customOnly = (min: number, max: number) =>
    width !== null ? width >= min && width < max : false;
  const min = (min: number) => (width !== null ? width >= min : false);
  const max = (max: number) => (width !== null ? width <= max : false);

  return {
    width,
    // Faixas diretas
    mobile,
    tablet,
    notebook,
    desktop,

    // Faixas exclusivas
    tabletOnly,
    notebookOnly,

    // Utilitário customizado
    customOnly,
    min,
    max,
  };
}

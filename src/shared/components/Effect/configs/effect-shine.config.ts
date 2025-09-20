import { cva } from 'class-variance-authority';

export const effectShineConfig = cva(
  'absolute inset-0 w-full h-full overflow-hidden rounded-inherit pointer-events-none',
  {
    variants: {
      color: {
        white: 'via-white/20',
        gray: 'via-gray-300/20',
      },
      direction: {
        right: 'bg-gradient-to-r from-transparent to-transparent',
        left: 'bg-gradient-to-l from-transparent to-transparent',
      },
    },
    defaultVariants: {
      color: 'white',
      direction: 'right',
    },
  },
);

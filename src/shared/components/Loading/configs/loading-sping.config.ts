import { cva } from 'class-variance-authority';

export const loadingSpinConfig = cva('rounded-full border-current animate-spin', {
  variants: {
    size: {
      sm: 'w-4 h-4 border-2',
      md: 'w-6 h-6 border-3',
      lg: 'w-8 h-8 border-4',
    },
    color: {
      white: 'border-white border-l-0 border-b-transparent',
      black: 'border-black border-l-0 border-b-transparent',
      blue: 'border-blue-600 border-l-0 border-b-transparent',
      red: 'border-red-600 border-l-0 border-b-transparent',
      gray: 'border-gray-500 border-l-0 border-b-transparent',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'white',
  },
});

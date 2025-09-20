import { cva } from 'class-variance-authority';

export const inputLabelConfig = cva('flex items-center font-semibold leading-none gap-x-0', {
  variants: {
    size: { sm: 'text-sm', md: 'text-base', lg: 'text-lg' },
    color: {
      primary: 'text-blue-600',
      gray: 'text-gray-700',
      red: 'text-red-600',
      black: 'text-black',
    },
  },
  defaultVariants: { size: 'md', color: 'gray' },
});

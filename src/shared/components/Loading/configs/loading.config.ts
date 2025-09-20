import { cva } from 'class-variance-authority';

export const loadingConfig = cva('flex items-center justify-center', {
  variants: {
    size: {
      sm: 'gap-1 [&>*]:w-1.5 [&>*]:h-1.5',
      md: 'gap-2 [&>*]:w-2 [&>*]:h-2',
      lg: 'gap-3 [&>*]:w-3 [&>*]:h-3',
    },
    color: {
      white: '[&>*]:bg-white',
      black: '[&>*]:bg-black',
      blue: '[&>*]:bg-blue-600',
      red: '[&>*]:bg-red-600',
      gray: '[&>*]:bg-gray-500',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'white',
  },
});

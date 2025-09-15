import { cva } from 'class-variance-authority';

export const inputConfig = cva('flex items-center', {
  variants: {
    variant: {
      contained: 'border',
      outlined: 'border',
    },
    corner: {
      square: 'rounded-none',
      soft: 'rounded-md',
      rounded: 'rounded-xl',
      pill: 'rounded-full',
    },
    color: {
      primary: '',
      black: '',
      gray: '',
      blue: '',
      emerald: '',
      amber: '',
      red: '',
    },
  },
  compoundVariants: [
    // ===== CONTAINED =====
    {
      variant: 'contained',
      color: 'gray',
      class: 'border-gray-500 bg-gray-50 text-black',
    },
    {
      variant: 'contained',
      color: 'black',
      class: 'border-black bg-black text-white',
    },
    {
      variant: 'contained',
      color: 'primary',
      class: 'border-blue-600 bg-blue-600 text-white',
    },
    {
      variant: 'contained',
      color: 'blue',
      class: 'border-sky-600 bg-sky-600 text-white',
    },
    {
      variant: 'contained',
      color: 'emerald',
      class: 'border-emerald-600 bg-emerald-600 text-white',
    },
    {
      variant: 'contained',
      color: 'amber',
      class: 'border-amber-500 bg-amber-500 text-black',
    },
    {
      variant: 'contained',
      color: 'red',
      class: 'border-red-600 bg-red-600 text-white',
    },

    // ===== OUTLINED =====
    {
      variant: 'outlined',
      color: 'gray',
      class: 'border-gray-500 text-gray-700',
    },
    {
      variant: 'outlined',
      color: 'black',
      class: 'border-black text-black',
    },
    {
      variant: 'outlined',
      color: 'primary',
      class: 'border-blue-600 text-blue-600',
    },
    {
      variant: 'outlined',
      color: 'blue',
      class: 'border-sky-600 text-sky-600',
    },
    {
      variant: 'outlined',
      color: 'emerald',
      class: 'border-emerald-600 text-emerald-600',
    },
    {
      variant: 'outlined',
      color: 'amber',
      class: 'border-amber-500 text-amber-600',
    },
    {
      variant: 'outlined',
      color: 'red',
      class: 'border-red-600 text-red-600',
    },
  ],
  defaultVariants: {
    variant: 'outlined',
    corner: 'soft',
    color: 'black',
  },
});
export const inputFieldConfig = cva('outline-none flex-1 leading-none', {
  variants: {
    size: {
      sm: 'p-1.5 text-sm font-normal',
      md: 'p-2 text-base font-normal',
      lg: 'p-3 text-base font-medium',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

import { cva } from 'class-variance-authority';

export const InputLegendConfig = cva('text-[13px] leading-[15px] text-red-500', {
  variants: {
    color: {
      red: 'text-red-600',
      blue: 'text-blue-600',
      emerald: 'text-emerald-600',
      amber: 'text-amber-600',
    },
  },
  defaultVariants: {
    color: 'red',
  },
});

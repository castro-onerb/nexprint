import { cva } from 'class-variance-authority';

type Variant = 'contained' | 'outlined';
type Color = 'primary' | 'black' | 'gray' | 'blue' | 'emerald' | 'amber' | 'red';

const inputColorMap: Record<Variant, Record<Color, string>> = {
  contained: {
    gray: 'border-gray-500 bg-gray-50',
    black: 'border-black bg-black',
    primary: 'border-blue-600 bg-blue-600',
    blue: 'border-sky-600 bg-sky-600',
    emerald: 'border-emerald-600 bg-emerald-600',
    amber: 'border-amber-500 bg-amber-500',
    red: 'border-red-600 bg-red-600',
  },
  outlined: {
    gray: 'border-gray-500',
    black: 'border-black',
    primary: 'border-blue-600',
    blue: 'border-sky-600',
    emerald: 'border-emerald-600',
    amber: 'border-amber-500',
    red: 'border-red-600',
  },
};

const generateInputCompoundVariants = () => {
  const variants: { variant: Variant; color: Color; class: string }[] = [];
  (Object.keys(inputColorMap) as Variant[]).forEach((variant) => {
    (Object.keys(inputColorMap[variant]) as Color[]).forEach((color) => {
      variants.push({
        variant,
        color,
        class: inputColorMap[variant][color],
      });
    });
  });
  return variants;
};

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
  compoundVariants: generateInputCompoundVariants(),
  defaultVariants: {
    variant: 'outlined',
    corner: 'soft',
    color: 'black',
  },
});

export const inputFieldConfig = cva('outline-none w-full leading-none bg-transparent', {
  variants: {
    size: {
      sm: 'p-1.5 text-sm font-normal h-[30px]',
      md: 'p-2 text-base font-normal h-[37px]',
      lg: 'p-3 text-base font-medium h-[46px]',
    },
    textColor: {
      primary: 'text-primary-500',
      black: 'text-black',
      gray: 'text-gray-500',
      blue: 'text-blue-500',
      emerald: 'text-emerald-500',
      amber: 'text-amber-500',
      red: 'text-red-500',
    },
  },
  defaultVariants: {
    size: 'md',
    textColor: 'black',
  },
});

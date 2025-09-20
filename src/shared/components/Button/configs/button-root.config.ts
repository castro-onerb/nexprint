import { cva } from 'class-variance-authority';

type Variant = 'contained' | 'outlined' | 'smooth' | 'text';
type Color = 'primary' | 'black' | 'gray' | 'blue' | 'emerald' | 'amber' | 'red';

const colorClasses: Record<Variant, Record<Color, string>> = {
  contained: {
    blue: 'bg-blue-500 hover:bg-blue-500/85 text-white',
    primary: 'bg-indigo-600 hover:bg-indigo-600/85 text-white',
    black: 'bg-black hover:bg-gray-900 text-white',
    gray: 'bg-gray-500 hover:bg-gray-400 text-white',
    emerald: 'bg-emerald-500 hover:bg-emerald-500/85 text-white',
    amber: 'bg-amber-400 hover:bg-amber-400/85 text-black',
    red: 'bg-red-500 hover:bg-red-500/85 text-white',
  },
  outlined: {
    blue: 'border-blue-500 text-blue-500 hover:bg-blue-50',
    primary: 'border-indigo-600 text-indigo-600 hover:bg-indigo-50',
    black: 'border-black text-black hover:bg-gray-100',
    gray: 'border-gray-400 text-gray-700 hover:bg-gray-100',
    emerald: 'border-emerald-500 text-emerald-500 hover:bg-emerald-50',
    amber: 'border-amber-400 text-amber-400 hover:bg-amber-50',
    red: 'border-red-500 text-red-500 hover:bg-red-50',
  },
  smooth: {
    blue: 'bg-blue-200 text-blue-800 hover:bg-blue-300',
    primary: 'bg-indigo-200 text-indigo-800 hover:bg-indigo-300',
    black: 'bg-gray-300 text-black hover:bg-gray-400',
    gray: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    emerald: 'bg-emerald-200 text-emerald-800 hover:bg-emerald-300',
    amber: 'bg-amber-200 text-amber-800 hover:bg-amber-300',
    red: 'bg-red-200 text-red-800 hover:bg-red-300',
  },
  text: {
    blue: 'text-blue-500 hover:text-blue-700',
    primary: 'text-indigo-600 hover:text-indigo-800',
    black: 'text-black hover:text-gray-700',
    gray: 'text-gray-600 hover:text-gray-800',
    emerald: 'text-emerald-500 hover:text-emerald-700',
    amber: 'text-amber-500 hover:text-amber-700',
    red: 'text-red-500 hover:text-red-700',
  },
};

const compoundVariants = ((): { variant: Variant; color: Color; class: string }[] => {
  const variants: { variant: Variant; color: Color; class: string }[] = [];
  (Object.keys(colorClasses) as Variant[]).forEach((variant) => {
    (Object.keys(colorClasses[variant]) as Color[]).forEach((color) => {
      variants.push({ variant, color, class: colorClasses[variant][color] });
    });
  });
  return variants;
})();

export const buttonRootConfig = cva(
  'relative flex items-center justify-center leading-none font-semibold cursor-pointer transition',
  {
    variants: {
      variant: {
        contained: '',
        smooth: 'bg-opacity-70 hover:bg-opacity-100',
        outlined: 'border',
        text: 'bg-transparent',
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
      size: {
        sm: 'p-1.5 text-sm font-normal h-[30px]',
        md: 'p-2 text-base font-normal h-[39px]',
        lg: 'p-3 text-base font-medium h-[46px]',
      },
    },
    compoundVariants,
    defaultVariants: {
      variant: 'contained',
      color: 'blue',
      corner: 'rounded',
      size: 'md',
    },
  },
);

import { cn } from '@/shared/utils/cn';
import { ReactNode, forwardRef } from 'react';
import { InputLegendConfig } from './configs/input-legend.config';

export type InputLegendProps = {
  children?: ReactNode;
  color?: 'blue' | 'red' | 'amber' | 'emerald';
  className?: string;
} & React.ComponentPropsWithoutRef<'span'>;

export const InputLegend = forwardRef<HTMLSpanElement, InputLegendProps>(
  ({ children, color, className, ...props }, ref) => {
    return (
      <span ref={ref} className={cn(InputLegendConfig({ color }), className)} {...props}>
        {children}
      </span>
    );
  },
);

InputLegend.displayName = 'InputLegend';

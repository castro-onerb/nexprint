import { VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { cn } from '@/shared/utils/cn';
import { loadingSpinConfig } from './configs/loading-sping.config';

export type LoadingSpinProps = VariantProps<typeof loadingSpinConfig> & {
  className?: string;
};

export const LoadingSpin = forwardRef<HTMLDivElement, LoadingSpinProps>(
  ({ size, color, className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center justify-center', className)} {...props}>
      <div className={cn(loadingSpinConfig({ size, color }))} />
    </div>
  ),
);

LoadingSpin.displayName = 'LoadingSpin';

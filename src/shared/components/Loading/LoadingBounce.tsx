import { VariantProps } from 'class-variance-authority';
import { loadingConfig } from './configs/loading.config';
import { forwardRef } from 'react';
import { cn } from '@/shared/utils/cn';

export type LoadingBounceProps = VariantProps<typeof loadingConfig> & {
  className?: string;
};

export const LoadingBounce = forwardRef<HTMLDivElement, LoadingBounceProps>(
  ({ size = 'md', color = 'white', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-center gap-2',
          loadingConfig({ size, color }),
          className,
        )}
        {...props}
      >
        <span className='rounded-full animate-bounce-dot1' />
        <span className='rounded-full animate-bounce-dot2' />
        <span className='rounded-full animate-bounce-dot3' />
      </div>
    );
  },
);

LoadingBounce.displayName = 'LoadingBounce';

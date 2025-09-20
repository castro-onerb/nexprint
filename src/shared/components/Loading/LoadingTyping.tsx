import { VariantProps } from 'class-variance-authority';
import { loadingConfig } from './configs/loading.config';
import { forwardRef } from 'react';
import { cn } from '@/shared/utils/cn';

export type LoadingTypingProps = VariantProps<typeof loadingConfig> & {
  className?: string;
};

export const LoadingTyping = forwardRef<HTMLDivElement, LoadingTypingProps>(
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
        <span className='rounded-full animate-typing-dot1' />
        <span className='rounded-full animate-typing-dot2' />
        <span className='rounded-full animate-typing-dot3' />
      </div>
    );
  },
);

LoadingTyping.displayName = 'LoadingTyping';

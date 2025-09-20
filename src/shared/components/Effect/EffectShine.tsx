import { cn } from '@/shared/utils/cn';
import { VariantProps } from 'class-variance-authority';
import { effectShineConfig } from './configs/effect-shine.config';
import { forwardRef } from 'react';

export type EffectShineProps = VariantProps<typeof effectShineConfig> &
  React.ComponentPropsWithoutRef<'div'>;

export const EffectShine = forwardRef<HTMLDivElement, EffectShineProps>(
  ({ color, direction, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(effectShineConfig({ color, direction }), className)} {...props}>
        <div className='absolute top-0 left-[-50%] w-1/2 h-full bg-gradient-to-r from-transparent via-current/20 to-transparent animate-shine' />
      </div>
    );
  },
);

EffectShine.displayName = 'EffectShine';

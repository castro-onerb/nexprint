import { ReactNode, forwardRef } from 'react';
import { cn } from '@/shared/utils/cn';
import { inputLabelConfig } from './configs/input-label.config';
import { Icon } from '../Icon';
import type { VariantProps } from 'class-variance-authority';

export type InputLabelProps = VariantProps<typeof inputLabelConfig> & {
  required?: boolean;
  left?: ReactNode;
  error?: boolean;
} & React.ComponentPropsWithoutRef<'label'>;

export const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>(
  ({ required, left, children, color = 'gray', size, error, className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(inputLabelConfig({ size, color: error ? 'red' : color }), className)}
        {...props}
      >
        {left && <span>{left}</span>}
        <span>{children}</span>
        {required && <Icon name='required_fill' className='text-red-600' />}
      </label>
    );
  },
);

InputLabel.displayName = 'InputLabel';

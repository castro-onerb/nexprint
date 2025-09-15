import { ReactNode } from 'react';
import { Icon } from '../Icon';
import { cn } from '@/shared/utils/cn';
import { inputLabelConfig } from './variants/input-label.cva';

export type InputLabelProps = {
  required?: boolean;
  left?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'gray' | 'red' | 'black';
} & React.ComponentPropsWithoutRef<'label'>;

export function InputLabel({
  required,
  left,
  size,
  color,
  className,
  children,
  ...props
}: InputLabelProps) {
  return (
    <label className={cn(inputLabelConfig({ size, color }), className)} {...props}>
      {left}
      {children}
      {required && <Icon name='required_fill' className='text-red-600' />}
    </label>
  );
}

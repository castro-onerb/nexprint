import { cn } from '@/shared/utils/cn';
import { ReactElement, ReactNode } from 'react';
import { inputConfig, inputFieldConfig } from './variants/input-root.cva';

export type InputRootProps = {
  left?: ReactNode;
  right?: ReactNode;
  variant?: 'contained' | 'outlined';
  corner?: 'square' | 'soft' | 'rounded' | 'pill';
  color?: 'primary' | 'black' | 'gray' | 'blue' | 'emerald' | 'amber' | 'red';
  size?: 'sm' | 'md' | 'lg';
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>;

export function InputRoot({
  left,
  right,
  variant = 'outlined',
  corner = 'soft',
  color = 'gray',
  size = 'md',
  className,
  ...props
}: InputRootProps): ReactElement {
  return (
    <div className={cn(inputConfig({ variant, corner, color }), className)}>
      {left && <span className='ml-2'>{left}</span>}
      <input className={inputFieldConfig({ size })} {...props} />
      {right && <span className='mr-2'>{right}</span>}
    </div>
  );
}

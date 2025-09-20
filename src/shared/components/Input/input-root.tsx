import { cn } from '@/shared/utils/cn';
import { ReactNode, forwardRef } from 'react';
import { inputConfig, inputFieldConfig } from './configs/input-root.config';
import type { VariantProps } from 'class-variance-authority';
import { Loading } from '@/shared/components/Loading';

export type InputRootProps = VariantProps<typeof inputConfig> &
  VariantProps<typeof inputFieldConfig> & {
    left?: ReactNode;
    right?: ReactNode;
    color?: 'primary' | 'black' | 'gray' | 'blue' | 'emerald' | 'amber' | 'red';
    isLoading?: boolean;
    renderLoading?: ReactNode;
  } & Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>;

export const InputRoot = forwardRef<HTMLInputElement, InputRootProps>(
  (
    {
      left,
      right,
      color,
      variant,
      corner,
      size = 'md',
      isLoading,
      renderLoading,
      className,
      ...inputProps
    },
    ref,
  ) => {
    const loadingNode = renderLoading ?? <Loading.Spin color='gray' size='sm' className='ml-2' />;

    return (
      <div className={cn(inputConfig({ color, variant, corner }), className)}>
        {left && <span className='ml-2'>{left}</span>}
        {isLoading && loadingNode}
        <input
          ref={ref}
          className={cn(inputFieldConfig({ size, textColor: color }))}
          {...inputProps}
        />
        {right && <span className='mr-2'>{right}</span>}
      </div>
    );
  },
);

InputRoot.displayName = 'InputRoot';

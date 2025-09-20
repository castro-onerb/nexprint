'use client';

import { cn } from '@/shared/utils/cn';
import { ReactNode, forwardRef } from 'react';
import { buttonRootConfig } from './configs/button-root.config';
import type { VariantProps } from 'class-variance-authority';
import { Loading } from '@/shared/components/Loading';

export type ButtonRootProps = VariantProps<typeof buttonRootConfig> & {
  children: ReactNode;
  isLoading?: boolean;
  renderLoading?: ReactNode;
  effect?: ReactNode;
} & React.ComponentPropsWithRef<'button'>;

export const ButtonRoot = forwardRef<HTMLButtonElement, ButtonRootProps>(
  ({ children, className, isLoading = false, renderLoading, effect, disabled, ...props }, ref) => {
    const loadingNode = renderLoading ?? <Loading.Spin />;

    return (
      <button
        ref={ref}
        className={cn(buttonRootConfig(props), className, 'relative overflow-hidden')}
        disabled={disabled || isLoading}
        {...props} // importante: onClick do DropdownRoot vem aqui
      >
        {/* camada de efeito visual, sem bloquear clique */}
        {effect && <span className='absolute inset-0 pointer-events-none'>{effect}</span>}

        {/* overlay de loading, também não bloqueia clique */}
        {isLoading && (
          <span className='absolute inset-0 flex items-center justify-center pointer-events-none'>
            {loadingNode}
          </span>
        )}

        {/* conteúdo do botão */}
        <span className={cn(isLoading && 'opacity-0')}>{children}</span>
      </button>
    );
  },
);

ButtonRoot.displayName = 'ButtonRoot';

import { cn } from '@/shared/utils/cn';
import { ReactElement, ReactNode } from 'react';

export type InputGroupProps = {
  children: ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<'div'>;

export function InputGroup({ children, className, ...props }: InputGroupProps): ReactElement {
  return (
    <div className={cn('flex flex-col gap-1.5', className)} {...props}>
      {children}
    </div>
  );
}

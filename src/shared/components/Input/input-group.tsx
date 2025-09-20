import { cn } from '@/shared/utils/cn';
import { ReactNode, forwardRef } from 'react';

export type InputGroupProps = {
  children: ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<'div'>;

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex flex-col gap-1', className)} {...props}>
        {children}
      </div>
    );
  },
);

InputGroup.displayName = 'InputGroup';

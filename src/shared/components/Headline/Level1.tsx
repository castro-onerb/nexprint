import { cn } from '@/shared/utils/cn';
import { ReactNode } from 'react';

type Level1Props = {
  children: ReactNode;
  className?: string;
} & React.ComponentPropsWithRef<'h1'>;

export function Level1({ children, className }: Level1Props) {
  return (
    <h1 className={cn('text-[24px] leading-[29px] text-foreground', className)}>{children}</h1>
  );
}

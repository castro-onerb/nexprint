'use client';
import { useViewport } from '@/shared/hooks/use-viewport';
import clsx from 'clsx';
import { ReactNode } from 'react';

type LayoutRootProps = {
  sidebar?: ReactNode;
  children: ReactNode;
  classname?: string;
};

export function LayoutRoot({ sidebar, children, classname }: LayoutRootProps) {
  const { mobile, tabletOnly } = useViewport();
  const hasSidebar = Boolean(sidebar);

  const gridCols = hasSidebar
    ? tabletOnly
      ? 'grid-cols-[80px_1fr]'
      : 'grid-cols-[minmax(90px,300px)_1fr]'
    : 'grid-cols-1';

  return (
    <div
      className={clsx(
        'relative w-dvw h-dvh',
        mobile ? 'flex flex-col p-4' : `grid ${gridCols}`,
        classname,
      )}
    >
      {hasSidebar && sidebar}

      <div className={clsx('flex flex-col w-full')}>{children}</div>
    </div>
  );
}

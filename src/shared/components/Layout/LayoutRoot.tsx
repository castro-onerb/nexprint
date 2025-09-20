'use client';
import { useViewport } from '@/shared/hooks/use-viewport';
import clsx from 'clsx';
import { ReactNode } from 'react';

type LayoutRootProps = {
  sidebar?: ReactNode;
  children: ReactNode;
};

export function LayoutRoot({ sidebar, children }: LayoutRootProps) {
  const { mobile, tabletOnly } = useViewport();
  const hasSidebar = Boolean(sidebar);

  const gridCols = hasSidebar
    ? tabletOnly
      ? 'grid-cols-[80px_1fr]'
      : 'grid-cols-[minmax(90px,290px)_1fr]'
    : 'grid-cols-1';

  return (
    <div className={clsx('relative w-dvw h-dvh', mobile ? 'flex flex-col' : `grid ${gridCols}`)}>
      {hasSidebar && !mobile && sidebar}

      <div className={clsx('flex flex-col w-full', !mobile && 'max-w-[1440px] mx-auto')}>
        {children}
      </div>
    </div>
  );
}

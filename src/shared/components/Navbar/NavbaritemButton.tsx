import * as React from 'react';
import { Icon } from '../Icon';
import { IconKey } from '../Icon/data/icon-reference';
import { cn } from '@/shared/utils/cn';

export type NavbarItemButtonProps = {
  icon: IconKey;
  label: string;
  active?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const NavbarItemButton = React.forwardRef<HTMLButtonElement, NavbarItemButtonProps>(
  ({ icon, label, active, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={props.type ?? 'button'}
        className={cn(
          'flex items-center gap-3 p-3 font-medium text-sm leading-none rounded-xl h-[44px] transition',
          active ? 'text-primary-600 bg-primary-500/10' : 'text-gray-600 hover:bg-gray-100',
          className,
        )}
        {...props}
      >
        <Icon name={icon} size={22} />
        <span>{label}</span>
      </button>
    );
  },
);

NavbarItemButton.displayName = 'NavbarItemButton';

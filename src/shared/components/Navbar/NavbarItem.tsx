import * as React from 'react';
import { Icon } from '../Icon';
import { IconKey } from '../Icon/data/icon-reference';
import { cn } from '@/shared/utils/cn';

export type NavbarItemLinkProps = {
  icon: IconKey;
  label: string;
  active?: boolean;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavbarItemLink = React.forwardRef<HTMLAnchorElement, NavbarItemLinkProps>(
  ({ icon, label, active, className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          'flex items-center gap-3 p-3 font-medium text-sm leading-none rounded-xl h-[44px] transition cursor-pointer',
          active ? 'text-primary-600 bg-primary-500/10' : 'text-gray-600 hover:bg-gray-100',
          className,
        )}
        {...props}
      >
        <Icon name={icon} size={22} />
        <span>{label}</span>
      </a>
    );
  },
);

NavbarItemLink.displayName = 'NavbarItemLink';

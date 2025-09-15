import { Icon as IconifyIcon } from '@iconify/react';
import type { ComponentProps } from 'react';
import { IconKey, IconsReference } from './data/icon-reference';

interface IconProps extends Omit<ComponentProps<typeof IconifyIcon>, 'icon'> {
  name: IconKey;
  size?: number;
}

export function Icon({ name, size = 16, ...props }: IconProps) {
  const iconData = IconsReference[name];

  return <IconifyIcon icon={iconData.value} width={size} height={size} {...props} />;
}

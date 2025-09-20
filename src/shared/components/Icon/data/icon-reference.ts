import type { IconifyIcon } from '@iconify/react/dist/iconify.js';

type IconData = { type: 'data'; value: IconifyIcon };
type IconString = { type: 'string'; value: string };

export const IconsReference = {
  graph_bar_increase_fill: { type: 'string', value: 'streamline-plump:graph-bar-increase-solid' },
  speed_duotone_fill: { type: 'string', value: 'material-symbols:speed-rounded' },
  required_fill: { type: 'string', value: 'ix:mandatory' },
  warning_fill: { type: 'string', value: 'typcn:warning' },
} as const satisfies Record<string, IconData | IconString>;

export type IconKey = keyof typeof IconsReference;

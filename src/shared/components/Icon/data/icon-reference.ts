import type { IconifyIcon } from '@iconify/react/dist/iconify.js';

import IcDashboard from '@/shared/components/Icon/json/ic-dashboard.json';
import IcAnalytics from '@/shared/components/Icon/json/ic-analytics.json';
import NexPrint from '@/shared/components/Icon/json/nexprint.json';

type IconData = { type: 'data'; value: IconifyIcon };
type IconString = { type: 'string'; value: string };

export const IconsReference = {
  graph_bar_increase_fill: { type: 'data', value: IcAnalytics },
  chevron_up_fill: { type: 'string', value: 'mingcute:up-fill' },
  chevron_right_fill: { type: 'string', value: 'mingcute:right-fill' },
  chevron_down_fill: { type: 'string', value: 'mingcute:down-fill' },
  chevron_left_fill: { type: 'string', value: 'mingcute:left-fill' },
  nexprint_full_fill: { type: 'data', value: NexPrint },
  speed_duotone_fill: { type: 'string', value: 'lets-icons:speed-fill-duotone' },
  speed_custom_duotone_fill: { type: 'data', value: IcDashboard },
  required_fill: { type: 'string', value: 'ix:mandatory' },
  plus_fill: { type: 'string', value: 'stash:plus-solid' },
  warning_fill: { type: 'string', value: 'typcn:warning' },
} as const satisfies Record<string, IconData | IconString>;

export type IconKey = keyof typeof IconsReference;

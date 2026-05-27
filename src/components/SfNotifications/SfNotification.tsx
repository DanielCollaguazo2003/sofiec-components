import React from 'react';
import { notification } from 'antd';
import type { ArgsProps, NotificationInstance } from 'antd/es/notification/interface';
import { twMerge } from 'tailwind-merge';

export type ISfNotificationArgs = ArgsProps;

const DEFAULT_DURATION = 4.5;
const DEFAULT_PLACEMENT: ArgsProps['placement'] = 'topRight';

const DEFAULT_CLASS = 'sf-notification rounded-xl';

const DEFAULT_STYLE: React.CSSProperties = {
  backgroundColor: 'var(--color-sf-bg-light)',
  color: 'var(--color-sf-text-main)',
  borderRadius: 12,
  boxShadow: 'var(--shadow-sf-card)',
  border: '1px solid transparent',
  padding: 12,
};

function mergeArgs(args?: ISfNotificationArgs): ISfNotificationArgs {
  return {
    duration: DEFAULT_DURATION,
    placement: DEFAULT_PLACEMENT,
    ...args,
    className: twMerge(DEFAULT_CLASS, args?.className),
    style: {
      ...DEFAULT_STYLE,
      ...args?.style,
    },
  };
}

export const SfNotification = {
  open: (args: ISfNotificationArgs) => notification.open(mergeArgs(args)),
  info: (args: ISfNotificationArgs) => notification.info(mergeArgs(args)),
  success: (args: ISfNotificationArgs) => notification.success(mergeArgs(args)),
  error: (args: ISfNotificationArgs) => notification.error(mergeArgs(args)),
  warning: (args: ISfNotificationArgs) => notification.warning(mergeArgs(args)),
  config: (cfg: Parameters<typeof notification.config>[0]) => notification.config(cfg),
  destroy: () => notification.destroy(),
  useNotification: (): readonly [NotificationInstance, React.ReactElement] => notification.useNotification(),
};

export default SfNotification;

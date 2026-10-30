import type React from 'react';
import type { ArgsProps } from 'antd/es/notification/interface';
import { twMerge } from 'tailwind-merge';

export type ISfNotificationArgs = ArgsProps;
export type TNotificationType = 'success' | 'info' | 'warning' | 'error';

export type TNotificationProps = Omit<ISfNotificationArgs, 'message' | 'description'> & {
  type: TNotificationType;
  message: React.ReactNode;
  description?: React.ReactNode;
};

export interface NotificationsContextType {
  openNotificationWithIcon: (notificationProps: TNotificationProps) => void;
  destroy: () => void;
}

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

export function mergeNotificationArgs(args?: ISfNotificationArgs): ISfNotificationArgs {
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

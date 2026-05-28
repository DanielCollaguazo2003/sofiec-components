import React from 'react';
import { notification } from 'antd';
import type { NotificationInstance } from 'antd/es/notification/interface';
import type { ISfNotificationArgs } from './notifications.shared';
import { mergeNotificationArgs } from './notifications.shared';

export const SfNotification = {
  open: (args: ISfNotificationArgs) => notification.open(mergeNotificationArgs(args)),
  info: (args: ISfNotificationArgs) => notification.info(mergeNotificationArgs(args)),
  success: (args: ISfNotificationArgs) => notification.success(mergeNotificationArgs(args)),
  error: (args: ISfNotificationArgs) => notification.error(mergeNotificationArgs(args)),
  warning: (args: ISfNotificationArgs) => notification.warning(mergeNotificationArgs(args)),
  config: (cfg: Parameters<typeof notification.config>[0]) => notification.config(cfg),
  destroy: () => notification.destroy(),
  useNotification: (): readonly [NotificationInstance, React.ReactElement] => notification.useNotification(),
};

export default SfNotification;

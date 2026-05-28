import React, { createContext, useMemo } from 'react';
import { notification } from 'antd';
import type { NotificationsContextType, TNotificationProps } from './notifications.shared';
import { mergeNotificationArgs } from './notifications.shared';

export const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

export interface NotificationsProviderProps {
  children: React.ReactNode;
}

export const NotificationsProvider = ({ children }: NotificationsProviderProps) => {
  const [api, contextHolder] = notification.useNotification();

  const value = useMemo<NotificationsContextType>(() => {
    const openNotificationWithIcon = (notificationProps: TNotificationProps) => {
      const { type, ...rest } = notificationProps;
      api[type](mergeNotificationArgs(rest));
    };

    return {
      openNotificationWithIcon,
      destroy: () => notification.destroy(),
    };
  }, [api]);

  return (
    <NotificationsContext.Provider value={value}>
      {contextHolder}
      {children}
    </NotificationsContext.Provider>
  );
};

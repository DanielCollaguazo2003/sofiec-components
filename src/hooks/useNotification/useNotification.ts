import { useContext } from 'react';
import { NotificationsContext } from '../../components/SfNotifications/NotificationsProvider';
import type { NotificationsContextType } from '../../components/SfNotifications/notifications.shared';

export const useNotification = (): NotificationsContextType => {
  const context = useContext(NotificationsContext);

  if (!context) {
    throw new Error('useNotification debe usarse dentro de NotificationsProvider');
  }

  return context;
};

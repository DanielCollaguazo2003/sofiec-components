import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { useAppLayoutStore } from './layout.store';
import { findNavItemByKey } from './types';
import type { AppLayoutUser, AppNavItem } from './types';

export interface AppLayoutProps {
  navigation: AppNavItem[];
  activeKey: string;
  user: AppLayoutUser;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  breadcrumbs?: string[];
  notificationsCount?: number;
  sidebarHeaderSlot?: ReactNode;
  onNavigate?: (item: AppNavItem) => void;
  onSearchClick?: () => void;
  onNotificationsClick?: () => void;
  onProfileClick?: () => void;
  onSettingsClick?: () => void;
  onLogoutClick?: () => void;
}

export const AppLayout = ({
  navigation,
  activeKey,
  user,
  children,
  className,
  contentClassName,
  breadcrumbs,
  notificationsCount,
  sidebarHeaderSlot,
  onNavigate,
  onSearchClick,
  onNotificationsClick,
  onProfileClick,
  onSettingsClick,
  onLogoutClick,
}: AppLayoutProps) => {
  const isMobileSidebarOpen = useAppLayoutStore((state) => state.isMobileSidebarOpen);
  const isDesktopSidebarCollapsed = useAppLayoutStore((state) => state.isDesktopSidebarCollapsed);
  const openMobileSidebar = useAppLayoutStore((state) => state.openMobileSidebar);
  const closeMobileSidebar = useAppLayoutStore((state) => state.closeMobileSidebar);
  const toggleDesktopSidebar = useAppLayoutStore((state) => state.toggleDesktopSidebar);

  const resolvedBreadcrumbs = useMemo(() => {
    if (breadcrumbs?.length) {
      return breadcrumbs;
    }

    const match = findNavItemByKey(navigation, activeKey);
    if (!match) {
      return ['Dashboard'];
    }

    if (match.item.breadcrumb?.length) {
      return match.item.breadcrumb;
    }

    return match.trail.map((entry) => entry.label);
  }, [activeKey, breadcrumbs, navigation]);

  return (
    <div className={twMerge('relative flex min-h-screen bg-transparent text-sf-text-main', className)}>
      <Sidebar
        className="hidden md:flex"
        navigation={navigation}
        activeKey={activeKey}
        collapsed={isDesktopSidebarCollapsed}
        onToggleCollapse={toggleDesktopSidebar}
        onNavigate={(item) => {
          onNavigate?.(item);
        }}
        headerSlot={sidebarHeaderSlot}
      />

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <Navbar
          breadcrumbs={resolvedBreadcrumbs}
          user={user}
          notificationsCount={notificationsCount}
          onOpenMobileSidebar={openMobileSidebar}
          onSearchClick={onSearchClick}
          onNotificationsClick={onNotificationsClick}
          onProfileClick={onProfileClick}
          onSettingsClick={onSettingsClick}
          onLogoutClick={onLogoutClick}
        />

        <main className={twMerge('flex-1 p-4 md:p-8', contentClassName)}>{children}</main>
      </div>

      {isMobileSidebarOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-[1px] md:hidden"
            onClick={closeMobileSidebar}
            aria-label="Close navigation drawer"
          />

          <div className="fixed inset-y-0 left-0 z-50 w-[85%] max-w-80 p-3 md:hidden">
            <Sidebar
              className="w-full"
              navigation={navigation}
              activeKey={activeKey}
              onNavigate={(item) => {
                onNavigate?.(item);
                closeMobileSidebar();
              }}
              headerSlot={
                <button
                  type="button"
                  onClick={closeMobileSidebar}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-sf-text-secondary shadow-[0_8px_24px_rgb(0,0,0,0.08)]"
                  aria-label="Close sidebar"
                >
                  <X className="h-4 w-4" />
                </button>
              }
            />
          </div>
        </>
      )}
    </div>
  );
};

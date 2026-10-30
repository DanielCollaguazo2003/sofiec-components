import { Bell, ChevronRight, Menu, Search } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { UserMenu } from './UserMenu';
import type { AppLayoutUser } from './types';

export interface NavbarProps {
  breadcrumbs: string[];
  user: AppLayoutUser;
  notificationsCount?: number;
  onOpenMobileSidebar?: () => void;
  onSearchClick?: () => void;
  onNotificationsClick?: () => void;
  onProfileClick?: () => void;
  onSettingsClick?: () => void;
  onLogoutClick?: () => void;
  searchPlaceholder?: string;
  className?: string;
}

export const Navbar = ({
  breadcrumbs,
  user,
  notificationsCount = 0,
  onOpenMobileSidebar,
  onSearchClick,
  onNotificationsClick,
  onProfileClick,
  onSettingsClick,
  onLogoutClick,
  searchPlaceholder = 'Buscar modulo, cuenta o accion...',
  className,
}: NavbarProps) => {
  return (
    <header
      className={twMerge(
        'sticky top-0 z-30 h-16 w-full bg-white/80 px-4 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:px-8',
        className,
      )}
    >
      <div className="flex h-full items-center gap-3 md:gap-4">
        <button
          type="button"
          onClick={onOpenMobileSidebar}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100/80 text-sf-text-secondary transition-transform duration-200 ease-out hover:scale-[1.02] md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-4 w-4" />
        </button>

        <div className="min-w-0 shrink-0">
          <nav className="flex items-center gap-1 text-xs font-medium text-sf-text-secondary sm:text-sm" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, index) => (
              <span key={`${crumb}-${index}`} className="flex items-center gap-1">
                {index > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                <span className={twMerge('truncate', index === breadcrumbs.length - 1 && 'font-semibold text-sf-text-main')}>
                  {crumb}
                </span>
              </span>
            ))}
          </nav>
        </div>

        <button
          type="button"
          onClick={onSearchClick}
          className="ml-auto hidden h-11 min-w-80 items-center gap-2 rounded-2xl bg-[#F2F2F7]/90 px-4 text-left text-sf-text-secondary transition-transform duration-200 ease-out hover:scale-[1.01] lg:flex"
          aria-label="Open spotlight search"
        >
          <Search className="h-4 w-4" />
          <span className="truncate text-sm">{searchPlaceholder}</span>
          <span className="ml-auto rounded-lg bg-white/90 px-1.5 py-0.5 text-[11px] font-semibold text-slate-500">⌘K</span>
        </button>

        <div className="ml-auto flex items-center gap-2 lg:ml-0 lg:pl-2">
          <button
            type="button"
            onClick={onNotificationsClick}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100/80 text-sf-text-secondary transition-transform duration-200 ease-out hover:scale-[1.02]"
            aria-label="View notifications"
          >
            <Bell className="h-4 w-4" />
            {notificationsCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-500 px-1 text-[10px] font-semibold text-white">
                {notificationsCount > 9 ? '9+' : notificationsCount}
              </span>
            )}
          </button>

          <UserMenu
            user={user}
            onProfileClick={onProfileClick}
            onSettingsClick={onSettingsClick}
            onLogoutClick={onLogoutClick}
          />
        </div>
      </div>
    </header>
  );
};

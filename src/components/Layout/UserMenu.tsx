import { useMemo, useState } from 'react';
import { ChevronDown, LogOut, Settings, User as UserIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import type { AppLayoutUser } from './types';

export interface UserMenuProps {
  user: AppLayoutUser;
  onProfileClick?: () => void;
  onSettingsClick?: () => void;
  onLogoutClick?: () => void;
  className?: string;
}

const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const initials = parts.slice(0, 2).map((part) => part[0]?.toUpperCase() ?? '');
  return initials.join('') || 'U';
};

export const UserMenu = ({
  user,
  onProfileClick,
  onSettingsClick,
  onLogoutClick,
  className,
}: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const initials = useMemo(() => getInitials(user.name), [user.name]);

  return (
    <div className={twMerge('relative', className)}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex items-center gap-2 rounded-2xl bg-white/70 px-2 py-1.5 text-left shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-transform duration-200 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500/30"
      >
        {user.avatarUrl ? (
          <img src={user.avatarUrl} alt={user.name} className="h-8 w-8 rounded-xl object-cover" />
        ) : (
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-100 text-xs font-semibold text-blue-700">
            {initials}
          </span>
        )}

        <span className="hidden md:block">
          <span className="block max-w-30 truncate text-sm font-semibold text-sf-text-main">{user.name}</span>
          {user.email && <span className="block max-w-36 truncate text-xs text-sf-text-secondary">{user.email}</span>}
        </span>

        <ChevronDown className="h-4 w-4 text-sf-text-secondary" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 z-50 w-56 rounded-3xl bg-white/85 p-2 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-2xl px-3 py-2 text-sm text-sf-text-main transition-transform duration-200 ease-out hover:scale-[1.01] hover:bg-blue-50"
            onClick={() => {
              setIsOpen(false);
              onProfileClick?.();
            }}
          >
            <UserIcon className="h-4 w-4 text-sf-text-secondary" />
            Perfil
          </button>

          <button
            type="button"
            className="mt-1 flex w-full items-center gap-2 rounded-2xl px-3 py-2 text-sm text-sf-text-main transition-transform duration-200 ease-out hover:scale-[1.01] hover:bg-blue-50"
            onClick={() => {
              setIsOpen(false);
              onSettingsClick?.();
            }}
          >
            <Settings className="h-4 w-4 text-sf-text-secondary" />
            Configuracion
          </button>

          <button
            type="button"
            className="mt-1 flex w-full items-center gap-2 rounded-2xl px-3 py-2 text-sm text-red-500 transition-transform duration-200 ease-out hover:scale-[1.01] hover:bg-red-50"
            onClick={() => {
              setIsOpen(false);
              onLogoutClick?.();
            }}
          >
            <LogOut className="h-4 w-4" />
            Cerrar sesion
          </button>
        </div>
      )}
    </div>
  );
};

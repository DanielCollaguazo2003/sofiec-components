import type { MouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';
import type { AppNavItem } from './types';

export interface NavItemProps {
  item: AppNavItem;
  isActive?: boolean;
  isCollapsed?: boolean;
  onClick?: (item: AppNavItem, event: MouseEvent<HTMLButtonElement>) => void;
}

export const NavItem = ({
  item,
  isActive = false,
  isCollapsed = false,
  onClick,
}: NavItemProps) => {
  return (
    <button
      type="button"
      onClick={(event) => onClick?.(item, event)}
      className={twMerge(
        'group flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm font-medium text-sf-text-secondary transition-[transform,background-color,color] duration-200 ease-out hover:scale-[1.02] hover:bg-slate-100/70 hover:text-sf-text-main focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500/30',
        isActive && 'bg-blue-50 text-blue-600 shadow-[0_8px_18px_rgba(24,144,255,0.16)]',
        isCollapsed && 'justify-center px-2.5',
      )}
      aria-current={isActive ? 'page' : undefined}
      title={isCollapsed ? item.label : undefined}
    >
      {item.icon && (
        <span className={twMerge('shrink-0 text-sf-text-secondary', isActive && 'text-blue-500')}>
          {item.icon}
        </span>
      )}

      {!isCollapsed && <span className="min-w-0 flex-1 truncate">{item.label}</span>}

      {!isCollapsed && item.badge !== undefined && item.badge !== null && (
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">
          {item.badge}
        </span>
      )}
    </button>
  );
};

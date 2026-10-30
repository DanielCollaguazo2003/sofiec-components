import type { MouseEvent } from 'react';
import { ChevronRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import type { AppNavItem } from './types';

export interface NavItemProps {
  item: AppNavItem;
  isActive?: boolean;
  isCollapsed?: boolean;
  hasChildren?: boolean;
  onClick?: (item: AppNavItem, event: MouseEvent<HTMLButtonElement>) => void;
}

export const NavItem = ({
  item,
  isActive = false,
  isCollapsed = false,
  hasChildren = false,
  onClick,
}: NavItemProps) => {
  return (
    <button
      type="button"
      onClick={(event) => onClick?.(item, event)}
      className={twMerge(
        'group flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm font-medium text-sf-text-secondary transition-[transform,background-color,color] duration-200 ease-out hover:scale-[1.02] hover:bg-slate-100/70 hover:text-sf-text-main focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500/30',
        isActive && 'bg-blue-50 text-blue-600 shadow-[0_8px_18px_rgba(24,144,255,0.16)]',
        isCollapsed && 'h-10 w-10 justify-center gap-0 rounded-full px-0 py-0',
      )}
      aria-current={isActive ? 'page' : undefined}
      title={isCollapsed ? item.label : undefined}
    >
      {item.icon && (
        <span
          className={twMerge(
            'flex shrink-0 items-center justify-center text-sf-text-secondary',
            isCollapsed && 'h-5 w-5',
            isActive && 'text-blue-500',
          )}
        >
          {item.icon}
        </span>
      )}

      {!isCollapsed && <span className="min-w-0 flex-1 truncate">{item.label}</span>}

      {!isCollapsed && item.badge !== undefined && item.badge !== null && (
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">
          {item.badge}
        </span>
      )}

      {isCollapsed && hasChildren && (
        <ChevronRight className={twMerge('h-3.5 w-3.5 shrink-0 text-sf-text-secondary/70', isActive && 'text-blue-500')} />
      )}
    </button>
  );
};

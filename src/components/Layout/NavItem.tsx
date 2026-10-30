import type { MouseEvent } from 'react';
import { ChevronRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import type { AppNavItem } from './types';

export interface NavItemProps {
  item: AppNavItem;
  isActive?: boolean;
  isCollapsed?: boolean;
  hasChildren?: boolean;
  isOpen?: boolean;
  onClick?: (item: AppNavItem, event: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Layout constante: el icono siempre ocupa los primeros 40px (rail).
 * El colapso lo resuelve el contenedor del Sidebar recortando el ancho,
 * por lo que este componente nunca se reacomoda durante la transición.
 */
export const NavItem = ({
  item,
  isActive = false,
  isCollapsed = false,
  hasChildren = false,
  isOpen = false,
  onClick,
}: NavItemProps) => {
  return (
    <button
      type="button"
      onClick={(event) => onClick?.(item, event)}
      className={twMerge(
        'flex h-10 w-full cursor-pointer items-center gap-3 overflow-hidden rounded-2xl px-2.5 text-left text-sm font-medium whitespace-nowrap text-sf-text-secondary transition-colors duration-200 hover:bg-slate-100/70 hover:text-sf-text-main focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500/30',
        isActive && 'bg-blue-50 text-blue-600 shadow-[0_8px_18px_rgba(24,144,255,0.16)]',
      )}
      aria-current={isActive ? 'page' : undefined}
      title={isCollapsed ? item.label : undefined}
    >
      {item.icon && (
        <span className={twMerge('flex h-5 w-5 shrink-0 items-center justify-center', isActive && 'text-blue-500')}>
          {item.icon}
        </span>
      )}

      <span className="min-w-0 flex-1 truncate">{item.label}</span>

      {item.badge !== undefined && item.badge !== null && (
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">{item.badge}</span>
      )}

      {hasChildren && (
        <ChevronRight
          className={twMerge('h-3.5 w-3.5 shrink-0 transition-transform duration-200', isOpen && 'rotate-90')}
        />
      )}
    </button>
  );
};

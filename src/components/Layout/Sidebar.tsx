import type { ReactNode } from 'react';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { NavItem } from './NavItem';
import type { AppNavItem } from './types';

export interface SidebarProps {
  navigation: AppNavItem[];
  activeKey?: string;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  onNavigate?: (item: AppNavItem) => void;
  className?: string;
  headerSlot?: ReactNode;
}

const collectChildrenKeys = (item: AppNavItem): string[] => {
  if (!item.children?.length) {
    return [item.key];
  }

  return [item.key, ...item.children.flatMap((child) => collectChildrenKeys(child))];
};

export const Sidebar = ({
  navigation,
  activeKey,
  collapsed = false,
  onToggleCollapse,
  onNavigate,
  className,
  headerSlot,
}: SidebarProps) => {
  return (
    <aside
      className={twMerge(
        'sticky top-0 flex h-screen shrink-0 flex-col bg-white/80 px-3 py-5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-[width,padding] duration-300 ease-out',
        collapsed ? 'w-13' : 'w-72',
        className,
      )}
    >
      <div className={twMerge('mb-5 flex items-center', collapsed ? 'justify-center' : 'justify-between')}>
        {!collapsed && (
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sf-text-secondary">Sofiec Workspace</p>
            <h2 className="text-lg font-semibold tracking-tight text-sf-text-main">Panel</h2>
          </div>
        )}

        {headerSlot}
      </div>

      <nav className="space-y-2 overflow-y-auto pb-4" aria-label="Sidebar navigation">
        {navigation.map((item) => {
          const branchKeys = collectChildrenKeys(item);
          const isBranchActive = !!activeKey && branchKeys.includes(activeKey);

          return (
            <div key={item.key} className="space-y-1">
              <NavItem
                item={item}
                isActive={item.key === activeKey}
                isCollapsed={collapsed}
                onClick={(navItem) => onNavigate?.(navItem)}
              />

              {!collapsed && !!(item.children?.length) && (
                <div
                  className={twMerge(
                    'ml-2 space-y-1 border-l border-slate-200/65 pl-3 transition-opacity duration-200',
                    isBranchActive ? 'opacity-100' : 'opacity-80',
                  )}
                >
                  {item.children.map((child) => (
                    <NavItem
                      key={child.key}
                      item={child}
                      isActive={child.key === activeKey}
                      onClick={(navItem) => onNavigate?.(navItem)}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={onToggleCollapse}
        className="absolute -right-3 top-8 hidden h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sf-text-secondary shadow-[0_8px_24px_rgb(0,0,0,0.08)] backdrop-blur-md transition-transform duration-200 ease-out hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500/30 md:flex"
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
      </button>
    </aside>
  );
};

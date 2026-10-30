import type { ReactNode } from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { NavItem } from "./NavItem";
import type { AppNavItem } from "./types";

export interface SidebarProps {
  navigation: AppNavItem[];
  activeKey?: string;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  onNavigate?: (item: AppNavItem) => void;
  className?: string;
  brandSlot?: ReactNode;
  headerSlot?: ReactNode;
}

const collectChildrenKeys = (item: AppNavItem): string[] => {
  if (!item.children?.length) {
    return [item.key];
  }

  return [
    item.key,
    ...item.children.flatMap((child) => collectChildrenKeys(child)),
  ];
};

export const Sidebar = ({
  navigation,
  activeKey,
  collapsed = false,
  onToggleCollapse,
  onNavigate,
  className,
  brandSlot,
  headerSlot,
}: SidebarProps) => {
  return (
    <aside
      className={twMerge(
        "sticky top-0 flex h-screen shrink-0 flex-col bg-white/80 px-3 py-5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-[width,padding] duration-300 ease-out",
        collapsed ? "w-13" : "w-72",
        className,
      )}
    >
      <div className="relative mb-5 flex items-start">
        <div
          className={twMerge(
            "min-w-0 transition-[opacity,transform] duration-200 ease-out",
            collapsed ? "mx-auto" : "",
          )}
        >
          {brandSlot ?? (
            <div
              className={twMerge(
                "flex items-center",
                collapsed ? "justify-center" : "gap-3",
              )}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <span className="text-sm font-semibold text-blue-600">S</span>
              </span>

              {!collapsed && (
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sf-text-secondary">
                    Sofiec Workspace
                  </p>
                  <h2 className="text-lg font-semibold tracking-tight text-sf-text-main">
                    Panel
                  </h2>
                </div>
              )}
            </div>
          )}
        </div>

        {headerSlot && <div className="ml-auto pr-9">{headerSlot}</div>}
      </div>

      <nav
        className="space-y-2 overflow-y-auto pb-4"
        aria-label="Sidebar navigation"
      >
        {navigation.map((item) => {
          const branchKeys = collectChildrenKeys(item);
          const isBranchActive = !!activeKey && branchKeys.includes(activeKey);

          return (
            <div key={item.key} className="space-y-1">
              <NavItem
                item={item}
                isActive={item.key === activeKey}
                isCollapsed={collapsed}
                hasChildren={!!item.children?.length}
                onClick={(navItem) => {
                  if (collapsed && navItem.children?.length) {
                    onToggleCollapse?.();
                  }

                  onNavigate?.(navItem);
                }}
              />

              {!collapsed && !!item.children?.length && (
                <div
                  className={twMerge(
                    "ml-2 space-y-1 border-l border-slate-200/65 pl-3 transition-opacity duration-200",
                    isBranchActive ? "opacity-100" : "opacity-80",
                  )}
                >
                  {item.children.map((child) => (
                    <NavItem
                      key={child.key}
                      item={child}
                      isActive={child.key === activeKey}
                      hasChildren={!!child.children?.length}
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
        title={collapsed ? "Abrir menú" : "Cerrar menú"}
        className={`
        inline-flex items-center justify-center p-2.5 rounded-full
        text-gray-300 hover:text-white hover:bg-zinc-800 
        focus:outline-none focus:ring-2 focus:ring-zinc-600
        transition-colors duration-200
        ${className}
      `}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? (
          <PanelLeftOpen className="h-3.5 w-3.5" />
        ) : (
          <PanelLeftClose className="h-3.5 w-3.5" />
        )}
      </button>
    </aside>
  );
};

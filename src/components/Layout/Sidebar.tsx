import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { Popover } from "antd";
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

interface IFlyoutMenuProps {
  item: AppNavItem;
  activeKey?: string;
  onSelect: (child: AppNavItem) => void;
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

const FlyoutMenu = ({ item, activeKey, onSelect }: IFlyoutMenuProps) => (
  <div
    className="flex flex-col gap-0.5"
    role="menu"
    aria-label={item.label}
  >
    {item.children?.map((child) => (
      <button
        key={child.key}
        type="button"
        role="menuitem"
        onClick={() => onSelect(child)}
        className={twMerge(
          "flex h-9 w-full cursor-pointer items-center gap-2.5 rounded-lg px-3 text-left text-sm font-medium whitespace-nowrap text-sf-text-secondary transition-colors duration-150 hover:bg-slate-100/70 hover:text-sf-text-main focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500/30",
          child.key === activeKey && "bg-blue-50 text-blue-600",
        )}
      >
        {child.icon && (
          <span className="flex h-4 w-4 shrink-0 items-center justify-center">
            {child.icon}
          </span>
        )}
        <span className="flex-1 truncate">{child.label}</span>
        {child.badge !== undefined && child.badge !== null && (
          <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-500">
            {child.badge}
          </span>
        )}
      </button>
    ))}
  </div>
);

const iconButtonClass =
  "inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl text-sf-text-secondary transition-colors duration-200 hover:bg-slate-100/80 hover:text-sf-text-main focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500/30";

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
  const activeBranchKey = useMemo(
    () =>
      navigation.find((item) =>
        item.children?.some((child) => child.key === activeKey),
      )?.key,
    [activeKey, navigation],
  );

  const [toggledKeys, setToggledKeys] = useState<Record<string, boolean>>({});
  const [flyoutKey, setFlyoutKey] = useState<string | null>(null);

  const isBranchOpen = (key: string) => toggledKeys[key] ?? key === activeBranchKey;

  const toggleBranch = (key: string) => {
    setToggledKeys((prev) => ({ ...prev, [key]: !isBranchOpen(key) }));
  };

  return (
    <aside
      className={twMerge(
        "sticky top-0 flex h-screen shrink-0 flex-col overflow-hidden bg-white/80 px-3 py-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md transition-[width] duration-300 ease-out",
        collapsed ? "w-16" : "w-72",
        className,
      )}
    >
      {/*
        El contenido tiene ancho fijo en expandido y se recorta a 40px (rail)
        en colapsado. Así ningún elemento se reacomoda durante la transición.
      */}
      <div
        className={twMerge(
          "flex min-h-0 flex-1 flex-col overflow-hidden transition-[width] duration-300 ease-out",
          collapsed ? "w-10" : "w-full min-w-66",
        )}
      >
        <div className="group relative mb-5 h-10 shrink-0">
          {brandSlot ?? (
            <div className="flex h-10 items-center gap-3 whitespace-nowrap">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-slate-200">
                S
              </span>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold uppercase tracking-[0.24em] text-sf-text-secondary">
                  Sofiec Workspace
                </p>
                <h2 className="truncate text-lg font-semibold tracking-tight text-sf-text-main">
                  Panel
                </h2>
              </div>
            </div>
          )}

          {collapsed && onToggleCollapse && (
            <button
              type="button"
              onClick={onToggleCollapse}
              title="Abrir menú"
              aria-label="Abrir menú"
              className="absolute left-0 top-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl bg-white text-sf-text-secondary opacity-0 shadow-sm ring-1 ring-slate-200 transition-opacity duration-200 hover:text-sf-text-main focus-visible:opacity-100 focus-visible:outline-none group-hover:opacity-100"
            >
              <PanelLeftOpen className="h-4 w-4 text-gray-500" />
            </button>
          )}

          {!collapsed && (headerSlot || onToggleCollapse) && (
            <div className="absolute right-0 top-1 flex items-center gap-1">
              {headerSlot}
              {onToggleCollapse && (
                <button
                  type="button"
                  onClick={onToggleCollapse}
                  title="Cerrar menú"
                  aria-label="Cerrar menú"
                  className={iconButtonClass}
                >
                  <PanelLeftClose className="h-4 w-4" />
                </button>
              )}
            </div>
          )}
        </div>

        <nav
          className="min-h-0 flex-1 space-y-2 overflow-y-auto overflow-x-hidden pb-4"
          aria-label="Sidebar navigation"
        >
          {navigation.map((item) => {
            const hasChildren = !!item.children?.length;
            const isBranchActive =
              !!activeKey && collectChildrenKeys(item).includes(activeKey);
            const isAccordionOpen = hasChildren && !collapsed && isBranchOpen(item.key);

            const navButton = (
              <NavItem
                item={item}
                isActive={
                  item.key === activeKey ||
                  (isBranchActive && (collapsed || !isAccordionOpen))
                }
                isCollapsed={collapsed}
                hasChildren={hasChildren}
                isOpen={isAccordionOpen}
                onClick={(navItem) => {
                  if (!collapsed && hasChildren) {
                    toggleBranch(navItem.key);
                  }
                  onNavigate?.(navItem);
                }}
              />
            );

            return (
              <div key={item.key}>
                {collapsed && hasChildren ? (
                  <Popover
                    open={flyoutKey === item.key}
                    onOpenChange={(visible) =>
                      setFlyoutKey(visible ? item.key : null)
                    }
                    placement="rightTop"
                    trigger={["hover", "click"]}
                    arrow={false}
                    mouseEnterDelay={0.08}
                    mouseLeaveDelay={0.15}
                    classNames={{
                      container:
                        "min-w-44 rounded-xl! p-1! shadow-[0_8px_24px_rgba(0,0,0,0.08)]! ring-1 ring-slate-200/70",
                    }}
                    content={
                      <FlyoutMenu
                        item={item}
                        activeKey={activeKey}
                        onSelect={(child) => {
                          setFlyoutKey(null);
                          onNavigate?.(child);
                        }}
                      />
                    }
                  >
                    <div className="w-10">{navButton}</div>
                  </Popover>
                ) : (
                  navButton
                )}

                {hasChildren && (
                  <div
                    className={twMerge(
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      isAccordionOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                    inert={!isAccordionOpen}
                  >
                    <div className="overflow-hidden">
                      <div className="ml-5 mt-1 space-y-1 border-l border-slate-200/65 pl-2">
                        {item.children?.map((child) => (
                          <NavItem
                            key={child.key}
                            item={child}
                            isActive={child.key === activeKey}
                            onClick={(navItem) => onNavigate?.(navItem)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

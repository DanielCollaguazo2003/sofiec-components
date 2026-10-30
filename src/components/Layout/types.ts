import type { ReactNode } from 'react';

export interface AppNavItem {
  key: string;
  label: string;
  icon?: ReactNode;
  badge?: string | number;
  children?: AppNavItem[];
  breadcrumb?: string[];
}

export interface AppLayoutUser {
  name: string;
  email?: string;
  avatarUrl?: string;
}

export const findNavItemByKey = (
  items: AppNavItem[],
  key: string,
): { item: AppNavItem; trail: AppNavItem[] } | undefined => {
  for (const item of items) {
    if (item.key === key) {
      return {
        item,
        trail: [item],
      };
    }

    if (item.children?.length) {
      const found = findNavItemByKey(item.children, key);
      if (found) {
        return {
          item: found.item,
          trail: [item, ...found.trail],
        };
      }
    }
  }

  return undefined;
};

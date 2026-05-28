import type { ReactNode } from 'react';
import { Button, Dropdown } from 'antd';
import type { ButtonProps, DropdownProps, MenuProps } from 'antd';
import { MoreHorizontal } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export interface SfActionMenuItem {
  key?: string;
  label: ReactNode;
  icon?: ReactNode;
  danger?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface SfActionMenuProps extends Omit<DropdownProps, 'menu' | 'children'> {
  items: SfActionMenuItem[];
  triggerAriaLabel?: string;
  buttonProps?: ButtonProps;
  className?: string;
}

export const SfActionMenu = ({
  items,
  triggerAriaLabel = 'Abrir menú de acciones',
  buttonProps,
  className,
  popupRender,
  overlayClassName,
  ...dropdownProps
}: SfActionMenuProps) => {
  const callbacks = new Map<string, () => void>();

  const menuItems: MenuProps['items'] = items.map((item, index) => {
    const key = item.key ?? String(index);

    if (item.onClick) {
      callbacks.set(key, item.onClick);
    }

    return {
      key,
      label: item.label,
      icon: item.icon,
      danger: item.danger,
      disabled: item.disabled,
    };
  });

  const handleClick: MenuProps['onClick'] = ({ key }) => {
    callbacks.get(String(key))?.();
  };

  return (
    <Dropdown
      {...dropdownProps}
      menu={{ items: menuItems, onClick: handleClick }}
      popupRender={popupRender}
      overlayClassName={twMerge('sf-action-menu-overlay', overlayClassName)}
      className={className}
    >
      <Button
        {...buttonProps}
        type="text"
        aria-label={triggerAriaLabel}
        icon={<MoreHorizontal className="size-5" />}
        className={twMerge('sf-action-menu-trigger', buttonProps?.className)}
      />
    </Dropdown>
  );
};

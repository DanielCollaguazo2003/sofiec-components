import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { twMerge } from 'tailwind-merge';

export interface ISfSelectProps<T = any> extends SelectProps<T> {
  // Aquí podemos agregar props personalizadas a nivel financiero.
  // Por ejemplo, si queremos un flag para que busque independientemente por label o value
  enableAdvancedSearch?: boolean;
}

export const SfSelect = <T = any>({
  enableAdvancedSearch = true,
  className,
  ...props
}: ISfSelectProps<T>) => {
  // Configuración base sugerida para mejor UX
  const defaultSearchProps: Partial<SelectProps<T>> = enableAdvancedSearch ? {
    showSearch: true,
    optionFilterProp: 'children', // Default filter prop in AntD
    filterOption: (input, option) =>
      (option?.label ?? '').toString().toLowerCase().includes(input.toLowerCase()),
  } : {};

  return (
    <Select
      {...defaultSearchProps}
      {...props}
      className={twMerge('w-full', className)}
    />
  );
};

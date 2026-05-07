import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Checkbox } from 'antd';
import { twMerge } from 'tailwind-merge';

export interface FormCheckboxProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  disabled?: boolean;
  className?: string;
}

export const FormCheckbox = <T extends FieldValues>({
  name,
  label,
  control,
  disabled,
  className,
}: FormCheckboxProps<T>) => {
  return (
    <div className={twMerge('flex flex-col mb-4 w-full', className)}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div className="flex flex-col">
            <Checkbox
              {...field}
              id={name}
              checked={field.value} // AntD Checkbox relies on checked instead of value
              disabled={disabled}
              className={error ? 'text-red-500' : ''}
            >
              {label}
            </Checkbox>
            {error?.message && (
              <span className="text-red-500 text-xs mt-1 transition-opacity duration-300">
                {error.message}
              </span>
            )}
          </div>
        )}
      />
    </div>
  );
};

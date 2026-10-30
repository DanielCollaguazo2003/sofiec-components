import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Radio } from 'antd';
import { twMerge } from 'tailwind-merge';

export interface FormRadioOption {
  code: string | number;
  name: string;
}

export interface FormRadioGroupProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  options: FormRadioOption[];
  disabled?: boolean;
  className?: string;
}

export const FormRadioGroup = <T extends FieldValues>({
  name,
  label,
  control,
  options,
  disabled,
  className,
}: FormRadioGroupProps<T>) => {
  return (
    <div className={twMerge('flex flex-col gap-1 mb-4 w-full', className)}>
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div className="flex flex-col">
            <Radio.Group
              {...field}
              id={name}
              disabled={disabled}
              className={error ? 'text-red-500' : ''}
            >
              {options.map((opt) => (
                <Radio key={opt.code} value={opt.code}>
                  {opt.name}
                </Radio>
              ))}
            </Radio.Group>
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

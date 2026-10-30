import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { SfSelect } from '../SfSelect/SfSelect.view';
import { twMerge } from 'tailwind-merge';

export interface FormSelectOption {
  code: string | number;
  name: string;
  description?: string;
}

export interface FormSelectProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  options: FormSelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  mode?: 'multiple' | 'tags';
}

export const FormSelect = <T extends FieldValues>({
  name,
  label,
  control,
  options,
  placeholder,
  disabled,
  className,
  mode,
}: FormSelectProps<T>) => {
  // Map our custom {code, name} API structure to AntD {value, label} expected format
  const mappedOptions = options.map((opt) => ({
    value: opt.code,
    label: opt.name,
    title: opt.description, // HTML title for tooltip if needed
  }));

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
            <SfSelect
              {...field}
              id={name}
              options={mappedOptions}
              placeholder={placeholder}
              disabled={disabled}
              mode={mode}
              status={error ? 'error' : ''}
              className="w-full"
            />
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

import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Input } from 'antd';
import { twMerge } from 'tailwind-merge';

const { TextArea } = Input;

export interface FormTextareaProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  className?: string;
}

export const FormTextarea = <T extends FieldValues>({
  name,
  label,
  control,
  placeholder,
  rows = 3,
  disabled,
  className,
}: FormTextareaProps<T>) => {
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
            <TextArea
              {...field}
              id={name}
              rows={rows}
              placeholder={placeholder}
              disabled={disabled}
              status={error ? 'error' : ''}
              className="w-full resize-y"
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

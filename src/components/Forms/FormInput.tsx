import type { ReactNode } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Input } from 'antd';
import { twMerge } from 'tailwind-merge';

export interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'date' | 'tel';
  disabled?: boolean;
  className?: string;
  addonAfter?: ReactNode;
  addonBefore?: ReactNode;
}

export const FormInput = <T extends FieldValues>({
  name,
  label,
  control,
  placeholder,
  type = 'text',
  disabled,
  className,
  addonAfter,
  addonBefore,
}: FormInputProps<T>) => {
  return (
    <div className={twMerge('flex flex-col gap-1 mb-4 w-full', className)}>
      <label htmlFor={name} className="text-sm font-medium text-sf-text-secondary">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => {
          const InputComponent = type === 'password' ? Input.Password : Input;
          
          return (
            <div className="flex flex-col">
              <InputComponent
                {...field}
                id={name}
                type={type === 'password' ? undefined : type}
                placeholder={placeholder}
                disabled={disabled}
                status={error ? 'error' : ''}
                addonAfter={addonAfter}
                addonBefore={addonBefore}
                className="w-full transition-opacity transition-transform duration-300 ease-out focus-within:-translate-y-0.5"
              />
              {error?.message && (
                <span className="text-red-500 text-xs mt-1 transition-opacity transition-transform duration-300 ease-out">
                  {error.message}
                </span>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};

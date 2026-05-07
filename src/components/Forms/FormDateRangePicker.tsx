import type { Control, FieldValues, Path } from 'react-hook-form';
import { useFormContext, useController } from 'react-hook-form';
import { DatePicker } from 'antd';
import { twMerge } from 'tailwind-merge';

const { RangePicker } = DatePicker;

export interface FormDateRangePickerProps<T extends FieldValues> {
  startName: Path<T>;
  endName: Path<T>;
  label: string;
  control: Control<T>; // Expected to be passed but we also rely on useFormContext
  placeholder?: [string, string];
  disabled?: boolean;
  className?: string;
}

export const FormDateRangePicker = <T extends FieldValues>({
  startName,
  endName,
  label,
  control,
  placeholder,
  disabled,
  className,
}: FormDateRangePickerProps<T>) => {
  const { setValue, trigger } = useFormContext<T>();

  // Use controllers to subscribe to errors and current values for both fields
  const startField = useController({ name: startName, control });
  const endField = useController({ name: endName, control });

  const hasError = !!startField.fieldState.error || !!endField.fieldState.error;
  const errorMessage = startField.fieldState.error?.message || endField.fieldState.error?.message;

  const handleChange = (dates: any) => {
    // dates is [Dayjs, Dayjs] from antD or null
    if (dates && dates.length === 2) {
      setValue(startName, dates[0] as any, { shouldValidate: true, shouldDirty: true });
      setValue(endName, dates[1] as any, { shouldValidate: true, shouldDirty: true });
    } else {
      setValue(startName, null as any, { shouldValidate: true, shouldDirty: true });
      setValue(endName, null as any, { shouldValidate: true, shouldDirty: true });
    }
    // Always trigger validation to ensure both fields reflect changes
    trigger([startName, endName]);
  };

  // Construct current array for RangePicker
  const value = 
    startField.field.value && endField.field.value 
      ? [startField.field.value, endField.field.value] 
      : undefined;

  return (
    <div className={twMerge('flex flex-col gap-1 mb-4 w-full', className)}>
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex flex-col">
        <RangePicker
          value={value as any}
          onChange={handleChange}
          onBlur={() => trigger([startName, endName])}
          placeholder={placeholder}
          disabled={disabled}
          status={hasError ? 'error' : ''}
          className="w-full"
        />
        {errorMessage && (
          <span className="text-red-500 text-xs mt-1 transition-opacity duration-300">
            {errorMessage}
          </span>
        )}
      </div>
    </div>
  );
};

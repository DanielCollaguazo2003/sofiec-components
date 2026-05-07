import type { InputProps } from 'antd';
import { Input } from 'antd';
import { twMerge } from 'tailwind-merge';
import { useSfInputCurrency } from './SfInputCurrency.hook';

export interface ISfInputCurrencyProps extends Omit<InputProps, 'onChange'> {
  value?: string | number;
  onChange?: (value: string) => void;
  currency?: string; // e.g. USD, EUR
  maxLimit?: number;
}

export const SfInputCurrency = (props: ISfInputCurrencyProps) => {
  const { className, maxLimit, ...rest } = props;
  const { currentCurrency, displayValue, handleChange, handleBlur } = useSfInputCurrency(props);

  return (
    <Input
      {...rest}
      value={displayValue}
      onChange={handleChange}
      onBlur={handleBlur}
      prefix={<span className="text-gray-400 mr-1">{currentCurrency}</span>}
      className={twMerge(
        'rounded-lg text-right! transition-opacity transition-transform duration-300 ease-out focus:-translate-y-0.5',
        className,
      )}
    />
  );
};

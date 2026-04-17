import { useState, useCallback } from 'react';
import type { ISfInputCurrencyProps } from './SfInputCurrency.view';

export const useSfInputCurrency = (props: ISfInputCurrencyProps) => {
  const { value, onChange, currency = 'USD' } = props;
  const [internalValue, setInternalValue] = useState<string>(value !== undefined ? value.toString() : '');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and decimal point
    const val = e.target.value.replace(/[^0-9.]/g, '');
    setInternalValue(val);
    
    if (onChange) {
      onChange(val);
    }
  }, [onChange]);

  const handleBlur = useCallback(() => {
    // Format on blur if needed (delegated to controller usually, but formatting state here)
    if (internalValue) {
      const numVal = parseFloat(internalValue);
      if (!isNaN(numVal)) {
        const formatted = numVal.toFixed(2);
        setInternalValue(formatted);
        if (onChange) {
          onChange(formatted);
        }
      }
    }
  }, [internalValue, onChange]);

  return {
    currentCurrency: currency,
    displayValue: internalValue,
    handleChange,
    handleBlur,
  };
};

import type { InputProps } from 'antd';
import { Input } from 'antd';
import { twMerge } from 'tailwind-merge';

export interface AuthInputProps extends Omit<InputProps, 'type'> {
  inputType?: 'default' | 'password';
}

export const AuthInput = ({ inputType = 'default', className, ...props }: AuthInputProps) => {
  if (inputType === 'password') {
    return (
      <Input.Password
        {...props}
        className={twMerge(
          'w-full rounded-xl bg-sf-bg-light transition-[opacity,transform] duration-300 ease-out focus-within:-translate-y-0.5',
          className,
        )}
      />
    );
  }

  return (
    <Input
      {...props}
      className={twMerge(
        'w-full rounded-xl bg-sf-bg-light transition-[opacity,transform] duration-300 ease-out focus:-translate-y-0.5',
        className,
      )}
    />
  );
};

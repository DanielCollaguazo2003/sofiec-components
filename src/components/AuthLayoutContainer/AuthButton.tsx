import { twMerge } from 'tailwind-merge';
import type { ISfButtonProps } from '../SfButton/SfButton.view';
import { SfButton } from '../SfButton/SfButton.view';

export interface AuthButtonProps extends ISfButtonProps {}

export const AuthButton = ({ className, children, ...props }: AuthButtonProps) => {
  return (
    <SfButton
      {...props}
      className={twMerge(
        'rounded-xl font-semibold shadow-[0_12px_30px_rgba(15,23,42,0.16)] transition-[opacity,transform,box-shadow] duration-300 ease-out hover:opacity-95 hover:scale-[1.02] active:opacity-90 active:scale-[0.98]',
        className,
      )}
    >
      {children}
    </SfButton>
  );
};

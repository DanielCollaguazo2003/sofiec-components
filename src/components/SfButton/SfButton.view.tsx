import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import { twMerge } from 'tailwind-merge';

export interface ISfButtonProps extends ButtonProps {
  isLoading?: boolean;
}

export const SfButton = ({ isLoading, children, className, ...props }: ISfButtonProps) => {
  return (
    <Button 
      {...props} 
      loading={isLoading} 
      className={twMerge(
        'rounded-xl font-medium transition-opacity transition-transform duration-300 ease-out hover:opacity-95 hover:scale-[1.02] active:opacity-90 active:scale-[0.98]',
        className,
      )}
    >
      {children}
    </Button>
  );
};

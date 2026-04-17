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
      className={twMerge('rounded-lg shadow-sm font-medium transition-all duration-200', className)}
    >
      {children}
    </Button>
  );
};

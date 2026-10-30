import type { ReactNode } from 'react';
import { Card } from 'antd';
import type { CardProps } from 'antd';
import { twMerge } from 'tailwind-merge';

export interface SfMetricCardProps extends Omit<CardProps, 'title' | 'extra' | 'variant'> {
  label: ReactNode;
  value: ReactNode;
  extra?: ReactNode;
  variant?: 'plain' | 'accent';
  labelClassName?: string;
  valueClassName?: string;
  contentClassName?: string;
}

export const SfMetricCard = ({
  label,
  value,
  extra,
  variant = 'plain',
  className,
  labelClassName,
  valueClassName,
  contentClassName,
  children,
  bodyStyle,
  bordered = false,
  ...cardProps
}: SfMetricCardProps) => {
  const isAccent = variant === 'accent';

  return (
    <Card
      {...cardProps}
      bordered={bordered}
      bodyStyle={{ padding: 0, ...bodyStyle }}
      className={twMerge(
        'sf-metric-card overflow-hidden rounded-3xl border-0 shadow-[var(--shadow-sf-card)] transition-[transform,box-shadow,opacity] duration-300 ease-out',
        isAccent
          ? 'bg-[color:var(--color-sf-primary)] text-white'
          : 'bg-white/95 text-sf-text-main ring-1 ring-black/5 backdrop-blur-md',
        className,
      )}
    >
      <div className={twMerge('flex h-full flex-col gap-4 p-6 sm:p-7', contentClassName)}>
        <div className="flex items-start justify-between gap-4">
          <p
            className={twMerge(
              'text-xs font-medium uppercase tracking-[0.16em] text-sf-text-secondary',
              isAccent && 'text-white/75',
              labelClassName,
            )}
          >
            {label}
          </p>

          {extra && <div className={twMerge('shrink-0 text-sf-text-secondary', isAccent && 'text-white/80')}>{extra}</div>}
        </div>

        <div
          className={twMerge(
            'tabular-nums text-3xl font-semibold leading-none tracking-tight sm:text-4xl',
            isAccent ? 'text-white' : 'text-sf-text-main',
            valueClassName,
          )}
        >
          {value}
        </div>

        {children}
      </div>
    </Card>
  );
};

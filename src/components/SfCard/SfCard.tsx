import type { ElementType, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface SfCardProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  as?: ElementType;
  showTopAccent?: boolean;
  showBackgroundGlow?: boolean;
}

export const SfCard = ({
  children,
  className,
  contentClassName,
  as: Component = 'section',
  showTopAccent = true,
  showBackgroundGlow = true,
}: SfCardProps) => {
  return (
    <Component
      className={twMerge(
        'relative overflow-hidden rounded-3xl bg-white/92 p-6 shadow-[0_24px_90px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/5 backdrop-blur-md transition-[opacity,transform,box-shadow] duration-300 ease-out',
        className,
      )}
    >
      {showTopAccent && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-200/80 to-transparent"
          aria-hidden
        />
      )}

      {showBackgroundGlow && (
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-sky-100/40 blur-3xl"
          aria-hidden
        />
      )}

      <div className={twMerge('relative', contentClassName)}>{children}</div>
    </Component>
  );
};
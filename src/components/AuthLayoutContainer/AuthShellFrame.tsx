import type { CSSProperties, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface AuthShellFrameProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const AuthShellFrame = ({ children, className, style }: AuthShellFrameProps) => {
  return (
    <main
      className={twMerge(
        'relative min-h-screen w-full bg-[#f6f7fb]',
        className,
      )}
      style={style}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-green-100/40 blur-3xl" />
      </div>

      <div className="relative flex min-h-screen w-full flex-col z-10">
        {children}
      </div>
    </main>
  );
};
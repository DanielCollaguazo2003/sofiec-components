import type { ReactNode } from 'react';

export interface AuthLegalFooterProps {
  leftLinks?: ReactNode;
}

export const AuthLegalFooter = ({ leftLinks }: AuthLegalFooterProps) => {
  return (
    <footer className="flex flex-wrap items-center justify-center gap-6 px-3 py-2 text-[11px] uppercase tracking-[0.28em] text-slate-400 sm:justify-start lg:justify-center">
      {leftLinks ?? (
        <>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Security</span>
          <span>© 2026 Sofi Ec</span>
        </>
      )}
    </footer>
  );
};

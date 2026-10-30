import { LockKeyhole } from 'lucide-react';

export interface AuthBrandHeaderProps {
  brandName?: string;
}

export const AuthBrandHeader = ({ brandName = 'SOFI EC ' }: AuthBrandHeaderProps) => {
  return (
    <header className="flex items-center gap-2 px-1 text-slate-700">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
        <LockKeyhole className="h-4 w-4 text-slate-600" />
      </span>
      <span className="text-sm font-semibold tracking-tight text-slate-700">{brandName}</span>
    </header>
  );
};

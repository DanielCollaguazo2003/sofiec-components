import { twMerge } from 'tailwind-merge';

export interface AuthTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  subtitleClassName?: string;
}

export const AuthTitle = ({ title, subtitle, className, subtitleClassName }: AuthTitleProps) => {
  return (
    <header className={twMerge('space-y-2', className)}>
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-sf-text-main">
        {title}
      </h1>
      {subtitle ? (
        <p className={twMerge('text-sm md:text-base font-medium text-sf-text-secondary', subtitleClassName)}>
          {subtitle}
        </p>
      ) : null}
    </header>
  );
};

import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface AuthLayoutContainerProps {
  formSlot: ReactNode;
  illustrationSlot?: ReactNode;
  className?: string;
  formClassName?: string;
  illustrationClassName?: string;
  reverseOnDesktop?: boolean;
}

export const AuthLayoutContainer = ({
  formSlot,
  illustrationSlot,
  className,
  formClassName,
  illustrationClassName,
  reverseOnDesktop = false,
}: AuthLayoutContainerProps) => {
  return (
    <main
      className={twMerge(
        'relative w-full overflow-visible bg-transparent p-0',
        className,
      )}
    >
      <section
        className={twMerge(
          'relative mx-auto flex w-full max-w-295 max-h-[calc(100vh-8rem)] flex-col gap-0 overflow-hidden rounded-4xl bg-white shadow-2xl ring-1 ring-slate-200/70 lg:flex-row',
          reverseOnDesktop ? 'lg:flex-row-reverse' : 'lg:flex-row',
        )}
      >
        <div
          className={twMerge(
            'flex w-full flex-col justify-center overflow-y-auto bg-white px-6 py-8 sm:px-10 sm:py-10 lg:w-145 lg:px-14 lg:py-12',
            formClassName,
          )}
        >
          {formSlot}
        </div>

        <div
          className={twMerge(
            'hidden lg:flex w-full items-center justify-center overflow-hidden bg-linear-to-br from-[#dff5e5] via-[#eaf6fb] to-[#d7e8fb] px-8 py-12 lg:w-180',
            illustrationClassName,
          )}
        >
          {illustrationSlot}
        </div>
      </section>
    </main>
  );
};

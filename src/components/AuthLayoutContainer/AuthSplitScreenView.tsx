import type { ReactNode } from 'react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AuthBrandHeader } from './AuthBrandHeader';
import { AuthGrowthIllustration } from './AuthGrowthIllustration';
import { AuthLayoutContainer } from './AuthLayoutContainer';
import { AuthLegalFooter } from './AuthLegalFooter';
import { AuthSecurityIllustration } from './AuthSecurityIllustration';
import { AuthShellFrame } from './AuthShellFrame';
import { SfCard } from '../SfCard';

export interface AuthSplitScreenRenderContext {
  isLogin: boolean;
  toggleMode: () => void;
}

export interface AuthSplitScreenViewProps {
  initialMode?: 'login' | 'register';
  loginFormSlot: ReactNode | ((context: AuthSplitScreenRenderContext) => ReactNode);
  registerFormSlot: ReactNode | ((context: AuthSplitScreenRenderContext) => ReactNode);
  loginIllustrationSlot?: ReactNode;
  registerIllustrationSlot?: ReactNode;
  brandName?: string;
  className?: string;
  footerSlot?: ReactNode;
  transitionMs?: number;
}

export const AuthSplitScreenView = ({
  initialMode = 'login',
  loginFormSlot,
  registerFormSlot,
  loginIllustrationSlot,
  registerIllustrationSlot,
  brandName,
  className,
  footerSlot,
  transitionMs = 460,
}: AuthSplitScreenViewProps) => {
  const [isLogin, setIsLogin] = useState(initialMode === 'login');
  const sharedFormCardClassName = 'h-[32rem] sm:h-[34rem]';
  const sharedFormContentClassName = 'h-full overflow-y-auto pr-1';

  const toggleMode = () => {
    setIsLogin((current) => !current);
  };

  const resolvedLoginIllustrationPanel = loginIllustrationSlot ?? <AuthSecurityIllustration />;
  const resolvedRegisterIllustrationPanel = registerIllustrationSlot ?? <AuthGrowthIllustration />;
  const resolvedLoginFormPanel = typeof loginFormSlot === 'function' ? loginFormSlot({ isLogin, toggleMode }) : loginFormSlot;
  const resolvedRegisterFormPanel = typeof registerFormSlot === 'function' ? registerFormSlot({ isLogin, toggleMode }) : registerFormSlot;

  return (
    <AuthShellFrame className={className}>
      
      {/* 1. ESPACIADOR SUPERIOR: Empuja el formulario hacia abajo */}
      <div className="flex-1 w-full" />

      {/* 2. BLOQUE CENTRAL: Header y Formularios (Centrados por la presión de los flex-1) */}
      <div className="space-y-6 w-full max-w-[1180px] mx-auto">
        <AuthBrandHeader brandName={brandName} />

        <div className="relative">
          <div
            className={twMerge(
              'relative z-10 transition-opacity ease-out',
              isLogin 
                ? 'opacity-100 pointer-events-auto' 
                : 'opacity-0 pointer-events-none'
            )}
            style={{ transitionDuration: `${transitionMs}ms` }}
          >
            <AuthLayoutContainer
              reverseOnDesktop={false}
              formSlot={
                <SfCard className={sharedFormCardClassName} contentClassName={sharedFormContentClassName}>
                  {resolvedLoginFormPanel}
                </SfCard>
              }
              illustrationSlot={resolvedLoginIllustrationPanel}
            />
          </div>

          <div
            className={twMerge(
              'absolute inset-0 z-20 transition-opacity ease-out',
              isLogin 
                ? 'opacity-0 pointer-events-none' 
                : 'opacity-100 pointer-events-auto'
            )}
            style={{ transitionDuration: `${transitionMs}ms` }}
          >
            <AuthLayoutContainer
              reverseOnDesktop
              formSlot={
                <SfCard className={sharedFormCardClassName} contentClassName={sharedFormContentClassName}>
                  {resolvedRegisterFormPanel}
                </SfCard>
              }
              illustrationSlot={resolvedRegisterIllustrationPanel}
            />
          </div>
        </div>
      </div>

      {/* 3. ESPACIADOR INFERIOR + FOOTER: Empuja el formulario hacia arriba y ancla el footer al final */}
      <div className="flex-1 flex flex-col justify-end w-full pb-4 mt-8">
        {footerSlot ?? <AuthLegalFooter />}
      </div>

    </AuthShellFrame>
  );
};
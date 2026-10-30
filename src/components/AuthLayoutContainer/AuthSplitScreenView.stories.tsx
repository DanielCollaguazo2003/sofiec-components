import type { Meta, StoryObj } from '@storybook/react';
import { SFConfigProvider } from '../../theme/ConfigProvider';
import { AuthButton } from './AuthButton';
import { AuthInput } from './AuthInput';
import { AuthTitle } from './AuthTitle';
import { AuthSplitScreenView } from './AuthSplitScreenView';

type AuthSlotContext = {
  isLogin: boolean;
  toggleMode: () => void;
};

const renderLoginForm = (context: AuthSlotContext) => <LoginForm toggleMode={context.toggleMode} />;

const renderRegisterForm = (context: AuthSlotContext) => <RegisterForm toggleMode={context.toggleMode} />;

const withProvider = (Story: React.FC) => (
  <SFConfigProvider>
    <Story />
  </SFConfigProvider>
);

const LoginForm = ({ toggleMode }: { toggleMode: () => void }) => (
  <div className="mx-auto w-full max-w-105 space-y-6">
    <div className="space-y-2">
      <AuthTitle title="Bienvenido de nuevo" subtitle="Tus finanzas, encriptadas y seguras" />
      <p className="text-sm text-slate-500">Accede al dashboard, revisa tus movimientos y continúa tu flujo sin fricción.</p>
    </div>

    <div className="space-y-4">
      <div className="space-y-1.5">
        <label htmlFor="login-email" className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Email</label>
        <AuthInput id="login-email" placeholder="nombre@ejemplo.com" autoComplete="email" />
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="login-password" className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Password</label>
          <button type="button" className="text-xs font-semibold text-sf-primary transition-opacity hover:opacity-70">¿Olvidaste tu contraseña?</button>
        </div>
        <AuthInput id="login-password" inputType="password" placeholder="••••••••" autoComplete="current-password" />
      </div>
    </div>

    <div className="space-y-4">
      <AuthButton type="primary" className="w-full h-12 bg-slate-700 hover:bg-slate-700">
        Iniciar Sesión
      </AuthButton>

      <div className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
        <span className="h-px flex-1 bg-slate-200" />
        <span>O continuar con</span>
        <span className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="flex h-12 items-center justify-center rounded-2xl bg-slate-100 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition-transform hover:scale-[1.01]" type="button">
          Google
        </button>
        <button className="flex h-12 items-center justify-center rounded-2xl bg-slate-100 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition-transform hover:scale-[1.01]" type="button">
          Apple
        </button>
      </div>

      <button
        type="button"
        className="w-full text-sm font-medium text-slate-500 transition-opacity duration-300 hover:opacity-75"
        onClick={toggleMode}
      >
        ¿No tienes una cuenta? <span className="font-semibold text-sf-primary">Regístrate aquí</span>
      </button>
    </div>
  </div>
);

const RegisterForm = ({ toggleMode }: { toggleMode: () => void }) => (
  <div className="mx-auto w-full max-w-105 space-y-6">
    <div className="space-y-2">
      <AuthTitle title="Crea tu cuenta" subtitle="Comienza tu viaje financiero" />
      <p className="text-sm text-slate-500">Regístrate en pocos pasos y activa una experiencia más clara, segura y ordenada.</p>
    </div>

    <div className="space-y-4">
      <div className="space-y-1.5">
        <label htmlFor="register-name" className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Nombre completo</label>
        <AuthInput id="register-name" placeholder="Ej. Julian Casasblancas" autoComplete="name" />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="register-email" className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Email</label>
        <AuthInput id="register-email" placeholder="nombre@ejemplo.com" autoComplete="email" />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="register-password" className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Contraseña</label>
        <AuthInput id="register-password" inputType="password" placeholder="••••••••" autoComplete="new-password" />
      </div>
    </div>

    <div className="space-y-4">
      <AuthButton type="primary" className="w-full h-12 bg-slate-700 hover:bg-slate-700">
        Crear Cuenta
      </AuthButton>

      <div className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
        <span className="h-px flex-1 bg-slate-200" />
        <span>O continuar con</span>
        <span className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="flex h-12 items-center justify-center rounded-2xl bg-slate-100 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition-transform hover:scale-[1.01]" type="button">
          Google
        </button>
        <button className="flex h-12 items-center justify-center rounded-2xl bg-slate-100 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition-transform hover:scale-[1.01]" type="button">
          Apple
        </button>
      </div>

      <button
        type="button"
        className="w-full text-sm font-medium text-slate-500 transition-opacity duration-300 hover:opacity-75"
        onClick={toggleMode}
      >
        ¿Ya tienes una cuenta? <span className="font-semibold text-sf-primary">Inicia sesión</span>
      </button>
    </div>
  </div>
);

const ExampleView = () => {
  return (
    <AuthSplitScreenView
      initialMode="register"
      brandName="SOFI EC"
      loginFormSlot={renderLoginForm}
      registerFormSlot={renderRegisterForm}
    />
  );
};

const meta = {
  title: 'Auth/SplitScreenView',
  component: ExampleView,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [withProvider],
} satisfies Meta<typeof ExampleView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: () => <ExampleView />,
};

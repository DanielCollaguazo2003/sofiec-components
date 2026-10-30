import type { Meta, StoryObj } from '@storybook/react';
import { AuthInput } from '../AuthLayoutContainer/AuthInput';
import { AuthButton } from '../AuthLayoutContainer/AuthButton';
import { SfCard } from './SfCard';

const meta = {
  title: 'Auth/SfCard',
  component: SfCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SfCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    className: 'w-[360px]',
    children: <p className="text-sm text-slate-700">Contenido del card</p>,
  },
};

export const LoginExample: Story = {
  args: {
    className: 'w-[360px]',
    contentClassName: 'space-y-4',
    children: (
      <>
        <h3 className="text-xl font-semibold text-slate-900">Iniciar Sesion</h3>
        <AuthInput placeholder="Email" />
        <AuthInput placeholder="Contrasena" inputType="password" />
        <AuthButton className="w-full">Entrar</AuthButton>
      </>
    ),
  },
};

export const MinimalSurface: Story = {
  args: {
    className: 'w-[360px] bg-white',
    showTopAccent: false,
    showBackgroundGlow: false,
    children: <p className="text-sm text-slate-700">Sin decoraciones internas</p>,
  },
};
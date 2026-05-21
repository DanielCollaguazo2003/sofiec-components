import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart3, BriefcaseBusiness, CircleDollarSign, CreditCard, Landmark, PiggyBank } from 'lucide-react';
import { useState } from 'react';
import { AuthShellFrame } from '../AuthLayoutContainer';
import { AppLayout } from './AppLayout';
import type { AppNavItem } from './types';

const navigation: AppNavItem[] = [
  {
    key: 'finanzas',
    label: 'Finanzas',
    icon: <CircleDollarSign className="h-4 w-4" />,
    children: [
      {
        key: 'cuentas',
        label: 'Cuentas',
        icon: <Landmark className="h-4 w-4" />,
      },
      {
        key: 'tarjetas',
        label: 'Tarjetas',
        icon: <CreditCard className="h-4 w-4" />,
      },
    ],
  },
  {
    key: 'inversiones',
    label: 'Inversiones',
    icon: <PiggyBank className="h-4 w-4" />,
  },
  {
    key: 'negocio',
    label: 'Negocio',
    icon: <BriefcaseBusiness className="h-4 w-4" />,
  },
  {
    key: 'reportes',
    label: 'Reportes',
    icon: <BarChart3 className="h-4 w-4" />,
    badge: 'Beta',
  },
];

const ExampleView = () => {
  const [activeKey, setActiveKey] = useState('cuentas');

  return (
    <AuthShellFrame className="bg-[#f7f8fc]">
      <AppLayout
        navigation={navigation}
        activeKey={activeKey}
        user={{
          name: 'Daniel Collaguazo',
          email: 'daniel@sofiec.ec',
        }}
        notificationsCount={3}
        onNavigate={(item) => setActiveKey(item.key)}
      >
        <section className="rounded-3xl bg-white/85 p-8 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sf-text-secondary">Workspace Overview</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-sf-text-main">Dashboard Financiero</h1>
          <p className="mt-3 max-w-2xl text-sm text-sf-text-secondary">
            Esta vista ilustra la base visual del AppLayout con Sidebar + Navbar, cristal esmerilado y navegacion por configuracion.
          </p>
        </section>
      </AppLayout>
    </AuthShellFrame>
  );
};

const meta = {
  title: 'Layout/AppLayout',
  component: ExampleView,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExampleView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: () => <ExampleView />,
};

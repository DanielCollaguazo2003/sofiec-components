import type { FC } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SFConfigProvider } from '../../theme/ConfigProvider';
import { SfMetricCard } from './SfMetricCard';
import { ArrowUpRight, CreditCard, MoreHorizontal } from 'lucide-react';

const withProvider = (Story: FC) => (
  <SFConfigProvider>
    <div className="p-6">
      <Story />
    </div>
  </SFConfigProvider>
);

const meta = {
  title: 'Components/SfMetricCard',
  component: SfMetricCard,
  decorators: [withProvider],
  tags: ['autodocs'],
} satisfies Meta<typeof SfMetricCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {
  args: {
    label: 'Ingresos del mes',
    value: '$128,430.90',
    extra: <ArrowUpRight className="size-4" />,
    className: 'max-w-md',
    children: <p className="text-sm text-sf-text-secondary">+14.2% respecto al período anterior</p>,
  },
};

export const Accent: Story = {
  args: {
    label: 'Cuenta principal',
    value: '•••• 4821',
    extra: <CreditCard className="size-4" />,
    variant: 'accent',
    className: 'max-w-md',
    children: <p className="text-sm text-white/75">Disponible para uso operativo</p>,
  },
};

export const Compact: Story = {
  args: {
    label: 'Movimientos aprobados',
    value: '48',
    extra: <MoreHorizontal className="size-4" />,
    className: 'max-w-sm',
  },
};

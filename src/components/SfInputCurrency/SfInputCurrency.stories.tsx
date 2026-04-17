import type { Meta, StoryObj } from '@storybook/react';
import { SfInputCurrency } from './SfInputCurrency.view';
import { SFConfigProvider } from '../../theme/ConfigProvider';

const withProvider = (Story: React.FC) => (
  <SFConfigProvider>
    <div style={{ padding: '24px', width: '300px' }}>
      <Story />
    </div>
  </SFConfigProvider>
);

const meta = {
  title: 'Features/SfInputCurrency',
  component: SfInputCurrency,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withProvider],
} satisfies Meta<typeof SfInputCurrency>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultUSD: Story = {
  args: {
    currency: 'USD',
    placeholder: '0.00',
    size: 'large',
  },
};

export const EuroCurrency: Story = {
  args: {
    currency: 'EUR',
    value: '1500.50',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    currency: 'USD',
    value: '0.00',
    disabled: true,
  },
};

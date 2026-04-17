import type { Meta, StoryObj } from '@storybook/react';
import { SfSelect } from './SfSelect.view';
import { SFConfigProvider } from '../../theme/ConfigProvider';

const withProvider = (Story: React.FC) => (
  <SFConfigProvider>
    <div style={{ padding: '24px', width: '300px' }}>
      <Story />
    </div>
  </SFConfigProvider>
);

const meta = {
  title: 'Components/SfSelect',
  component: SfSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withProvider],
} satisfies Meta<typeof SfSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample financial data
const bankOptions = [
  { value: 'bofa', label: 'Bank of America' },
  { value: 'chase', label: 'Chase Bank' },
  { value: 'wells', label: 'Wells Fargo' },
  { value: 'citi', label: 'Citibank' },
];

export const Default: Story = {
  args: {
    options: bankOptions,
    placeholder: 'Select a bank...',
    enableAdvancedSearch: true,
  },
};

export const Disabled: Story = {
  args: {
    options: bankOptions,
    placeholder: 'Select a bank...',
    disabled: true,
  },
};

export const Multiple: Story = {
  args: {
    mode: 'multiple',
    options: bankOptions,
    placeholder: 'Select multiple banks...',
    defaultValue: ['chase', 'citi'],
  },
};

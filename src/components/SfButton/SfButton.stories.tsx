import type { Meta, StoryObj } from '@storybook/react';
import { SfButton } from './SfButton.view';
import { SFConfigProvider } from '../../theme/ConfigProvider';

// Envolvemos los componentes en el ConfigProvider para inyectar los tokens y Tailwind base
const withProvider = (Story: React.FC) => (
  <SFConfigProvider>
    <div style={{ padding: '24px' }}>
      <Story />
    </div>
  </SFConfigProvider>
);

const meta = {
  title: 'Components/SfButton',
  component: SfButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withProvider],
} satisfies Meta<typeof SfButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Transfer Funds',
  },
};

export const Loading: Story = {
  args: {
    type: 'primary',
    isLoading: true,
    children: 'Processing...',
  },
};

export const GhostFintech: Story = {
  args: {
    type: 'dashed',
    children: 'Cancel Transaction',
  },
};

import type { FC } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SFConfigProvider } from '../../theme/ConfigProvider';
import { SfActionMenu } from './SfActionMenu';
import { Eye, Pencil, Trash2 } from 'lucide-react';

const withProvider = (Story: FC) => (
  <SFConfigProvider>
    <div className="p-6">
      <Story />
    </div>
  </SFConfigProvider>
);

const meta = {
  title: 'Components/SfActionMenu',
  component: SfActionMenu,
  decorators: [withProvider],
  tags: ['autodocs'],
} satisfies Meta<typeof SfActionMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Ver detalle', icon: <Eye className="size-4" />, onClick: () => undefined },
      { label: 'Editar', icon: <Pencil className="size-4" />, onClick: () => undefined },
      { label: 'Eliminar', icon: <Trash2 className="size-4" />, danger: true, onClick: () => undefined },
    ],
  },
};

import type { FC } from 'react';
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from 'antd';
import { SFConfigProvider } from '../../theme/ConfigProvider';
import { SfFormModal } from './SfFormModal';

const withProvider = (Story: FC) => (
  <SFConfigProvider>
    <div className="p-6">
      <Story />
    </div>
  </SFConfigProvider>
);

const Demo = () => {
  const [open, setOpen] = useState(true);

  return (
    <SfFormModal
      open={open}
      title="Crear registro"
      onCancel={() => setOpen(false)}
      onOk={() => setOpen(false)}
      saveText="Guardar cambios"
    >
      <div className="grid gap-4">
        <Input placeholder="Nombre de la entidad" />
        <Input placeholder="Referencia interna" />
      </div>
    </SfFormModal>
  );
};

const meta = {
  title: 'Components/SfFormModal',
  component: Demo,
  decorators: [withProvider],
  tags: ['autodocs'],
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Demo />,
};

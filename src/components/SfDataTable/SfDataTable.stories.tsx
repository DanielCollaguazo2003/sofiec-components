import type { FC } from 'react';
import type { ColumnsType } from 'antd/es/table';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SFConfigProvider } from '../../theme/ConfigProvider';
import { SfDataTable } from './SfDataTable';
import { SfActionMenu } from '../SfActionMenu/SfActionMenu';
import { Eye, Pencil, Trash2 } from 'lucide-react';

type Row = {
  key: string;
  name: string;
  status: string;
  amount: string;
};

const columns: ColumnsType<Row> = [
  { title: 'Entidad', dataIndex: 'name', key: 'name' },
  { title: 'Estado', dataIndex: 'status', key: 'status' },
  { title: 'Monto', dataIndex: 'amount', key: 'amount', align: 'right' },
];

const dataSource: Row[] = [
  { key: '1', name: 'Tesorería', status: 'Activa', amount: '$84,210.00' },
  { key: '2', name: 'Cobros', status: 'Pendiente', amount: '$12,430.50' },
  { key: '3', name: 'Pagos', status: 'Aprobado', amount: '$54,900.90' },
  { key: '4', name: 'Reservas', status: 'Activa', amount: '$19,230.80' },
];

const withProvider = (Story: FC) => (
  <SFConfigProvider>
    <div className="p-6">
      <Story />
    </div>
  </SFConfigProvider>
);

const meta = {
  title: 'Components/SfDataTable',
  component: SfDataTable,
  decorators: [withProvider],
  tags: ['autodocs'],
} satisfies Meta<typeof SfDataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns,
    dataSource,
    pagination: { pageSize: 3 },
  },
};

export const WithOptionsColumn: Story = {
  args: {
    columns,
    dataSource,
    pagination: { pageSize: 3 },
    optionsColumn: {
      title: '',
      width: 72,
      render: () => (
        <SfActionMenu
          items={[
            { label: 'Ver detalle', icon: <Eye className="size-4" />, onClick: () => undefined },
            { label: 'Editar', icon: <Pencil className="size-4" />, onClick: () => undefined },
            { label: 'Eliminar', icon: <Trash2 className="size-4" />, danger: true, onClick: () => undefined },
          ]}
        />
      ),
    },
  },
};

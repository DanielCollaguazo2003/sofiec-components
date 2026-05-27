import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SFConfigProvider } from '../../theme/ConfigProvider';
import { SfNotification } from './SfNotification';
import { SfButton } from '../SfButton/SfButton.view';

const withProvider = (Story: React.FC) => (
  <SFConfigProvider>
    <div style={{ padding: 24 }}>
      <Story />
    </div>
  </SFConfigProvider>
);

const Demo: React.FC = () => {
  const openInfo = () =>
    SfNotification.info({ message: 'Información', description: 'Mensaje informativo.' });

  const openSuccess = () =>
    SfNotification.success({ message: 'Éxito', description: 'Operación completada correctamente.' });

  const openError = () => SfNotification.error({ message: 'Error', description: 'Algo salió mal.' });

  const openWarning = () =>
    SfNotification.warning({ message: 'Atención', description: 'Toma precauciones.' });

  const openCustom = () =>
    SfNotification.open({
      message: 'Personalizado',
      description: 'Acción con botón',
      btn: (
        <SfButton type="primary" onClick={() => SfNotification.destroy()}>
          Cerrar todas
        </SfButton>
      ),
    });

  const [api, contextHolder] = SfNotification.useNotification();

  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 640 }}>
      {contextHolder}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <SfButton onClick={openInfo}>Info</SfButton>
        <SfButton onClick={openSuccess} type="primary">
          Success
        </SfButton>
        <SfButton onClick={openWarning} type="dashed">
          Warning
        </SfButton>
        <SfButton onClick={openError} type="text">
          Error
        </SfButton>
        <SfButton onClick={openCustom} type="text">
          Custom
        </SfButton>
      </div>

      <div>
        <h4>Hook-based</h4>
        <div style={{ display: 'flex', gap: 8 }}>
          <SfButton
            onClick={() => api.open({ message: 'Desde hook', description: 'Usando useNotification' })}
          >
            Abrir via hook
          </SfButton>
          <SfButton onClick={() => api.success({ message: 'OK', description: 'Hook success' })} type="primary">
            Hook success
          </SfButton>
        </div>
      </div>
    </div>
  );
};

const meta = {
  title: 'Components/SfNotification',
  component: Demo,
  decorators: [withProvider],
  tags: ['autodocs'],
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => <Demo />,
};

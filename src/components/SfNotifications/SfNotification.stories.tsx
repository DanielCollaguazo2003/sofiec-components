import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SFConfigProvider } from '../../theme/ConfigProvider';
import { NotificationsProvider } from './NotificationsProvider';
import { SfButton } from '../SfButton/SfButton.view';
import { useNotification } from '../../hooks';

const withProvider = (Story: React.FC) => (
  <SFConfigProvider>
    <NotificationsProvider>
      <div style={{ padding: 24 }}>
        <Story />
      </div>
    </NotificationsProvider>
  </SFConfigProvider>
);

const Demo: React.FC = () => {
  const { openNotificationWithIcon, destroy } = useNotification();

  const openInfo = () =>
    openNotificationWithIcon({ type: 'info', message: 'Información', description: 'Mensaje informativo.' });

  const openSuccess = () =>
    openNotificationWithIcon({ type: 'success', message: 'Éxito', description: 'Operación completada correctamente.' });

  const openError = () =>
    openNotificationWithIcon({ type: 'error', message: 'Error', description: 'Algo salió mal.' });

  const openWarning = () =>
    openNotificationWithIcon({ type: 'warning', message: 'Atención', description: 'Toma precauciones.' });

  const openCustom = () =>
    openNotificationWithIcon({
      type: 'info',
      message: 'Personalizado',
      description: 'Acción con botón',
      btn: (
        <SfButton type="primary" onClick={() => destroy()}>
          Cerrar todas
        </SfButton>
      ),
    });

  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 640 }}>
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
          <SfButton onClick={() => openNotificationWithIcon({ type: 'info', message: 'Desde hook', description: 'Usando useNotification' })}>
            Abrir via hook
          </SfButton>
          <SfButton onClick={() => openNotificationWithIcon({ type: 'success', message: 'OK', description: 'Hook success' })} type="primary">
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

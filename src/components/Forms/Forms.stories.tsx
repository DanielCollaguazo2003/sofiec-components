import type { Meta } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from 'antd'; // Optional, just for submit rendering
import { SFConfigProvider } from '../../theme/ConfigProvider';

import { 
  FormInput, 
  FormSelect, 
  FormTextarea, 
  FormRadioGroup, 
  FormCheckbox, 
  FormDateRangePicker 
} from './index';

// Wrapper para inyectar métodos de formulario a los cuentos
const FormStoryWrapper = ({ children, defaultValues }: any) => {
  const methods = useForm({
    defaultValues,
    mode: 'onTouched', // Validar instantáneamente cuando tocan y salen
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <SFConfigProvider>
      <FormProvider {...methods}>
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '24px' }}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-2">
            {children(methods)}
            <Button
              type="primary"
              htmlType="submit"
              className="mt-4"
              style={{ width: '100%' }}
            >
              Submit Form
            </Button>
          </form>
        </div>
      </FormProvider>
    </SFConfigProvider>
  );
};

const meta = {
  title: 'Forms/ReactHookForm',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const AllFieldsIntegration = () => (
  // Configuramos reglas de validación manuales solo para propósitos visuales de Storybook
  <FormStoryWrapper defaultValues={{}}>
    {(methods: any) => {
      // Registrar reglas estándar forzando estado de error visual en RHF
      methods.register('email', { required: 'El correo electrónico es obligatorio' });
      methods.register('documentTypeCode', { required: 'Seleccione un tipo' });
      methods.register('description', { required: 'Brinde un pequeño detalle' });
      methods.register('dates', { required: 'Las fechas son obligatorias' });

      return (
        <>
          <FormInput
            name="email"
            label="Correo Electrónico"
            control={methods.control}
            placeholder="usuario@correo.com"
            type="email"
          />

          <FormSelect
            name="documentTypeCode"
            label="Tipo de documento"
            control={methods.control}
            placeholder="Selecciona una opción"
            options={[
              { code: 'passport', name: 'Pasaporte Extranjero' },
              { code: 'national', name: 'ID Nacional' },
            ]}
          />

          <FormTextarea
            name="description"
            label="Motivo de la transferencia"
            control={methods.control}
            placeholder="Explique máximo 200 caracteres..."
          />

          <FormRadioGroup
            name="accountType"
            label="Tipo de Cuenta de Destino"
            control={methods.control}
            options={[
              { code: 'checking', name: 'Corriente' },
              { code: 'savings', name: 'Ahorros' },
            ]}
          />

          <FormDateRangePicker
            startName="startDate"
            endName="endDate"
            label="Periodo Contabilidad (Dates)"
            control={methods.control}
            placeholder={['Inicio', 'Fin']}
          />

          <FormCheckbox
            name="acceptTerms"
            label="Acepto los términos de responsabilidad"
            control={methods.control}
          />
        </>
      );
    }}
  </FormStoryWrapper>
);

export const TriggerErrorState = () => (
  <FormStoryWrapper defaultValues={{}}>
    {(methods: any) => {
      // Imponer error artifical forzado para visualizar CSS
      methods.setError('forceErrorInput', {
        type: 'manual',
        message: 'Esta cuenta presenta una validación en rojo obligatoria',
      });

      return (
        <FormInput
          name="forceErrorInput"
          label="Cuenta Inválida"
          control={methods.control}
          placeholder="000-000-00"
        />
      );
    }}
  </FormStoryWrapper>
);

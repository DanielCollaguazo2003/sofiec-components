import type { MouseEventHandler, ReactNode } from 'react';
import { Modal } from 'antd';
import type { ModalProps } from 'antd';
import { twMerge } from 'tailwind-merge';
import { SfButton } from '../SfButton/SfButton.view';

export interface SfFormModalProps extends Omit<ModalProps, 'footer'> {
  children: ReactNode;
  footer?: ReactNode;
  footerClassName?: string;
  bodyClassName?: string;
  saveText?: ReactNode;
  cancelText?: ReactNode;
}

export const SfFormModal = ({
  children,
  footer,
  footerClassName,
  bodyClassName,
  saveText = 'Guardar',
  cancelText = 'Cancelar',
  confirmLoading,
  onOk,
  onCancel,
  className,
  wrapClassName,
  centered = true,
  destroyOnClose = true,
  maskClosable = false,
  ...modalProps
}: SfFormModalProps) => {
  const handleSave: MouseEventHandler<HTMLButtonElement> = (event) => {
    onOk?.(event);
  };

  const handleCancel: MouseEventHandler<HTMLButtonElement> = (event) => {
    onCancel?.(event);
  };

  const defaultFooter = (
    <div className={twMerge('flex flex-col-reverse gap-3 sm:flex-row sm:justify-end', footerClassName)}>
      <SfButton onClick={handleCancel} type="default">
        {cancelText}
      </SfButton>
      <SfButton onClick={handleSave} type="primary" loading={confirmLoading}>
        {saveText}
      </SfButton>
    </div>
  );

  return (
    <Modal
      {...modalProps}
      centered={centered}
      destroyOnClose={destroyOnClose}
      maskClosable={maskClosable}
      onOk={onOk}
      onCancel={onCancel}
      footer={footer ?? defaultFooter}
      className={twMerge('sf-form-modal', className)}
      wrapClassName={twMerge('sf-form-modal-wrap', wrapClassName)}
    >
      <div className={twMerge('sf-form-modal-body space-y-6', bodyClassName)}>{children}</div>
    </Modal>
  );
};

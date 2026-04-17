import type { ThemeConfig } from 'antd';

export const sfThemeTokens: ThemeConfig = {
  token: {
    colorPrimary: '#1890ff', // Azul financiero por defecto
    borderRadius: 8,
    fontFamily: '"Inter", "Roboto", sans-serif',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#f5222d',
    colorInfo: '#1890ff',
  },
  components: {
    Button: {
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
    },
    Input: {
      controlHeight: 40,
      paddingInline: 16,
    },
    Table: {
      headerBg: '#f8fafc',
      headerColor: '#475569',
      rowHoverBg: '#f1f5f9',
    }
  }
};

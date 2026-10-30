import type { ThemeConfig } from 'antd';

export const sfThemeTokens: ThemeConfig = {
  token: {
    colorPrimary: '#1890FF',
    borderRadius: 12,
    fontFamily: '"Inter", -apple-system, "SF Pro Display", "Roboto", sans-serif',
    colorTextBase: '#1D1D1F',
    colorTextSecondary: '#86868B',
    colorBorder: '#D1D1D6',
    colorSuccess: '#34C759',
    colorWarning: '#FF9500',
    colorError: '#FF3B30',
    colorInfo: '#1890FF',
    controlHeight: 44, // Slightly taller for modern look
  },
  components: {
    Button: {
      controlHeight: 44,
      controlHeightLG: 52,
      controlHeightSM: 36,
      borderRadius: 12,
      paddingInline: 24,
      boxShadow: 'none',
      primaryShadow: 'none',
    },
    Input: {
      controlHeight: 44,
      paddingInline: 16,
      colorBgContainer: '#F2F2F7',
      colorBorder: 'transparent',
      borderRadius: 12,
      activeBorderColor: '#1890FF',
      hoverBorderColor: 'transparent',
      hoverBg: '#E5E5EA',
    },
    Select: {
      controlHeight: 44,
      colorBgContainer: '#F2F2F7',
      colorBorder: 'transparent',
      borderRadius: 12,
      hoverBorderColor: 'transparent',
      activeBorderColor: '#1890FF',
      optionSelectedBg: '#e3f2fd',
    },
    DatePicker: {
      controlHeight: 44,
      colorBgContainer: '#F2F2F7',
      colorBorder: 'transparent',
      borderRadius: 12,
      hoverBorderColor: 'transparent',
      activeBorderColor: '#1890FF',
    },
    Table: {
      headerBg: '#F2F2F7',
      headerColor: '#86868B',
      rowHoverBg: '#f8f8fb',
      borderRadius: 16,
    },
    Card: {
      borderRadius: 16,
      borderRadiusLG: 24,
      colorBorderSecondary: 'transparent',
      boxShadowTertiary: '0 8px 30px rgba(0, 0, 0, 0.04)',
    },
    Modal: {
      borderRadiusLG: 24,
      boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
    }
  }
};

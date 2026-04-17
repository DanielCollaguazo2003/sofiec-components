import React from 'react';
import { ConfigProvider, App } from 'antd';
import { sfThemeTokens } from './tokens';

export interface ISFConfigProviderProps {
  children: React.ReactNode;
  locale?: any; // AntD locale object
  themeOverride?: typeof sfThemeTokens;
}

export const SFConfigProvider = ({ children, locale, themeOverride }: ISFConfigProviderProps) => {
  return (
    <ConfigProvider 
      theme={themeOverride || sfThemeTokens}
      locale={locale}
    >
      {/* App wrapper gives context for message, notification, modal */}
      <App>
        {children}
      </App>
    </ConfigProvider>
  );
};

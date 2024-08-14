import React from 'react';
import { WithProviderProps } from '../index';
import { App, ConfigProvider } from 'antd';
import { ThemeProvider } from 'antd-style';
import ru_RU from 'antd/locale/ru_RU';
import { customTheme, GlobalStyle } from '../../theme';

export type WithAntdProps = WithProviderProps;

export const WithAntd: React.FC<WithAntdProps> = (props) => {
  return (
    <ConfigProvider
      locale={ru_RU}
      theme={customTheme}
    >
      <ThemeProvider>
        <GlobalStyle/>
        <App>
          {props.children}
        </App>
      </ThemeProvider>
    </ConfigProvider>
  );
};

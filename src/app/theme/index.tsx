import React from 'react';
import { Spin, ThemeConfig } from 'antd';
import { commonToken } from './common-token';
import { layoutTokens } from './layout-tokens';
import { menuTokens } from './menu-tokens';
import { LoadingOutlined } from '@ant-design/icons';

export type ComponentTokenBuilder = (common: ThemeConfig['token']) => ThemeConfig['components'];

export { GlobalStyle } from './global-style';

const builderComponentsObject = (...tokens: ComponentTokenBuilder[]): ThemeConfig['components'] => {
  return Object.assign({}, ...tokens.map(item => item(commonToken)));
};

Spin.setDefaultIndicator(<LoadingOutlined/>);

export const customTheme: ThemeConfig = {
  token: commonToken,
  components: builderComponentsObject(
    layoutTokens,
    menuTokens,
  )
};
import { ComponentTokenBuilder } from './index';
import { commonToken } from './common-token';

export const HEADER_STYLE: Readonly<{ HEIGHT: number }> = {
  HEIGHT: 36
};

export const FOOTER_STYLE: Readonly<{ HEIGHT: number }> = {
  HEIGHT: 28
};

export const layoutTokens: ComponentTokenBuilder = () => ({
  Layout: {
    colorBgLayout: commonToken?.colorBgLayout,
    headerHeight: HEADER_STYLE.HEIGHT,
    headerPadding: 0,
    headerColor: commonToken?.colorText,
    headerBg: commonToken?.colorBgLayout,
    footerPadding: 0,
    lightSiderBg: commonToken?.colorBgLayout,
  }
});

import { ComponentTokenBuilder } from './index';
import { commonToken } from './common-token';

export const menuTokens: ComponentTokenBuilder = () => ({
  Menu: {
    itemColor: commonToken?.colorTextTertiary,
    itemSelectedColor: commonToken?.colorText,
    itemBg: commonToken?.colorBgLayout,
    itemSelectedBg: commonToken?.colorBgLayout,
    itemHoverBg: 'rgba(0, 0, 0, 0.06)',
    itemActiveBg: 'rgba(0, 0, 0, 0.09)',
  }
});

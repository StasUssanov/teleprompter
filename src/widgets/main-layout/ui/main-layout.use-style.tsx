import { createStyles } from 'antd-style';
import { HEADER_STYLE } from '../../../app/theme/layout-tokens';

export const useStyle = () => createStyles(({ css, token, prefixCls }) => ({
  headerSlot: css`
      &.${prefixCls}-layout-header {
          display: flex;
          flex-direction: column;
          line-height: ${HEADER_STYLE.HEIGHT / 2}px;
          padding-inline: ${token.padding}px;
          border-bottom: 1px solid ${token.colorBorder};
      }
  `,
  logo: css`
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${(HEADER_STYLE.HEIGHT / 2 - token.marginXXS) * 2}px;
      height: ${HEADER_STYLE.HEIGHT / 2 - token.marginXXS * 2}px;
      margin-block: ${token.marginXXS}px;
      color: ${token.colorText};
      background: ${token.colorFill};
      border-radius: ${token.borderRadius}px;
  `,
  headerLeft: css`
      flex: 1;
      align-items: center;
  `,
  titlePage: css`
      width: 100%;
      height: inherit;
      max-width: ${token.screenXL}px;
      padding-inline: ${token.paddingXL}px;
      margin-inline: auto;

      & > .${prefixCls}-typography {
          margin: 0;
      }
  `,
  titlePageWrapper: css`
      height: ${token.sizeXXL * 1.5}px;
      border-bottom: 1px solid ${token.colorBorder};
      margin-bottom: ${token.margin}px;
  `,
  leftSider: css`
      min-width: 228px;
      max-width: 288px;
  `,
  body: css`
      width: 100%;
      max-width: ${token.screenXL}px;
      margin-inline: auto;
  `,
  content: css`
      display: flex;
      flex-direction: column;
      padding-inline: ${token.paddingXL}px;
  `
}))();

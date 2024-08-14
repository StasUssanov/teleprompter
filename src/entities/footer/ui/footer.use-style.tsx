import { createStyles } from 'antd-style';
import { FOOTER_STYLE } from '../../../app/theme/layout-tokens';

export const useStyle = () => createStyles(({ css, token }) => ({
  root: css`
      height: ${FOOTER_STYLE.HEIGHT}px;
      padding-inline: ${token.padding}px;
      font-size: .75em;
      color: ${token.colorTextSecondary};
      border-top: 1px solid ${token.colorBorder};
  `,
  center: css`
      margin-inline: auto;
  `
}))();

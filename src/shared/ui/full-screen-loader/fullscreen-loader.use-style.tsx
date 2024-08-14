import { createStyles } from 'antd-style';

export const useStyle = () => createStyles(({ css, token }) => ({
  indicator: css`
      font-size: ${token.sizeXXL}px;
      color: ${token.colorWhite};
  `,
}))();

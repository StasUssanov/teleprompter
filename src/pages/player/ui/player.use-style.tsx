import { createStyles } from 'antd-style';

export const useStyle = () => createStyles(({ css, prefixCls }) => ({
  root: css`
      justify-content: center;
      align-items: center;

      & .${prefixCls}-input-number {
          width: 100%;
      }
  `,
}))();

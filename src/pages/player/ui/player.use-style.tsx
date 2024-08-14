import { createStyles } from 'antd-style';

export const useStyle = () => createStyles(({ css,token }) => ({
  root: css`
  `,
  wrapper: css`
      position: relative;
      overflow: hidden;
      flex: 1;
  `,
  cursor: css`
      position: absolute;
      top: calc(50% - 0.75em);
      width: 100%;
      height: 2em;
      background-color: rgba(0, 0, 0, 0.25);
  `,
  text: css`
      font-size: 1em;
      line-height: 2em;
      text-align: center;
  `,
  actions: css`
    margin-block: ${token.marginXS}px;
  `,
}))();

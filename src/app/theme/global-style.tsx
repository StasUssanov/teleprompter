import { createGlobalStyle } from 'antd-style';

export const GlobalStyle = createGlobalStyle`
    html {
        min-height: 100dvh;
    }

    body {
        margin: 0;
        background-color: ${(p) => p.theme.colorBgLayout};
    }

    body,
    #root,
    #root > .${(p) => p.theme.prefixCls}-app,
    #root > .${(p) => p.theme.prefixCls}-app > .${(p) => p.theme.prefixCls}-layout {
        min-height: inherit;
    }
`;

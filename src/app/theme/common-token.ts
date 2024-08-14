import { ThemeConfig } from 'antd';

// const robotoFont = Roboto({
//   preload: true,
//   weight: ['400', '700'],
//   subsets: ['latin', 'cyrillic'],
//   display: 'swap',
// });
//
// export const robotoMonoFont = Roboto_Mono({
//   preload: true,
//   subsets: ['latin', 'cyrillic'],
//   display: 'swap',
// });

export const commonToken: ThemeConfig['token'] = {
  // MapToken - https://ant.design/docs/react/customize-theme#maptoken
  colorBgLayout: '#f5f5f5',
  colorText: 'rgba(0, 0, 0, 0.88)',
  colorTextSecondary: 'rgba(0, 0, 0, 0.65)',
  colorTextTertiary: 'rgba(0, 0, 0, 0.45)',
  // fontFamily: robotoFont.style.fontFamily,
  // fontFamilyCode: robotoMonoFont.style.fontFamily,
};
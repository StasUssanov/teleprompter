import React from 'react';
import { Spin } from 'antd';
// import { useTranslation } from 'react-i18next';
import { LoadingOutlined } from '@ant-design/icons';
import { useStyle } from './fullscreen-loader.use-style';

export const FullscreenLoader: React.FC = () => {
  const { styles: s } = useStyle();
  // const { t } = useTranslation();

   // style={...} нужен, чтобы скрыть текст и иконки, пока не загрузятся стили
  return (
    <Spin
      style={{ color: 'transparent' }}
      spinning={true}
      fullscreen={true}
      size={'large'}
      indicator={<LoadingOutlined className={s.indicator}/>}
      // tip={`${t('message.loading')}...`}
    />
  );
};

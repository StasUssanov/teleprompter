import React from 'react';
import { MainLayout } from '../../../widgets/main-layout';
import { useStyle } from './player.use-style';

export const PlayerPage: React.FC = () => {
  const { styles: s } = useStyle();

  return (
    <MainLayout
      classNames={{
        content: s.root,
      }}
    >
      PlayerPage
    </MainLayout>
  );
};

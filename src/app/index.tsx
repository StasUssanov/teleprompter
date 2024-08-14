import React from 'react';
import { WithProviders } from './providers';
import { PlayerPage } from '../pages/player';

export const App: React.FC = () => {
  return (
    <WithProviders>
      <PlayerPage/>
    </WithProviders>
  );
};

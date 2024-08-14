import React, { PropsWithChildren } from 'react';
import { ProviderStack } from './provider-stack';
import { WithStore } from './with-store';
import { WithAntd } from './with-antd';

export type WithProviderProps<P = unknown> = PropsWithChildren<P>;

export const WithProviders: React.FC<WithProviderProps> = (props) => (
  <ProviderStack
    providers={[
      WithStore,
      WithAntd,
    ]}
  >
    {props.children}
  </ProviderStack>
);

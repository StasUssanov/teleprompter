import React from 'react';
import { Provider } from 'react-redux';
import { WithProviderProps } from '../index';
import { store } from '../../store';

export type WithStoreProps = WithProviderProps;

export const WithStore: React.FC<WithStoreProps> = (props) => (
  <Provider store={store}>
    {props.children}
  </Provider>
);
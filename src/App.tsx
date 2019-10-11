import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { AppRoutes } from './AppRoutes';
import { store } from './redux';

export const App = () => (
  <ReduxProvider store={store}>
    <AppRoutes />
  </ReduxProvider>
);

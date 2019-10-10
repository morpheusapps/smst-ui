import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { SemesterionApp } from './SemesterionApp';
import { store } from './redux';

export const App = () => (
  <ReduxProvider store={store}>
    <SemesterionApp />
  </ReduxProvider>
);

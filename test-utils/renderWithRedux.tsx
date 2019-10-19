import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { rootReducer, SemesterionStates } from '../src/redux/reducers';

export const renderWithRedux = (
  component: React.ReactElement,
  { initialState }: { initialState: SemesterionStates }
) => {
  const store = createStore(rootReducer, initialState);
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
};

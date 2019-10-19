import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { FakeSemesterionStates } from './FakeState/FakeSemesterionStates';
import { rootReducer, SemesterionStates } from '../src/redux/reducers';
import { Fakes } from './Fakes';

export const renderWithReduxAndRouter = (
  component: React.ReactElement,
  {
    route = Fakes.route(),
    history = createMemoryHistory({ initialEntries: [route] }),
    initialState = FakeSemesterionStates()
  }: {
    initialState?: SemesterionStates;
    route?: string;
    history?: MemoryHistory;
  }
) => {
  const store = createStore(rootReducer, initialState);
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{component}</Router>
      </Provider>
    ),
    store
  };
};

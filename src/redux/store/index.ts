import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, SemesterionStates } from '../reducer';

const configureStore = (): Store<SemesterionStates> => {
  const store = createStore(rootReducer, composeWithDevTools());
  return store;
};

export const store = configureStore();

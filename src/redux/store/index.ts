import { createStore, Store, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, SemesterionStates } from '../reducers';
import { rootSaga } from '../sagas';
import { sagaMiddleware } from '../middlewares';

const configureStore = (): Store<SemesterionStates> => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export const store = configureStore();

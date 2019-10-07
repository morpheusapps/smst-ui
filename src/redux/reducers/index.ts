import { combineReducers } from 'redux';
import { authReducer } from './auth/authReducer';

export const rootReducer = combineReducers({
  auth: authReducer
});

export type SemesterionStates = ReturnType<typeof rootReducer>;

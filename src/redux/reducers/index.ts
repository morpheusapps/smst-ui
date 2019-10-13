import { combineReducers } from 'redux';
import { authReducer } from './auth/authReducer';
import { alertReducer } from './alert/alertReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer
});

export type SemesterionStates = ReturnType<typeof rootReducer>;

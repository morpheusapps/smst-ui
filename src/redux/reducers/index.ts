import { combineReducers } from 'redux';
import { authReducer } from './auth/authReducer';
import { alertReducer } from './alert/alertReducer';
import { languageReducer } from './language/languageReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  language: languageReducer
});

export type SemesterionStates = ReturnType<typeof rootReducer>;

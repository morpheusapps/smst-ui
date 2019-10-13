import { Reducer } from 'redux';
import { AlertState } from './AlertState';
import { GlobalActionTypes, AuthActionTypes } from '../../actionTypes';
import { AlertAction } from './AlertAction';

const defaultState = {};

export const alertReducer: Reducer<AlertState, AlertAction> = (
  state = defaultState,
  action: AlertAction
): AlertState => {
  switch (action.type) {
    case AuthActionTypes.THROW_GET_SESSION_ERROR:
    case AuthActionTypes.THROW_LOGOUT_ERROR:
    case GlobalActionTypes.THROW_GLOBAL_ERROR_ALERT:
      return { ...state, message: action.payload.errorMessage };
    default:
      return state;
  }
};

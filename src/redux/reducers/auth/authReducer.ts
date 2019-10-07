import { Reducer } from 'redux';
import { AuthState } from './AuthState';
import { AuthActionTypes } from '../../actionTypes';
import { AuthAction } from './AuthAction';

const defaultState: AuthState = {};

export const authReducer: Reducer<AuthState, AuthAction> = (
  state = defaultState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SAVE_LOGIN_TOKEN: {
      return { ...state, token: action.payload.token };
    }
    case AuthActionTypes.SAVE_PROFILE: {
      return { ...state, profile: action.payload.profile };
    }
    default:
      return state;
  }
};

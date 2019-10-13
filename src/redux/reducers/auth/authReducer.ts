import { Reducer } from 'redux';
import { AuthState } from './AuthState';
import { AuthActionTypes } from '../../actionTypes';
import { AuthAction } from './AuthAction';

const defaultState = {
  profile: null
};

export const authReducer: Reducer<AuthState, AuthAction> = (
  state = defaultState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.CONFIRM_LOGIN: {
      return { ...state, loginError: undefined };
    }
    case AuthActionTypes.THROW_CONFIRM_LOGIN_ERROR: {
      return { ...state, loginError: action.payload.loginError };
    }
    case AuthActionTypes.SAVE_PROFILE: {
      return { ...state, profile: action.payload.profile };
    }
    case AuthActionTypes.REMOVE_PROFILE: {
      return { ...state, profile: undefined };
    }
    case AuthActionTypes.GET_SESSION:
    case AuthActionTypes.LOGOUT:
    case AuthActionTypes.THROW_LOGOUT_ERROR:
    case AuthActionTypes.THROW_GET_SESSION_ERROR:
    default:
      return state;
  }
};

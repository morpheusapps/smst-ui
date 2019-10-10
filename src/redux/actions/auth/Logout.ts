import { Action } from 'redux';
import { AuthActionTypes } from '../../actionTypes/AuthActionTypes';

export interface LogoutAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.LOGOUT;
}

export const LogoutAction = (): LogoutAction => ({
  type: AuthActionTypes.LOGOUT
});

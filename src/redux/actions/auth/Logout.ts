import { Action } from 'redux';
import { AuthActionTypes } from '../../actionTypes';

export interface LogoutAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.LOGOUT;
}

export const Logout = (): LogoutAction => ({
  type: AuthActionTypes.LOGOUT
});

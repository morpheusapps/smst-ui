import { Action } from 'redux';
import { AuthActionTypes } from '../../actionTypes';

export interface ConfirmLoginAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.CONFIRM_LOGIN;
  payload: { token: string };
}

export const ConfirmLogin = (token: string): ConfirmLoginAction => ({
  type: AuthActionTypes.CONFIRM_LOGIN,
  payload: { token }
});

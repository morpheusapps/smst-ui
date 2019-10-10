import { Action } from 'redux';
import { AuthActionTypes } from '../../actionTypes/AuthActionTypes';

export interface ConfirmLoginAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.CONFIRM_LOGIN;
  payload: { token: string };
}

export const ConfirmLoginAction = (token: string): ConfirmLoginAction => ({
  type: AuthActionTypes.CONFIRM_LOGIN,
  payload: { token }
});

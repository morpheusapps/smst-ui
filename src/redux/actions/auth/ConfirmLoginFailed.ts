import { Action } from 'redux';
import { AuthActionTypes } from '../../actionTypes/AuthActionTypes';

export interface ConfirmLoginFailedAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.FAIL_CONFIRM_LOGIN;
}

export const ConfirmLoginFailed = (): ConfirmLoginFailedAction => ({
  type: AuthActionTypes.FAIL_CONFIRM_LOGIN
});

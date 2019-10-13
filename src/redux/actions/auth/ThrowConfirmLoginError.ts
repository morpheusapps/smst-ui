import { Action } from 'redux';
import { AuthActionTypes } from '../../actionTypes';

export interface ThrowConfirmLoginErrorAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.FAIL_CONFIRM_LOGIN;
}

export const ThrowConfirmLoginError = (): ThrowConfirmLoginErrorAction => ({
  type: AuthActionTypes.FAIL_CONFIRM_LOGIN
});

import { Action } from 'redux';
import { AuthActionTypes } from '../../actionTypes';
import { UserErrorMessages } from '../../../const/UserErrorMessages';

export interface ThrowConfirmLoginErrorAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.THROW_CONFIRM_LOGIN_ERROR;
  payload: { loginError: string };
}

export const ThrowConfirmLoginError = (): ThrowConfirmLoginErrorAction => ({
  type: AuthActionTypes.THROW_CONFIRM_LOGIN_ERROR,
  payload: { loginError: UserErrorMessages.AUTH.CONFIRM_LOGIN_ERROR }
});

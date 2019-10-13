import { Action } from 'redux';
import { AuthActionTypes } from '../../actionTypes';
import { UserErrorMessages } from '../../../const/UserErrorMessages';

export interface ThrowLogoutErrorAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.THROW_LOGOUT_ERROR;
  payload: { errorMessage: string };
}

export const ThrowLogoutError = (): ThrowLogoutErrorAction => ({
  type: AuthActionTypes.THROW_LOGOUT_ERROR,
  payload: { errorMessage: UserErrorMessages.AUTH.LOGOUT_ERROR }
});

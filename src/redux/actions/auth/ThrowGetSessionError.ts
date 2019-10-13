import { Action } from 'redux';
import { AuthActionTypes } from '../../actionTypes';
import { UserErrorMessages } from '../../../const/UserErrorMessages';

export interface ThrowGetSessionErrorAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.THROW_GET_SESSION_ERROR;
  payload: { errorMessage: string };
}

export const ThrowGetSessionError = (): ThrowGetSessionErrorAction => ({
  type: AuthActionTypes.THROW_GET_SESSION_ERROR,
  payload: { errorMessage: UserErrorMessages.AUTH.GET_SESSION_ERROR }
});

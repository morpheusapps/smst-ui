import { Action } from 'redux';
import { AuthActionTypes } from '../../actionTypes/AuthActionTypes';

export interface GetSessionAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.GET_SESSION;
}

export const GetSession = (): GetSessionAction => ({
  type: AuthActionTypes.GET_SESSION
});

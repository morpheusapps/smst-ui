import { Action } from 'redux';
import { AuthActionTypes } from '../../actionTypes/AuthActionTypes';

export interface GetSessionAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.GET_SESSION;
}

export const GetSessionAction = (): GetSessionAction => ({
  type: AuthActionTypes.GET_SESSION
});

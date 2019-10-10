import { Action } from 'redux';
import { AuthActionTypes } from '../../actionTypes/AuthActionTypes';

export interface RemoveProfileAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.REMOVE_PROFILE;
}

export const RemoveProfileAction = (): RemoveProfileAction => ({
  type: AuthActionTypes.REMOVE_PROFILE
});

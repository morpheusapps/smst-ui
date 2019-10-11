import { Action } from 'redux';
import { AuthActionTypes } from '../../actionTypes/AuthActionTypes';

export interface RemoveProfileAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.REMOVE_PROFILE;
}

export const RemoveProfile = (): RemoveProfileAction => ({
  type: AuthActionTypes.REMOVE_PROFILE
});

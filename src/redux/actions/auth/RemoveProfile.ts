import { Action } from 'redux';
import { AuthActionTypes } from '../../actionTypes';

export interface RemoveProfileAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.REMOVE_PROFILE;
}

export const RemoveProfile = (): RemoveProfileAction => ({
  type: AuthActionTypes.REMOVE_PROFILE
});

import { Action } from 'redux';
import { AuthActionTypes } from '../../actionTypes/AuthActionTypes';

export interface SaveProfileAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.SAVE_PROFILE;
  payload: { profile?: string };
}

export const SaveProfile = (profile?: string): SaveProfileAction => ({
  type: AuthActionTypes.SAVE_PROFILE,
  payload: { profile }
});

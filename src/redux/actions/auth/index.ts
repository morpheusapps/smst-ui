import { Action } from 'redux';
import { AuthActionTypes } from '../../actionTypes/AuthActionTypes';

export interface ConfirmLoginAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.CONFIRM_LOGIN;
  payload: { token: string };
}

export const ConfirmLoginAction = (token: string): ConfirmLoginAction => ({
  type: AuthActionTypes.CONFIRM_LOGIN,
  payload: { token }
});

export interface GetSessionAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.GET_SESSION;
}

export const GetSessionAction = {
  type: AuthActionTypes.GET_SESSION
};

export interface SaveProfileAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.SAVE_PROFILE;
  payload: { profile: string };
}

export const SaveProfileAction = (profile: string): SaveProfileAction => ({
  type: AuthActionTypes.SAVE_PROFILE,
  payload: { profile }
});

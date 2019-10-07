import { Action } from 'redux';
import { AuthActionTypes } from '../../actionTypes/AuthActionTypes';

export interface SaveLoginTokenAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.SAVE_LOGIN_TOKEN;
  payload: { token: string };
}

export const SaveLoginTokenAction = (token: string): SaveLoginTokenAction => ({
  type: AuthActionTypes.SAVE_LOGIN_TOKEN,
  payload: { token }
});

export interface ConfirmLoginAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.CONFIRM_LOGIN;
}

export const ConfirmLoginAction = (): ConfirmLoginAction => ({
  type: AuthActionTypes.CONFIRM_LOGIN
});

export interface SaveProfileAction extends Action<AuthActionTypes> {
  type: AuthActionTypes.SAVE_PROFILE;
  payload: { profile: string };
}

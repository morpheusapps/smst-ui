import {
  ConfirmLoginAction,
  LogoutAction,
  SaveProfileAction,
  RemoveProfileAction,
  ThrowConfirmLoginErrorAction,
  ThrowLogoutErrorAction,
  ThrowGetSessionErrorAction
} from '../../actions';

export type AuthAction =
  | ConfirmLoginAction
  | ThrowConfirmLoginErrorAction
  | ThrowGetSessionErrorAction
  | LogoutAction
  | ThrowLogoutErrorAction
  | SaveProfileAction
  | RemoveProfileAction;

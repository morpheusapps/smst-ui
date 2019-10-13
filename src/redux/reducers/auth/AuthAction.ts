import {
  ConfirmLoginAction,
  GetSessionAction,
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
  | GetSessionAction
  | ThrowGetSessionErrorAction
  | LogoutAction
  | ThrowLogoutErrorAction
  | SaveProfileAction
  | RemoveProfileAction;

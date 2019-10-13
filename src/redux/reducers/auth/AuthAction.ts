import {
  ConfirmLoginAction,
  GetSessionAction,
  LogoutAction,
  SaveProfileAction,
  RemoveProfileAction,
  ThrowConfirmLoginErrorAction
} from '../../actions';

export type AuthAction =
  | ConfirmLoginAction
  | ThrowConfirmLoginErrorAction
  | GetSessionAction
  | LogoutAction
  | SaveProfileAction
  | RemoveProfileAction;

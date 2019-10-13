import {
  ConfirmLoginAction,
  GetSessionAction,
  LogoutAction,
  SaveProfileAction,
  RemoveProfileAction,
  ConfirmLoginFailedAction
} from '../../actions';

export type AuthAction =
  | ConfirmLoginAction
  | ConfirmLoginFailedAction
  | GetSessionAction
  | LogoutAction
  | SaveProfileAction
  | RemoveProfileAction;

import {
  ConfirmLoginAction,
  GetSessionAction,
  LogoutAction,
  SaveProfileAction,
  RemoveProfileAction
} from '../../actions';

export type AuthAction =
  | ConfirmLoginAction
  | GetSessionAction
  | LogoutAction
  | SaveProfileAction
  | RemoveProfileAction;

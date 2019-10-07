import {
  SaveLoginTokenAction,
  ConfirmLoginAction,
  SaveProfileAction
} from '../../actions/auth';

export type AuthAction =
  | SaveLoginTokenAction
  | ConfirmLoginAction
  | SaveProfileAction;

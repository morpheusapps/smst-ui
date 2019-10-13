import {
  ThrowGlobalErrorAlertAction,
  ThrowGetSessionErrorAction,
  ThrowLogoutErrorAction
} from '../../actions';

export type AlertAction =
  | ThrowGlobalErrorAlertAction
  | ThrowGetSessionErrorAction
  | ThrowLogoutErrorAction;

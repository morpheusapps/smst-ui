import { Action } from 'redux';
import { GlobalActionTypes } from '../../actionTypes';

export interface ThrowGlobalErrorAlertAction extends Action<GlobalActionTypes> {
  type: GlobalActionTypes.THROW_GLOBAL_ERROR_ALERT;
  payload: { errorMessage: string };
}

export const ThrowGlobalErrorAlert = (
  errorMessage: string
): ThrowGlobalErrorAlertAction => ({
  type: GlobalActionTypes.THROW_GLOBAL_ERROR_ALERT,
  payload: { errorMessage }
});

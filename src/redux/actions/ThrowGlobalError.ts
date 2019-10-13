import { Action } from 'redux';
import { GlobalActionTypes } from '../actionTypes';

export interface ThrowGlobalErrorAction extends Action<GlobalActionTypes> {
  type: GlobalActionTypes.THROW_GLOBAL_ERROR;
  payload: { errorMessage: string };
}

export const ThrowGlobalError = (
  errorMessage: string
): ThrowGlobalErrorAction => ({
  type: GlobalActionTypes.THROW_GLOBAL_ERROR,
  payload: { errorMessage }
});

import { createSelector } from 'reselect';
import { SemesterionStates } from '../../redux';

export const isConfirmLoginFailedSelector = createSelector(
  ({ auth }: SemesterionStates): string | undefined => auth.loginError,
  (loginError?: string): boolean => Boolean(loginError)
);

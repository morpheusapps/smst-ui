import { createSelector } from 'reselect';
import { SemesterionStates } from '../../redux';

export const confirmLoginErrorSelector = createSelector(
  ({ auth }: SemesterionStates): string | undefined => auth.loginError,
  (loginError?: string): string => loginError || ''
);

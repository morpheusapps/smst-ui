import { createSelector } from 'reselect';
import { SemesterionStates } from '../../redux';

export const isLoggedSelector = createSelector(
  ({ auth }: SemesterionStates): string | undefined => auth.profile,
  (profile?: string): boolean => Boolean(profile)
);

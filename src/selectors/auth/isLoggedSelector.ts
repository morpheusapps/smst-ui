import { createSelector } from 'reselect';
import { SemesterionStates } from '../../redux';

export const isLoggedSelector = createSelector(
  ({ auth }: SemesterionStates): string | undefined | null => auth.profile,
  (profile?: string | null): boolean => Boolean(profile)
);

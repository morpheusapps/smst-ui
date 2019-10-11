import { createSelector } from 'reselect';
import { SemesterionStates } from '../../redux/reducers';

export const isLoggedSelector = createSelector(
  ({ auth }: SemesterionStates): string | undefined => auth.profile,
  (profile?: string): boolean => Boolean(profile)
);

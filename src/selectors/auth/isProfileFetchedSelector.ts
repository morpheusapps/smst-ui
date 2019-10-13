import { createSelector } from 'reselect';
import { SemesterionStates } from '../../redux';

export const isProfileFetchedSelector = createSelector(
  ({ auth }: SemesterionStates): string | undefined | null => auth.profile,
  (profile?: string | null): boolean => profile !== null
);

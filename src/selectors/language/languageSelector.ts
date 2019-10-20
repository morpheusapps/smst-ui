import { createSelector } from 'reselect';
import { SemesterionStates } from '../../redux';
import { Language } from '../../const/Language';

export const languageSelector = createSelector(
  ({ language }: SemesterionStates): Language => language.language,
  (language: Language): Language => language
);
